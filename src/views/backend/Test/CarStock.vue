<template>
  <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
  
  </h2>

  <button>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
      stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  </button>

  <!-- ตารางสแดง Stock รถในลานจอด -->
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th class="px-4 py-3">ID</th>
            <th class="px-4 py-3">Chassisnum</th>
            <th class="px-4 py-3">Stock</th>
            <th class="px-4 py-3">Caretaker</th>
            <th class="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          <tr v-for="position in position.data" :key="position.position_id" class="text-gray-700 dark:text-gray-400 hover:bg-blue-100">
            <td class="px-4 py-3 text-lg">{{ position.position_id }}</td>
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <div>
                  <p class="text-lg text-gray-600 dark:text-gray-400">
                    {{ position.car_line }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-lg">{{ position.car_position }}</td>
            <td class="px-4 py-3 text-sm">
              <div class="flex items-center text-sm">
                <div>
                  <p class="text-lg text-black-600 dark:text-gray-400">
                    {{ position.joinwhere.car_where }} 
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-lg">{{ position.position_status }}</td>
            <td class="px-4 py-3 text-sm">
              <button
                class="px-4 py-2 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-yellow-400 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-500 focus:outline-none focus:shadow-outline-purple">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button
                class="px-4 py-2 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import http from '@/services/BackendServices'

export default {
  data() {
    return {
      position: [],
      currentPage: 0
    }
  },
  mounted() {
    this.currentPage = 1;
    // อ่านสินค้าจาก API
    http.get(`position?page=${this.currentPage}`).then(response => {
      let responsePosition = response.data
      this.position = responsePosition
      console.log(responsePosition)

    })

    /* http.get(`car?page=${this.currentPage}`).then(response => {
       let responseCar = response.data
       this.car = responseCar
       console.log(responseCar)
   }) */
  }



}

</script>
