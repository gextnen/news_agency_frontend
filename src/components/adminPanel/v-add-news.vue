<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="admin-panel-header">Admin Panel</h2>
      <div class="form add-news-form">
        <form class="" @submit.prevent="addNewsMethod">
          <input required v-model="title" type="text" placeholder="Title"/>
          <input required v-model="source" type="text" placeholder="Source"/>
          <input required v-model="description" type="text" placeholder="Description"/>
          <input required v-model="tags" type="text" placeholder="Tags"/>
          <textarea required v-model="content" type="textarea" placeholder="Content"  rows="8">
          </textarea>
<!--          <input required v-model="content" type="text" placeholder="Content"/>-->
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
      tags: "",
      source: "",
    }
  },

  methods: {

    addNewsMethod: function () {
      let title = this.title
      let description = this.description
      let content = this.content
      let author = this.author
      let publishedAt = this.publishedAt
      let coverImage = this.coverImage
      let tags = this.tags.split(" ")
      let source = this.source
      console.log("hello from addNewsMethod")
      console.log(tags)
      this.$store.dispatch('AddNews', {source, tags, author, title, description, coverImage, publishedAt, content})
      this.title = ''
      this.description = ''
      this.content = ''
      this.author = ''
      this.publishedAt = ''
      this.coverImage = ''
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

/*.form {*/
/*  position: relative;*/
/*  z-index: 1;*/
/*  background: #FFFFFF;*/
/*  max-width: 360px;*/
/*  margin: 0 auto 100px;*/
/*  padding: 45px;*/
/*  text-align: center;*/
/*  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);*/
/*}*/
</style>