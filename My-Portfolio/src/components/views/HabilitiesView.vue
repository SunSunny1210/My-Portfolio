<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const skills = [
    "Yayayayaya",
    "Yayayayaya",
    "Yayayayaya",
    "Yayayayaya",
    "Yayayayaya",
    "Yayayayaya"
]

const languages = [
    {
        name: 'English',
        short: 'ENG',
        progress: 'first'
    },
    {
        name: 'Spanish',
        short: 'SPA',
        progress: 'second'
    },
    {
        name: 'Catalan',
        short: 'CAT',
        progress: 'third'
    }
]

const isShort = ref(false);

function updateHeight() {
   if (window.innerHeight <= 950) isShort.value = true;
   else isShort.value = false;
}

onMounted(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight) 
});

onUnmounted(() => window.removeEventListener('resize', updateHeight));
</script>

<template>
    <div class="habilities pink-main flex-center-column">
        <h2 class="pink-title">Habilities</h2>
        <div class="habilities-info flex-center">
            <div class="habilities-grid">
                <div class="hability-cell flex-center-column" id="skills">
                    <h3>Skills</h3>
                    <ul class="flex-center-column">
                        <li class="skill flex-center" v-for="(skill, i) in skills" :key="i" :style="{'--chars': skill.length, '--delay': `${i * 0.5}s`}">
                            <span>{{ skill }}</span>
                        </li>
                    </ul>
                </div>
                <div class="hability-cell flex-center-column" id="languages">
                    <h3>Languages</h3>
                    <ul class="flex-center-column">
                        <li v-for="language in languages" class="flex-center-column">
                            <span>{{ isShort ? language.short : language.name }}</span>
                            <div :class="language.progress" class="progress"></div>
                        </li>
                    </ul>
                </div>
                <div class="hability-cell flex-center-column" id="coding">
                    <h3>Coding</h3>
                    <div class="icons flex-center">
                        <img class="first" src="../../assets/HTML.png" alt="HTML 5 Icon">
                        <img class="second" src="../../assets/CSS.png" alt="CSS Icon">
                        <img class="third" src="../../assets/JS.png" alt="JS Icon">
                        <img class="fourth" src="../../assets/VUE.png" alt="Vue Icon">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.habilities {
    .habilities-info {
        padding-top: 3rem;
        max-height: fit-content;
        min-height: 0;
        flex: 1;

        .habilities-grid {
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto auto;
            grid-template-areas: 
            "skills languages"
            "skills languages"
            "skills coding";

            .hability-cell {
                padding: 1rem;
                min-height: 0;
                background-color: var(--main-pink);
                border: 1rem double var(--soft-pink);
                gap: 2vh;
                flex: 1;

                ul {
                    padding: 1rem;
                    min-height: 0;
                    width: 100%;
                    
                    li {
                        padding: 1rem;
                        min-height: 0;
                        width: 100%;
                        gap: 1vw;
                        text-align: center;
                        color: white;
                        background-color: var(--dark-pink);
                        border: 1rem double var(--main-pink);
                        list-style: none;

                        &.skill {
                            overflow: hidden;
                            white-space: nowrap;
                            
                            span {
                                clip-path: inset(0 100% 0 0);
                                animation: typing 1.5s steps(var(--chars), end) forwards var(--delay);
                            }
                        }
                        
                        .progress {
                            position: relative;
                            height: 2vh;
                            width: 100%;
                            background-color: var(--beige);
                            border-radius: 20px;
                            
                            &::after {
                                content: " ";
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                height: 2vh;
                                width: 100%;
                                clip-path: inset(0 100% 0 0);
                                translate: -50% -50%;
                                background-color: var(--peach);
                                border-radius: 20px;
                                animation: progress 1.5s ease-in-out forwards;
                            }
                        }
                    }
                }
            }

            #skills {
                grid-area: skills;
                list-style-position: inside;
            }
            
            #languages {
                grid-area: languages;
                list-style-position: inside;
            }

            #coding {
                grid-area: coding;

                .icons {
                    gap: 1rem;

                    img {
                        width: 5vw;
                        scale: 0;
                        animation: scale 0.5s ease-in-out forwards;
                    }
                }
            }

            #languages, #coding {
                img.first, .first::after {
                    animation-delay: 0.5s;
                }

                img.second, .second::after {
                    animation-delay: 0.8s;
                }

                img.third, .third::after {
                    animation-delay: 1.1s;
                }

                img.fourth {
                    animation-delay: 1.4s;
                }

            }
        }
    }
}

@keyframes typing {
    from {
        clip-path: inset(0 100% 0 0);
    }
    to {
        clip-path: inset(0 0 0 0);
    }
}

@keyframes progress {
    0% {
        clip-path: inset(0 100% 0 0);
    }
    70% {
        clip-path: inset(0 0 0 0);
    }
    71% {
        clip-path: inset(0 0 0 0);
        transform: scale(1);
    }
    85% {
        clip-path: inset(0 0 0 0);
        transform: scale(1.1);
    }
    100% {
        clip-path: inset(0 0 0 0);
        transform: scale(1);
    }
}

@media (max-height: 950px) {
    #languages {
        ul {
            li {
                flex-direction: row;
                justify-content: space-between;

                .progress {
                    width: 60%;
                }
            }
        }
    }
}
</style>