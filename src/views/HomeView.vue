<template>
  <main>
    <Header />
    <GreetingComp />
    <AboutComp ref="about" />
    <EnoughComp />
    <ApproachComp />
    <ServicesComp />
    <FeedbackComp />
    <ContactForm />
    <BlogComp />
    <Footer />
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue';
import GreetingComp from '@/components/GreetingComp.vue';
import EnoughComp from '@/components/EnoughComp.vue';
import ApproachComp from '@/components/ApproachComp.vue';
import AboutComp from '@/components/AboutComp.vue';
import ServicesComp from '@/components/ServicesComp.vue';
import Footer from '@/components/Footer.vue';
import FeedbackComp from '@/components/FeedbackComp.vue';
import ContactForm from '@/components/ContactForm.vue';
import BlogComp from '@/components/BlogComp.vue';


// import { ref } from "vue"
// import { useIntersectionObserver } from "@vueuse/core";
// const about = ref(null)

// const { stop } = useIntersectionObserver(
//   about,
//   ([{ isIntersecting, target }], observerElement) => {
//     if (isIntersecting) {
//       target.classList.add("--visible");
//     } else {
//       target.classList.remove("--visible");
//     }
//     observerElement.thresholds = .5
//   },
// )


</script>

<style scoped>
.--visible {
  background-color: red;
}
</style>
