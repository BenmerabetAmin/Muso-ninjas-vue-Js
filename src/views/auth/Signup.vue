<template>
  <form @submit.prevent='handleSubmit'>
      <h1> Signup </h1>
      <input type="text" placeholder="Display name" v-model="displayName">
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <div class="error">{{error}}</div>
      <button v-if="!isPending">Signup</button>
      <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import useSignup from '../../composables/useSignup'
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'

export default {
    setup(){
        const displayName =ref ('')
        const email = ref('')
        const password = ref('')
        const router = useRouter()
        const {error, signup, isPending} = useSignup()

        const handleSubmit = async() =>{
           const res = await signup(email.value, password.value, displayName.value)
            if(!error.value){
              router.push({name: 'UserPlaylists'})
            }
        }


        return{displayName, email, password, handleSubmit, error, isPending}
    }

}
</script>

<style scoped>
button{
  background: green;
  color: white;
}
button:hover{
  background-color: green;
  color: white ;
}
</style>