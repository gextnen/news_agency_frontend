<template>
  <header class="header"> <!-- TODO Шапку выдвигающуюся  fixed-top -->
    <div class="container">
    <div class="header_cont">
      <div class="navbar-brand">
        <router-link to="/" :disabled="true" >
          <Logo/>
        </router-link>
      </div> <!-- TODO Вставить лого свг-->
      <div class="navbar-nav">
        <li class="nav-item">
          <router-link to="/Authorization">
            <a class="nav-link" href="">sign in</a>
          </router-link>
        </li>
      </div>
    </div>
    </div>
  </header>
</template>

<script>
// import logotype from 'src/assets/logo_news_agency.svg';
import  Logo from '@/components/logo-news';
export default {
  name: "v-header",
  components: {
    Logo,
  }
}
</script>

<style>
  header{
    max-width: 100%;
    background-color: #f7f7f7;
    border-bottom: 1px solid #dfdfe6;;
    color: #00077b;
    flex: 0 0 auto;

  }

  .header_cont{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 5%;
    background: #f7f7f7;
    /*position: relative;*/
  }

  .navbar-brand{
    /*font-size: 30px;*/
    /*background: url("./src/assets/logo_news_agency.svg"); */
    /*position: absolute;*/
    width: 74px;
    height: 100%;
    position: relative;
    display: inline-block;
  }
  .nav-link{
    color: #00077b;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
</style>