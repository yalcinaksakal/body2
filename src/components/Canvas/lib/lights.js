import { AmbientLight, SpotLight } from "three";

const createLights = () => {
  const spotLight = new SpotLight("#ecbcb4", 0.6);
  spotLight.position.set(10, 10, 10);

  const spotLight2 = new SpotLight("#ecbcb4", 0.6);
  spotLight2.position.set(-10, 10, -10);

  return {
    ambient: new AmbientLight("#ffceb4", 0.4),
    spotLight,
    spotLight2,
  };
};

export default createLights;
