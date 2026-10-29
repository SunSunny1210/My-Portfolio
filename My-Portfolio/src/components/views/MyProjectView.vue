<script setup>
import { useRoute, useRouter } from 'vue-router';
import { projectRoutes } from '../../router';
import { computed, ref } from 'vue';

defineProps({
    open: Boolean
})

const route = useRoute();
const router = useRouter();

const isBack = ref(false);

const currentIndex = computed(() => projectRoutes.findIndex(project => project.name === route.name) + 1);

function goBack () {
    isBack.value = true;
    setTimeout(() => isBack.value = false, 500);
    router.push(projectRoutes[currentIndex.value - 2]);
}
</script>

<template>
    <div :class="{ open }" class="my-project beige-main flex-center-column">
        <h2 class="beige-title">My Biggest Project</h2>
        <div class="project-views flex-center-column">
            <div class="index-arrows flex-center">
                <button :disabled="currentIndex <= 1" @click="goBack" id="left"> </button>
                <span>{{ currentIndex }} / {{ projectRoutes.length }}</span>
                <button :disabled="currentIndex === projectRoutes.length" @click="router.push(projectRoutes[currentIndex])" id="right"> </button>
            </div>
            <RouterView v-slot="{ Component }">
                <Transition :name="isBack ? 'back' : 'slide'" mode="out-in">
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
    width: 60vw;
    gap: 2vh;
    flex: 1;

    h3 {
        text-shadow: 5px 5px var(--dark-peach);
    }

    .index-arrows {
        width: 10vw;
        gap: 0.5rem;
        
        button {
            height: 50%;
            background-color: var(--dark-peach);
            border: none;
            flex: 0.3;

            &#left {
                clip-path: polygon(0 50%, 100% 0, 100% 100%);
            }

            &#right {
                clip-path: polygon(0 0, 100% 50%, 0 100%);
            }
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

.back-enter-active {
    transform-origin: bottom center;
    animation: back-in 0.5s ease-in-out forwards;
}

.back-leave-active {
    animation: back-out 0.3s ease-out forwards;
}

@keyframes slide-in {
    0% {
        transform: skewX(0deg) translateX(110%);
    }
    20% {
        transform: skewX(-10deg) translateX(110%);
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

@keyframes back-in {
    0% {
        transform: skewX(0deg) translateX(-110%);
    }
    20% {
        transform: skewX(10deg) translateX(-110%);
    }
    75% {
        transform: skewX(0) translateX(0%);
    }
    75.1% {
        transform: skewX(-15deg);
    }
    100% {
        transform: skewX(0deg);
    }
}

@keyframes back-out {
    0% {
        transform: skewX(0deg) translateX(0%);
    }
    100% {
        transform: skewX(10deg) translateX(100%);
    }
}

@media (max-width: 450px) {
    .project-views {
        width: 90vw;

        .index-arrows {
            max-height: fit-content;
            width: 30vw;
            flex: 1;

            button {
                height: 100%;
            }
        }
    }
}
</style>