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

                        <li class="card__nav-item card__nav-item--close">
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
                            <img src="../assets/images/services-card-1.jpg" class="card__img" alt="image">
                            <img src="../assets/images/services-card-2.jpg" class="card__img card__img--gorizontal"
                                alt="image">
                        </div>

                        <div class="card__images-container card__images-container--mobile">
                            <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                                :pagination="{ clickable: true }">
                                <swiper-slide>
                                    <img src="../assets/images/services-card-1.jpg" class="card__img" alt="image">
                                </swiper-slide>
                                <swiper-slide>
                                    <img src="../assets/images/services-card-2.jpg" class="card__img card__img--gorizontal"
                                        alt="image">
                                </swiper-slide>
                            </swiper>
                        </div>

                        <article class="card__content">
                            <div class="card__person">5h | in person</div>
                            <div class="card__title">To elevate style confidence & give you a strategy</div>
                            <div>
                                <p class="card__text">
                                    It’s easy to get lost among numerous brands, uncertain of what will be
                                    an investment rather than a disappointment.
                                </p>

                                <p class="card__text">
                                    Following my signature approach you’ll get
                                    exactly what’s needed without stress of missing out.

                                </p>
                                <p class="card__text">
                                    You can enjoy some «me time», while I take care of everything. Prior to a session I
                                    study
                                    your aesthetic, pre-select the capsule, and plan a shopping route to meet your goals &
                                    budget.
                                </p>
                                <p class="card__text">
                                    Then I take you on a tailor-made shopping tour with my full support & guidance. For,
                                    in
                                    the
                                    end, you feel like its been a well-deserved self-care experience.

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
                                <input type="checkbox" id="testimonials" class="dropbox__input" hidden checked>
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
            item.children[0].classList.add("card__nav-link--active")
        }
    }
})





// import { useCardsStore } from '@/store/cards'
// const cardsStore = useCardsStore()

</script>

<style >
.card {}

.card__container {}

.card__wrapper {}

.card__nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
}

.card__nav-item {}

.card__nav-link {}

.card__nav-link--active {
    color: var(--edna-dark-red, #B31719);
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-decoration-line: underline;
    text-transform: uppercase;
}

.card__nav-item--close {
    height: 32px;
    width: 32px;
    margin-left: auto;
}

.card__body {
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.card__images-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.card__images-container--mobile {
    display: none;
}

.card__img {
    max-width: 396px;
    max-height: 600px;
    object-fit: cover;
    object-position: top;
    aspect-ratio: 1/1.5;
}

.card__img--gorizontal {
    max-width: 600px;
    max-height: 396px;
    aspect-ratio: 1.5/1;
}

.card__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.card__person {
    color: var(--edna-dark-beige, #8F7D65);
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-transform: uppercase;
}

.card__title {
    color: var(--edna-dark-brown, #210803);

    /* 8_H2 */
    font-family: Helvetica Neue;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
}

.card__text {
    margin: 6px 0;
}

.card__button {}

.card__details-container {}

.card__button {
    margin: 40px 0;
    align-self: flex-end;
}

/* ------------- */


.dropbox {}

.dropbox__title {
    color: var(--edna-dark-beige, #8F7D65);
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.24px;
    text-transform: uppercase;
    padding-left: 10px;
    position: relative;
    display: block;
    cursor: pointer;
}

.dropbox__title::before {
    content: "+";
    display: block;
    position: absolute;

    left: 0;
}

.dropbox__content {
    overflow: hidden;
    transition: all 1s;
    padding: 0px;
    max-height: 0;

    display: flex;
    flex-direction: column;
    gap: 32px;
}

.dropbox__input {
    display: none;
}

.dropbox__input:checked~.dropbox__content {
    padding: 32px 0;
    max-height: 400px;
}

.dropbox__input:checked~.dropbox__title::before {
    content: "-"
}

.card__details-text--center {
    align-self: center;
}

.card__details-list {}

.card__details-list-item {
    padding-left: 20px;
    position: relative;
}

.card__details-list-item::before {
    content: "";
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #000;
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
}

/* ---- */

.card__testimonials-container {}

.user-feedback__content {
    display: flex;
    gap: 22px;
}

.user-feedback__content--mobile {
    display: none;
}

.user-card {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

}

.user__icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    grid-row: span 2;
}

.user__name {
    margin-left: 16px;
}

.user__subtitle {
    margin-left: 16px;
}

.user__text {
    grid-column: span 2;
    margin-top: 24px;
}


/*@media (max-width: 650px) { */
@media (max-width: 650px) {
    .card__images-container--desctop {
        display: none;
    }

    .card__images-container--mobile {
        display: block;
    }

    .card__content {
        padding-left: 16px;
        padding-right: 16px;
    }

    .card__body {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .card__img {
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 468px;
        min-height: 100%;
        object-fit: cover;
        aspect-ratio: auto;
    }

    .swiper-slide {}

    .swiper-pagination {
        margin-top: 24px;
    }

    .swiper-pagination-bullet {
        background-color: var(--edna-dark-brown, #210803);
    }

    .swiper-pagination-bullet-active {
        opacity: 1
    }

    .user-feedback__content--desctop {
        display: none;
    }

    .user-feedback__content--mobile {
        display: block;
    }

    .user-card {
        display: grid;
        grid-template-columns: auto 1fr;

    }

    .user__icon {
        width: 56px;
        height: 56px;
    }

    .user__name {
        margin-left: 16px;
        color: var(--edna-dark-brown, #210803);
        /* 8_Services */
        font-family: Helvetica Neue;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 170%;
        /* 20.4px */
        letter-spacing: 0.6px;
        text-transform: uppercase;

    }

    .user__subtitle {
        margin-left: 16px;
        color: var(--edna-dark-beige, #8F7D65);
        font-family: "Helvetica Neue";
        font-size: 7px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.14px;
        text-transform: uppercase;
    }

    .user__text {
        grid-column: span 2;
        margin-top: 24px;
        color: var(--edna-dark-beige, #8F7D65);

        /* M_Body */
        font-family: Helvetica Neue;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 18px */
    }

    .dropbox__content {
        padding: 72px 0;
    }
}
</style>