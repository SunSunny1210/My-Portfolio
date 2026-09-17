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
    <div class="contact flex-center-column">
        <h2>Contact</h2>
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
    padding: 2rem;
    height: 100%;
    width: 70%;
    background-color: var(--beige);
    z-index: 1;

    h2 {
        font-size: 4rem;
        font-style: oblique;
        letter-spacing: 1rem;
        color: white;
        text-decoration: underline double 3px;
        text-shadow: 5px 5px var(--peach);
        text-underline-offset: 1rem;
    }

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
                    background-color: white;
                    border-radius: 50%;
                    z-index: 1;

                    img {
                        width: 5vw;
                        aspect-ratio: 1;
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