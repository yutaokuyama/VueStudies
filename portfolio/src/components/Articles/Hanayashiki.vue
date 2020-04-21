<template>
  <div class="article">
    <HeaderItem />
    <img class="top" src="/images/Hanayashiki/Asset 1.png">

    <div class="description">
    <h1>梅屋敷盆踊り大会</h1>
    <h2 class="date">2019.8 東京 梅屋敷</h2>
    <div class="text">
    <p class="desctiption">kyo君にお声がけいただき、浪ちゃんとoF若手三人組でプロジェクションマッピングを実施。画像のトランジション部分等を実装</p>
    </div>
  </div>
     <div class="grid">
    <img class="galally" src="/images/Hanayashiki/output-palette.gif">
    <img class="galally" src="/images/Hanayashiki/hanayashiki_top.png">

    </div>
  </div>
</template>
<style scoped>
.grid{
    background: white;
   padding-bottom: 10rem;
    grid-template-columns: 1fr 1fr;
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
