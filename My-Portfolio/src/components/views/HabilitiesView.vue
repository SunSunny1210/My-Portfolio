<script setup></script>

<template>
    <div class="habilities flex-center-column">
        <h2>Habilities</h2>
        <div class="habilities-info flex-center">
            <div class="habilities-grid">
                <div class="hability-cell flex-center-column" id="skills">
                    <h3>Skills</h3>
                    <ul class="flex-center-column">
                        <li>Yayaya</li>
                        <li>Yayaya</li>
                        <li>Yayaya</li>
                        <li>Yayaya</li>
                        <li>Yayaya</li>
                        <li>Yayaya</li>
                    </ul>
                </div>
                <div class="hability-cell flex-center-column" id="languages">
                    <h3>Languages</h3>
                    <ul>
                        <li class="flex-center-column">
                            <label for="english">English</label>
                            <progress id="english" value="100"></progress>
                        </li>
                        <li class="flex-center-column">
                            <label for="spanish">Spanish</label>
                            <progress id="spanish" value="100"></progress>
                        </li>
                        <li class="flex-center-column">
                            <label for="catalan">Catalan</label>
                            <progress id="catalan" value="100"></progress>
                        </li>
                    </ul>
                </div>
                <div class="hability-cell flex-center-column" id="coding">
                    <h3>Coding</h3>
                    <div class="icons flex-center">
                        <img src="../../assets/HTML.png" alt="HTML 5 Icon">
                        <img src="../../assets/CSS.png" alt="CSS Icon">
                        <img src="../../assets/JS.png" alt="JS Icon">
                        <img src="../../assets/VUE.png" alt="Vue Icon">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.habilities {
    padding: 2rem;
    height: 100%;
    width: 70%;
    background-color: var(--soft-pink);
    z-index: 1;

    h2 {
        font-size: 4rem;
        font-style: oblique;
        letter-spacing: 1rem;
        color: white;
        text-decoration: underline double 3px;
        text-shadow: 5px 5px var(--main-pink);
        text-underline-offset: 1rem;
    }

    .habilities-info {
        padding-top: 3rem;
        flex: 1;

        .habilities-grid {
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto auto;
            grid-template-areas: 
            "skills languages"
            "skills languages"
            "skills coding";

            .hability-cell {
                padding: 1rem;
                background-color: var(--main-pink);
                border: 1rem double var(--soft-pink);
                gap: 2vh;

                h3 {
                    color: white;
                    text-decoration: underline solid white;
                    text-underline-offset: 0.5rem;
                    font-size: 3rem;
                }

                ul {
                    gap: 2vh;

                    li {
                        padding: 1rem;
                        color: white;
                        background-color: var(--dark-pink);
                        border: 1rem double var(--main-pink);

                        progress::-webkit-progress-value {
                            background-color: var(--peach);
                        }
                    }
                }
            }

            #skills {
                justify-content: space-between;
                grid-area: skills;
                list-style-position: inside;
            }
            
            #languages {
                grid-area: languages;
                list-style-position: inside;
            }

            #coding {
                grid-area: coding;

                .icons {
                    gap: 1rem;

                    img {
                        width: 5vw;
                        aspect-ratio: 1;
                    }
                }
            }
        }
    }
}
</style>