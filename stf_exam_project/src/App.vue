<template>
  <div>
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
                <router-link to="/magazine">Members Magazine</router-link>
              </li>
              <li><router-link to="/events">Events</router-link></li>
            </ul>
          </section>
          <section class="navSect">
            <p class="navSectTitle">Association</p>
            <ul class="navDropDown">
              <li><router-link to="/membership">Membership</router-link></li>
              <li><router-link to="/network">Network</router-link></li>
              <li>project funds</li>
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
        <button class="newsletter btn">Sign up to Newsletter</button>

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
    <a href="header" class="arrTop">&#x2191;</a>
    <div class="wave svgMask"></div>
    <footer>
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
          <router-link class="footerLink" to="/press&news"
            >Press & News</router-link
          >
          <router-link class="footerLink" to="/events">Events</router-link>
          <router-link class="footerLink" to="/membership"
            >Membership</router-link
          >
          <router-link class="footerLink" to="/magazine"
            >Members Magazine</router-link
          >
          <router-link class="footerLink" to="/contact">Contact Us</router-link>
          <router-link class="footerLink" to="/siteMap">Site Map</router-link>
          <router-link to="/privacy_policy" class="footerLink"
            >Privacy Policy</router-link
          >
        </section>
        <section class="footerSect">
          <form action="#" class="newsletter">
            <h4 class="formItem">Newsletter</h4>
            <label class="formItem" for="email">Email Address</label>
            <input
              class="formItem"
              type="text"
              name="email"
              placeholder="email address"
            />
            <label class="formItem" for="fName">First Name</label>
            <input
              class="formItem"
              type="text"
              name="fName"
              placeholder="first name"
            />
            <label class="formItem" for="lName">Last Name</label>
            <input
              class="formItem"
              type="text"
              name="lName"
              placeholder="Last Name"
            />
            <div class="formItem radioBtn">
              <input type="checkbox" name="radioBtn" />
              <label for="radioBtn"
                >Yes, I accept Spildevandsteknisk Forening's <br />
                <router-link to="/privacy_policy" class="privacyNewsletter"
                  >privacy policy</router-link
                >
                *</label
              >
            </div>
            <button class="formItem btn">Submit</button>
          </form>
        </section>
      </section>
      <p class="copyright">
        Copyright &copy; 2023 by Spildevandsteknisk Forening. All Rights
        Reserved.
      </p>
    </footer>
  </div>
</template>

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

.arrTop {
  position: fixed;
  z-index: 12;
  left: 94vw;
  top: 90vh;
  padding: 0 20px;
  border-radius: 50px;
  background-color: var(--yellow);
  color: var(--black);
  font-size: 3rem;
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
  margin:0;
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
  width: 100vw;
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
  font-weight: bold;
  color: var(--black);
  margin: 20px 20px;
  display: inline-block;
  transition: 0.2s ease-in;
}

.navSect a {
  border-bottom: var(--blue) 2px solid;
  text-decoration: none;
}
footer a {
  font-weight: bold;
  color: var(--black);
}

.footerLink:hover {
  color: var(--darkBlue);
}

nav a:hover {
  color: var(--blue);
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
  border-bottom: var(--blue) 2px solid;
}

.navSectTitle:hover {
  color: var(--darkBlue);
  cursor: pointer;
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

.formItem {
  margin: 10px 20px;
}

form > input {
  padding: 10px;
  border: none;
}

form button {
  place-self: center;
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
</style>
