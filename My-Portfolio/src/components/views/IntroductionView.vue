<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    open: Boolean
})

const animate = ref(false);

onMounted(() => setTimeout(() => animate.value = true, 600));
</script>

<template>
    <div :class="{ open }" class="introduction beige-main flex-center-column">
        <h2 class="beige-title">Introduction</h2>
        <div class="info flex-center">
            <div class="info-content flex-center beige-element">
                <div class="img-and-data flex-center">
                    <div :class="{ animate }" class="img-back">
                        <img src="../../assets/Sunny.jpg" alt="Cute Girl">
                    </div>
                    <div class="info-data flex-center-column">
                        <dl :class="{ animate }" class="flex-center">
                            <dt>Name:</dt>
                            <dd>Sol Valentina Montes</dd>
                        </dl>
                        <dl :class="{ animate }" class="flex-center">
                            <dt>Occupation:</dt>
                            <dd>FrontEnd Junior</dd>
                        </dl>
                    </div>
                </div>
                <p :class="{ animate }">Welcome to my portfolio! My name is Sol Valentina Montes and this is my portfolio, where I present myself a bit, talk about my personal project and share my info.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.introduction {
    .info {
        max-height: 80vh;
        flex: 1;
        
        .info-content {
            padding: 3vh 2vw;
            max-width: 90vw;
            gap: 2vh;
            overflow-y: auto;

            .img-and-data {
                gap: 1vw;
                
                .img-back {
                    height: 20vh;
                    width: fit-content;
                    border: 10px double white;
                    border-radius: 30px;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                    
                    img {
                        height: 100%;
                        aspect-ratio: 0;
                        border-radius: 20px;
                    }
                    
                    &.animate {
                        opacity: 1;
                    }
                }
    
                .info-data {
                    gap: 1rem;
    
                    dl {
                        clip-path: inset(0 100% 0 0);
                        overflow: hidden;
                        white-space: nowrap;
                        gap: 1vw;
                        transition: clip-path 0.5s ease-in-out 0.3s;
    
                        dt {
                            padding: 1vh;
                            color: var(--dark-peach);
                            background-color: var(--beige);
                            border-radius: 12px;
                        }
    
                        &.animate {
                            clip-path: inset(0 0 0 0);
                        }
                    }
                }
            }

            
            p {
                color: white;
                clip-path: inset(0 0 100% 0);
                transition: clip-path 0.5s ease-in-out 0.6s;

                &.animate {
                    clip-path: inset(0 0 0 0);
                }
            }
        }
    }
}

@media (orientation: portrait) {
    .introduction {
        justify-content: space-between;

        .info {
            .info-content {
                position: fixed;
                inset: 0;
                margin: auto;
                padding: 1rem;
                max-height: fit-content;
                max-width: 90vw;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;

                .img-and-data {
                    gap: 0;

                    @media (max-width: 450px) {
                        flex-direction: column;
                    }
    
                    .info-data {
                        margin-top: 1rem;
    
                        dl {
                            dt {
                                padding: 0.5rem;
                            }
                        }
                    }
                }

            }
        }
    }
}
@media (orientation: landscape) and (max-height: 600px) {
    .introduction {
        justify-content: space-between;

        .info {
            max-height: 70vh;

            .info-content {
                height: 100%;
            }
        }
    }
}

@media (orientation: landscape) and (max-width: 664px) {
    .introduction {
        .info {
            .info-content {
                .info-data {
                    align-items: center;
                }
            }
        }
    }
}
</style>