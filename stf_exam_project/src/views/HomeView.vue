<template>
  <div class="home">
    <section
      class="card"
      v-for="event in eventsStore.eventsArr.data.sTFevents"
      :key="event.id"
    >
    <!-- {{ event }} -->
      <p><b>Title:</b> {{ event.mainEventComp.eventTitle }}</p>
      <p><b>Intro:</b> {{ event.mainEventComp.eventTxtIntro }}</p>
      <p><b>Text:</b></p>
      <section v-for="paragraph in event.mainEventComp.eventMainTxt" :key="paragraph.id">
        <p>{{paragraph.markdown}}</p>
      </section>
      <p v-if="event.sideEventText.eventFree"><b>event is free</b></p>
      <p v-else><b>event price:</b> {{ event.sideEventText.eventPrice }}dkk</p>
    </section>
    <section
      class="card"
      v-for="network in networksStore.networksArr.data.stfNetworks"
      :key="network.id"
    >
      <p><b>Title:</b> {{ network.networkName }}</p>
      <p><b>Intro:</b> {{ network.networkIntro }}</p>
    </section>

    <section
      class="card"
      v-for="magazine in magazinesStore.magazinesArr.data.membersMagazines"
      :key="magazine.id"
    >
      <p><b>Title:</b> {{ magazine.magazineTitle }}</p>
      <img
        class="cover"
        :src="magazine.magazineCover.url"
        :alt="magazine.magazineTitle"
      />
      <a target="_blank" :href="magazine.magazineLink" class="btn">read</a>
      <a class="btn" href="#">download</a>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { useEventStore } from "@/stores/eventsStore";
import { useNetworkStore } from "@/stores/networkStore";
import { useMagazineStore } from "@/stores/magazineStore";
import { mapStores } from "pinia";

export default {
  name: "HomeView",
  components: {},
  computed: {
    ...mapStores(useEventStore),
    ...mapStores(useNetworkStore),
    ...mapStores(useMagazineStore),
  },
  created() {
    this.eventsStore.getData();
    this.networksStore.getData();
    this.magazinesStore.getData();
  },
};
</script>
<style scoped>
p {
  text-align: left;
}

.card {
  height: auto;
  width: 300px;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  margin: 50px;
  background-color: rgb(248, 247, 246);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2);
}

.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.cover {
  margin: 20px;
  max-width: 100px;
}

.btn {
  margin: 20px;
  color: black;
}

.btn::hover {
  color: rgb(202, 149, 252);
}
</style>
