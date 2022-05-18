import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
//import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";


export default defineUserConfig({
  lang: "zh-CN",
  title: "紫苹果乐园",
  description: "学习、记录、分享，知识无尽头",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  theme,

  plugins: [
    mdEnhancePlugin({
      container: true,
      footnote: true,
      mark: true,
      tasklist: true,
    }),
    copyCodePlugin,
    //searchPlugin({
    //  locales: {
    //    "/": {
    //      placeholder: "搜索",
    //    },
    //  },
    //}),
  ],
});
