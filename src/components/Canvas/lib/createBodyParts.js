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
  const points = [];

  //bottom
  points.push(new Vector3(-0.75, 4.1, 0.2));
  points.push(new Vector3(-0.5, 4.1, 0.3));
  points.push(new Vector3(0.75, 4.1, 0.2));
  points.push(new Vector3(0.5, 4.1, 0.3));
  points.push(new Vector3(0.65, 4.38, -0.47));
  points.push(new Vector3(-0.65, 4.38, -0.47));
  //middle
  points.push(new Vector3(0.43, 4.7, -0.36));
  points.push(new Vector3(-0.43, 4.7, -0.36));
  points.push(new Vector3(0.47, 4.7, 0.155));
  points.push(new Vector3(0.22, 4.7, 0.3));
  points.push(new Vector3(-0.22, 4.7, 0.3));
  points.push(new Vector3(-0.47, 4.7, 0.155));

  //top
  points.push(new Vector3(0.43, 5, -0.4));
  points.push(new Vector3(-0.43, 5, -0.4));
  points.push(new Vector3(0.47, 5, 0.3));
  points.push(new Vector3(-0.47, 5, 0.3));

  const geometry = new BoxGeometry(0.01, 0.01, 0.01);
  const material = new MeshBasicMaterial({
    color: "dodgerblue",
    // transparent: true,
    // opacity: 0.2,
  });
  const cube = new Mesh(geometry, material);
  cube.position.set(0.42, 4.7, -0.325);
  // return cube;
  return createBodyParts(points, "ankle");
};

export default createCube;
