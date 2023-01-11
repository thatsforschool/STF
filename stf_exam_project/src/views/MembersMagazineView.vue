<template>
  <div class="home">
    <section class="breadCrumbs">
      <router-link class="breadCrumbItem" to="/">Home</router-link>
      <p class="breadCrumbItem">/</p>
      <router-link class="breadCrumbItem" to="/magazine">Magazine</router-link>
    </section>
    <nav class="navTabs">
      <router-link
        @click="changePage('publications')"
        class="navTabsItem"
        to="/magazine/publications"
        >Publications</router-link
      >
      <router-link
        @click="changePage('contributions')"
        class="navTabsItem"
        to="/magazine/contributions"
        >Contribiutions</router-link
      >
      <router-link
        @click="changePage('about')"
        class="navTabsItem"
        to="/magazine/about"
        >About Spildevand</router-link
      >
    </nav>
    <main>
      <section v-show="pageId === 'publications'" class="publications">
        <section
          class="yearSet"
          v-for="year in magazinesStore.magazineYears"
          :key="year.id"
        >
          <h2>{{ year }}</h2>
          <div class="break"></div>
          <section class="magazinesDis">
            <magazineComp
              v-for="magazine in magazinesStore.sortedMagazinesArrr"
              :key="magazine.id"
              v-show="magazine.year === year"
              :headline="magazine.magazineTitle"
              :tema="magazine.tema"
              :publicationDate="magazine.publicationDate"
              :readLink="magazine.magazineLink"
              :downloadLink="magazine.magazineDownload.url"
            />
          </section>
        </section>
      </section>
      <section v-show="pageId === 'contributions'" class="contributions">
        <section class="main">
          <section class="mainTextsection">
            <h1>Contributions</h1>
          </section>
          <p class="txtSide V">contributions</p>

        </section>
      </section>
      <section v-show="pageId === 'about'" class="about">
        <section class="main">
          <section class="mainTextSection">
            <h1>About Spildevand</h1>
            <p class="aboutIntro">
              Wastewater is your membership magazine. The magazine delivers
              articles about new technology, new solutions and other exciting
              stories from an industry in rapid development. You can influence
              the content - contact the editors.
            </p>
            <section class="mainAboutTxt">
              <section class="aboutSectTxt">
                <h3>Purpose of Spildevand:</h3>
                <p>
                  Wastewater is to inform STF's members about new initiatives
                  within public and private waste water treatment. The magazine
                  refers and brings articles on specific topics within the
                  environmental sector. The aim is to promote the exchange of
                  operational experience between the members.
                </p>
              </section>
              <section class="aboutSectTxt">
                <h3>Wastewater target groups:</h3>
                <p>
                  Primarily operational and administrative staff at Danish
                  utilities as well as advisers and suppliers to the waste water
                  industry.
                </p>
              </section>
              <section class="aboutSectTxt">
                <h3>Do you have a story for Wastewater?</h3>
                <p>
                  The editors are always interested in hearing from you if you
                  have an idea for a good story. Contact editor Anna Klitgaard
                  at red@stf.dk.
                </p>
              </section>
            </section>

            <div>
              have any question? contact editor
              <b><a href="mailto:red@stf.dk" class="editorLink">here</a></b>
            </div>
          </section>
          <div>
            <p class="txtSide V">about spildevand</p>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>
<script>
// @ is an alias to /src
import magazineComp from "@/components/magazineComp.vue";

import { useImgStore } from "@/stores/imgsStore";
import { useMagazineStore } from "@/stores/magazineStore";
import { mapStores } from "pinia";

export default {
  name: "HomeView",
  data() {
    return {
      pageId: undefined,
    };
  },
  components: {
    magazineComp,
  },
  computed: {
    ...mapStores(useMagazineStore),
    ...mapStores(useImgStore),
    getPageId() {
      return this.$route.params.id;
    },
  },
  methods: {
    changePage(value) {
      this.pageId = value;
    },
  },
  created() {
    this.magazinesStore.getData();
    this.imgsStore.getData();
    this.pageId = this.getPageId;
  },
};
</script>
<style scoped>
.break {
  width: 100%;
  border-bottom: solid var(--blue) 2px;
}

.magazinesDis {
  display: flex;
  flex-wrap: wrap;
}

.yearSet {
  margin: 100px 0;
}

.navTabs {
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
.navTabsItem {
  width: 33%;
  background-color: var(--green);
  height: 60px;
  text-align: center;
  text-decoration: none;
  padding-top: 20px;
  box-sizing: border-box;
}

nav a.router-link-exact-active {
  color: var(--blue);
  background-color: var(--white);
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
}

.aboutIntro {
  margin: 50px 0;
}

.aboutSectTxt {
  margin: 20px 0px;
  padding: 20px;
  box-sizing: border-box;
  width: 33%;
}

.mainAboutTxt,
.main {
  display: flex;
  justify-content: space-between;
}

.txtSide {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 4rem;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--green50);
  color: var(--green25);
}

.V {
  writing-mode: vertical-lr;
  text-orientation: mixed;
  text-align: right;
  margin: 0 0 0 100px;
}
.H {
  text-align: right;
}

nav{
  margin-bottom: 100px;
}
</style>
