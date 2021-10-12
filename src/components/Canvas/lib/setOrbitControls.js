import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const setOrbitControls = (cam, el) => {
  const controls = new OrbitControls(cam, el);
  controls.target.set(0, 2, 0);
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = 2;
  controls.enableDamping = true;
  controls.maxDistance = 15;
  controls.minDistance = 0.1;
  controls.maxPolarAngle = (Math.PI * 1.5) / 2;
  controls.enablePan = true;

  return controls;
};

export default setOrbitControls;
