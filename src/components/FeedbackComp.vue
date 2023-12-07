<template>
    <section class="feedback feedback--desctop">
        <div class="feedback__container">
            <div class="feedback__wrapper">
                <div class="feedback__content">
                    <div class="feedback__body">
                        <div class="feedback__user-card">
                            <img class="user-card__icon" src="../assets/images/user-1.jpg" alt="User ">
                            <h4 class="user-card__name">Nadiya Maltseva</h4>
                            <p class="user-card__subtitle">Maltseva Consulting</p>
                            <p class="user-card__text">During a stage in my life, I needed to
                                transition from
                                my corporate attire during work
                                hours and floral dresses during leisure</p>
                        </div>

                        <div class="feedback__user-card">
                            <img class="user-card__icon" src="../assets/images/user-2.jpg" alt="User ">
                            <h4 class="user-card__name">Лемара Ахбаева</h4>
                            <p class="user-card__subtitle">Make Up Artist & Beauty Expert</p>
                            <p class="user-card__text">Эдна, я выбрала работу с тобой, потому что ты
                                внимательна к деталям, очень хорошо
                                чувствуешь</p>
                        </div>

                        <div class="feedback__user-card">
                            <img class="user-card__icon" src="../assets/images/user-3.jpg" alt="User ">
                            <h4 class="user-card__name">Дарья Трофимова</h4>
                            <p class="user-card__subtitle">Психотерапевт</p>
                            <p class="user-card__text">Хочу відзначити в тобі здатність показати та
                                пояснити,
                                що одяг -не просто функціональна тканина</p>
                        </div>

                        <div class="feedback__user-card">
                            <img class="user-card__icon" src="../assets/images/user-5.jpg" alt="User ">
                            <h4 class="user-card__name">Nadiya Maltseva </h4>
                            <p class="user-card__subtitle">Maltseva Consulting</p>
                            <p class="user-card__text">
                                During a stage in my life, I needed to transition from my corporate attire during work hours
                                and floral dresses during leisure time, to a more versatile and easy-to-wear style. Edna
                                surprisedfeedback__ me by first wanting to understand me as a person, not just my daily
                                role. As we
                                sorted through my closet, I was apprehensive about having to let go of my favorite pieces.
                                However, Edna approached each item with reverence and asked about my personal connection and
                                association with it. In the end, we ended up donating 70% of the items and did a little
                                shopping. Edna goes beyond just putting together an outfit. She taught me to view each item
                                as an ingredient that can be used in various combinations, making them incredibly satisfying
                                and appealing, resulting in compliments from others.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="feedback feedback--mobile">
        <div class="feedback__container">
            <div class="feedback__wrapper">
                <div class="feedback__content">
                    <div class="feedback__body">
                        <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                            :pagination="{ clickable: true }">
                            <swiper-slide>
                                <div class="feedback__user-card">
                                    <img class="user-card__icon" src="../assets/images/user-1.jpg" alt="User ">
                                    <h4 class="user-card__name">Nadiya Maltseva</h4>
                                    <p class="user-card__subtitle">Maltseva Consulting</p>
                                    <p class="user-card__text">During a stage in my life, I needed to
                                        transition from
                                        my corporate attire during work
                                        hours and floral dresses during leisure</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="feedback__user-card">
                                    <img class="user-card__icon" src="../assets/images/user-2.jpg" alt="User ">
                                    <h4 class="user-card__name">Лемара Ахбаева</h4>
                                    <p class="user-card__subtitle">Make Up Artist & Beauty Expert</p>
                                    <p class="user-card__text">Эдна, я выбрала работу с тобой, потому что ты
                                        внимательна к деталям, очень хорошо
                                        чувствуешь</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="feedback__user-card">
                                    <img class="user-card__icon" src="../assets/images/user-3.jpg" alt="User ">
                                    <h4 class="user-card__name">Дарья Трофимова</h4>
                                    <p class="user-card__subtitle">Психотерапевт</p>
                                    <p class="user-card__text">Хочу відзначити в тобі здатність показати та
                                        пояснити,
                                        що одяг -не просто функціональна тканина</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="feedback__user-card">
                                    <img class="user-card__icon" src="../assets/images/user-5.jpg" alt="User ">
                                    <h4 class="user-card__name">Nadiya Maltseva </h4>
                                    <p class="user-card__subtitle">Maltseva Consulting</p>
                                    <p class="user-card__text">
                                        During a stage in my life, I needed to transition from my corporate attire during
                                        work hours
                                        and floral dresses during leisure time, to a more versatile and easy-to-wear style.
                                        Edna
                                        surprisedfeedback__ me by first wanting to understand me as a person, not just my
                                        daily
                                        role. As we
                                        sorted through my closet, I was apprehensive about having to let go of my favorite
                                        pieces.
                                        However, Edna approached each item with reverence and asked about my personal
                                        connection and
                                        association with it. In the end, we ended up donating 70% of the items and did a
                                        little
                                        shopping. Edna goes beyond just putting together an outfit. She taught me to view
                                        each item
                                        as an ingredient that can be used in various combinations, making them incredibly
                                        satisfying
                                        and appealing, resulting in compliments from others.
                                    </p>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
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
</script>

