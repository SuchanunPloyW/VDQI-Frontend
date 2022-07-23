<template>
  <h2 class="my-6 text-2xl font-semibold text-black dark:text-gray-200">
    Stock Management
  </h2>
  <div class="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div class=" gap-6 mb-8 md:grid-cols-2 xl:grid-cols-2">
      <!-- //gap-6 mb-8 md:grid-cols-2 xl:grid-cols-2 -->
      <form enctype="multipart/form-data">
        <h4 class="font-semibold">Car Information</h4>
        <div class="flex flex-wrap mb-4">
          <div class="w-full px-4 md:w-96">
            <label class="text-gray-700 text-sm">chassis no.</label>
            <input v-model="car_chassis" class="
              border-solid border-2 border-gray-100
              text-sm
              w-full
              px-2
              py-2
              leading-tight
              text-gray-700
            " type="text" readonly />
          </div>
        </div>
        <div class="flex flex-wrap mb-4">
          <div class="w-full px-4 md:w-96">
            <label class="text-gray-700 text-sm">Where</label>
            <input v-model="car_where" class="
              border-solid border-2 border-gray-100
              text-sm
              w-full
              px-2
              py-2
              leading-tight
              text-gray-700
            " type="text" readonly />
          </div>
        </div>
        <div class="flex flex-wrap mb-4">
          <div class="w-full px-4 md:w-96">
            <label class="text-gray-700 text-sm">Position</label>
            <input v-model="car_position" class="
              border-solid border-2 border-gray-100
              text-sm
              w-full
              px-2
              py-2
              leading-tight
              text-gray-700
            " type="text" readonly />
          </div>
        </div>
        <div class="flex flex-wrap mb-4">
          <div class="w-full px-4 md:w-96">
            <label class="text-gray-700 text-sm">Date</label>
            <input v-model="date" class="
              border-solid border-2 border-gray-100
              text-sm
              w-full
              px-2
              py-2
              leading-tight
              text-gray-700
            " type="text" readonly />
          </div>
        </div>
        <div class="flex flex-wrap mb-4">
          <div class="w-full px-4 md:w-96">
            <label class="text-gray-700 text-sm">Time</label>
            <input v-model="time" class="
              border-solid border-2 border-gray-100
              text-sm
              w-full
              px-2
              py-2
              leading-tight
              text-gray-700
            " type="text" readonly />
          </div>
        </div>

      </form>

      <div class="w-full overflow-hidden rounded-lg shadow-xs">
        <h4 class="font-semibold">Car History</h4>
        <div class="w-full overflow-auto">
          <table class="w-full whitespace-no-wrap">
            <thead>
              <tr
                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th class="px-4 py-3">WHERE</th>
                <th class="px-4 py-3">POSITION</th>
                <th class="px-4 py-3">ACTION</th>
                <th class="px-4 py-3">PERSON</th>
                <th class="px-4 py-3">DATE</th>
                <th class="px-4 py-3">TIME</th>
                <th class="px-4 py-3">STATION</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              <tr v-for="req in req.data" :key="req.req_id"
                class="text-gray-700 dark:text-gray-400 hover:bg-blue-100 border-b">
                <td class="px-4 py-3 text-sm">{{ req.car_where }}</td>
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ req.car_position }}
                      </p>
                    </div>
                  </div>
                </td>

                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ req.req_status }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ req.fullname }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ req.req_date }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ req.req_time }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ req.car_station }}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-span-2">
          <button @click="openModal"
            class="w-full px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple">
            เบิกรถยนต์
          </button>
        </div>
        <div>
          <button @click="returnCarlist"
            class="w-full px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-gray-500 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-purple">
            ย้อนกลับ
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Popup สำหรับเบิกรถยนต์ -->
  <div v-if="showModal" id="addProductModal"
    class="fixed top-0 left-0 flex items-center justify-center w-full h-full modal">
    <div class="absolute w-full h-full bg-gray-900 opacity-70 modal-overlay"></div>
    <div class="z-50 w-11/12 p-5 mx-auto overflow-y-auto bg-white rounded shadow-lg h-4/5 modal-container md:max-w-md">
      <!-- Header -->
      <div class="flex items-center justify-center w-full h-auto">
        <div class="flex items-start justify-start w-full h-auto py-2 text-xl font-bold">
          เบิกรถยนต์
        </div>
        <div @click="closeModal" class="flex justify-center w-1/12 h-auto cursor-pointer">
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
        <form @submit.prevent="onSubmit">
          <label class="block my-3 text-gray-700 text-md" for="name">เลขตัวถัง</label>
          <input v-model="car_chassis"
            class="bg-gray-200 w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow" type="text" readonly>

          <label class="block my-3 text-gray-700 text-md" for="car_station">ดำเนินการที่สถานี</label>
          <select v-model="car_station" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text">
            <option disabled value="">กรุณาเลือกสถานีในการดำเนินการ</option>
            <option v-for="station in station.data" :key="station.station_id">{{ station.car_station }} </option>
          </select>

          <label class="block my-3 text-gray-700 text-md" for="car_where">โซนที่จอดล่าสุด </label>
          <select v-model="car_where" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text">
            <option disabled value="">กรุณาเลือกโซนในการจอด</option>
            <option v-for="where in where.data" :key="where.where_id"> {{ where.car_where }}</option>
          </select>

          <label class="block my-3 text-gray-700 text-md" for="car_position">ตำแหน่งที่จอดล่าสุด</label>
          <select v-model="car_position" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            type="text">
            <option disabled value="">กรุณาเลือกตำแหน่งในการจอด</option>
            <option v-for="position in position.data" :key="position.position"> {{ position.car_position }}</option>

          </select>
          <div class="col-span-2">
            <button @click="submitForm"
              class="w-full px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple">
              บันทึกรายการ
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>



