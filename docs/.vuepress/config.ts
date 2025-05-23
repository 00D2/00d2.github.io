import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme";
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  lang: "zh-CN",
  title: "一只小青蛙",
  description: "",
  
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  base: "/",

  //markdown: {
  //  header: {
  //    // extract levels you need
  //    levels: [2, 3, 4, 5, 6],
  //  },
  //},

  //head: [
  //  [
  //    "link",
  //    {
  //      rel: "stylesheet",
  //      href: "//at.alicdn.com/t/c/font_3419447_l430o5k6itd.css",
  //    },
  //  ],
  //],

  theme,
  
});
