<script setup>
import Options from '../Options.vue';
</script>

<template>
    <div class="main-view">
        <Options/>
        <RouterView v-slot="{ Component }">
            <Transition name="" mode="out-in">
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

.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.4s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(70%);
}

.slide-in-leave-to {
  transform: translateX(100%);
}
</style>