<style >
.feedback--mobile {
    display: none;
}

.feedback {}

.feedback--desctop {
    display: block;
}

.feedback__container {}

.feedback__wrapper {}

.feedback__content {}

.feedback__body {
    display: grid;
    grid-template-columns: repeat(3, 1fr) 3fr;
    grid-gap: 0 25px;
}

.feedback__user-card {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto repeat(2, 1fr);
    align-items: start;
    justify-items: start;
}

.user-card__icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    grid-row: span 2;
    max-width: 40px;
}

.user-card__name {
    color: var(--edna-dark-brown, #210803);
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    white-space: nowrap;
    margin-left: 16px;
    align-self: end;
}

.user-card__subtitle {
    color: var(--edna-dark-beige, #8F7D65);
    font-family: "Helvetica Neue";
    font-size: 7px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.14px;
    text-transform: uppercase;
    margin-left: 16px;
    align-self: center;
    white-space: nowrap;
    align-self: start;
}

.user-card__text {
    grid-column: span 2;
    color: var(--edna-dark-beige, #8F7D65);
    font-family: "Helvetica Neue";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: 0.2px;
    margin-top: 24px;
}

.feedback__user-card:last-child {}

.feedback__user-card:last-child .user-card__text {
    grid-column: 3/span 2;
    grid-row: 1/ span all;
    margin-left: 31px;
    margin-top: 0;
}

@media(max-width: 1100px) {
    .feedback__body {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 32px;
    }

    .feedback__user-card:last-child {
        display: grid;
        grid-template-columns: auto 1fr;
        /*grid-template-rows: 20px 20px minmax(20px, auto);*/
        grid-template-rows: auto auto repeat(2, 1fr);
        align-items: start;
        justify-items: start;

        grid-column: span 3
    }

    .feedback__user-card {
        grid-template-rows: auto auto repeat(1, 1fr);
    }

    .user-card__text {
        grid-column: 2 /3;
        color: var(--edna-dark-beige, #8F7D65);
        font-family: "Helvetica Neue";
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: 0.2px;
        margin-top: 16px;
        margin-left: 16px;
    }
}

@media(max-width: 768px) {

    .feedback__container {
        padding-top: 40px;
        padding-bottom: 0;
    }

    .feedback__wrapper {
        padding-left: 16px;
        padding-right: 16px;
    }

    .feedback--mobile {
        display: block;
    }

    .feedback--desctop {
        display: none;
    }

    .feedback__body {
        display: block;
    }

    .feedback__user-card,
    .feedback__user-card:last-child {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto 1fr;
        align-items: start;
        justify-items: start;
    }

    .user-card__icon {
        min-width: 56px;
        min-height: 56px;
    }

    .user-card__subtitle {
        font-size: 12px;
    }

    .feedback__user-card .user-card__text,
    .feedback__user-card:last-child .user-card__text {
        grid-column: 1/span 2;
        grid-row: 3/ span all;
        margin-left: 31px;
        margin: 0;
        margin-top: 24px;
    }

    .swiper-pagination {
        margin-top: 24px;
    }

    .swiper-pagination-bullet {
        background: var(--edna-dark-brown, #210803);
    }

    .swiper-pagination-bullet-active {}
}
</style>