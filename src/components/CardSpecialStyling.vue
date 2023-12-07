<template>
    <section class="card" v-if="langStore.lang === 'en'">
        <div class="card__container">
            <div class="card__wrapper">
                <div class="card__contant">
                    <div class="card__body">
                        <div class="card__images-container card__images-container--desctop">
                            <img src="../assets/images/services-card-4.jpg" class="card__img" alt="image">
                        </div>

                        <div class="card__images-container card__images-container--mobile">
                            <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                                :pagination="{ clickable: true }">
                                <swiper-slide>
                                    <img src="../assets/images/services-card-4.jpg" class="card__img" alt="image">
                                </swiper-slide>
                            </swiper>
                        </div>

                        <article class="card__content">
                            <div class="card__person">5h | in person</div>
                            <div class="card__title">When time is short but the occasion is special</div>
                            <div>
                                <p class="card__text">
                                    Should you face a particular style quest with no energy to deal with it singly – I’m
                                    there to support you. Whether you need:
                                </p>
                                <ul class="card__details-list">
                                    <li class="card__details-list-item">
                                        a special occasion or a red carpet look
                                    </li>
                                    <li class="card__details-list-item">
                                        a key speaker image for a business event
                                    </li>
                                    <li class="card__details-list-item">
                                        a preplanned vacation capsule
                                    </li>
                                    <li class="card__details-list-item">
                                        a desired luxury item sourced and delivered for a dear one or yourself
                                    </li>
                                    <li class="card__details-list-item">
                                        personal brand or family photoshoot styling
                                    </li>
                                </ul>
                                <p class="card__text">
                                    With a custom solution to each request, I make sure you feel relaxed and taken care of
                                    at
                                    all times.
                                </p>
                                <p class="card__text">
                                    Tap for details and booking.
                                </p>
                            </div>
                            <button class="card__button">BOOK NOW</button>

                            <div class="card__details-container dropbox">
                                <input type="checkbox" id="details" class="dropbox__input" hidden>
                                <label for="details" class="dropbox__title">details</label>
                                <!-- <div class="card__details-title dropbox__title" v-on:click="details = !details">details</div> -->
                                <div class="dropbox__content">
                                    <div class="card__details-text--center">
                                        <p>5 hour of in person session</p>
                                        <p>Pre-selected wardrobe capsule</p>
                                        <p>Mindful and coordinated purchases</p>
                                        <p>Effectively invested budget</p>
                                    </div>

                                    <ul class="card__details-list">
                                        <li class="card__details-list-item">
                                            You fill out a questionary, share your shopping goals & budget
                                        </li>
                                        <li class="card__details-list-item">
                                            I build a shopping strategy, pre-select and book the clothing for the shopping
                                            day
                                        </li>
                                        <li class="card__details-list-item">
                                            We meet in person and follow the pre-planned shopping route
                                        </li>
                                        <li class="card__details-list-item">
                                            While shopping I teach you self styling techniques personalized for your body
                                            lines
                                            and appearance
                                        </li>
                                        <li class="card__details-list-item">
                                            We finish with new purchases, all coordinated in a wardrobe capsule according to
                                            your aesthetic, personality and lifestyle.
                                        </li>
                                    </ul>
                                    <p>
                                        For in person guided shopping experience in Milan, London or Paris, please leave at
                                        though a Contact section.
                                    </p>
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

                            <div class="card__person">5h | in person</div>
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
                            <img src="../assets/images/services-card-4.jpg" class="card__img" alt="image">
                        </div>

                        <div class="card__images-container card__images-container--mobile">
                            <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                                :pagination="{ clickable: true }">
                                <swiper-slide>
                                    <img src="../assets/images/services-card-4.jpg" class="card__img" alt="image">
                                </swiper-slide>
                            </swiper>
                        </div>

                        <article class="card__content">
                            <div class="card__person">5 го |особисто</div>
                            <div class="card__title">Коли час короткий, але випадок є особливим</div>
                            <div>
                                <p class="card__text">
                                    Якщо ви стикаєтесь з певним стилем, не маючи енергії, щоб поводитися з ним окремо - я
                                    там, щоб підтримати вас.Чи потрібно вам:
                                </p>
                                <ul class="card__details-list">
                                    <li class="card__details-list-item">
                                        Особливий випадок або вигляд червоної доріжки
                                    </li>
                                    <li class="card__details-list-item">
                                        Ключовий образ спікера для ділової події
                                    </li>
                                    <li class="card__details-list-item">
                                        заздалегідь запланована капсула відпочинку
                                    </li>
                                    <li class="card__details-list-item">
                                        Бажаний предмет розкоші знайшов і доставлений для дорогого або самого себе
                                    </li>
                                    <li class="card__details-list-item">
                                        особистий бренд або сімейний укладок фотосесії
                                    </li>
                                </ul>
                                <p class="card__text">
                                    За допомогою спеціального рішення для кожного запиту я переконуюсь, що ви відчуваєте
                                    себе розслабленим і піклувались
                                    в
                                    Усі часи.
                                </p>
                                <p class="card__text">
                                    Торкніться деталей та бронювання.
                                </p>
                            </div>
                            <button class="card__button">Зарезервувати зараз</button>

                            <div class="card__details-container dropbox">
                                <input type="checkbox" id="details" class="dropbox__input" hidden>
                                <label for="details" class="dropbox__title">деталі</label>
                                <!-- <div class="card__details-title dropbox__title" v-on:click="details = !details">details</div> -->
                                <div class="dropbox__content">
                                    <div class="card__details-text--center">
                                        <p> 5 годин особистого сеансу </p>
                                        <p> Капсула попередньо вибраного гардеробу </p>
                                        <p> Згадані та узгоджені покупки </p>
                                        <p> Ефективно вкладений бюджет </p>
                                    </div>

                                    <ul class="card__details-list">
                                        <li class="card__details-list-item">
                                            Ви заповнюєте запитання, ділитесь своїми цілями покупок та бюджету
                                        </li>
                                        <li class="card__details-list-item">
                                            Я будую стратегію покупок, попередній вибір і бронюю одяг для покупок
                                            день
                                        </li>
                                        <li class="card__details-list-item">
                                            Ми зустрічаємось особисто і слідуємо заздалегідь запланованим маршрутом покупок
                                        </li>
                                        <li class="card__details-list-item">
                                            Під час покупок я вчу вас
                                            лінії
                                            і зовнішній вигляд
                                        </li>
                                        <li class="card__details-list-item">
                                            Ми закінчуємо новими покупками, всі координовані в гардеробній капсулі
                                            відповідно до
                                            Ваша естетика, особистість та спосіб життя.
                                        </li>
                                    </ul>
                                    <p>
                                        Для особистого досвіду покупок у Мілані, Лондоні чи Парижі, будь ласка, залиште за
                                        адресою
                                        хоча контактна секція.
                                    </p>
                                </div>
                            </div>

                            <div class="card__testimonials-container">
                                <input type="checkbox" id="testimonials" class="dropbox__input" hidden>
                                <label for="testimonials" class="dropbox__title">відгуки</label>
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

                            <div class="card__person">5 го |особисто</div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import "@/assets/styles/cardComps.css"
import { useLangStore } from "../store/lang";
const langStore = useLangStore()

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const modules = [Navigation, Pagination, Scrollbar, A11y]
</script>

<style scoped></style>