<script setup></script>

<template>
    <div class="project-conclusion flex-center-column">
        <div class="conclusion-info flex-center">
            <div class="title-and-text flex-center-column">
                <h3>Conclusion</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div class="img-back flex-center">
                <img src="../../../assets/Elephanilla.png" alt="Horstachio">
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-conclusion {
    height: 60vh;
    width: 100%;

    .conclusion-info {
        padding: 2rem;
        min-height: 0;
        justify-content: space-around;
        background-color: var(--peach);
        border: 1rem double var(--beige);
    
        .img-back {    
            height: 100%;
            
            img {
                height: 80%;
                aspect-ratio: 1;
            }
        }
        
        .title-and-text { 
            min-height: 0;
            height: 100%;
            gap: 2vh;
    
            p {
                max-width: 100%;
                overflow-wrap: break-word;
            }
        }
    }
}
</style>