---
icon: clarity:vm-line
title: KVM
author: 犄角蛙
date: 2025-07-06
category:
  - KVM
  - 虚拟化
tag:
  - KVM
  - 虚拟化
---

## 安装前准备工作

### 关闭防火墙及selinux

```bash
systemctl stop firewalld
systemctl disable firwalld
## 关闭防火墙

setenforce 0
sed -i 's/^SELINUX=.*/SELINUX=disabled/' /etc/selinux/config
## 关闭selinux
```

### 开启IPv4路由转发

```bash
sed -i 's/^net.ipv4.ip_forward=.*$/net.ipv4.ip_forward=1/' /etc/sysctl.conf
# 修改net.ipv4.ip_forward=0为net.ipv4.ip_forward=1，开启IPv4路由转发功能。

sysctl --system
# 重新加载配置
```

### 安装KVM

```bash
yum install -y vim tar qemu-kvm qemu-img libvirt libvirt-client virt-install bridge-utils virt-manager virt-viewer
# 安装kvm相关软件

sed -i 's/#group = "root"/group ="root"/g' /etc/libvirt/qemu.conf
sed -i 's/#user = "root"/user ="root"/g' /etc/libvirt/qemu.conf
# 修改qemu的默认权限

systemctl restart libvirtd
# 重启libvirtd服务
```

## 网络

### 修改默认网络

> KVM安装后的默认网段一般为192.168.122.0/24，如有需要可自行进行修改。
>
> KVM默认的配置文件存放目录为/etc/libvirt/qemu，网络配置目录为/etc/libvirt/qemu/networks

#### 修改配置文件

```xml
vim default.xml
# 编辑默认网络的配置文件，内容如下。可自行对相关内容进行调整。

<network>
  <name>default</name>
  <uuid>708b6e04-966a-4232-9cb5-099b8b17220c</uuid>
  <forward mode='nat'/>
  <bridge name='virbr0' stp='on' delay='0'/>
  <mac address='52:54:00:c7:e8:a8'/>
  <ip address='192.168.1.1' netmask='255.255.255.0'>
    <dhcp>
      <range start='192.168.1.2' end='192.168.1.254'/>
    </dhcp>
  </ip>
</network>
```

#### 重新部署网络

```bash
virsh net-destroy default
virsh net-start default
```

### 新增网络

#### 添加配置文件

```bash
cd /etc/libvirt/qemu/networks
# 进入配置目录

cat > storageNetwork.xml <<EOF
<network>
  <name>storageNetwork</name>
  <uuid>379cec38-1d31-4586-a4a7-13cabe018b6c</uuid>
  <bridge name='virbr2' stp='on' delay='0'/>
  <mac address='52:54:00:27:1d:b5'/>
  <ip address='172.16.0.1' netmask='255.255.255.0'>
    <dhcp>
      <range start='172.16.0.10' end='172.16.0.200'/>
    </dhcp>
  </ip>
</network>
EOF
# 创建名为storageNetwork的网络配置文件
```

#### 部署网络

```bash
virsh net-define storageNetwork.xml
virsh net-start storageNetwork
virsh net-autostart storageNetwork
# 部署网络、启动网络，并配置网络自启动
```

## 创建虚拟机

### 使用virt-install安装虚拟机

#### 已经具有安装好操作系统的qcow2磁盘文件

```bash
virt-install \
  --virt-type kvm \               # 虚拟化类型，可以有kvm、qemu类型，kvm性能更好
  --os-variant debian12 \             # 操作系统类型，可以使用osinfo-query os查询支持的系统列表
  --name debian12-template \                # 虚拟机名称
  --memory 8192 \                  # 内存大小（MB）
  --vcpus 4 \                      # 虚拟CPU核心数
  --disk path=/data/debian-12-nocloud-amd64.qcow2,bus=virtio,format=qcow2,cache=none \  # 磁盘配置
  --import \                       # 导入现有镜像
  --network network=default,model=virtio \      # 网络配置1
  --network network=storageNetwork,model=virtio \  # 网络配置2
  --graphics vnc,listen=0.0.0.0,port=-1 \      # 图形显示配置，-1表示端口号随机分配
  --noautoconsole \                # 不自动连接控制台
  --video vga,vram='16384' \        # 视频设备配置
  --console pty,target_type=serial  # 添加串口控制台
```

