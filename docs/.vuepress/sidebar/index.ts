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


