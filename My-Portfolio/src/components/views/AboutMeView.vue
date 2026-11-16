<script setup>
import { onMounted, ref } from 'vue';
import Sprinkles from '../complements/Sprinkles.vue';

defineProps({
    open: Boolean
})

const animate = ref(false);

onMounted(() => setTimeout(() => animate.value = true, 600));
</script>

<template>
    <div :class="{ open }" class="about-me pink-main flex-center-column">
        <h2 class="pink-title">About Me</h2>
        <div class="about-info flex-center">
            <div class="info">
                <div class="left flex-center">
                    <div :class="{ animate }" class="img-magic">
                        <Sprinkles class="left-sprinkles"/>
                        <img class="controller" src="../../assets/Controller.png" alt="Pink Controller">
                    </div>
                    <p :class="{ animate }">
                        I've always been a deep pationate of music and videogames. Those two have always been a must in my life. I studied 12 years of transverse flute and did scenic studies on highschool, since my main goal was to do musical theatre or play in an orchestra. Sadly, due to health reasons, this dream had to become a simple future hobbie. When this dream came to an end, I started looking for other paths, and there's when the videogame love gains the spotlight.
                    </p>
                </div>
                <div class="right flex-center">
                    <p :class="{ animate }">
                        I've always felt a bit overwhelmed by the coding world, but my mom suggested me to study a bit of FrontEnd, since she did it too and said it was accessible. It wasn't videogame coding, like my siblings do, but it was a start. At first, I didn't feel very comfortable, but I ended up loving it and now I'm actually thrilled to start in this world. I know it's gonna be hard, but nothing that matters is easy ;).
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
            padding: 2vw;
            background-color: var(--dark-pink);
            border: 1rem double var(--soft-pink);
            overflow-y: auto;
            
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
                width: calc(4rem + 1vw);
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

@media (orientation: landscape) and (max-height: 429px) {
    .about-me {
        justify-content: space-between;

        .about-info {
            max-height: 70vh;
            
            .info {
                height: 100%;
            }
        }
    }
}
</style>