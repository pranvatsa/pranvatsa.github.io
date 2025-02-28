<template>
  <div>
    <textarea
      v-model="input"
      placeholder="Enter text to encode/decode"
      class="w-full p-2 mb-4 border rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    ></textarea>
    <div class="flex justify-between mb-4">
      <button
        @click="encode"
        class="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
      >
        Encode
      </button>
      <button
        @click="decode"
        class="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
      >
        Decode
      </button>
    </div>
    <textarea
      v-model="output"
      placeholder="Result"
      class="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      readonly
    ></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const input = ref('');
const output = ref('');

const encode = () => {
  try {
    output.value = btoa(input.value);
  } catch (e) {
    output.value = 'Encoding failed';
  }
};

const decode = () => {
  try {
    output.value = atob(input.value);
  } catch (e) {
    output.value = 'Invalid Base64 string';
  }
};
</script>

<style scoped>
textarea {
  min-height: 100px;
}
</style>
