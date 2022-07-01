<template>
  <h2 class="my-6 text-2xl font-semibold text-black dark:text-gray-200">
    Stock Management
  </h2>
  <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-2">
    <!-- Card -->
    <div class="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="p-3 mr-4 text-green-500 bg-green-400 rounded-full dark:text-green-100 dark:bg-green-500">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          อยู่ในช่องจอด
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {{ car.total }}
        </p>
      </div>
    </div>
    <!-- Card -->
    <div class="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="p-3 mr-4 text-green-500 bg-red-400 rounded-full dark:text-green-100 dark:bg-green-500">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          อยู่ระหว่างดำเนินงาน
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
          300
        </p>
      </div>
    </div>
    <!-- Card -->


  </div>
  <div class="flex justify-center flex-1 lg:mr-32">
    <div class="relative w-full max-w-xl ml-4 mr-6 focus-within:text-gray-500">
      <div class="absolute inset-y-0 flex items-center pl-2">
        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"></path>
        </svg>
      </div>
      <form @submit.prevent="onSubmit">
        <input v-model="keyword"
          class="w-full py-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-200 border-0 rounded-md"
          type="text" placeholder="Chassis no" aria-label="Search" />
        <button @click="submitSearchForm" type="submit" class="hidden">Submit</button>
      </form>
    </div>
    <div>
      <button @click="submitSearchForm"
        class="flex items-center justify-between px-4 py-1.5 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple">
        <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>ค้นหา</span>
      </button>
    </div>

    <div>
      <button @click="resetSearchForm"
        class="flex items-center justify-between px-4 py-1.5 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-yellow-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-purple">
        <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>ล้าง</span>
      </button>
    </div>
  </div>
  <!-- ตารางสแดง Stock รถในลานจอด -->
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th class="px-4 py-3">CHASSIS</th>
            <th class="px-4 py-3">WHERE</th>
            <th class="px-4 py-3">POSITION</th>
            <th class="px-4 py-3">DATE</th>
            <th class="px-4 py-3">TIME</th>
            <th class="px-4 py-3">ACTION</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          <tr v-for="car in car.data" :key="car.car_id" class="text-gray-700 dark:text-gray-400 hover:bg-blue-100">
            <td class="px-4 py-3 text-sm">{{ car.car_chassis }}</td>
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ car.car_where }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-sm">{{ car.car_position }} </td>
            <td class="px-4 py-3 text-sm">
              <div class="flex items-center text-sm">
                <div>
                  <p class="text-sm text-black-600 dark:text-gray-400">
                    {{ car.date }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-sm">{{ car.time }} </td>
            <td class="px-4 py-3 text-sm">
              <button @click="show(car.car_id)"
                class="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-500 border border-transparent rounded-md active:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-purple">
                <p>เพิ่มเติม</p>
              </button>

            </td>
          </tr>
        </tbody>
      </table>
      <!-- แสดงผลตัวแบ่งหน้าเพจ-->
      <VueTailwindPagination :current="currentPage" :total="total" :per-page="perPage"
        @page-changed="onPageClick($event)" />
    </div>
  </div>

  <!-- Extra Large Modal -->
  

</template>
<script>
import http from '@/services/BackendServices'
import '@ocrv/vue-tailwind-pagination/styles'
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'


export default {
  data() {
    return {
      car: [],
      currentPage: 0,
      perPage: 0,
      total: 0,

      showEditModal: false, // popup แก้ไขสินค้า
      chassis: '',
      status: '',
      where: '',
      position: '',
      fullname: '',
      lastname: '',
      date: '',
      time: '',

      //ตัวแปรค้นหา
      keyword:''

    }
  },
  components: {
    VueTailwindPagination
  },

  methods: {
    show(car_id){
      this.$router.push({ name: "CarDetail" });
      this.$store.state.carShow = car_id;
    },
    //function get car api
    async getCar(pagenumber) {
      let response = await http.get(`car?page=${pagenumber}`)
      let responseCar = response.data
      this.car = responseCar
      this.currentPage = responseCar.currentPage
      this.perPage = responseCar.per_page
      this.total = responseCar.total
    },
    async getCarSearch(pagenumber) {
      let response = await http.get(`car/search/${this.keyword}?page=${pagenumber}`)
      let responseCar = response.data
      this.car = responseCar
      this.currentPage = responseCar.currentPage
      this.perPage = responseCar.per_page
      this.total = responseCar.total
    },
    
    // function click next page
    onPageClick(event) {
      this.currentPage = event
      // เช็คว่ามีการค้นหาสินค้าอยู่หรือไม่
            if(this.keyword == ""){ // ไม่ได้ค้นหา
                this.getProducts(this.currentPage)
            }else{
                this.getCar(this.currentPage)
            }
    },

    //find car
    submitSearchForm(){
      if(this.keyword != ""){
        //เรียก api search
        http.get(`car/search/${this.keyword}`).then(response=>{
              let responseCar = response.data
              this.car = responseCar
              this.currentPage = responseCar.currentPage
              this.perPage = responseCar.per_page
              this.total = responseCar.total

        })
      }else{
        this.$swal.fire('กรุณาป้อนเลขตัวถัง')
      }

    },
    // clear search
    resetSearchForm(){
      this.currentPage = 1;
      this.getCar(this.currentPage)
      this.keyword=''

    }

  },
  mounted() {
    this.currentPage = 1;
    // อ่านสินค้าจาก API
    this.getCar(this.currentPage)

  }



}

</script>

