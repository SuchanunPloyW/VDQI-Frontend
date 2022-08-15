<template>
  <div class="p-10 bg-gray-200 text-gray-700">
    <div class="relative w-[400px] overflow-hidden">
        <input type="checkbox" class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer">
        <div class="bg-blue-500 h-12 w-full pl-5 flex items-center">
            <h1 class="text-lg font-semibold text-white">Stock A</h1>
        </div>
         <!-- icon -->
        <div class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0  ">
      
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        <!-- content -->
        <div class="bg-white overflow-hidden transition-all duration-500  ">
            <div class="p-4">
                <p>
                    ลานจอด A 
                    ************************
                </p>

            </div>

        </div>

    </div>
  </div>
</template>