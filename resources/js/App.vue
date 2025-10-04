<!-- resources/js/App.vue -->
<template>
    <div class="p-8 bg-red-200 text-center">
        <h1 class="text-4xl font-bold text-blue-500">
            Tailwind работает в Vue!!!
            <router-link to="/index">Index</router-link>
            <router-link to="/page">Page</router-link>
            <div><router-view></router-view></div>
        </h1>
    </div>
</template>

<script></script>
