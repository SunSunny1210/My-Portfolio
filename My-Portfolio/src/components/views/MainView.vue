<script setup>
import Options from '../Options.vue';
</script>

<template>
    <div class="main-view">
        <Options/>
        <RouterView v-slot="{ Component }">
            <Transition name="bounce-in" mode="in-out">
                <component :is="Component"/>
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