<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="admin-panel-header">Admin Panel</h2>
      <form>
        <div class="form add-news-form">
          <form class="" @submit.prevent="delNewsMethod">
            <input required v-model="id" type="int" placeholder="id"/>
            <button type="submit">Delete News</button>
          </form>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-delete-news",
  data() {
    return {
      id: "",
    }
  },
  methods: {
    delNewsMethod: function (){
      let id = this.id
      console.log("hello from delNewsMethod")
      this.$store.dispatch('DelNews', id)
    }

  }
}
</script>

<style scoped>

</style>