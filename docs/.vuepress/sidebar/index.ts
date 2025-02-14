import { sidebar } from "vuepress-theme-hope";
import { linux, windows, dns, software } from "./os";
import { cisco, network_f5, network_other } from "./network";
import { ansible, docker, git, office } from "./tools";
import { about } from "./about";

export const paSidebarConig = sidebar({
  "": [""],
  "/os/linux/": linux,
  "/os/windows/": windows,
  "/os/dns/": dns,
  "/os/software/": software,
  "/network/cisco/": cisco,
  "/network/other/": network_other,
  "/network/f5/": network_f5,
  "/tools/Git/": git,
  "/tools/Office/": office,
  "/tools/Ansible/": ansible,
  "/tools/Docker/": docker,
  "/about/": about,
});


