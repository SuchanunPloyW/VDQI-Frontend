<template>
    <div class="flex flex-wrap custom">
        <div class="w-full px-4 pt-5">
            <div class=" pb-5 relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-2xl">
                <div class="container px-4 mx-auto">
                    <div class="px-6 pb-5">
                        <div class="mt-6 text-center">
                            <h1 class="py-6 text-3xl font-bold">
                                VDQI | แบบการตรวจประเมินค่าความพึงพอใจรถใหม่
                            </h1>
                        </div>
                    </div>
                    <form enctype="multipart/form-data">
                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">ชื่อพนักงานขาย</label>
                        <input type="text" v-model="person"
                            class="w-full px-3 py-2 leading-tight text-gray-700 shadow appearance-none border"
                            placeholder="Name" />
                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">ทีม</label>
                        <input type="text" v-model="team"
                            class="w-full px-3 py-2 leading-tight text-gray-700 shadow appearance-none border"
                            placeholder="Team" />

                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">สาขา</label>
                        <ul
                            class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center pl-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="คลอง 7"
                                        name="list-radio" v-model="branch"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <div
                                        class="py-3 ml-2 w-full text-sm font-semibold text-gray-900 dark:text-gray-300">
                                        คลอง 7
                                    </div>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center pl-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="ตลาดไทย"
                                        name="list-radio" v-model="branch"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <div
                                        class="py-3 ml-2 w-full text-sm font-semibold text-gray-900 dark:text-gray-300">
                                        ตลาดไทย

                                    </div>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center pl-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="วงเวียนตลาดไทย"
                                        name="list-radio" v-model="branch"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <div
                                        class="py-3 ml-2 w-full text-sm font-semibold text-gray-900 dark:text-gray-300">
                                        วงเวียนตลาดไทย

                                    </div>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center pl-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="อื่น ๆ"
                                        name="list-radio" v-model="branch"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <div
                                        class="py-3 ml-2 w-full text-sm font-semibold text-gray-900 dark:text-gray-300">
                                        อื่น ๆ
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">เลขตัวถัง
                            <div class="relative text-gray-500 focus-within:text-purple-600">
                                <input type="text" v-model="car_chassis" maxlength="17"
                                    class="w-full px-3 py-2 leading-tight text-gray-700 shadow appearance-none border uppercase"
                                    placeholder="chassis no." />
                                <button @click="Check_chassis" type="button"
                                    class="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    ตรวจสอบ
                                </button>
                            </div>

                        </label>
                        <div v-if="v$.car_chassis.$error" class="mt-2 text-sm text-red-500">
                            {{ v$.car_chassis.$errors[0].$message }}
                        </div>
                        <p v-if="!isHiddenE" class="text-red-500 text-sm italic text-end"> **
                            กรุณาตรวจสอบเลขตัวถังให้ถูกต้อง **</p>
                        <p v-if="!isHiddenS" class="text-green-500 text-sm italic text-end"> ** เลขตัวถังถูกต้อง **</p>


                        <!-- table การบริการของพนักงานติดตั้ง -->

                        <div class="pt-4 container  mx-auto">
                            <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                                การบริการของพนักงานติดตั้ง
                            </h4>
                            <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                                <div class="w-full overflow-x-auto">
                                    <table class="w-full whitespace-no-wrap">
                                        <thead>
                                            <tr
                                                class="text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                <th class="px-4 py-3 ">รายการประเมิน</th>
                                                <th class="px-4 py-3">ความพึงพอใจ</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                            <tr class="text-gray-700 dark:text-gray-400">
                                                <td class="px-4 py-3">
                                                    <div class="flex items-center text-sm">
                                                    </div>
                                                    <div>
                                                        <p class="font-semibold">1.
                                                            พนักงานติดตั้งมีการบริการที่สะดวกและรวดเร็ว
                                                        </p>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm">
                                                    <ul
                                                        class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="1.1" type="radio" value="1" name="Topic1"
                                                                    v-model="topic_1"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ดีมาก

                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="1.0" type="radio" value="0" name="Topic1"
                                                                    v-model="topic_1"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ควรปรับปรุง

                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr class="text-gray-700 dark:text-gray-400">
                                                <td class="px-4 py-3">
                                                    <div class="flex items-center text-sm">
                                                    </div>
                                                    <div>
                                                        <p class="font-semibold">2. พนักงานติดตั้งมีการช่วยเหลือ</p>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm">
                                                    <ul
                                                        class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="2.1" type="radio" value="1" name="Topic2"
                                                                    v-model="topic_2"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ดีมาก

                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="2.0" type="radio" value="0" name="Topic2"
                                                                    v-model="topic_2"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ควรปรับปรุง

                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr class="text-gray-700 dark:text-gray-400">
                                                <td class="px-4 py-3">
                                                    <div class="flex items-center text-sm">
                                                    </div>
                                                    <div>
                                                        <p class="font-semibold">3. พนักงานติดตั้งใช้คำพูดที่เหมาะสม</p>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm">
                                                    <ul
                                                        class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="3.1" type="radio" value="1" name="Topic3"
                                                                    v-model="topic_3"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ดีมาก

                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="3.0" type="radio" value="0" name="Topic3"
                                                                    v-model="topic_3"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ควรปรับปรุง

                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>

                        <!-- table คุณภาพงาน -->
                        <div class="pt-4 container  mx-auto">
                            <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                                คุณภาพงาน
                            </h4>
                            <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                                <div class="w-full overflow-x-auto">
                                    <table class="w-full whitespace-no-wrap">
                                        <thead>
                                            <tr
                                                class="text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                <th class="px-4 py-3 ">รายการประเมิน</th>
                                                <th class="px-4 py-3">ความพึงพอใจ</th>

                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                            <tr class="text-gray-700 dark:text-gray-400">
                                                <td class="px-4 py-3">
                                                    <div class="flex items-center text-sm">
                                                    </div>
                                                    <div>
                                                        <p class="font-semibold">4. อุปกรณ์ตกแต่งมีความครบถ้วน</p>

                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm">
                                                    <ul
                                                        class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="4.1" type="radio" value="1" name="Topic4"
                                                                    v-model="topic_4"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ใช่

                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="4.0" type="radio" value="0" name="Topic4"
                                                                    v-model="topic_4"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ไม่ใช่

                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr class="text-gray-700 dark:text-gray-400">
                                                <td class="px-4 py-3">
                                                    <div class="flex items-center text-sm">
                                                    </div>
                                                    <div>
                                                        <p class="font-semibold">5. ติดตั้งสมบูรณ์</p>

                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm">
                                                    <ul
                                                        class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="5.1" type="radio" value="1" name="Topic5"
                                                                    v-model="topic_5"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ใช่

                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="5.0" type="radio" value="0" name="Topic5"
                                                                    v-model="topic_5"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ไม่ใช่

                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr class="text-gray-700 dark:text-gray-400">
                                                <td class="px-4 py-3">
                                                    <div class="flex items-center text-sm">
                                                    </div>
                                                    <div>
                                                        <p class="font-semibold">6. ความสะอาดภายนอกภายใน</p>

                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm">
                                                    <ul
                                                        class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="6.1" type="radio" value="1" name="Topic6"
                                                                    v-model="topic_6"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ใช่

                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="6.0" type="radio" value="0" name="Topic6"
                                                                    v-model="topic_6"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ไม่ใช่

                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr class="text-gray-700 dark:text-gray-400">
                                                <td class="px-4 py-3">
                                                    <div class="flex items-center text-sm">
                                                    </div>
                                                    <div>
                                                        <p class="font-semibold">7. ไม่มีรอยรอบคัน</p>

                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm">
                                                    <ul
                                                        class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="7.1" type="radio" value="1" name="Topic7"
                                                                    v-model="topic_7"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ใช่

                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="7.0" type="radio" value="0" name="Topic7"
                                                                    v-model="topic_7"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ไม่ใช่

                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr class="text-gray-700 dark:text-gray-400">
                                                <td class="px-4 py-3">
                                                    <div class="flex items-center text-sm">
                                                    </div>
                                                    <div>
                                                        <p class="font-semibold">8. ไม่มีรอยหนูกัดในห้องเครื่องหรือตัวรถ
                                                        </p>

                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm">
                                                    <ul
                                                        class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="8.1" type="radio" value="1" name="Topic8"
                                                                    v-model="topic_8"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ใช่

                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="8.0" type="radio" value="0" name="Topic8"
                                                                    v-model="topic_8"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ไม่ใช่

                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr class="text-gray-700 dark:text-gray-400">
                                                <td class="px-4 py-3">
                                                    <div class="flex items-center text-sm">
                                                    </div>
                                                    <div>
                                                        <p class="font-semibold">9.
                                                            อุปกรณ์มาตราฐานครบถ้วนสมบูรณ์(ผ้ายาง,เครื่องมือ,ลมยาง)</p>

                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm">
                                                    <ul
                                                        class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="9.1" type="radio" value="1" name="Topic9"
                                                                    v-model="topic_9"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ใช่

                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                                            <div class="flex items-center pl-3">
                                                                <input id="9.0" type="radio" value="0" name="Topic9"
                                                                    v-model="topic_9"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ไม่ใช่

                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>

                        </div>

                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">รายละเอียดเพิ่มเติม</label>

                        <textarea cols="30 " rows="5" placeholder="Other" v-model="detail"
                            class="shadow appearance-none border relative w-full px-3 py-1 text-base bg-white text-gray-700 focus:outline-none focus:shadow-outline"></textarea>

                       <!--  <div class="mt-4">
                            <img v-if="imgUrl" :src="imgUrl" class="w-96 h-96" />
                        </div> -->

                        <label class=" font-semibold block my-3 text-gray-700 text-md"
                            for="image">รูปภาพเพิ่มเติม</label>

                        <input class="w-full px-3 py-2 leading-tight text-gray-700 shadow appearance-none border"
                            id="upload-file" type="file" multiple @change="uploadImage" name="PictureCar[]">

                        <div class="container px-4 mx-auto  ">
                            <br>
                            <div class="max-w-sm rounded overflow-hidden shadow-lg " v-for="(image, key) in PictureCar"
                                :key="key">
                                <img class="w-full" v-bind:ref="'image'" alt="" src="">
                                <div class="px-6 py-4 text-center ">
                                    <button type="button" @click="removeImage(image, key)">
                                        <svg class="w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                            className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>

                                        <!-- <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v7a1 1 0 001 1h12a1 1 0 001-1v-7a1 1 0 00-1-1H4zm3 2a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                                                clip-rule="evenodd"></path>
                                        </svg> -->

                                    </button>
                                </div>
                            </div>

                            <!--  <div v-for="(image, key) in PictureCar" :key="key">
                                <img v-bind:ref="'image'" alt="" src="" class="" />
                            </div> -->
                        </div>






                        <!--  <div v-for="(image, key) in PictureCar" :key="key">
                            <div class="flex flex-row items-center gap-2 bg-gray-50">
                                <div class="">
                                    <img class="w-1/2 h-1/2" v-bind:ref="'image'" alt="" src="" />
                                </div>
                                <button type="button" @click="removeImage(image, key)">ลบรูปภาพ</button>
                            </div>
                            
                        </div> -->

                        <button type="button" @click="submit_evaluation(car_chassis)"
                            class="bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:outline-none  font-medium rounded-lg text-base text-white px-1 py-1 w-full mt-4">
                            บันทึก
                        </button>
                        <button type="button"
                            class="bg-red-600 hover:bg-red-400 focus:ring-4 focus:outline-none  font-medium rounded-lg text-base text-white px-1 py-1 w-full mt-4">
                            ยกเลิก
                        </button>


                    </form>

                </div>
            </div>
        </div>
    </div>



