import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const setOrbitControls = (cam, el) => {
  const controls = new OrbitControls(cam, el);
  controls.target.set(0, 4, 0);
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = 2;
  controls.enableDamping = true;
  controls.maxDistance = 15;
  controls.minDistance = 6;
  controls.maxPolarAngle = (Math.PI * 1.5) / 2;
  controls.enablePan = false;

  return controls;
};

export default setOrbitControls;
