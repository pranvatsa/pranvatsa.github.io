<template>
  <div>
    <textarea
      v-model="input"
      placeholder="Enter JSON or YAML to prettify"
      class="w-full p-2 mb-4 border rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      aria-label="Input text"
    ></textarea>
    <div class="flex justify-between mb-4">
      <Button color="blue" @click="prettifyJson" aria-label="Prettify JSON"
        >Prettify JSON</Button
      >
      <Button color="green" @click="prettifyYaml" aria-label="Prettify YAML"
        >Prettify YAML</Button
      >
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
