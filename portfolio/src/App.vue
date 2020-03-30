<template>
  <div id="app">
    <router-view/>
    <FooterItem />
  </div>
</template>

<script>
import FooterItem from "./components/FooterItem";
export default {
  name: "app",
  components: {
    FooterItem,
  }
};
</script>

<style>
#app {

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  overflow: hidden;

}
body{
  margin: 0;
}
</style>
