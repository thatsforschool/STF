<template>
  <div class="home">
    <section class="breadCrumbs">
      <router-link class="breadCrumbItem" to="/">Home</router-link>
      <p class="breadCrumbItem">/</p>
      <router-link class="breadCrumbItem" to="/network">Network</router-link>
    </section>
    <nav class="navTabs">
      <router-link
        @click="changePage('about')"
        class="navTabsItem"
        to="/contact/about"
        >About STF</router-link
      >
      <router-link
        @click="changePage('form')"
        class="navTabsItem"
        to="/contact/form"
        >Contact form</router-link
      >
      <router-link
        @click="changePage('staff')"
        class="navTabsItem"
        to="/contact/staff"
        >Staff</router-link
      >
    </nav>
    <main>
      <section v-show="pageId === 'form'" class="form">
        <section class="main">
          <section>
            <h1>Contact form</h1>
            <p>
              Get in Touch If you have any questions or need help, please fill
              out the form below. We do our best to respond within 1 business
              day.
            </p>
            <form action="#">
              <label for="name">Full name</label>
              <input type="text" placeholder="Name" name="Name" />
              <label for="">E-mail</label>
              <input type="text" placeholder="E-mail" name="email" />
              <label for="subject">Subject</label>
              <input type="text" placeholder="Subject" name="subject" />
              <label for="message">Message</label>
              <input type="textarea" placeholder="Message" name="message" />
              <buttonComp buttonText="submit" />
            </form>
          </section>
          <div>
            <p class="txtSide V">contact us</p>
          </div>
        </section>
      </section>
      <section v-show="pageId === 'about'" class="about">
        <section class="main">
          <section>
            <h1>About STF</h1>
            <p>
              Spildevandsteknisk Forening (abbreviated STF) is an association
              for everyone who has to do with wastewater treatment -
              practically, theoretically or as a supplier to the wastewater
              industry. The purpose of the association is to promote
              professional contact between the members and to contribute to the
              further training of the employees in the utilities.
            </p>
            <section>
              <p>
                The association distinguishes itself, among other things, by:
              </p>
              <ul>
                <li>
                  cooperation with all relevant parties in matters of wastewater
                  technical interest
                </li>
                <li>cooperation with providers of wastewater courses</li>
                <li>hold wastewater conferences and theme days</li>
                <li>hold an annual meeting with a large company exhibition</li>
                <li>
                  encourage local exchange of experience between the water and
                  utility companies' treatment plants
                </li>
                <li>
                  encourage the exchange of experience among groups with a
                  common work area
                </li>
                <li>
                  publish the member magazine Spildevand five times a year
                </li>
              </ul>
              <p>
                The association started small in 1972 and has since grown large.
                STF is represented in almost all of Denmark's utility companies,
                either through personal membership or through collective
                membership. Many employees of industrial companies with their
                own treatment plants have also found themselves at home in the
                association.
              </p>
            </section>
          </section>
          <div>
            <p class="txtSide V">About Association</p>
          </div>
        </section>
      </section>
      <section v-show="pageId === 'staff'" class="staff">
        <section class="main">
          <section>
            <h1>Staff of STF</h1>
            <section class="staffCards">
              <StaffCardComp
                v-for="membr in staffMembrsStore.membrsArr"
                :key="membr.id"
                :imgUrl="membr.photo.url"
                :name="membr.name"
                :email="membr.email"
                :phone="membr.phone"
                :position="membr.position"
              />
            </section>
          </section>
          <div>
            <p class="txtSide V">our staff</p>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>
<script>
import buttonComp from "../components/buttonComp.vue";
import StaffCardComp from "../components/staffCardComp.vue";
import { useStaffStore } from "@/stores/staffStore";
import { mapStores } from "pinia";
export default {
  name: "ContactView",
  data() {
    return {
      pageId: undefined,
    };
  },
  components: {
    buttonComp,
    StaffCardComp,
  },
  methods: {
    changePage(value) {
      this.pageId = value;
    },
  },
  computed: {
    ...mapStores(useStaffStore),
  },
  created() {
    this.staffMembrsStore.getData();
    this.pageId = this.getPageId;
  },
};
</script>

<style scoped>
main{
  margin: 100px 0;
}
form {
  width: 50%;
  margin: 50px 25%;
}
input {
  border: solid var(--black25) 1px;
  padding: 10px;
  margin: 20px 0;
}

button {
  place-self: center;
}

.break {
  width: 100%;
  border-bottom: solid var(--blue) 2px;
}

.magazinesDis,
.staffCards {
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
  box-sizing: border-box;
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

nav {
  margin-bottom: 100px;
}
ul {
  margin: 50px;
}
</style>
