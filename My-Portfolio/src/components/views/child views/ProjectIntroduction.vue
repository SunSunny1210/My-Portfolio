<script setup></script>

<template>
    <div class="project-introduction flex-center-column">
        <div class="intro-info flex-center">
            <div class="img-back flex-center">
                <img src="../../../assets/Horstachio.png" alt="Horstachio">
            </div>
            <div class="title-and-text flex-center-column">
                <h3>Introduction</h3>
                <p>I've been working in my own personal project called <span>✨VIVA PIÑATA TASK PLANNER✨</span>. This project started on my last deliverable project, where the teacher ask us to make a task manager. Like I said, I love videogames, and one of my favorite childhood games is Viva Piñata. It's a game about taking care of a garden where the residents are piñatas. It's a forgotten game and there's little to no information about it. Even the wiki has missing entries. So I wanted to mix the task managing, like apps for Animal Crossing or Stardew Valley, with the most complete wiki about the game. It's a really amateur project, which I compromised myself to do it fully on pure JS to learn as much as I can, but I'm really proud of it and of everything I'm achieving and learning.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-introduction {
    height: 60vh;

    .intro-info {
        padding: 1rem;
        height: 100%;
        gap: 2vw;
        justify-content: space-around;
        background-color: var(--peach);
        border: 1rem double var(--beige);

        .img-back {
            height: 90%;
            
            img {
                height: 100%;
                aspect-ratio: 1 / 2.5;
            }
        }
        
        .title-and-text { 
            height: 100%;
            gap: 4vh;

            span {
                font-weight: bold;
            }
        }
    }
}
</style>