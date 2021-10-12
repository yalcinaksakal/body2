import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";

const bodyParts = {
  female: {
    leftFoot: {
      pos: { x: -0.4, y: 0.26, z: 0.14 },
      dimensions: { width: 0.37, height: 0.2, depth: 1.1 },
    },
  },
};

const createCube = () => {
  const geometry = new BoxGeometry(0.37, 0.3, 1.1);
  const material = new MeshBasicMaterial({
    color: "red",
    transparent: true,
    opacity: 0.2,
  });
  const cube = new Mesh(geometry, material);
  cube.position.set(-0.4, 0.26, 0.14);

  return cube;
};

export default createCube;
