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
            <div class="info-content">
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
            background-color: var(--peach);
            border: 1rem double var(--beige);

            .img-back {
                margin-right: 2vw;
                padding: 0.5rem;
                width: fit-content;
                float: inline-start;
                border: 10px double white;
                opacity: 0;
                transition: opacity 0.5s ease-in-out;
                
                img {
                    width: 20vw;
                }
                &.animate {
                    opacity: 1;
                }
            }

            .info-data {
                margin-bottom: 1rem;
                align-items: flex-start;
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

@media (max-width: 700px) {
    .introduction {
        .info {
            .info-content {
                padding: 1rem;
                max-height: 80vh;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;

                .img-back {
                    margin: 0;
                    float: none;

                    img {
                        width: 30vw;
                    }
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
</style>