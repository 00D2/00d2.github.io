import { arraySidebar } from "vuepress-theme-hope";

export const cisco = arraySidebar([
  "",
  {
    text: "Nexus vPC",
    icon: "cisco",
    prefix: "nexus_vPC/",
    children:[
      //"",
      "vPC_Sticky_Master",
      "vpcAutoRecoveryConfiguration",
    ],
  },
]);