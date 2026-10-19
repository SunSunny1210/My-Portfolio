<script setup>
import { ref } from 'vue';
import Options from '../Options.vue';

const isDone = ref(false);
const open = ref(false);
</script>

<template>
    <div class="main-view">
        <Options :open="open" @is-done="(v) => isDone = v"/>
        <RouterView v-slot="{ Component }">
            <div @click="open = true" class="menu flex-center-column">
                <hr/>
                <hr/>
                <hr/>
            </div>
            <Transition :name="isDone ? 'bounce-in' : ''" mode="in-out">
                <component :open="open" :is="Component"/>
            </Transition>
        </RouterView>
    </div>
</template> 

<style scoped>
.main-view {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-self: center;

    .menu {
        padding: 1rem;
        position: absolute;
        top: 2%;
        left: 2%;
        width: 10vw;
        gap: 1vh;
        aspect-ratio: 1;
        z-index: 9;
        
        hr {
            height: 7px;
            width: 100%;
            background-color: white;
            border: none;
        }
    }
}

.bounce-in-enter-active {
    position: absolute;
    animation: bounce-in 0.7s alternate;
}

.bounce-in-leave-active {
    position: absolute;
}

@keyframes bounce-in {
    0% {
        transform: translateY(-100%);
    }
    50% {
        transform: translateY(0%);
    }
    75% {
        transform: translateY(-3%);
    }
    100% {
        transform: translateY(0%);
    }
}
</style>