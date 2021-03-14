<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="admin-panel-header">Admin Panel</h2>
        <div class="form add-news-form">
          <form class="" @submit.prevent="delNewsMethod">
            <input required v-model="id" type="text" placeholder="id"/>
            <button type="submit">Delete News</button>
            <span v-if="temp === false"> Article with this id does not exist</span>
            <span v-else-if="temp === true"> This article successful deleted</span>
          </form>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-delete-news",
  data() {
    return {
      id: "",
      temp: null,
    }
  },
  methods: {
    delNewsMethod: function () {
      let id = this.id
      this.$http.delete('http://localhost:3000/articles/' + id).then(
          this.id = ''
      ).catch((err) => {
        if (err.response.status === 404) {
          console.log("this article does not exist")
          this.temp = false
        }
      })
    },

  },
}
</script>

<style scoped>

</style>