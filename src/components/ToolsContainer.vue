<script setup lang="ts">
import { ref, shallowRef, markRaw } from 'vue';
import Base64Tool from './Base64Tool.vue';
import JsonYamlPrettifier from './JsonYamlPrettifier.vue';
import ToolsSideNav from './ToolsSideNav.vue';

const currentTool = ref('base64');

const toolComponents = {
  base64: markRaw(Base64Tool),
  'json-yaml': markRaw(JsonYamlPrettifier)
};

const handleToolSelect = (toolId: string) => {
  currentTool.value = toolId;
};
</script>

<template>
  <div class="flex w-full h-full">
    <div class="fixed left-0 w-64" style="top: 4rem; bottom: 3rem;">
      <ToolsSideNav @select-tool="handleToolSelect" class="h-full" />
    </div>
    <div class="flex-1 pl-72 flex items-center justify-center p-4 h-full">
      <div 
        class="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:text-gray-100 w-full max-w-2xl transition-all duration-300"
        role="main"
        :aria-label="`${currentTool === 'base64' ? 'Base64' : 'JSON/YAML'} Tool`"
      >
        <Transition
          name="fade"
          mode="out-in"
          appear
        >
          <component 
            :is="toolComponents[currentTool]" 
            :key="currentTool"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 