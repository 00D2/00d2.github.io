import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import { paSidebarConig } from "./sidebar/index";

export default hopeTheme({
  
  author: {
    name: "犄角蛙",
    url: "https://blog.jinguo.link",
    },
  
    logo: "images/favicon-96x96.png",
  
    repo: "https://www.github.com/00D2/00d2.github.io",
  
    docsDir: "docs",
  
    // navbar
    navbar: navbar,
  
    // sidebar
    sidebar: paSidebarConig,
    
    //footer: 'MIT 协议 | Copyright © 2022-present <a href="https://github.com/00D2/00d2.github.io" rel="noopener noreferrer " target="_blank">犄角蛙</a> ',

    displayFooter: true,
    copyright: false,

    pageInfo: ["Author", "Date", "Category", "Tag", "Word", ],
    lastUpdated: true,
    editLink: false,
  
    blog: {
      description: "爱与自由",
      intro: "/about/",
      medias: {
        GitHub: "https://www.github.com/00D2",
      },
    },

    //themeColor: true,
    //{
    //  blue: "#2196f3",
    //  red: "#f26d6d",
    //  green: "#3eaf7c",
    //  orange: "#fb9b5f",
    //  turquoise: "#66cccc",
    //},

    plugins: {
      blog: true,

      icon: {
        assets: "iconify",
        //assets: "//at.alicdn.com/t/c/font_3419447_d2aisik7pt6.css",
        //prefix: "iconify",
      },

      docsearch: {
        appId: "AICWAHLPWU",
        apiKey: "45d5842040f43277ef947f3f940b298b",
        indexName: "jinguo",
        locales: {
          "/": {
            placeholder: "搜索",
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
                },
              },
            },
          },
        },
      },
   
    },
  });
  
