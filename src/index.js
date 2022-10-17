import {
  BoxGeometry,
  BufferGeometry,
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
  75,
  window.innerWidth / window.innerHeight,
  10,
  100
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

camera.position.set(0, 0, 50);
camera.lookAt(0, 0, 0);

function rotate(object) {
  object.rotation.x += 0.01;
  object.rotation.y += 0.01;
  object.rotation.z += 0.01;
}
let x = 1;
cube.translateX(40);
function animate() {
  requestAnimationFrame(animate);
  // rotate(line);
  // rotate(cube);

  renderer.render(scene, camera);
}

animate();
console.log("hello", x);