#### 使用iso文件进行安装

> 创建虚拟机后，可以使用`virt-console`、`virt-viewer`进行操作系统的安装。  
> 还可使用`vncdisplay`查看vnc端口后，使用vnc进行连接访问。  
> **操作系统安装完成后，需要通过virsh edit xx编辑操作系统，将 `<boot dev='cdrom'/> 改为 <boot dev='hd'/>`**

```bash
virt-install \
  --name=vm2 \
  --ram=8192 \
  --vcpus=4 \
  --disk path=/data/ubuntu01.qcow2,size=30,format=qcow2 \
  --cdrom=/iso/ubuntu-22.04-live-server.iso \
  --os-variant=ubuntu22.04 \
  --network network=default,model=virtio \
  --graphics vnc,listen=0.0.0.0,port=-1 \
  --console pty,target_type=serial \
  --boot cdrom,hd,menu=on,uefi=on
```

##### win11安装

```bash
virt-install \
  --name=win11 \
  --ram=8192 \
  --vcpus=4 \
  --disk path=/var/lib/libvirt/images/win11.qcow2,size=100,format=qcow2 \
  --cdrom=/iso/Win11_23H2_Chinese_Simplified.iso \
  --os-variant=win11 \
  --network bridge=br0,model=virtio \
  --graphics spice,listen=127.0.0.1 \
  --video qxl \
  --boot uefi \
  --tpm backend.type=emulator  # TPM模块（Win11必需）
```

### 使用xml配置文件部署虚拟机

> 前提条件，需要具备已经安装好操作系统的qcow2磁盘文件。

```bash
virsh define vm1.xml      # 通过vm1.xml配置文件部署虚拟机
virsh start vm1           # 启动虚拟机vm1
virsh autostart vm1       # 配置虚拟机vm1自启动
```

## 虚拟机管理

### 查看虚拟机

```bash
virsh list

virsh list --all
# 查看所有虚拟机，包含未开机的
```

### 查看虚拟机IP地址

```bash
virsh domifaddr vm1
virsh domifaddr --domain vm1
virsh domifaddr --domain vm1 --source arp
```

### 查看虚拟机配置文件

```bash
virsh edit vm1                # 编辑虚拟机vm1的配置文件
virsh dumpxml --domain vm1    # 查看虚拟机vm1的配置文件 

virsh dumpxml --domain vm1 > /opt/vm1.xml
# 导出虚拟机vm1的配置文件
```

### 连接虚拟机

> 虚拟机创建或成功安装后，有多种方法可以连接虚拟机。

- virt-console
- virt-viewer
- ssh
- vnc

### 虚拟机生命周期管理

#### 虚拟机开机

```bash
virsh start vm1
```

#### 虚拟机关机

```bash
virsh destroy vm1
```

#### 配置虚拟机自启动

```bash
virsh autostart vm1
```

#### 彻底移除一个虚拟机

```bash
virsh undefine vm1
# 移除定义虚拟机vm1

rm -f /data/vm1.qcow2
# 删除磁盘文件
```

### 为虚拟机增加磁盘

#### 创建新磁盘

> 示例：在/data目录下创建名为vm1-disk2的磁盘文件，大小为10G。

```bash
qemu-img create -f qcow2 /data/vm1-disk2.qcow2 10G
```

#### 将磁盘增加给虚拟机

> 示例：将新创建的vm1-disk.qcow2磁盘文件加到vm1虚拟机中，盘符为vdb。

```bash
virsh attach-disk vm1 /data/vm1-disk2.qcow2 vdb --persistent --subdriver qcow2 --cache none
```

## 克隆虚拟机

使用`virt-clone`命令对虚拟机进行克隆。

```bash
virt-clone --original template --name new-vm --file /opt/vm-images/new-vm.qcow2
```
