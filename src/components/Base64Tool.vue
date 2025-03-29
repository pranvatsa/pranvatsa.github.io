<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <label for="input" class="block text-sm font-medium text-gray-800 dark:text-gray-100">Input Text</label>
      <textarea
        id="input"
        v-model="input"
        placeholder="Enter text to encode/decode"
        class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-1 focus:ring-primary/50 focus:border-primary dark:focus:ring-primary/30 dark:focus:border-primary/70 transition-colors duration-200"
        :aria-label="'Input text for Base64 encoding/decoding'"
        rows="4"
      ></textarea>
    </div>
    
    <div class="flex justify-between items-center max-w-md mx-auto">
      <Button 
        @click="encode" 
        :aria-label="'Encode text to Base64'"
        :disabled="!input.trim()"
        class="min-w-[100px]"
      >
        Encode
      </Button>
      <Button 
        @click="decode" 
        :aria-label="'Decode Base64 text'"
        :disabled="!input.trim()"
        class="min-w-[100px]"
      >
        Decode
      </Button>
      <Button 
        color="destructive" 
        @click="clear" 
        :aria-label="'Clear input and output'"
        :disabled="!input.trim() && !output.trim()"
        class="min-w-[100px]"
      >
        Clear
      </Button>
    </div>

    <div class="space-y-2">
      <label for="output" class="block text-sm font-medium text-gray-800 dark:text-gray-100">Result</label>
      <textarea
        id="output"
        v-model="output"
        placeholder="Result will appear here"
        class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-1 focus:ring-primary/50 focus:border-primary dark:focus:ring-primary/30 dark:focus:border-primary/70 transition-colors duration-200"
        :aria-label="'Output text from Base64 encoding/decoding'"
        readonly
        rows="4"
      ></textarea>
    </div>

    <div 
      v-if="error" 
      class="p-3 bg-red-50 dark:bg-red-900/50 text-red-800 dark:text-red-100 rounded-lg"
      role="alert"
    >
      {{ error }}
    </div>
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
    error.value = 'Encoding failed. Please check your input.';
    output.value = '';
  }
};

const decode = () => {
  try {
    output.value = atob(input.value);
    error.value = '';
  } catch (e) {
    error.value = 'Invalid Base64 string. Please check your input.';
    output.value = '';
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
  resize: vertical;
  min-height: 100px;
}
</style>
