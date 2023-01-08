<template>
  <nav>
    <section class="navSect">
      <p class="navSectTitle">What's new</p>
      <ul class="navDropDown">
        <li><router-link to="/news&press">News & Press</router-link></li>
        <li><router-link to="/magazine">Members Magazine</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
      </ul>
    </section>
    <section class="navSect">
      <p class="navSectTitle">Association</p>
      <ul class="navDropDown">
        <li><router-link to="/membership">Membership</router-link></li>
        <li><router-link to="/network">Network</router-link></li>
      </ul>
    </section>
    <section class="navSect">
      <p class="navSectTitle">STF</p>
      <ul class="navDropDown">
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </section>

    <router-link to="/">Home</router-link> |
  </nav>
  <router-view />
</template>

<style>
:root {
  --darkBlue: #10069f;
  --darkBlue50: #10069f50;
  --darkBlue25: #10069f25;
  --blue: #6cace4;
  --blue50: #6cace450;
  --blue25: #6cace425;
  --green: #00dbc3;
  --green50: #00dbc350;
  --green25: #00dbc325;
  --yellow: #ffb549;
  --yellow50: #ffb54950;
  --yellow25: #ffb54925;
  --orange: #f56a54;
  --orange50: #f56a5450;
  --orange25: #f56a5425;
  --black: #2d2926;
  --black50: #2d292650;
  --black25: #2d292625;
  --white: #ffffff;
}
#app {
  font-family: "Calibir", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black);
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
  padding: 30px;
  display: flex;
}

nav a {
  font-weight: bold;
  color: var(--black);
  text-decoration: none;
  margin: 20px 20px;
  border-bottom: var(--blue) 2px solid;
  display: inline-block;
  transition: 0.2s ease-in;
}

nav a:hover{
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
  transition: 0.2s;
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
</style>
