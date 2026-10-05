<script setup></script>

<template>
    <div class="project-introduction flex-center-column">
        <div class="intro-info flex-center">
            <div class="img-back flex-center">
                <img src="../../../assets/Horstachio.png" alt="Horstachio">
            </div>
            <div class="title-and-text flex-center-column">
                <h3>Introduction</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .intro-info {
        padding: 1rem;
        height: 60vh;
        justify-content: space-around;
        background-color: var(--peach);
        border: 1rem double var(--beige);

        .img-back {    
            padding: 1rem;
            height: 100%;
            
            img {
                height: 100%;
                aspect-ratio: 0.5;
            }
        }
        
        .title-and-text { 
            height: 100%;
            gap: 2rem;
            
            h3 {
                text-shadow: 5px 5px var(--dark-peach);
            }

            p {
                font-size: clamp(1rem, 2vw, 2rem);
            }
        }
    }
</style>