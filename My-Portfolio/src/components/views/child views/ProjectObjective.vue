<script setup></script>

<template>
    <div class="project-objective flex-center">
        <div class="objective-info flex-center-column">
            <h3>Objective</h3>
            <p>
                The main objectives are: Home View, Journal (wiki) and Task Manager.
                The whole page is inspired in the game's visuals and aesthetics. I tried replicating some things, like the loading screen and the journal visuals and functionality, so it gives kind of the same feeling of playing the game. The HomePage will be just be the main page, the first thing when entering, which will have two states: when logged in and not. If you're not logged in, it will show the default home page, where you can navigate freely through different options and see some suggestions. If you're logged in, it will display your current process on your garden or different gardens, showing how many piñatas you have, your current achievements, etc. The journal will be the wiki, showing all the info the game's journal shows and other extra info I might add, like achievements or tips. The task manager will have different options to have several saves, choose your objectives, check your progress and everything you may need for your own organization.
            </p>
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
    max-width: 90vw;
    
    .objective-info {
        padding: 1rem;
        min-height: 0;
        height: 100%;
        gap: 3vh;
        background-color: var(--peach);
        border: 1rem double var(--beige);
    }
    
    .objective-imgs {
        height: fit-content;
        max-width: 50%;

        .img-back {
            height: 50%;
            background-color: var(--peach);
            border: 1rem double var(--beige);

            img {
                height: 20vh;
            }
        }
    }
}
</style>