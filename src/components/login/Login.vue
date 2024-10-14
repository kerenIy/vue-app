<script>
import { useChatStore } from '@/stores/chat'

export default {
  data() {
    return {
      username: ''
    }
  },

  computed: {
    store() {
      return useChatStore()
    }
  },

  methods: {
    setUsername() {
      const store = useChatStore()
      store.setUsername(this.username)
      this.$router.push('/chat')
    }
  }
}
</script>

<template>
  <div class="login-container">
    <div class="">
      <span class="login-header">Enter your username</span>
      <span class="login-span">This name will be visible to all users</span>

      <form action="" class="login-form">
        <input type="text" placeholder="Username" v-model="username" />

        <button class="button" @click="setUsername">
          <RouterLink to="/chat">Login</RouterLink>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 10px;
  font-family: 'Lexend';
}

.login-header {
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  display: block;
}

.login-span {
  color: gray;
  font-size: 1rem;
  text-align: center;
}

.button {
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 10px;
  font-family: 'Lexend';
  border: 1px solid transparent;
  border-radius: 12px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

input {
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid white;
  padding: 10px;
  margin-top: 20px;
  color: black;
  align-items: center;
}
a {
  text-decoration: none;
  color: black;
}
</style>
