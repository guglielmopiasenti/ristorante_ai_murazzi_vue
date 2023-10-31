import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "/src/App.vue";
import { router } from "/src/assets/router/index.js";
import "/src/assets/css/style.css?t=1698742561556";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.mount("#app");
