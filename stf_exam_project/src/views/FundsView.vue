<template>
  <div class="home">
    <h1>Activity Pool</h1>
    <section class="breadCrumbs">
      <router-link class="breadCrumbItem" to="/">Home</router-link>
      <p class="breadCrumbItem">/</p>
      <router-link class="breadCrumbItem" to="/network">Network</router-link>
    </section>
    <section class="flex">
      <main>
        <h2>
          Do you have an exciting wastewater project that you would like to
          start? Get support from STF's activity pool and get on well.
        </h2>
        <p class="intro">
          On this page you can read what you have to do to apply for the funds
          and what requirements are made in connection with the application.
        </p>
        <section class="txtSect">
          <h3>Who can apply:</h3>
          <p>
            Only utility companies can stand as applicants (project holders) for
            funds from STF's activity pool. This means that if companies,
            research institutions or other collaboration partners participate in
            the project for which funds are sought, then these must appear in
            the application under the item "collaboration partner".
          </p>
        </section>
        <section class="txtSect">
          <h3>What can be applied for:</h3>
          <p>
            You can only apply for projects that benefit a broad section of the
            wastewater industry. Solo projects that only have a local purpose
            will not be supported. In connection with the assessment of received
            applications, there will also be a skeleton for whether the projects
            support the Wastewater Technical Association's purpose clause, which
            reads:
          </p>
          <ul>
            <li>to promote professional contact between members</li>
            <li>
              to further educate the members and staff at waste water plants.
            </li>
          </ul>
          <p>
            As projects are initiated, the project descriptions, in whole or in
            part, will be published here on the website.
          </p>
        </section>
        <section class="txtSect">
          <h3>What is required of the application :</h3>
          <p>
            The project applied for must be able to be described in very few
            words. In other words, the application must be short and precise,
            and therefore the application form is designed so that there is only
            room for very short descriptions and reasons. There is a total of
            space for approx. 1,200 estimates, divided into two text boxes.
          </p>
        </section>
        <section class="txtSect">
          <h3>Presentation and reporting:</h3>
          <p>
            The applicant (project holder) is obliged to, by further agreement,
            present project results or project status in Wastewater Technology
            Journal. In addition, the applicant may be invited to present the
            project at the next STF day course. The applicant (project holder)
            is also obliged to submit an account for the project.
          </p>
        </section>
      </main>
      <aside>
        <section class="txtSect">
          <h3>When can you apply:</h3>
          <p>
            STF's activity pool can be applied for on an ongoing basis. The
            board will, as far as is practically possible, take a position on
            received applications at the next board meeting.
          </p>
        </section>
        <section class="txtSect">
          <h3>Reservation:</h3>
          <p>
            The board reserves the right to obtain additional information
            regarding projects, as well as the application form and application
            procedure can be adapted if requirements from auditors or others
            make this necessary.
          </p>
        </section>
        <section class="txtSect">
          <h3>The application form:</h3>
          <p>
            application form is filled in by writing directly in the document's
            writing fields. Save the completed document with a new name.
            Afterwards send your document as an attached file to
            Spildevandsteknisk Forenings secretariat
            <a href="mailto:sek@stf.dk">sek@stf.dk</a>
          </p>
          <div class="links">
            <a :href="imgsStore.appForm.img.url"
              >You will find the application form here
              <i class="fa-solid fa-arrow-right"></i></a
            ><a :href="imgsStore.prevAct.img.url"
              >See a list of previously supported projects
              <i class="fa-solid fa-arrow-right"></i
            ></a>
          </div>
        </section>
      </aside>
    </section>
  </div>
</template>
<script>
// @ is an alias to /src

import { useImgStore } from "@/stores/imgsStore";
import { mapStores } from "pinia";

export default {
  name: "HomeView",
  data() {
    return {
      pageId: undefined,
    };
  },
  components: {},
  computed: {
    ...mapStores(useImgStore),
  },
  methods: {
    changePage(value) {
      this.pageId = value;
    },
  },
  created() {
    this.imgsStore.getData();
  },
};
</script>
<style scoped>
.privacy {
  margin: 50px 250px;
}

ul {
  margin: 20px 50px;
}

.flex {
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-template-rows: 1fr;
}

main {
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 0 50px 50px 0;
}
aside {
  grid-column: 2/3;
  grid-row: 1/2;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--green50);
}

h3 {
  margin: 40px 0 0 0;
}

.links {
  display: flex;
  flex-direction: column;
}
.links > a {
  font-weight: bold;
  margin: 20px 0;
  color: var(--black);
}
.links > a:hover {
  color: var(--darkBlue);
}
</style>
