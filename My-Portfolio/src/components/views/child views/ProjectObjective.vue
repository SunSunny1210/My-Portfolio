<script setup></script>

<template>
    <div class="project-objective flex-center">
        <div class="objective-info flex-center-column beige-element">
            <h3>Objective</h3>
            <div class="text flex-center-column">
                <div class="categories flex-center">
                    <span class="category">Home View</span>
                    <span class="category">Journal (wiki)</span>
                    <span class="category">Task Manager</span>
                </div>
                <p>The <span>HomePage</span> will be just be the main page, the first thing when entering, which will have two states: when logged in and not. If you're not logged in, it will show the default home page, where you can navigate freely through different options and see some suggestions. If you're logged in, it will display your current process on your garden or different gardens, showing how many piñatas you have, your current achievements, etc.
                    <br> The <span>Journal</span> will be the wiki, showing all the info the game's journal shows and other extra info I might add, like achievements or tips.
                    <br> The <span>Task Manager</span> will have different options to have several saves, choose your objectives, check your progress and everything you may need for your own organization.
                    <br> The whole page is inspired in the game's visuals and aesthetics. I tried replicating some things, like the loading screen and the journal visuals and functionality, so it gives kind of the same feeling of playing the game.
                </p>
            </div> 
        </div>
        <div class="objective-imgs flex-center-column">
            <div class="img-back flex-center beige-element">
                <img src="../../../assets/Controller.png" alt="">
            </div>
            <div class="img-back flex-center beige-element">
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

        .text {
            gap: 1vh;

            span {
                font-weight: bold;
            }
            
            .categories {
                gap: 1vw;

                span {
                    padding: 1vh 1vw;
                    border: 3px solid white;
                    border-radius: 20px;
                }
            }
        }
    }
    
    .objective-imgs {
        height: fit-content;
        max-width: 50%;

        .img-back {
            height: 50%;

            img {
                height: 20vh;
            }
        }
    }
}

@media (orientation: portrait) {
    .project-objective {
        flex-direction: column;
        
        .objective-imgs {
            max-width: 100%;
            width: 100%;
            flex-direction: row;
            
            .img-back {
                height: 100%;
                width: 100%;

                img {
                    height: 15vh;
                }
            }
        }
    }
}
</style>