import { BoxGeometry, Vector3, MeshBasicMaterial, Mesh } from "three";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry";

export const createBodyParts = (points, name, color = "dodgerblue") => {
  const geometry = new ConvexGeometry(points);
  const material = new MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.2,
  });

  const part = new Mesh(geometry, material);
  part.name = name;
  return part;
};

const createCube = () => {
  // const points = [];

  const geometry = new BoxGeometry(0.01, 0.01, 0.01);
  const material = new MeshBasicMaterial({
    color: "dodgerblue",
    // transparent: true,
    // opacity: 0.2,
  });
  const cube = new Mesh(geometry, material);
  cube.position.set(-0.26, 7.06, -0.08);
  return cube;
  // return createBodyParts(points, "ankle");
};

export default createCube;
