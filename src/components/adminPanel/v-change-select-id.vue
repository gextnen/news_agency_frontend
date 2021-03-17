<template>
  <div class="container">
    <div class="wrapper">
      <h2>Admin Panel</h2>
      <div class="form add-news-form">
        <input required v-model="idSelect" type="text" placeholder="id"/>
        <button @click="changeItemClicked">Select news</button>
      </div>
      <v-change-news :value="this.idSelect" v-if="isShowComponent"/>
    </div>
  </div>
</template>

<script>
import VChangeNews from "@/components/adminPanel/v-change-news";


export default {
  name: "v-change-enter-id",
  data() {
    return {
      idSelect: "",
      isShowComponent: false,
    }
  },
  components: {
    VChangeNews
  },
  methods: {
    changeItemClicked() {
      console.log("was clicked", this.idSelect)
      this.isShowComponent = true
    },
  }
}
</script>

<style scoped>

</style>