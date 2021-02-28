<template>
  <main class="container">
    <section class="section-grid__row">
      <section class="section-main-news">
          <div class="v-catalog-news">
            <div class="v-catalog-news__list">
              <v-news-item
                  v-for = "article in ARTICLES"
                  :key ="article.id"
                  :article_data = "article"
              />
              <v-news-item
                  v-for = "article in ARTICLES"
                  :key ="article.id"
                  :article_data = "article"
              />
              <v-news-item
                  v-for = "article in ARTICLES"
                  :key ="article.id"
                  :article_data = "article"
              />
            </div>

          </div>
      </section>
      <section class="section-news-right">
      </section>
    </section>
  </main>
</template>

<script>
import vNewsItem from "@/components/v-news-item"
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "v-catalog-news",
  components: {
    vNewsItem
  },
  props: {},
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
        'ARTICLES',
    ])
  },
  methods: {
    ...mapActions([
      'GET_ARTICLES_FROM_API'
    ]),
  },
  mounted() {
    this.GET_ARTICLES_FROM_API()
    console.log(this.$store.state.articles)
  }
}
</script>

<style>
body{
  background-color: #f7f7f7;
}
.container{
  padding: 0;
  margin: 0 auto;
}

.section-grid__row{
  display: flex;
  flex-wrap: nowrap;
  background-color: #ffffff;
}
.section-main-news{
  width: 66.666%;
}

.section-news-right{
  width: 33.333%;
  justify-content: flex-end ;
}
.v-catalog-news{
  margin-top: 56px;
  /*background-color: #ffffff;*/

}
@media screen and (max-device-width: 1024px ){
  .section-grid__row{
    flex-wrap: wrap;
  }
  .section-main-news{
    width: 100%;
  }
}
</style>