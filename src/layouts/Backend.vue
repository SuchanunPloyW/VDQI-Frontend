<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
        <SideBar />
        <div class="flex flex-col flex-1 w-full">
            <NavBar />
            <main class="h-full overflow-y-auto">
                 <div class="container grid px-6 mx-auto">
                    <router-view></router-view>
                 </div>
            </main>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/backend/NavBar.vue";
import SideBar from "@/components/backend/SideBar.vue";

export default {
   name: "BackendLayout",
   components: {
      NavBar,
      SideBar,
   },
};
</script>