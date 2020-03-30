<template>
  <div id="home">
    <canvas id="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    <div id="wrap">
      <h1>ホーム</h1>
      <router-link  id="home-nav" to="/works" exact><a>works</a></router-link>
      <router-link  id="home-nav" to="/about" exact><a>about</a></router-link>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
export default {
  name: "RotateBox",
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
      canvasHeight
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    const _canvas = document.getElementById("canvas");
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: _canvas
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
    }
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  head: {
    meta: [
      { name: "viewport", content: "width=device-width,initial-scale=1.0" }
      // ...
    ]
  }
};
</script>

<style scoped>
#wrap {
  position: absolute;
  left: 50%;
  top: 40%;
  width: 80%;
  text-align: left;
  color: white;
  max-width: 100px;
  
}
canvas {
  margin: 0;
  overflow: hidden;
  z-index: -1;
}
h1 {
  z-index: 1;
}
</style>
