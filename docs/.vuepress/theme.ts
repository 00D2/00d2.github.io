import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import { paSidebarConig } from "./sidebar/index";

export default hopeTheme({

  author: {
    name: "小苹果",
    url: "https://www.jinguo.tk",
    },
  
  //  license: "MIT",
  
  iconAssets: "//at.alicdn.com/t/c/font_3419447_565avriyo14.css",
  //  iconAssets: "iconfont",
  //  iconPrefix: "iconfont icon-",
  
    logo: "/logo.svg",
  
    repo: "https://www.github.com/00D2/00d2.github.io",
  
    docsDir: "docs",
  
    // navbar
    navbar: navbar,
  
    // sidebar
    sidebar: paSidebarConig,
    headerDepth: 2,

    //footer: "MIT Licensed | Copyright © 2022-present 果果儿",
  
    //displayFooter: false,

    footer: 'MIT 协议 | Copyright © 2022-present <a href="https://github.com/00D2/00d2.github.io" rel="noopener noreferrer " target="_blank">小苹果儿</a> ',
    displayFooter: true,
    copyright: false,

    pageInfo: ["Author", "Date", "Category", "Tag", "Word", ],
    lastUpdated: true,
    editLink: false,
  
    blog: {
      description: "永远最爱超凡圣",
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

    mdEnhance: ({
      container: true,
      footnote: true,
      mark: true,
      tasklist: true,
      tabs: true,
      sub: true,
      sup: true,
      codetabs: true,
    }),
   
    },
  });
  
