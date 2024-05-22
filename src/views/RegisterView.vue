<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="Register">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Add your login logic here
            // You can access the entered username and password using this.username and this.password
        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>