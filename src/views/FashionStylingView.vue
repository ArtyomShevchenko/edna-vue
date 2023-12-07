<template>
    <section class="fashion">
        <div class="fashion__container">
            <div class="fashion__wrapper">
                <div class="fashion__content">
                    <div class="fashion__header">
                        <h3>Fashion Styling</h3>
                        <ButtonCrossToBack />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ButtonCrossToBack from '@/components/ButtonCrossToBack.vue';

</script>

<style scoped>
.fashion__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media(max-width: 850px) {
    .fashion__header {
        padding-inline: 16px;
    }
}
</style>