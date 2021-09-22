import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//配置Antd
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

//配置请求数据
import {AxiosInstance } from "axios";
import Axios from "axios";
 
//全局配置Axios
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $axios: AxiosInstance;
    }
}
let app=createApp(App)
app.config.globalProperties.$axios=Axios;  //this.Axios
app.use(router)
// app.use(Antd)
app.mount('#app')


// createApp(App).use(store).use(router).mount('#app')






