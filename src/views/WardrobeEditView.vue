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
                            <ButtonCrossToBack />
                        </li>
                    </nav>

                    <!-- CardGuidedShopping -->
                    <div class="card__body">
                        <div class="card__images-container card__images-container--desctop">
                            <img src="../assets/images/services-card-3.jpg" class="card__img" alt="image">
                            <img src="../assets/images/services-card-5.jpg" class="card__img" alt="image">
                            <img src="../assets/images/services-card-6.jpg" class="card__img card__img--gorizontal"
                                alt="image">
                            <img src="../assets/images/services-card-7.jpg" class="card__img" alt="image">
                        </div>

                        <div class="card__images-container card__images-container--mobile">
                            <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                                :pagination="{ clickable: true }">
                                <swiper-slide>
                                    <img src="../assets/images/services-card-3.jpg" class="card__img" alt="image">
                                </swiper-slide>
                                <swiper-slide>
                                    <img src="../assets/images/services-card-5.jpg" class="card__img" alt="image">
                                </swiper-slide>
                                <swiper-slide>
                                    <img src="../assets/images/services-card-6.jpg" class="card__img card__img--gorizontal"
                                        alt="image">
                                </swiper-slide>
                                <swiper-slide>
                                    <img src="../assets/images/services-card-7.jpg" class="card__img" alt="image">
                                </swiper-slide>
                            </swiper>
                        </div>

                        <article class="card__content">
                            <div class="card__person">4h | in person</div>
                            <div class="card__title">
                                To restore balance and bring the wardrobe in line with how you feel
                            </div>
                            <div>
                                <p class="card__text">
                                    If your clothes don’t serve you anymore because of a new lifestyle, a body change or
                                    another meaningful experience that makes if all feel different – let’s do a wardrobe
                                    edit.
                                </p>
                                <p class="card__text">
                                    We filter clothes to make room for new beginnings, while keeping and restyling your
                                    favorites. I’ll help overcome lingering doubts with a clear structure and up to date
                                    looks reflecting your current self. For you to finally see the beauty and power you have
                                    always felt inside.
                                </p>
                                <p class="card__text">
                                    Further on I’ll guide you with a personal look book and priority items list for a smart
                                    shopping.
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
                                        <p>
                                            4 hours in person session
                                        </p>
                                        <p>
                                            1 freshly edited wardrobe
                                        </p>
                                        <p>
                                            1 personal look book of modern looks
                                        </p>
                                        <p>
                                            1 shopping list & clear shopping strategy
                                        </p>
                                    </div>

                                    <ul class="card__details-list">
                                        <li class="card__details-list-item">
                                            You fill out a questionary and share your current wardrobe situation
                                        </li>
                                        <li class="card__details-list-item">
                                            I analyze and build a wardrobe strategy for you
                                        </li>
                                        <li class="card__details-list-item">
                                            We meet in person and go though each clothing category within one seasonal
                                            wardrobe.
                                        </li>
                                        <li class="card__details-list-item">
                                            We filter your clothes and create new modern looks which will form your personal
                                            look book
                                        </li>
                                        <li class="card__details-list-item">
                                            I teach you self styling techniques personalized for your body lines, appearance
                                            and lifestyle
                                        </li>
                                        <li class="card__details-list-item">
                                            We finish with a comprehensive shopping list and a clear wardrobe strategy for
                                            your further style journey.
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
</template>

<script setup>
import "../assets/styles/cardComps.css"
import { ref, onMounted } from "vue"
import ButtonCrossToBack from "@/components/ButtonCrossToBack.vue"


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