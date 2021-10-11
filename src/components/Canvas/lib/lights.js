import { AmbientLight, SpotLight } from "three";

const createLights = () => {
  const spotLight = new SpotLight("#ecbcb4", 0.6);
  spotLight.position.set(10, 10, 10);
  // light.castShadow = true;
  // light.shadow.bias = -0.01;
  // light.shadow.mapSize.width = 2048;
  // light.shadow.mapSize.height = 2048;
  // light.shadow.camera.near = 1.0;
  // light.shadow.camera.far = 100;
  // light.shadow.camera.left = 100;
  // light.shadow.camera.right = -100;
  // light.shadow.camera.top = 100;
  // light.shadow.camera.bottom = -100;

  const spotLight2 = new SpotLight("#ecbcb4", 0.6);
  spotLight2.position.set(-10, 10, -10);

  return {
    ambient: new AmbientLight("#ffceb4", 0.4),
    spotLight,
    spotLight2,
  };
};

export default createLights;
