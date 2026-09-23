<script setup>
import { onMounted, ref } from 'vue';

const animate = ref(false);

onMounted(() => setTimeout(() => animate.value = true, 600))
</script>

<template>
    <div class="education beige-main flex-center-column">
        <h2 class="beige-title">Education</h2>
        <div class="education-info flex-center-column">
            <ul class="info flex-center-column">
                <div :class="{ animate }" class="li-back first">
                    <li :class="{ animate }" class="first">ESO: Institut Pedraforca, 2013-2017</li>
                </div>
                <div :class="{ animate }" class="li-back second" >
                    <li :class="{ animate }" class="second">Bachiller: Institut Poeta Maragall, 2017-2019</li>
                </div>
                <div :class="{ animate }" class="li-back third">
                    <li :class="{ animate }" class="third">FrontEnd: IronHack, 2024-2025</li>
                </div>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.education {
    .education-info {
        width: 100%;
        flex: 1;
        
        .info {
            padding: 2rem;
            width: 100%;
            gap: 1rem;
            background-color: var(--peach);
            border: 1rem double var(--beige);

            .li-back {
                width: 100%;
                transform: scale(0);
                transition: transform 0.5s ease-in-out;
                background-color: floralwhite;
                border: 1rem double var(--peach);

                li {
                    padding: 1rem;
                    width: 100%;
                    color: var(--dark-peach);
                    list-style-position: inside;
                    clip-path: inset(0 100% 0 0);
                    transition: clip-path 1s ease-in-out;
    
                    &.animate {
                        clip-path: inset(0 0 0 0);
                    }

                    &.first {
                        transition-delay: 1s;
                    }

                    &.second {
                        transition-delay: 1.3s;
                    }

                    &.third {
                        transition-delay: 1.6s;
                    }
                }

                &.animate {
                    transform: scale(1);
                }

                &.second {
                    transition-delay: 0.3s;
                }

                &.third {
                    transition-delay: 0.6s;
                }
            }
        }
    }
}
</style>