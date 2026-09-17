<script setup>
import { ref } from 'vue';

const links = {
    email: {
        src: "/src/assets/Gmail.png",
        text: "sol16821@gmail.com"
    },
    phone: {
        src: "/src/assets/Phone.png",
        text: "+34 636453836"
    },
    github: {
        src: "/src/assets/Github.png",
        text: "github.com/SunSunny1210"
    },
    linkedin: {
        src: "/src/assets/Linkedin.png",
        text: "yiyiyiyiyiyi"
    }
}

const left = ref(false);
</script>

<template>
    <div class="contact beige-main flex-center-column">
        <h2 class="beige-title">Contact</h2>
        <div class="contact-info flex-center">
            <div @click="left = true" class="links flex-center-column" :class="{ left: left }">
                <div v-for="link in links" class="link flex-center">
                    <div class="img-back">
                        <img :src="link.src" alt="">
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
                align-items: flex-start;
                
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
                    z-index: 0;
                }
            }

            &.left .link p {
                width: 30vw;
                left: 80%;
            }
        }
    }
}
</style>