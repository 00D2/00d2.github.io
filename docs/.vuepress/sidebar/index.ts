import { sidebar } from "vuepress-theme-hope";
import { linux } from "./linux";
import { windows } from "./windows";
import { network } from "./network";
import { cisco } from "./cisco";
import { git } from "./git";
import { ansible } from "./ansible";

export const paSidebarConig = sidebar({
  "/os/linux/": linux,
  "/os/windows/": windows,
  "/network/": network,
  "/network/cisco/": cisco,
  "/tools/Git/": git,
  "/tools/Ansible/": ansible,
});

//export default sidebar([
//
//  "/",
//  //"/home",
//  //"/slide", 
//  "/os/": os,
//  //{
//  //  text: "操作系统",
//  //  icon: "OS",
//  //  prefix: "/os/",
//  //  collapsable: true,
//  //  //link: "/os/",
//  //  children: "structure",
//  //},
//  {
//    text: "网络技术",
//    icon: "network",
//    collapsable: true,
//    prefix: "/network/",
//    link: "/network/",
//    children: "structure",
//  },
//  {
//    text: "工具",
//    icon: "tool",
//    collapsable: true,
//    prefix: "/tools/",
//    children: "structure",
//  },
//  //{
//  //  text: "文章",
//  //  icon: "note",
//  //  prefix: "/network/",
//  //  children: [
//  //    {
//  //      text: "文章 1-4",
//  //      icon: "note",
//  //      collapsable: true,
//  //      prefix: "article/",
//  //      children: ["article1", "article2", "article3", "article4"],
//  //    },
//  //    {
//  //      text: "文章 5-12",
//  //      icon: "note",
//  //      children: [
//  //        {
//  //          text: "文章 5-8",
//  //          icon: "note",
//  //          collapsable: true,
//  //          prefix: "article/",
//  //          children: ["article5", "article6", "article7", "article8"],
//  //        },
//  //        {
//  //          text: "文章 9-12",
//  //          icon: "note",
//  //          children: ["article9", "article10", "article11", "article12"],
//  //        },
//  //      ],
//  //    },
//  //  ],
//  //},
//]);
