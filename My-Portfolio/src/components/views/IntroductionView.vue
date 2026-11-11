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
            <div class="info-content flex-center-column">
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
                <p :class="{ animate }">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.introduction {
    .info {
        flex: 1;
        
        .info-content {
            padding: 3vh 2vw;
            max-height: 80vh;
            gap: 2vh;
            background-color: var(--peach);
            border: 1rem double var(--beige);
            overflow-y: auto;

            .img-and-data {
                gap: 2vw;
                
                .img-back {
                    padding: 0.5rem;
                    width: fit-content;
                    border: 10px double white;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                    
                    img {
                        height: 20vh;
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
                            padding: 1vw;
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
                padding: 1rem;
                max-height: 80vh;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;

                .img-and-data {
                    @media (max-width: 420px) {
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