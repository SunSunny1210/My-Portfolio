<script setup></script>

<template>
    <div class="project-features flex-center-column">
        <h3>Features</h3>
        <div class="features flex-center">
            <ul class="first-half flex-center-column">
                <li>Complete wiki.</li>
                <li>Interactive task manager.</li>
                <li>Different farms management.</li>
            </ul>
            <div class="img-middle">
                <img src="../../../assets/Galagoogoo.png" alt="Galagoogoo">
            </div>
            <ul class="second-half flex-center-column">
                <li>Task planning tool.</li>
                <li>Achievement tracking.</li>
                <li>Customized suggestions.</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.project-features {
    height: 60vh;
    gap: 1rem;

    h3 {
        padding: 0.5rem 1rem 1rem;
        background-color: var(--peach);
        border: 1rem double var(--beige);
    }
    
    .features {
        min-height: 0;

        ul {
            min-height: 0;
        }
        
        .first-half, .second-half {
            padding: 1rem;
            height: 100%;
            align-items: flex-start;
            gap: 1rem;
            list-style-position: inside;
            color: white;
            background-color: var(--peach);
            border: 1rem double var(--beige);
            flex: 1;
        }

        .img-middle {
            padding: 1rem;
            height: 100%;
            flex: 1;

            img {
                aspect-ratio: 0;
                min-height: 0;
                height: 90%;
                width: 100%;
            }
        }
    }
}
</style>