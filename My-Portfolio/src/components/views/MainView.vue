<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Options from '../Options.vue';

const isDone = ref(false);
const open = ref(false);
const isShort = ref(window.innerWidth);

function updateWidth() {
    isShort.value = window.innerWidth;
}

onMounted(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth)
});
onUnmounted(() => window.removeEventListener('resize', updateWidth));
</script>

<template>
    <div class="main-view">
        <Options :open="open" @is-done="(v) => isDone = v" @close="(v) => open = v"/>
        <RouterView v-slot="{ Component }">
            <div v-if="isShort <= 950" @click="open = !open" :class="{ open }" class="menu flex-center-column">
                <hr id="one"/>
                <hr id="two"/>
                <hr id="three"/>
            </div>
            <Transition :name="isDone ? 'bounce-in' : ''" mode="in-out">
                <component class="component" :open="open" :is="Component"/>
            </Transition>
        </RouterView>
    </div>
</template> 

<style scoped>
.main-view {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-self: center;

    .menu {
        position: absolute;
        top: 3%;
        left: 3%;
        width: 7vw;
        gap: 1vh;
        aspect-ratio: 1.5 / 1;
        z-index: 9;
        
        hr {
            position: absolute;
            left: 0;
            height: 7px;
            width: 100%;
            background-color: white;
            border: none;
            transition: background-color 0.5s ease-in-out, transform 0.5s ease-in-out, translate 0.5s ease-in-out, top 0.5s ease-in-out;

            &#one {
                top: 0;
            }

            &#two {
                top: 50%;
                transform: translateY(-50%);
            }

            &#three {
                top: calc(100% - 7px);
            }
        }

        &.open {
            hr {
                background-color: var(--soft-pink);
                transform-origin: center;
                translate: 0 -50%;
                
                &#one, &#two, &#three {
                    top: 50%;
                }
                
                &#one, &#two {
                    transform: rotate(45deg);
                }
                
                &#three {
                    transform: rotate(-45deg);
                }
            }
        }
    }

    .component {
        height: 100svh;
    }
}

.bounce-in-enter-active {
    position: absolute;
    animation: bounce-in 0.7s alternate;
}

.bounce-in-leave-active {
    position: absolute;
}

@keyframes bounce-in {
    0% {
        transform: translateY(-100%);
    }
    50% {
        transform: translateY(0%);
    }
    75% {
        transform: translateY(-3%);
    }
    100% {
        transform: translateY(0%);
    }
}

@media (max-width: 450px) {
    .main-view {
        .menu {
            hr {
                height: 3px;

                &#three {
                    top: calc(100% - 3px);
                }
            }
        }
    }
}
</style>