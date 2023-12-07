<template>
    <section class="card" v-if="langStore.lang === 'en'">
        <div class="card__container">
            <div class="card__wrapper">
                <div class="card__contant">
                    <nav class="card__nav" ref="navContainer">

                        <li class="card__nav-item">
                            <router-link class="card__nav-link" to="/services/guided-shopping">GUIDED
                                SHOPPING</router-link>
                        </li>
                        <li class="card__nav-item">
                            <router-link class="card__nav-link" to="/services/style-session">STYLE SESSION</router-link>
                        </li>
                        <li class="card__nav-item">
                            <router-link class="card__nav-link" to="/services/wardrobe-edit">WARDROBE EDIT</router-link>
                        </li>
                        <li class="card__nav-item">
                            <router-link class="card__nav-link" to="/services/special-styling">SPECIAL
                                STYLING</router-link>
                        </li>

                        <li class="card__nav-item card__nav-item--cross card__nav-item--active">
                            <ButtonCrossToBack />
                        </li>
                    </nav>

                    <!-- CardGuidedShopping -->
                    <div class="card__body">
                        <div class="card__images-container card__images-container--desctop">
                            <img src="../assets/images/services-card-1.jpg" class="card__img" alt="image">
                        </div>

                        <div class="card__images-container card__images-container--mobile">
                            <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                                :pagination="{ clickable: true }">
                                <swiper-slide>
                                    <img src="../assets/images/services-card-1.jpg" class="card__img" alt="image">
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
                                    your aesthetic, pre-select the capsule, and plan a shopping route to meet your goals
                                    &
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
                                            I build a shopping strategy, pre-select and book the clothing for the
                                            shopping
                                            day
                                        </li>
                                        <li class="card__details-list-item">
                                            We meet in person and follow the pre-planned shopping route
                                        </li>
                                        <li class="card__details-list-item">
                                            While shopping I teach you self styling techniques personalized for your
                                            body
                                            lines
                                            and appearance
                                        </li>
                                        <li class="card__details-list-item">
                                            We finish with new purchases, all coordinated in a wardrobe capsule
                                            according to
                                            your aesthetic, personality and lifestyle.
                                        </li>
                                    </ul>
                                    <p>
                                        For in person guided shopping experience in Milan, London or Paris, please leave
                                        at
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
                                                <p class="user__text">During a stage in my life, I needed to transition
                                                    from
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
                                                <p class="user__text">Хочу відзначити в тобі здатність показати та
                                                    пояснити,
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
                                                        <p class="user__text">Эдна, я выбрала работу с тобой, потому что
                                                            ты
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
                                                        <p class="user__text">Хочу відзначити в тобі здатність показати
                                                            та
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
                    <nav class="card__nav" ref="navContainer">

                        <li class="card__nav-item">
                            <router-link class="card__nav-link" to="/services/guided-shopping">Керовані
                                покупки</router-link>
                        </li>
                        <li class="card__nav-item">
                            <router-link class="card__nav-link" to="/services/style-session">Сесія стилю</router-link>
                        </li>
                        <li class="card__nav-item">
                            <router-link class="card__nav-link" to="/services/wardrobe-edit">Редагування
                                гардеробу</router-link>
                        </li>
                        <li class="card__nav-item">
                            <router-link class="card__nav-link" to="/services/special-styling">Спеціальний
                                Укладка</router-link>
                        </li>

                        <li class="card__nav-item card__nav-item--cross card__nav-item--active">
                            <ButtonCrossToBack />
                        </li>
                    </nav>

                    <!-- CardGuidedShopping -->
                    <div class="card__body">
                        <div class="card__images-container card__images-container--desctop">
                            <img src="../assets/images/services-card-1.jpg" class="card__img" alt="image">
                        </div>

                        <div class="card__images-container card__images-container--mobile">
                            <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true"
                                :pagination="{ clickable: true }">
                                <swiper-slide>
                                    <img src="../assets/images/services-card-1.jpg" class="card__img" alt="image">
                                </swiper-slide>
                            </swiper>
                        </div>

                        <article class="card__content">
                            <div class="card__person"> 5h |особисто </div>
                            <div class="card__title"> підняти впевненість у стилі та дати вам стратегію </div>
                            <div>
                                <p class="card__text">
                                    Легко загубитися серед численних брендів, невпевнено в тому, що буде
                                    інвестиція, а не розчарування.
                                </p>

                                <p class="card__text">
                                    Дотримуючись мого підходу до підписання, ви отримаєте
                                    саме те, що потрібно, без стресу пропустити.

                                </p>
                                <p class="card__text">
                                    Ви можете насолоджуватися деяким «я час», поки я про все дбаю.До сеансу i
                                    вивчення
                                    Ваша естетика, попередньо вибирати капсулу та сплануйте маршрут для покупок, щоб досягти
                                    своїх цілей
                                    &
                                    бюджет.
                                </p>
                                <p class="card__text">
                                    Тоді я беру вас на індивідуальну покупку з моєю повною підтримкою та керівництвом.Для,
                                    у
                                    з
                                    Кінець, ти відчуваєш, що це заслужений досвід самообслуговування.

                                </p>
                                <p class="card__text">
                                    Торкніться деталей та бронювання.
                                </p>
                            </div>
                            <button class="card__button">Зарезевувати зараз</button>

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
                                            Я будую стратегію шопінгу, попередньо відбір та броню одяг для
                                            покупки
                                            день
                                        </li>
                                        <li class="card__details-list-item">
                                            Ми зустрічаємось особисто і слідуємо заздалегідь запланованим маршрутом покупок
                                        </li>
                                        <li class="card__details-list-item">
                                            Під час покупок я вчу вас
                                            тіло
                                            лінії
                                            і зовнішній вигляд
                                        </li>
                                        <li class="card__details-list-item">
                                            Ми закінчуємо новими покупками, всі координовані в гардеробній капсулі
                                            відповідно до
                                            Ваша естетика, особистість та спосіб життя.
                                        </li>
                                    </ul>
                                    <p>Для особистого досвіду покупок у Мілані, Лондоні чи Парижі, будь ласка, залиште
                                        в
                                        хоча контактна секція.
                                    </p>
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
                                                <p class="user__text">During a stage in my life, I needed to transition
                                                    from
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
                                                <p class="user__text">Хочу відзначити в тобі здатність показати та
                                                    пояснити,
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
                                                        <p class="user__text">Эдна, я выбрала работу с тобой, потому что
                                                            ты
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
                                                        <p class="user__text">Хочу відзначити в тобі здатність показати
                                                            та
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
import "@/assets/styles/cardComps.css"
import { ref, onMounted } from "vue"
import ButtonCrossToBack from "../components/ButtonCrossToBack.vue"

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
        if (item.children[0].href === window.location.href.toString()) {
            item.classList.add("card__nav-item--active")
            item.querySelector(".card__nav-link").classList.add("card__nav-link--active")
        }
    }
})

import { useLangStore } from "@/store/lang";
const langStore = useLangStore()
</script>

<style scoped></style>