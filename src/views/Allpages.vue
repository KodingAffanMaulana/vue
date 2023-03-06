<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import VAppBar from "@gits-id/app-bar";
</script>

<template>
  <Navbar />
  <div class="p-6">
    <h2 class="text-center">All Pages</h2>

    <h2>VAppBar</h2>
    <VAppBar color="primary">Vue adalah</VAppBar>
    <VAppBar size="sm"> Hello World </VAppBar>
    <VAppBar size="md"> Hello World </VAppBar>
    <VAppBar size="lg"> Hello World </VAppBar>
    <VAppBar size="auto"> Hello World </VAppBar>

    <br />
    <h2>VBadge</h2>
    <VBadge> Hello World </VBadge>
    <VBadge color="primary"> Hello World </VBadge>
    <VBadge color="secondary"> Hello World </VBadge>
    <VBadge color="info"> Hello World </VBadge>
    <VBadge color="warning"> Hello World </VBadge>
    <VBadge color="success"> Hello World </VBadge>
    <VBadge color="error"> Hello World </VBadge>
  </div>
</template>
