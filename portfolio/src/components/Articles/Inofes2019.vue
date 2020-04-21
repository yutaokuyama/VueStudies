<template>
  <div class="article">
    <HeaderItem />
    <img class="top" src="/images/inofes2019/paspied.png">
    <div class="description">
    <h1>J-WAVE INNOVATION WORLD FESTA 2019</h1>
    <h3>パスピエ VJ</h3>
    <h2 class="date">2019.9  六本木</h2>
    <div class="text">
    <p class="desctiption">Rhizomatiksの忘年会にお声がけいただきVJ</p>
    </div>
  </div>
     <div class="grid">
    <img class="galally" src="/images/inofes2019/Asset 9.png">
    </div>
  </div>
</template>
<style scoped>
.grid{
   padding-bottom: 10rem;
     grid-template-columns: 1fr;
}
h1 {
  font-size: 38px;
}
h3 {
  text-align: left;
  margin-left: 0.5rem;
  margin-bottom: 0px;
  margin-top: 0px;
  padding-top: 0rem;
  padding-bottom: 0;
  font-size: 36px;
}


</style>
<script>
import HeaderItem from "../HeaderItem";

export default {
  name: "Inofes2019",
  components: {
    HeaderItem,
  },
};
</script>
