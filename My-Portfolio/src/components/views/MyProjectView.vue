<script setup>
import { useRoute } from 'vue-router';
import { projectRoutes } from '../../router';
import { computed } from 'vue';

const route = useRoute();

const currentIndex = computed(() => {
    const index = projectRoutes.indexOf(route.path) + 1;
    return index <= 0 ? 1 : index;
    });
</script>

<template>
    <div class="my-project beige-main flex-center-column">
        <h2 class="beige-title">My Biggest Project</h2>
        <div class="project-views flex-center-column">
            <div class="index-arrows flex-center">
                <button>&#9668;</button>
                <span>{{ currentIndex }} / {{ projectRoutes.length }}</span>
                <button>&#9658;</button>
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