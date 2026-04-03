<script setup lang="ts">
const currentImageIndex = ref(0);
</script>

<template>
  <main class="mx-auto max-w-360">
    <AppHeroSection />
    <section class="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto]">
      <div>
        <img
          src="/image-about-dark.jpg"
          alt="An elegant room with bed, coffee table and chairs."
          width="420"
          height="266"
          class="h-auto w-full object-cover lg:h-auto lg:w-auto lg:object-none"
        />
      </div>
      <div class="bg-theme-white px-8 py-12 lg:p-2 xl:px-11 xl:py-15">
        <h1
          class="theme:mb-4 mb-4 text-[0.90rem] font-bold tracking-[0.3em] uppercase lg:mb-2 xl:text-lg"
        >
          About our furniture
        </h1>
        <p class="leading-5.5 tracking-[-0.02em] text-theme-gray-500">
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream
          space.
        </p>
      </div>
      <div>
        <img
          src="/image-about-light.jpg"
          alt="A faded room with a single chair."
          width="420"
          height="266"
          class="h-auto w-full object-cover lg:h-auto lg:w-auto lg:object-none"
        />
      </div>
    </section>
  </main>
</template>
