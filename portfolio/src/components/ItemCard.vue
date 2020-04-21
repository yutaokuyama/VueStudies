<template>
  <div class="work-card">
    <router-link class="nav" id="article" :to="convertedPagePath" exact>
      <img :src="imgPath" alt="hoge" />
      <div class="mask">
        <div class="caption"><slot /></div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    imgPath: {
      type: String,
      default: "",
    },
    pagePath: {
      type: String,
      default: "",
    },
  },
  computed: {
    convertedPagePath: function() {
      return "/"+this.pagePath;
    },
  },
};
</script>

<style scoped>
div {
  position: relative;
 
}
img {
  position: relative;
  width: 100%;
  vertical-align: bottom;
}
h1:hover {
  opacity: 10;
}
.mask {
  width: 100%;
  height: 100%;
  position: absolute; /* 絶対位置指定 */
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4); /* マスクは半透明 */
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.work-card .caption {
  font-size: 130%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  color: #fff;
}
.work-card:hover .mask {
  opacity: 1; /* マスクを表示する */
}
</style>
