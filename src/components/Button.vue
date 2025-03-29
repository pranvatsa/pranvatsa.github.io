<template>
  <button
    :class="[
      'px-4 py-2 rounded text-white transition-colors duration-200',
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
    default: 'primary',
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
    case 'destructive':
      return 'bg-red-600 hover:bg-red-700';
    default:
      return 'bg-primary hover:bg-gray-600';
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
