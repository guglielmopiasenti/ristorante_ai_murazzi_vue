import { createApp } from "vue";
import "./assets/css/style.css";
import PrimeVue from "primevue/config";
import App from "/src/App.vue";
import { router } from "/src/assets/router/index.js";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.mount("#app");
