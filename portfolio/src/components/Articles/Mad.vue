<template>
  <div class="article">
    <HeaderItem />
    <img class="top" src="/images/MAD/flyer.png">
    <div class="description">
    <h1>MAD</h1>
    <h2 class="date">2019.4 cafe4</h2>
    <div class="text">
    <p class="desctiption">Rhizomatiksの忘年会にお声がけいただきVJ</p>
    </div>
  </div>
     <div class="grid">
    <img class="galally" src="/images/MAD/instancing.png">
    <img class="galally" src="/images/MAD/wave.png">
    </div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/UuLEwCW4aO0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>
<style scoped>
.grid{
   padding-bottom: 10rem;
}

</style>
<script>
import HeaderItem from "../HeaderItem";

export default {
  name: "Mad",
  components: {
    HeaderItem,
  },
};
</script>
