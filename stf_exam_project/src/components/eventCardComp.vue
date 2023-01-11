<template>
  <section>
    <article class="eventsSection">
      <img :src="imgUrl" :alt="imgTitle" />
      <h3>{{ title }}</h3>
      <p class="intro">{{ intro }}</p>
      <section>
        <div class="dateDiv">
          <p><b>Start Date:</b></p>
          <p>{{ startDate }}, kl {{ startHour }}</p>
        </div>
        <div class="dateDiv">
          <p><b>End Date:</b></p>
          <p>{{ endDate }}, kl {{ endHour }}</p>
        </div>
      </section>
      <address class="dateDiv">
        <p><b>Location:</b></p>
        <p>{{ location }}</p>
      </address>
    </article>
    <router-link class="moreArr" to="/events"
      >Read more <i class="fa-solid fa-arrow-right"></i>
    </router-link>
  </section>
</template>
<script>
export default {
  name: "eventCardComp",
  props: {
    imgUrl: String,
    imgTitle: String,
    title: String,
    intro: String,
    location: String,
    startDate: String,
    startHour: String,
    endDate: String,
    endHour: String,
  },
};
</script>
<style scoped>
article {
  width: 400px;
  height: 550px;
}
img {
  width: 400px;
  height: 250px;
  object-fit: cover;
}
h3 {
  margin: 30px 0;
}

.dateDiv {
  display: flex;
  justify-content: space-between;
}

.moreArr {
  margin-left: 300px;
  display: inline-block;
  color: var(--darkBlue);
}
.moreArr:hover {
  color: var(--blue);
}

.intro {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 400px;
  height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
