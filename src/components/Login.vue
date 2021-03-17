<template>
  <div class="container">
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <input required v-model="login" type="text" placeholder="Login"/>
          <input required v-model="password" type="password" placeholder="Password"/>

          <button type="submit" @click="handleSubmit">login</button>
          <p class="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      login: "",
      password: ""
    }
  },
  computed: {},
  methods: {
    handleSubmit(e) {
      console.log("hello from handleSubmit() e:", e)
      e.preventDefault()
      if (this.password.length > 0) {
        axios.post('http://localhost:5500/login', {
          login: this.login,
          password: this.password
        })
            .then(
                response => {
                  let token = response.data.accessToken;
                  axios.defaults.headers.authorization = "Bearer " + token;
                  console.log(this)
                  this.$router.push('/')
                  if (response.status === 200) {
                    console.log(response.config.data, response);
                    localStorage.setItem('token', token)
                    console.log("localStorage after set: ", localStorage)
                  }
                }
            )
            .catch(function (error) {
              console.error(error.response);
              localStorage.removeItem('token')
            });
      }
    },

  },

}
</script>

<style>
.container {
  background-color: #ffffff;
  padding: 0;
  margin: 0 auto;
  height: 100%;
}

.login-page {
  max-width: 360px;
  padding: 8% 0 0;
  margin: auto;
}

.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  margin: 0 auto;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

@media screen and (max-width: 700px) {
  .form {
    box-shadow: none;
    padding: 30px;

  }
}

.form input, textarea {
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

.form button:hover, .form button:active, .form button:focus {
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


.login-box a span {
  position: absolute;
  display: block;
}
</style>