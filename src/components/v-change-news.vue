<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="admin-panel-header">Admin Panel</h2>
      <div class="form add-news-form">
        <form class="" @submit.prevent="changeNewsMethod">
          <input required v-model="id" type="text" placeholder="id"/>
          <input required v-model="title" type="text" placeholder="Title"/>
          <input required v-model="description" type="text" placeholder="Description"/>
          <input required v-model="content" type="text" placeholder="Content"/>
          <input required v-model="author" type="text" placeholder="Author"/>
          <input required v-model="publishedAt" type="datetime-local" placeholder="PublishedAt"/>
          <input required v-model="coverImage" type="text" placeholder="Path to image"/>
          <button type="submit">Change News</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
// import delNewsComp from "./v-delete-news"

export default {
  name: "v-change-news",
  data() {
    return {
      id: "",
      title: "",
      description: "",
      content: "",
      author: "",
      publishedAt: "",
      coverImage: "",
    }
  },
  methods: {
    changeNewsMethod: function () {
      let id = this.id
      let title = this.title
      let description = this.description
      let content = this.content
      let author = this.author
      let publishedAt = this.publishedAt
      let coverImage = this.coverImage
      this.$http.delete('http://localhost:3000/articles/' + id).then(
          this.id = ''
      ).catch((err) => {
        if (err.response.status === 404) {
          console.log("this article does not exist")
          this.temp = false
        }
        else {
          console.log("hello from changeNewsMethod")
          this.$store.dispatch('AddNews', {title, description, content, author, publishedAt, coverImage})
          this.title = ''
          this.description = ''
          this.content = ''
          this.author = ''
          this.publishedAt = ''
          this.coverImage = ''
        }
      })
    }
  }
}
</script>

<style>

</style>