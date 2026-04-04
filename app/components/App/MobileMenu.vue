<script setup lang="ts">
defineProps<{
  links: Link[];
}>();
defineEmits(["close"]);
</script>

<template>
  <div class="absolute flex w-full items-center gap-17 bg-theme-white px-6 py-11">
    <button type="button" class="cursor-pointer" @click="$emit('close')">
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="text-theme-gray-500">
        <path
          d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
          fill="#000"
          fill-rule="evenodd"
          opacity=".201"
        />
      </svg>
    </button>
    <nav>
      <ul class="flex gap-8 font-semibold tracking-tighter text-theme-black">
        <li v-for="link in links" :key="link.title">
          <NuxtLink :to="link.url" @click="$emit('close')">
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
