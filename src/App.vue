<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
body,
html {
  min-height: 100vh;
  width: 100%;
  overflow-y: hidden;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
