<template>
  <div>
    <div class="cover" v-show="newsletter"></div>
    <article class="newsletterWindow" v-show="newsletter">
      <button class="closeBtn" @click="newsletter = !newsletter">x</button>
      <newsletterFormComp />
    </article>
    <div class="headerSvgMask headerWave"></div>
    <header>
      <section class="basicNav navPart">
        <router-link to="/" class="logoCont"
          ><img class="logo" src="@/assets/logo.svg" alt=""
        /></router-link>
        <nav>
          <section class="navSect">
            <p class="navSectTitle">What's new</p>
            <ul class="navDropDown">
              <li><router-link to="/news&press">News & Press</router-link></li>
              <li>
                <router-link to="/magazine/publications"
                  >Members Magazine</router-link
                >
              </li>
              <li><router-link to="/events">Events</router-link></li>
            </ul>
          </section>
          <section class="navSect">
            <p class="navSectTitle">Association</p>
            <ul class="navDropDown">
              <li>
                <router-link to="/membership/types">Membership</router-link>
              </li>
              <li><router-link to="/network">Network</router-link></li>
              <li><router-link to="/funds">Project Funds</router-link></li>
            </ul>
          </section>
          <section class="navSect">
            <p class="navSectTitle">STF</p>
            <ul class="navDropDown">
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </section>
        </nav>
      </section>
      <section class="addNav navPart">
        <buttonComp
          buttonText="Sign up to Newsletter"
          @click="newsletter = !newsletter"
        />
        <section class="navTopSo">
          <section class="soMeSect">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/spildevandsteknisk-forening/"
              ><i class="fa fa-linkedin-square SoMeIcon"></i
            ></a>
            <a
              target="_blank"
              href="https://www.facebook.com/spildevandstekniskforening"
            >
              <i class="fa fa-facebook-f SoMeIcon"></i
            ></a>
            <a
              target="_blank"
              href="https://www.instagram.com/spildevandstekniskforening/"
              ><i class="fa fa-instagram SoMeIcon"></i
            ></a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UC7WQiVsFaolRIiz7xdXnJlQ"
            >
              <i class="fa fa-youtube-play SoMeIcon"></i
            ></a>
          </section>
          <input
            type="text"
            placeholder="Search &#x1F50E;&#xFE0E; "
            id="searchBar"
          />
        </section>
      </section>
    </header>
    <router-view />

    <div class="wave svgMask"></div>
    <footer>
      <a href="header" class="arrTop"><i class="fa-solid fa-arrow-up"></i></a>
      <section class="footerContent">
        <section class="footerSect">
          <address>
            <p>
              <b>address:</b> <br />
              C/O Kasserer John Pies Christiansen <br />
              Sønderbyvej 9 <br />
              6510 Gram
            </p>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2272.0908519312306!2d9.047437316021417!3d55.286567035320495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b4e35aa7eb499%3A0x26d72d95f473388!2sSpildevandsteknisk%20Forening!5e0!3m2!1sen!2sdk!4v1673273927519!5m2!1sen!2sdk"
                width="200"
                height="150"
                style="border: 0"
                allowfullscreen="false"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p><b>tlf</b> <a href="tel:40489460">40489460</a></p>
            <p><b>email:</b> <a href="mailto:kr@stf.dk">kr@stf.dk</a></p>
            <p><b>CVR</b> 20561157</p>
            <router-link to="/"
              ><img class="Footerlogo" src="@/assets/logo.svg" alt=""
            /></router-link>
          </address>
        </section>
        <section class="footerSect">
          <router-link class="footerLink" to="/about">About STF</router-link>
          <router-link class="footerLink" to="/news&press"
            >Press & News</router-link
          >

          <router-link class="footerLink" to="/network">Network</router-link>

          <router-link class="footerLink" to="/events">Events</router-link>
          <router-link class="footerLink" to="/membership/types"
            >Membership</router-link
          >
          <router-link class="footerLink" to="/magazine/publications"
            >Members Magazine</router-link
          >
          <router-link class="footerLink" to="/contact">Contact Us</router-link>
          <router-link class="footerLink" to="/siteMap">Site Map</router-link>
          <router-link to="/privacy_policy" class="footerLink"
            >Privacy Policy</router-link
          >
        </section>
        <section class="footerSect">
          <newsletterFormComp />
          <section class="footerSoMe">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/spildevandsteknisk-forening/"
              ><i class="fa fa-linkedin-square SoMeIcon"></i
            ></a>
            <a
              target="_blank"
              href="https://www.facebook.com/spildevandstekniskforening"
            >
              <i class="fa fa-facebook-f SoMeIcon"></i
            ></a>
            <a
              target="_blank"
              href="https://www.instagram.com/spildevandstekniskforening/"
              ><i class="fa fa-instagram SoMeIcon"></i
            ></a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UC7WQiVsFaolRIiz7xdXnJlQ"
            >
              <i class="fa fa-youtube-play SoMeIcon"></i
            ></a>
          </section>
        </section>
      </section>
      <p class="copyright">
        Copyright &copy; 2023 by Spildevandsteknisk Forening. All Rights
        Reserved.
      </p>
    </footer>
  </div>
