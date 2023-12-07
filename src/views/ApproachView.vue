<template>
    <section class="approach">
        <div class="approach__container">
            <div class="approach__wrapper">
                <div class="approach__content">
                    <div class="approach__header">
                        <h3>approach</h3>
                        <ButtonCrossToBack />
                    </div>

                    <div class="approach__body">
                        <ApproachComp />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ButtonCrossToBack from '@/components/ButtonCrossToBack.vue';
import ApproachComp from "@/components/ApproachComp.vue"
</script>

<style scoped>
.approach__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media(max-width: 850px) {
    .approach__header {
        padding-inline: 16px;
    }
}
</style>