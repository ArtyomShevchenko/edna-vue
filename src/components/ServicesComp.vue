<script >
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
        return {
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
};


</script>
<template>
    <section class="services">
        <div class="services__container">
            <div class="services__wrapper">
                <div class="services__content">
                    <h3 class="services__title">services</h3>
                    <div class="services__body services__body--desctop">
                        <router-link to="/services/guided-shopping" class="services__card-link">
                            <div class="services__card">
                                <img src="../assets/images/services-card-1.jpg" alt="Image" class="services__card-img">
                                <p class="serviices__card-title">
                                    Guided Shopping
                                </p>
                            </div>
                        </router-link>

                        <router-link to="/services/style-session" class="services__card-link">
                            <div class="services__card">
                                <img src="../assets/images/services-card-2.jpg" alt="Image" class="services__card-img">
                                <p class="serviices__card-title">
                                    Style Session
                                </p>
                            </div>
                        </router-link>
                        <router-link to="/services/wardrobe-edit" class="services__card-link">
                            <div class="services__card">
                                <img src="../assets/images/services-card-3.jpg" alt="Image" class="services__card-img">
                                <p class="serviices__card-title">
                                    Wardrobe Edit
                                </p>
                            </div>
                        </router-link>
                        <router-link to="/services/special-styling" class="services__card-link">
                            <div class="services__card">
                                <img src="../assets/images/services-card-4.jpg" alt="Image" class="services__card-img">
                                <p class="serviices__card-title">
                                    Special Styling
                                </p>
                            </div>
                        </router-link>
                    </div>

                    <div class="services__body services__body--mobile">
                        <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                            :pagination="{ clickable: true }">
                            <swiper-slide>
                                <router-link to="/services/guided-shopping" class="services__card-link">
                                    <div class="services__card">
                                        <img src="../assets/images/services-card-1.jpg" alt="Image"
                                            class="services__card-img">

                                        <p class="serviices__card-title">
                                            Guided Shopping
                                        </p>
                                    </div>
                                </router-link>
                            </swiper-slide>
                            <swiper-slide>
                                <router-link to="/services/style-session" class="services__card-link">
                                    <div class="services__card">
                                        <img src="../assets/images/services-card-2.jpg" alt="Image"
                                            class="services__card-img">
                                        <p class="serviices__card-title">
                                            Style Session
                                        </p>
                                    </div>
                                </router-link>
                            </swiper-slide>
                            <swiper-slide>
                                <router-link to="/services/wardrobe-edit" class="services__card-link">
                                    <div class="services__card">
                                        <img src="../assets/images/services-card-3.jpg" alt="Image"
                                            class="services__card-img">
                                        <p class="serviices__card-title">
                                            Wardrobe Edit
                                        </p>
                                    </div>
                                </router-link>
                            </swiper-slide>
                            <swiper-slide>
                                <router-link to="/services/special-styling" class="services__card-link">
                                    <div class="services__card">
                                        <img src="../assets/images/services-card-4.jpg" alt="Image"
                                            class="services__card-img">
                                        <p class="serviices__card-title">
                                            Special Styling
                                        </p>
                                    </div>
                                </router-link>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.services {}

.services__container {
    padding-top: 28px;
}

.services__wrapper {
    padding: 0 10px;
}

.services__content {}

.services__title {}

.services__body {
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-end;
}

.services__card {
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all .2s;
    transform: translate(0px, 0px);
    position: relative;
    z-index: 1;
}

.services__card-link {
    text-decoration-line: none;
    background: #fff !important;
}

.services__card__img {
    height: 276px;
    width: 197px;
}

.serviices__card-title {
    color: var(--edna-dark-brown, #210803);
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%;
    letter-spacing: 0.6px;
    text-transform: uppercase;
}

.services__body--mobile {
    display: none;
}

.swiper-pagination {
    z-index: 20;
    position: static;
    margin-top: 40px;
}

.swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    background-color: var(--edna-dark-red, #B31719);
    margin: 0 4px !important;
}

.swiper-pagination-bullet-active {
    opacity: .4;
}

@media(max-width: 870px) {
    .services__body {
        flex-wrap: wrap;
        justify-content: center;
    }

    .services__card {
        display: flex;
        align-items: center;
        min-width: 197px;
        min-height: 276px;
    }

    .services__card-img {
        min-width: 197px;
        width: 100%;
        min-height: 276px;
        object-fit: cover;
    }

    .serviices__card-title {
        align-self: flex-start;
    }
}

@media (max-width: 600px) {

    .services__container {
        padding: 40px 0;
    }

    .services__title {
        color: var(--edna-dark-red, #B31719);
        font-family: "Cormorant Garamond";
        font-size: 36px;
        font-style: normal;
        font-weight: 300;
        line-height: 38px;
        text-transform: uppercase;
    }

    .services__body--desctop {
        display: none;
    }

    .services__body--mobile {
        display: block;
    }

    .services__body {
        margin-top: 40px;
    }

    .swiper-scrollbar {
        width: 0 !important;
        max-width: 0 !important;
        height: 0 !important;
        max-height: 0 !important;
    }

    .services__card {
        display: flex;
        align-items: center;
        width: fit-content;
        margin: auto;
        min-width: 197px;
        width: 70%;
        min-height: 276px;
    }

    .services__card-img {
        min-width: 197px;
        width: 100%;
        min-height: 276px;
        object-fit: cover;
    }

    .serviices__card-title {
        align-self: flex-start;
    }
}
</style>