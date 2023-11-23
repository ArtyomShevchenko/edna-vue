<script setup>
// import img1 from "@/assets/images/img_1.jpg"
// const img1 = new URL('@/assets/images/img_1.jpg', import.meta.url).href
function getImageUrl(name, ext) {
  return new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
}
</script>

<template>
  <main>
    <div class="greeting">
      <div class="container">
        <div class="wrapper">
          <section>
            <div class="img-container">
              <img :src="getImageUrl('img_1', 'jpg')" alt="Girl">
            </div>
            <div class="content">
              <h2>I help high value woman manifest themselves through style.</h2>
              <button>book now</button>
            </div>
          </section>
        </div>
      </div>
    </div>

    <div class="about">
      <div class="container">
        <div class="wrapper">
          <section>
            <div class="content">
              <h3>about</h3>
              <div>
                <p>
                  Welcome,
                </p>

                <p>
                  I’m Edna Shindinde, personal style advisor & wardrobe editor.
                </p>

                <p>
                  I help women embrace their value by teaching how to build a staple wardrobe in line with their inner
                  power and beauty.
                </p>
                <p>
                  The greatest flair of mine is to see talent and strength behind every woman I meet. Whether you build a
                  career, take care of a family, own a business or enjoy life by your rules – you are a high-value woman.
                  You set a precedent & should own it proudly!
                </p>
                <p>
                  My vision is for each women to unblushingly celebrate her beauty, to be seen and respected without
                  doubting own looks. Styling is just one way to achieve that. And I couldn’t ask for a better mission, as
                  to guide you on this journey.
                </p>
              </div>
              <div class="links">
                <RouterLink to="/services">Services</RouterLink>
                <RouterLink to="/testimotional">TESTIMONIALS</RouterLink>
                <RouterLink to="/book">Book</RouterLink>
              </div>
            </div>

            <div class="img-container img_stretch">
              <img class="img_stretch" :src="getImageUrl('img_2', 'jpg')" alt="Girl">
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  overflow: hidden;
}

section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  gap: 16px;
}

.img-container {
  width: 50%;
  max-height: 587px;
  overflow: hidden;
}

.img-container img {
  display: block;
  margin: 0 auto;
  max-width: 407px;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.content {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 80px;
}

/* top-block (greeting) & query */
.content button {
  align-self: flex-end
}

@media (max-width: 768px) {
  .greeting section {
    display: block;
  }

  .greeting h2 {
  }

  .greeting .img-container,
  .greeting .content {
    width: 100%;
  }

  .greeting .img-container {
    float: right;
    width: 50%;
    height: 50%;
    shape-outside: margin-box;
    background-color: Green;
    color: white;
    margin-bottom: 40px;
    margin-left: 10px;
  }

  .greeting .img-container img {
    width: 100%;
    height: 100%;
    object-position: top;
    object-fit: cover;
  }

  .greeting .content {
    display: block;
    width: 100%;
    padding-top: 200px;
    padding-bottom: 40px;
  }

  .greeting button {
    padding-left: 10px;
    padding-right: 10px;
    width: 90%;
    align-self: center;
    margin: 40px auto 0px;
  }
}

@media (max-width: 550px) {
  .greeting .img-container {
    float: right;
    width: 50%;
    height: 50%;
    shape-outside: margin-box;
    background-color: Green;
    color: white;
    margin-bottom: 0;
  }
}


/* about style & query */
.about .container {
  padding: 80px 0;
}

.about .content {
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding-top: 16px;
  padding-right: 15%;
}

.about .content p {
  margin-bottom: 10px;
}

.about .content .links {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.about .img-container {
  background-color: gray;
  height: 466px;
}

.about .img-container img {
  position: absolute;
  top: 0;
  object-position: left top;
  width: 60%;
  max-width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .about .container {
    padding: 0;
  }

  .about section {
    flex-direction: column-reverse;
  }

  .about .content {
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
  }
}

/* approach & query */
</style>
