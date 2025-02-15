import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme";
import { viteBundler } from '@vuepress/bundler-vite';
import { shikiPlugin } from '@vuepress/plugin-shiki';

export default defineUserConfig({
  lang: "zh-CN",
  title: "向往自由",
  description: "自由和生活到底是什么关系",
  
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
