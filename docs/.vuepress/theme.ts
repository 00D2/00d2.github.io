import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import { paSidebarConig } from "./sidebar/index";

export default hopeTheme({

  author: {
    name: "果果儿",
    url: "https://www.jinguo.tk",
    },
  
  //  license: "MIT",
  
    iconAssets: "iconfont",
    iconPrefix: "iconfont icon-",
  
    logo: "/logo.svg",
  
    repo: "https://www.github.com/00D2/00d2.github.io",
  
    docsDir: "docs",
  
    // navbar
    navbar: navbar,
  
    // sidebar
    sidebar: paSidebarConig,
    headerDepth: 2,

    //footer: "MIT Licensed | Copyright © 2022-present 果果儿",
  
    displayFooter: false,

    pageInfo: ["Author", "Date", "Category", "Tag", "Word", ],
    lastUpdated: true,
    editLink: false,
  
    blog: {
      description: "永远最爱超凡圣",
      intro: "/about/",
      medias: {
        //Baidu: "https://example.com",
        //Flipboard: "https://example.com",
        //Gitee: "https://example.com",
        GitHub: "https://www.github.com/00D2",
        //Gitlab: "https://example.com",

      },
    },

    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
      turquoise: "#66cccc",
    },

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
   
      // 如果你不需要评论，可以直接删除 comment 配置，
      // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
      // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
      //comment: {
      //  /**
      //   * Using giscus
      //   */
      //  type: "giscus",
      //  repo: "vuepress-theme-hope/giscus-discussions",
      //  repoId: "R_kgDOG_Pt2A",
      //  category: "Announcements",
      //  categoryId: "DIC_kwDOG_Pt2M4COD69",
  //
      //  /**
      //   * Using twikoo
      //   */
      //  // type: "twikoo",
      //  // envId: "https://twikoo.ccknbc.vercel.app",
  //
      //  /**
      //   * Using Waline
      //   */
      //  // type: "waline",
      //  // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
      //},
  //
    },
  });
  
