import { CircleGeometry, MeshStandardMaterial, DoubleSide, Mesh } from "three";

const createPlane = () => {
  const plane = new Mesh(
    new CircleGeometry(5, 64),
    new MeshStandardMaterial({
      color: "dodgerblue",
      transparent: true,
      opacity: 0.4,
    })
  );

  plane.castShadow = true;
  plane.receiveShadow = true;
  plane.rotation.x = -Math.PI / 2;
  plane.position.set(0, -1, 0);
  plane.material.side = DoubleSide;

  return plane;
};

export default createPlane;
