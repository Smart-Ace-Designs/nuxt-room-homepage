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
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
              fill="#000"
              fill-rule="evenodd"
              opacity=".201"
            />
          </svg>
        </button>
      </div>
      <AppMobileMenuNav />
    </div>
  </div>
</template>
