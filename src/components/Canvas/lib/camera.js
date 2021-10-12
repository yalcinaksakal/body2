import { PerspectiveCamera } from "three";

const myCam = () => {
  const aspect = window.innerWidth / window.innerHeight;
  const fov = 60;
  const near = 0.01;
  const far = 100;
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 15);
  return camera;
};
export default myCam;
