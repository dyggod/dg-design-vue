import Theme from 'vitepress/theme'
import './vitepress.less'
import dgui from 'dg-design-vue'
import 'dg-design-vue/dist/style.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(dgui)
  }
}
