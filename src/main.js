import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";   //引用element-plus
import "../node_modules/element-plus/dist/index.css";  //引用element-plus
import axios from "axios";
import VueAxios from "vue-axios";


// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";
//import 'element-plus/dist/index.css'
// import test from "../src/views/LandingPages/test/Sections/sectiontest.vue"

const app = createApp(App);
app.use(ElementPlus);  //引用element-plus

app.use(VueAxios,axios);
app.use(createPinia());
app.use(router);
app.use(materialKit);
// app.use(test);
app.mount("#app");



