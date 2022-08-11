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
          {{ noavailable.total }}
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

    <div>
      <button @click="openModalAddCar"
        class="flex items-center justify-between px-4 py-1.5 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-purple">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd" />
        </svg>
        <span>เพิ่ม</span>
      </button>
    </div>
     <div>
      <button @click="nextAdd"
        class="flex items-center justify-between px-4 py-1.5 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-purple">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd" />
        </svg>
        <span>เพิ่ม</span>
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
                  <p class="text-sm text-gray-600 dark:text-gray-400 ">
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


  <!-- Popup สำหรับเพิ่มรถใหม่ -->
  <div v-if="showAddModal" id="addProductModal"
    class="fixed top-0 left-0 flex items-center justify-center w-full h-full modal">
    <div class="absolute w-full h-full bg-gray-900 opacity-70 modal-overlay"></div>
    <div class="z-50 w-11/12 p-5 mx-auto overflow-y-auto bg-white rounded shadow-lg h-4/5 modal-container md:max-w-md">
      <!-- Header -->
      <div class="flex items-center justify-center w-full h-auto">
        <div class="flex items-start justify-start w-full h-auto py-2 text-xl font-bold">
          เพิ่มรถยนต์
        </div>
        <div @click="closeAddModal" class="flex justify-center w-1/12 h-auto cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <!--Header End-->
      </div>
      <!-- Modal Content-->
      <div class="w-full h-auto mb-4">
        <form ref="addCarForm" @submit.prevent="onSubmit" enctype="multipart/form-data">
          <label class="block my-3 text-gray-700 text-md" for="car_chassis">เลขตัวถัง (17 หลัก)</label>
          <input v-model="car_chassis" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text" placeholder="Chassis no.">


          <label class="block my-3 text-gray-700 text-md" for="car_where">ลานจอด</label>
          <select v-model="car_where" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text">
            <option disabled value="">กรุณาเลือกลานในการจอด</option>
            <option v-for="where in where.data" :key="where.where_id"> {{ where.car_where }}</option>
          </select>

          <label class="block my-3 text-gray-700 text-md" for="car_position">ช่องที่จอด</label>
          <select v-model="car_position" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text">
            <option disabled value="">กรุณาเลือกช่องในการจอด</option>
            <option v-for="position in position.data" :key="position.position"> {{ position.car_position }}</option>
          </select>
          
          
          <div class="col-span-2">
            <button @click="submitForm"
              class="w-full px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple">
              บันทึกรายการ
            </button>
          </div>
          <div>
            <button @click="onResetForm"
              class="w-full px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-gray-500 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-purple">
              ล้าง
            </button>
          </div>
          
        </form>
      </div>
      <h5 @click="ViewPicture" class=" text-blue-600  decoration-sky-500">&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; ภาพอธิบายลานจอด</h5>
    </div>

  </div>

