<template>
  <div class="home">
    <h1>STF Networks</h1>
    <section class="breadCrumbs">
      <router-link class="breadCrumbItem" to="/">Home</router-link>
      <p class="breadCrumbItem">/</p>
      <router-link class="breadCrumbItem" to="/network">Network</router-link>
    </section>
    <main>
      <section>
        <section class="network">
          <networkComp
            v-for="network in networksStore.networksArr"
            :key="network.id"
            :imgUrl="network.mainImg.url"
            :imgTitle="network.networkName"
            :headline="network.networkName"
            :intro="network.networkIntro"
          />
        </section>
      </section>
    </main>
  </div>
</template>
<script>
import networkComp from "@/components/networkComp.vue";

import { useImgStore } from "@/stores/imgsStore";
import { useNetworkStore } from "@/stores/networkStore";

import { mapStores } from "pinia";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    networkComp,
  },
  computed: {
    ...mapStores(useNetworkStore),
    ...mapStores(useImgStore),
  },
  methods: {},
  created() {
    this.networksStore.getData();
    this.imgsStore.getData();
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
.lastest {
  display: flex;
  justify-content: space-between;
}

.mainNews {
  width: 650px;
  height: 550px;
}
.mainNews img {
  width: 650px;
  height: 300px;
  object-fit: cover;
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

.network {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
