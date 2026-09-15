<script setup>
</script>

<template>
    <div class="main-title flex-center-column">
        <div class="titles flex-center-column">
            <h1>My Portfolio</h1>
            <h2>Sun's projects</h2>
        </div>
        <div class="up flex-center-column">
            <span>^</span>
            <p>Drag up to see more</p>
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
    display: none;
    gap: 2rem;
    
    .titles {
        margin: 2rem;
        padding: 2rem;
        color: beige;
        background-color: var(--main-pink);
        border: 1.8rem solid white;
        box-shadow: 0 0 0 2rem var(--main-pink);
    }

    .up {
        height: 10vh;
        width: 100%;
        color: var(--main-pink);

        span, p {
            font-size: 2rem;
        }
    }
}
</style>