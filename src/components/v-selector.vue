<template>
  <div class="search-filter">
    <div class="search-filter__element">
      <div
          class="search-filter__element-title"
          v-bind:style="{ backgroundImage: 'url(' + iconSubmit + ')' }"
          @click="areOptionsVisible = !areOptionsVisible">
        {{ selected }}
      </div>
      <div class="options"
           v-if="areOptionsVisible"
      >
          <span class="search-filter__list"
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
          >
            {{ option.name }}
          </span>
      </div>
    </div>
    <v-catalog-news
        :sortedArticles="sortedArticles"
    />
  </div>
</template>

<script>

import VCatalogNews from "@/components/v-catalog-news";

export default {
  name: "v-selector",
  components: {
    VCatalogNews,
  },
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: '',
    },
    sortedArticles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data: function () {
    return {
      areOptionsVisible: false,
      iconSubmit: "/arrow-down.svg"
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = false
      console.log(option)
    },
    hideSelect() {
      this.areOptionsVisible = false
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }

}
</script>

<style>
.search-filter__element {
  position: relative;
  width: 200px;
  cursor: pointer;
}

.selector p {
  margin: 0;
}

.search-filter__element-title {
  border: 0;
  color: #00077b;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  padding: 16px 25px 13px 0;
  background: no-repeat 76% 53%;
  text-transform: uppercase;

}

.search-filter__list {
  display: flex;
  flex-direction: column;
  padding: 7px;
}

.options {
  background-color: #f7f7f7;
  box-shadow: 0 20px 18px rgba(41, 39, 89, 0.25);
  color: #00077b;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  margin: 5px;
  position: absolute;
  width: 100%;
  z-index: 100;
}

.options span:hover {
  background: #c5c3c3;
}
</style>