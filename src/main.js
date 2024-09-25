import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
//adding pinia to the code
import { createPinia } from 'pinia';

const app = createApp(App);

//use pinia
app.use(createPinia());
app.use(router);

app.mount("#app");