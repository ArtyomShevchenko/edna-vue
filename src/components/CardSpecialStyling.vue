<template>
    <section class="card">
        <div class="card__container">
            <div class="card__wrapper">
                <div class="card__contant">
                    <nav class="card__nav" ref="navContainer">

                        <li class="card__nav-item">
                            <router-link class="card__nav-link" to="/services/guided-shopping">GUIDED SHOPPING</router-link>
                        </li>
                        <li class="card__nav-item">
                            <router-link class="card__nav-link" to="/services/style-session">STYLE SESSION</router-link>
                        </li>
                        <li class="card__nav-item">
                            <router-link class="card__nav-link" to="/services/wardrobe-edit">WARDROBE EDIT</router-link>
                        </li>
                        <li class="card__nav-item">
                            <router-link class="card__nav-link" to="/services/special-styling">SPECIAL STYLING</router-link>
                        </li>

                        <li class="card__nav-item card__nav-item--cross card__nav-item--active">
                            <router-link class="card__nav-link" to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 32"
                                    fill="none">
                                    <path d="M24 8L8 24" stroke="#40382D" stroke-linecap="square" stroke-linejoin="round" />
                                    <path d="M8 8L24 24" stroke="#40382D" stroke-linecap="square" stroke-linejoin="round" />
                                </svg>
                            </router-link>
                        </li>
                    </nav>

                    <!-- CardGuidedShopping -->
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
</template>

<script setup>
import "../assets/styles/cardComps.css"
import { ref, onMounted } from "vue"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const modules = [Navigation, Pagination, Scrollbar, A11y]

const navContainer = ref(null)

onMounted(() => {
    for (let item of navContainer.value.children) {
        if (item.children[0].href == window.location.href.toString()) {
            item.classList.add("card__nav-item--active")
            item.querySelector(".card__nav-link").classList.add("card__nav-link--active")
        }
    }
})
</script>

<style scoped></style>