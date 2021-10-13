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

  // // boyun tavan omuz
  // points.push(new Vector3(0.22, 6.44, -0.26));
  // points.push(new Vector3(-0.22, 6.44, -0.26));
  // // boyun tavan ön
  // points.push(new Vector3(0.02, 6.3, 0.02));
  // points.push(new Vector3(0.16, 6.35, -0.05));
  // points.push(new Vector3(-0.16, 6.35, -0.05));

  // //kulakaltı
  // points.push(new Vector3(0.28, 6.54, -0.2));
  // points.push(new Vector3(-0.28, 6.54, -0.2));
  // //çene alt
  // points.push(new Vector3(0.24, 6.46, -0.06));
  // points.push(new Vector3(-0.24, 6.46, -0.06));
  // //gıdık alt
  // points.push(new Vector3(0.1, 6.36, 0.18));
  // points.push(new Vector3(-0.1, 6.36, 0.18));
  // //gıdık orta
  // points.push(new Vector3(0, 6.32, 0.2));
  // //dudak altı
  // points.push(new Vector3(0, 6.44, 0.18));
  // points.push(new Vector3(-0.1, 6.46, 0.18));
  // points.push(new Vector3(0.1, 6.46, 0.18));
  // //çene üst
  // points.push(new Vector3(-0.24, 6.52, 0.04));
  // points.push(new Vector3(0.24, 6.52, 0.04));

  // //dudak altı
  // points.push(new Vector3(-0.1, 6.46, 0.18));
  // points.push(new Vector3(0.1, 6.46, 0.18));
  // //çene üst
  // points.push(new Vector3(-0.24, 6.52, 0.04));
  // points.push(new Vector3(0.24, 6.52, 0.04));
  // //dudak yan
  // points.push(new Vector3(-0.12, 6.5, 0.16));
  // points.push(new Vector3(0.12, 6.5, 0.16));
  // //dudak üst
  // points.push(new Vector3(-0.08, 6.58, 0.2));
  // points.push(new Vector3(0.08, 6.58, 0.2));
  // //dudak üst orta
  // // points.push(new Vector3(0, 6.56, 0.22));
  // //göz altı, burun çevresi
  // points.push(new Vector3(-0.08, 6.7, 0.18));
  // points.push(new Vector3(0.08, 6.7, 0.18));

  // //yüz üst
  // points.push(new Vector3(-0.27, 6.72, 0.06));
  // points.push(new Vector3(0.27, 6.72, 0.06));
  // //kulak yüz üst
  // points.push(new Vector3(-0.32, 6.72, -0.18));
  // points.push(new Vector3(0.32, 6.72, -0.18));
  // //kulak yüz alt
  // points.push(new Vector3(-0.28, 6.58, -0.16));
  // points.push(new Vector3(0.28, 6.58, -0.16));

  // // //göz altı, burun çevresi
  // points.push(new Vector3(-0.08, 6.7, 0.18));
  // points.push(new Vector3(0.08, 6.7, 0.18));

  // //burun üst
  // points.push(new Vector3(-0.02, 6.82, 0.22));
  // points.push(new Vector3(0.02, 6.82, 0.22));
  // // //göz altı, yanak
  // points.push(new Vector3(-0.21, 6.72, 0.12));
  // points.push(new Vector3(0.21, 6.72, 0.12));
  // //gözüstü şakak
  // points.push(new Vector3(-0.22, 6.82, 0.14));
  // points.push(new Vector3(0.22, 6.82, 0.14));

  // // //burun üst
  // points.push(new Vector3(-0.02, 6.82, 0.22));
  // points.push(new Vector3(0.02, 6.82, 0.22));
  // points.push(new Vector3(-0.22, 6.82, 0.14));
  // points.push(new Vector3(0.22, 6.82, 0.14));
  // points.push(new Vector3(-0.21, 6.72, 0.12));
  // points.push(new Vector3(0.21, 6.72, 0.12));

  // // //kulak yüz üst
  // points.push(new Vector3(-0.32, 6.72, -0.18));
  // points.push(new Vector3(0.32, 6.72, -0.18));

  // points.push(new Vector3(-0.265, 6.72, 0.06));
  // points.push(new Vector3(0.265, 6.72, 0.06));

  // //kulakaltı
  // // points.push(new Vector3(0.28, 6.54, -0.2));
  // points.push(new Vector3(-0.28, 6.54, -0.2));

  // // //kulak yüz üst
  // points.push(new Vector3(-0.32, 6.72, -0.18));
  // // points.push(new Vector3(0.32, 6.72, -0.18));

  // points.push(new Vector3(-0.32, 6.78, -0.18));
  // // points.push(new Vector3(0.32, 6.78, -0.18));

  // //alın üst
  // points.push(new Vector3(-0.29, 6.88, -0.1));
  // points.push(new Vector3(0.29, 6.88, -0.1));

  // points.push(new Vector3(-0.32, 6.78, -0.18));
  // points.push(new Vector3(0.32, 6.78, -0.18));

  // points.push(new Vector3(-0.28, 6.94, -0.1));
  // points.push(new Vector3(0.28, 6.94, -0.1));

  // points.push(new Vector3(-0.24, 6.94, 0.1));
  // points.push(new Vector3(0.24, 6.94, 0.1));

  // points.push(new Vector3(0, 6.94, 0.25));

  // points.push(new Vector3(-0.25, 6.94, -0.44));
  // points.push(new Vector3(0.25, 6.94, -0.44));

  // points.push(new Vector3(0, 6.94, -0.62));

  // points.push(new Vector3(0, 7.16, -0.44));
  // points.push(new Vector3(0, 7.22, -0.2));
  // points.push(new Vector3(0, 7.14, 0.08));

  // points.push(new Vector3(-0.26, 7.06, -0.08));
  // points.push(new Vector3(0.26, 7.06, -0.08));

  // points.push(new Vector3(-0.12, 7.12, 0.06));
  // points.push(new Vector3(0.12, 7.12, 0.06));
  // //kulak arka üst dış
  // points.push(new Vector3(-0.37, 6.84, -0.35));
  // points.push(new Vector3(0.37, 6.84, -0.35));

  // points.push(new Vector3(-0.2, 7.16, -0.16));
  // points.push(new Vector3(0.2, 7.16, -0.16));

  // points.push(new Vector3(-0.2, 7.13, -0.46));
  // points.push(new Vector3(0.2, 7.13, -0.46));

  // points.push(new Vector3(-0.16, 6.84, -0.58));
  // points.push(new Vector3(0.16, 6.84, -0.58));

  //kulak üst hizadan kafa arkası
  points.push(new Vector3(-0.18, 6.76, -0.54));
  points.push(new Vector3(0.18, 6.76, -0.54));
  points.push(new Vector3(0, 6.76, -0.6));

  //kulak arka üst dış
  points.push(new Vector3(-0.37, 6.84, -0.35));
  points.push(new Vector3(0.37, 6.84, -0.35));
  //kulak arka alt dış
  points.push(new Vector3(-0.37, 6.62, -0.32));
  points.push(new Vector3(0.37, 6.62, -0.32));
  // //kulakaltı
  points.push(new Vector3(0.28, 6.54, -0.2));
  points.push(new Vector3(-0.28, 6.54, -0.2));

  // boyun tavan arka
  points.push(new Vector3(0, 6.44, -0.5));
  points.push(new Vector3(0.16, 6.42, -0.45));
  points.push(new Vector3(-0.16, 6.42, -0.45));

  // boyun tavan omuz
  points.push(new Vector3(0.22, 6.44, -0.26));
  points.push(new Vector3(-0.22, 6.44, -0.26));

  const geometry = new BoxGeometry(0.01, 0.01, 0.01);
  const material = new MeshBasicMaterial({
    color: "dodgerblue",
    // transparent: true,
    // opacity: 0.2,
  });
  const cube = new Mesh(geometry, material);
  cube.position.set(-0.26, 7.06, -0.08);
  // return cube;
  return createBodyParts(points, "ankle");
};

export default createCube;
