<template>
  <button
    :class="[
      'px-4 py-2 rounded text-white',
      colorClass,
      { 'hover:bg-opacity-75': !disabled },
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    @click="handleClick"
    :aria-label="ariaLabel"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'blue',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['click']);

const colorClass = computed(() => {
  switch (props.color) {
    case 'blue':
      return 'bg-blue-700 hover:bg-blue-800';
    case 'green':
      return 'bg-green-700 hover:bg-green-800';
    case 'red':
      return 'bg-red-700 hover:bg-red-800';
    default:
      return 'bg-blue-700 hover:bg-blue-800';
  }
});

const handleClick = () => {
  if (!props.disabled) {
    emits('click');
  }
};
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}
</style>
