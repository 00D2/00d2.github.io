import { sidebar } from "vuepress-theme-hope";
import { linux } from "./linux";
import { windows } from "./windows";
import { network } from "./network";
import { cisco } from "./cisco";
import { git } from "./git";
import { ansible } from "./ansible";
import { about } from "./about";
import { network_other } from "./network_other";
import { docker } from "./docker";
import { dns } from "./dns";


export const paSidebarConig = sidebar({
  "": [""],
  "/os/linux/": linux,
  "/os/windows/": windows,
  "/network/": network,
  "/network/cisco/": cisco,
  "/network/other/": network_other,
  "/tools/Git/": git,
  "/tools/Ansible/": ansible,
  "/about/": about,
  "/tools/Docker/": docker,
  "/os/dns/": dns,
});


