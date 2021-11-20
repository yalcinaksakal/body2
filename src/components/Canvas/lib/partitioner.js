import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";
import { Vector3 } from "three";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry";

let lastPos = new Vector3(0, 0, 0);
let convexNo = 0;
const cubes = [];
const convexPoints = [
  new Vector3(-0.5, 0, 0),
  new Vector3(0.5, 0, 0),
  new Vector3(0.5, 0.1, 0),
  new Vector3(-0.5, 0.1, 0),
];

const createConvex = (
  points = convexPoints,
  name = convexNo,
  color = "dodgerblue"
) => {
  convexNo++;
  const geometry = new ConvexGeometry(points);
  const material = new MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.2,
  });
  const convex = new Mesh(geometry, material);
  convex.name = name;
  return convex;
};
export const convexMesh = createConvex(convexPoints);
const createCube = (pos = lastPos) => {
  // const points = [];
  const geometry = new BoxGeometry(0.01, 0.01, 0.01);
  const material = new MeshBasicMaterial({
    color: "dodgerblue",
  });
  const cube = new Mesh(geometry, material);
  cube.position.set(pos);
  cubes.push(cube);
  return cube;
};

export default createCube;
