<template>
    <div class="flex flex-wrap custom">
        <div class="w-full px-4 pt-5">
            <div class=" pb-5 relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-2xl">
                <div class="container px-4 mx-auto">
                    <div class="px-6 pb-5">

                        <!-- <img class="w-96" src="https://toyotaparagon.com/wp-content/uploads/2022/05/2022logo.jpg"
                            alt=""> -->
                        <div class="mt-6 text-center">
                            <h1 class="py-6 text-xl font-bold">
                                VDQI | เอกสารการนำรถออก
                            </h1>
                        </div>
                        <div class="flex flex-wrap">
                            <div class="w-full px-4 py-0">
                                <section class=" container max-w-screen-sm mx-auto  ">
                                    <img class="mx-auto h-32"
                                        src="https://www.pngarts.com/files/10/Check-Mark-PNG-Image.png"
                                        alt="screenshot">
                                </section>
                            </div>
                        </div>

                        <div class="mt-6 text-center">
                            <div class="py-6 text-lg font-bold  ">
                                ระบบได้ทำการตรวจสอบเอกสารการนำรถออกเรียบร้อยแล้ว
                                <div class="text-green-800 font-semibold  text-lg " id="current-time"></div>
                                <br>
                                <div class="text-base  font-light text-red-600">** กรุณาอย่าปิดหน้านี้ เพื่อเป็นหลักฐานแสดงการนำรถออก ** </div>
                                <div class="text-base  font-light text-red-600 ">หมายเหตุ : ทางบริษัทขอสงวนสิทธิ์ในการบันทึกภาพหน้าจอ</div>
                            </div>

                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6 py-1 ">

                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    เลขตัวถัง
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-black font-extrabold text-xl border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                                    v-model="car_chassis" readonly>
                            </div>
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    พนักงานขาย
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-black font-extrabold text-xl border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                                    v-model="person" readonly>
                            </div>
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    ทีม
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-black font-extrabold text-xl border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                                    v-model="team" readonly>
                            </div>
                        </div>
                    





                        <!-- <div class="relative w-full mb-3">
                                   
                                    <input type="text"
                                        class="px-3 py-3 placeholder-gray-400 text-gray-700  text-sm  focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                       v-model="person" readonly>
                                </div> -->

                    </div>
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

        };
    },
    methods: {
        setCurrentTime() {
            /*  var d = new Date();
             var n = d.toLocaleTimeString();
             document.getElementById("current-time").innerHTML = n; */
            var myDate = new Date();
            // let daysList = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
            let monthsList = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

            let date = myDate.getDate();
            let month = monthsList[myDate.getMonth()];
            let year = myDate.getFullYear() + 543;
            //  let day = daysList[myDate.getDay()];

            let today = `${date} ${month} ${year} `;
            let amOrPm;
            let twelveHours = function () {
                if (myDate.getHours() > 24) {
                    amOrPm = '';
                    let twentyFourHourTime = myDate.getHours();
                    let conversion = twentyFourHourTime - 24;
                    return `${conversion}`


                } else {
                    amOrPm = '';
                    return `${myDate.getHours()}`
                }
            };
            let hours = twelveHours();
            let minutes = myDate.getMinutes();
            let seconds = myDate.getSeconds();

            let currentTime = `${hours}:${minutes}:${seconds} ${amOrPm}`;

            document.getElementById('current-time').innerText = today + ' ' + 'เวลา ' + currentTime


        },





        evaForm() {
            this.car_chassis = this.$store.state.evaForm;
            http.get(`evaluation/s/${this.car_chassis}`).then((response) => {
                console.log(response.data[0]);
                this.car_chassis = response.data[0].car_chassis;
                this.person = response.data[0].person;
                this.team = response.data[0].team;
                this.branch = response.data[0].branch;
                console.log(this.person);


            });

        }
    },
    mounted() {
        setInterval(this.setCurrentTime, 1000);
        this.setCurrentTime();

        this.evaForm();

    }
};
</script>