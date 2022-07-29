<template>
  <h2 class="my-6 text-2xl font-semibold text-black dark:text-gray-200">
    Stock Management
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
            <select
              class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
              <option>Stock A (500) : ลานลานจอดรถ VDQi หลังกำแพง</option>
              <option>Stock B (500) : ลานลานจอดรถ VDQi หลังกำแพง</option>
              <option>Stock C (500) : ลานลานจอดรถ VDQi หลังกำแพง</option>
              <option>Stock D (500) : ลานลานจอดรถ VDQi หลังกำแพง</option>
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
          เปิดใช้งาน
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
          300
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
          300
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
          300
        </p>
      </div>
    </div>
    <!-- Card -->
  </div>

  <div
    class="overflow-x-auto items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 space-x-3 grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1">
    <div>
      <p class="mb-2 text-sm font-semibold text-black dark:text-gray-400">
        Stock A (500) : ลานจอดรถ VDQi หลังกำแพง ( custom text description )
      </p>
      <!-- Card Lotus's -->
      <div class="py-4">
        <a
          class="flex items-center justify-between p-4 text-sm font-semibold bg-gray- rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">Lotus's
        </a>
      </div>
       <div class="flex items-center mr-4">
    <div v-for="position in position.data" :key="position.position_id"
      class="bg-green-500 flex items-center pl-4 rounded border border-gray-500 dark:border-gray-700">
      <input type="radio" @click="Select" :id="position.position_id" name="position-radio"
        :value="position.car_position" v-model="car_position"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label :for="position.position_id"
        class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{{ position.car_position }} ({{position.position_status }})</label>
    </div>
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
      position: [],
      currentPage: 0,
      perPage: 0,
      total: 0,
      car_position: "",
      positionModel: "",
    };
  },
  methods: {
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
      swalWithBootstrapButtons.fire({
        title: "โปรดยืนยันการทำรายการ",
        text: "ปิดการใช้งานช่องจอดรถยนต์",
        icon: 'warning',

        showCancelButton: true,
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
        reverseButtons: true,
      }).then((result) => {
        
        if (result.isConfirmed) {
          
          localStorage.setItem("id", this.car_position);
          let positionid = JSON.parse(window.localStorage.getItem("id"));

          console.log(this.car_position)
          let data = new FormData();
          data.append('position_status', 'not available')
          data.append("_method", "PUT");
          http.post(`position/${positionid}`, data).then(response => {
            console.log(response.data)
            window.location.reload();
          })
         
        }
      });
    },
  },
  mounted() {
    this.currentPage = 1;
    http.get(`position?page=${this.currentPage}`).then((response) => {
      let responsePosition = response.data;
      this.position = responsePosition;
    });
  },
};
</script>

<!-- localStorage.setItem("position_id", this.position_id);
      this.$swal.fire({
        title: 'โปรดยืนยันการทำรายการ',
        text: "ปิดการใช้งานช่องจอดรถยนต์",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: 'grey',
        confirmButtonText: 'ยืนยัน',
        cancelButtonText: 'ยกเลิก'
      }).then((result) => {
        if (result.isConfirmed) {
          
           let local_user = JSON.parse(window.localStorage.getItem("position_id"));
           let position_id = local_user.position_id.position_id;
           let data = new FormData();
           data.append('position_status', " not available")
           data.append("_method", "PUT");
           http.post(`position/${position_id}`, data).then(response => {
               console.log(response.data)
           })

         /*  this.$Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ) */
        }
      }); -->
