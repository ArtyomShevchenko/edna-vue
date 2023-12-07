<template>
    <section class="contact">
        <div class="contact__container">
            <div class="contact__wrapper">
                <div class="contact__content">
                    <div class="contact__header">
                        <h3>Contact</h3>
                        <ButtonCrossToBack />
                    </div>

                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue';
import ButtonCrossToBack from '../components/ButtonCrossToBack.vue';

</script>

<style scoped>
.contact__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media(max-width: 850px) {
    .contact__header {
        padding-inline: 16px;
    }
}
</style>