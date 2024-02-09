<script setup lang="ts">
import { ref } from 'vue';
import { autFetch } from '../extension/connection.ts';
import { useUserStore } from '../../store/user';
import router from '../router';

const email = ref('');
const password = ref('');
const error = ref('');

let userData:any = useUserStore();

const login = () => {
  if (!email.value || !password.value) {
      error.value = "Töltsd ki az adatokat megfelelően";
    return
    }
    autFetch("http://localhost:8000/api/login",{"email":email.value,"password":password.value})
    .then((data) => {  
          console.log (data);
      if (data.status == 404) {
          error.value= data.error      
          throw new Error(data.error);
        }
      if (data.status == 401) {
          error.value= data.error
          throw new Error(data.error);         
      }
          userData.user = data.user;
          localStorage.setItem('userData',JSON.stringify(userData.user));
          router.push('/chat');
      console.log(data);


        }).catch((err) => {
            console.log(err);  
          })
    //....


}

</script>

<template>
  <h1>Login</h1>
  <div class="dispflex">
    <form class="dispflex" @submit.prevent="login">
      {{ error }}
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="jelszó" v-model="password">
      <button>Login</button>
    </form>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 7rem;
}


form {
  width:100%;
  background-color: blueviolet;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 2rem;
  max-width: 250px;
}

button {
  color:#fff;
  background-color:blue;
  border: none;
  font-size: 1.5rem;
}
div {
  width: 100%;
  justify-content: center;
  text-align: center;
}
</style>


