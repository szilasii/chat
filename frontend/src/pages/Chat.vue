<script setup lang="ts">
import { useUserStore } from '../../store/user';
import router from '../router';
 
useUserStore();
 
const logout = () => {
    localStorage.removeItem("userData");
    router.push('/');
};
</script>
 
<template>
  <div class="chat-container">
    <div class="chat-header">
        <img src="../assets/chat-logo.png" alt="">
      <h2>SocketChat</h2>
      <button @click="logout">Kijelentkezés</button>
    </div>
    <div class="chat-messages">
      <div class="msg-box">asd</div>
    </div>
    <div class="chat-input">
      <input type="text" placeholder="Üzenet írása..." @keyup.enter=""/>
      <button>Küldés</button>
    </div>
  </div>
</template>
 
<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}
 
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #1c98f7;
  color: #fff;
}
 
.chat-header img {
    height: 50px;
}
 
.chat-messages {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
}
 
.chat-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #fff;
}
 
input[type="text"] {
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
 
button {
  background-color: #1c98f7;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
}
 
button:hover {
  background-color: #2980b9;
}
.msg-box {
  background-color: #1c98f7;
  color: #fff;
  max-width: max-content;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>