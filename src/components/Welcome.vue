<script setup lang="ts">
</script>

<template>
  <div>
      <VCard>
        <template #header>
          <h3>Vcard Testing</h3>
        </template>
        <p>Saya adalah seorang JuniorSoftware Engineer</p>
        <template #footer>
          <h1 class="text-blue-600 font-bold">Affan Maulana</h1><br />
          <button class="text-cyan-800 border-2 rounded-full p-2 hover:bg-cyan-800 hover:text-white">Click me</button>
          <!-- <VBtn class="rounded-full w-1">Testing VBtn</VBtn> -->
        </template>
      </VCard>
  </div>
</template>
