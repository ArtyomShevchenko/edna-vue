export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/views/HomeView.vue")
    }, {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/BlogView.vue')
    }, {
        path: "/contact",
        name: "Contact",
        component: () => import("@/views/ContactVue.vue")
    }, {
        path: "/about",
        name: "About",
        component: () => import("@/views/AboutView.vue")
    }, {
        path: "/approach",
        name: "Approach",
        component: () => import("@/views/ApproachView.vue")
    }, {
    }, {
        path: "/testimonials",
        name: "Testimonials",
        component: () => import("@/views/TestimonialsView.vue"),
        // beforeEnter: (to, from) => {
        //     console.log(to, from)
        //     setTimeout(() => {
        //         document.body.style.background = "#c0c0c0"
        //     }, 1000)
        // }
    }, {
    }, {
        path: "/fashion",
        name: "Fashion",
        component: import("@/views/FashionStylingView.vue"),
        meta: {
            name: "Artyom",
            lastName: "Puida",
            yearBirthday: 1987,
            dayBirthday: 2,
            mounthBirthday: "january"
        },
    }, {
        path: "/services",
        name: "Service",
        component: () => import("@/views/ServicesView.vue"),
        children: [{
            path: "guided-shopping",
            name: "GuidedShopping",
            component: () => import("@/components/CardGuidedShopping.vue"),
        }, {
            path: "style-session",
            name: "StyleSession",
            component: () => import("@/components/CardStyleSession.vue"),
        }, {
            path: "wardrobe-edit",
            name: "WardrobeEdit",
            component: () => import("@/components/CardWardrobeEdit.vue"),
        }, {
            path: "/services/special-styling",
            name: "SpecialStyling",
            component: () => import("@/components/CardSpecialStyling.vue"),
        }]
    }, {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import("@/views/NotFoundView.vue")
    },
]