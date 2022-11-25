import Theme from 'vitepress/theme'
import './vitepress.less'
import dgui from '@dyggod/dg-ui'
import '@dyggod/dg-ui/dg-ui/dist/style.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(dgui)
  }
}
