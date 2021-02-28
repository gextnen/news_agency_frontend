<template>
  <div class="v-main-wrapper">
    <a>adsjnasjnkasnksad</a>
    <v-aggregator-news/>
  </div>
</template>

<script>
import vAggregatorNews from "@/components/v-catalog-news"
export default {
  name: 'v-main-wrapper',
  components: {
    vAggregatorNews,
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
}
</style>
