<template>
  <div id="app">
    <HeaderItem />
    <RotateBox />
    <FooterItem />
  </div>
</template>

<script>
import RotateBox from "./components/RotateBox";
import HeaderItem from "./components/HeaderItem";
import FooterItem from "./components/FooterItem";
export default {
  name: "app",
  components: {
    HeaderItem,
    FooterItem,
    RotateBox
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

}
body{
  margin: 0;
}
</style>
