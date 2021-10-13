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

  // // boyun tavan omuz
  // points.push(new Vector3(0.22, 6.44, -0.26));
  // points.push(new Vector3(-0.22, 6.44, -0.26));
  // // boyun tavan ön
  // points.push(new Vector3(0.02, 6.3, 0.02));
  // points.push(new Vector3(0.16, 6.35, -0.05));
  // points.push(new Vector3(-0.16, 6.35, -0.05));
  // // boyun tavan arka
  // points.push(new Vector3(0, 6.44, -0.5));
  // points.push(new Vector3(0.16, 6.42, -0.45));
  // points.push(new Vector3(-0.16, 6.42, -0.45));

  const geometry = new BoxGeometry(0.01, 0.01, 0.01);
  const material = new MeshBasicMaterial({
    color: "dodgerblue",
    // transparent: true,
    // opacity: 0.2,
  });
  const cube = new Mesh(geometry, material);
  cube.position.set(0.22, 6.44, -0.26);
  return cube;
  // return createBodyParts(points, "ankle");
};

export default createCube;
