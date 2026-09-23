<script setup>
import { onMounted, ref, watch } from 'vue';

const links = {
    email: {
        name: "email",
        src: "/src/assets/Gmail.png",
        text: "sol16821@gmail.com"
    },
    phone: {
        name: "phone",
        src: "/src/assets/Phone.png",
        text: "+34 636453836"
    },
    github: {
        name: "github",
        src: "/src/assets/Github.png",
        text: "github.com/SunSunny1210"
    },
    linkedin: {
        name: "linkedin",
        src: "/src/assets/Linkedin.png",
        text: "yiyiyiyiyiyi"
    }
}

const left = ref(false);
const pop = ref(false);
const noPop = ref(false);
const wiggle = ref(false);

function onClick() {
    wiggle.value = false;
    left.value = true;
}

function onceAnimationDone() {
    noPop.value = true;
    pop.value = false;
    setTimeout(() => wiggle.value = true, 1000)
    
}

onMounted(() => setTimeout(() => pop.value = true, 800));
</script>

<template>
    <div class="contact beige-main flex-center-column">
        <h2 class="beige-title">Contact</h2>
        <div class="contact-info flex-center">
            <div @click="onClick" class="links flex-center-column" :class="{ left }">
                <div :class="{ pop, wiggle, noPop }" @animationend.once="onceAnimationDone" v-for="link in links" :key="link.name" class="link flex-center">
                    <div class="img-back flex-center">
                        <img :src="link.src" :alt="link.name">
                    </div>
                    <p>{{ link.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact {
    .contact-info {
        width: 100%;
        flex: 1;

        .links {
            width: 100%;
            transform: translateX(0);
            transition: transform 0.5s ease-in-out;
            
            &.left {
                transform: translateX(-40%);
            }

            .link {
                position: relative;
                padding: 1rem;
                width: 0;
                scale: 0;
                
                &.pop {
                    animation: scale 0.7s ease-in-out;
                }
                
                &.noPop {
                    scale: 1;
                }

                &.wiggle {
                    animation: wiggle 3s infinite linear;
                }

                .img-back {
                    padding: 1rem;
                    background: radial-gradient(
                        circle,
                        white 0 60%,
                        var(--beige) 60% 65%,
                        white 65% 70%,
                        var(--beige) 70% 75%,
                        white 75% 80%,
                        var(--beige) 80% 100%
                    );
                    border-radius: 50%;
                    z-index: 1;

                    img {
                        width: 5vw;
                    }
                }
                
                p {
                    position: absolute;
                    top: 50%;
                    left: 0%;
                    padding: 1rem;
                    padding-left: 3rem;
                    width: 0;
                    overflow: hidden;
                    white-space: nowrap;
                    text-align: center;
                    background-color: var(--peach);
                    border-radius: 0 50px 50px 0;
                    transform: translateY(-50%);
                    transition: width 0.5s ease-in-out, left 0.5s ease-in-out;
                    opacity: 0;
                    z-index: 0;
                }
            }

            &.left .link p {
                width: 30vw;
                left: 80%;
                opacity: 1;
            }
        }
    }
}

@keyframes scale {
    0% {
        scale: 0;
    }
    40% {
        scale: 1.2;
        rotate: -5deg;
    }
    60% {
        rotate: 5deg;
    }
    80% {
        rotate: 0;
    }
    100% {
        scale: 1;
    }
}

@keyframes wiggle {
    0%, 15% {
        transform: rotate(0);
    }
    20% {
        transform: rotate(-5deg);
    }
    25% {
        transform: rotate(5deg);
    }
    30% {
        transform: rotate(-5deg);
    }
    35% {
        transform: rotate(5deg);
    }
    40%, 100% {
        transform: rotate(0);
    }
}
</style>