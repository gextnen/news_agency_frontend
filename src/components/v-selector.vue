<template>
  <div class="search-filter">
    <div class="search-filter__element">
      <div
          class = "search-filter__element-title"
          @click ="areOptionsVisible = !areOptionsVisible" >
        {{selected}}
      </div>
        <div class="options"
             v-if="areOptionsVisible"
        >
          <p
              v-for="option in options"
              :key="option.value"
              @click = "selectOption(option)"
          >
            {{option.name}}
          </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-selector",
  props: {
    options: {
      type: Array,
      default(){
        return []
      }
    },
    selected: {
      type: String,
      default: '',
    }
  },
  data: function (){
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = true
      console.log(option)
    },
    hideSelect(){
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
.search-filter__element{
  position: relative;
  width: 200px;
  cursor: pointer;
}
.selector p {
  margin: 0;
}
.search-filter__element-title{
  border: 0;
  color: #00077b;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  padding: 16px 25px 13px 0;
  text-transform: uppercase;

}
.options{
  background-color: #f7f7f7;
  box-shadow: 0 20px 18px rgba(41, 39, 89, 0.25);
  color: #00077b;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  padding: 5px;
  position: absolute;
  width: 100%;
}
</style>