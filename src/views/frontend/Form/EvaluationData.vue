<template>
    <div class="flex flex-wrap custom">
        <div class="w-full px-4 pt-5">
            <div class=" pb-5 relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-2xl">
                <div class="container px-4 mx-auto">
                    <div class="px-6 pb-5">
                        <div class="mt-6 text-center">
                            <h1 class="py-6 text-3xl font-bold">
                                VDQI | ผลการตรวจประเมินค่าความพึงพอใจรถใหม่
                            </h1>
                        </div>
                    </div>
                    <div class="w-full overflow-hidden rounded-lg shadow-xs">
                        <table border="0" cellspacing="5" cellpadding="5">
                            <tbody>
                                <tr>
                                    <td>วันที่เริ่มต้น :</td>
                                    <td><input type="text" id="min" name="min" class="bg-gray-100"></td>
                                </tr>
                                <tr>
                                    <td>วันที่สิ้นสุด :</td>
                                    <td><input type="text" id="max" name="max" class="bg-gray-100"></td>
                                </tr>
                            </tbody>
                        </table>
                        <table id="EVA" class="display">
                            <thead>
                                <tr>
                                    <th>เลขตัวถัง</th>
                                    <th>พนักงานขาย</th>
                                    <th>สาขา</th>
                                    <th>วันที่</th>
                                    <th>เวลา</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="eva in eva.data" :key="eva.evaluation_id">
                                    <td>{{ eva.car_chassis }}</td>
                                    <td>{{ eva.person }}</td>
                                    <td>{{ eva.branch }}</td>
                                    <td>{{ format_date(eva.created_at) }}</td>
                                    <td>{{ format_time(eva.created_at) }}</td>
                                    <td>
                                        <button
                                            class="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-500 border border-transparent rounded-md active:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-purple"
                                            @click="showEvadetail(eva.evaluation_id)">เพิ่มเติม</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@import url('https://cdn.datatables.net/1.13.1/css/dataTables.jqueryui.min.css');
@import url('https://cdn.datatables.net/datetime/1.2.0/css/dataTables.dateTime.min.css');
</style >
<script>



import $ from 'jquery';
import http from "@/services/BackendServices";
import moment from 'moment';
import { loadScript } from "vue-plugin-load-script";
import DateTime from 'datatables.net-datetime';



export default {

    name: 'EvaluationResult',
    data() {

        return {
            eva: [],
            currentPage: 0,
            perPage: 0,
            total: 0,
        }
    },

    mounted() {

        this.currentPage = 1;
        this.getEva(this.currentPage);
        http.get(`evaluation?page=${this.currentPage}`).then((response) => {
            let responseEva = response.data;
            this.eva = responseEva;
        });

        /*  this.getEva(); */
        this.Eva();

    },

    methods: {

        async Eva(pagenumber) {
            await loadScript("https://code.jquery.com/jquery-3.5.1.js")
            loadScript("https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js")
            loadScript("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.2/moment.min.js")
            loadScript("https://cdn.datatables.net/datetime/1.2.0/js/dataTables.dateTime.min.js")
                .then(() => {
                    http.get(`evaluation?page=${pagenumber}`).then((response) => {
                        console.log(response.data);
                        let responseEva = response.data;
                        this.eva = responseEva;
                        this.currentPage = responseEva.currentPage;
                        this.perPage = responseEva.per_page;
                        this.total = responseEva.total;

                        console.log("Script loaded!");
                        var minDate, maxDate;
                        $.fn.dataTable.ext.search.push(
                            // eslint-disable-next-line no-unused-vars
                            function (settings, data, dataIndex) {
                                var min = minDate.val();
                                var max = maxDate.val();
                                var date = new Date(data[3]);

                                if (
                                    (min === null && max === null) ||
                                    (min === null && date <= max) ||
                                    (min <= date && max === null) ||
                                    (min <= date && date <= max)
                                ) {
                                    return true;
                                }
                                return false;
                            }
                        );

                        $(document).ready(function () {
                            // Create date inputs
                            minDate = new DateTime($('#min'), {
                                format: 'DD/MM/YYYY',
                            });
                            maxDate = new DateTime($('#max'), {
                                format: 'DD/MM/YYYY'
                            });

                            // DataTables initialisation
                            var table = $('#EVA').DataTable(
                                {
                                    responsive: true,
                                    "pageLength": 10,
                                    "lengthMenu": [10, 25, 50, 75, 100],
                                    "language": {
                                        "lengthMenu": "แสดง _MENU_ รายการ ต่อหน้า",
                                        "zeroRecords": "ไม่พบข้อมูล",
                                        "info": "แสดงหน้า _PAGE_ จาก _PAGES_",
                                        "infoEmpty": "ไม่มีข้อมูล",
                                        "infoFiltered": "(กรองจาก _MAX_ รายการ)",
                                        "search": "ค้นหา",
                                        "paginate": {
                                            "first": "หน้าแรก",
                                            "last": "หน้าสุดท้าย",
                                            "next": "ถัดไป",
                                            "previous": "ก่อนหน้า"
                                        },
                                        "datetime": {
                                            "months": {
                                                "0": "มกราคม",
                                                "1": "กุมภาพันธ์",
                                                "10": "พฤศจิกายน",
                                                "11": "ธันวาคม",
                                                "2": "มีนาคม",
                                                "3": "เมษายน",
                                                "4": "พฤษภาคม",
                                                "5": "มิถุนายน",
                                                "6": "กรกฎาคม",
                                                "7": "สิงหาคม",
                                                "8": "กันยายน",
                                                "9": "ตุลาคม"
                                            },
                                        }

                                    },


                                    /* columns: [
                                        { data: 'evaluation_id' },
                                        { data: 'car_chassis' },
                                        { data: 'person' },
                                        { data: 'created_at', render: function (data) { return moment(data).format('YYYY-MM-DD') } },
                                        { data: 'created_at', render: function (data) { return moment(data).format('hh:mm:ss') } },
                                        {
                                            data: null, render: function () {
                                                return '<button class="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-500 border border-transparent rounded-md active:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-purple" > เพิ่มเติม</button>'

                                            }
                                        },
                                    ], */
                                    dom: "Bfrtip",

                                    buttons: [
                                        {
                                            extend: 'print',
                                            bom: true,
                                            className: 'px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-500 border border-transparent rounded-md active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple',
                                        },
                                        {
                                            extend: 'csv',
                                            charset: 'UTF-8',
                                            bom: true,
                                            className: 'px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-500 border border-transparent rounded-md active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-purple',
                                        },
                                        
                                    ],

                                }

                            );

                            // Refilter the table
                            $('#min, #max').on('change', function () {
                                table.draw();
                            });
                        });

                    });


                })
                .catch(() => {
                    alert("Error loading script");
                });

        },


        async getEva() {

            /*  console.log(response.data);
  */
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format('YYYY-MM-DD')
            }
        },
        format_time(value) {
            if (value) {
                return moment(String(value)).format('hh:mm:ss')
            }
        },
        // สร้างฟังก์ชันสำหรับเปลี่ยนหน้า
        showEvadetail(evaluation_id) {
            this.$store.state.evaShow = evaluation_id;
            this.$router.push({ name: "EvaluationDetail" });

        }

    }
}
</script>
