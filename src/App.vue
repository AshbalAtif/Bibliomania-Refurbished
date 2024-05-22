<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

//Logout Function for LocalStorage
/*function logout() {
  store.commit('logout');
  alert('loggedout');
}

//Login Function for LocalStorage
function login() {
  store.commit('login', "testemail");
  alert('loggedin');
}*/

onMounted(() => {
  store.commit('initializeStore');
});
</script>

<template>
<link rel="preconnect" href="https://rsms.me/">
<link rel="stylesheet" href="https://rsms.me/inter/inter.css">

<nav class="logout-navbar">
    <div class="navbar-left">
        <span class="navbar-title">Bibliomania</span>
    </div>
    <div class="navbar-right">
        <router-link to="/login" class="navbar-link" v-if="!store.state.email">Login</router-link>
        <router-link to="/register" class="navbar-link" v-if="!store.state.email">Register</router-link>
    </div>
</nav>
<router-view />
</template>




<style>


#app {
  font-family: Inter, sans-serif;
  font-feature-settings: 'liga' 1, 'calt' 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  color: red
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logout-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f2f2f2;
}

.navbar-left {
    flex: 0;
}

.navbar-title {
    font-size: 28px;
    font-weight: bold;
}

.navbar-right {
    display: flex;
}

.navbar-link {
    font-size: 20px;
    margin-left: 10px;
    text-decoration: none;
    color: #333;
}
</style>
