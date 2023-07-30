import { createApp } from "vue";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwindcss.css";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

const app = createApp(App);

app.use(router);
app.use(PerfectScrollbar);

app.mount("#app");
