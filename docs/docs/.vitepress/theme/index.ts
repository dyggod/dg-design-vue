import Theme from 'vitepress/theme'
import './vitepress.less'
import dgui from 'dg-design-vue'
import 'dg-design-vue/dist/style.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(dgui)
  },
  setup() {
    //解析location，如果是打开根目录或者'/dg-design-vue/'，自动跳转到中文文档
    const path = window.location.pathname
    if (path === '/' || path === '/dg-design-vue/') {
      window.location.href = '/zh/'
    }
  },
}
