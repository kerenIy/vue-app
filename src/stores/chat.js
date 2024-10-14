import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', () => {
  // State
  const username = ref('')
  const messages = ref([])
  const pageSize = ref(25)

  // Actions
  function loadMessages() {
    const storedMessages = localStorage.getItem('chatMessages')
    if (storedMessages) {
      messages.value = JSON.parse(storedMessages)
    }
  }

  function saveMessages() {
    localStorage.setItem('chatMessages', JSON.stringify(messages.value))
  }

  function addMessage(newMessage) {
    messages.value.push(newMessage)
    saveMessages()
    broadcastMessage()
  }

  function broadcastMessage() {
    // Custom event system (Vue doesn't have $emit in Composition API)
    const event = new CustomEvent('message', { detail: messages.value })
    window.dispatchEvent(event) // Example of broadcasting messages globally
  }

  function setUsername(newUsername) {
    username.value = newUsername
  }

  function fetchPreviousMessages(page) {
    const start = Math.max(0, this.messages.length - this.pageSize * page)
    return this.messages.slice(start, start + this.pageSize)
  }

  // Return the state and actions
  return {
    username,
    messages,
    pageSize,
    loadMessages,
    saveMessages,
    addMessage,
    broadcastMessage,
    setUsername,
    fetchPreviousMessages
  }
})
