<script setup></script>

<template>
    <div class="education flex-center-column">
        <h2>Education</h2>
        <div class="education-info flex-center-column">
            <ul class="info flex-center-column">
                <li>Yiyiyiyi</li>
                <li>Yeyeyeye</li>
                <li>Yuyuyuyu</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.education {
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

    .education-info {
        width: 100%;
        flex: 1;
        
        .info {
            padding: 2rem;
            width: 100%;
            gap: 1rem;
            background-color: var(--peach);
            border: 1rem double var(--beige);
            
            li {
                padding: 1rem;
                width: 100%;
                color: var(--dark-peach);
                background-color: floralwhite;
                border: 1rem double var(--peach);
                list-style-position: inside;
            }
        }
    }
}
</style>