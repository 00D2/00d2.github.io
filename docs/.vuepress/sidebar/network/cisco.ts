import { arraySidebar } from "vuepress-theme-hope";

export const cisco = arraySidebar([
  "",
  "iOS_Download",
  "dhcpServerUnableAssignIP",
  {
    text: "Nexus vPC",
    icon: "cisco",
    prefix: "nexus_vPC/",
    collapsible: true,
    children: [
      //"",
      "vPC_Sticky_Master",
      "vpcAutoRecoveryConfiguration",
    ],
  },
]);