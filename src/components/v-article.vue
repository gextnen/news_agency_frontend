<template>
  <div class="container">
    <div class="news">
      <div class="article-header">
        <div class="article-header__date">
          <p class = "">{{ ARTICLES[id-1].publishedAt}}</p>
        </div>
        <div class="article-header__tags">
<!--          <p class = "">{{ ARTICLES[id-1].tags}}</p>-->
            <span
                v-for = "tag in ARTICLES[id-1].tags"
                :key ="tag"
            >
              {{tag.toLocaleUpperCase()}}
            </span>
        </div>
        <div class="article-title">
          <h1 class = "">{{ARTICLES[id-1].title}}</h1>
<!--          <p class = "">{{ARTICLES[id-1].source}}</p>-->
        </div>
      </div>
      <div class="article-image">
        <img  :src="ARTICLES[id-1].coverImage" alt="" />
<!--        <img  src="" alt="" />-->
      </div>
      <div class="article-text">
        <div class="article-text__content">
          <p>{{ARTICLES[id-1].content}} </p>
        </div>
        <div class="article-text__source">
          <p>Источник: {{ARTICLES[id-1].source}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "v-article",
  components: {

  },
  props: {
    article_data: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
       id: this.$route.params['id'],
       jopa: " <b> "
    }
  },
  computed: {
    ...mapGetters([
      'ARTICLES',
    ])
  },
  methods: {
    ...mapActions([
      'GET_ARTICLES_FROM_API',

    ]),
  },
  mounted() {
    this.GET_ARTICLES_FROM_API()
    console.log("GET_ARTICLES_FROM_API mounted v-article",this.$store.state.articles)

  }
}

</script>

<style>
.container{
  background-color: #ffffff;
  padding: 0;
  margin: 0 auto;

}
.news{
  width: 66.666%;
  text-align: left;
  height: 100%;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dfdfe6;
}

.article-header{
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.article-header__date{
  color: #747e89;
}

.article-header__tags{
  color: #23387c;
  font-weight: 500;
}
.article-title{
  margin-top: 25px;
}
.article-image{
  text-align: center;
}
.article-image img {
  height: auto;
  width: 100%;
  max-width: 720px;
  object-fit: cover;

}

.article-text{
  font-size: 19px;
  line-height: 28px;
  margin: 20px auto;
  max-width: 725px;
}

.article-text__source{
  font-size: 17px;
  color: #9f9d9d;
}

@media screen and (max-device-width: 1024px ) {
  .news{
    width: 100%;
    border-right: 0;
  }
}
</style>