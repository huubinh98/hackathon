<template>
  <b-container class="min-h-screen">
    <b-header>
      <Header />
    </b-header>
    <b-main class="flex flex-col p-0 max-w-[100%]">
      <slot />
    </b-main>
  </b-container>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";

useDark();
</script>
