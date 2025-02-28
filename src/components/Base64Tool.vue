<template>
  <div>
    <textarea
      v-model="input"
      placeholder="Enter text to encode/decode"
      class="w-full p-2 mb-4 border rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      aria-label="Input text"
    ></textarea>
    <div class="flex justify-between mb-4">
      <Button color="blue" @click="encode" aria-label="Encode text"
        >Encode</Button
      >
      <Button color="green" @click="decode" aria-label="Decode text"
        >Decode</Button
      >
      <Button color="red" @click="clear" aria-label="Clear text">Clear</Button>
    </div>
    <textarea
      v-model="output"
      placeholder="Result"
      class="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      readonly
      aria-label="Output text"
    ></textarea>
    <p v-if="error" class="text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';

const input = ref('');
const output = ref('');
const error = ref('');

const encode = () => {
  try {
    output.value = btoa(input.value);
    error.value = '';
  } catch (e) {
    error.value = 'Encoding failed';
  }
};

const decode = () => {
  try {
    output.value = atob(input.value);
    error.value = '';
  } catch (e) {
    error.value = 'Invalid Base64 string';
  }
};

const clear = () => {
  input.value = '';
  output.value = '';
  error.value = '';
};
</script>

<style scoped>
textarea {
  min-height: 100px;
}
</style>
