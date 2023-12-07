<template>
    <section class="enough-desktop" v-if="langStore.lang === 'en'">
        <div class="enough__container">
            <div class="enough__wrapper">
                <div class="enough-content">
                    <div class="enough-body">
                        <h2 class="enough-title">You are always enough.</h2>
                        <p class="enough-text">Every part of a woman, her every role is equally important and worthy to be
                            seen.
                            Not clothes
                            but you are
                            the starting point of a style to remember. Let’s manifest that.</p>
                        <img class="enough-img" src="../assets/images/img3.jpg" alt="Bg">
                    </div>
                    <div class="enough-img-contain">
                        <img src="../assets/images/img4.jpg" alt="Hand">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="enough-mobile" v-if="langStore.lang === 'en'">
        <div class="enough__container">
            <div class="enough__wrapper">
                <div class="enough-content">
                    <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                        :pagination="{ clickable: true }" :scrollbar="{ draggable: true, enabled: false }">
                        <swiper-slide>
                            <div class="enough-body">
                                <h2 class="enough-title">You are always enough.</h2>
                                <p class="enough-text">Every part of a woman, her every role is equally important and worthy
                                    to
                                    be seen. Not clothes
                                    but you
                                    are
                                    the starting point of a style to remember. Let’s manifest that.</p>
                                <img class="enough-img" src="../assets/images/img3.jpg" alt="Bg">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="enough-body">
                                <h2 class="enough-title">#2 You are always enough.</h2>
                                <p class="enough-text">Every part of a woman, her every role is equally important and worthy
                                    to
                                    be seen. Not clothes
                                    but you
                                    are
                                    the starting point of a style to remember. Let’s manifest that.</p>
                                <img class="enough-img" src="../assets/images/img4.jpg" alt="Bg">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="enough-body">
                                <h2 class="enough-title">#3 You are always enough</h2>
                                <p class="enough-text">Every part of a woman, her every role is equally important and worthy
                                    to
                                    be seen. Not clothes
                                    but you
                                    are
                                    the starting point of a style to remember. Let’s manifest that.</p>
                                <img class="enough-img" src="../assets/images/img3.jpg" alt="Bg">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="enough-body">
                                <h2 class="enough-title">#4 You are always enough.</h2>
                                <p class="enough-text">Every part of a woman, her every role is equally important and worthy
                                    to
                                    be seen. Not clothes
                                    but you
                                    are
                                    the starting point of a style to remember. Let’s manifest that.</p>
                                <img class="enough-img" src="../assets/images/img4.jpg" alt="Bg">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>

    <section class="enough-desktop" v-if="langStore.lang === 'ua'">
        <div class="enough__container">
            <div class="enough__wrapper">
                <div class="enough-content">
                    <div class="enough-body">
                        <h2 class="enough-title">Вам завжди достатньо</h2>
                        <p class="enough-text">Кожна частинка жінки, кожна її роль однаково важлива і гідна
                            до
                            бути побаченим. Не одяг
                            але ти
                            є
                            відправна точка стилю, який слід запам’ятати. Давайте проявимо це...</p>
                        <img class="enough-img" src="../assets/images/img3.jpg" alt="Bg">
                    </div>
                    <div class="enough-img-contain">
                        <img src="../assets/images/img4.jpg" alt="Hand">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="enough-mobile" v-if="langStore.lang === 'ua'">
        <div class="enough__container">
            <div class="enough__wrapper">
                <div class="enough-content">
                    <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                        :pagination="{ clickable: true }" :scrollbar="{ draggable: true, enabled: false }">
                        <swiper-slide>
                            <div class="enough-body">
                                <h2 class="enough-title">Вам завжди достатньо.</h2>
                                <p class="enough-text">Кожна частинка жінки, кожна її роль однаково важлива і гідна
                                    до
                                    бути побаченим. Не одяг
                                    але ти
                                    є
                                    відправна точка стилю, який слід запам’ятати. Давайте проявимо це.</p>
                                <img class="enough-img" src="../assets/images/img3.jpg" alt="Bg">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="enough-body">
                                <h2 class="enough-title"># 2 Вам завжди достатньо.</h2>
                                <p class="enough-text">Кожна частинка жінки, кожна її роль однаково важлива і гідна
                                    до
                                    бути побаченим. Не одяг
                                    але ти
                                    є
                                    відправна точка стилю, який слід запам’ятати. Давайте проявимо це.</p>
                                <img class="enough-img" src="../assets/images/img4.jpg" alt="Bg">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="enough-body">
                                <h2 class="enough-title">#3 Вам завжди достатньо.</h2>
                                <p class="enough-text">Кожна частинка жінки, кожна її роль однаково важлива і гідна
                                    до
                                    бути побаченим. Не одяг
                                    але ти
                                    є
                                    відправна точка стилю, який слід запам’ятати. Давайте проявимо це.</p>
                                <img class="enough-img" src="../assets/images/img3.jpg" alt="Bg">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="enough-body">
                                <h2 class="enough-title">#4 Вам завжди достатньо.</h2>
                                <p class="enough-text">Кожна частинка жінки, кожна її роль однаково важлива і гідна
                                    до
                                    бути побаченим. Не одяг
                                    але ти
                                    є
                                    відправна точка стилю, який слід запам’ятати. Давайте проявимо це.</p>
                                <img class="enough-img" src="../assets/images/img4.jpg" alt="Bg">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const modules = [Navigation, Pagination, Scrollbar, A11y]

import { useLangStore } from "@/store/lang"
const langStore = useLangStore()
</script>

<style scoped>
.enough {
    color: var(--edna-light-beige, #F6F5F1)
}

.enough-content {
    display: flex;
    align-items: center;
    position: relative;
    gap: 16px;
}

.enough-img-contain {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.enough-img-contain>img {
    max-height: 424px;
    max-width: 310px;
    object-fit: cover;
    object-position: center;
}

.enough-body {
    max-width: 456px;
    height: 686px;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    position: relative;
}

.enough-title {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
}

.enough-title,
h2,
.enough-text,
p {
    color: var(--edna-light-beige, #F6F5F1)
}

.enough-title,
h2 {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
}

.enough-body>img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}

.enough-mobile {
    display: none;
}

@media (max-width: 950px) {
    .enough-desktop {
        display: none;
    }

    .enough-mobile {
        display: block;
    }

    .enough-content {
        width: 100%;
        height: 640px;
    }

    .enough__container {}

    .enough__wrapper {}

    .enough-body {
        width: 100%;
        max-width: 100%;
    }

    .enough-title {}

    .enough-text {}

    .enough-img {}
}

@media (max-width: 950px) {
    .enough-desktop {
        display: none;
    }

    .enough-mobile {
        display: block;
    }

    .enough__container {
        padding: 0;
    }
}
</style>
