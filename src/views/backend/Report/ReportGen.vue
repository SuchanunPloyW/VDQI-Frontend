<template>
  <h2 class="my-6 text-2xl font-semibold text-black dark:text-gray-200">
    Report Generator
  </h2>

  <div
    class="overflow-x-auto items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 space-x-3 grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1"
  >
    <div>
      <p class="mb-2 text-sm font-semibold text-black dark:text-gray-400">
        Stock A (15) : ลานจอดรถ VDQi ลานดิน
      </p>
    </div>
    <div
      class="h-14 overflow-x-auto items-center p-4 bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800 space-x-3 grid gap-0 mb-8 md:grid-cols-2 xl:grid-cols-1"
    >
      <div class="text-center">
        <h1 class="font-bold">Lotus's</h1>
      </div>
    </div>

    <ul class="grid grid-cols-8 gap-4 sm:grid-cols-2 md:grid-cols-16 md:gap-0">
      <li>
        <label
          class="inline-flex justify-center items-center p-5 w-2 h-2 text-gray-500"
        >
          <div class="text-center">
            <h1 class="text-xs font-semibold">A</h1>
          </div>
        </label>
      </li>

      <li v-for="positionA in positionA.data" :key="positionA.posit_id">
        <input
          type="radio"
          :id="positionA.posit_id"
          name="position-radio"
          :value="positionA.posit_id"
          v-model="posit_id"
          class="hidden peer"
          required
        />
        <label
          :for="positionA.posit_id"
          class="inline-flex justify-center items-center p-5 w-2 h-2 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div class="text-center">
            <h1 class="text-xs font-semibold">{{ positionA.posit }}</h1>
          </div>
        </label>
      </li>
    </ul>
    
  </div>
</template>
<script>
import http from "@/services/BackendServices";
export default {
  data() {
    return {
      positionA: [],
    };
  },
  methods: {},
  mounted() {
    this.currentPage = 1;
    // get stock A  / ตำแหน่ง A
    http.get(`posit/where/1/A?page=${this.currentPage}`).then((response) => {
      let responsePositionA = response.data;
      this.positionA = responsePositionA;
    });
  },
};
</script>
