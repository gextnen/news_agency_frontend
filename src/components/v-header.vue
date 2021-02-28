<template>
  <header class="header fixed-top">
    <div class="container header_cont">
      <div class="navbar-brand">
        News agency
      </div>
      <div class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Войти</a>
        </li>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "v-header"
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
  }

  .navbar-brand{
    font-size: 30px;
  }
  .nav-link{
    color: #00077b;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
</style>