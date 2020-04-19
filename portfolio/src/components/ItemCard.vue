<template>
<div class = "work-card">
<img :src="imgPath" alt="hoge"/>
<div class="mask">
		<div class="caption"><slot /></div>
	</div>
</div>
</template>

<script>
export default {
  props:{
    path:{
      type:String,
      default:''
    },
  },
  methods:{
    imgPath: function(){
      console.log(require('@/assets/images/ET8zF7HVAAEWAlP.jpeg'));
      return require(`${this.path}`);
    },
    loadImg: function(){
    return require(`${this.path}`);
  },
  },
}
</script>


<style scoped>
div{
  position: relative;
}
img {
  position: relative;
  width: 100%;
}
h1:hover{
      opacity: 10;
}
.mask {
	width:			100%;
	height:			100%;
	position:		absolute;	/* 絶対位置指定 */
	top:			0;
	left:			0;
	opacity:		0;	/* マスクを表示しない */
	background-color:	rgba(0,0,0,0.4);	/* マスクは半透明 */
	-webkit-transition:	all 0.2s ease;
	transition:		all 0.2s ease;
}
.work-card .caption {
	font-size:		130%;
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    color:			#fff;
}
.work-card:hover .mask {
	opacity:		1;	/* マスクを表示する */
}
</style>
