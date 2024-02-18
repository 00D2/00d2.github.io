import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme";
import { viteBundler } from '@vuepress/bundler-vite';


export default defineUserConfig({
  lang: "zh-CN",
  title: "爱凡的世界",
  description: "爱自己的100种方式=爱凡*100",
  
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  base: "/",

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
