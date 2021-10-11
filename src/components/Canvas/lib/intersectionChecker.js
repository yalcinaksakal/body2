import { Box3, CircleGeometry, MeshBasicMaterial, Mesh } from "three";

const geometry = new CircleGeometry(0.3, 32);
const material = new MeshBasicMaterial({ color: 0xffff00 });
const circle = new Mesh(geometry, material);
// circle.rotateX(Math.PI / 2);

const intersectionChecker = (mouse, model, scene) => {
  scene.remove(circle);
  circle.position.set(mouse.x, mouse.y, 0);
  const box1 = new Box3().setFromObject(circle);
  const box2 = new Box3().setFromObject(model);
  if (box1.intersectsBox(box2)) scene.add(circle);
  console.log(box1.intersectsBox(box2));
};

export default intersectionChecker;
