<template>
  <!-- Desktop sidebar -->
  <aside class="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 xl:block">
    <div class="py-4 text-gray-500 dark:text-gray-400">

      <a class="ml-6 text-lg font-bold text-black" href="#">
        VDQI System
      </a>

      <ul class="mt-6">

        <li class="relative px-6 py-3">
          <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"></ul>
          <router-link to="/backend"
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100">
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
              </path>
            </svg>
            <span class="ml-4">Dashboard</span>
          </router-link>
        </li>
      </ul>

      <ul>
        <li class="relative px-6 py-3">
          <router-link to="/backend/stock"
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100">
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M5.029,1.734h10.935c0.317,0,0.575-0.257,0.575-0.575s-0.258-0.576-0.575-0.576H5.029 c-0.318,0-0.576,0.258-0.576,0.576S4.711,1.734,5.029,1.734z M1,5.188V19h18.417V5.188H1z M18.266,17.849H2.151V6.338h16.115 ">
              </path>
            </svg>
            <span class="ml-4">Stock Management</span>
          </router-link>
        </li>
      </ul>


      <ul>
        <li class="relative px-6 py-3">
          <router-link to="/backend/report"
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            href="forms.html">
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
              </path>
            </svg>
            <span class="ml-4">Report Generator</span>
          </router-link>
        </li>
      </ul>
      <div>

      </div>
      <ul class="pt-3 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"></ul>

      <h6 class="ml-6 text-sm text-gray">การจัดการระบบ</h6>

      <ul>
        <li class="relative px-6 py-3">
          <router-link to="/backend/zone"
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            href="forms.html">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                clip-rule="evenodd" />
            </svg>
            <span class="ml-4">Zone</span>
          </router-link>
        </li>
      </ul>


      <ul>
        <li class="relative px-6 py-3">
          <router-link to="/backend/carstock"
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            href="forms.html">
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
              </path>
            </svg>
            <span class="ml-4">Test</span>
          </router-link>
        </li>
      </ul>






    </div>
  </aside>

  <!-- Mobile sidebar -->
  <!-- Backdrop -->
  <aside :class="{ ' hidden': this.$store.state.showSideMenu }"
    class="fixed inset-y-0 z-20 flex-shrink-0  w-64 mt-16 overflow-y-auto bg-gray-100 dark:bg-gray-800 md:hidden">
    <div class="py-4 text-black ">

      <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">VDQI System</a>

      <ul class="mt-6">
        <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"></ul>
        <li class="relative px-6 py-3">
          <span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"></span>
          <router-link to="/backend"
            class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
            href="#">
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
              </path>
            </svg>
            <span class="ml-4">Dashboard</span>
          </router-link>
        </li>
      </ul>

      <ul>
        <li class="relative px-6 py-3">
          <router-link to="/backend/stock"
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
              </path>
            </svg>
            <span class="ml-4">Stock Management</span>
          </router-link>
        </li>
      </ul>


      <ul>
        <li class="relative px-6 py-3">
          <router-link to="/backend/report"
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
              </path>
            </svg>
            <span class="ml-4">Report Generator</span>
          </router-link>
        </li>
        <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"></ul>
      </ul>
      <h6 class="ml-6 text-sm text-gray">การจัดการระบบ</h6>
      <ul>
        <li class="relative px-6 py-3">
          <div
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            href="forms.html">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                clip-rule="evenodd" />
            </svg>
            <span class="ml-4">System</span>
          </div>
        </li>
      </ul>



    </div>
  </aside>
</template>

<script>
export default {

  methods: {

  },
}
</script>