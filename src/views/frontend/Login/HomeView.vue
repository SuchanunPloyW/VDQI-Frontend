<template>
  <div class="pt-32 flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img aria-hidden="true" class="object-cover w-full h-full dark:hidden" src="@/assets/img/login-office.jpeg"
            alt="Office" />
          <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block"
            src="@/assets/img/login-office-dark.jpeg" alt="Office" />
        </div>

        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              LOGIN
            </h1>

            <form @submit.prevent="onSubmit">

              <label class="block text-gray-700 text-sm mt-3 mb-2" for="email">Email</label>
              <input v-model="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text" />
              <div v-if="v$.email.$error" class="mt-2 text-sm text-red-500">
                {{ v$.email.$errors[0].$message }}
              </div>

              <label class="block text-gray-700 text-sm mt-3 mb-2" for="password">Password</label>
              <input v-model="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="password" />
              <div v-if="v$.password.$error" class="mt-2 text-sm text-red-500">
                {{ v$.password.$errors[0].$message }}
              </div>

            
              <p class="my-4"></p>
              <button @click="submitForm"
                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg cursor-pointer active:bg-purple-600 hover:bg-purple-700">LOGIN</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import http from "@/services/AuthService";



export default {
  data() {
    return {
      v$: useValidate(),
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate(); // check app input
      if (!this.v$.$error) {
        // alert("From validate Success");
        // ถ้า validate ผ่าน
        //เรียนกใช้งาน API จาก LARAVEL
        http.post('login',
          {
            "email": this.email,
            "password": this.password
          }

        ).then(response => {
          console.log(response.data)
          //เก็บข้อมูลลง localStorahe
          localStorage.setItem('user', JSON.stringify(response.data))


          // เมื่อ login ผ่านส่งไปหน้า admin
          const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', this.$swal.stopTimer)
              toast.addEventListener('mouseleave', this.$swal.resumeTimer)
              // this.$router.push('backend')
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Login Success'
          }).then(() => {
            this.$router.push({ name: 'DashBaord' })
            // window.location.href = '/backend'
          })


        }).catch(error => {
          if (error.response) {
            if (error.response.status == 401) {
              const Toast = this.$swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', this.$swal.stopTimer)
                  toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                }
              })

              Toast.fire({
                icon: 'error',
                title: 'The email address or password is incorrect'
              })


            }

          }
        })
      } else {
        //alert("Form validate fail");
      }
    },
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage('Please insert Email. ', required),
        email: helpers.withMessage('The email format is invalid.', email)
      },
      password: {
        required: helpers.withMessage('Please insert Password. ', required),
        minLength: helpers.withMessage(
          ({
            $params
          }) => `Password must be at least  ${$params.min} characters`,
          minLength(10)
        )
      },
    };
  },
};
</script>
