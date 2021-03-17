<template>
  <div class="container">
    <div class="wrapper">
      <h2>Admin Panel</h2>
      <div class="admin-panel-list">
          <span class="admin-panel-list__item">
              <router-link to="/AdminPanel/AddNews">
                <button class="admin-panel-list__btn">Add news</button>
              </router-link>
          </span>
        <span class="admin-panel-list__item">
              <router-link to="/AdminPanel/SelectId">
                <button class="admin-panel-list__btn">Change news</button>
              </router-link>
          </span>
        <span class="admin-panel-list__item">
              <router-link to="/AdminPanel/DelNews">
                <button class="admin-panel-list__btn">Delete news</button>
              </router-link>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-admin-panel"
}
</script>

<style>
.wrapper {
  padding-top: 70px;
}

h2 {
  color: #00077b;
  padding-bottom: 25px;
}

.admin-panel-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.admin-panel-list__btn {
  color: white;
  padding: 20px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  width: 70%;
  background-color: #5948b1;
}

.admin-panel-list__btn:hover {
  background-color: #403677;
}

.admin-panel-list__btn:active {
  background-color: #525291;
}
</style>