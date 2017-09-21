<template>
  <div id="app">
    <router-view></router-view>
    <h2>
      <router-link to="/overAll">overAll</router-link>
      <router-link to="/industry">industry</router-link>
      <router-link to="/rank">rank</router-link>
      <router-link to="/source">source</router-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.echarts{
  height: 400px;
  width: 800px;
}
</style>
