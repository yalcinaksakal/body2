import { Vector2 } from "three";

// let vec = new Vector3();
// let pos = new Vector3();
let mouse = new Vector2();
// let distance;

const posMapper = (x, y) => {
  // vec.set(
  //   (x / window.innerWidth) * 2 - 1,
  //   -(y / window.innerHeight) * 2 + 1,
  //   0.5
  // );

  // vec.unproject(camera);

  // vec.sub(camera.position).normalize();

  // distance = -camera.position.z / vec.z;

  // pos.copy(camera.position).add(vec.multiplyScalar(distance));
  // mouse.x = pos.x;
  // mouse.y = pos.y;
  mouse.x = (x / window.innerWidth) * 2 - 1;
  mouse.y = -(y / window.innerHeight) * 2 + 1;
  return mouse;
};

export default posMapper;
