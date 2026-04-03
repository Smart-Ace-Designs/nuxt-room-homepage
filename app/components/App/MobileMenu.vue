<script setup lang="ts"></script>

<template>
  <div class="container mx-auto flex h-full items-start px-6 pt-8" aria-modal="true">
    <div class="flex w-full flex-col gap-20">
      <div class="flex items-center justify-between">
        <AppLogo classes="h-6 w-35" aria-hidden="true" />
        <button
          id="close-menu"
          type="button"
          class="cursor-pointer text-theme-white"
          aria-label="Close menu"
          aria-controls="mobile-menu-nav"
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
              fill="#FFF"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <AppMobileMenuNav />
    </div>
  </div>
</template>
