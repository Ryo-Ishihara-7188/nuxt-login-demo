<template>
  <div>
    <h1>This is Secret</h1>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import Cookies from 'js-cookie'
import { getUserFromCookie } from '@/helpers'

export default {
  asyncData({ req, redirect }) {
    if (process.server) {
      const user = getUserFromCookie(req)
      if (!user) {
        redirect('login')
      }
    } else {
      let user = firebase.auth().currentUser
      if (!user) {
        redirect('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
