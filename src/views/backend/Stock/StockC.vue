<template>
  <h2 class="my-6 text-2xl font-semibold text-black dark:text-gray-200">
    Stock Management : C
  </h2>
  <router-link to="/backend/stock/list"
    class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
    href="">
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
        </path>
      </svg>
      <span>จัดการ และค้นหารถยนต์ในลานจอด</span>
    </div>
    <span>View &RightArrow;</span>
  </router-link>
  <div class="space-x-3 grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
    <div class="w-auto flex items-center p-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
        <!--  <h4>Select area</h4> -->
        <div>
          <label class="block mt-4 text-sm- font-bold">
            <span class="text-gray-700 dark:text-gray-400"> Select area </span>

            <select v-on:change="changeRoute($event)"
              class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
              <option  value="c"> Stock C (280) : ลานลานจอดรถ VDQi หลังกำแพง</option>
               <option  value="b" > Stock B (60) : ลานลานจอดรถ VDQi หลังกำแพง</option>
             <option value="a" > Stock A (160) : ลานจอดรถ VDQi ลานดิน</option>
              <option value="d"> Stock D (500) : ลานลานจอดรถ VDQi หลังกำแพง</option>
            </select>
          </label>
        </div>
      </div>
    </div>
    
    <!-- Card -->
    <div class="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="p-3 mr-4 text-green-500 bg-green-400 rounded-full dark:text-green-100 dark:bg-green-500">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          ปิดใช้งาน
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {{ close.total }} 
        </p>
      </div>
    </div>
    <!-- Card -->
    <!-- Card -->
    <div class="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="p-3 mr-4 text-green-500 bg-red-400 rounded-full dark:text-green-100 dark:bg-green-500">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          อยู่ในช่องจอด
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
         {{ noavailable.total }}
        </p>
      </div>
    </div>
    <!-- Card -->
    <!-- Card -->
    <div class="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="p-3 mr-4 text--500 bg-yellow-400 rounded-full dark:text-green-100 dark:bg-green-500">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          ว่าง
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
         {{ available.total }}
        </p>
      </div>
    </div>
    <!-- Card -->
  </div>

  <div
    class="overflow-x-auto items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 space-x-3 grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1">
    <div>
      <p class="mb-2 text-sm font-semibold text-black dark:text-gray-400">
        Stock B (160) : ลานจอดรถ VDQi หลังกำแพง ( custom text description )
      </p>
      <!-- Card Lotus's -->
      <div class="py-4">
        <a
          class="bg-gray-200 flex p-4 max- w-full ">
          <h1 >Lotus's</h1>
        </a>
      </div>

      <!-- position A -->
      <div class="grid grid-cols-8 gap-8 sm:grid-cols-2 md:grid-cols-57 md:gap-12 ">
        <div class="ABCDE">A</div>

        <div v-for="positionA in positionA.data" :key="positionA.position_id">
          <div @click="Select" class="position" :class="{
            'position-0': positionA.position_status === '0',
            'position-1': positionA.position_status === '1',
            'position-2': positionA.position_status === '2',
          }">
            <input class="hidden w-1" type="radio" :id="positionA.position_id" name="position-radio"
              :value="positionA.position_id" v-model="position_id" />
            <label :for="positionA.position_id" class="">
              <span>{{ positionA.car_line }}{{ positionA.car_position }} </span>
            </label>
          </div>
        </div>
      </div>
      <br>
      <!-- position A -->
      <!-- position B -->
      <div class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-57 md:gap-12 ">
         <div class="ABCDE">B</div>
        <div v-for="positionB in positionB.data" :key="positionB.position_id">
          <div @click="Select" class="position" :class="{
            'position-0': positionB.position_status === '0',
            'position-1': positionB.position_status === '1',
            'position-2': positionB.position_status === '2',
          }">
            <input class="hidden w-1" type="radio" :id="positionB.position_id" name="position-radio"
              :value="positionB.position_id" v-model="position_id" />

            <label :for="positionB.position_id" class="">
              <span>{{ positionB.car_line }}{{ positionB.car_position }} </span>
            </label>
          </div>
        </div>
      </div>
       <br>
      <!-- position B -->
      <!-- position C -->
      <div class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-57 md:gap-12 ">
        <div class="ABCDE">C</div>
        <div v-for="positionC in positionC.data" :key="positionC.position_id">
          <div @click="Select" class="position" :class="{
            'position-0': positionC.position_status === '0',
            'position-1': positionC.position_status === '1',
            'position-2': positionC.position_status === '2',
          }">
            <input class="hidden w-1" type="radio" :id="positionC.position_id" name="position-radio"
              :value="positionC.position_id" v-model="position_id" />

            <label :for="positionC.position_id" class="">
              <span>{{ positionC.car_line }}{{ positionC.car_position }} </span>
            </label>
          </div>
        </div>
      </div>
       <br>
      <!-- position C -->
       <!-- position D -->
      <div class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-57 md:gap-12 ">
        <div class="ABCDE">D</div>
        <div v-for="positionD in positionD.data" :key="positionD.position_id">
          <div @click="Select" class="position" :class="{
            'position-0': positionD.position_status === '0',
            'position-1': positionD.position_status === '1',
            'position-2': positionD.position_status === '2',
          }">
            <input class="hidden w-1" type="radio" :id="positionD.position_id" name="position-radio"
              :value="positionD.position_id" v-model="position_id" />

            <label :for="positionD.position_id" class="">
              <span>{{ positionD.car_line }}{{ positionD.car_position }} </span>
            </label>
          </div>
        </div>
      </div>
       <br>
      <!-- position D -->
      <!-- position E -->
      <div class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-57 md:gap-12 ">
        <div class="ABCDE">E</div>
        
        <div v-for="positionE in positionE.data" :key="positionE.position_id">
          <div @click="Select" class="position" :class="{
            'position-0': positionE.position_status === '0',
            'position-1': positionE.position_status === '1',
            'position-2': positionE.position_status === '2',
          }">
            <input class="hidden w-1" type="radio" :id="positionE.position_id" name="position-radio"
              :value="positionE.position_id" v-model="position_id" />

            <label :for="positionE.position_id" class="">
              <span>{{ positionE.car_line }}{{ positionE.car_position }} </span>
            </label>
          </div>
        </div>
      </div>
       <br>
      <!-- position E -->
       
  
      
    </div>
  </div>

  <div class="py-4">
    <button @click="ViewPicture"
      class="w-96 flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
          </path>
        </svg>
        <span>ภาพอธิบายลานจอด</span>
      </div>

      <span>View &RightArrow;</span>
    </button>
  </div>
  
