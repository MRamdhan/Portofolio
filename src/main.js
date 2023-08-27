import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Home from './components/Home.vue';

const app = createApp(App)

app.use(router)

// Menambahkan kode untuk merender komponen Home.vue di dalam elemen dengan ID 'app'
app.component('Home', Home);

app.mount('#app')
