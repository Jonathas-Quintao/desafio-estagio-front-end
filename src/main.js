import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);
const pinia = createPinia(); 

app.use(router);
app.use(pinia); 
app.use(vuetify); 

app.mount('#app');
