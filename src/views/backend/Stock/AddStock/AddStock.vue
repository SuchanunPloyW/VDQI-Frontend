<template>
  <h2 class="my-6 text-2xl font-semibold text-black dark:text-gray-200">
    เพิ่มรถยนต์
  </h2>

  <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">

    <label class="block text-gray-700 text-sm mt-3 mb-2">เลขตัวถัง (17 หลัก)</label>
    <div class="flex">
      <span
        class="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      </span>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight" for="Chassis"
        type="text" placeholder="Chassis no." v-model="car_chassis" />


    </div>
    <label v-if="v$.Chassis.$error" class="mt-2 text-sm text-red-500 ">
      {{ v$.Chassis.$errors[0].$message }}
    </label>

    <div>
      <label class="block my-3 text-gray-700 text-md" for="car_where">ลานจอด</label>
      <select id="Myid" v-model="car_where" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
        type="text">
        <option disabled value="">กรุณาเลือกลานในการจอด</option>
        <option v-for="where in where.data" :key="where.where_id" :value="where.car_where"> {{ where.car_where }}
        </option>
      </select>
    </div>
    <br>
    <div class="">
      <details class="bg-white border-2 shadow rounded group mb-4" open>
        <summary
          class="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500 rounded group-open:rounded-b-none group-open:z-[1] relative">
          <h3 class="flex flex-1 p-4 font-semibold text-sm">
            Stock A (15) : ลานจอดรถ VDQi ลานดิน
          </h3>
          <div class="flex w-10 items-center justify-center">
            <div
              class="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left">
            </div>
          </div>
        </summary>
        <div class="p-4">
          <!-- position A -->
          <div class="  grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-16 md:gap-0">
            <div class="ABCDE">A</div>
            <div class="d-none" v-for="positionA in positionA.data" :key="positionA.position_id">
              <div @click="Select" class="position" :class="{
                'position-0': positionA.position_status === '0',
                'position-1': positionA.position_status === '1',
                'position-2': positionA.position_status === '2',
              }">
                <input class="hidden w-1" type="radio" :id="positionA.position_id" name="position-radio"
                  :value="positionA.car_position" v-model="car_position" />

                <label :for="positionA.position_id" class="">
                  <span>{{ positionA.car_position }} </span>
                </label>
              </div>
            </div>
          </div>

          <br>
          <!-- position A -->

          <!-- position B -->
          <div class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-16 md:gap-0">
            <div class="ABCDE">B</div>
            <div v-for="positionB in positionB.data" :key="positionB.position_id">
              <div @click="Select" class="position" :class="{
                'position-0': positionB.position_status === '0',
                'position-1': positionB.position_status === '1',
                'position-2': positionB.position_status === '2',
              }">
                <input class="hidden w-1" type="radio" :id="positionB.position_id" name="position-radio"
                  :value="positionB.car_position" v-model="car_position" />

                <label :for="positionB.position_id" class="">
                  <span>{{ positionB.car_position }} </span>
                </label>
              </div>
            </div>
          </div>
          <br>
          <!-- position B -->

          <!-- position C -->
          <div class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-16 md:gap-0 ">
            <div class="ABCDE">C</div>
            <div v-for="positionC in positionC.data" :key="positionC.position_id">
              <div @click="Select" class="position" :class="{
                'position-0': positionC.position_status === '0',
                'position-1': positionC.position_status === '1',
                'position-2': positionC.position_status === '2',
              }">
                <input class="hidden w-1" type="radio" :id="positionC.position_id" name="position-radio"
                  :value="positionC.car_position" v-model="car_position" />

                <label :for="positionC.position_id" class="">
                  <span>{{ positionC.car_position }} </span>
                </label>
              </div>
            </div>
          </div>
          <br>
          <!-- position C -->

          <!-- position D -->
          <div class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-16 md:gap-0 ">
            <div class="ABCDE">D</div>
            <div v-for="positionD in positionD.data" :key="positionD.position_id">
              <div @click="Select" class="position" :class="{
                'position-0': positionD.position_status === '0',
                'position-1': positionD.position_status === '1',
                'position-2': positionD.position_status === '2',
              }">
                <input class="hidden w-1" type="radio" :id="positionD.position_id" name="position-radio"
                  :value="positionD.car_position" v-model="car_position" />

                <label :for="positionD.position_id" class="">
                  <span>{{ positionD.car_position }} </span>
                </label>
              </div>
            </div>
          </div>
          <br>
          <!-- position D -->
        </div>
      </details>
    </div>

    <div class="">
      <details class="bg-white border-2 shadow rounded group mb-4 overflow-x-auto" open>
        <summary
          class="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500 rounded group-open:rounded-b-none group-open:z-[1] relative">
          <h3 class="flex flex-1 p-4 font-semibold text-sm">
            Stock B (160) : ลานลานจอดรถ VDQi หลังกำแพง
          </h3>
          <div class="flex w-10 items-center justify-center">
            <div
              class="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left">
            </div>
          </div>
        </summary>
        <div class="p-4">
           <!-- position A -->
      <div class="grid grid-cols-8 gap-8 sm:grid-cols-2 md:grid-cols-33 md:gap-12 ">
         <div class="ABCDE">A</div>
        <div v-for="positionA2 in positionA2.data" :key="positionA2.position_id">
          <div @click="Select" class="position" :class="{
            'position-0': positionA2.position_status === '0',
            'position-1': positionA2.position_status === '1',
            'position-2': positionA2.position_status === '2',
          }">
            <input class="hidden w-1" type="radio" :id="positionA2.position_id" name="position-radio"
              :value="positionA2.position_id" v-model="car_position" />
            <label :for="positionA2.position_id" class="">
              <span>{{ positionA2.car_position }} </span>
            </label>
          </div>
        </div>
      </div>
      <br>
      <!-- position A -->
      <!-- position B -->
      <div class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-33 md:gap-12 ">
        <div class="ABCDE">B</div>
        <div v-for="positionB2 in positionB2.data" :key="positionB2.position_id">
          <div @click="Select" class="position" :class="{
            'position-0': positionB2.position_status === '0',
            'position-1': positionB2.position_status === '1',
            'position-2': positionB2.position_status === '2',
          }">
            <input class="hidden w-1" type="radio" :id="positionB2.position_id" name="position-radio"
              :value="positionB2.position_id" v-model="car_position" />

            <label :for="positionB2.position_id" class="">
              <span>{{ positionB2.car_position }} </span>
            </label>
          </div>
        </div>
      </div>
       <br>
      <!-- position B -->
      <!-- position C -->
      <div class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-33 md:gap-12 ">
         <div class="ABCDE">C</div>
        <div v-for="positionC2 in positionC2.data" :key="positionC2.position_id">
          <div @click="Select" class="position" :class="{
            'position-0': positionC2.position_status === '0',
            'position-1': positionC2.position_status === '1',
            'position-2': positionC2.position_status === '2',
          }">
            <input class="hidden w-1" type="radio" :id="positionC2.position_id" name="position-radio"
              :value="positionC2.position_id" v-model="car_position" />

            <label :for="positionC2.position_id" class="">
              <span>{{ positionC2.car_position }} </span>
            </label>
          </div>
        </div>
      </div>
       <br>
      <!-- position C -->
       <!-- position D -->
      <div class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-33 md:gap-12 ">
         <div class="ABCDE">D</div>
        <div v-for="positionD2 in positionD2.data" :key="positionD2.position_id">
          <div @click="Select" class="position" :class="{
            'position-0': positionD2.position_status === '0',
            'position-1': positionD2.position_status === '1',
            'position-2': positionD2.position_status === '2',
          }">
            <input class="hidden w-1" type="radio" :id="positionD2.position_id" name="position-radio"
              :value="positionD2.position_id" v-model="car_position" />

            <label :for="positionD2.position_id" class="">
              <span>{{ positionD2.car_position }} </span>
            </label>
          </div>
        </div>
      </div>
       <br>
      <!-- position D -->
      <!-- position E -->
      <div class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-33 md:gap-12 ">
         <div class="ABCDE">E</div>
        <div v-for="positionE2 in positionE2.data" :key="positionE2.position_id">
          <div @click="Select" class="position" :class="{
            'position-0': positionE2.position_status === '0',
            'position-1': positionE2.position_status === '1',
            'position-2': positionE2.position_status === '2',
          }">
            <input class="hidden w-1" type="radio" :id="positionE2.position_id" name="position-radio"
              :value="positionE2.position_id" v-model="car_position" />

            <label :for="positionE2.position_id" class="">
              <span>{{ positionE2.car_position }} </span>
            </label>
          </div>
        </div>
      </div>
       <br>
      <!-- position E -->
        </div>
      </details>
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
import { required, minLength, helpers } from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useValidate(),
      where: [],
      positionA: [],
      positionB: [],
      positionC: [],
      positionD: [],

      positionA2: [],
      positionB2: [],
      positionC2: [],
      positionD2: [],
      positionE2: [],

      

   
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
    onResetForm() {
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
    // get stock A  / ตำแหน่ง A
    http.get(`position/search/1/a?page=${this.currentPage}`).then((response) => {
      let responsePositionA = response.data;
      this.positionA = responsePositionA;
    });
    // get stock A  / ตำแหน่ง B
    http.get(`position/search/1/b?page=${this.currentPage}`).then((response) => {
      let responsePositionB = response.data;
      this.positionB = responsePositionB;
    });

    // get stock A  / ตำแหน่ง C
    http.get(`position/search/1/c?page=${this.currentPage}`).then((response) => {
      let responsePositionC = response.data;
      this.positionC = responsePositionC;
    });

    // get stock A  / ตำแหน่ง D
    http.get(`position/search/1/d?page=${this.currentPage}`).then((response) => {
      let responsePositionD = response.data;
      this.positionD = responsePositionD;
    });

    /*  */
    // get stock B  / ตำแหน่ง A
    http.get(`position/search/2/a?page=${this.currentPage}`).then((response) => {
      let responsePositionA2 = response.data;
      this.positionA2 = responsePositionA2;
    });
     // get stock B  / ตำแหน่ง B
    http.get(`position/search/2/b?page=${this.currentPage}`).then((response) => {
      let responsePositionB2 = response.data;
      this.positionB2 = responsePositionB2;
    });
    // get stock A  / ตำแหน่ง C
    http.get(`position/search/2/c?page=${this.currentPage}`).then((response) => {
      let responsePositionC2 = response.data;
      this.positionC2 = responsePositionC2;
    });
    // get stock A  / ตำแหน่ง D
    http.get(`position/search/2/d?page=${this.currentPage}`).then((response) => {
      let responsePositionD2 = response.data;
      this.positionD2 = responsePositionD2;
    });
     // get stock A  / ตำแหน่ง E
    http.get(`position/search/2/e?page=${this.currentPage}`).then((response) => {
      let responsePositionE2 = response.data;
      this.positionE2 = responsePositionE2;
    });
    



  }
}

</script>
<style>
input:checked+label {
  background-color: RED;
}

.position {
  background-color: rgb(47, 255, 186);
  padding-top: 10px;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
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