</template>
<script>
import newsletterFormComp from "@/components/newsletterComp.vue";
import buttonComp from "@/components/buttonComp.vue";
export default {
  name: "app",
  components: {
    newsletterFormComp,
    buttonComp,
  },
  data() {
    return {
      newsletter: false,
    };
  },
};
</script>
<style>
:root {
  --darkBlue: #10069f;
  --darkBlue50: #7887c3;
  --darkBlue25: #c5cbe6;
  --blue: #6cace4;
  --blue50: #aad7f0;
  --blue25: #ddeef9;
  --green: #00dbc3;
  --green50: #a0dfd1;
  --green25: #d9f2ec;
  --yellow: #ffb549;
  --yellow50: #ffd6a7;
  --yellow25: #ffeedb;
  --orange: #f56a54;
  --orange50: #ffb49d;
  --orange25: #ffe1d6;
  --black: #2d2926;
  --black50: #878584;
  --black25: #cac9c8;
  --white: #ffffff;
}
#app {
  font-family: "Calibir", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black);
}
h1 {
  font-size: 2rem;
}
.home {
  padding: 50px 350px;
}

.arrTop {
  position: fixed;
  z-index: 12;
  left: 94vw;
  top: 90vh;
  text-align: center;
  padding: 7px 0;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border-radius: 90px;
  background-color: var(--yellow);
  color: var(--black);
  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
}

.arrTop:hover {
  background-color: var(--orange);
}

form {
  display: flex;
  flex-direction: column;
  color: var(--black);
}

body {
  margin: 0;
}

.cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--black);
  opacity: 0.3;
  z-index: 15;
}

.closeBtn {
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  margin: 0 350px;
}
.closeBtn:hover {
  cursor: pointer;
}
.newsletterWindow {
  position: fixed;
  top: calc(50vh - 250px);
  left: calc(50vw - 250px);
  right: calc(50vw - 250px);
  height: 500px;
  width: 500px;
  z-index: 20;
  background-color: var(--yellow25);
  padding: 20px 60px;
  box-sizing: border-box;
}

.headerSvgMask {
  -webkit-mask-image: url(@/assets/svg/waveCurves.svg);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;

  mask-image: url(@/assets/svg/waveCurves.svg);
  mask-repeat: no-repeat;
  mask-size: cover;
}

.headerWave {
  background-color: var(--blue);
  height: 400px;
  width: 100%;
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 180px;
  z-index: 10;
  /* background-color: var(--white);*/
}

.basicNav {
  margin-left: 220px;
}

.addNav {
  margin-right: 250px;
  display: flex;
}

.logo {
  width: 200px;
}

.logoCont {
  display: flex;
  margin: 20px 50px;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}

nav {
  padding: 0 30px;
  display: flex;
}

.navSect {
  margin: 0 20px;
}

.navSect a,
.footerLink {
  color: var(--black);
  margin: 20px 20px;
  display: inline-block;
  transition: 0.2s ease-in;
}

.navSect a {
  text-decoration: none;
}
footer a {
  font-weight: bold;
  color: var(--black);
  font-weight: bold;
}

.footerLink:hover {
  color: var(--darkBlue);
}

nav a:hover {
  color: var(--blue);
  font-weight: bold;
  border-bottom: var(--blue) 2px solid;
}

nav a.router-link-exact-active {
  color: var(--blue);
}

.navDropDown {
  list-style-type: none;
  background-color: var(--blue25);
  position: relative;
  width: 183px;
  opacity: 0;
  z-index: -10;
  transition: 0.2s ease-in-out;
  height: 0;
}
.navSectTitle {
  font-weight: bold;
  text-align: center;
  width: 183px;
  transition: 0.2s ease-in-out;
}

.navSectTitle:hover {
  color: var(--darkBlue);
  cursor: pointer;
  border-bottom: var(--darkBlue) 2px solid;
}

.navSect:hover > .navDropDown {
  opacity: 1;
  z-index: 2;
  height: auto;
}

#searchBar {
  display: inline-flex;
  height: 30px;
  margin: 60px 20px;
  border: var(--blue) 2px solid;
  padding: 5px 20px;
  border-radius: 5px;
  width: 180px;
  box-sizing: border-box;
  justify-self: flex-end;
}

.btn {
  margin: 20px 20px 0 20px;
  background-color: var(--yellow);
  border-radius: 5px;
  color: var(--black);
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  width: 180px;
  height: 35px;
}

.btn:hover {
  background-color: var(--green);
  transition: 0.3s ease-in-out;
}

.soMeSect {
  margin: 20px 0 0 20px;
  width: 180px;
  display: flex;
  justify-content: space-between;
}

.SoMeIcon {
  font-size: 2rem;
}

.fa-linkedin-square {
  color: #0072b1;
}
.fa-facebook-f {
  color: #3b5998;
}
.fa-instagram {
  /*code starting from this line from: https://stackoverflow.com/questions/37751375/instagram-new-logo-css-background*/
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  /*copied code end*/

  border-radius: 7px;
  padding: 1px 3px;
  color: var(--white);
}
.fa-youtube-play {
  color: #ff0000;
}

.footerSect {
  display: flex;
  flex-direction: column;
}

footer {
  padding: 0px 250px 50px 250px;
  background-color: var(--blue);
}

.footerContent {
  display: flex;
  justify-content: space-around;
}

.svgMask {
  -webkit-mask-image: url(@/assets/svg/wave5.svg);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;

  mask-image: url(@/assets/svg/wave5.svg);
  mask-repeat: no-repeat;
  mask-size: cover;
}

.wave {
  background-color: var(--blue);
  height: 250px;
}

.copyright {
  text-align: center;
  margin: 80px 20px 20px 20px;
}

.map {
  width: 200px;
  height: 200px;
}

.Footerlogo {
  margin: 20px 0;
}

.breadCrumbs {
  display: flex;
}

.breadCrumbItem {
  color: var(--black);
  margin: 20px 5px;
  font-style: italic;
}

.footerSoMe {
  margin: 20px;
  width: 180px;
  display: flex;
  justify-content: space-between;
  place-self: center;
}
</style>
