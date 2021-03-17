<template>
  <div class="container">
    <div class="wrapper">
      <h2> Changeable news</h2>
      <div class="form add-news-form">
        <form class="" @submit.prevent="changeNewsMethod">
          <input required v-model="idSelect" type="text" placeholder="id"/>
          <input required v-model="source" type="text" placeholder="Source"/>
          <input required v-model="tags" type="text" placeholder="Tags"/>
          <input required v-model="title" type="text" placeholder="Title"/>
          <input required v-model="description" type="text" placeholder="Description"/>
          <textarea required v-model="content" placeholder="Content" rows="8">
          </textarea>
          <input required v-model="author" type="text" placeholder="Author"/>
          <input required v-model="publishedAt" type="datetime-local" placeholder="PublishedAt"/>
          <input required v-model="coverImage" type="text" placeholder="Path to image"/>
          <button type="submit">Change News</button>
          <span class="successSpan" v-if="respSpan === true">Article successful changed</span>
          <span v-else-if="respSpan === false">Article not changed</span>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import axios from "axios";

export default {
  name: "v-change-news",
  props: {
    value: String,
  },

  data() {
    return {
      idSelect: "",
      source: "",
      tags: "",
      title: "",
      description: "",
      content: "",
      author: "",
      publishedAt: "",
      coverImage: "",

      respSpan: null,
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
    changeNewsMethod: function () {
      let id = this.idSelect
      let source = this.source
      let tags = this.tags.split(",")
      let title = this.title
      let description = this.description
      let content = this.content
      let author = this.author
      let publishedAt = this.publishedAt
      let coverImage = this.coverImage
      axios({
        url: 'http://localhost:3000/articles/' + id, data: {
          source, tags, title, description, content, author, publishedAt,
          coverImage, id
        }, method: 'PATCH'
      })
          .then(resp => {
            console.log("then ChangeNews", id)
            console.log("resp.status ", resp.status)
            if (resp.status === 200) {
              this.respSpan = true
            }
          }).catch(err => {
        console.log("catch ChangeNews")
        console.log(err)
      })
    },
    setValuesToInput() {
      this.idSelect = this.value
      this.title = this.ARTICLES[this.value - 1].title
      this.source = this.ARTICLES[this.value - 1].source
      this.tags = this.ARTICLES[this.value - 1].tags
      this.content = this.ARTICLES[this.value - 1].content
      this.description = this.ARTICLES[this.value - 1].description
      this.author = this.ARTICLES[this.value - 1].author
      this.publishedAt = this.ARTICLES[this.value - 1].publishedAt
      this.coverImage = this.ARTICLES[this.value - 1].coverImage
    },

  },
  mounted() {
    this.GET_ARTICLES_FROM_API()
    this.setValuesToInput()
    console.log("Mounted hook")
  },
}
</script>

<style>

</style>