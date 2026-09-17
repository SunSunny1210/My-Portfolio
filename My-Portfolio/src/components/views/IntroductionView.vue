<script setup>
</script>

<template>
    <div class="introduction beige-main flex-center-column">
        <h2 class="beige-title">Introduction</h2>
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