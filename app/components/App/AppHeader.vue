<script setup lang="ts">
import { links } from "~/assets/data/links";
</script>

<template>
  <header>
    <nav
      class="absolute inset-x-0 top-0 z-10 flex items-center gap-x-15 bg-transparent px-15 py-15"
    >
      <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg" class="md:hidden">
        <path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd" />
      </svg>
      <NuxtLink to="/"><img src="/logo.svg" alt="Logo" /></NuxtLink>
      <ul class="hidden gap-8 text-[0.9375rem] text-theme-white md:flex">
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
