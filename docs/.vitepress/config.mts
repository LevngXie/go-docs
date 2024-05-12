import {defineConfig} from 'vitepress'
import nav from "./nav"
import sidebar from "./sidebar";

const head = [
    ['link', {
        rel: 'icon',
        href: '/logo.png'
    }]
]
// 页脚配置
const footer = {
    // 消息
    message: 'MIT Licensed',
    // 版权
    copyright: '版权声明：本中文文档内容版权为 <a href="" target="_black" >Levng</a> 所有，保留所有权利。'
}

const docFooter = {
    prev: '🫲',
    next: '🫱'
}


// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Go",
    description: "Go语言文档库",
    base: "/go-docs/",
    lang: "zh-CN",
    ignoreDeadLinks: true,
    markdown: {
        lineNumbers: true
    },
    head,
    footer,
    // 主题配置
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav,

        sidebar,

        footer,

        docFooter,

        outline: {
            level: 'deep',
            label: '本页目录'
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/LevngXie/go-docs'}
        ],
        search: {
            provider: 'local'
        }
    }
})
