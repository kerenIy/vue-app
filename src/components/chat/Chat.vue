<script>
import { useChatStore } from '@/stores/chat'

export default {
  data() {
    return {
      newMessage: '',
      page: 1,
      visibleMessages: []
    }
  },

  computed: {
    store() {
      return useChatStore()
    }
  },
  mounted() {
    this.store.loadMessages()
    this.loadMessages()
  },
  methods: {
    loadMessages() {
      this.visibleMessages = this.store.fetchPreviousMessages(this.page)
    },
    sendMessage() {
      if (typeof this.newMessage !== 'string' || !this.newMessage.trim()) {
        console.log('sending message: ' + this.newMessage)
      }

      this.store.addMessage({
        username: this.store.username,
        text: this.newMessage.trim(),
        timestamp: new Date().getTime()
      })
      this.newMessage = ''
      this.loadMessages()
    }
  },

  handleScroll(event) {
    const { scrollTop } = event.target
    if (scrollTop === 0 && this.page * this.store.pageSize < this.store.messages.length) {
      this.page++
      this.loadMessages()
    }
  }
}
</script>

<template>
  <div class="chat-container">
    <div class="chat-header">
      <h2>Welcome {{ store.username }}</h2>
    </div>

    <div class="chat-body" @scroll="handleScroll">
      <div v-for="message in visibleMessages" :key="message.timestamp">
        >
        <p>{{ message.username }}</p>
        <div :class="message.username === store.username ? 'message-right' : 'message-left'">
          <div class="">
            {{ message.text }}
          </div>
        </div>
        <!-- <p>{{ message.timestamp }}</p> -->
      </div>
    </div>

    <div class="chat-footer">
      <input type="text" v-model="newMessage" placeholder="Enter message" />

      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Lexend', sans-serif;
}
.chat-body {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}
.chat-footer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.message-left {
  text-align: left;
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 60%;
  align-self: flex-start;
}

.message-right {
  text-align: right;
  background-color: #d1f0d1;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 60%;
  align-self: flex-end;
}

input {
  width: min(100%, 20rem);
  flex-grow: 1;
  outline: none;
  padding: 10px;
}
button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
}
</style>
