<template>
  <div id="works">
    <HeaderItem />
    <div class="grid">
      <ItemCard
        imgPath="/images/rzmyep2019/daito_scale.png"
        pagePath="Rzmyep2019"
        >RZMYEP 2019</ItemCard
      >
      <ItemCard imgPath="/images/justicia/miro.png" pagePath="Justicia"
        >JUSTICIA STATE</ItemCard
      >
      <ItemCard imgPath="/images/tukiatari/live.png" pagePath="tukiatari"
        >つきあたりの実験室</ItemCard
      >
      <ItemCard imgPath="/images/sohosai2019/part3.png" pagePath="Sohosai2019"
        >雙峰祭2019</ItemCard
      >
      <ItemCard imgPath="/images/inofes2019/paspied.png" pagePath="Inofes2019"
        >J-WAVE INNOVATION WORLD FESTA 2019 パスピエ VJ</ItemCard
      >
      <ItemCard imgPath="/images/MAD/flyer.png" pagePath="Mad"
        >MAD</ItemCard
      >
      <ItemCard imgPath="/images/kbc2018/front.png" pagePath="Kbc2018"
        >KBC SUMMIT 2018</ItemCard
      >
    </div>
  </div>
</template>
<script>
import HeaderItem from "./HeaderItem";
import ItemCard from "./ItemCard";
export default {
  name: "works",
  components: {
    HeaderItem,
    ItemCard,
  },
  data() {
    return {};
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-gap: 0px 0px;
}
@media screen and (min-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
@media screen and (min-width: 768px) and (max-width: 1424px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
@media screen and (min-width: 1424px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

h1 {
  text-align: left;
  margin-left: 0.5rem;
  margin-bottom: 0px;
  padding-top: 1rem;
  padding-bottom: 0;
  font-size: 48px;
}
.date {
  text-align: left;
  margin-top: 0px;
  margin-left: 0.5rem;
  font-size: 24px;
}
p {
  color: #888888;
  font-family: helvetica, sans-serif;
  font-size: 12px;
  font-style: normal;
  line-height: 20px;
  padding-bottom: 30px;
  padding-top: 0px;
  padding-left: 0.5rem;
  text-align: left;
  text-transform: none;
  width: 100%;
}
.text {
  padding-bottom: 15rem;
}
.description {
  padding-left: 2rem;
}
img.top {
  width: 100%;
}
.article .grid {
  display: grid;
  grid-gap: 0px 0px;
  grid-template-columns: 1fr 1fr;
}
.article .grid img {
  width: 100%;
}
</style>
