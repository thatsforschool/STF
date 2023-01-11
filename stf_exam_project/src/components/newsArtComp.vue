<template>
  <section>
    <article>
      <img :src="imgUrl" :alt="imgTitle" />
      <h3>{{ headline }}</h3>
      <p class="intro">{{ intro }}</p>
      <p>{{ publicationDate }}</p>
      <address>
        <p>{{ author }}</p>
      </address>
    </article>
    <router-link class="moreArr" to="/news&press"
      >Read more <i class="fa-solid fa-arrow-right"></i>
    </router-link>
  </section>
</template>
<script>
export default {
  name: "newsArtComp",
  props: {
    imgUrl: String,
    imgTitle: String,
    headline: String,
    intro: String,
    publicationDate: String,
    author: String,
  },
};
</script>
<style scoped>
article {
  width: 500px;
  height: 550px;
}
img {
  width: 500px;
  height: 300px;
  object-fit: cover;
}
h3 {
  margin: 30px 0;
}

.moreArr {
  margin-left: 400px;
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
  width: 500px;
  height: 55px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
