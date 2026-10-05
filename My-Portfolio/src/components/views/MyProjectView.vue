<script setup>
import { useRoute, useRouter } from 'vue-router';
import { projectRoutes } from '../../router';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();

const currentIndex = computed(() => projectRoutes.findIndex(project => project.name === route.name) + 1);
</script>

<template>
    <div class="my-project beige-main flex-center-column">
        <h2 class="beige-title">My Biggest Project</h2>
        <div class="project-views flex-center-column">
            <div class="index-arrows flex-center">
                <button :disabled="currentIndex <= 1" @click="router.push(projectRoutes[currentIndex - 2])">&#9668;</button>
                <span>{{ currentIndex }} / {{ projectRoutes.length }}</span>
                <button :disabled="currentIndex === projectRoutes.length" @click="router.push(projectRoutes[currentIndex])">&#9658;</button>
            </div>
            <RouterView/>
        </div>
    </div>
</template>

<style scoped>
.project-views {
    flex: 1;

    .index-arrows {
        gap: 0.5rem;
        
        button {
            color: var(--dark-peach);
            background-color: transparent;
            border: none;
        }
        
        span {
            color: var(--dark-peach);
            font-size: 1.5rem;
            font-weight: bold;
        }
    }
}
</style>