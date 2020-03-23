<template>
  <div class="login">
    <h3>Login</h3>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="email" placeholder="email" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button>Login</button>
    </form>
    <div v-if="error" class="error">{{error.message}}</div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      email: null,
      password: null,
      error: null
    }
  },

  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data)
          this.$router.push('/secret')
        })
        .catch(err => (this.error = err))
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

input {
  width: 400px;
  padding: 16px;
  margin: 8px;
  font-size: 16px;
}

button {
  margin-top: 24px;
  width: 400px;
  height: 40px;
  font-size: 100%;
}
</style>