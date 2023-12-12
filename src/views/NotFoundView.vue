<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

window.setTimeout(function () {
    router.replace("/")
}, 1e4);
</script>
<template>
    <section class="not-found">
        <div class="not-found__container">
            <div class="not-found__wrapper">
                <div class="not-found-content">
                    <div class="not-found-body">
                        <h2>Page not found</h2>
                        <h4>Error: <span>404</span></h4>
                        <router-link to="/" class="link">Back to home</router-link>
                    </div>
                    <img class="not-found__img" src="@/assets//images/404.gif" alt="image 404">
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.not-found__container {
    padding: 0;
}

.not-found {
    font-family: sans-serif;
    background-color: #fff;
}

.not-found-content {
    padding: 40px 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr)
}

.not-found-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.not-found__img {
    width: 100%;
}

h1,
h2 {
    font-family: inherit;
    display: block;
    overflow: hidden;
}

span {
    color: red;
}

a {
    justify-self: flex-end;
    margin-top: auto;
    align-self: flex-start;
    padding: 4px;
}

@media(max-width: 768px) {
    .not-found-content {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: space-between;
    }

    a {
        margin-top: 40px;
    }
}
</style>