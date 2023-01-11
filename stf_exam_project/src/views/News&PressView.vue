<template>
  <div class="home">
    <h1>News & Press</h1>
    <section class="breadCrumbs">
      <router-link class="breadCrumbItem" to="/">Home</router-link>
      <p class="breadCrumbItem">/</p>
      <router-link class="breadCrumbItem" to="/news&press"
        >News & Press</router-link
      >
    </section>
    <main>
      <section class="lastest">
        <div class="mainNews">
          <img
            :src="newsStore.sortedNewsArr[0].articleMainImage.url"
            :alt="newsStore.sortedNewsArr[0].articleTitle"
          />
          <h2>{{ newsStore.sortedNewsArr[0].articleTitle }}</h2>
          <p class="intro">{{ newsStore.sortedNewsArr[0].articleIntro }}</p>
          <div
            class="mainTxt"
            v-for="section in newsStore.sortedNewsArr[0].mainText"
            :key="section.id"
          >
            <div v-for="text in section.raw.children" :key="text.id">
              <div v-show="text.type === `paragraph`" class="mainTxt">
                <div v-for="textIn in text.children" :key="textIn.id">
                  <p>{{ textIn.text }}</p>
                  <a
                    :href="textIn.href"
                    v-for="textLi in textIn.children"
                    :key="textLi.id"
                    >{{ textLi.text }}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <router-link class="moreArr" to="/news&press"
            >Read more <i class="fa-solid fa-arrow-right"></i>
          </router-link>
        </div>
        <div class="sideNews">
          <newsArtComp
            class="sideNews"
            :imgUrl="newsStore.sortedNewsArr[1].articleMainImage.url"
            :imgTitle="newsStore.sortedNewsArr[1].articleTitle"
            :headline="newsStore.sortedNewsArr[1].articleTitle"
            :intro="newsStore.sortedNewsArr[1].articleIntro"
            :publicationDate="newsStore.sortedNewsArr[1].publicationDate"
            :author="newsStore.sortedNewsArr[1].author"
          />
        </div>
      </section>
      <section
        class="newsRest"
        v-for="news in newsStore.restNewsArt"
        :key="news.id"
      >
        <newsArtComp
          :imgUrl="news.articleMainImage.url"
          :imgTitle="news.articleTitle"
          :headline="news.articleTitle"
          :intro="news.articleIntro"
          :publicationDate="news.publicationDate"
          :author="news.author"
        />
      </section>
      <section>
        <h2>Press</h2>
        <section class="press">
          <newsArtComp
            v-for="press in newsStore.sortedPress"
            :key="press.id"
            :imgUrl="press.articleMainImage.url"
            :imgTitle="press.articleTitle"
            :headline="press.articleTitle"
            :intro="press.articleIntro"
            :publicationDate="press.publicationDate"
            :author="press.author"
          />
        </section>
      </section>
      <section>
        <h2>Videos</h2>
        <section class="videos">
          <video-comp
            v-for="video in newsStore.sortedVideos"
            :key="video.id"
            :videoLink="video.link"
            :headline="video.articleTitle"
            :intro="video.articleIntro"
            :publicationDate="video.publicationDate"
            :author="video.author"
          />
        </section>
      </section>
    </main>
  </div>
</template>
<script>
import newsArtComp from "@/components/newsArtComp.vue";

import { useImgStore } from "@/stores/imgsStore";
import { useNewsStore } from "@/stores/newsStore";

import { mapStores } from "pinia";
import VideoComp from "../components/videoComp.vue";

export default {
  name: "HomeView",
  data() {
    return {
      newsletter: false,
    };
  },
  components: {
    newsArtComp,
    VideoComp,
  },
  computed: {
    ...mapStores(useNewsStore),
    ...mapStores(useImgStore),
  },
  methods: {},
  created() {
    this.newsStore.getData();
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

.newsRest,
.press,
.videos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
