import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";

const bodyParts = () => {
  const geometry = new BoxGeometry(0.5, 0.3, 1.1);
  const material = new MeshBasicMaterial({
    color: "red",
    transparent: true,
    opacity: 0.2,
  });
  const cube = new Mesh(geometry, material);
  cube.position.set(0, 0, 0);

  return cube;
};

export default bodyParts;
