<template>
  <div class="container">
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <button>login</button>
          <p class="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      logn: "",
      password: ""
    }
  },
  methods: {
    login: function() {
      let logn = self.login
      let password = self.password
      this.$store.dispatch('logn', {logn, password}).then(()=> this.$router.push('/')).catch(err=>console.log(err))
    }
  }
}
</script>

<style >
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #3020ac;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #25167c;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #3020ac;
  text-decoration: none;
}
.form .register-form {
  display: none;
}

.login-box a span {
  position: absolute;
  display: block;
}
</style>