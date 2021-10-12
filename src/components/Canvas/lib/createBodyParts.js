import { BoxGeometry, Vector3, MeshBasicMaterial, Mesh } from "three";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry";

const createBodyParts = (points, name) => {
  const geometry = new ConvexGeometry(points);
  const material = new MeshBasicMaterial({
    color: "dodgerblue",
    transparent: true,
    opacity: 0.2,
  });

  const part = new Mesh(geometry, material);
  part.name = name;
  return part;
};

const createCube = () => {
  const points = [];

  points.push(new Vector3(-0.6, 1.94, -0.01));
  points.push(new Vector3(-0.2, 1.94, -0.01));
  points.push(new Vector3(-0.15, 1.94, -0.46));
  points.push(new Vector3(-0.6, 1.94, -0.46));

  points.push(new Vector3(-0.65, 2.34, 0.07));
  points.push(new Vector3(-0.15, 2.34, 0.07));
  points.push(new Vector3(-0.15, 2.34, -0.4));
  points.push(new Vector3(-0.55, 2.34, -0.4));

  const geometry = new BoxGeometry(0.01, 0.01, 0.01);
  const material = new MeshBasicMaterial({
    color: "dodgerblue",
    // transparent: true,
    // opacity: 0.2,
  });
  const cube = new Mesh(geometry, material);
  // return cube;
  return createBodyParts(points, "ankle");
};

export default createCube;
