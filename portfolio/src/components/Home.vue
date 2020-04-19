<template>
  <div id="home">
    <canvas id="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    <div id="wrap" class="f-container">
      <h1>Yuta Okuyama</h1>
      <router-link id="home-nav" to="/works" exact
        ><a id="link">works</a></router-link
      >
      <router-link id="home-nav" to="/about" exact
        ><a id="link">about</a></router-link
      >
      <br />
      <a href="https://twitter.com/yu_O93"
        ><font-awesome-icon class="fa-2x" :icon="['fab', 'twitter-square']"
      /></a>
      <a href="https://www.instagram.com/yuoku3"
        ><font-awesome-icon class="fa-2x" :icon="['fab', 'instagram-square']"
      /></a>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"; // ブランドアイコンを使うにはこれを読み込む必要がある
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faTwitterSquare, faInstagramSquare);
export default {
  name: "RotateBox",
  components: {
    FontAwesomeIcon,
  },
  data() {
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    let scene = new THREE.Scene();
    let renderer = null;
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasWidth / canvasHeight,
      0.1,
      1000
    );
    const light = new THREE.DirectionalLight(0xffffff);
    let geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);

    return {
      scene,
      renderer,
      camera,
      light,
      geometry,
      material,
      cube,
      canvasWidth,
      canvasHeight,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    const _canvas = document.getElementById("canvas");
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: _canvas,
    });
    this.camera.position.set(0.0, 0.0, 800.0);
    this.light.position.set(0.0, 0.0, 10.0);
    this.scene.add(this.cube);
    this.animate();
  },
  methods: {
    handleResize: function() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.canvasWidth = window.innerWidth;
      this.canvasHeight = window.innerHeight;
      // this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.canvasWidth, this.canvasHeight);

      this.camera.aspect = this.canvasWidth / this.canvasHeight;
      this.camera.updateProjectionMatrix();

      // カメラのアスペクト比を正す
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.cube.rotation.x += 0.02;
      this.cube.rotation.z += 0.02;
      this.renderer.render(this.scene, this.camera);
    },
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  head: {
    meta: [
      { name: "viewport", content: "width=device-width,initial-scale=1.0" },
      // ...
    ],
  },
};
</script>

<style scoped>
#wrap {
  position: absolute;
  left: 45%;
  top: 40%;

  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-block-start: 0;
  color: white;
}
#wrap h1 {
  margin-block-end: 0em;
}

a {
  margin-block-end: 0.5em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  display: inline-block;
  font-size: 12px;
}

a#link {
  margin-block-end: 0.5em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  display: inline-block;
  font-size: 25px;
  height: 1.9rem;
  border-bottom: solid 1px white;
  padding-bottom: 0em;
}

canvas {
  margin: 0;
  overflow: hidden;
  z-index: -1;
}
h1 {
  z-index: 1;
}
a:link,
a:visited,
a:hover,
a:active {
  color: white;
}
</style>
