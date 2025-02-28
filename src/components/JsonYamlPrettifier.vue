<template>
  <div>
    <textarea
      v-model="input"
      placeholder="Enter JSON or YAML to prettify"
      class="w-full p-2 mb-4 border rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      aria-label="Input text"
    ></textarea>
    <div class="flex justify-between mb-4">
      <button
        @click="prettifyJson"
        class="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
        aria-label="Prettify JSON"
      >
        Prettify JSON
      </button>
      <button
        @click="prettifyYaml"
        class="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
        aria-label="Prettify YAML"
      >
        Prettify YAML
      </button>
    </div>
    <textarea
      v-model="output"
      placeholder="Result"
      class="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      readonly
      aria-label="Output text"
    ></textarea>
    <p v-if="error" class="text-red-500" aria-label="Error message">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import yaml from 'js-yaml';

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
    error.value = 'Invalid JSON';
  }
};

const prettifyYaml = () => {
  try {
    const obj = yaml.load(input.value);
    output.value = yaml.dump(obj, { indent: 2 });
    error.value = '';
  } catch (e) {
    output.value = '';
    error.value = 'Invalid YAML';
  }
};
</script>

<style scoped>
textarea {
  min-height: 100px;
}
</style>
