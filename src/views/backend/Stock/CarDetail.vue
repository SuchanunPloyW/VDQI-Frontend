<template>
  <h2 class="my-6 text-2xl font-semibold text-black dark:text-gray-200">
    Stock Management
  </h2>
  <div class="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-2">
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
        <div class="flex flex-wrap mb-4">
          <div class="w-full px-4 md:w-96">
            <label class="text-gray-700 text-sm">Person</label>
            <input v-model="fullname"  class="
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
                <th class="px-4 py-3">DATE</th>
                <th class="px-4 py-3">TIME</th>
                <th class="px-4 py-3">ACTION</th>
                <th class="px-4 py-3">PERSON</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              <tr class="text-gray-700 dark:text-gray-400 hover:bg-blue-100 border-b">
                <td class="px-4 py-3 text-sm">Stock A</td>
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        B1
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        2022-04-26
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        16:46
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        นำเข้า
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        ณัฐนนท์
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/services/BackendServices";
export default {
  data() {
    return {
      car_id: "",
      car_chassis: "",
      car_where: "",
      car_position: "",
      date: "",
      time: "",
      fullname:""
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
  },
  mounted() {
    this.ShowCar();
  },
};
</script>
