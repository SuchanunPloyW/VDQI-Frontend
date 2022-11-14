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
                        <input type="text" v-model="Person"
                            class="w-full px-3 py-2 leading-tight text-gray-700 shadow appearance-none border"
                            placeholder="Name" />


                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">ทีม</label>
                        <input type="text" v-model="Team"
                            class="w-full px-3 py-2 leading-tight text-gray-700 shadow appearance-none border"
                            placeholder="Team" />

                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">เลขตัวถัง</label>
                        <input type="text" v-model="car_chassis"
                            class="w-full px-3 py-2 leading-tight text-gray-700 shadow appearance-none border"
                            placeholder="chassis no." />

                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">สาขา</label>
                        <ul
                            class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center pl-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="คลอง 7"
                                        name="list-radio" v-model="Branch"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <div class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        คลอง 7

                                    </div>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center pl-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="ตลาดไทย"
                                        name="list-radio" v-model="Branch"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <div class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        ตลาดไทย

                                    </div>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center pl-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="วงเวียนตลาดไทย"
                                        name="list-radio" v-model="Branch"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <div class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        วงเวียนตลาดไทย

                                    </div>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center pl-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="อื่น ๆ"
                                        name="list-radio" v-model="Branch"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <div class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        อื่น ๆ
                                    </div>
                                </div>
                            </li>
                        </ul>

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
                                                                    v-model="Topic_1"
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
                                                                    v-model="Topic_1"
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
                                                                    v-model="Topic_2"
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
                                                                    v-model="Topic_2"
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
                                                                    v-model="Topic_3"
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
                                                                    v-model="Topic_3"
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
                                                                    v-model="Topic_4"
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
                                                                    v-model="Topic_4"
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
                                                                    v-model="Topic_5"
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
                                                                    v-model="Topic_5"
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
                                                                    v-model="Topic_6"
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
                                                                    v-model="Topic_6"
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
                                                                    v-model="Topic_7"
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
                                                                    v-model="Topic_7"
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
                                                                    v-model="Topic_8"
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
                                                                    v-model="Topic_8"
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
                                                                    v-model="Topic_9"
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
                                                                    v-model="Topic_9"
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

                        <textarea cols="30 " rows="5" placeholder="Other" v-model="Detail"
                            class="shadow appearance-none border relative w-full px-3 py-1 text-base bg-white text-gray-700 focus:outline-none focus:shadow-outline"></textarea>

                        <!-- <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">รูปภาพเพิ่มเติม</label> -->
                        <div class="mt-4">
                            <img v-if="imgUrl" :src="imgUrl" class="w-96 h-96" />
                        </div>

                        <label class="block my-3 text-gray-700 text-md" for="image">รูปภาพเพิ่มเติม</label>
                        <!-- input -->
                        <!--  <input ref="fileupload" @change="onFileChange"
                            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow" type="file"> -->
                        <!-- input -->


                        <input class="w-full px-3 py-2 leading-tight text-gray-700 shadow appearance-none border"
                            id="upload-file" type="file" multiple @change="uploadImage" name="PictureCar[]">

                        <div v-for="(image, key) in PictureCar" :key="key">
                            <div class="bg-gray-200 w-32 h-32">
                                <img v-bind:ref="'image'" alt="" src="" />
                            </div>
                            <button type="button" @click="removeImage(image, key)">ลบรูปภาพ</button>
                        </div>


                        <div class="pt-5">
                            <button type="button" @click="submitform"
                                class="bg-blue-600 text-white hover:bg-blue-400 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2  ">บันทึกข้อมูล</button>
                        </div>
                    </form>






                </div>
            </div>
        </div>
    </div>
</template>
<script>
import http from "@/services/BackendServices";
export default {
    name: "App",
    components: {},
    data() {
        return {
            //ตัวแปร
            form_id: "",
            Person: "",
            Team: "",
            Branch: "",
            car_chassis: "",
            Topic_1: "",
            Topic_2: "",
            Topic_3: "",
            Topic_4: "",
            Topic_5: "",
            Topic_6: "",
            Topic_7: "",
            Topic_8: "",
            Topic_9: "",
            Detail: "",
            Image: "",

            date: "",
            time: "",

            imgUrl: "",
            file: null,
            PictureCar: [],

            form: new FormData(),
        };
    },
    methods: {
        submitform() {


            var date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            let today = year + "-" + month + "-" + day;
            let time = hour + ":" + minute + ":" + second;
            this.date = today;
            this.form.append("img_date", today);
            this.form.append("img_time", time);
            this.form.append("form_id", 1);



            for (let i = 0; i < this.PictureCar.length; i++) {


                this.form.append("img_path[]", this.PictureCar[i]);
                console.log(this.PictureCar[i]);

            }
            document.getElementById('upload-file').value = [];
            http.post("img", this.form).then((response) => {
                console.log(response);
            });




            /* console.log( this.PictureCar); */
            /* var date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            let today = year + "-" + month + "-" + day;
            let time = hour + ":" + minute + ":" + second;
            const data = new FormData();
            data.append("img_path", this.PictureCar);
            data.append("form_id", '1');
            data.append("img_date", today);
            data.append("img_time", time);
            console.log(data);
            http.post("img", data).then((response) => {
                console.log(response);
            }); */

        },
        submit() {
            var date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            let today = year + "-" + month + "-" + day;
            let time = hour + ":" + minute + ":" + second;

            console.log(this.PictureCar);
            const data = new FormData();
            data.append("Person", this.Person);
            data.append("Team", this.Team);
            data.append("Branch", this.Branch);
            data.append("car_chassis", this.car_chassis);
            data.append("Topic_1", this.Topic_1);
            data.append("Topic_2", this.Topic_2);
            data.append("Topic_3", this.Topic_3);
            data.append("Topic_4", this.Topic_4);
            data.append("Topic_5", this.Topic_5);
            data.append("Topic_6", this.Topic_6);
            data.append("Topic_7", this.Topic_7);
            data.append("Topic_8", this.Topic_8);
            data.append("Topic_9", this.Topic_9);
            data.append("Detail", this.Detail);
            data.append('Image', "this.PictureCar")
            data.append("date", today);
            data.append("time", time);

            http.post("carform", data).then((response) => {
                console.log(response);


            });

        },

        uploadImage(e) {
            const selectedFiles = e.target.files;
            if (!selectedFiles.length) {
                return false;
            }
            for (let i = 0; i < selectedFiles.length; i++) {
                this.PictureCar.push(selectedFiles[i]);
            }
            console.log(this.PictureCar);
            this.applyImage();
            /*  for (let i = 0; i < selectedFiles.length; i++) {
                 this.PictureCar.push(selectedFiles[i]);
 
             }
             this.applyImage(); */
        },

        onFileChange(e) {
            const file = e.target.files[0]
            this.file = e.target.files[0]
            this.imgUrl = URL.createObjectURL(file)

        },












        removeImage(image, index) {
            console.log(this.PictureCar);
            this.PictureCar.splice(index, 1);
            this.applyImage();
            //this.$refs.image[index].src = "" // You are hidding the 3rd one that is now in index 1.
        },
        applyImage() {
            for (let i = 0; i < this.PictureCar.length; i++) {
                let reader = new FileReader();
                /* tslint:disable:no-unused-variable */
                // eslint-disable-next-line no-unused-vars
                reader.onload = (e) => {
                    this.$refs.image[i].src = reader.result;
                };
                reader.readAsDataURL(this.PictureCar[i]);
            }
        },
    },
};
</script>