</template>

<script>
import http from "@/services/BackendServices";
export default {
  data() {
    return {
      positionA: [],
      positionB: [],
      positionC: [],
      positionD: [],
      positionE: [],
      available: [],
      noavailable: [],
      close: [],
      currentPage: 0,
      perPage: 0,
      total: 0,
      car_position: "",
      positionModel: "",
      position_id: "",
      position_status: "",
    };
  },
  methods: {
    changeRoute(e) {
      this.$router.push("/backend/stock/" + e.target.value);
     // this.$router.push({ name: 'StockList' })
      // this.$router.push("/b" + e.target.value); not working....
    },
    
    ViewPicture() {
      this.$swal.fire({
        imageUrl:
          "https://trello.com/1/cards/62846a8ad8fd477751f8fd0f/attachments/628c6441c9f7818c5876300b/previews/628c6442c9f7818c58763022/download/flow-plan-now.jpg",
        imageHeight: 1500,
        imageAlt: "A tall image",
      });
    },
    Select() {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          title: "font-weight-bold",
          confirmButton:
            " bg-green-600 px-6 py-3 mx-4 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none	",
          cancelButton:
            "bg-red-600 px-6 py-3 mx-4 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none	",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "โปรดยืนยันการทำรายการ",
          text: "ปิดการใช้งานช่องจอดรถยนต์",
          icon: "warning",

          showCancelButton: true,
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            localStorage.setItem("id", this.position_id);
            let positionid = JSON.parse(window.localStorage.getItem("id"));
            //  localStorage.setItem("status", this.position.position_status);
            let data = new FormData();
            data.append("position_status", "2");
            data.append("_method", "PUT");
            http.post(`position/${positionid}`, data).then((response) => {
              console.log(response.data);
              window.location.reload();
            })

          } else {
            window.location.reload();
          }
        });
    },
    
  },
  mounted() {
    this.currentPage = 1;
    // get stock B  / ตำแหน่ง A
    http.get(`position/search/3/a?page=${this.currentPage}`).then((response) => {
      let responsePositionA = response.data;
      this.positionA = responsePositionA;
    });
     // get stock B  / ตำแหน่ง B
    http.get(`position/search/3/b?page=${this.currentPage}`).then((response) => {
      let responsePositionB = response.data;
      this.positionB = responsePositionB;
    });
    // get stock A  / ตำแหน่ง C
    http.get(`position/search/3/c?page=${this.currentPage}`).then((response) => {
      let responsePositionC = response.data;
      this.positionC = responsePositionC;
    });
    // get stock A  / ตำแหน่ง D
    http.get(`position/search/3/d?page=${this.currentPage}`).then((response) => {
      let responsePositionD = response.data;
      this.positionD = responsePositionD;
    });
     // get stock A  / ตำแหน่ง E
    http.get(`position/search/3/e?page=${this.currentPage}`).then((response) => {
      let responsePositionE = response.data;
      this.positionE = responsePositionE;
    });

    /* เช็คตำแหน่งที่จอดว่าง */
    http.get(`position/status/3/0?page=${this.currentPage}`).then((response) => {
      let responseAvailable = response.data;
      this.available = responseAvailable;
    });

    // เช็คตำแหน่งรถที่จอดอยู่
    http.get(`position/status/3/1?page=${this.currentPage}`).then((response) => {
      let responseNoAvailable = response.data;
      this.noavailable = responseNoAvailable;
    });

    // เช็คตำแหน่งปิดช่องจอด
    http.get(`position/status/3/2?page=${this.currentPage}`).then((response) => {
      let responseClose = response.data;
      this.close = responseClose;
    });

    
  },
};
</script>

<style>
input:checked+label {
  background-color: RED;
  border: red;
}

.position {
  width: 30px;
  background-color: rgb(47, 255, 186);
  padding-top: 10px;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;


  position: relative;
}
.ABCDE {
  width: 30px;
  background-color: rgb(255, 255, 255);
  padding-top: 10px;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  position: relative;
}

.position .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: rgb(197, 135, 248);
  color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;

  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

.position:hover .tooltiptext {
  visibility: visible;
}

.position:hover {
  background-color: rgb(255, 0, 0);
}

.position-1 {
  background-color: red;
  color: #fff;
}

.position-2 {
  background-color: rgb(190, 190, 190);
  color: #fff;
}
</style>