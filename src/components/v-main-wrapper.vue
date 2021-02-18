<template>
  <div id="v-main-wrapper">
    <p> {{ title }}</p>
  </div>
</template>

<script>

export default {
  name: 'v-main-wrapper',
  components: {},
  props: {},
  data() {
    return {
      title: "Main wrapper"
    }
  },
  computed: {},
  mounted() {
    console.log("Hello from main-wrapper")
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
