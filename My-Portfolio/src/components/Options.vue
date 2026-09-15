<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const routes = router.getRoutes();
const shrink = ref(false);
</script>

<template>
    <div class="options-view flex-center-column" :class="{ shrink: shrink }">
        <div class="options flex-center-column">
            <RouterLink @click="shrink = true" class="option flex-center" v-for="route in routes" :to="route.path" :key="route.name">{{ route.name }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.options-view {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: white;
    transition: width 0.4s ease-in-out, translate 0.4s ease-in-out, left 0.4s ease-in-out;
    z-index: 2;

    .options {
        padding: 3rem;
        width: 40%;
        gap: 4rem;
        transition: width 0.4s ease-in-out;
    
        .option {
            padding: 1rem;
            width: 100%;
            font-size: 2rem;
            text-decoration: none;
            color: white;
            background-color: var(--main-pink);
            border: 5px solid white;
            box-shadow: 0 0 0 10px var(--main-pink);
            
            &:hover {
                background-color: var(--dark-pink);
                box-shadow: 0 0 0 10px var(--dark-pink);
            }
        }
    }
    
    &.shrink {
        width: 30%;

        .options {
            width: 100%;
        }
    }
}
</style>