<template>
    <h2 class="my-6 text-2xl font-semibold text-black dark:text-gray-200">
        Stock Management
    </h2>
    <div class="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <form enctype="multipart/form-data">
            <h4 class="font-semibold">Car Information</h4>
        <div class="flex flex-wrap mb-4">
            <div class="w-full px-4 md:w-96">
                <label class="  text-gray-700 text-sm">chassis no.</label>
                <input v-model="car_chassis" class="border-solid border-2 border-gray-100 text-sm w-full px-2 py-2 leading-tight text-gray-700" type="text" readonly />
            </div>
        </div>
        <div class="flex flex-wrap mb-4">
            <div class="w-full px-4 md:w-96">
                <label class="  text-gray-700 text-sm">Where</label>
                <input v-model="car_where" class=" border-solid border-2 border-gray-100 text-sm w-full px-2 py-2 leading-tight text-gray-700" type="text" readonly />
            </div>
        </div>
        <div class="flex flex-wrap mb-4">
            <div class="w-full px-4 md:w-96">
                <label class="  text-gray-700 text-sm">Position</label>
                <input v-model="car_position" class="border-solid border-2 border-gray-100 text-sm w-full px-2 py-2 leading-tight text-gray-700" type="text" readonly />
            </div>
        </div>
        <div class="flex flex-wrap mb-4">
            <div class="w-full px-4 md:w-96">
                <label class="  text-gray-700 text-sm">Date</label>
                <input v-model="date" class="border-solid border-2 border-gray-100 text-sm w-full px-2 py-2 leading-tight text-gray-700" type="text" readonly />
            </div>
        </div>
        <div class="flex flex-wrap mb-4">
            <div class="w-full px-4 md:w-96">
                <label class="  text-gray-700 text-sm">Time</label>
                <input v-model="time" class="border-solid border-2 border-gray-100 text-sm w-full px-2 py-2 leading-tight text-gray-700" type="text" readonly />
            </div>
        </div>
    </form>

    </div>
    

</template>

<script>
import http from '@/services/BackendServices'
export default {
    data() {
        return {
            car_id: "",
            car_chassis: "",
            car_where: "",
            car_position: "",
            date: "",
            time: "",
         
        }
    },
    methods: {
        ShowCar() {
            this.car_id = this.$store.state.carShow
            http.get(`car/${this.car_id}`).then((response) => {
                this.car_chassis = response.data.car_chassis;
                this.car_where = response.data.car_where;
                this.car_position = response.data.car_position;
                this.date = response.data.date;
                this.time = response.data.time;

            });


        }

    },
    mounted() {
        this.ShowCar();
    },

}
</script>