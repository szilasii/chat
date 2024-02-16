<script setup lang="ts">
import chatMessageItem from '../chat/chatMessageItem.vue';
</script>
 
<template>
    <div class="chat-messages">
      <chatMessageItem />
    </div>
</template>
 
<style scoped>
.chat-messages {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
}
 </style>