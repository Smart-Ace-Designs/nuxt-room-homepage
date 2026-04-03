<script setup lang="ts">
import { links } from "~/assets/data/links";
</script>

<template>
  <nav class="mt-20" id="mobile-menu-nav" aria-label="Mobile menu">
    <ul class="space-y-4">
      <li v-for="link in links" :key="link.title">
        <a
          :href="link.url"
          class="border-b-2 border-transparent pb-2 text-2xl text-white uppercase transition-colors duration-300 hover:border-theme-white"
        >
          {{ link.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>
