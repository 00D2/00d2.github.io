import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import { paSidebarConig } from "./sidebar/index";

export default hopeTheme({

  author: {
    name: "小苹果儿",
    url: "https://www.jinguo.tk",
    },
  
    license: "MIT",
  
    iconPrefix: "iconfont icon-",
  
    logo: "/logo.svg",
  
    repo: "https://www.github.com/00D2/00d2.github.io",
  
    docsDir: "docs",
  
    // navbar
    navbar: navbar,
  
    // sidebar
    sidebar: paSidebarConig,
    headerDepth: 2,

    //footer: "MIT Licensed | Copyright © 2022-present 小苹果儿",
  
    displayFooter: false,

    pageInfo: ["Author", "Date", "Category", "Tag", ],
    lastUpdated: true,
    editLink: false,
  
    blog: {
      description: "一个在学习的小朋友",
      intro: "/about/",
      medias: {
        //Baidu: "https://example.com",
        //Bitbucket: "https://example.com",
        //Dingding: "https://example.com",
        //Discord: "https://example.com",
        //Dribbble: "https://example.com",
        //Email: "mailto:897219531@qq.com",
        //Evernote: "https://example.com",
        //Facebook: "https://example.com",
        //Flipboard: "https://example.com",
        //Gitee: "https://example.com",
        GitHub: "https://www.github.com/00D2",
        //Gitlab: "https://example.com",
        //Gmail: "https://example.com",
        //Instagram: "https://example.com",
        //Lines: "https://example.com",
        //Linkedin: "https://example.com",
        //Pinterest: "https://example.com",
        //Pocket: "https://example.com",
        //QQ: "https://example.com",
        //Qzone: "https://example.com",
        //Reddit: "https://example.com",
        //Rss: "https://example.com",
        //Steam: "https://example.com",
        //Twitter: "https://example.com",
        //Wechat: "https://example.com",
        //Weibo: "https://example.com",
        //Whatsapp: "https://example.com",
        //Youtube: "https://example.com",
        //Zhihu: "https://example.com",
      },
    },
  
    //encrypt: {
    //  config: {
    //    "/guide/encrypt.html": ["1234"],
    //  },
    //},
  
    plugins: {
      blog: {
        autoExcerpt: true,
      },
  
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
      //mdEnhance: {
      //  enableAll: true,
      //  presentation: {
      //    plugins: ["highlight", "math", "search", "notes", "zoom"],
      //  },
      //},
    },
  });
  
