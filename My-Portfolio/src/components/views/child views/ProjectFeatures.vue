<script setup></script>

<template>
    <div class="project-features flex-center-column">
        <h3 class="beige-element">Features</h3>
        <div class="features flex-center">
            <ul class="first-half flex-center-column beige-element">
                <li>Complete wiki.</li>
                <li>Interactive task manager.</li>
                <li>Different farms management.</li>
            </ul>
            <div class="img-middle flex-center">
                <img src="../../../assets/Galagoogoo.png" alt="Galagoogoo">
            </div>
            <ul class="second-half flex-center-column beige-element">
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
    gap: 1vh;

    h3 {
        padding: 1vh 2vw 2vh;
    }
    
    .features {
        min-height: 0;

        ul {
            min-height: 0;
            height: 100%;

            li {
                text-align: start;

            }
        }
        
        .first-half, .second-half {
            padding: 2vh 2vw;
            height: 100%;
            align-items: flex-start;
            gap: 1vh;
            list-style-position: inside;
            color: white;
            flex: 1;
        }

        .img-middle {
            padding: 1rem;
            height: 100%;
            width: 50%;
            flex: 1;

            img {
                aspect-ratio: 0;
                min-height: 0;
                width: 100%;
            }
        }
    }
}

@media (orientation: portrait) {
    .project-features {
        width: 100%;
        
        .features {
            position: relative;
            padding-right: 50%;
            height: 100%;
            width: 100%;
            flex-direction: column;

            ul {
                width: 100%;

                li {
                    font-size: calc(0.5rem + 0.5vh + 0.5vw);
                }

                @media (min-width: 400px) and (min-height: 670px) {
                    li {
                        font-size: calc(0.5rem + 0.8vh + 1vw);
                    }
                }
            }

            .first-half {
                border-bottom: 0;
                border-radius: 30px 30px 0 0;
            }

            .second-half {
                padding-top: 0;
                border-top: 0;
                border-radius: 0 0 30px 30px;
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

@media (orientation: landscape) and (max-height: 460px) {
    .project-features {
        position: relative;

        h3 {
            position: absolute;
            top: 0;
            left: 50%;
            font-size: 1rem;
            
            @media (min-width: 581px) {
                translate: -50%;
            }
        }

        .features {
            .img-middle {
                align-items: flex-end;
    
                img {
                    height: 80%;
                }
            }
        }

    }
}
</style>