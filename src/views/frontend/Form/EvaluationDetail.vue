<template>
    <div class="flex flex-wrap custom">
        <div class="w-full px-4 pt-5">
            <div class="pb-5 relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-2xl">
                <div class="container px-4 mx-auto">
                    <div class="px-6 pb-5">
                        <div class="mt-6 text-center">
                            <h1 class="py-6 text-3xl font-bold">
                                VDQI | รายละเอียดการตรวจประเมินค่าความพึงพอใจรถใหม่
                            </h1>
                        </div>
                    </div>
                    <form enctype="multipart/form-data">
                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">ชื่อพนักงานขาย</label>
                        <input type="text" v-model="person"
                            class="font-semibold w-full px-3 py-2 leading-tight text-blue-700 shadow appearance-none border"
                            placeholder="" readonly />

                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">ทีม</label>
                        <input type="text" v-model="team"
                            class="font-semibold w-full px-3 py-2 leading-tight text-blue-700 shadow appearance-none border"
                            placeholder="" readonly />

                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">สาขา</label>
                        <input type="text" v-model="branch"
                            class="font-semibold w-full px-3 py-2 leading-tight text-blue-700 shadow appearance-none border"
                            placeholder="" readonly />

                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">เลขตัวถัง</label>
                        <input type="text" v-model="car_chassis"
                            class="font-semibold w-full px-3 py-2 leading-tight text-blue-700 shadow appearance-none border"
                            placeholder="Chassis" readonly />

                        <label class="block text-gray-700 text-base mt-3 mb-2 font-semibold">สาขา</label>
                        <ul
                            class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center pl-3">
                                    <input disabled checked id="horizontal-list-radio-license" type="radio"
                                        value="คลอง 7" name="list-radio" v-model="branch"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <div
                                        class="py-3 ml-2 w-full text-sm font-semibold text-gray-900 dark:text-gray-300">
                                        คลอง 7
                                    </div>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center pl-3">
                                    <input disabled id="horizontal-list-radio-license" type="radio" value="ตลาดไทย"
                                        name="list-radio" v-model="branch"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <div
                                        class="py-3 ml-2 w-full text-sm font-semibold text-gray-900 dark:text-gray-300">
                                        ตลาดไทย
                                    </div>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center pl-3">
                                    <input disabled id="horizontal-list-radio-license" type="radio"
                                        value="วงเวียนตลาดไทย" name="list-radio" v-model="branch"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <div
                                        class="py-3 ml-2 w-full text-sm font-semibold text-gray-900 dark:text-gray-300">
                                        วงเวียนตลาดไทย
                                    </div>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center pl-3">
                                    <input disabled id="horizontal-list-radio-license" type="radio" value="อื่น ๆ"
                                        name="list-radio" v-model="branch"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <div
                                        class="py-3 ml-2 w-full text-sm font-semibold text-gray-900 dark:text-gray-300">
                                        อื่น ๆ
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <!-- table การบริการของพนักงานติดตั้ง -->
                        <div class="pt-4 container mx-auto">
                            <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                                การบริการของพนักงานติดตั้ง
                            </h4>
                            <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                                <div class="w-full overflow-x-auto">
                                    <table class="w-full whitespace-no-wrap">
                                        <thead>
                                            <tr
                                                class="text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                <th class="px-4 py-3">รายการประเมิน</th>
                                                <th class="px-4 py-3">ความพึงพอใจ</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                            <tr class="text-gray-700 dark:text-gray-400">
                                                <td class="px-4 py-3">
                                                    <div class="flex items-center text-sm"></div>
                                                    <div>
                                                        <p class="font-semibold">
                                                            1. พนักงานติดตั้งมีการบริการที่สะดวกและรวดเร็ว
                                                        </p>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm">
                                                    <ul
                                                        class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                                            <div class="flex items-center pl-3">
                                                                <input disabled id="1.1" type="radio" value="1"
                                                                    name="Topic1" v-model="topic_1"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ดีมาก
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                                            <div class="flex items-center pl-3">
                                                                <input disabled id="1.0" type="radio" value="0"
                                                                    name="Topic1" v-model="topic_1"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
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
                                                    <div class="flex items-center text-sm"></div>
                                                    <div>
                                                        <p class="font-semibold">
                                                            2. พนักงานติดตั้งมีการช่วยเหลือ
                                                        </p>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm">
                                                    <ul
                                                        class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                                            <div class="flex items-center pl-3">
                                                                <input disabled id="2.1" type="radio" value="1"
                                                                    name="Topic2" v-model="topic_2"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                                <div
                                                                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    ดีมาก
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li
                                                            class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                                            <div class="flex items-center pl-3">
                                                                <input disabled id="2.0" type="radio" value="0"
                                                                    name="Topic2" v-model="topic_2"
                                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
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
                                                                <input disabled id="3.1" type="radio" value="1"
                                                                    name="Topic3" v-model="topic_3"
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
                                                                <input disabled id="3.0" type="radio" value="0"
                                                                    name="Topic3" v-model="topic_3"
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
                                                                <input disabled id="4.1" type="radio" value="1"
                                                                    name="Topic4" v-model="topic_4"
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
                                                                <input disabled id="4.0" type="radio" value="0"
                                                                    name="Topic4" v-model="topic_4"
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
                                                                <input disabled id="5.1" type="radio" value="1"
                                                                    name="Topic5" v-model="topic_5"
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
                                                                <input disabled id="5.0" type="radio" value="0"
                                                                    name="Topic5" v-model="topic_5"
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
                                                                <input disabled id="6.1" type="radio" value="1"
                                                                    name="Topic6" v-model="topic_6"
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
                                                                <input disabled id="6.0" type="radio" value="0"
                                                                    name="Topic6" v-model="topic_6"
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
                                                                <input disabled id="7.1" type="radio" value="1"
                                                                    name="Topic7" v-model="topic_7"
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
                                                                <input disabled id="7.0" type="radio" value="0"
                                                                    name="Topic7" v-model="topic_7"
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
                                                                <input disabled id="8.1" type="radio" value="1"
                                                                    name="Topic8" v-model="topic_8"
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
                                                                <input disabled id="8.0" type="radio" value="0"
                                                                    name="Topic8" v-model="topic_8"
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
                                                                <input disabled id="9.1" type="radio" value="1"
                                                                    name="Topic9" v-model="topic_9"
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
                                                                <input disabled id="9.0" type="radio" value="0"
                                                                    name="Topic9" v-model="topic_9"
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

                        <textarea cols="30 " rows="5" placeholder="Other" v-model="detail" readonly
                            class=" font-semibold shadow appearance-none border relative w-full px-3 py-1 text-base bg-white text-blue-700 focus:outline-none focus:shadow-outline"></textarea>


                        <!--   <div class="mt-4">
                            <img v-if="image_path" :src="image_path" class="w-ful" />
                        </div> -->
                        <label class=" font-semibold block my-3 text-gray-700 text-md"
                            for="image">รูปภาพเพิ่มเติม</label>
                        <div v-for="img in img.data" :key="img.id">
                            <img :src="img.image_path" class="w-1/2" />
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
    data() {
        return {
            car_chassis: "",
            person: "",
            team: "",
            branch: "",
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
            img: [],
        };
    },
    methods: {
        evaShow() {
            this.evaluation_id = this.$store.state.evaShow;
            this.car_chassis = this.$store.state.evaShow;
            http.get(`evaluation/${this.evaluation_id}`).then((response) => {
                this.car_chassis = response.data.car_chassis;
                this.person = response.data.person;
                this.team = response.data.team;
                this.branch = response.data.branch;
                this.topic_1 = response.data.topic_1;
                this.topic_2 = response.data.topic_2;
                this.topic_3 = response.data.topic_3;
                this.topic_4 = response.data.topic_4;
                this.topic_5 = response.data.topic_5;
                this.topic_6 = response.data.topic_6;
                this.topic_7 = response.data.topic_7;
                this.topic_8 = response.data.topic_8;
                this.topic_9 = response.data.topic_9;
                this.detail = response.data.detail;

            });
           
        },
    },
    mounted() {
        this.evaShow();
        this.currentPage = 1;
        console.log(this.evaluation_id);
        http.get(`img/${this.evaluation_id}?page=${this.currentPage}`).then((response) => {
            let responseImg = response.data;
            this.img = responseImg;
            console.log(this.img);
        });

    },
};
</script>
