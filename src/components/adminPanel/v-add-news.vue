<template>
  <div class="container">
    <div class="wrapper">
      <h2>Admin Panel</h2>
      <div class="form add-news-form">
        <form class="" @submit.prevent="addNewsMethod">
          <input required v-model="title" type="text" placeholder="Title"/>
          <input required v-model="source" type="text" placeholder="Source"/>
          <input required v-model="description" type="text" placeholder="Description"/>
          <input required v-model="tags" type="text" placeholder="Tags"/>
          <textarea required v-model="content" placeholder="Content" rows="8"></textarea>
          <input required v-model="author" type="text" placeholder="Author"/>
          <input required v-model="publishedAt" type="datetime-local" placeholder="PublishedAt"/>
          <input required v-model="coverImage" type="text" placeholder="Path to image"/>
          <button type="submit">Add News</button>
          <span class="successSpan" v-if="respSpan === true">Article successful added</span>
          <span v-else-if="respSpan === false">Article not added</span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "v-add-news",
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

      respSpan: null,
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
      axios({
        url: 'http://localhost:3000/articles',
        data: {source, tags, author, title, description, coverImage, publishedAt, content},
        method: 'POST'
      })
          .then(resp => {
            if (resp.status === 201) {
              this.respSpan = true
            }
          }).catch(err => {
        this.respSpan = false
        console.log("catch AddNews")
        console.log(err)
      })
      this.title = ''
      this.description = ''
      this.content = ''
      this.author = ''
      this.publishedAt = ''
      this.coverImage = ''
      this.tags = ''
      this.source = ''
    }

  },
}

</script>

<style>
.add-news-form {
  max-width: 75%;
}

@media screen and (max-width: 720px) {
  .add-news-form {
    max-width: 100%;
  }
}

</style>