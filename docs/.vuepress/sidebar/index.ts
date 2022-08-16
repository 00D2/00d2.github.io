import { sidebar } from "vuepress-theme-hope";
import { linux } from "./linux";
import { windows } from "./windows";
import { cisco, network_f5, network_other } from "./network";
import { git } from "./git";
import { ansible } from "./ansible";
import { about } from "./about";
import { docker } from "./docker";
import { dns } from "./dns";


export const paSidebarConig = sidebar({
  "": [""],
  "/os/linux/": linux,
  "/os/windows/": windows,
  "/os/dns/": dns,
  "/network/cisco/": cisco,
  "/network/other/": network_other,
  "/network/f5/": network_f5,
  "/tools/Git/": git,
  "/tools/Ansible/": ansible,
  "/tools/Docker/": docker,
  "/about/": about,
});


