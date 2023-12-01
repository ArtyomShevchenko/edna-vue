<template>
    <section class="contact-form">
        <div class="contact-form__container">
            <div class="contact-form__wrapper">
                <div class="contact-form__content">
                    <div class="contact-form__image-container">
                        <img src="../assets/images/contact-form.jpg" alt="Image" class="contact-form__img">
                    </div>

                    <div class="contact-form__form-container" v-if="!data">
                        <!-- :class="{ 'contact-form__report--container--active': !data }" -->
                        <p class="form__text">To request a discovery call, book a session or get more details, please
                            contact via form bellow</p>


                        <form action="#" class="form-body" ref="contactForm">
                            <label class="form__name-container form__label-container">
                                <span>Name</span>
                                <input type="text" name="userName" ref="userName" id="userName" class="form__name">
                            </label>

                            <label class="form__phone-container  form__label-container">
                                <span>Phone</span>
                                <input type="tel" name="phone" class="form__phone">
                            </label>

                            <label class="form__email-container  form__label-container">
                                <span>Email</span>
                                <input type="email" name="email" class="form__email">
                            </label>

                            <div class="form__contact-container">
                                <select name="contactUs" class="form__contact" ref="formContact">
                                    <option value="1" class="form__contact-item">You prefer we contact you via</option>
                                    <option value="2" class="form__contact-item">I will send it to you by mail</option>
                                    <option value="3" class="form__contact-item">I will call you</option>
                                    <option value="4" class="form__contact-item">I will drop by your office</option>
                                </select>
                            </div>

                            <div class="form__services-container">
                                <select name="services" class="form__services" ref="formServices">
                                    <option value="1" class="form__services-item">Services</option>
                                    <option value="2" class="form__services-item">After services</option>
                                    <option value="3" class="form__services-item">Before services</option>
                                </select>
                            </div>

                            <label class="form__comment-container form__label-container">
                                <span>Comment</span>
                                <input type="text" name="comment" class="form__comment">
                            </label>
                        </form>
                        <p class="form__text">
                            For other inquiries or if preferred please contact directly via email <a
                                href="mailto:edna@shindinde.com">edna@shindinde.com</a>
                        </p>
                        <div class="form__link-and-button-container">
                            <a href="edna@shindinde.com" target="_blank" class="form__instagram-link-container">
                                <span>Follow me via</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <g clip-path="url(#clip0_1325_3153)">
                                        <path
                                            d="M11.3335 1.33301H4.66683C2.82588 1.33301 1.3335 2.82539 1.3335 4.66634V11.333C1.3335 13.174 2.82588 14.6663 4.66683 14.6663H11.3335C13.1744 14.6663 14.6668 13.174 14.6668 11.333V4.66634C14.6668 2.82539 13.1744 1.33301 11.3335 1.33301Z"
                                            stroke="#210803" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M10.6668 7.5802C10.7491 8.13503 10.6543 8.70168 10.396 9.19954C10.1376 9.69741 9.72889 10.1011 9.22788 10.3533C8.72687 10.6055 8.1591 10.6933 7.60532 10.6042C7.05155 10.515 6.53997 10.2536 6.14336 9.85698C5.74674 9.46036 5.48528 8.94878 5.39618 8.39501C5.30707 7.84124 5.39484 7.27346 5.64701 6.77245C5.89919 6.27144 6.30292 5.86269 6.80079 5.60436C7.29865 5.34603 7.8653 5.25126 8.42013 5.33353C8.98608 5.41746 9.51003 5.68118 9.91459 6.08574C10.3192 6.4903 10.5829 7.01425 10.6668 7.5802Z"
                                            stroke="#210803" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.6665 4.33301H11.6732" stroke="#210803" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1325_3153">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>


                            <button v-on:click="submitForm" type="submit" class="form__button">send a request</button>
                        </div>
                    </div>

                    <div class="contact-form__report-container contact-form__modal-container" v-else>
                        <div class="contact-form__report contact-form__modal">
                            {{ data }}
                        </div>
                        <div>
                            <button v-on:click="reset">Send again</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue"

const contactForm = ref(null);
const data = ref(null);

const formContact = ref(null);
const formServices = ref(null)

onMounted(() => {
    for (const option of formServices.value.children) {
        option.value = option.textContent
    }

    for (const option of formContact.value.children) [
        option.value = option.textContent
    ]
})


function createData() {
    const body = new FormData(contactForm.value)

    for (const [key, value] of body) {
        data.value = {
            ...data.value, ...{ [key]: value }
        }
    }
}

function submitForm() {
    createData()
}

function reset() {
    data.value = null
}
</script>

<style scoped>
input,
select,
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid #40382D;
    width: 100%;


    -webkit-text-fill-color: var(--edna-dark-brown, #210803);
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: 0 0 0px 1000px transparent inset;
}

select {
    border: none;
}

input:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid #e09c3c;
    width: 100%;
}

.contact-form__container {}

.contact-form__wrapper {}

.contact-form__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 102px;
}

.contact-form__image-container {
    width: 412;
    height: 618px;
    justify-self: end;
}

.contact-form__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contact-form__form-container {
    justify-self: start;
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 413px;
}

.form-body {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.form__label-container {
    display: flex;
    gap: 24px;
    flex-direction: row;
    align-items: center;
}

.form__name-container {}

.form__name {}

.form__phone-container {}

.form__phone {}

.form__email-container {}

.form__email {}

.form__contact-container {}

.form__contact {}

.form__contact-item {}

.form__services-container {}

.form__services {}

.form__services-item {}

.form__comment-container {}

.form__comment {}

.form__link-and-button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form__instagram-link-container {
    display: flex;
    align-items: center;
    gap: 16px;
}

.contact-form__report-container {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
}

.contact-form__report {
    padding: 16px;
    font-size: 16px;
}

.contact-form__report--container--active {}

@media(max-width: 950px) {
    .contact-form__content {
        gap: 51px;
    }
}

@media(max-width: 850px) {

    .contact-form__container {
        padding-top: 32px;
        padding-bottom: 54px;
    }

    .contact-form__content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .contact-form__form-container {
        padding-left: 16px;
        padding-right: 16px;
        max-width: 100%;
        width: 100%;
    }

    .contact-form__image-container {
        width: 100%;
        height: 480px;
        justify-self: end;
    }

    .contact-form__img {
        object-position: top;
    }

    .form__link-and-button-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
    }

    .form__button {
        width: 100%;
    }
}
</style>