</template>

<script>
import http from "@/services/BackendServices";
import { required, helpers } from '@vuelidate/validators'

export default {
  data() {
    return {
      /* ตัวแปร show detail */
      status: [],
      station: [],
      car_id: "",
      car_chassis: "",
      car_where: "",
      car_position: "",
      date: "",
      time: "",
      fullname: "",
      currentPage: 0,
      perPage: 0,
      total: 0,
      /* ตัวแปรเปิดปิด popup */
      showModal: false,

      /* ตัวแปร เบิกรถยนต์ */
      c_where: "",
      // car_position:"",
      car_station: "",
      c_date: "",
      c_time: "",
      req: [],


    };
  },
  methods: {
    ShowCar() {
      this.car_id = this.$store.state.carShow;
      http.get(`car/${this.car_id}`).then((response) => {
        this.car_chassis = response.data.car_chassis;
        this.car_where = response.data.car_where;
        this.car_position = response.data.car_position;
        this.date = response.data.date;
        this.time = response.data.time;
        this.fullname = response.data.fullname
      });
    },
    /* function popup */
    openModal() {
      this.showModal = true

    },
    closeModal() {
      this.showModal = false

    },
    returnCarlist() {
      this.$router.push({ name: 'StockList' })
    },
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
            `<p class="custom text-left font-normal text-xl"> <b>ดำเนินการที่ :</b> ${this.car_station}</p>` +
            ` <p class="custom text-left font-normal text-xl"> <b>โซนที่จอดล่าสุด :</b> ${this.car_where}</p>` +
            ` <p class="custom text-left font-normal text-xl">  <b>ตำแหน่งที่จอดล่าสุด :</b> ${this.car_position} </p>`,

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

            data.append('car_chassis', this.car_chassis)
            data.append('car_id', this.car_id)
            data.append('req_status', "นำออก")
            data.append("fullname", name);
            data.append("lastname", lastname);
            data.append("car_station", this.car_station);
            data.append('car_where', this.car_where)
            data.append('car_position', this.car_position)
            data.append('req_date', +d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())
            data.append('req_time', d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())

            http.post("req", data).then(() => {
              swalWithBootstrapButtons
                .fire("บันทึกข้อมูลเรียบร้อย!", "", "success")
                .then(() => {
                  this.$router.push({ name: "StockList" });
                  //window.location.reload();
                });
            })
          }
          else if (result.dismiss === this.$swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "ยกเลิกเรียบร้อย!",
              "คุณได้ยกเลิกการเบิกรถ",
              "error"
            );
          }
        });
      //  edit
      this.car_id = this.$store.state.carShow;
      let data = new FormData();
      data.append('car_where', this.car_where)
      data.append('car_position', this.car_position)
      data.append("_method", "PUT");
      http.post(`car/${this.car_id}`, data).then(response => {
        console.log(response.data)
      })


    },

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
    this.ShowCar();
    http.get(`station?page=${this.currentPage}`).then(response => {
      let responseStation = response.data
      this.station = responseStation
    }),
      http.get(`where?page=${this.currentPage}`).then(response => {
        let responseWhere = response.data
        this.where = responseWhere
      }),
      http.get(`position?page=${this.currentPage}`).then(response => {
        let responsePosition = response.data
        this.position = responsePosition
      }),

      http.get(`req/id/${this.car_id}?page=${this.currentPage}`).then(response => {
        let responsereq = response.data
        this.req = responsereq
        this.req.data.reverse();


      })

  },
};
</script>