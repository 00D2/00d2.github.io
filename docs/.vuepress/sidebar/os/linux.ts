import { arraySidebar } from "vuepress-theme-hope";

export const linux = arraySidebar([
  "",
  "Shell命令",
  "重置ROOT密码",
  "ssh&sftp",
  {
    text: "文件管理",
    icon: "linux",
    //link: "rhel8/",
    //prefix: "rhel8/",
    collapsable: true,
    children: [
    "filePermissions",
    "fileTypes",
    "archive",
  ]},
  {
    text: "软件管理",
    icon: "software",
    //link: "rhel8/",
    //prefix: "rhel8/",
    collapsable: true,
    children: [
      "YUM",
      "DNF",
  ]},
  {
    text: "Ubuntu",
    icon: "ubuntu",
    collapsable: true,
    link: "ubuntu/",
    prefix: "ubuntu/",
    children: [
      "",
      "aptSource",
      "modifyNetwork",
    ],
  }

]);