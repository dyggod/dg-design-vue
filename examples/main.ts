import { createApp } from 'vue';
import dgui from 'dg-design-vue'
console.log('dgui: ', dgui);
import App from './app.vue';
import 'dg-design-vue/dist/style.css';

const app = createApp(App);

app.use(dgui)

app.mount('#app');
