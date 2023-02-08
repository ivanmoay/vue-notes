import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue';
// import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
// import 'ant-design-vue/dist/antd.css';

createApp(App).use(router).mount('#app');
