<template>
  <div class="v-main-wrapper">
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'v-main-wrapper',
  components: {},
  props: {},
  data() {
    return {
      title: "Main wrapper"
    }
  },
  computed: {
    ...mapGetters([
      'ARTICLES',
      // 'SEARCH_VALUE',
    ]),
  },
  mounted() {
    this.sortedArticles = this.ARTICLES

  }

}
</script>

<style>
.v-main-wrapper {
  flex: 1 0 auto;
  background-color: #f7f7f7;
}
</style>
