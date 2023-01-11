<template>
  <button >{{ buttonText }}</button>
</template>
<script>
export default {
  name: "buttonComp",
  props: { buttonText: String },
};
</script>
<style scoped>
button {
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

button:hover {
  background-color: var(--green);
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
</style>
