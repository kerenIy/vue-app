# vue-chat-app

This template should help get you started developing with Vue 3 in Vite.

## Project Requirements

Develop a simple web chat

1. Before entering the chat, the user is prompted to enter his name, which is further used to identify his messages.
2. Implement saving messages in memory (on the local machine, in local storage, or somewhere else, without a backend).
3. Each new browser tab is a new chat user. 4. The new messages in the chat room should be updated to all opened tabs (live updating for all users). Do not use socket.io at all.
4. Implement functionality for sending messages to chat.
5. Implement functionality for show message history, and load more messages when scrolling chats to the top. (page size = 25)

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
