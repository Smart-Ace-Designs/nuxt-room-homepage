<script setup lang="ts">
import AppHeader from "./AppHeader.vue";

const currentImageIndex = ref(0);
</script>

<template>
  <section class="relative grid grid-cols-1 xl:grid-cols-[auto_1fr]">
    <div class="relative">
      <picture>
        <source
          media="(min-width: 375px)"
          :srcset="`/desktop-image-hero-${currentImageIndex + 1}.jpg`"
          width="840"
          height="534"
        />
        <img
          :src="`/mobile-image-hero-${currentImageIndex + 1}.jpg`"
          alt="A simple room with desk with chairs and a bonsai tree on the table."
          width="375"
          height="360"
          class="h-auto w-full object-cover"
        />
      </picture>
      <AppHeader />
      <div
        class="absolute right-0 bottom-0 flex bg-theme-black xl:right-auto xl:left-full xl:translate-x-0"
      >
        <button
          class="cursor-pointer px-4 py-3 transition-colors duration-300 hover:bg-theme-gray-800 xl:px-8.5 xl:py-7"
          type="button"
          @click="currentImageIndex = (currentImageIndex - 1 + 3) % 3"
        >
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd" />
          </svg>
        </button>
        <button
          class="cursor-pointer px-4 py-3 transition-colors duration-300 hover:bg-theme-gray-800 xl:px-8 xl:py-7"
          type="button"
          @click="currentImageIndex = (currentImageIndex + 1) % 3"
        >
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div class="min-w-0 bg-theme-white px-8 py-14 2xl:pt-30 xl:px-24">
      <h1 class="mb-4 text-[2.4rem] leading-9 font-bold tracking-tighter xl:text-5xl xl:leading-11">
        Discover innovative ways to decorate
      </h1>
      <p class="mb-10 leading-5.5 tracking-[-0.02em] text-theme-gray-500 xl:mb-7">
        We provide unmatched quality, comfort, and style for property owners across the country. Our
        experts combine form and function in bringing your vision to life. Create a room in your own
        style with our collection and make your property a reflection of you and what you love.
      </p>
      <NuxtLink to="/" class="flex items-center gap-5"
        ><span class="font-semibold tracking-[0.7em] uppercase">Shop Now</span>
        <img src="/icon-arrow.svg" alt=""
      /></NuxtLink>
    </div>
  </section>
</template>
