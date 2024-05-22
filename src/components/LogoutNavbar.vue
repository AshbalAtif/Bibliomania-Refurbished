<template>
    <nav class="logout-navbar">
        <div class="navbar-left">
            <span class="navbar-title">Bibliomania</span>
        </div>
        <div class="navbar-right">
            <router-link to="/login" class="navbar-link">Login</router-link>
            <router-link to="/register" class="navbar-link">Register</router-link>
        </div>
    </nav>
</template>

<style scoped>
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