<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="admin-panel-header">Admin Panel</h2>
      <div class="form add-news-form">
        <form class="" @submit.prevent="addNewsMethod">
          <input required v-model="title" type="text" placeholder="Title"/>
          <input required v-model="description" type="text" placeholder="Description"/>
          <input required v-model="content" type="text" placeholder="Content"/>
          <input required v-model="author" type="text" placeholder="Author"/>
          <input required v-model="publishedAt" type="datetime-local" placeholder="PublishedAt"/>
          <input required v-model="coverImage" type="text" placeholder="Path to image"/>
          <button type="submit">Add News</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapActions, mapGetters} from "vuex";

export default {
  name: "v-add-news",
  // props: {
  //   article_data: {
  //     type: Object,
  //     default(){
  //       return {}
  //     }
  //   }
  // },
  data() {
    return {
      title: "",
      description: "",
      content: "",
      author: "",
      publishedAt: "",
      coverImage: "",
    }
  },
  // computed: {
  //   ...mapGetters([
  //     'ARTICLES',
  //   ])
  // },
  methods: {
    // ...mapActions([
    //   'GET_ARTICLES_FROM_API',
    //
    // ]),
    addNewsMethod: function () {
      let title = this.title
      let description = this.description
      let content = this.content
      let author = this.author
      let publishedAt = this.publishedAt
      let coverImage = this.coverImage
      console.log("hello from addNewsMethod")
      this.$store.dispatch('AddNews', {title, description, content, author, publishedAt, coverImage})
    }
  },

  mounted() {
  }
}
</script>

<style>
.add-news-form {
  max-width: 75%;
}
</style>