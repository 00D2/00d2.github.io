import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
//import { docsearchPlugin } from "@vuepress/plugin-docsearch";
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
    //docsearchPlugin({
    //  appId: "2ANWAH89K3",
    //  apiKey: "c20703bf7d5909a8179e713b0aa81d22",
    //  indexName: "website_tk",
    //  locales: {
    //    "/": {
    //      placeholder: "搜索",
    //      translations: {
    //        button: {
    //          buttonText: "搜索",
    //          buttonAriaLabel: "搜索",
    //        },
    //        modal: {
    //          searchBox: {
    //            resetButtonTitle: "清除查询条件",
    //            resetButtonAriaLabel: "清除查询条件",
    //            cancelButtonText: "取消",
    //            cancelButtonAriaLabel: "取消",
    //          },
    //          startScreen: {
    //            recentSearchesTitle: "搜索历史",
    //            noRecentSearchesText: "没有搜索历史",
    //            saveRecentSearchButtonTitle: "保存至搜索历史",
    //            removeRecentSearchButtonTitle: "从搜索历史中移除",
    //            favoriteSearchesTitle: "收藏",
    //            removeFavoriteSearchButtonTitle: "从收藏中移除",
    //          },
    //          errorScreen: {
    //            titleText: "无法获取结果",
    //            helpText: "你可能需要检查你的网络连接",
    //          },
    //          footer: {
    //            selectText: "选择",
    //            navigateText: "切换",
    //            closeText: "关闭",
    //            searchByText: "搜索提供者",
    //          },
    //          noResultsScreen: {
    //            noResultsText: "无法找到相关结果",
    //            suggestedQueryText: "你可以尝试查询",
    //            reportMissingResultsText: "你认为该查询应该有结果？",
    //            reportMissingResultsLinkText: "点击反馈",
    //          },
    //        },
    //      },
    //    },
    //  },
    //}),
  ],
});
