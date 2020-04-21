
<template>
  <div class="article">
    <HeaderItem />
    <img class="top" src=/images/sohosai2019/part3.png>
    <div class="description">
    <h1>雙峰祭2019 前夜祭パフォーマンス "ゆらぎ"</h1>
    <h2 class="date">2019.11 筑波大学石の広場</h2>
    <div class="text">
    <p class="desctiption">Rhizomatiksの忘年会にお声がけいただきVJ</p>
    </div>
  </div>
     <div class="grid" id="simuilator">
    <img class="galally"  src="/images/sohosai2019/simulator.gif">
    </div>
    <div class="grid">
    <img class="galally"  src="/images/sohosai2019/IMG_5879.JPG">
     <img class="galally"  src="/images/sohosai2019/polid.png">
    </div>
  </div>
</template>
<style scoped>
.grid{
   padding-bottom: 0rem;
   background: black;
}

.grid#simuilator {
    grid-template-columns: 1fr;
    padding-bottom: 0;
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
