<template>
  <div class="home">
    <h1>Events</h1>
    <section class="breadCrumbs">
      <router-link class="breadCrumbItem" to="/">Home</router-link>
      <p class="breadCrumbItem">/</p>
      <router-link class="breadCrumbItem" to="/events">Events</router-link>
    </section>
    <main>
      <section>
        <section class="events">
          <EventCardComp class="card"
            v-for="event in eventsStore.eventsArr"
            :key="event.id"
            :imgUrl="event.event.eventImgs[0].url"
            :imgTitle="event.event.mainEventComp.eventTitle"
            :title="event.event.mainEventComp.eventTitle"
            :intro="event.event.mainEventComp.eventTxtIntro"
            :location="
            event.event.sideEventText.eventPlaceTxt
            "
            :startDate="event.eventTime.eventStartD"
            :startHour="event.eventTime.eventStartH"
            :endDate="event.eventTime.eventEndD"
            :endHour="event.eventTime.eventEndH"
          />
        </section>
      </section>
    </main>
  </div>
</template>
<script>
import { useEventStore } from "@/stores/eventsStore";
import { mapStores } from "pinia";
import EventCardComp from "../components/eventCardComp.vue";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    EventCardComp,
  },
  computed: {
    ...mapStores(useEventStore),
  },
  methods: {},
  created() {
    this.eventsStore.getData();
  },
};
</script>
<style scoped>
main {
  margin: 150px 0;
}

main > section {
  margin: 150px 0;
}

.mainTxt {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0;
  height: 55px;
  width: 500px;
}

.moreArr {
  margin-top: 15px;
  margin-left: 500px;
  display: inline-block;
  color: var(--darkBlue);
}
.moreArr:hover {
  color: var(--blue);
}

.events {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card{
  margin: 20px;
}
</style>
