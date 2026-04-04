<script setup lang="ts">
import { links } from "~/assets/data/links";
const mobileMenuOpen = ref(false);
</script>

<template>
  <header>
    <nav
      class="absolute inset-x-0 top-0 z-10 grid grid-cols-3 items-center px-5 py-12 md:flex md:gap-x-15 md:p-15"
    >
      <button
        type="button"
        class="cursor-pointer md:hidden"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle mobile menu"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd" />
        </svg>
      </button>

      <div class="justify-self-center">
        <NuxtLink to="/"><img src="/logo.svg" alt="Logo" /></NuxtLink>
      </div>

      <ul class="hidden gap-8 text-[0.9375rem] text-theme-white md:flex md:justify-self-end">
        <li v-for="link in links" :key="link.title">
          <NuxtLink
            :to="link.url"
            class="relative after:absolute after:-bottom-3 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-theme-white after:transition-all after:duration-300 hover:after:w-5"
            >{{ link.title }}
          </NuxtLink>
        </li>
      </ul>
      <AppMobileMenu
        :class="{ hidden: !mobileMenuOpen }"
        :links="links"
        @close="mobileMenuOpen = false"
      />
    </nav>
  </header>
</template>
