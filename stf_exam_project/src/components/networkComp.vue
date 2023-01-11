<template>
  <section>
    <article>
      <img :src="imgUrl" :alt="imgTitle" />
      <h3>{{ headline }}</h3>
      <p class="intro">{{ intro }}</p>
    </article>
    <router-link class="moreArr" to="/news&press"
      >Read more <i class="fa-solid fa-arrow-right"></i>
    </router-link>
  </section>
</template>
<script>
export default {
  name: "networkComp",
  props: {
    imgUrl: String,
    imgTitle: String,
    headline: String,
    intro: String,
  },
};
</script>
<style scoped>
section{
    margin: 20px;
}
article {
  width: 300px;
  height: 450px;
}
img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
h3 {
  margin: 30px 0;
}

.moreArr {
  margin-left: 200px;
  display: inline-block;
  color: var(--darkBlue);
}
.moreArr:hover {
  color: var(--blue);
}

.intro {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  width: 300px;
  height: 55px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
