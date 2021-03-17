<template>
  <main class="container">
    <section class="section-grid__row">
      <section class="section-grid-col">
        <div class="v-catalog-news">
          <div class="v-catalog-news__list">
            <v-news-item
                v-for="article in filteredArticles"
                :key="article.id"
                :article_data="article"
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
  props: {
    sortedArticles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters([
      'ARTICLES',
      'SEARCH_VALUE',
    ]),
    filteredArticles() {
      if (this.sortedArticles.length) {
        return this.sortedArticles
      } else {
        return this.ARTICLES
      }
    },
  },
  methods: {
    ...mapActions([
      'GET_ARTICLES_FROM_API',
    ]),
    sortArticlesByValue(value) {
      this.sortedArticles = [...this.ARTICLES]
      if (value) {
        this.sortedArticles = this.sortedArticles.filter(function (item) {
          return item.title.toLowerCase().includes(value.toLowerCase())
        })
      } else {
        this.sortedArticles = this.ARTICLES
      }

    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortArticlesByValue(this.SEARCH_VALUE);
    }
  },
  mounted() {
    console.log("hello from mounted ARTICLES: ")
    this.GET_ARTICLES_FROM_API()

  }
}
</script>

<style>
.container {
  padding: 0;
  margin: 0 auto;
  background-color: #ffffff;
  height: 100%;
}

.section-grid__row {
  display: flex;
  flex-wrap: nowrap;
  background-color: #ffffff;
}

.section-grid-col {
  width: 66.666%;
  border-right: 1px solid #dfdfe6;
}

.section-news-right {
  width: 33.333%;
  justify-content: flex-end;
}

.v-catalog-news {
  margin-top: 56px;

}


@media screen and (max-device-width: 1024px ) {
  .section-grid__row {
    flex-wrap: wrap;
  }

  .section-grid-col {
    width: 100%;
    border-right: 0;
  }
}
</style>