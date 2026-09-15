<script setup>
</script>

<template>
    <div class="introduction flex-center-column">
        <h2>Introduction</h2>
        <div class="info flex-center">
            <div class="info-content flex-center">
                <div class="img-back">
                    <img src="../../assets/Sunny.jpg" alt="Cute Girl">
                </div>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.introduction {
    padding: 2rem;
    height: 100%;
    width: 70%;
    background-color: var(--beige);
    z-index: 1;
    
    h2 {
        font-size: 4rem;
        font-style: oblique;
        letter-spacing: 1rem;
        color: white;
        text-decoration: underline double 3px;
        text-shadow: 5px 5px var(--peach);
        text-underline-offset: 1rem;
    }
    
    .info {
        flex: 1;
        
        .info-content {
            padding: 2rem;
            gap: 3rem;
            background-color: var(--peach);
            border: 1rem double var(--beige);

            .img-back {
                padding: 0.5rem;
                flex: 0.7;
                border: 10px double white;
                
                img {
                    width: 100%;
                    aspect-ratio: 1;
                }
            }
            
            p {
                color: white;
                flex: 1;
            }
        }
    }
}
</style>