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
            <div class="img-middle flex-center">
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

            li {
                text-align: start;

            }
        }
        
        .first-half, .second-half {
            padding: 2vh;
            height: 100%;
            align-items: flex-start;
            gap: 1rem;
            list-style-position: inside;
            color: white;
            background-color: var(--peach);
            border: 1rem double var(--beige);
        }

        .img-middle {
            padding: 1rem;
            height: 100%;

            img {
                aspect-ratio: 0;
                min-height: 0;
                height: 90%;
                width: 100%;
            }
        }
    }
}

@media (max-width: 450px) {
    .project-features {
        width: 100%;
        
        .features {
            position: relative;
            padding-right: 50%;
            height: 100%;
            flex-direction: column;

            ul {
                width: 100%;

                li {
                    font-size: calc(0.3rem + 1vh);
                }
            }

            .first-half {
                border-bottom: 0;
            }

            .second-half {
                padding-top: 0;
                border-top: 0;
            }
        }

        .img-middle {
            position: absolute;
            top: 0;
            left: 50%;
            aspect-ratio: 1 / 2;
        }
    }
}
</style>