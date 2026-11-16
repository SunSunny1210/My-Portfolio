<script setup></script>

<template>
    <div class="project-conclusion flex-center-column">
        <div class="conclusion-info flex-center">
            <div class="title flex-center-column">
                <h3>Conclusion</h3>
                <p>
                    This project is my own experiment. I decided to make it only in JS, without libraries or frameworks, to be forced to learn everything on its core. That way I can have a deeper understanding of how it works and it will make it easier when learning different code. I try several ways of doing the same thing, so I can test and learn, and probably made a lot of mistakes (which I'll be fixing once I review the code). My intention is to use it as a "battlefield" to try, play and experiment doing something I'm really interested in and I would love to see outside my own work. It might not be perfect, but I'm already really proud of things I achieved, things I thought I wouldn't be able to do. I love it and will always be my little baby ✨.  
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-conclusion {
    height: 60vh;
    width: 100%;

    .conclusion-info {
        padding: 2vh;
        min-height: 0;
        height: 100%;
        background-color: var(--peach);
        border: 1rem double var(--beige);
        
        .title { 
            min-height: 0;
            height: 100%;
            justify-content: center;
            gap: 3vh;

            p {
                max-width: 100%;
                font-size: calc(0.8rem + 1vw);
                overflow-wrap: break-word;
            }
        }
    }
}
</style>