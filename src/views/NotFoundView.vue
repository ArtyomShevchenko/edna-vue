<script setup>

window.setTimeout(function () {
    window.location = window.location.origin
}, 1000);

console.log(window.location.origin)
</script>
<template>
    <section class="not-found">
        <div class="not-found__container">
            <div class="not-found__wrapper">
                <div class="not-found-content">
                    <router-link to="/" class="link">

                        Back to home

                    </router-link>
                    <div class="not-found-body">
                        <h1>Page not found</h1>
                        <h2>Error: <span>404</span></h2>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.not-found {
    font-family: sans-serif;
}

.not-found-content {
    display: flex;
    flex-direction: column;
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

.link {
    align-self: flex-end
}
</style>