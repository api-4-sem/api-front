import axios from "axios";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

axios.defaults.baseURL = "http://localhost:8080/api/";
createApp(App).use(router).mount("#app");
