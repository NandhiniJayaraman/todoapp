import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; 
import './index.css'
import './assets/styles/style.css'
import { create, NButton, NInput, NCard } from 'naive-ui';

// Create a Naive UI instance
const naive = create({
  components: [NButton, NInput, NCard] // You can specify the components you need
});


createApp(App).use(router) 
.use(naive)
.mount('#app')
