<script setup lang="ts">
import HomeItem from '@/components/HomeItems.vue'
import MyItems from '@/components/MyItems.vue'
import { ref } from 'vue';

const item = (['Pilihan 1', 'Pilihan 2', 'Pilihan 3']);
const input = ref<string>('');

</script>
<template>
    <div class="flex flex-row bg-gradient-to-b from-slate-300 to-slate-500 min-h-screen">
        <aside id="sidebar" class="bg-gradient-to-b from-white to-slate-300 min-h-screen w-60 ">
            <h1 class="text-center font-bold text-lg">Sidebar</h1>
            <figure class="flex flex-col items-center">
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" class="rounded-full">
                <figcaption>Admin</figcaption>
            </figure>
            <ul class="flex flex-col gap-2 px-2 mt-4">
                <li class="w-full">
                    <RouterLink to='/' class="nav-item">
                        Home
                    </RouterLink>
                </li>
                <li class="w-full">
                    <RouterLink to="/dashboard" class="nav-item hover:bg-gray-300">
                        Dashboard
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="#" class="logout hover:bg-red-300">
                        Logout
                    </RouterLink>
                </li>
            </ul>
        </aside>
        <aside class="w-full">
            <header class="h-10 bg-slate-700"></header>
            <main class="min-h-[calc(100vh-5rem)] p-4">
                <div id="card" class="min-h-[20rem] bg-white rounded-lg p-2 shadow-lg grid grid-cols-3 gap-4">
                    <HomeItem />
                </div>
                <div>
                    <MyItems v-model="input" :options="item" />
                    <p>{{ input }}</p>
                </div>
            </main>
            <footer class="h-10 text-white bg-slate-700 flex items-center justify-center">PPSDM Migas</footer>
        </aside>
    </div>
</template>
<style>
.nav-item {
    @apply text-white block bg-gray-500 p-1 w-full rounded-lg shadow-lg transition-colors duration-75 cursor-pointer;
}

.logout {
    @apply text-white bg-red-500 block p-1 rounded-lg transition-colors duration-75;
}
</style>