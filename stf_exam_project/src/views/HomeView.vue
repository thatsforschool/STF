<template>
  <div>
    <div class="cover" v-show="newsletter"></div>
    <article class="newsletterWindow" v-show="newsletter">
      <button class="closeBtn" @click="newsletter = !newsletter">x</button>
      <newsletterFormComp />
    </article>
    <article class="introduction">
      <section class="textSectionIntro introSectItem">
        <h1>Welcome to the wastewater industry community and STF</h1>
        <p>
          STF is the professional community of practitioners. It is in STF that
          we meet to share knowledge and exchange experience. It is in STF that
          you can find networks within your particular field of expertise. It is
          in STF that you get information from newsletters, the magazine
          Spildevand and from national annual meetings and 24-hour courses. It
          is at STF that you meet colleagues from near and far. Will you join?
        </p>
      </section>
      <img
        :src="imgsStore.heroImg.img.url"
        alt="hero image"
        class="imgSectionIntro svgBubblesMask introSectItem"
      />
    </article>
    <main class="home">
      <section class="newsSection mainSect">
        <article>
          <h2>Lastest News</h2>
          <newsArtComp
            :imgUrl="newsStore.sortedNewsArr[0].articleMainImage.url"
            :imgTitle="newsStore.sortedNewsArr[0].articleTitle"
            :headline="newsStore.sortedNewsArr[0].articleTitle"
            :intro="newsStore.sortedNewsArr[0].articleIntro"
            :publicationDate="newsStore.sortedNewsArr[0].publicationDate"
            :author="newsStore.sortedNewsArr[0].author"
          />
        </article>
        <article>
          <h2>Upcoming events</h2>
          <eventCardComp
            :imgUrl="eventsStore.closestEvent.event.eventImgs[0].url"
            :imgTitle="eventsStore.closestEvent.event.mainEventComp.eventTitle"
            :title="eventsStore.closestEvent.event.mainEventComp.eventTitle"
            :intro="eventsStore.closestEvent.event.mainEventComp.eventTxtIntro"
            :location="
              eventsStore.closestEvent.event.sideEventText.eventPlaceTxt
            "
            :startDate="eventsStore.closestEvent.eventTime.eventStartD"
            :startHour="eventsStore.closestEvent.eventTime.eventStartH"
            :endDate="eventsStore.closestEvent.eventTime.eventEndD"
            :endHour="eventsStore.closestEvent.eventTime.eventEndH"
          />
        </article>
      </section>
      <section class="newsletterSection blue">
        <div class="magazineDiv">
          <h2>Most recent issue of Spildevand</h2>
          <h3>{{ magazinesStore.lastestMagazine.magazineTitle }}</h3>
          <a :href="magazinesStore.lastestMagazine.magazineLink"
            ><img
              :src="magazinesStore.lastestMagazine.magazineCover.url"
              :alt="magazinesStore.lastestMagazine.magazineTitle"
          /></a>
          <p>
            <b>published at:</b>
            {{ magazinesStore.lastestMagazine.publicationDate }}
          </p>
        </div>
        <div class="newsletterDiv">
          <i class="fa-solid fa-envelope-open-text"></i>
          <h3>Sign up for STF newsletter</h3>
          <p>
            The best way to kep in touch and be informed of our lastest news and
            activities
          </p>
          <button-comp
            buttonText="Sign up to Newsletter"
            @click="newsletter = !newsletter"
            class="buttonNewsDiv"
          />
        </div>
      </section>
      <section class="mainSect">
        <h2>Press</h2>
        <div class="pressSection">
          <newsArtComp
            :imgUrl="newsStore.sortedPress[0].articleMainImage.url"
            :imgTitle="newsStore.sortedPress[0].articleTitle"
            :headline="newsStore.sortedPress[0].articleTitle"
            :intro="newsStore.sortedPress[0].articleIntro"
            :publicationDate="newsStore.sortedPress[0].publicationDate"
            :author="newsStore.sortedPress[0].author"
          />
          <newsArtComp
            :imgUrl="newsStore.sortedPress[1].articleMainImage.url"
            :imgTitle="newsStore.sortedPress[1].articleTitle"
            :headline="newsStore.sortedPress[1].articleTitle"
            :intro="newsStore.sortedPress[1].articleIntro"
            :publicationDate="newsStore.sortedPress[1].publicationDate"
            :author="newsStore.sortedPress[1].author"
          />
        </div>
      </section>
      <section class="networkingSection blue mainSect">
        <div class="netImgDiv">
          <img
            :src="imgsStore.networkingImg[1].img.url"
            :alt="imgsStore.networkingImg[1].imgId"
            class="netFrontImgs secImg"
          />
          <img
            :src="imgsStore.networkingImg[0].img.url"
            :alt="imgsStore.networkingImg[0].imgId"
            class="mainImg netFrontImgs"
          />
        </div>
        <div class="txtDiv">
          <h2>Join STF's professional communities and networks</h2>
          <section class="iconSect">
            <div class="iconNetDiv">
              <i class="fa-solid fa-users"></i>
              <p>1500</p>
              <p>Members</p>
            </div>
            <div class="iconNetDiv">
              <i class="fa-solid fa-circle-nodes"></i>
              <p>8</p>
              <p>Groups</p>
            </div>
            <div class="iconNetDiv">
              <i class="fa-regular fa-lightbulb"></i>
              <p>+200</p>
              <p>Studies</p>
            </div>
          </section>
          <p>
            STF facilities a number of subject-specific networks. Whether you
            like to tinker with digesters, micropollution, bacteria & sludge,
            inhibition, working environment, SRO facilities or work with
            industrial facilities, STF has the network just for you.
          </p>
          <router-link to="/network" class="networkLinkSect"
            >learn more about networking <i class="fa-solid fa-arrow-right"></i
          ></router-link>
        </div>
      </section>
      <section class="projectSection mainSect">
        <div class="txtDivFunds">
          <h2>Project funds</h2>
          <p>
            Do you have the will for knowledge? Get STF support and share it
            with the whole industry! Do you have a great project that will
            benefit the entire wastewater industry? One that can create new
            knowledge and reach many of STF's members? Then STF would like to
            support you with funds from the Activity pool.
          </p>
          <router-link to="/funds"
            >Read more about how you apply here
            <i class="fa-solid fa-arrow-right"></i
          ></router-link>
        </div>
        <div class="imgDivFunds">
          <img
            :src="imgsStore.fundsImg[0].img.url"
            :alt="imgsStore.fundsImg[0].imgId"
            class="fundsImg"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import newsArtComp from "@/components/newsArtComp.vue";
