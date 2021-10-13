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

  // //  boyun taban arka
  // points.push(new Vector3(0.22, 6.08, -0.62));
  // points.push(new Vector3(-0.22, 6.08, -0.62));
  // // boyun taban ön
  // points.push(new Vector3(0.22, 6.06, -0.1));
  // points.push(new Vector3(-0.22, 6.06, -0.1));
  // //boyun taban omuz
  // points.push(new Vector3(0.28, 6.22, -0.42));
  // points.push(new Vector3(-0.28, 6.22, -0.42));

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
  ///omuz ön bottom

  //points.push(new Vector3(-0.6, 5.8, -0.02));
  // points.push(new Vector3(0.6, 5.8, -0.02));
  // points.push(new Vector3(0.22, 6.06, -0.1));
  // points.push(new Vector3(-0.22, 6.06, -0.1));
  //koltuk altı
  // points.push(new Vector3(0.48, 5.7, 0.22));
  // points.push(new Vector3(-0.48, 5.7, 0.22));
  //omuz arka bottom
  // points.push(new Vector3(-0.58, 5.54, -0.56));
  // points.push(new Vector3(0.58, 5.54, -0.56));
  //omus boyun
  // points.push(new Vector3(0.28, 6.22, -0.42));
  // points.push(new Vector3(-0.28, 6.22, -0.42));
  const geometry = new BoxGeometry(0.01, 0.01, 0.01);
  const material = new MeshBasicMaterial({
    color: "dodgerblue",
    // transparent: true,
    // opacity: 0.2,
  });
  const cube = new Mesh(geometry, material);
  cube.position.set(0.58, 5.5, 0.32);
  return cube;
  // return createBodyParts(points, "ankle");
};

export default createCube;
