import { arraySidebar } from "vuepress-theme-hope";

export const network_f5 = arraySidebar([
  "",
  "Http头部HOST为空Nginx返回400错误",
  "f5限制部分源IP访问VS",
  {
    text: "irule",
    icon: "f5",
    prefix: "irule/",
    children:[
      "irule_tuxedo",
    ],
  },
]);