import eventCardComp from "@/components/eventCardComp.vue";

import { useImgStore } from "@/stores/imgsStore";
import { useNewsStore } from "@/stores/newsStore";
import { useEventStore } from "@/stores/eventsStore";
import { useNetworkStore } from "@/stores/networkStore";
import { useMagazineStore } from "@/stores/magazineStore";
import { mapStores } from "pinia";
import ButtonComp from "../components/buttonComp.vue";
import newsletterFormComp from "../components/newsletterComp.vue";

export default {
  name: "HomeView",
  data() {
    return {
      newsletter: false,
    };
  },
  components: {
    newsArtComp,
    eventCardComp,
    ButtonComp,
    newsletterFormComp,
  },
  computed: {
    ...mapStores(useEventStore),
    ...mapStores(useNetworkStore),
    ...mapStores(useMagazineStore),
    ...mapStores(useNewsStore),
    ...mapStores(useImgStore),
  },
  methods: {},
  created() {
    this.eventsStore.getData();
    this.networksStore.getData();
    this.magazinesStore.getData();
    this.newsStore.getData();
    this.imgsStore.getData();
  },
};
</script>
<style scoped>
p {
  text-align: left;
}

.home {
  padding: 50px 350px;
}

.btn::hover {
  color: rgb(202, 149, 252);
}

.mainSect {
  margin: 150px 0;
}
.mainSect > h2 {
  margin: 50px;
}

.newsSection,
.pressSection,
.networkingSection,
.iconSect,
.netImgDiv,
.projectSection {
  display: flex;
  justify-content: space-around;
}

.introduction {
  display: flex;
  justify-content: space-between;
}

.blue {
  background-color: var(--blue25);
}

.newsletterSection {
  box-sizing: border-box;
  padding: 50px 100px;
  display: flex;
  justify-content: space-between;
}
.magazineDiv img {
  max-width: 250px;
}
.magazineDiv h3 {
  text-align: center;
}

.newsletterDiv {
  background-color: var(--green);
  margin: 100px 0;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
}

.newsletterDiv i {
  font-size: 6rem;
}
.buttonNewsDiv {
  margin: 0;
}
.netFrontImgs {
  width: 300px;
  height: 300px;
  object-fit: cover;
  position: relative;
}

.iconSect div {
  display: flex;
  flex-direction: column;
  background-color: var(--green);
  width: 100px;
  margin: 20px;
  text-align: center;
  justify-content: center;
  padding: 20px;
}

.iconSect p {
  text-align: center;
}
.iconSect i {
  font-size: 3rem;
}

.mainImg {
  top: 50px;
  left: -50px;
}

.secImg {
  top: 150px;
  z-index: 10;
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.4);
  left: 100px;
}

.txtDiv {
  width: 50%;
  padding: 50px;
}
.txtDiv > h2 {
  text-align: center;
}

.networkLinkSect {
  color: var(--darkBlue);
}
.networkLinkSect:hover {
  color: var(--blue);
}
.txtDivFunds {
  width: 60%;
  padding: 50px;
}

.svgBubblesMask {
  -webkit-mask-image: url(@/assets/svg/bubbles.svg);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: fit;

  mask-image: url(@/assets/svg/bubbles.svg);
  mask-repeat: no-repeat;
  mask-size: fit;
}

.textSectionIntro {
  height: 500px;
  width: 50%;
  box-sizing: border-box;
  padding: 100px 100px 100px 250px;
}

.imgSectionIntro {
  width: 45%;
  object-fit: cover;
  margin-right: 150px;
}


</style>
