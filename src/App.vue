<template>
  <div id="app" class="main">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <v-header/>
      <v-main-wrapper/>
      <v-footer/>
    </div>
    <router-view/>
  </div>
</template>



<script>
import vMainWrapper from './components/v-main-wrapper'
import vHeader from './components/v-header'
import vFooter from './components/v-footer'

export default {
  name: 'App',
  components: {
    vHeader,
    vMainWrapper,
    vFooter,
  }
}
</script>

<style>

body{
  height: 100%;
}
#app {
  font-family: Gost,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin: 0;
}
.main{
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>

<!--<style lang="scss">-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--#nav {-->
<!--  padding: 30px;-->

<!--  a {-->
<!--    font-weight: bold;-->
<!--    color: #2c3e50;-->

<!--    &.router-link-exact-active {-->
<!--      color: #42b983;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
