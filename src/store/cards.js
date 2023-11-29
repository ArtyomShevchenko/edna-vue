import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useCardsStore = defineStore('cardsStore', () => {
    const cards = ref([
        {
            dataName: "guided-shopping",
            title: "To elevate style confidence & give you a strategy",
            person: "5h | in person",
            text: "It’s easy to get lost among numerous brands, uncertain of what will be an investment rather than a disappointment. Following my signature approach you’ll get exactly what’s needed without stress of missing out. You can enjoy some «me time», while I take care of everything.Prior to a session I study your aesthetic, pre - select the capsule, and plan a shopping route to meet your goals & budget. Then I take you on a tailor - made shopping tour with my full support & guidance.For, in the end, you feel like its been a well - deserved self - care experience. Tap for details and booking.",
            buttonStatus: true,
            details: {
                discription: [
                    "5 hour of in person session",
                    "Pre-selected wardrobe capsule",
                    "Mindful and coordinated purchases",
                    "Effectively invested budget",
                ],
                list: [
                    "You fill out a questionary, share your shopping goals & budget",
                    "I build a shopping strategy, pre-select and book the clothing for the shopping day",
                    "We meet in person and follow the pre-planned shopping route",
                    "While shopping I teach you self styling techniques personalized for your body lines and appearance",
                    "We finish with new purchases, all coordinated in a wardrobe capsule according to your aesthetic, personality and lifestyle"
                ],
                after: "For in person guided shopping experience in Milan, London or Paris, please leave at though a Contact section."
            },
            testimonials: [
                {
                    name: "Nadiya",
                    lastname: "Maltseva",
                    subtitle: "Maltseva Consulting",
                    text: "During a stage in my life, I needed to transition from my corporate attire during work hours and floral dresses during leisure time...",
                    img: "@/assets/images/profile-icon.jpg",
                },
                {
                    name: "Лемара",
                    lastname: "Ахбаева",
                    subtitle: "Make Up Artist & Beauty Expert",
                    text: "Эдна, я выбрала работу с тобой, потому что ты внимательна к деталям, очень хорошо чувствуешь...",
                    img: "@/assets/images/profile-icon.jpg",
                },
                {
                    name: "Дарья",
                    lastname: "Трофимова",
                    subtitle: "Психотерапевт",
                    text: "Хочу відзначити в тобі здатність показати та пояснити, що одяг — не просто функціональна тканина...",
                    img: "@/assets/images/profile-icon.jpg",
                },
            ]
        },
        {
            dataName: "style-session",
            title: "To elevate style confidence & give you a strategy",
            person: "5h | in person",
            text: "It’s easy to get lost among numerous brands, uncertain of what will be an investment rather than a disappointment. Following my signature approach you’ll get exactly what’s needed without stress of missing out. You can enjoy some «me time», while I take care of everything.Prior to a session I study your aesthetic, pre - select the capsule, and plan a shopping route to meet your goals & budget. Then I take you on a tailor - made shopping tour with my full support & guidance.For, in the end, you feel like its been a well - deserved self - care experience. Tap for details and booking.",
            buttonStatus: true,
            details: {
                discription: [
                    "5 hour of in person session",
                    "Pre-selected wardrobe capsule",
                    "Mindful and coordinated purchases",
                    "Effectively invested budget",
                ],
                list: [
                    "You fill out a questionary, share your shopping goals & budget",
                    "I build a shopping strategy, pre-select and book the clothing for the shopping day",
                    "We meet in person and follow the pre-planned shopping route",
                    "While shopping I teach you self styling techniques personalized for your body lines and appearance",
                    "We finish with new purchases, all coordinated in a wardrobe capsule according to your aesthetic, personality and lifestyle"
                ],
                after: "For in person guided shopping experience in Milan, London or Paris, please leave at though a Contact section."
            },
            testimonials: [
                {
                    name: "Nadiya",
                    lastname: "Maltseva",
                    subtitle: "Maltseva Consulting",
                    text: "During a stage in my life, I needed to transition from my corporate attire during work hours and floral dresses during leisure time...",
                    img: "@/assets/images/profile-icon.jpg",
                },
                {
                    name: "Лемара",
                    lastname: "Ахбаева",
                    subtitle: "Make Up Artist & Beauty Expert",
                    text: "Эдна, я выбрала работу с тобой, потому что ты внимательна к деталям, очень хорошо чувствуешь...",
                    img: "@/assets/images/profile-icon.jpg",
                },
                {
                    name: "Дарья",
                    lastname: "Трофимова",
                    subtitle: "Психотерапевт",
                    text: "Хочу відзначити в тобі здатність показати та пояснити, що одяг — не просто функціональна тканина...",
                    img: "@/assets/images/profile-icon.jpg",
                },

            ]
        }
    ])

    // const doubleCount = computed(() => count.value * 2)
    // function increment() {
    //     count.value++
    // }


    function getFilterCard(dataName) {
        return cards.value.filter((item) => item.dataName === dataName)
    }

    return { cards, getFilterCard }
})