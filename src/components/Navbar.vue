<script setup lang="ts">

const menus = [
    {
        text: "Home",
        to: "/"
    },
    {
        text: "About",
        to: "/about"
    },
    {
        text: "All Pages",
        to: "/allpages"
    }
];
</script>

<style>
nav {
    display: flex;
    gap: 10px
}
</style>

<template>
    <!-- <Nav class="p-4 font-bold bg-orange-100">
        <ul><a href="/">Home</a></ul>
        <ul><a href="/about">About</a></ul>
    </Nav> -->
    <VNavbar :menus="menus" class="bg-blue-200"/>
</template>