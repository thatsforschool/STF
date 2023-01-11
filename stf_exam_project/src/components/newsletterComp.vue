<template>
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
    <input class="formItem" type="text" name="fName" placeholder="first name" />
    <label class="formItem" for="lName">Last Name</label>
    <input class="formItem" type="text" name="lName" placeholder="Last Name" />
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
</template>
<script>
export default {
  name: "newsletterFormComp",
  props: {
  },
};
</script>
<style scoped>
form {
  width: 380px;
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
</style>
