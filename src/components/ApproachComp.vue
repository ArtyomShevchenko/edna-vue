<template>
    <section class="approach" v-if="langStore.lang === 'en'">
        <div class="approach__container">
            <div class="approach__wrapper">
                <swiper class="swiper" :navigation="{
                    prevEl: prev,
                    nextEl: next,
                }
                    " :modules="modules" :slides-per-view="1" :space-between="0" :loop="false">
                    <swiper-slide>
                        <div class="approach__content">
                            <div class="approach__body">
                                <h3 class="subtitle approach__subtitle"
                                    :class="{ 'approach__subtitle--hidden ': hiddenTitle }">
                                    MY APPROACH
                                </h3>
                                <h2 class="approach__title">
                                    I invest TIme to know the woman in front of me.
                                </h2>

                                <p class="approach__text">
                                    I am excited to hear about your story and life experiences that made you who you
                                    are.
                                    Your personality is the foundaHon of a unique style & I’m here to explore it.
                                </p>
                            </div>
                            <div class="approach__image-container">
                                <img class="approach__image" src="../assets/images/img5.jpg" alt="Image">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="approach__content">
                            <div class="approach__body">
                                <h3 class="subtitle approach__subtitle"
                                    :class="{ 'approach__subtitle--hidden ': hiddenTitle }">
                                    MY APPROACH
                                </h3>
                                <h2 class="approach__title">
                                    Your comfort is a priority.
                                </h2>
                                <p class="approach__text">
                                    I mind the relevance of a look to your social and personal lifestyle. We don’t
                                    pretend to becomfortable, we live for it.
                                </p>
                            </div>
                            <div class="approach__image-container">
                                <img class="approach__image" src="../assets/images/img6.jpg" alt="Image">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="approach__content">
                            <div class="approach__body">
                                <h3 class="subtitle approach__subtitle"
                                    :class="{ 'approach__subtitle--hidden ': hiddenTitle }">
                                    MY APPROACH
                                </h3>
                                <h2 class="approach__title">
                                    Strive for a sustainable & mindful wardrobe.
                                </h2>
                                <p class="approach__text">
                                    We shop strategically and edit a wardrobe with care – keep what’s dear, yet restyle
                                    it to feel modern & serve your current sense of self.</p>
                            </div>
                            <div class="approach__image-container">
                                <img class="approach__image" src="../assets/images/img7.jpg" alt="Image">
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="nav-swiper">
                        <div ref="prev" class="slide-prev">prev</div>
                        <div ref="next" class="slide-next">next</div>
                    </div>
                </swiper>
            </div>
        </div>
    </section>

    <section class="approach" v-if="langStore.lang === 'ua'">
        <div class="approach__container">
            <div class="approach__wrapper">
                <swiper class="swiper" :navigation="{
                    prevEl: prev,
                    nextEl: next,
                }
                    " :modules="modules" :slides-per-view="1" :space-between="0" :loop="false">
                    <swiper-slide>
                        <div class="approach__content">
                            <div class="approach__body">
                                <h3 class="subtitle approach__subtitle"
                                    :class="{ 'approach__subtitle--hidden ': hiddenTitle }">
                                    МІЙ ПІДХІД
                                </h3>
                                <h2 class="approach__title">
                                    Я витрачаю час на те, щоб знати жінку перед мною.
                                </h2>

                                <p class="approach__text">
                                    Мені приємно почути про вашу історію та життєвий досвід, які зробили вас тим, ким ви є
                                    є.
                                    Ваша особистість є основою унікального стилю, і я тут, щоб дослідити це.</p>
                            </div>
                            <div class="approach__image-container">
                                <img class="approach__image" src="../assets/images/img5.jpg" alt="Image">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="approach__content">
                            <div class="approach__body">
                                <h3 class="subtitle approach__subtitle"
                                    :class="{ 'approach__subtitle--hidden ': hiddenTitle }">
                                    МІЙ ПІДХІД
                                </h3>
                                <h2 class="approach__title">
                                    Ваш комфорт у пріоритеті.
                                </h2>
                                <p class="approach__text">
                                    Мені важлива відповідність зовнішнього вигляду вашому соціальному та особистому стилю
                                    життя. Ми цього не робимо
                                    вдавайте, що нам зручно, ми живемо для цього.
                                </p>
                            </div>
                            <div class="approach__image-container">
                                <img class="approach__image" src="../assets/images/img6.jpg" alt="Image">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="approach__content">
                            <div class="approach__body">
                                <h3 class="subtitle approach__subtitle"
                                    :class="{ 'approach__subtitle--hidden ': hiddenTitle }">
                                    МІЙ ПІДХІД
                                </h3>
                                <h2 class="approach__title">
                                    Прагніть до надійного та ретельного гардеробу.
                                </h2>
                                <p class="approach__text">
                                    Ми робимо покупки стратегічно та дбайливо редагуємо гардероб – зберігайте те, що дороге,
                                    але змінюйте стиль
                                    щоб відчувати себе сучасним і служити своєму поточному самопочуттю.</p>
                            </div>
                            <div class="approach__image-container">
                                <img class="approach__image" src="../assets/images/img7.jpg" alt="Image">
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="nav-swiper">
                        <div ref="prev" class="slide-prev">Попередя картка</div>
                        <div ref="next" class="slide-next">Наступнам картка</div>
                    </div>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"
const route = useRoute()
const hiddenTitle = ref(false)

import { useLangStore } from "@/store/lang"
const langStore = useLangStore()

onMounted(() => {
    if (route.path === "/approach") {
        hiddenTitle.value = !hiddenTitle.value
    }
})

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const modules = [Navigation, Pagination, Scrollbar, A11y]

const prev = ref(null);
const next = ref(null);
</script>

<style scoped>
.approach__subtitle--hidden {
    display: none;
}

.approach__wrapper {
    overflow: hidden;
}

.approach__container {
    /*padding: 80px 80px;*/
}

.approach__wrapper {}

.approach__content {
    display: flex;
    gap: 80px;
}

.approach__body {
    margin: 80px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content;
    gap: 40px;
    place-content: space-between;
    position: relative;
}

.subtitle {}


.approach__title {
    grid-column: span 2;
    margin-right: 20px;
}


.approach__text {
    max-width: 433px;
}


.approach__image-container {
    height: 686px;
    width: 100%;
    max-width: 456px;
    flex: 1 1 auto;
}

.approach__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.nav-swiper {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(0);
    display: flex;
    z-index: 10;
}

.slide-prev,
.slide-next {
    content: url("../assets/icons/Arrow.svg");
    padding: 10px 4px;
    cursor: pointer;
}

.nav-swiper .swiper-button-disabled {
    opacity: .3;
    cursor: auto;
}

.slide-prev {
    transform: rotate(180deg)
}

.slide-next {}

.swiper {
    width: 100%;
    max-width: 100%;
}

@media (max-width: 756px) {
    .subtitle {
        flex: 1 1 auto;
        height: 350px
    }

    .approach__container {
        padding: 40px 16px;
    }

    .approach__content {
        display: flex;
        flex-direction: column-reverse;
        gap: 80px;
        padding: 0 0 40px 0;
        position: relative;
    }

    .approach__image-container {
        position: absolute;
        width: 50%;
        height: 240px;
        right: 0;
        top: 40px;
    }

    .approach__body {
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 24px;
        position: static;
    }

    .nav-swiper {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        z-index: 10;
    }
}
</style>
