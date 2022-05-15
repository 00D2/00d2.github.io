import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { 
    text: "操作系统",
    icon: "OS",
    children:[
      { 
        text: "Linux",
        icon: "linux",
        link: "/os/linux/",
      },
      { 
        text: "Windows",
        icon: "windows",
        link: "/os/windows/",
      },
    ],
  },
  { 
    text: "网络技术",
    icon: "network",
    children:[
      {
        text: "Cisco",
        icon: "cisco",
        link: "/network/cisco/"
      },
    ],  
  },
  { 
    text: "工具",
    icon: "tool",
    children:[
      {
        text: "Git",
        icon: "git",
        link: "/tools/Git/",
      },
      {
        text: "Travis CI",
        icon: "git",
        link: "/tools/Travis CI/",
      },
      {
        text: "Docker",
        icon: "docker",
        link: "/tools/Docker/",
      },
      {
        text: "K8S",
        icon: "docker",
        link: "/tools/K8S/",
      },
      {
        text: "Vuepress",
        icon: "vuepress",
        link: "/tools/Vuepress/",
      },
  ]},
  {
    text: "索引",
    icon: "tree",
    children:[
      { text: "分类", icon: "categoryselected", link: "/Category" },
      { text: "标签", icon: "tag", link: "/Tag" },
      { text: "时间轴", icon: "time", link: "/Timeline" },
    ],
  },
  {
    text: "强大的博客们",
    icon: "blog",
    children: [
      {
        text: "Mr.Hope",
        icon: "hot",
        children: [
          { text: "博主主页", link: "https://mrhope.site/" },
          { text: "vuepress-theme-hope", link: "https://vuepress-theme-hope.github.io/v2/zh/" },
          { text: "VS Code", link: "https://mrhope.site/software/vscode/" },
          { text: "Git", link: "https://mrhope.site/software/git/" },
        ],
      },
      {
        text: "vdoing",
        icon: "hot",
        children: [
          { text: "博主主页", link: "https://xugaoyi.com/" },
          { text: "好站收藏", link: "https://xugaoyi.com/pages/beb6c0bd8a66cea6/#%E6%8E%A8%E8%8D%90" },
        ],
      },
      {
        text: "阮一峰的网络日志",
        icon: "hot",
        link: "https://www.ruanyifeng.com/",
      },
    ],
  },
  { text: "关于", icon: "about", link: "/about/" },
  //"/category",
  //{
  //  text: "网络技术",
  //  icon: "edit",
  //  prefix: "/network/",
  //  children: [
  //    {
  //      text: "文章 1-4",
  //      icon: "edit",
  //      prefix: "article/",
  //      children: [
  //        { text: "文章 1", icon: "edit", link: "article1" },
  //        { text: "文章 2", icon: "edit", link: "article2" },
  //        "article3",
  //        "article4",
  //      ],
  //    },
  //    {
  //      text: "文章 5-12",
  //      icon: "edit",
  //      children: [
  //        {
  //          text: "文章 5",
  //          icon: "edit",
  //          link: "article/article5",
  //        },
  //        {
  //          text: "文章 6",
  //          icon: "edit",
  //          link: "article/article6",
  //        },
  //        "article/article7",
  //        "article/article8",
  //      ],
  //    },
  //    { text: "文章 9", icon: "edit", link: "article9" },
  //    { text: "文章 10", icon: "edit", link: "article10" },
  //    "article11",
  //    "article12",
  //  ],
  //},
]);
