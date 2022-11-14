<template>
     
     <h2 class="my-6 text-2xl font-semibold text-black dark:text-gray-200">
          จัดการสถานีจอดรถยนต์
     </h2>

     <!-- Card -->

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
                         type="text" placeholder="Station" aria-label="Search" />
                    <button @click="submitSearchForm" type="submit" class="hidden">
                         Submit
                    </button>
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
     </div>
     <!-- ตารางสแดง Stock รถในลานจอด -->
     <div class="w-full overflow-hidden rounded-lg shadow-xs">
          <div class="w-full overflow-auto">
               <table class="w-full whitespace-no-wrap">
                    <thead>
                         <tr
                              class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                              <th class="px-4 py-3">WHERE</th>
                              <th class="px-4 py-3"></th>
                         </tr>
                    </thead>
                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                         <tr v-for="where in where.data" :key="where.where_id"
                              class="text-gray-700 dark:text-gray-400 hover:bg-blue-100">
                              <td class="px-4 py-3 text-sm">{{ where.car_where }}</td>
                              <td
                                   class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                   <button @click="openModalEditWhere(where.where_id)"
                                        class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                                        type="button">
                                        <i class="fas fa-edit"></i>
                                   </button>
                                   <button @click="onclickDelete(where.where_id)"
                                        class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                                        type="button">
                                        <i class="fas fa-trash-alt"></i>
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

     <!-- Popup สำหรับเพิ่มสถานีใหม่ -->
     <div v-if="showAddModal" id="addWhereModal"
          class="fixed top-0 left-0 flex items-center justify-center w-full h-full modal">
          <div class="absolute w-full h-full bg-gray-900 opacity-70 modal-overlay"></div>
          <div
               class="z-50 w-11/12 h-60 p-5 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">
               <!-- Header -->
               <div class="flex items-center justify-center w-full h-auto">
                    <div class="flex items-start justify-start w-full h-auto py-2 text-xl font-bold">
                         เพิ่มสถานี
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
               <label class="block my-3 text-gray-700 text-md" for="car_chassis">ชื่อสถานี</label>
               <input v-model="car_where" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                    type="text" placeholder="Station" />

               <div class="col-span-2">
                    <button @click="submitForm"
                         class="w-full px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple">
                         บันทึกรายการ
                    </button>
               </div>
          </div>
     </div>

     <!-- Popup สำหรับแก้ไขสถานี -->
     <div v-if="showEditModal" id="editWhereModal"
          class="fixed top-0 left-0 flex items-center justify-center w-full h-full modal">
          <div class="absolute w-full h-full bg-gray-900 opacity-70 modal-overlay"></div>
          <div
               class="z-50 w-11/12 h-60 p-5 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">
               <!-- Header -->
               <div class="flex items-center justify-center w-full h-auto">
                    <div class="flex items-start justify-start w-full h-auto py-2 text-xl font-bold">
                         แก้ไขสถานี
                    </div>
                    <div class="flex justify-center w-1/12 h-auto cursor-pointer">
                         <svg @click="closeEditModal" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                              class="feather feather-x">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                         </svg>
                    </div>

                    <!--Header End-->
               </div>
               <label class="block my-3 text-gray-700 text-md" for="car_chassis">ชื่อสถานี</label>
               <input v-model="ecar_where" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                    type="text" placeholder="Station" />

               <div class="col-span-2">
                    <button @click="submitFormEdit(ewhere_id)"
                         class="w-full px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple">
                         อัพเดตรายการ
                    </button>
               </div>
          </div>
     </div>

</template>
<script>
import http from "@/services/BackendServices";
import "@ocrv/vue-tailwind-pagination/styles";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";


