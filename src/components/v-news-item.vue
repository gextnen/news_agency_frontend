<template>
  <div class="news-item">
    <div class="news-item__body">
      <p class = "news-item__date">{{article_data.publishedAt}}</p>
      <router-link :to="`/article/${article_data.id}`">
        <h3 class = "news-item__title">{{article_data.title}}</h3>
      </router-link>
<!--      <p class = "news-item__content">{{article_data.content}}</p>-->
    </div>
    <div class="news-item__image">
      <img :src =article_data.coverImage alt="" />
    </div>
  </div>

</template>


<script>
export default  {
  name: "v-news-item",
  props: {
    article_data: {
      type: Object,
      default(){
        return {}
      }
    }
  }

}

</script>

<style>
.router-link-active{
  color:#23387c ;
}
a{
  color: #000000;
  text-decoration: none;
}
a:hover{
  color: #23387c;
}
.news-item{
  text-align: left;
  border-bottom: 1px solid #9f9d9d;
  padding: 15px;
  display: flex;

}
.news-item:last-child{
  border-bottom: 0px;
}

.news-item__date{
  color: #9f9d9d;
  font-size: 14px;
}

.news-item__body{
  font-size:23px;
  flex: 1 1 auto;
}
.news-item__image{
  flex: 0 0 33.33%;
  position: relative;
  min-height: 150px;
}
.news-item__image img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top:0;
  left: 0;


}

@media screen and (max-device-width: 1024px ){
  .news-item{
    flex-wrap: wrap;
  }
  .news-item__image img{
    width: auto;
  }
}
</style>