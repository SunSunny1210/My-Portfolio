<script setup>
import { ref } from 'vue';
import { routes } from '../router';

const props = defineProps({
    open: Boolean,
    isDone: Boolean
})

const shrink = ref(false);

const emit = defineEmits(["is-done", "close"]);

function onOptionClick() {
    if (props.open) emit('close', false);
    else shrink.value = true;
}
</script>

<template>
    <div @transitionend="emit('is-done', true)" class="options-view flex-center-column" :class="{ shrink, open, isDone }">
        <div class="options flex-center-column">
            <img id="up" src="../../src/assets/Flowers.png" alt="Flowers">
            <RouterLink @click="onOptionClick" class="option flex-center" v-for="route in routes" :to="route.path" :key="route.name">{{ route.name }}</RouterLink>
            <img id="down" src="../../src/assets/Flowers.png" alt="Flowers">
        </div>
        <div @click="emit('close', false)" class="shadow"></div>
    </div>
</template>

<style scoped>
.options-view {
    position: absolute;
    top: 0;
    left: 0;
    height: 100svh;
    width: 100%;
    background-color: var(--main-pink);
    transition: width 0.4s ease-in-out, transform 0.4s ease-in-out, left 0.4s ease-in-out;
    z-index: 9;
    
    .options {
        padding: 2vw;
        height: 100%;
        width: 40%;
        gap: 2vh;
        background-color: var(--main-pink);
        transition: width 0.4s ease-in-out;
        z-index: 2;
        
        img {
            width: 100%;
            aspect-ratio: 4/1;
    
            &#down {
                transform: scale(-1);
            }
        }
    
        .option {
            position: relative;
            padding: 1vh;
            min-height: 0;
            width: 90%;
            text-decoration: none;
            border: none;
            color: white;
            transition: background-color 0.3s ease-in-out;
            
            &::after {
                content: " ";
                position: absolute;
                top: 70%;
                left: 50%;
                height: 1px;
                width: 50%;
                background-color: white;
                translate: -50%;
                clip-path: inset(0 100% 0 0);
                transition: clip-path 0.3s ease-in-out;
            }

            &:hover, &:focus {
                background-color: var(--dark-pink);
                
                &::after {
                    clip-path: inset(0 0 0 0);
                }
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

@media (orientation: portrait) {
    .options-view {
        .options {
            padding: 4vw;
            width: 100%;

            .option {
                padding: 2vh 10vw;
                white-space: nowrap;

                &:focus {
                    outline: none;
                    
                    &::after {
                        clip-path: inset(0 100% 0 0);
                    }
                }
            }
        }

        &.shrink {
            .shadow {
                content: " ";
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 0%;
                background-color: rgba(92, 37, 37, 0.437);
                box-shadow: 0 0 0 100vmax rgba(92, 37, 37, 0.437);
                transition: opacity 0.5s ease-in-out, width 0.5s ease-in-out;
                opacity: 0;
                z-index: 0;
            }
        }

        &.open {
            .shadow {
                width: 100vw;
                opacity: 1;
            }
        }
    }

    @media (max-width: 650px) {
        .options-view {
            &.shrink {
                width: 40%;
                transform: translateX(-100%);
            }
    
            &.open {
                transform: translateX(0);
            }
        }
    }
}
</style>