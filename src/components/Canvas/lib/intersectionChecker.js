import { Raycaster, CylinderGeometry, Mesh, MeshStandardMaterial } from "three";

const raycaster = new Raycaster();

const geometryHelper = new CylinderGeometry(0.05, 0.05, 0.01, 64);
// geometryHelper.translate(0, 50, 0);
geometryHelper.rotateX(Math.PI / 2);
export const helper = new Mesh(
  geometryHelper,
  new MeshStandardMaterial({
    color: "dodgerblue",
  })
);

const intersectionChecker = (mouse, cube, camera) => {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(cube);
  // Toggle rotation bool for meshes that we clicked

  if (intersects.length > 0) {
    helper.position.set(0, 0, 0);
    console.log(intersects[0]);
    helper.lookAt(intersects[0].face.normal);

    helper.position.copy(intersects[0].point);
    // helper.position.set(mouse.x, mouse.y, intersects[0].point.z);
  }
};

export default intersectionChecker;
