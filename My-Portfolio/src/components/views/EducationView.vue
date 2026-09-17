<script setup></script>

<template>
    <div class="education beige-main flex-center-column">
        <h2 class="beige-title">Education</h2>
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