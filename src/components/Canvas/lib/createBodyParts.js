import { BoxGeometry, Vector3, MeshBasicMaterial, Mesh } from "three";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry";

const createBodyParts = points => {
  const geometry = new ConvexGeometry(points);
  const material = new MeshBasicMaterial({
    color: "dodgerblue",
    transparent: true,
    opacity: 0.2,
  });
  return new Mesh(geometry, material);
};

const createCube = () => {
  const points = [];

  points.push(new Vector3(0.26, 0.17, 0.67));
  points.push(new Vector3(0.63, 0.19, 0.64));
  points.push(new Vector3(0.65, 0.25, 0.64));
  points.push(new Vector3(0.26, 0.29, 0.67));

  points.push(new Vector3(0.55, 0.19, 0.14));
  points.push(new Vector3(0.21, 0.19, 0.14));
  points.push(new Vector3(0.23, 0.45, 0.14));
  points.push(new Vector3(0.5, 0.45, 0.14));

  points.push(new Vector3(0.42, 0.16, -0.41));
  points.push(new Vector3(0.22, 0.16, -0.41));
  points.push(new Vector3(0.22, 0.38, -0.41));
  points.push(new Vector3(0.42, 0.38, -0.41));

  const geometry = new BoxGeometry(0.01, 0.01, 0.01);
  const material = new MeshBasicMaterial({
    color: "dodgerblue",
    // transparent: true,
    // opacity: 0.2,
  });
  const cube = new Mesh(geometry, material);
  // return cube;
  return createBodyParts(points);
};

export default createCube;
