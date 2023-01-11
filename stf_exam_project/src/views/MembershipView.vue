<template>
  <div class="home">
    <section class="breadCrumbs">
      <router-link class="breadCrumbItem" to="/">Home</router-link>
      <p class="breadCrumbItem">/</p>
      <router-link class="breadCrumbItem" to="/membership/types"
        >Membership</router-link
      >
    </section>
    <nav class="navTabs">
      <router-link
        @click="changePage('types')"
        class="navTabsItem"
        to="/membership/types"
        >Membership types</router-link
      >
      <router-link
        @click="changePage('form')"
        class="navTabsItem"
        to="/membership/form"
        >Registration form</router-link
      >
      <router-link
        @click="changePage('list')"
        class="navTabsItem"
        to="/membership/list"
        >List of members (companies)</router-link
      >
    </nav>
    <main>
      <section v-show="pageId === 'types'" class="types main">
        <section>
          <h1>Membership at Spildevandsteknisk Forening</h1>
          <p class="intro">
            Technical Association A distinction is made between active and
            passive memberships, and a distinction is made between personal and
            collective memberships
          </p>
          <section clqss="mainTextSection">
            <section class="aboutSectTxt">
              <h3>Active members</h3>
              <p>
                All employees who have to do with waste water treatment can be
                admitted as active members. This applies regardless of whether
                the waste water is treated via the utilities, the state or
                industry. The supply companies typically have a collective
                membership that covers all employees in the supply company.
                Personal memberships can also be taken out.
              </p>
            </section>
            <section class="aboutSectTxt">
              <h3>Passive members</h3>
              <p>
                Anyone who provides advice, service or technical equipment for
                waste water plants can be admitted as passive members. In
                addition, anyone who, at the board's discretion, has a natural
                connection to the association's work, can be admitted as a
                passive member. Personal memberships or collective memberships
                applicable to the entire company can be taken out. (For very
                large companies, it may be relevant to take out several
                collective memberships or a collective supplemented with a
                number of personal memberships in order to get the desired
                number of magazines and to be able to participate in the
                association's events with the desired number of people).
              </p>
            </section>
            <section class="aboutSectTxt">
              <h3>Pensioners</h3>
              <p>
                Personal active members who retire or go on early retirement
                can, in principle, be dues-free members for five years after
                leaving active service.
              </p>
            </section>
            <section class="aboutSectTxt">
              <h3>Quota rates 2022</h3>
              <p>
                A personal membership entitles you to a copy of the membership
                magazine Spildevand with each publication. A company membership
                includes a maximum of four copies of the membership magazine
                Spildevand, which can be sent to different addresses or
                individuals as desired. A utility membership includes the
                "required number" of copies of the membership magazine
                Wastewater, which can be sent to different addresses or
                individuals as desired.
              </p>
            </section>
            <section class="aboutSectTxt">
              <h3>Prices</h3>
              <table id="prices">
                <tr>
                  <th>Membership type</th>
                  <th>Price / year</th>
                </tr>
                <tr>
                  <td>Personal membership</td>
                  <td>DKK150</td>
                </tr>
                <tr>
                  <td>Company membership</td>
                  <td>DKK1.000</td>
                </tr>
                <tr>
                  <td>Supplier membership (0 - 10.000 inhabitants)</td>
                  <td>DKK1.000</td>
                </tr>
                <tr>
                  <td>Supplier membership (0 - 20.000 inhabitants)</td>
                  <td>DKK1.400</td>
                </tr>
                <tr>
                  <td>Supplier membership (20.001 - 30.000 inhabitants)</td>
                  <td>DKK1.800</td>
                </tr>
                <tr>
                  <td>Supplier membership (30.001 - 40.000 inhabitants)</td>
                  <td>DKK2.200</td>
                </tr>
                <tr>
                  <td>Supplier membership (40.001 - 50.000 inhabitants)</td>
                  <td>2.600</td>
                </tr>
                <tr>
                  <td>Supplier membership (50.001 - 75.000 inhabitants)</td>
                  <td>3.000</td>
                </tr>
                <tr>
                  <td>Supplier membership (75.001 - 100.000 inhabitants)</td>
                  <td>3.400</td>
                </tr>
                <tr>
                  <td>Supplier membership (100.000 > inhabitants)</td>
                  <td>3.800</td>
                </tr>
              </table>
            </section>
          </section>
        </section>

        <div>
          <p class="txtSide V">membership types</p>
        </div>
      </section>
      <section v-show="pageId === 'form'" class="form">
        <section class="main">
          <section>
            <h1>How to become a member</h1>
            <p class="intro">
              STF needs a few details about you, the company or the utility
              company so that membership can be taken out.In connection with
              establishing membership, STF needs the following information:
            </p>
            <section class="mainTextSection">
              <section class="aboutSectTxt">
                <ul>
                  <li>CVR number (applies to companies and suppliers)</li>
                  <li>
                    Postal address information information about electronic
                    sending address for invoice (email address or EAN number)
                  </li>
                  <li>
                    Desired number of copies of the membership magazine
                    Spildevand as well as shipping address and possibly
                    attention for the member magazines (applies to companies and
                    suppliers)
                  </li>
                </ul>
              </section>
              <section class="aboutSectTxt">
                <p>
                  In addition, STF encourages a tick to be placed at the end of
                  the form for acceptance of relevant newsletters from the
                  association. In addition, Spildevandsteknisk Forening's
                  privacy policy must be accepted. You can read it
                  <router-link to="/privacy_policy">here</router-link>
                </p>
                <a :href="imgsStore.regForm.img.url"
                  ><b> Download the registration form</b></a
                >
              </section>
            </section>
          </section>
          <div>
            <p class="txtSide V">become a member</p>
          </div>
        </section>
      </section>
      <section v-show="pageId === 'list'" class="list">
        <section class="main">
          <section>
            <h1>List of member companies</h1>
            <section class="listMain">
              <section
                v-for="company in companiesStore.companiesArr"
                :key="company.id"
              >
                <div>
                  <img
                    :src="imgsStore.logo.img.url"
                    :alt="company.companyName"
                  />
                  <a :href="company.companyLink" target="_blank">{{
                    company.companyName
                  }}</a>
                </div>
              </section>
            </section>
          </section>
          <div>
            <p class="txtSide V">list of members</p>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>
<script>
// @ is an alias to /src

import { useCompanyStore } from "@/stores/companyStore";
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
    ...mapStores(useCompanyStore),
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
    this.imgsStore.getData();
    this.companiesStore.getData();
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
.H {
  text-align: right;
}

nav {
  margin-bottom: 100px;
}

table {
  width: 100%;
}
tr:nth-child(odd) {
  background-color: var(--yellow25);
}
td {
  padding: 10px;
}
th {
  background-color: var(--yellow50);
  padding: 10px;
}
ul {
  margin: 50px;
}

.listMain{
  display: flex;
  flex-wrap: wrap;
}

.listMain section{
  width: 250px;
  margin: 20px;
  text-align: center;
}
</style>
