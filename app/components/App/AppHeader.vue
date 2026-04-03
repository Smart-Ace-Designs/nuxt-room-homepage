<script setup lang="ts">
import { links } from "~/assets/data/links";
</script>

<template>
  <header>
    <nav
      class="absolute inset-x-0 top-0 z-10 hidden items-center gap-x-15 bg-transparent px-15 py-15 md:flex"
    >
      <NuxtLink to="/"><img src="/logo.svg" alt="Logo" /></NuxtLink>
      <ul class="flex gap-8 text-[0.9375rem] text-theme-white">
        <li v-for="link in links" :key="link.title">
          <NuxtLink
            :to="link.url"
            class="relative after:absolute after:-bottom-3 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-theme-white after:transition-all after:duration-300 hover:after:w-5"
            >{{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
