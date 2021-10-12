import { PlaneGeometry, MeshStandardMaterial, DoubleSide, Mesh } from "three";

const createPlane = () => {
  const plane = new Mesh(
    new PlaneGeometry(window.innerWidth, window.innerHeight, 64, 64),
    new MeshStandardMaterial({
      color: "gray",
      // transparent: true,
      // opacity: 0.8,
    })
  );

  plane.castShadow = true;
  plane.receiveShadow = true;
  plane.rotation.x = (-Math.PI * 0.8) / 2;
  plane.position.set(0, 0, 0);
  plane.material.side = DoubleSide;

  return plane;
};

export default createPlane;
