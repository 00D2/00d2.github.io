import { arraySidebar } from "vuepress-theme-hope";

export const linux = arraySidebar([
  "",
  "Shell命令",
  "resetRootPasswd_RHEL",
  "ssh",
  {
    text: "文件管理",
    icon: "uil:linux",
    //link: "rhel8/",
    //prefix: "rhel8/",
    collapsible: true,
    children: [
    "filePermissions",
    "fileTypes",
    "archive",
  ]},
  {
    text: "软件管理",
    icon: "uil:linux",
    //link: "rhel8/",
    //prefix: "rhel8/",
    collapsible: true,
    children: [
      "YUM",
      "DNF",
  ]},
  {
    text: "Ubuntu",
    icon: "mdi:ubuntu",
    link: "ubuntu/",
    prefix: "ubuntu/",
    collapsible: true,
    children: [
      "",
      "aptSource",
      "modifyNetwork",
    ],
  },
  {
    text: "Debian",
    icon: "mdi:debian",
    link: "debian/",
    prefix: "debian/",
    collapsible: true,
    children: [
      "",
      "apt_viaProxy",
    ],
  }
]);