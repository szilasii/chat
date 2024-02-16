<script setup lang="ts">

const messages = [1,2,3,4,5];

</script>
 
<template>
    
    <div class="msg-box" v-for="message in messages">{{message}}</div>
    
</template>
 
<style scoped>
    .msg-box {
  background-color: #1c98f7;
  color: #fff;
  max-width: max-content;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

 </style>