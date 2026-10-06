<script setup></script>

<template>
    <div class="project-objective flex-center">
        <div class="objective-info flex-center-column">
            <h3>Objective</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div class="objective-imgs">
            <div class="img-back flex-center">
                <img src="../../../assets/Controller.png" alt="">
            </div>
            <div class="img-back flex-center">
                <img src="../../../assets/Controller.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-objective {
    height: 60vh;
    
    .objective-info {
        padding: 1rem;
        height: 100%;
        gap: 2rem;
        background-color: var(--peach);
        border: 1rem double var(--beige);
    }
    
    .objective-imgs {
        height: 100%;

        .img-back {
            height: 50%;
            background-color: var(--peach);
            border: 1rem double var(--beige);

            img {
                
            }
        }
    }
}
</style>