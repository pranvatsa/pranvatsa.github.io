<script setup lang="ts">
import { ref } from 'vue';

const tools = [
  { id: 'base64', name: 'Base64 Encode/Decode', icon: '🔒' },
  { id: 'json-yaml', name: 'JSON/YAML Prettifier', icon: '📝' }
];

const emit = defineEmits(['select-tool']);
const selectedTool = ref('base64');

const selectTool = (toolId: string) => {
  selectedTool.value = toolId;
  emit('select-tool', toolId);
};
</script>

<template>
  <nav class="w-64 bg-primary text-white shadow-md flex flex-col h-full" role="navigation" aria-label="Tools navigation">
    <h2 class="text-lg font-semibold p-4">Available Tools</h2>
    <ul class="space-y-2 flex-1 overflow-y-auto px-2" role="list">
      <li v-for="tool in tools" :key="tool.id" role="listitem">
        <button
          @click="selectTool(tool.id)"
          :aria-current="selectedTool === tool.id ? 'page' : undefined"
          :class="[
            'w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3',
            selectedTool === tool.id
              ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
              : 'text-gray-100 hover:bg-gray-700/50'
          ]"
          :aria-label="`${tool.name}${selectedTool === tool.id ? ' (current)' : ''}`"
        >
          <span class="text-lg" aria-hidden="true">{{ tool.icon }}</span>
          {{ tool.name }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(75, 85, 99, 0.7);
}
</style> 