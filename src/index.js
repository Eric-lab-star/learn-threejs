import {
  BoxGeometry,
  BufferGeometry,
  CustomBlending,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(
  110,
  window.innerWidth / window.innerHeight,
  10,
  440
);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const boxGeometry = new BoxGeometry(10, 10, 10);
const meshMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
const lineMaterial = new LineBasicMaterial({ color: 0xffffff, linewidth: 100 });

const points = [];
points.push(new Vector3(-20, 0, 0));
points.push(new Vector3(-10, 10, 0));
points.push(new Vector3(0, 0, 0));
points.push(new Vector3(-20, 0, 0));

const cube = new Mesh(boxGeometry, meshMaterial);
const geometry = new BufferGeometry().setFromPoints(points);
const line = new Line(geometry, lineMaterial);
scene.add(line, cube);

camera.position.set(0, 50, 40);
camera.lookAt(-50, 0, 10);

function rotate(object) {
  object.rotation.x += 0.01;
  object.rotation.y += 0.01;
  object.rotation.z += 0.01;
}

let dx, dy, dz;
cube.translateX(-50);
cube.translateZ(-50);

function moveCube() {
  if (cube.position.x === 50) {
    dx = -0.4;
  }
  if (cube.position.x === -50) {
    dx = 0.4;
  }

  cube.translateOnAxis(new Vector3(dx, dy, dz), 10);
}

function rotateCube() {
  cube.rotateY(0.05);
}
scene.rotateY(1);
scene.rotateX(0);
scene.rotateZ(0);
const x = 10;
function animate() {
  requestAnimationFrame(animate);
  // scene.rotateY(0.01);
  moveCube();
  rotateCube();
  // rotate(line);
  // rotate(cube);

  renderer.render(scene, camera);
}

animate();
