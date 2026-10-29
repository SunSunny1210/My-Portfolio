<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue';

const offsetY = ref(0);
const show = ref(false);

let dragging = false;
let startY = 0;
let startOffset = 0;

function startDrag(e) {
    dragging = true;
    startY = e.clientY;
    startOffset = offsetY.value;

    e.currentTarget.setPointerCapture(e.pointerId);

    window.addEventListener('pointermove', onDrag);
    window.addEventListener('pointercancel', stopDrag);
    window.addEventListener('pointerup', stopDrag);
}

function onDrag(e) {
    if (!dragging) return;

    const difference = e.clientY - startY;

    offsetY.value = Math.max(
        -window.innerHeight,
        Math.min(0, startOffset + difference)
    );
}

function stopDrag() {
    dragging = false;

    if (offsetY.value < -window.innerHeight / 2) offsetY.value = -window.innerHeight * 2;
    else offsetY.value = 0;
    
    window.removeEventListener('pointermove', onDrag);
    window.removeEventListener('pointercancel', stopDrag);
    window.removeEventListener('pointerup', stopDrag);
}

onBeforeUnmount(stopDrag);

onMounted(() => requestAnimationFrame(() => show.value = true));
</script>

<template>
    <div class="main-title flex-center-column" :style="{ transform: `translateY(${offsetY}px)` }">
        <div :class="{ show }" class="titles flex-center-column">
            <h1>My Portfolio</h1>
            <h2>Sun's projects</h2>
        </div>
        <div :class="{ show }" class="up flex-center-column" @pointerdown="startDrag">
            <span>^</span>
            <span>Drag up to see more</span>
        </div>
    </div>
</template>

<style scoped>
.main-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    gap: 2rem;
    background-color: white;
    transition: transform 0.3s ease;
    touch-action: none;
    user-select: none;
    will-change: transform;
    z-index: 10;
    
    .titles {
        margin: 2rem;
        padding: 2rem;
        color: beige;
        background-color: var(--main-pink);
        border: 1.8rem solid white;
        box-shadow: 0 0 0 2rem var(--main-pink);
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        
            &.show {
                opacity: 1;
            }
    }

    .up {
        height: 10vh;
        width: 100%;
        opacity: 0;
        transition: opacity 0.5s linear 2s;
        
        span {
            color: var(--main-pink);
        }

        &.show {
            opacity: 1;
        }
    }
}

@media (max-width: 450px) {
    .main-title {
        .titles {
            margin: 1rem;
            padding: 1rem;
            border: 1rem solid white;
            box-shadow: 0 0 0 1rem var(--main-pink);
        }
    }
}
</style>