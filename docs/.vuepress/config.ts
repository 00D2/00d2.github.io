import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme";


export default defineUserConfig({
  lang: "zh-CN",
  title: "爱凡的世界",
  description: "爱自己的100种方式=爱凡*100",

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

  //plugins: [
  //  docsearchPlugin({
  //    appId: "AICWAHLPWU",
  //    apiKey: "45d5842040f43277ef947f3f940b298b",
  //    indexName: "jinguo",
  //    locales: {
  //      "/": {
  //        placeholder: "搜索",
  //        translations: {
  //          button: {
  //            buttonText: "搜索",
  //            buttonAriaLabel: "搜索",
  //          },
  //          modal: {
  //            searchBox: {
  //              resetButtonTitle: "清除查询条件",
  //              resetButtonAriaLabel: "清除查询条件",
  //              cancelButtonText: "取消",
  //              cancelButtonAriaLabel: "取消",
  //            },
  //            startScreen: {
  //              recentSearchesTitle: "搜索历史",
  //              noRecentSearchesText: "没有搜索历史",
  //              saveRecentSearchButtonTitle: "保存至搜索历史",
  //              removeRecentSearchButtonTitle: "从搜索历史中移除",
  //              favoriteSearchesTitle: "收藏",
  //              removeFavoriteSearchButtonTitle: "从收藏中移除",
  //            },
  //            errorScreen: {
  //              titleText: "无法获取结果",
  //              helpText: "你可能需要检查你的网络连接",
  //            },
  //            footer: {
  //              selectText: "选择",
  //              navigateText: "切换",
  //              closeText: "关闭",
  //              searchByText: "搜索提供者",
  //            },
  //            noResultsScreen: {
  //              noResultsText: "无法找到相关结果",
  //              suggestedQueryText: "你可以尝试查询",
  //              reportMissingResultsText: "你认为该查询应该有结果？",
  //              reportMissingResultsLinkText: "点击反馈",
  //            },
  //          },
  //        },
  //      },
  //    },
  //  }),
  //],
  
});
