<template>
    <canvas id="canvas" width="600" height="400"></canvas>
</template>

<script>
import * as THREE from "three";
export default {
    name: "RotateBox",
    data(){
        const scene = new THREE.Scene();
        const renderer = null;
        const camera = new THREE.PerspectiveCamera(75,600/400,0.1,1000);
        const light  = new THREE.DirectionalLight(0xffffff);
        const geometry = new THREE.BoxGeometry(400,400,400);
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geometry,material);
      return {scene,renderer,camera,light,geometry,material,cube};
    },
    mounted(){
        const $canvas  = document.getElementById('canvas');
        this.renderer = new THREE.WebGLRenderer({
            antialias:true,
            canvas: $canvas
        });
        this.camera.position.set(0.0,0.0,800.0);
        this.light.position.set(0.0,0.0,10.0);
        this.scene.add(this.camera);
        this.scene.add(this.light);
        this.scene.add(this.cube);
        this.animate();
    },
    methods:{
        animate(){
            requestAnimationFrame(this.animate);
            this.cube.rotation.x += 0.02;
            this.cube.rotation.z += 0.02;
            this.renderer.render(this.scene,this.camera);
        }
    }
};
</script>

<style></style>