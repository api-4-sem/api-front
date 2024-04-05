<template>
  <div class="page">
    <nav class="menu">
      <div class="menu__logo">
        <img src="./assets/logo.png">
      </div>
      <div class="menu__links">
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>

    <div class="content">
      <router-view />
    </div>

    <div class="footer">
      <img src="./assets/logo.png">
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px !important;
}

.page {
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 0;
  margin: 0;
}

.menu {
  background-color: #464444;
  width: 100%;
  height: 60px;
  gap: 30%;
  display: grid;
  grid-template-columns: 200px max-content;
}

.menu__logo {
  margin-left: 21px;
  display: flex;
  align-content: center;

  img {
    height: 47px;
    margin: auto 0;
  }
}

.menu__links {
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 15px;

  a {
    color: white;
    text-decoration: none;
    min-width: fit-content;
  }
}

.content {
  flex: 1;
  padding: 20px 20px 0 20px;
}

.footer {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 43px;
  border-top: 1px solid black;

  img {
    margin-right: 10px;
    height: inherit;
  }
}
</style>
