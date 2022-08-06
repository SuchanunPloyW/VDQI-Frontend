<template>
    <h2 class="my-6 text-2xl font-semibold text-black dark:text-gray-200">
        เพิ่มรถยนต์
    </h2>
    
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
       
       <label class="block text-gray-700 text-sm mt-3 mb-2">เลขตัวถัง (17 หลัก)</label>
        <div class="flex">
            <span
                class="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
            </span>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight" for="Chassis"
                type="text" placeholder="Chassis no."  v-model="car_chassis" />
                

        </div>
        <label v-if="v$.Chassis.$error" class="mt-2 text-sm text-red-500 ">
                {{ v$.Chassis.$errors[0].$message }}
              </label>

        <div>
            <label class="block my-3 text-gray-700 text-md" for="car_where">ลานจอด</label>
            <select v-model="car_where" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                type="text">
                <option disabled value="">กรุณาเลือกลานในการจอด</option>
                <option v-for="where in where.data" :key="where.where_id"> {{ where.car_where }}</option>
            </select>
        </div>
        <label class="block my-3 text-gray-700 text-md" for="car_where">ช่องที่จอด</label>
        <div class="grid gap-1 md:grid-cols-10 xl:grid-cols-30">
            <div v-for="position in position.data" :key="position.position_id">
                <div @click="Select" class="position" :class="{
                    'position-0': position.position_status === '0',
                    'position-1': position.position_status === '1',
                    'position-2': position.position_status === '2',
                }">

                    <input class="hidden w-1" type="radio" :id="position.position_id" name="position-radio"
                        :value="position.car_position" v-model="car_position" />
                    <label :for="position.position_id" class="">
                        <span>A{{ position.car_position }} </span>
                    </label>
                </div>
            </div>
        </div>
        <button @click="submitForm"
            class="w-full px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple">
            บันทึกรายการ
        </button>
        <button @click="onResetForm"
            class="w-full px-4 py-2 mt-2 font-medium leading-5 text-white transition-colors duration-150 bg-gray-500 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-purple">
            ยกเลิก
        </button>







    </div>
</template>

<script>
import http from "@/services/BackendServices";
import useValidate from "@vuelidate/core";
import { required,  minLength, helpers } from "@vuelidate/validators";

export default {
    data() {
        return {
           v$: useValidate(),
            where: [],
            position: [],
            status: [],
            currentPage: 0,
            perPage: 0,
            total: 0,
            car_where: '',

        }
    },
    methods: {
        submitForm() {
          this.v$.$validate();

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
    onResetForm(){
      this.$router.push({ name: "StockList" });  
    }

    },
    validations() {
    return {
      Chassis: {
        required: helpers.withMessage('กรุณากรอกเลขตัวถัง (17 หลัก) ', required),
        minLength: helpers.withMessage(
          ({
            $params
          }) => `Password must be at least  ${$params.min} characters`,
          minLength(17)
        )
      },
    };
  },
    mounted() {
        this.currentPage = 1;

        http.get(`where?page=${this.currentPage}`).then(response => {
            let responseWhere = response.data
            this.where = responseWhere
        })
        http.get(`position?page=${this.currentPage}`).then((response) => {
            let responsePosition = response.data;
            this.position = responsePosition;
        });


    }
}

</script>
