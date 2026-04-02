<script setup lang="ts"></script>

<template>
  <main class="mx-auto max-w-360">
    <div class="grid grid-cols-1 xl:grid-cols-[auto_1fr]">
      <div>
        <picture>
          <source
            media="(min-width: 375px)"
            srcset="/desktop-image-hero-1.jpg"
            width="840"
            height="534"
          />
          <img
            src="/mobile-image-hero-1.jpg"
            alt="A simple room with desk with chairs and a bonsai tree on the table."
            width="375"
            height="360"
            class="h-auto w-full object-cover"
          />
        </picture>
      </div>
      <div class="min-w-0 px-8 py-14 2xl:pt-30 xl:px-24">
        <h1
          class="mb-4 text-[2.4rem] leading-9 font-bold tracking-tighter xl:text-5xl xl:leading-11"
        >
          Discover innovative ways to decorate
        </h1>
        <p class="mb-10 leading-5.5 tracking-[-0.02em] text-theme-gray-500 xl:mb-7">
          We provide unmatched quality, comfort, and style for property owners across the country.
          Our experts combine form and function in bringing your vision to life. Create a room in
          your own style with our collection and make your property a reflection of you and what you
          love.
        </p>
        <a href="/" class="flex items-center gap-5"
          ><span class="font-semibold tracking-[0.7em] uppercase">Shop Now</span>
          <img src="/icon-arrow.svg" alt=""
        /></a>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto]">
      <div>
        <img
          src="/image-about-dark.jpg"
          alt="An elegant room with bed, coffee table and chairs."
          width="420"
          height="266"
          class="h-auto w-full object-cover lg:h-auto lg:w-auto lg:object-none"
        />
      </div>
      <div class="px-8 py-12 lg:p-2 xl:px-11 xl:py-10">
        <h1 class="theme:mb-4 mb-4 text-[0.90rem] font-bold tracking-[0.3em] uppercase lg:mb-1">
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
    </div>
  </main>
</template>
