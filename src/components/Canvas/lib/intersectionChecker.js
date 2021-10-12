import { Raycaster, CylinderGeometry, Mesh, MeshStandardMaterial } from "three";

const raycaster = new Raycaster();

const geometryHelper = new CylinderGeometry(0.05, 0.05, 0.01, 64);
geometryHelper.rotateX(Math.PI / 2);

export const helper = new Mesh(
  geometryHelper,
  new MeshStandardMaterial({
    color: "red",
  })
);

const intersectionChecker = (mouse, cube, camera) => {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(cube);
  if (intersects.length > 0) {
    console.log(intersects[0].object.name);
    helper.position.set(0, 0, 0);
    helper.lookAt(intersects[0].face.normal);
    helper.position.copy(intersects[0].point);
  }
};

export default intersectionChecker;
