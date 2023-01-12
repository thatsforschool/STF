<template>
  <section>
    <article class="eventsSection">
      <img :src="imgUrl" :alt="name" />
      <h3>{{ name }}</h3>
      <p>{{ position }}</p>
      <div class="links">
        <a :href="`mailto:${email}`">{{ email }}</a>
        <a :href="`tel:${phone}`">{{ phone }}</a>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  name: "eventCardComp",
  props: {
    imgUrl: String,
    name: String,
    email: String,
    phone: String,
    position: String,
  },
};
</script>
<style scoped>
section{
  margin: 20px 10px;
}
article {
  width: 300px;
  height: 450px;
}
img {
  width: 300px;
  height: 250px;
  object-fit: cover;
}
h3 {
  margin: 30px 0;
}
.links {
  display: flex;
  flex-direction: column;
}
.links > a {
  color: var(--black);
  margin: 10px 0;
}
.links > a:hover {
  color: var(--blue);
}
</style>
