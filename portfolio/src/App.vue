<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: "app",
  components: {

  }
};
</script>

<style>
#app {
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  overflow: hidden;


}
body{
  margin: 0;
  padding:0;
}
</style>
