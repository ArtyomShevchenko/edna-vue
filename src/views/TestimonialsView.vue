<template>
    <section class="testimonials">
        <div class="testimonials__container">
            <div class="testimonials__wrapper">
                <div class="testimonials__content">
                    <div class="testimonials__header">
                        <h3>Testimonials</h3>
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
.testimonials__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media(max-width: 850px) {
    .testimonials__header {
        padding-inline: 16px;
    }
}
</style>