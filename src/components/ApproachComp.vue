<template>
    <section class="approach">
        <div class="approach__container">
            <div class="approach__wrapper">
                <swiper class="swiper" :navigation="{
                    prevEl: prev,
                    nextEl: next,
                }" :modules="modules" :slides-per-view="1" :space-between="0" :loop="false">
                    <swiper-slide>
                        <div class="approach_content">
                            <div class="approach_body">
                                <h3 class="subtitle">
                                    MY APPROACH
                                </h3>
                                <h2 class="approach_title">
                                    I invest TIme to know the woman in front of me.
                                </h2>

                                <p class="approach_text">
                                    I am excited to hear about your story and life experiences that made you who you
                                    are.
                                    Your personality is the foundaHon of a unique style & I’m here to explore it.
                                </p>
                            </div>
                            <div class="approach_img-contain">
                                <img class="approach_img" src="../assets/images/img5.jpg" alt="Image">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="approach_content">
                            <div class="approach_body">
                                <h3 class="subtitle">
                                    MY APPROACH
                                </h3>
                                <h2 class="approach_title">
                                    Your comfort is a priority.
                                </h2>
                                <p class="approach_text">
                                    I mind the relevance of a look to your social and personal lifestyle. We don’t
                                    pretend to becomfortable, we live for it.
                                </p>
                            </div>
                            <div class="approach_img-contain">
                                <img class="approach_img" src="../assets/images/img6.jpg" alt="Image">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="approach_content">
                            <div class="approach_body">
                                <h3 class="subtitle">
                                    MY APPROACH
                                </h3>
                                <h2 class="approach_title">
                                    Strive for a sustainable & mindful wardrobe.
                                </h2>
                                <p class="approach_text">
                                    We shop strategically and edit a wardrobe with care – keep what’s dear, yet restyle
                                    it to feel modern & serve your current sense of self.</p>
                            </div>
                            <div class="approach_img-contain">
                                <img class="approach_img" src="../assets/images/img7.jpg" alt="Image">
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
</template>

<script>
import { ref } from "vue"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const prev = ref(null);
        const next = ref(null);
        return {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            prev,
            next,
        };
    },
};
</script>

<style scoped>
.approach__wrapper {
    overflow: hidden;
}

.approach__container {
    /*padding: 80px 80px;*/
}

.approach__wrapper {}

.approach_content {
    display: flex;
    gap: 80px;
}

.approach_body {
    margin: 80px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content;
    gap: 40px;
    place-content: space-between;
    position: relative;
}

.subtitle {}


.approach_title {
    grid-column: span 2;
    margin-right: 20px;
}


.approach_text {
    max-width: 433px;
}


.approach_img-contain {
    height: 686px;
    width: 100%;
    max-width: 456px;
    flex: 1 1 auto;
}

.approach_img {
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

    .approach_content {
        display: flex;
        flex-direction: column-reverse;
        gap: 80px;
        padding: 0 0 40px 0;
        position: relative;
    }

    .approach_img-contain {
        position: absolute;
        width: 50%;
        height: 240px;
        right: 0;
        top: 40px;
    }

    .approach_body {
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
