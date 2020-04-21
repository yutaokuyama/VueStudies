<template>
  <div class="article">
    <HeaderItem />
    <img class="top" src="/images/tukiatari/live.png">
    <div class="description">
    <h1>つきあたりの実験室</h1>
    <h2 class="date">2019.11 ひたちなか STORMYMONDAY</h2>
    <div class="text">
    <p class="desctiption">Rhizomatiksの忘年会にお声がけいただきVJ</p>
    </div>
  </div>
     <div class="grid">
    <img class="galally" src="/images/tukiatari/set.png">
    </div>
  </div>
</template>
<style scoped>
.text {
  padding-bottom: 10rem;
}
.grid{
   padding-bottom: 5rem;
      padding-left: 20rem;
       padding-right: 20rem;
    grid-template-columns: 1fr;
}

</style>
<script>
import HeaderItem from "../HeaderItem";

export default {
  name: "Tukiatari",
  components: {
    HeaderItem,
  },
};
</script>