export default {
     data() {
          return {
               /*************ตัวแปร************** */
               where: [],
               progress: [],
               currentPage: 0,
               perPage: 0,
               total: 0,
               showAddModal: false,
               showEditModal: false,
               keyword: "",
               car_where: "",
               ecar_where: "",
               ewhere_id: "",
          };
     },
     components: {
          VueTailwindPagination,
     },

     methods: {
          show(car_id) {
               this.$router.push({ name: "CarDetail" });
               this.$store.state.carShow = car_id;
          },
          //function get getStation api
          async getWhere(pagenumber) {
               let response = await http.get(`where/s/w/1?page=${pagenumber}`);
               let responseWhere = response.data;
               this.where = responseWhere;
               this.currentPage = responseWhere.currentPage;
               this.perPage = responseWhere.per_page;
               this.total = responseWhere.total;
          },

          async getWhereSearch(pagenumber) {
               let response = await http.get(
                    `where/s/w/1/${this.keyword}?page=${pagenumber}`
               );
               let responseWhere = response.data;
               this.where = responseWhere;
               this.currentPage = responseWhere.currentPage;
               this.perPage = responseWhere.per_page;
               this.total = responseWhere.total;
          },

          // function click next page
          onPageClick(event) {
               this.currentPage = event;
               // เช็คว่ามีการค้นหาสินค้าอยู่หรือไม่
               if (this.keyword == "") {
                    // ไม่ได้ค้นหา
                    this.getWhere(this.currentPage);
               } else {
                    this.getWhere(this.currentPage);
               }
          },
          onSelectClick() {
               http.get(`cardb/${this.car_id}`).then((response) => {
                    this.car_chassis = response.data.car_chassis;
               });
          },

          //find car
          submitSearchForm() {
               if (this.keyword != "") {
                    //เรียก api search
                    http.get(`where/s/w/1/${this.keyword}`).then((response) => {
                         let responseWhere = response.data;
                         this.where = responseWhere;
                         this.currentPage = responseWhere.currentPage;
                         this.perPage = responseWhere.per_page;
                         this.total = responseWhere.total;
                    });
               } else {
                    this.$swal.fire("กรุณาป้อนสถานี");
               }
          },
          // clear search
          resetSearchForm() {
               this.currentPage = 1;
               this.getWhere(this.currentPage);
               this.keyword = "";
          },

          // แสดง popup เพิ่มรถยนต์
          //function open close popup
          openModalAddCar() {
               this.showAddModal = true;
          },
          closeAddModal() {
               this.showAddModal = false;
               this.onResetForm();
          },

          // onResetfrom
          onResetForm() {
               this.$refs.addWhereModal.reset();
               this.car_where = "";
          },

          // function submit form
          submitForm() {
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
                         title: "คุณต้องการเพิ่มสถานีใช่หรือไม่?",

                         icon: "warning",
                         showCancelButton: true,
                         confirmButtonText: "ใช่, บันทึก!",
                         cancelButtonText: "ไม่, ยกเลิก!",
                         reverseButtons: true,
                    })
                    .then((result) => {
                         if (result.isConfirmed) {
                              let data = new FormData();
                              data.append("car_where", this.car_where);
                              data.append("status", 1);

                              http.post("where", data).then(() => {
                                   swalWithBootstrapButtons
                                        .fire("บันทึกข้อมูลเรียบร้อย!", "", "success")
                                        .then(() => {
                                             this.getWhere(this.currentPage);
                                             this.closeAddModal();
                                        
                                        });
                              });


                         } else if (result.dismiss === this.$swal.DismissReason.cancel) {
                              swalWithBootstrapButtons.fire(
                                   "ยกเลิก",
                                   "ยกเลิกการบันทึก",
                                   "error"
                              );
                         }
                    });

          },

          // แสดง popup แก้ไขรถยนต์

          openModalEditWhere(where_id) {
               http.get(`where/${where_id}`).then((response) => {
                    this.ewhere_id = response.data.where_id;
                    this.ecar_where = response.data.car_where;
                    this.showEditModal = true;


               });
               console.log(where_id);
          },

          closeEditModal() {
               this.showEditModal = false;

          },

          // function Edit form
          submitFormEdit(where_id) {
               let data = new FormData();
               data.append("car_where", this.ecar_where);
               data.append('_method', 'PATCH')
               http.post(`where/${where_id}`, data).then(
                    response => {
                         console.log(response.data)
                         if (this.keyword == "") {
                              this.getWhere(this.currentPage)
                         } else {
                              this.getWhereSearch(this.currentPage)
                         }
                         this.$swal.fire({
                              icon: "success",
                              title: "แก้ไขข้อมูลสถานีเรียบร้อย",
                              showConfirmButton: false,
                              timer: 1500,
                         }).then(() => {
                              this.showEditModal = false;
                         });
                    }
               )
          },
          onclickDelete(where_id) {
               this.$swal.fire({
                    title: 'ยืนยันการลบรายการนี้',
                    showDenyButton: false,
                    showCancelButton: true,
                    confirmButtonText: `ยืนยัน`,
                    cancelButtonText: `ปิดหน้าต่าง`,
               }).then((result) => {
                    if (result.isConfirmed) {
                         http.delete(`where/${where_id}`).then(() => {
                              this.$swal.fire('ลบรายการเรียบร้อย!', '', 'success')
                              // เมื่อแก้ไขรายการเสร็จทำการ ดึงสินค้าล่าสุดมาแสดง
                              if (this.keyword == "") {
                                   this.getWhere(this.currentPage)
                              } else {
                                   this.getWhereSearch(this.currentPage)
                              }
                         }).catch(error => {
                              console.log(error.response.data);
                              console.log(error.response.status);
                              console.log(error.response.headers);
                         })
                    }
               });



          }


     },

     mounted() {
          this.currentPage = 1;

          this.getWhere(this.currentPage);

          http.get(`where/s/w/1?page=${this.currentPage}`).then((response) => {
               let responseWhere = response.data;
               this.where = responseWhere;
          });
     },
};
</script>
