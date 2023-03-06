<script setup lang="ts">
import Navbar from "@/components/Navbar.vue"
</script>

<template>
    <Navbar></Navbar>
    <div class="px-6 pt-6">
        <h3>Halaman Avatar</h3><br />
        <h3>Basic</h3>
    <VAvatar color="primary" name="John Doe" />
        <br />
        <h3>With Image</h3>
        <VAvatar color="primary" src="path-to-image.png" />
        <VAvatar src="path-to-image.jpg" alt="John Doe" />

        <VAvatar src="path-to-image.jpg" alt="John Doe" />
        <VAvatar shape="square" src="path-to-image.jpg" alt="John Doe" />
        <VAvatar shape="rounded" src="path-to-image.jpg" alt="John Doe" />
    </div>
</template>