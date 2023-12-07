<template>
    <section class="about">
        <div class="about__container">
            <div class="about__wrapper">
                <div class="about__content">
                    <div class="about__header">
                        <h3 v-if="langStore.lang === 'en'">about</h3>
                        <h3 v-if="langStore.lang === 'ua'">Про нас</h3>
                        <ButtonCrossToBack />
                    </div>
                    <AboutComp />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ButtonCrossToBack from '@/components/ButtonCrossToBack.vue';
import AboutComp from '../components/AboutComp.vue';

import { useLangStore } from '@/store/lang';
const langStore = useLangStore()

</script>

<style scoped>
.about__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media(max-width: 850px) {
    .about__header {
        padding-inline: 16px;
    }
}
</style>