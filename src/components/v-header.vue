<template>
  <header class="header"> <!-- TODO Шапку выдвигающуюся  fixed-top -->
    <div class="container">
      <div class="header_cont">
        <div class="navbar-brand">
          <a href="/" class="navbar-brand__logo">
            <Logo/>
          </a>
        </div>
        <div class="navbar-nav">
          <li class="nav-item">
            <router-link to="/Search">
              <div class="header-search">
                <div class="header-search__icon">
                  <icon-search/>
                </div>
                <div class="header-search__label nav-link">Поиск</div>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <span v-if="isLoggedIn">
              <router-link to="/AdminPanel">
                <a class="nav-link">Panel</a>
              </router-link>
            </span>
          </li>
          <li class="nav-item">
           <span v-if="isLoggedIn">
<!--           <span>-->
              <router-link to="/">
                  <a class="nav-link" @click="logout">logout</a>
              </router-link>
           </span>
            <span v-else>
<!--            <span>-->
            <router-link to="/Authorization">
                <a class="nav-link">login</a>
            </router-link>
          </span>
          </li>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import logotype from 'src/assets/logo_news_agency.svg';
import Logo from '@/components/icons/logo-news';
import IconSearch from "@/components/icons/icon-search";

export default {
  name: "v-header",
  components: {
    IconSearch,
    Logo,
  },
  computed: {
    isLoggedIn: function () {
      console.log("Hello from comuted ISLOGGEDIN")
      console.log("Значение isAuthenticated", this.$store.getters.isAuthenticated)
      return this.$store.getters.isAuthenticated
    }

  },
  methods: {
    logout: function () {
      this.$store.dispatch('LOGOUT')
          .then(() => {
            console.log("Вы вышли из системы")
            this.$router.push('/Authorization').catch(() => {
            });
          })
    }
  },
}
</script>

<style>
header {
  max-width: 100%;
  background-color: #f7f7f7;
  border-bottom: 1px solid #dfdfe6;;
  color: #00077b;
  flex: 0 0 auto;

}

.header_cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 5%;
  background: #f7f7f7;
  /*position: relative;*/
}

.header-search {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-search__icon {
  padding-right: 15px;
  margin-top: -4px;
}

.navbar-brand {
  /*font-size: 30px;*/
  /*background: url("./src/assets/logo_news_agency.svg"); */
  /*position: absolute;*/
  width: 74px;
  height: 100%;
  position: relative;
  display: inline-block;
}

.navbar-nav {
  display: flex;
  align-items: center;
  flex-direction: row;

}

.nav-link {
  color: #00077b;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.nav-item {
  padding-right: 15px;
}
@media screen and (max-width: 340px){
  .header-search__icon{
    display: none;
  }
  .nav-item {
    padding-right: 10px;
  }

}
</style>