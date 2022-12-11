import { arraySidebar } from "vuepress-theme-hope";

export const cisco = arraySidebar([
  "",
  {
    text: "Nexus vPC",
    icon: "cisco",
    prefix: "nexus_vPC/",
    collapsable: true,
    children:[
      //"",
      "vPC_Sticky_Master",
      "vpcAutoRecoveryConfiguration",
    ],
  },
]);