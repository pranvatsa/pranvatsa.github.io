<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <label for="input" class="block text-sm font-medium text-gray-800 dark:text-gray-100">Input Text</label>
      <textarea
        id="input"
        v-model="input"
        placeholder="Enter JSON or YAML to prettify"
        class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-1 focus:ring-primary/50 focus:border-primary dark:focus:ring-primary/30 dark:focus:border-primary/70 transition-colors duration-200 font-mono"
        :aria-label="'Input text for JSON/YAML prettification'"
        rows="4"
      ></textarea>
    </div>
    
    <div class="flex justify-evenly items-center max-w-md mx-auto">
      <Button 
        @click="prettifyJson" 
        :aria-label="'Prettify JSON text'"
        :disabled="!input.trim()"
        class="min-w-[140px]"
      >
        Prettify JSON
      </Button>
      <Button 
        @click="prettifyYaml" 
        :aria-label="'Prettify YAML text'"
        :disabled="!input.trim()"
        class="min-w-[140px]"
      >
        Prettify YAML
      </Button>
    </div>

    <div class="space-y-2">
      <label for="output" class="block text-sm font-medium text-gray-800 dark:text-gray-100">Result</label>
      <textarea
        id="output"
        v-model="output"
        placeholder="Result will appear here"
        class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-1 focus:ring-primary/50 focus:border-primary dark:focus:ring-primary/30 dark:focus:border-primary/70 transition-colors duration-200 font-mono"
        :aria-label="'Output text from JSON/YAML prettification'"
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
import yaml from 'js-yaml';
import Button from './Button.vue';

const input = ref('');
const output = ref('');
const error = ref('');

const prettifyJson = () => {
  try {
    const json = JSON.parse(input.value);
    output.value = JSON.stringify(json, null, 2);
    error.value = '';
  } catch (e) {
    output.value = '';
    error.value = 'Invalid JSON. Please check your input.';
  }
};

const prettifyYaml = () => {
  try {
    const obj = yaml.load(input.value);
    output.value = yaml.dump(obj, { indent: 2 });
    error.value = '';
  } catch (e) {
    output.value = '';
    error.value = 'Invalid YAML. Please check your input.';
  }
};
</script>

<style scoped>
textarea {
  resize: vertical;
  min-height: 100px;
}
</style>
