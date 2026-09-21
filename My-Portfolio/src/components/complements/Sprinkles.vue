<script setup></script>

<template>
    <div class="sprinkles">
        <img src="../../assets/Sprinkles1.png" alt="Sprinkles">
    </div>
</template>

<style scoped>
.sprinkles {
    position: absolute;
    top: 0;
    left: 0;
    inset: 0;
    z-index: 1;
    animation: float 3s ease-in-out infinite;

    img {
        height: 100%;
    }
}

@keyframes float {
    0%, 100% {
        scale: 1 1;
    }
    25% {
        rotate: 2deg;
    }
    50% {
        scale: 1 0.95;
    }
    75% {
        rotate: -2deg;
    }
}
</style>