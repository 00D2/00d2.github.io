import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { 
    text: "操作系统",
    icon: "ix:operating-system",
    children:[
      { 
        text: "Linux",
        icon: "linux",
        link: "/os/linux/",
      },
      { 
        text: "Windows",
        icon: "mingcute:windows-fill",
        link: "/os/windows/",
      },
      { 
        text: "DNS",
        icon: "eos-icons:dns",
        link: "/os/dns/",
      },
      { 
        text: "生产力软件",
        icon: "software",
        link: "/os/software/",
      },
      {
        text: "AI",
        icon: "hugeicons:artificial-intelligence-04",
        link: "/os/AI/",
      },
    ],
  },
  { 
    text: "网络技术",
    icon: "streamline:network",
    children:[
      {
        text: "Cisco",
        icon: "cib:cisco",
        link: "/network/cisco/"
      },
      {
        text: "f5",
        icon: "simple-icons:f5",
        link: "/network/f5/",
      },
      {
        text: "其他",
        icon: "other",
        link: "/network/other/"
      },
    ],  
  },
  { 
    text: "工具",
    icon: "ri:tools-fill",
    children:[
      {
        text: "Office",
        icon: "arcticons:microsoft-office",
        link: "/tools/Office/"
      },
      {
        text: "Git",
        icon: "fa-brands:git",
        link: "/tools/Git/",
      },
      {
        text: "Ansible",
        icon: "ansible",
        link: "/tools/Ansible/",
      },
      {
        text: "Travis CI",
        icon: "travisci",
        link: "/tools/Travis CI/",
      },
      {
        text: "Docker",
        icon: "mdi:docker",
        link: "/tools/Docker/",
      },
      {
        text: "K8S",
        icon: "kubernetes",
        link: "/tools/K8S/",
      },
      {
        text: "Vuepress",
        icon: "vue",
        link: "/tools/Vuepress/",
      },
      {
        text: "好用的工具",
        icon: "ri:tools-fill",
        link: "/tools/awesomeTools",
      },
  ]},
  //{
  //  text: "索引",
  //  icon: "tree",
  //  children:[
  //    { text: "分类", icon: "categoryselected", link: "/category" },
  //    { text: "标签", icon: "tag", link: "/Tag" },
  //    { text: "时间轴", icon: "time", link: "/Timeline" },
  //  ],
  //},
  {
    text: "强大的博客们",
    icon: "fa6-solid:blog",
    link: "/blog",
  },
  { text: "关于", icon: "ix:about", link: "/about/" },
]);
