"use strict";var canvas,scene,camera,renderer,cube;window.onload=function(){console.log("welcome"),canvas=document.getElementById("canvas"),scene=new THREE.Scene,camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),renderer=new THREE.WebGLRenderer,renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(renderer.domElement);var e=new THREE.BoxGeometry(1,1,1),n=new THREE.MeshNormalMaterial;cube=new THREE.Mesh(e,n),scene.add(cube),camera.position.z=5,render()};var render=function e(){requestAnimationFrame(e),cube.rotation.x+=.1,cube.rotation.y+=.1,renderer.render(scene,camera)};