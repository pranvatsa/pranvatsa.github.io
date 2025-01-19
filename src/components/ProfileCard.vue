<template>
    <div class="text-center mx-4 sm:mx-8 md:mx-16">
        <!-- Profile Image (Optional) -->
        <!-- <img class="w-32 h-32 mx-auto rounded-full border-4 border-primary shadow-lg" :src="profileImage" alt="Profile" loading="lazy" /> -->

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mt-4 sm:mt-6 md:mt-8">{{
            name }}</h1>
        <p class="text-md sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2 sm:mt-4 md:mt-6">{{ description }}
        </p>

        <div class="mt-6 sm:mt-8 md:mt-10 flex justify-center space-x-6">
            <a :href="githubLink" class="text-primary font-semibold hover:underline dark:text-gray-300" target="_blank"
                rel="noopener noreferrer">
                GitHub
            </a>
            <a :href="linkedinLink" class="text-secondary font-semibold hover:underline dark:text-gray-300"
                target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    profileImage: String,
    description: String,
    githubLink: String,
    linkedinLink: String,
});
</script>
