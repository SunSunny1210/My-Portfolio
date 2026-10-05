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
            <RouterView v-slot="{ Component }">
                <Transition name="slide" mode="out-in">
                    <component :is="Component"/>
                </Transition>
            </RouterView>
        </div>
    </div>
</template>

<style>
.my-project {
    overflow: hidden;
}

.project-views {
    flex: 1;

    h3 {
        text-shadow: 5px 5px var(--dark-peach);
    }

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

.slide-enter-active {
    transform-origin: bottom center;
    animation: slide-in 0.5s ease-in-out forwards;
}

.slide-leave-active {
    animation: slide-out 0.3s ease-out forwards;
}

@keyframes slide-in {
    0% {
        transform: skewX(0deg) translateX(100%);
    }
    20% {
        transform: skewX(-10deg) translateX(100%);
    }
    75% {
        transform: skewX(0) translateX(0%);
    }
    75.1% {
        transform: skewX(15deg);
    }
    100% {
        transform: skewX(0deg);
    }
}

@keyframes slide-out {
    0% {
        transform: skewX(0deg) translateX(0%);
    }
    100% {
        transform: skewX(-10deg) translateX(-100%);
    }
}
</style>