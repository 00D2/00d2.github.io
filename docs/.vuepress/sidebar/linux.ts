import { arraySidebar } from "vuepress-theme-hope";

export const linux = arraySidebar([
  "",
  "Shell命令",
  "重置ROOT密码",
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

]);