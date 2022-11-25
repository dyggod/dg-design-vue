import { createApp } from 'vue';
import dgui from '@dyggod/dg-ui'
console.log('dgui: ', dgui);
import App from './app.vue';
import '@dyggod/dg-ui/dg-ui/dist/style.css';

const app = createApp(App);

app.use(dgui)

app.mount('#app');
