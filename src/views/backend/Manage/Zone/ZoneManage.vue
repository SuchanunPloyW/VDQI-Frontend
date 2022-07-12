<template>
  <h2 class="my-6 text-2xl font-semibold text-black">Zone</h2>
  <!-- Cards -->
  <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
    <!-- Card -->

    <div class="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
          </path>
        </svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          โซนจอดรถทั้งหมด
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
          687
        </p>
      </div>
    </div>
  </div>
  <!-- ตารางสแดง Stock รถในลานจอด -->
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th class="px-4 py-3">ID</th>
            <th class="px-4 py-3">Chassisnum</th>

          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          <tr class="text-gray-700 dark:text-gray-400 hover:bg-blue-100">
            <td class="px-4 py-3 text-lg">{{ }}</td>
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <div>
                  <p class="text-lg text-gray-600 dark:text-gray-400">
                    {{ }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-lg">{{ }}</td>
            <td class="px-4 py-3 text-sm">
              <div class="flex items-center text-sm">
                <div>
                  <p class="text-lg text-black-600 dark:text-gray-400">
                    {{ }} {{ }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-lg">{{ }}</td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
