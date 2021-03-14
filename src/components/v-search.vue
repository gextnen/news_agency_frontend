<template>
  <div class="container">
    <section class="section-search">
      <div class="search-wrapper">
        <div class="search-input">
          <input type="text" v-model="searchInput" class="search-input__input-field" placeholder="Search">
          <button class="search-input__submit-button" @click="searchArticle(searchInput)"
                  v-bind:style="{ backgroundImage: 'url(' + iconSubmit + ')' }">
            <!--              <icon-submit-button/>-->
          </button>
        </div>
        <v-selector
            :options="categories"
            :selected="selected"
            @select="sortByCategory"
        />
        <p>{{selected}}</p>
      </div>
      <v-catalog-news/>
    </section>
  </div>
</template>

<script>
import VSelector from '@/components/v-selector'
import {mapActions, mapGetters} from 'vuex'
import VCatalogNews from "@/components/v-catalog-news";
export default {
  name: "v-search",
  components: {VSelector, VCatalogNews},
  // components: {IconSubmitButton}
  data() {
    return {
      iconSubmit: "/next.svg",
      searchInput: '',
      categories: [
        {name: 'ALL', value: "all"},
        {name: 'SPORT', value: "sport"},
        {name: 'FOOTBALL', value: "football"},
        {name: 'BUSINESS', value: "business"},
        {name: 'ART', value: "art"},
        {name: 'BITCOIN', value: "bitcoin"},
        {name: 'MUSIC', value: "music"},
      ],
      selected: 'All articles',
      sortedArticles: [],

    }

  },
  computed: {
    ...mapGetters([
        'SEARCH_VALUE',
        'ARTICLES'
    ])
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE_TO_VUEX'
    ]),
    searchArticle(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value)
    },
    sortByCategory(category){
      console.log("hello from sortByCategory category: ", category)
      this.sortedArticles = []
      let vm = this
      this.selected = category.value
      console.log("hello from sortByCategory selected: ",this.selected )

      this.ARTICLES.map(function (item){
        if (item.tags.includes(category.value)){
          vm.sortedArticles.push(item);
          console.log("item.tags ", item.tags)
          console.log("category: ", category)
          console.log("Item: ", item)
        }
      })
      this.updateArticles()
      },
    updateArticles(){
      this.$emit('update: sortedArticles', this.sortedArticles)
      console.log("hello from updateArticles")
    }
    }

}
</script>

<style>
input, button:active, :hover, :focus {
  outline: 0;
  outline-offset: 0;
}

.section-search {
  /*width: 66.666%;*/
  height: 100%;
  border-right: 1px solid #dfdfe6;

}


.search-wrapper {
  padding: 20px 10px 0 10px;
}

.search-input {
  display: flex;
  position: relative;
}


.search-input__input-field {
  border: 0;
  border-bottom: 2px solid #00077b;
  font-size: 23px;
  margin: 0;
  padding: 25px 55px 23px 0;
  width: 100%;
}

.search-input__input-field:hover {
  border: 0;
  border-bottom: 2px solid #00077b;
}

.search-input__submit-button {
  background: no-repeat;
  background-size: 43px;
  height: 100%;
  width: 50px;
  border: 0;
  position: absolute;
  top: 25px;
  right: 0;
}


@media screen and (max-device-width: 1024px ) {

  .search-input__input-field {
    border-bottom: 2px solid #00077b;
    font-size: 19px;
    padding: 12px 55px 10px 0;
  }

  .search-input__submit-button {
    background-size: 40px;
    top: 5px;

  }

}
</style>