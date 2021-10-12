import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const setOrbitControls = (cam, el) => {
  const controls = new OrbitControls(cam, el);
  controls.target.set(0, 0, 0);
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = 2;
  controls.enableDamping = true;
  controls.maxDistance = 15;
  controls.minDistance = 3;
  controls.maxPolarAngle = (Math.PI * 0.99) / 2;
  controls.enablePan = false;

  return controls;
};

export default setOrbitControls;
