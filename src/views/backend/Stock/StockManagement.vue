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
            <span class="text-gray-700 dark:text-gray-400">
              Select area
            </span>
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
    class=" items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 space-x-3 grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1">
    <div>
      <p class="mb-2 text-sm font-semibold text-black dark:text-gray-400">
        Stock A (500) : ลานจอดรถ VDQi หลังกำแพง ( custom text description )
      </p>
   <!-- Card Lotus's -->   
      <div class="py-4">
        <a class="  flex items-center justify-between p-4  text-sm font-semibold  bg-gray-200 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
        >Lotus's
        </a>
      </div>
  <!-- Card Lotus's -->
    </div>
  </div>
  <div  class="py-4">
    <a  @click="ViewPicture"
      class=" flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
      href="">
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
          </path>
        </svg>
        <span>ภาพอธิบายลานจอด</span>
      </div>
      <span>View &RightArrow;</span>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    ViewPicture() {
      this.$swal.fire({
        imageUrl: "https://placeholder.pics/svg/300x1500",
        imageHeight: 500,
        imageAlt: "A tall image",
      });
    },
  },
};
</script>
