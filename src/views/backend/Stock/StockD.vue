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
              <option value="d"> Stock D (270) : ลานลานจอดรถ VDQi หลังกำแพง</option>
              <option value="b"> Stock B (60) : ลานลานจอดรถ VDQi หลังกำแพง</option>
              <option value="a"> Stock A (160) : ลานจอดรถ VDQi ลานดิน</option>
              <option value="c"> Stock C (280) : ลานลานจอดรถ VDQi หลังกำแพง</option>
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
        Stock D (270) : ลานจอดรถ VDQi หลังกำแพง 
      </p>
      <!-- Card Lotus's -->
      <div
        class="h-14 overflow-x-auto items-center p-4 bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800 space-x-3 grid gap-0 mb-8 md:grid-cols-2 xl:grid-cols-1">
        <div class="text-center">
          <h1 class="font-bold">Lotus's</h1>
        </div>
      </div>

      <div
        class=" overflow-x-auto  rounded-lg dark:bg-gray-800 space-x-3 grid gap-0 mb-8 md:grid-cols-2 xl:grid-cols-1">
        <ul></ul>

        <!-- A -->
        <ul class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-55 md:gap-12">
          <li>
            <label class="inline-flex justify-center items-center p-5 w-2 h-2 text-gray-500">
              <div class="text-center">
                <h1 class="text-xs font-semibold">A</h1>
              </div>
            </label>
          </li>
          <div v-for="positionA in positionA.data" :key="positionA.posit_id">
            <input type="radio" :id="positionA.posit_id" name="position-radio" :value="positionA.posit_id"
              v-model="posit_id" class="hidden peer" required />
            <div class="group">
              <div class="relative">
                <div
                  class="hidden group-hover:block absolute top-10 left-40 w-72 z-10  px-4 py-3 mb-10 -ml-32 text-black bg-white shadow-fix rounded-lg ">
                  <span class="">
                    <h1 class="  text-left font-bold text-sm	 	">&nbsp;ลานจอด <span class="font-thin text-sm	">{{
                        positionA.car_where.car_where
                    }}</span> </h1>
  
                    <h1 class="text-left font-bold text-sm		  ">&nbsp;ช่องจอด <span class="font-thin text-sm	">{{
                        positionA.line
                    }}{{
      positionA.posit
  }}</span></h1>
                    <h1 class="text-left font-bold text-sm		 ">&nbsp;เลขตัวถัง <span class="font-thin text-sm	">{{
                        positionA.car_id.car_chassis
                    }}</span></h1>
                  </span>
                  <div class="items-center text-center">
                    <button
                      class="bg-purple-600 text-white hover:bg-purple-500 font-bold py-2 px-4 mt-3 rounded items-center text-sm">
                      เพิ่มเติม </button>
                  </div>
                </div>
  
                <label @click="Select" :for="positionA.posit_id"
                  class="inline-flex justify-center items-center p-5 w-2 h-2 text-gray-700 rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  :class="{
                    'bg-gray-in': positionA.car_status === 2,
                    'bg-red-in': positionA.car_status === 1,
                    'bg-green-in': positionA.car_status === 0,
                  }">
                  <div class="text-center">
                    <h1 class="text-xs font-semibold">{{ positionA.posit }}</h1>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </ul>
        <br>
         <!-- B -->
         <ul class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-55 md:gap-12">
          <li>
            <label class="inline-flex justify-center items-center p-5 w-2 h-2 text-gray-500">
              <div class="text-center">
                <h1 class="text-xs font-semibold">B</h1>
              </div>
            </label>
          </li>
          <div v-for="positionB in positionB.data" :key="positionB.posit_id">
            <input type="radio" :id="positionB.posit_id" name="position-radio" :value="positionB.posit_id"
              v-model="posit_id" class="hidden peer" required />
            <div class="group">
              <div class="relative">
                <div
                  class="hidden group-hover:block absolute top-10 left-40 w-72 z-10  px-4 py-3 mb-10 -ml-32 text-black bg-white shadow-fix rounded-lg ">
                    <span class="">
                    <h1 class="  text-left font-bold text-sm	 	">&nbsp;ลานจอด <span class="font-thin text-sm	">{{
                        positionB.car_where.car_where
                    }}</span> </h1>
                    
                    <h1 class="text-left font-bold text-sm		  ">&nbsp;ช่องจอด <span class="font-thin text-sm	">{{ positionB.line }}{{
                        positionB.posit
                    }}</span></h1>
                    <h1 class="text-left font-bold text-sm		 ">&nbsp;เลขตัวถัง <span class="font-thin text-sm	">{{
                        positionB.car_id.car_chassis
                    }}</span></h1>
                  </span>
                    <div class="items-center text-center">
                      <button class="bg-purple-600 text-white hover:bg-purple-500 font-bold py-2 px-4 mt-3 rounded items-center text-sm">   เพิ่มเติม   </button>
                    </div>
                </div>
  
                <label @click="Select" :for="positionB.posit_id"
                  class="inline-flex justify-center items-center p-5 w-2 h-2 text-gray-700 rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  :class="{
                    'bg-gray-in': positionB.car_status === 2,
                    'bg-red-in': positionB.car_status === 1,
                    'bg-green-in': positionB.car_status === 0,
                  }">
                  <div class="text-center">
                    <h1 class="text-xs font-semibold">{{ positionB.posit }}</h1>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </ul>
        <br>
        <!-- C -->
        <ul class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-55 md:gap-12">
          <li>
            <label class="inline-flex justify-center items-center p-5 w-2 h-2 text-gray-500">
              <div class="text-center">
                <h1 class="text-xs font-semibold">C</h1>
              </div>
            </label>
          </li>
          <div v-for="positionC in positionC.data" :key="positionC.posit_id">
            <input type="radio" :id="positionC.posit_id" name="position-radio" :value="positionC.posit_id"
              v-model="posit_id" class="hidden peer" required />
            <div class="group">
              <div class="relative">
                <div
                  class="hidden group-hover:block absolute bottom-1 left-9 w-72  px-4 py-3 mb-10 -ml-32 text-black bg-white shadow-fix rounded-lg ">
                    <span class="">
                    <h1 class="  text-left font-bold text-sm	 	">&nbsp;ลานจอด <span class="font-thin text-sm	">{{
                        positionC.car_where.car_where
                    }}</span> </h1>
                    
                    <h1 class="text-left font-bold text-sm		  ">&nbsp;ช่องจอด <span class="font-thin text-sm	">{{ positionC.line }}{{
                        positionC.posit
                    }}</span></h1>
                    <h1 class="text-left font-bold text-sm		 ">&nbsp;เลขตัวถัง <span class="font-thin text-sm	">{{
                        positionC.car_id.car_chassis
                    }}</span></h1>
                  </span>
                    <div class="items-center text-center">
                      <button class="bg-purple-600 text-white hover:bg-purple-500 font-bold py-2 px-4 mt-3 rounded items-center text-sm">   เพิ่มเติม   </button>
                    </div>
                </div>
  
                <label @click="Select" :for="positionC.posit_id"
                  class="inline-flex justify-center items-center p-5 w-2 h-2 text-gray-700 rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  :class="{
                    'bg-gray-in': positionC.car_status === 2,
                    'bg-red-in': positionC.car_status === 1,
                    'bg-green-in': positionC.car_status === 0,
                  }">
                  <div class="text-center">
                    <h1 class="text-xs font-semibold">{{ positionC.posit }}</h1>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </ul>
        <br>
        <!-- D -->
        <ul class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-55 md:gap-12">
          <li>
            <label class="inline-flex justify-center items-center p-5 w-2 h-2 text-gray-500">
              <div class="text-center">
                <h1 class="text-xs font-semibold">D</h1>
              </div>
            </label>
          </li>
          <div v-for="positionD in positionD.data" :key="positionD.posit_id">
            <input type="radio" :id="positionD.posit_id" name="position-radio" :value="positionD.posit_id"
              v-model="posit_id" class="hidden peer" required />
            <div class="group">
              <div class="relative">
                <div
                  class="hidden group-hover:block absolute bottom-1 left-9 w-72  px-4 py-3 mb-10 -ml-32 text-black bg-white shadow-fix rounded-lg ">
                    <span class="">
                    <h1 class="  text-left font-bold text-sm	 	">&nbsp;ลานจอด <span class="font-thin text-sm	">{{
                        positionD.car_where.car_where
                    }}</span> </h1>
                    
                    <h1 class="text-left font-bold text-sm		  ">&nbsp;ช่องจอด <span class="font-thin text-sm	">{{ positionD.line }}{{
                        positionD.posit
                    }}</span></h1>
                    <h1 class="text-left font-bold text-sm		 ">&nbsp;เลขตัวถัง <span class="font-thin text-sm	">{{
                        positionD.car_id.car_chassis
                    }}</span></h1>
                  </span>
                    <div class="items-center text-center">
                      <button class="bg-purple-600 text-white hover:bg-purple-500 font-bold py-2 px-4 mt-3 rounded items-center text-sm">   เพิ่มเติม   </button>
                    </div>
                </div>
  
                <label @click="Select" :for="positionD.posit_id"
                  class="inline-flex justify-center items-center p-5 w-2 h-2 text-gray-700 rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  :class="{
                    'bg-gray-in': positionD.car_status === 2,
                    'bg-red-in': positionD.car_status === 1,
                    'bg-green-in': positionD.car_status === 0,
                  }">
                  <div class="text-center">
                    <h1 class="text-xs font-semibold">{{ positionD.posit }}</h1>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </ul>
        <br>
        <!-- E -->
        <ul class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-55 md:gap-12">
          <li>
            <label class="inline-flex justify-center items-center p-5 w-2 h-2 text-gray-500">
              <div class="text-center">
                <h1 class="text-xs font-semibold">E</h1>
              </div>
            </label>
          </li>
          <div v-for="positionE in positionE.data" :key="positionE.posit_id">
            <input type="radio" :id="positionE.posit_id" name="position-radio" :value="positionE.posit_id"
              v-model="posit_id" class="hidden peer" required />
            <div class="group">
              <div class="relative">
                <div
                  class="hidden group-hover:block absolute bottom-1 left-9 w-72  px-4 py-3 mb-10 -ml-32 text-black bg-white shadow-fix rounded-lg ">
                    <span class="">
                    <h1 class="  text-left font-bold text-sm	 	">&nbsp;ลานจอด <span class="font-thin text-sm	">{{
                        positionE.car_where.car_where
                    }}</span> </h1>
                    
                    <h1 class="text-left font-bold text-sm		  ">&nbsp;ช่องจอด <span class="font-thin text-sm	">{{ positionE.line }}{{
                        positionE.posit
                    }}</span></h1>
                    <h1 class="text-left font-bold text-sm		 ">&nbsp;เลขตัวถัง <span class="font-thin text-sm	">{{
                        positionE.car_id.car_chassis
                    }}</span></h1>
                  </span>
                    <div class="items-center text-center">
                      <button class="bg-purple-600 text-white hover:bg-purple-500 font-bold py-2 px-4 mt-3 rounded items-center text-sm">   เพิ่มเติม   </button>
                    </div>
                </div>
  
                <label @click="Select" :for="positionE.posit_id"
                  class="inline-flex justify-center items-center p-5 w-2 h-2 text-gray-700 rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  :class="{
                    'bg-gray-in': positionE.car_status === 2,
                    'bg-red-in': positionE.car_status === 1,
                    'bg-green-in': positionE.car_status === 0,
                  }">
                  <div class="text-center">
                    <h1 class="text-xs font-semibold">{{ positionE.posit }}</h1>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </ul>
      
      </div>





     
      



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
      localStorage.setItem("ID", this.posit_id);
      let posit = JSON.parse(window.localStorage.getItem("ID"));
      http.get(`posit/${posit}`).then((response) => {
        console.log(response.data);
        localStorage.setItem('posit', JSON.stringify(response.data))
      })

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
          text: "เปิด / ปิด การใช้งานช่องจอดรถยนต์",
          icon: "warning",

          showCancelButton: true,
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            let positionid = JSON.parse(window.localStorage.getItem("posit"));
            http.get(`posit/carid/${positionid.posit_id}`).then((response) => {
              let responsePosition = response.data
              let responseStatus = response.data
              this.posit = responsePosition
              this.car_status = responseStatus
              console.log(positionid.car_status)
              //console.log(responseUser)
              if (positionid.car_status === 0) {
                let data = new FormData();
                data.append("car_status", "2");
                data.append("car_id", "1");
                data.append("_method", "PUT");
                http.post(`posit/${positionid.posit_id}`, data).then((response) => {
                  console.log(response.data);
                  window.location.reload();
                })


              } else {

                let data = new FormData();
                data.append("car_status", "0");
                data.append("car_id", "1");
                data.append("_method", "PUT");
                http.post(`posit/${positionid.posit_id}`, data).then((response) => {
                  console.log(response.data);
                  window.location.reload();
                })
              }
            })

          } else {
            console.log('no sccess')
          }
        });
    },

  },
  mounted() {
    this.currentPage = 1;
    // get stock B  / ตำแหน่ง A
    http.get(`posit/where/4/a?page=${this.currentPage}`).then((response) => {
      let responsePositionA = response.data;
      this.positionA = responsePositionA;
    });
    // get stock B  / ตำแหน่ง B
    http.get(`posit/where/4/b?page=${this.currentPage}`).then((response) => {
      let responsePositionB = response.data;
      this.positionB = responsePositionB;
    });
    // get stock A  / ตำแหน่ง C
    http.get(`posit/where/4/c?page=${this.currentPage}`).then((response) => {
      let responsePositionC = response.data;
      this.positionC = responsePositionC;
    });
    // get stock A  / ตำแหน่ง D
    http.get(`posit/where/4/d?page=${this.currentPage}`).then((response) => {
      let responsePositionD = response.data;
      this.positionD = responsePositionD;
    });
    // get stock A  / ตำแหน่ง E
    http.get(`posit/where/4/e?page=${this.currentPage}`).then((response) => {
      let responsePositionE = response.data;
      this.positionE = responsePositionE;
    });

    /* เช็คตำแหน่งที่จอดว่าง */
    http.get(`posit/status/0?page=${this.currentPage}`).then((response) => {
      let responseAvailable = response.data;
      this.available = responseAvailable;
    });

    // เช็คตำแหน่งรถที่จอดอยู่
    http.get(`posit/status/1?page=${this.currentPage}`).then((response) => {
      let responseNoAvailable = response.data;
      this.noavailable = responseNoAvailable;
    });

    // เช็คตำแหน่งปิดช่องจอด
    http.get(`posit/status/2?page=${this.currentPage}`).then((response) => {
      let responseClose = response.data;
      this.close = responseClose;
    });


  },
};
</script>

