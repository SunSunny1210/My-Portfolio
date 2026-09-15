<script setup></script>

<template>
    <div class="about-me flex-center-column">
        <h2>About Me</h2>
        <div class="about-info flex-center">
            <div class="info">
                <p>
                    <img class="controller" src="../../assets/Controller.png" alt="Pink Controller">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    <img class="laptop" src="../../assets/Laptop.png" alt="Pink Laptop">
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-me {
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
    
    .about-info {
        flex: 1;
        
        .info {
            padding: 2rem;
            background-color: var(--dark-pink);
            border: 1rem double var(--soft-pink);

            img {
                width: 9vw;
                aspect-ratio: 1;
                vertical-align: middle;

                &.controller {
                    rotate: -15deg;
                }

                &.laptop {
                    rotate: 15deg;
                }
            }
    
            p {
                color: white;
                text-align: center;
            }
        }
    }
}
</style>