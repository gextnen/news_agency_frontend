<template>
  <div class="v-main-wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'v-main-wrapper',
  components: {
  },
  props: {},
  data() {
    return {
        title: "Main wrapper"
    }
  },
  computed: {},
  mounted() {

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
}
.v-main-wrapper{
  flex:1 0 auto;
  background-color: #f7f7f7;
}
</style>