</template>
<script>
import http from "@/services/BackendServices";
import useValidate from "@vuelidate/core";
import { required, minLength, helpers, } from "@vuelidate/validators";


export default {
    name: "App",
    components: {},
    data() {
        return {
            //ตัวแปร
            evaluation_id: '',
            person: "",
            team: "",
            branch: "",
            car_chassis: "",
            topic_1: "",
            topic_2: "",
            topic_3: "",
            topic_4: "",
            topic_5: "",
            topic_6: "",
            topic_7: "",
            topic_8: "",
            topic_9: "",
            detail: "",
            Image: "",
            date: "",
            time: "",
            imgUrl: "",
            file: null,
            PictureCar: [],
            form: new FormData(),
            title: "",
            price: "",
            isHiddenE: true,
            isHiddenS: true,
            showAddModal: false,
            v$: useValidate(),

            check_chassis: false,

        };
    },
    methods: {
        
        //ฟังก์ชั่น
        submit_evaluation(car_chassis) {
            this.v$.$validate();
            if (!this.v$.$error && this.check_chassis == true) {
                const swalWithBootstrapButtons = this.$swal.mixin({
                    customClass: {
                        title: "font-weight-bold",
                        confirmButton:
                            " bg-green-600 px-6 py-3 mx-4 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none	",
                        cancelButton:
                            "bg-red-600 px-6 py-3 mx-4 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none	",
                    },
                    buttonsStyling: false,
                });
                swalWithBootstrapButtons
                    .fire({
                        title: "คุณต้องการบันทึกข้อมูลใช่หรือไม่?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "ใช่, บันทึกข้อมูล!",
                        cancelButtonText: "ไม่, ยกเลิก!",
                        reverseButtons: true,
                    })
                    .then((result) => {
                        if (result.isConfirmed) {
                            swalWithBootstrapButtons.fire({
                                title: 'โปรดอย่าปิดหน้านี้ !',
                                html: 'ระบบกำลังดำเนินการส่งข้อมูล',// add html attribute if you want or remove
                                allowOutsideClick: false,
                                showConfirmButton: false,
                                willOpen: () => {
                                    this.$swal.showLoading()
                                    const data = new FormData();
                                    data.append('person', this.person);
                                    data.append('team', this.team);
                                    data.append('branch', this.branch);
                                    data.append('car_chassis', this.car_chassis);
                                    data.append('topic_1', this.topic_1);
                                    data.append('topic_2', this.topic_2);
                                    data.append('topic_3', this.topic_3);
                                    data.append('topic_4', this.topic_4);
                                    data.append('topic_5', this.topic_5);
                                    data.append('topic_6', this.topic_6);
                                    data.append('topic_7', this.topic_7);
                                    data.append('topic_8', this.topic_8);
                                    data.append('topic_9', this.topic_9);
                                    data.append('detail', this.detail);
                                    for (let i = 0; i < this.PictureCar.length; i++) {
                                        data.append("image_path[]", this.PictureCar[i]);
                                        console.log(this.PictureCar[i]);
                                    }
                                    document.getElementById('upload-file').value = [];
                                    http.post("evaluation", data).then((res) => {
                                        console.log(res);
                                        /* 
                                        console.log(res.status); */
                                        swalWithBootstrapButtons.fire(
                                            'บันทึกข้อมูลสำเร็จ!',
                                            'ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว',
                                            'success'
                                        )
                                        this.showAddModal = true;
                                        car_chassis = this.car_chassis;
                                        this.$store.state.evaForm = car_chassis;
                                        this.$router.push({ name: "EvaluationResult" });

                                        /* let id = res */
                                        /*  this.$store.state.evaRs = res;
                                         this.$router.push({ name: "EvaluationResult" }); */


                                    }).catch((err) => {
                                        console.log(err);
                                        swalWithBootstrapButtons.fire(
                                            'บันทึกข้อมูลไม่สำเร็จ!',
                                            'กรุณาตรวจสอบข้อมูลอีกครั้ง',
                                            'error'
                                        )
                                    });
                                },
                            });




                            /* this.$router.push("/evaluation"); */
                        } else if (
                            /* Read more about handling dismissals below */
                            result.dismiss === this.$swal.DismissReason.cancel
                        ) {
                            swalWithBootstrapButtons.fire(
                                "ยกเลิก",
                                "ข้อมูลของคุณยังไม่ถูกบันทึก",
                                "error"
                            );
                        }
                    });

            } else {
                this.$swal.fire({
                    icon: 'error',
                    title: 'กรุณาตรวจสอบข้อมูลอีกครั้ง',
                    text: 'ข้อมูลของคุณยังไม่ถูกบันทึก',
                })
            }

        },
 

        uploadImage(e) {
            const selectedFiles = e.target.files;
            for (let i = 0; i < selectedFiles.length; i++) {
                this.PictureCar.push(selectedFiles[i]);
            }
            console.log(this.PictureCar);
            this.applyImage();

        },


        applyImage() {
            for (let i = 0; i < this.PictureCar.length; i++) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.$refs.image[i].src = e.target.result;
                };

                reader.readAsDataURL(this.PictureCar[i]);
            }
        },
        removeImage(i) {
            this.PictureCar.splice(i, 1);
            this.applyImage();
            console.log(this.PictureCar);
        },



        Check_chassis() {
            http.post('chassis',
                {
                    "car_chassis": this.car_chassis,

                }).then((response) => {
                    console.log(response);
                    this.$swal.fire("เลขตัวถังถูกต้อง");
                    this.isHiddenS = false;
                    this.isHiddenE = true;
                    this.check_chassis = true;

                }).catch((error) => {
                    console.log(error);
                    this.$swal.fire("เลขตัวถังไม่ถูกต้อง");
                    this.isHiddenE = false;
                    this.isHiddenS = true;
                    this.check_chassis = false;

                });



        },

    },
    validations() {
        return {
            car_chassis: {
                required: helpers.withMessage('กรุณาตรวจสอบเลขตัวถังให้ถูกต้อง', required),
                minLength: helpers.withMessage(
                    ({
                        $params
                    }) => `เลขตัวถังต้องมีความยาว  ${$params.min} ตัวอักษร และถูกต้อง`,
                    minLength(17)
                )

            },

        };
    },

};
</script>