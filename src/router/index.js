import { createRouter, createWebHistory } from "vue-router";
// import Layout
import FrontendLayout from "@/layouts/Frontend.vue";
import BackendLayout from "@/layouts/Backend.vue";

//import Views
//Frontend
import HomeView from "@/views/frontend/HomeView.vue";
import NotFound404 from "@/views/frontend/NotFound404.vue";
//Backend
import DashBaord from "@/views/backend/DashBoard.vue";
import CarStock from "@/views/backend/CarStock.vue";
import Stock from "@/views/backend/StockManagement.vue"
import StockList from "@/views/backend/StockList.vue"
import ReportGen from "@/views/backend/ReportGen.vue"
import CarDetail from "@/views/backend/CarDetail.vue"

//สร้างฟังก์ชันสำหรับเช็ค route ก่อนเรียกใช้งาน (Route Auth Guard)
function authGuard(to, from, next){
  let isAuthenticated = false

  if(localStorage.getItem('user')){
    isAuthenticated = true  //ถ้ามีข้อมูล localStorage อยู่
  }else{
    isAuthenticated = false  //ถ้าไม่มีมีข้อมูล localStorage 
  }

  if(isAuthenticated){
    next() //อนุญาติให้เข้าสู่ route และโหลด component ที่เราต้องการได้
  }else{
    next({name: 'home'})
  }

}

const routes = [
  /* router Frontend */
  {
    path: "/",
    component: FrontendLayout,
    children: [
      {
        path: "",
        name: 'home',
        component: HomeView,
      },
    ],
    meta: {
      title: "Login",
      description: "Home",
    },
  },

 /*  Error 404 */
  {
    path: "/:catchAll(.*)",
    component: NotFound404,
  },

  /* router Backend */
  {
    path: "/backend",
    component: BackendLayout,
    children: [
      {
        path: "",
        name: "DashBaord",
        component: DashBaord,
        beforeEnter : authGuard
      },
    ],
    meta: {
      title: "AdminVDQI",
      description: "DashBaord",
    },
  },

/* route StockManagement */
  {
    path: "/backend/stock",
    component: BackendLayout,
    children: [
      {
        path: "",
        name: "Stock",
        component: Stock,
        beforeEnter : authGuard
      },
    ],
    meta: {
      title: "StockManagement",
      description: "Stock",
    },
  },

  /* route StockManagement / list */
  {
    path: "/backend/stock/list",
    component: BackendLayout,
    children: [
      {
        path: "",
        name: "StockList",
        component: StockList,
        beforeEnter : authGuard
      },
    ],
    meta: {
      title: "StockList",
      description: "StockList",
    },
  },

   /* route car detail */
  {
    path: "/backend/stock/car/detail",
    component: BackendLayout,
    children: [
      {
        path: "",
        name: "CarDetail",
        component: CarDetail,
        beforeEnter : authGuard
      },
    ],
    meta: {
      title: "CarDetail",
      description: "CarDetail",
    },
  },

   /* route report */
   {
    path: "/backend/report",
    component: BackendLayout,
    children: [
      {
        path: "",
        name: "ReportGen",
        component: ReportGen,
        beforeEnter : authGuard
      },
    ],
    meta: {
      title: "ReportGenerator",
      description: "ReportGen",
    },
  },
  
  /* router test */
  {
    path: "/backend/carstock",
    component: BackendLayout,
    children: [
      {
        path: "",
        name: "CarStock",
        component: CarStock,
        beforeEnter : authGuard
      },
    ],
    meta: {
      title: "CarStock",
      description: "CarStock",
    },
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
