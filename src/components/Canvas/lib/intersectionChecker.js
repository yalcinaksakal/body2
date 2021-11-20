import { Raycaster, CylinderGeometry, Mesh, MeshStandardMaterial } from "three";

const raycaster = new Raycaster();

const geometryHelper = new CylinderGeometry(0.06, 0.06, 0.01, 64);
geometryHelper.rotateX(Math.PI / 2);

export const helper = new Mesh(
  geometryHelper,
  new MeshStandardMaterial({
    color: "red",
  })
);

// const geometryHelper = new ConeGeometry(0.2, 1, 8);
// // geometryHelper.translate(0, 50, 0);
// geometryHelper.rotateX(-Math.PI / 2);
// export const helper = new Mesh(geometryHelper, new MeshNormalMaterial());

const intersectionChecker = (mouse, bodyParts, camera, setBodyPart) => {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(bodyParts);
  // model.traverse(o => {
  //   if (o.isMesh) {
  //     const i2 = raycaster.intersectObject(o);
  //     console.log(i2);
  //     helper.position.set(0, 0, 0);
  //     helper.lookAt(i2[0].face.normal);
  //     helper.position.copy(i2[0].point);
  //     helper.name = "helper";
  //   }
  // });

  if (intersects.length > 0) {
    setBodyPart(intersects[0].object.name);
    helper.position.set(0, 0, 0);
    helper.lookAt(intersects[0].face.normal);
    helper.position.copy(intersects[0].point);
    helper.name = "helper";
    return true;
  }
  return false;
};

export default intersectionChecker;
