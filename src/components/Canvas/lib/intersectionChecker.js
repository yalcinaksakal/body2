import { Raycaster, ConeGeometry, Mesh, MeshNormalMaterial } from "three";

const raycaster = new Raycaster();

const geometryHelper = new ConeGeometry(0.2, 1, 4);
// geometryHelper.translate(0, 50, 0);
geometryHelper.rotateX(Math.PI / 2);
const helper = new Mesh(geometryHelper, new MeshNormalMaterial());

const intersectionChecker = (mouse, model, camera, scene) => {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  // Toggle rotation bool for meshes that we clicked
  console.log(intersects, mouse);
  if (intersects.length > 0) {
    helper.position.set(0, 0, 0);
    console.log(intersects[0]);
    helper.lookAt(intersects[0].face.normal);
    helper.position.copy(intersects[0].point);
    scene.add(helper);
  }
};

export default intersectionChecker;
