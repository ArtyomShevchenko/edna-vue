<template>
    <section class="card" v-if="langStore.lang === 'en'">
        <div class="card__container">
            <div class="card__wrapper">
                <div class="card__contant">
                    <div class="card__body">
                        <div class="card__images-container card__images-container--desctop">
                            <img src="../assets/images/services-card-2.jpg" class="card__img" alt="image">
                        </div>

                        <div class="card__images-container card__images-container--mobile">
                            <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                                :pagination="{ clickable: true }">
                                <swiper-slide>
                                    <img src="../assets/images/services-card-2.jpg" class="card__img" alt="image">
                                </swiper-slide>
                            </swiper>
                        </div>

                        <article class="card__content">
                            <div class="card__person">4h | in person</div>
                            <div class="card__title">
                                To elevate style confidence & give you a strategy</div>
                            <div>
                                <p class="card__text">
                                    If you’re wondering where to start or have questions challenging you, this is the best
                                    way
                                    to address them, e.g.
                                </p>
                                <ul class="card__details-list">
                                    <li class="card__details-list-item">
                                        how to adapt my wardrobe to a new lifestyle?
                                    </li>
                                    <li class="card__details-list-item">
                                        how to avoid same scenarios when shopping?
                                    </li>
                                    <li class="card__details-list-item">
                                        how to upgrade my looks to endear clients?
                                    </li>
                                    <li class="card__details-list-item">
                                        how to follow fashion but stay true to myself?
                                    </li>
                                </ul>
                                <p class="card__text">
                                    Through a visual guide I’ll explain how to dress for your body type and navigate current
                                    styles. I’ll give you a ready to shop personalized wardrobe capsule and recommend brands
                                    for
                                    you to have a clear wardrobe strategy and feel relieved and confident on your style
                                    journey.
                                </p>
                                <p class="card__text">
                                    Tap bellow for more details and booking.

                                </p>

                            </div>
                            <button class="card__button">BOOK NOW</button>

                            <div class="card__details-container dropbox">
                                <input type="checkbox" id="details" class="dropbox__input" hidden>
                                <label for="details" class="dropbox__title">details</label>
                                <!-- <div class="card__details-title dropbox__title" v-on:click="details = !details">details</div> -->
                                <div class="dropbox__content">
                                    <div class="card__details-text--center">
                                        <p>2 sessions</p>
                                        <p>1 style & personality research</p>
                                        <p>1 mood board</p>
                                        <p>1 Visual Style Guide - clear style & wardrobe strategy
                                        </p>
                                    </div>
                                    <ul class="card__details-list">
                                        <li class="card__details-list-item">
                                            You fill out a questionary and pass a style research
                                        </li>
                                        <li class="card__details-list-item">
                                            I define your aesthetics and put together a personal mood board
                                        </li>
                                        <li class="card__details-list-item">
                                            Session One - we meet online to discuss and confirm the mood board | 35 min.
                                        </li>
                                        <li class="card__details-list-item">
                                            I create a personalized Visual Style Guide with practical examples, tips and a
                                            wardrobe capsule sample based on the mood board, your personality & lifestyle.
                                        </li>
                                        <li class="card__details-list-item">
                                            Session Two - we meet for coaching though the Visual Style Guide and your
                                            further strategy for solo shopping & wardrobe management | 90 min
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card__testimonials-container">
                                <input type="checkbox" id="testimonials" class="dropbox__input" hidden>
                                <label for="testimonials" class="dropbox__title">testimonials</label>
                                <!-- <div class="card__testimonials-title dropbox__title" v-on:click="testimonials = !testimonials">Testimonials</div> -->
                                <div class="dropbox__content">
                                    <div class="user-feedback">
                                        <div class="user-feedback__content user-feedback__content--desctop">
                                            <div class="user-card">
                                                <img class="user__icon" src="../assets/images/user-1.jpg" alt="User ">
                                                <h4 class="user__name">Nadiya Maltseva</h4>
                                                <p class="user__subtitle">Maltseva Consulting</p>
                                                <p class="user__text">During a stage in my life, I needed to transition from
                                                    my corporate attire during work
                                                    hours and floral dresses during leisure time...</p>
                                            </div>
                                            <div class="user-card">
                                                <img class="user__icon" src="../assets/images/user-2.jpg" alt="User ">
                                                <h4 class="user__name">Лемара Ахбаева</h4>
                                                <p class="user__subtitle">Make Up Artist & Beauty Expert</p>
                                                <p class="user__text">Эдна, я выбрала работу с тобой, потому что ты
                                                    внимательна к деталям, очень хорошо
                                                    чувствуешь</p>
                                            </div>
                                            <div class="user-card">
                                                <img class="user__icon" src="../assets/images/user-3.jpg" alt="User ">
                                                <h4 class="user__name">Дарья Трофимова</h4>
                                                <p class="user__subtitle">Психотерапевт</p>
                                                <p class="user__text">Хочу відзначити в тобі здатність показати та пояснити,
                                                    що одяг -не просто функціональна тканина</p>
                                            </div>
                                        </div>

                                        <div class="user-feedback__content user-feedback__content--mobile">
                                            <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                                                :pagination="{ clickable: true }">
                                                <swiper-slide>
                                                    <div class="user-card">
                                                        <img class="user__icon" src="../assets/images/user-1.jpg"
                                                            alt="User ">
                                                        <h4 class="user__name">Nadiya Maltseva</h4>
                                                        <p class="user__subtitle">Maltseva Consulting</p>
                                                        <p class="user__text">During a stage in my life, I needed to
                                                            transition from
                                                            my corporate attire during work
                                                            hours and floral dresses during leisure time...</p>
                                                    </div>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <div class="user-card">
                                                        <img class="user__icon" src="../assets/images/user-2.jpg"
                                                            alt="User ">
                                                        <h4 class="user__name">Лемара Ахбаева</h4>
                                                        <p class="user__subtitle">Make Up Artist & Beauty Expert</p>
                                                        <p class="user__text">Эдна, я выбрала работу с тобой, потому что ты
                                                            внимательна к деталям, очень хорошо
                                                            чувствуешь</p>
                                                    </div>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <div class="user-card">
                                                        <img class="user__icon" src="../assets/images/user-3.jpg"
                                                            alt="User ">
                                                        <h4 class="user__name">Дарья Трофимова</h4>
                                                        <p class="user__subtitle">Психотерапевт</p>
                                                        <p class="user__text">Хочу відзначити в тобі здатність показати та
                                                            пояснити,
                                                            що одяг -не просто функціональна тканина</p>
                                                    </div>
                                                </swiper-slide>
                                            </swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="card" v-if="langStore.lang === 'ua'">
        <div class="card__container">
            <div class="card__wrapper">
                <div class="card__contant">
                    <div class="card__body">
                        <div class="card__images-container card__images-container--desctop">
                            <img src="../assets/images/services-card-2.jpg" class="card__img" alt="image">
                        </div>

                        <div class="card__images-container card__images-container--mobile">
                            <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                                :pagination="{ clickable: true }">
                                <swiper-slide>
                                    <img src="../assets/images/services-card-2.jpg" class="card__img" alt="image">
                                </swiper-slide>
                            </swiper>
                        </div>

                        <article class="card__content">
                            <div class="card__person"> 4H |особисто </div>
                            <div class="card__title">
                                Підняти впевненість у стилі та дати вам стратегію </div>
                            <div>
                                <p class="card__text">
                                    Якщо вам цікаво, з чого почати або мати питання, які вам викликають, це найкраще
                                    шлях
                                    Щоб вирішити їх, наприклад
                                </p>
                                <ul class="card__details-list">
                                    <li class="card__details-list-item">
                                        Як адаптувати свій гардероб до нового способу життя?
                                    </li>
                                    <li class="card__details-list-item">
                                        Як уникнути однакових сценаріїв під час покупок?
                                    </li>
                                    <li class="card__details-list-item">
                                        Як оновити мій погляд, щоб любити клієнтів?
                                    </li>
                                    <li class="card__details-list-item">
                                        Як слідувати моді, але залишатися вірними собі?
                                    </li>
                                </ul>
                                <p class="card__text">
                                    Через візуальний посібник я поясню, як одягатися для вашого типу тіла та навігація
                                    Стилі.Я дам вам готову купувати персоналізовану капсулу гардеробу та рекомендувати
                                    бренди
                                    для
                                    Ви маєте чітку стратегію гардеробу та полегшено і впевнено у своєму стилі
                                    подорож.
                                </p>
                                <p class="card__text">
                                    Торкніться нижче деталей та бронювання.
                                </p>

                            </div>
                            <button class="card__button">Зарезервувати зараз</button>

                            <div class="card__details-container dropbox">
                                <input type="checkbox" id="details" class="dropbox__input" hidden>
                                <label for="details" class="dropbox__title">деталі</label>
                                <!-- <div class="card__details-title dropbox__title" v-on:click="details = !details">details</div> -->
                                <div class="dropbox__content">
                                    <div class="card__details-text--center">
                                        <p> 2 сеанси </p>
                                        <p> 1 дослідження стилів та особистості </p>
                                        <p> 1 дошка настрою </p>
                                        <p> 1 Посібник з візуального стилю - Стратегія чіткого стилю та гардеробу
                                        </p>
                                    </div>
                                    <ul class="card__details-list">
                                        <li class="card__details-list-item">
                                            Ви заповнюєте запитання та проходите дослідження стилю
                                        </li>
                                        <li class="card__details-list-item">
                                            Я визначаю вашу естетику і складаю особисту дошку настрою
                                        </li>
                                        <li class="card__details-list-item">
                                            Перша сесія - Ми зустрічаємося в Інтернеті, щоб обговорити та підтвердити дошку
                                            настрою |35 хв.
                                        </li>
                                        <li class="card__details-list-item">
                                            Я створюю персоналізований посібник з візуального стилю з практичними
                                            прикладами, порадами та a
                                            Зразок капсули гардеробу на основі дошки настрою, вашої особистості та способу
                                            життя.
                                        </li>
                                        <li class="card__details-list-item">
                                            Сесія друга - ми зустрічаємось для тренування, хоча посібник із візуального
                                            стилю та ваш
                                            Подальша стратегія для управління сольними покупками та гардеробом |90 хв
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card__testimonials-container">
                                <input type="checkbox" id="testimonials" class="dropbox__input" hidden>
                                <label for="testimonials" class="dropbox__title">відгуки</label>
                                <!-- <div class="card__testimonials-title dropbox__title" v-on:click="testimonials = !testimonials">Testimonials</div> -->
                                <div class="dropbox__content">
                                    <div class="user-feedback">
                                        <div class="user-feedback__content user-feedback__content--desctop">
                                            <div class="user-card">
                                                <img class="user__icon" src="../assets/images/user-1.jpg" alt="User ">
                                                <h4 class="user__name">Nadiya Maltseva</h4>
                                                <p class="user__subtitle">Maltseva Consulting</p>
                                                <p class="user__text">During a stage in my life, I needed to transition from
                                                    my corporate attire during work
                                                    hours and floral dresses during leisure time...</p>
                                            </div>
                                            <div class="user-card">
                                                <img class="user__icon" src="../assets/images/user-2.jpg" alt="User ">
                                                <h4 class="user__name">Лемара Ахбаева</h4>
                                                <p class="user__subtitle">Make Up Artist & Beauty Expert</p>
                                                <p class="user__text">Эдна, я выбрала работу с тобой, потому что ты
                                                    внимательна к деталям, очень хорошо
                                                    чувствуешь</p>
                                            </div>
                                            <div class="user-card">
                                                <img class="user__icon" src="../assets/images/user-3.jpg" alt="User ">
                                                <h4 class="user__name">Дарья Трофимова</h4>
                                                <p class="user__subtitle">Психотерапевт</p>
                                                <p class="user__text">Хочу відзначити в тобі здатність показати та пояснити,
                                                    що одяг -не просто функціональна тканина</p>
                                            </div>
                                        </div>

                                        <div class="user-feedback__content user-feedback__content--mobile">
                                            <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                                                :pagination="{ clickable: true }">
                                                <swiper-slide>
                                                    <div class="user-card">
                                                        <img class="user__icon" src="../assets/images/user-1.jpg"
                                                            alt="User ">
                                                        <h4 class="user__name">Nadiya Maltseva</h4>
                                                        <p class="user__subtitle">Maltseva Consulting</p>
                                                        <p class="user__text">During a stage in my life, I needed to
                                                            transition from
                                                            my corporate attire during work
                                                            hours and floral dresses during leisure time...</p>
                                                    </div>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <div class="user-card">
                                                        <img class="user__icon" src="../assets/images/user-2.jpg"
                                                            alt="User ">
                                                        <h4 class="user__name">Лемара Ахбаева</h4>
                                                        <p class="user__subtitle">Make Up Artist & Beauty Expert</p>
                                                        <p class="user__text">Эдна, я выбрала работу с тобой, потому что ты
                                                            внимательна к деталям, очень хорошо
                                                            чувствуешь</p>
                                                    </div>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <div class="user-card">
                                                        <img class="user__icon" src="../assets/images/user-3.jpg"
                                                            alt="User ">
                                                        <h4 class="user__name">Дарья Трофимова</h4>
                                                        <p class="user__subtitle">Психотерапевт</p>
                                                        <p class="user__text">Хочу відзначити в тобі здатність показати та
                                                            пояснити,
                                                            що одяг -не просто функціональна тканина</p>
                                                    </div>
                                                </swiper-slide>
                                            </swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
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

import { useLangStore } from "../store/lang";
const langStore = useLangStore()
</script>

<style scoped></style>