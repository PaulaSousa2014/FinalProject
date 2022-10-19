<template>
    <h1>Task App</h1>
    <ul>
        <li>
            <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
            <router-link :to="{name: 'login'}">Login</router-link>
        </li>
    </ul>
    <router-view></router-view>
</template>
<script setup>

</script>
<style scoped>
</style>