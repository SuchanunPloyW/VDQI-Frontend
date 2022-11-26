import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/tailwind.css";

// import sweet Alert มาใช้งาน
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Select2 from "vue3-select2-component";
import "datatables.net-dt";


import "pdfmake";
import "datatables.net-buttons/js/buttons.colVis";
import "datatables.net-buttons/js/buttons.flash";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";

import LoadScript from "vue-plugin-load-script";

//สร้างตัวแปรมาเก็บ Constant ของ Vue

const app = createApp(App);
app.use(LoadScript);
app.use(store);
app.use(router);
app.use(VueSweetalert2);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Select2", Select2);
app.mount("#app");
