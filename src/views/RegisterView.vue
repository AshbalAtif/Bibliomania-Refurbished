<script setup>
//import { useStore } from 'vuex';
//import { router } from 'vue-router';

//const store = useStore();

//Register Function for LocalStorage


</script>

<template>
    <div class="container">
        <div class="titlebox">
        <h2 class="title">Register</h2>
        </div>
        
        <form class="sign-up-form">

        <div class="input-field">
            <label for="username">Username</label>
            <input type="text" id="username">
        </div>

        <div class="input-field">
            <label for="email">Email</label>
            <input type="email" id="email">
        </div>
        
        <div class="input-field">
            <label for="password">Password</label>
            <input type="password" id="password"/>
        </div>

            <input type="submit" value="Register" class="btn" @click="register"/>
        </form>
    </div>
</template>

<style scoped>
     .container {
            background-color:   hsla(145, 80%, 93%, 1);
            border-radius: 8px;
            box-shadow: 0 4px 8px hsla(145, 10%, 50%, 1);
            padding: 20px;
            width: 25%;
            float: center;
            justify-content: center;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10%;
            padding-bottom: 5%;
        }

        .sign-up-form {
            font-size: 1em;
        }

        label {
            float: left;
            padding-bottom: 6px;
            padding-left: 2px;
        }

        .title {
            font-size: 2em;
            text-align: left;
            margin-bottom: 10%;
        }

        .input-field {
            margin-bottom: 5%;
        }

        .input-field input {
            width: 95%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 20px;
            outline: none;
        }

        .input-field input:focus {
            border-color: #42b983;
        }

        .btn {
            width: 100%;
            border-radius: 20px;
            padding: 10px;
            border: none;
            background-color: hsl(210, 10%, 24%);
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 5%;
        }

        .btn:hover {
            background-color: hsl(210, 10%, 35%);
        }

</style>