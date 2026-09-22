<script setup>
import { onMounted, ref } from 'vue';
import Sprinkles from '../complements/Sprinkles.vue';

const animate = ref(false);

onMounted(() => setTimeout(() => animate.value = true, 600));
</script>

<template>
    <div class="about-me pink-main flex-center-column">
        <h2 class="pink-title">About Me</h2>
        <div class="about-info flex-center">
            <div class="info">
                <div class="left flex-center">
                    <div :class="{ animate }" class="img-magic">
                        <Sprinkles class="left-sprinkles"/>
                        <img class="controller" src="../../assets/Controller.png" alt="Pink Controller">
                    </div>
                    <p :class="{ animate }">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    </p>
                </div>
                <div class="right flex-center">
                    <p :class="{ animate }">
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <div :class="{ animate }" class="img-magic">
                        <Sprinkles class="right-sprinkles"/>
                        <img class="laptop" src="../../assets/Laptop.png" alt="Pink Laptop">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-me {
    .about-info {
        flex: 1;
        
        .info {
            padding: 2rem;
            background-color: var(--dark-pink);
            border: 1rem double var(--soft-pink);
            
            .img-magic {
                position: relative;
                width: fit-content;
                shape-outside: margin-box;
                transform: scale(0);
                transition: transform 0.5s ease-in-out;
                animation: wiggle 2s ease-in-out infinite alternate;

                .left-sprinkles {
                    transform: scaleY(0.8);
                }

                .right-sprinkles {
                    transform: scaleY(0.9);
                }

                &.animate {
                    transform: scale(1);
                }
            }
            
            .left {
                align-items: flex-start;

                p {
                    text-align: right;
                }
            }
            
            .right {
                align-items: flex-end;

                p {
                    text-align: left;
                }

                .img-magic.animate {
                    transition-delay: 0.4s;
                    animation-delay: 1s;
                }
            }

            p {
                opacity: 0;
                transition: opacity 0.5s ease-in-out 0.8s;

                &.animate {
                    opacity: 1;
                }
            }
            
            img {
                width: 9vw;
                vertical-align: middle;

                &.laptop {
                    margin: 0.5rem;
                }
            }
        }
    }
}

@keyframes wiggle {
    from {
        rotate: -5deg;
    }
    to {
        rotate: 5deg;
    }
}
</style>