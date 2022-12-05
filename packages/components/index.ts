import { App } from 'vue';
import components from './src/index';
import './src/common/style/font.css';

export * from './src/index';

export default {
  install: (app: App) => {
    components.forEach((c) => app.use(c));
  },
};
