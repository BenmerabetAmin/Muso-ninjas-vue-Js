<template>
  <div class="navbar">
      <nav>
         <img src="@/assets/ninja.png"> 
        <h1><router-link :to="{ name : 'Home'}"> Muso Ninjas </router-link></h1>
        <div class="links">
            <div v-if="user">
             <router-link class="btn-new" :to="{name : 'CreatePlaylist'}">  New Playlist</router-link>
             <router-link class="btn-myplaylist" :to="{name : 'UserPlaylists'}">  My playlist</router-link> 
             <button @click="handleClick">Logout</button>
             <span> Hi, {{user.displayName}} </span> 
            </div>
            <div v-if="!user">
                <router-link class="btn" :to="{name: 'Login'}">Login</router-link>    
                <router-link class="btn" :to="{name: 'Signup'}">Signup</router-link>
            </div>
            
        </div>  
      </nav>
  </div>
                  

</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {
setup(){
    const {error, logout} = useLogout()
    const router = useRouter()
    const {user} = getUser()

    const handleClick = async()=>{
        await logout ()
        if(!error.value){
            console.log('user logged out')
            router.push({name:'Login'})
        }
    }
    console.log (user)
        return{error, handleClick, logout, user}

}
}
</script>

<style scoped>
    .navbar{
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
    }
    nav{
     display: flex;
     align-items: center;
     max-width: 1200px;
     margin: 0 auto;
    }
    nav h1 {
     margin-left: 20px;
    }
   nav .links {
    margin-left: auto;
   }
   nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
   }
   nav img{
       max-height: 60px;
   }
    button{
       background-color: red;
       color : white;
   }
   button:hover{
       background-color: red;
       color : white; 
   }
  
   .btn-new{
        background: #007A78;
        color: white;
        border-radius: 8px;
        border: 0;
        padding: 8px 12px;
        font-weight: 600;
        cursor: pointer;
        display: inline-block;
    }
    .btn-myplaylist{
        background: #02007a;
        color: white;
        border-radius: 8px;
        border: 0;
        padding: 8px 12px;
        font-weight: 600;
        cursor: pointer;
        display: inline-block;
    }
    span{
        font-size: 14px ;
        display: inline-block ;
        margin-left: 16px ;
        padding-left:16px ;
        border-left: 1px solid #eee ;
    }

</style>