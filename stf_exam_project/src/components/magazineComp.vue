<template>
  <section class="container">
    <article>
      <h3>{{ headline }}</h3>
      <p>{{ publicationDate }}</p>
      <p class="tema">{{ tema }}</p>
    </article>
    <div class="links">
      <a class="moreArr" :href="readLink"
        >Read <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a :download="downloadLink" class="moreArr" :href="downloadLink"
        >Download <i class="fa-solid fa-download"></i>
      </a>
    </div>
  </section>
</template>
<script>
export default {
  name: "magazineComp",
  props: {
    headline: String,
    tema: String,
    publicationDate: String,
    readLink: String,
    downloadLink: String,
  },
};
</script>
<style scoped>
.container {
  width: 250px;
  height: 250px;
  margin: 50px 25px;
}

h3 {
  margin: 30px 0;
}

.moreArr {
  margin-top: 20px;
  display: inline-block;
  color: var(--darkBlue);
}
.moreArr:hover {
  color: var(--blue);
}

.links {
  display: flex;
  justify-content: space-between;
}

.tema{
  height: 100px;
}
</style>
