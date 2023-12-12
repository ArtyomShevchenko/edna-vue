<template>
    <section class="about" ref="about">
        <div class="about__container" ref="aboutContainer">
            <div class="about__wrapper">
                <div class="about-content" v-if="langStore.lang === 'en'">
                    <article class="about-body">
                        <h3 class="about-subtitle subtitle" v-if="showTitle">about</h3>
                        <div class="about-text">
                            <p>
                                Welcome,
                            </p>
                            <p>
                                I’m Edna Shindinde, personal style advisor & wardrobe editor.
                            </p>
                            <p>
                                I help women embrace their value by teaching how to build a staple wardrobe in line
                                withtheir inner power and beauty.
                            </p>
                            <p>
                                The greatest flair of mine is to see talent and strength behind every woman I meet. Whether
                                you build a career, take care of a family, own a business or enjoy life by your rules – you
                                are a
                                high-value woman. You set a precedent & should own it proudly!
                            </p>
                            <p>
                                My vision is for each women to unblushingly celebrate her beauty, to be seen and respected
                                without
                                doubting own looks. Styling is just one way to achieve that. And I couldn’t ask for a better
                                mission, as
                                to guide you on this journey.
                            </p>
                        </div>
                        <div class="about-links">
                            <RouterLink to="/services">Services</RouterLink>
                            <RouterLink to="/testimonials">Testimonials</RouterLink>
                            <RouterLink to="/book">Book</RouterLink>
                        </div>
                    </article>

                    <div class="about-img-contain">
                        <img class="about-img" src="../assets/images/img2.jpg" alt="Girl">
                    </div>
                </div>

                <div class="about-content" v-if="langStore.lang === 'ua'">
                    <article class="about-body">
                        <h3 class="about-subtitle subtitle" v-if="showTitle">Про нас</h3>
                        <div class="about-text">
                            <p>
                                Ласкаво просимо,
                            </p>
                            <p>
                                Я Една Шіндінде, персональний консультант зі стилю та редактор гардеробу.
                            </p>
                            <p>
                                Я допомагаю жінкам усвідомити свою цінність, навчаючи, як складати основний гардероб
                                своєю внутрішньою силою та красою.
                            </p>
                            <p>
                                Найбільше моє чуття — бачити талант і силу в кожній жінці, яку зустрічаю. чи
                                ви будуєте кар'єру, дбаєте про сім'ю, володієте бізнесом або насолоджуєтеся життям за своїми
                                правилами - ви
                                є a
                                високоцінна жінка. Ви створили прецедент і повинні з гордістю ним володіти!
                            </p>
                            <p>
                                Моє бачення полягає в тому, щоб кожна жінка беззаперечно відзначала свою красу, щоб її
                                бачили та поважали
                                без
                                сумніватися у власній зовнішності. Стайлінг — лише один із способів досягти цього. І я не
                                міг бажати кращого
                                місія, як
                                щоб вести вас у цій подорожі.
                            </p>
                        </div>
                        <div class="about-links">
                            <RouterLink to="/services">Послуги</RouterLink>
                            <RouterLink to="/testimonials">Відгуки</RouterLink>
                            <RouterLink to="/book">Замовлення</RouterLink>
                        </div>
                    </article>

                    <div class="about-img-contain">
                        <img class="about-img" src="../assets/images/img2.jpg" alt="Дівчина">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import { useLangStore } from "@/store/lang"
const langStore = useLangStore()
const route = useRoute()

const showTitle = ref(true)

onMounted(() => {
    if (route.path === "/about") showTitle.value = false
})

// -----intersectionObserver
// import { onMounted } from "vue";
// import intersectionEntry from "@/observers/intersectionEntry";

// const { observedElement, elementClass, interOptions, interCallback, observer } = intersectionEntry();

// onMounted(() => {
//     observedElement.value = document.querySelector(".about");
//     elementClass.value = "about--visible";
//     interOptions(null, 1);
//     interCallback();
//     observer.observe(observedElement.value);
// });

// onMounted(() => {
// const observer = new IntersectionObserver((entryes) => {
//     entryes.forEach((elem) => {
//         if (elem.isIntersecting) {
//             elem.target.classList.add("--observe-visible")
//         } else {
//             elem.target.classList.remove("--observe-visible")
//         }
//     })
// }, {
//     root: about.value,
//     rootMargin: "0px",
//     threshold: 1.0,
// })

// observer.observe(about.value)

// var options = {
//     root: about.value,
//     rootMargin: "0px",
//     threshold: 1,
// };

// var callback = function (entries, observer) {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) console.log(entry.isIntersecting)
//         if (!entry.isIntersecting) console.log(entry.isIntersecting)
//         // if (elem.isIntersecting) {
//         //     console.log()
//         //     elem.target.classList.add("--observe-visible")
//         // } else {
//         //     elem.target.classList.remove("--observe-visible")
//         // }
//     })
// };

// var observer = new IntersectionObserver(callback, options);
// observer.observe(aboutContainer.value)
// })

import { useIntersectionObserver } from "@vueuse/core";
const about = ref(null)
const { stop } = useIntersectionObserver(
    about,
    ([{ isIntersecting, target }], observerElement) => {
        if (isIntersecting) {
            target.classList.add("about--visible");
        } else {
            target.classList.remove("about--visible");
        }
        observerElement.thresholds = .5
    },
)
</script>

<style>
.about {
    overflow: hidden;
    transition: all 1s;
    opacity: 0;
}

.about--visible {
    opacity: 1;
    transition: all 1s;
}

/* .about {
    overflow: hidden;
    opacity: 0;
    transition: all 1s ease;
} */

/* .about--visible {
    opacity: 1;
} */



.about__container {
    position: relative;
    width: 100%;
}

.about-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}

.about-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-width: 433px;
}

.about-text {}

.about-text p {
    margin-bottom: 10px;
}

.about-links {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.about-img-contain {
    height: 466px;
    position: relative;
}

.about-img {
    position: absolute;
    top: 0;
    object-position: left top;
    width: 100%;
    height: 100%;
    object-fit: cover;
}


@media (max-width: 768px) {
    .about__container {
        padding: 0;
    }

    .about-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .about-body {
        padding: 40px 16px;
        max-width: 100%;
        gap: 40px;
    }

    .about-text p {
        margin-bottom: 6px;
    }

    /* .about .content {
        padding: 40px 16px;
        gap: 40px;
        height: 100%;
        max-height: 100%;
    }

    .about .img-container {
        width: 100%;
    }

    .about .img-container img {
        position: static;
        width: 100%;
    }

    .about .content {
        width: 100%;
    } */
}
</style>