<script setup lang="ts">
import Welcome from "@/components/Welcome.vue";
import Navbar from "@/components/Navbar.vue";
import Avatar from "@/views/Avatar.vue"
</script>

<template>
  <Navbar />
  <main class="p-6">
    <Welcome />
    <br />
    <h2 class="font-semibold">1. Auto Complate, click <span class="text-red-400 border-black"><a
          href="/auto">here</a></span></h2><br />
    <h2 class="font-semibold">2. Avatar, click (Single Page Aplication)<span class="text-red-400 border-black">
        <RouterLink to="/avatar"> here</RouterLink><br />
      </span></h2>
  </main>
</template>
