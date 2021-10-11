import { AmbientLight, SpotLight, DirectionalLight } from "three";

const createLights = () => {
  const light = new DirectionalLight("white", 0.2);
  light.position.set(5, 0, 10);
  light.castShadow = true;
  light.shadow.bias = -0.01;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;
  light.shadow.camera.near = 1.0;
  light.shadow.camera.far = 100;
  light.shadow.camera.left = 100;
  light.shadow.camera.right = -100;
  light.shadow.camera.top = 100;
  light.shadow.camera.bottom = -100;

  const spotLight = new SpotLight("white", 0.3);
  spotLight.position.set(10, 10, 100);

  const spotLight2 = new SpotLight("white", 0.3);
  spotLight2.position.set(-10, 10, -100);

  return {
    ambient: new AmbientLight("white", 0.4),
    spotLight,
    spotLight2,
    light,
  };
};

export default createLights;
