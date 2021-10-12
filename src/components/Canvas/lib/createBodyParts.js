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

  points.push(new Vector3(-0.23, 0.45, 0.16));
  points.push(new Vector3(-0.5, 0.45, 0.16));
  points.push(new Vector3(-0.22, 0.38, -0.41));
  points.push(new Vector3(-0.44, 0.38, -0.41));

  points.push(new Vector3(-0.2, 0.7, -0.03));
  points.push(new Vector3(-0.5, 0.7, -0.03));
  points.push(new Vector3(-0.5, 0.74, -0.36));
  points.push(new Vector3(-0.2, 0.74, -0.36));

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