</template>
<script>
import http from '@/services/BackendServices'
import '@ocrv/vue-tailwind-pagination/styles'
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
import useValidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default {
  data() {
    return {
      /* ตัวแปร เรียกใช้งาน validation */
      v$: useValidate(),
      car: [],
      status: [],
      noavailable: [],
      currentPage: 0,
      perPage: 0,
      total: 0,

      showAddModal: false, // popup เพิ่มรถยนต์
      car_chassis: '',
      car_status: '',
      car_where: '',
      car_position: '',
      fullname: '',
      lastname: '',
      date: '',
      time: '',

      //ตัวแปรค้นหา
      keyword: ''

    }
  },
  components: {
    VueTailwindPagination

  },

  methods: {
     ViewPicture() {
       this.$swal.fire({
        imageUrl: "https://trello.com/1/cards/62846a8ad8fd477751f8fd0f/attachments/628c6441c9f7818c5876300b/previews/628c6442c9f7818c58763022/download/flow-plan-now.jpg",
        imageHeight: 1500,
        imageAlt: "A tall image",
      });
      
      
    },

    show(car_id) {
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
      if (this.keyword == "") { // ไม่ได้ค้นหา
        this.getProducts(this.currentPage)
      } else {
        this.getCar(this.currentPage)
      }
    },
    onSelectClick() {
      http.get(`car/${this.car_id}`).then((response) => {
        this.car_chassis = response.data.car_chassis;

      });

    },

    //find car
    submitSearchForm() {
      if (this.keyword != "") {
        //เรียก api search
        http.get(`car/search/${this.keyword}`).then(response => {
          let responseCar = response.data
          this.car = responseCar
          this.currentPage = responseCar.currentPage
          this.perPage = responseCar.per_page
          this.total = responseCar.total

        })
      } else {
        this.$swal.fire('กรุณาป้อนเลขตัวถัง')
      }

    },
    // clear search
    resetSearchForm() {
      this.currentPage = 1;
      this.getCar(this.currentPage)
      this.keyword = ''

    },
    //function open close popup
    openModalAddCar() {
      this.showAddModal = true

    },
    closeAddModal() {
      this.showAddModal = false
      this.onResetForm()
    },

    // onResetfrom
    onResetForm() {
      this.$refs.addCarForm.reset()
      this.car_chassis = ''
      this.car_status = ''
      this.car_where = ''
      this.car_position = ''
      this.fullname = ''
      this.lastname = ''
      this.date = ''
      this.time = ''

    },
    // function submit form
    submitForm() {

      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          title: "font-weight-bold",
          confirmButton: ' bg-green-600 px-6 py-3 mx-4 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none	',
          cancelButton: 'bg-red-600 px-6 py-3 mx-4 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none	'
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "ตรวจสอบข้อมูล",
          html:
            `<p class="custom text-left font-normal text-xl"> <b>เลขตัวถัง :</b> ${this.car_chassis}</p>` +
            ` <p class="custom text-left font-normal text-xl"> <b>โซนที่จอด :</b> ${this.car_where}</p>` +
            ` <p class="custom text-left font-normal text-xl">  <b>ตำแหน่งที่จอด :</b> ${this.car_position} </p>`,

          showCancelButton: true,
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
          reverseButtons: true,

        }).then((result) => {

          if (result.isConfirmed) {

            let local_user = JSON.parse(window.localStorage.getItem("user"));
            // localStorage.setItem("car_chassis", this.car_chassis);
            let name = local_user.user.fullname;
            let lastname = local_user.user.lastname;
            var d = new Date();
            let data = new FormData()
            data.append("fullname", name);
            data.append("lastname", lastname);
            data.append('car_chassis', this.car_chassis)
            data.append('car_status', "นำเข้า")
            data.append('car_where', this.car_where)
            data.append('car_position', this.car_position)
            data.append('date', +d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())
            data.append('time', d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())
            http.post("car", data).then(() => {   
              swalWithBootstrapButtons
                .fire("บันทึกข้อมูลเรียบร้อย!", "", "success")
                .then(() => {
                  this.$router.push({ name: "StockList" });
                  window.location.reload();
                });
            });

            //เพิ่มเลขตัวถังเข้ากับตำแหน่งจอด
            let putdata = new FormData();
            putdata.append('position_status', '1')
            putdata.append('car_chassis', this.car_chassis)
            putdata.append("_method", "PUT");
            http.post(`position/${this.car_position}`, putdata).then(response => {
              console.log(response.putdata)
              console.log(this.car_position)
            })
            
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "ยกเลิกเรียบร้อย!",
              "คุณได้ยกเลิกการเพิ่มข้อมูล",
              "error"
            );
          }
        });

    },
    back() {
      this.$router.push({ name: "StockList" });
    },
    nextAdd(){
       this.$router.push({ name: "AddStock" });
    }


  },


  validations() {
    return {
      car_chassis: {
        required: helpers.withMessage('กรุณากรอกเลขตัวถัง ', required),
      },

      where: {
        required: helpers.withMessage('เลือกโซนที่จอดก่อน ', required),
      },

      position: {
        required: helpers.withMessage('เลือกตำแหน่งที่จอดก่อน ', required),
      },

    }
  },

  mounted() {
    this.currentPage = 1;

    this.getCar(this.currentPage)

    http.get(`car?page=${this.currentPage}`).then(response => {
      let responseCar = response.data
      this.car = responseCar
    }),

      http.get(`where?page=${this.currentPage}`).then(response => {
        let responseWhere = response.data
        this.where = responseWhere
      }),
      http.get(`position/search/0/?page=${this.currentPage}`).then(response => {
        let responsePosition = response.data
        this.position = responsePosition
      }),
      http.get(`car?page=${this.currentPage}`).then(response => {
        let responseCar = response.data
        this.car = responseCar
       // console.log(responseCar)

      })
      // เช็คตำแหน่งที่จอดไม่ว่าง
    http.get(`position/search/1/?page=${this.currentPage}`).then((response) => {
      let responseNoAvailable = response.data;
      this.noavailable = responseNoAvailable;
    });

  }



}

</script>