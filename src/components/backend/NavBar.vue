<template>
  <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
    <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
      <!-- Mobile hamburger -->
      <button @click="onClickMobieMenu"
        class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple">
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z">
          </path>
        </svg>
      </button>
      <!-- Search input -->
      <div class="flex justify-center flex-1 lg:mr-32"></div>
      <ul class="flex items-center flex-shrink-0 space-x-6">

        <!-- สวัสดี  &nbsp;  -->
        สวัสดี &nbsp;

        <!-- <input  v-model="lastname" class=" w-20 appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" readonly  /> -->
        <h5 class="text-gray-900	">{{ user.fullname }} {{ user.lastname }} </h5>

        <!--  <h5 class ="text-black"> สวัสดี! {{user}}   </h5> -->
        <!-- Profile menu -->
        <li class="relative">
          <button @click="onclickShowProfile"
            class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none" aria-label="Account"
            aria-haspopup="true">
            <img class="object-cover w-10 h-10 rounded-full"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png" alt=""
              aria-hidden="true" />
          </button>
          <template :class="{ block: showProfileMenu }">
            <ul
              class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
              aria-label="submenu">
              <li class="lock">
                <a @click="onClikLogout"
                  class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  href="#">
                  <svg class="w-4 h-4 mr-3" aria-hidden="true" fill="none" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                    </path>
                  </svg>
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import http from "@/services/BackendServices";

export default {
  data() {
    return {
      showProfileMenu: false,
      user: [],
      currentPage: 0,
      fullname: '',
      lastname: '',

    };
  },

  methods: {
    onClickMobieMenu() {
      this.$store.commit("toggleSideMenu")
    },
    onclickShowProfile() {
      this.showProfileMenu = !this.showProfileMenu;
    },

    ShowProfile() {
      let local_user = JSON.parse(window.localStorage.getItem("user"));

      http.get(`user/id/${local_user.user.id}`).then((response) => {
        let responseUser = response.data
        let responseFullname = response.data
        this.user = responseUser
        this.fullname = responseFullname
        console.log(responseUser)
        /*  this.profile = response.data[0];
         this.fullname = this.profile.fullname
         this.lastname = this.profile.lastname */
      })
      console.log(local_user.user.fullname)
    },


    onClikLogout() {
      // เรียก api logout
      http
        .post("logout")
        .then(() => {
          localStorage.removeItem("user");
          // กลับไปหน้า login
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
          }
        });
    },
  },
  mounted() {
    this.ShowProfile();
  }
};
</script>
