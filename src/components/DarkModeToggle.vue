<template>
  <button
    @click="toggleTheme"
    class="p-2 bg-gray-300 dark:bg-gray-800 rounded-full"
    aria-label="Toggle dark mode"
  >
    {{ theme === 'dark' ? '🌙' : '☀️' }}
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const theme = ref('');

onMounted(() => {
  // Check if the user has a stored theme preference
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme) {
    // If a theme is stored, use it
    theme.value = storedTheme;
  } else {
    // Check if the system preference is dark or light
    const prefersDarkScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    theme.value = prefersDarkScheme ? 'dark' : 'light';
  }

  // Apply the theme class to the document element
  document.documentElement.classList.add(theme.value);
});

const toggleTheme = () => {
  // Toggle between dark and light themes
  theme.value = theme.value === 'light' ? 'dark' : 'light';

  // Toggle the 'dark' class on the document element
  document.documentElement.classList.toggle('dark', theme.value === 'dark');

  // Store the user's theme preference in localStorage
  localStorage.setItem('theme', theme.value);
};
</script>
