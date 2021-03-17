<template>
  <div class="container">
    <div class="wrapper">
      <h2>Admin Panel</h2>
      <div class="form add-news-form">
        <form class="" @submit.prevent="delNewsMethod">
          <input required v-model="id" type="text" placeholder="id"/>
          <button class="del-news-btn" type="submit">Delete News</button>
          <span class="successSpan" v-if="respSpan === false"> Article with this id does not exist</span>
          <span v-else-if="respSpan === true"> This article successful deleted</span>
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
      respSpan: null,
    }
  },
  methods: {
    delNewsMethod: function () {
      let id = this.id
      this.$http.delete('http://localhost:3000/articles/' + id).then(
          resp => {
            if (resp.status === 200) {
              this.respSpan = true
            }
          },
          this.id = ''
      ).catch((err) => {
        if (err.response.status === 404) {
          console.log("this article does not exist")
          this.respSpan = false
        }
      })
    },

  },
}
</script>

<style>
.del-news-btn {
  margin-bottom: 10px;
}

.successSpan {
  color: #00077b;
}
</style>