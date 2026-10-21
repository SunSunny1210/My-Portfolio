<script setup>
import { ref } from 'vue';
import { routes } from '../router';

const props = defineProps({
    open: Boolean
})

const shrink = ref(false);

const emit = defineEmits(["is-done", "close"]);

function onOptionClick() {
    if (props.open) emit('close', false);
    else shrink.value = true;
}
</script>

<template>
    <div @transitionend="emit('is-done', true)" class="options-view flex-center-column" :class="{ shrink, open }">
        <div class="options flex-center-column">
            <RouterLink @click="onOptionClick" class="option flex-center" v-for="route in routes" :to="route.path" :key="route.name">{{ route.name }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.options-view {
    position: absolute;
    top: 0;
    left: 0;
    height: 100svh;
    width: 100%;
    background-color: white;
    transition: width 0.4s ease-in-out, transform 0.4s ease-in-out, left 0.4s ease-in-out;
    z-index: 9;
    
    .options {
        padding: 3rem;
        height: 100%;
        width: 40%;
        gap: 6vh;
        transition: width 0.4s ease-in-out;
        z-index: 1;
    
        .option {
            padding: 1rem;
            min-height: 0;
            width: 100%;
            text-decoration: none;
            color: white;
            background-color: var(--main-pink);
            border: 5px solid white;
            box-shadow: 0 0 0 10px var(--main-pink);
            
            &:hover {
                background-color: var(--dark-pink);
                box-shadow: 0 0 0 10px var(--dark-pink);
            }
        }
    }
    
    &.shrink {
        width: 30%;

        .options {
            width: 100%;
        }
    }
}

@media (max-width: 450px) {
    .options-view {
        .options {
            padding: 2rem;
            width: 100%;

            .option {
                font-size: 0.7rem;
            }
        }

        &.shrink {
            width: 40%;

            &::after {
                content: " ";
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                opacity: 0;
                box-shadow: 0 0 0 100vmax rgba(92, 37, 37, 0.437);
                transition: opacity 0.5s ease-in-out;
                z-index: 0;
            }
        }

        &.open::after {
            opacity: 1;
        }
    }
}

@media (max-width: 950px) {
    .options-view {
        &.shrink {
            transform: translateX(-100%);
        }

        &.open {
            transform: translateX(0);
        }
    }
}
</style>