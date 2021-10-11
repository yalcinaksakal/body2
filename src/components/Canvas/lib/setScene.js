import { Color, Scene } from "three";

import myCam from "./camera";
// import createPlane from "./createPlane";
import createLights from "./lights";
import modelLoader from "./modelLoader";
import createR from "./renderer";
import setOrbitControls from "./setOrbitControls";

const setScene = (parent, setIsLoading) => {
  //renderer
  const renderer = createR();
  //camera
  const camera = myCam();

  //scene
  const scene = new Scene();

  //lights
  Object.values(createLights()).forEach(light => {
    scene.add(light);
  });

  //domEL
  const { domElement } = renderer;
  const appender = () => {
    setIsLoading(false);
    parent.appendChild(domElement);
  };

  //add plane
  // createPlane().then(plane => scene.add(plane));

  //add controls
  const controls = setOrbitControls(camera, domElement);

  //animate
  const animate = () => {
    renderer.render(scene, camera);
    controls.update();
  };

  //background, texture onLoad calls appender

  scene.background = new Color("gray");
  modelLoader(scene, appender);

  //onResize
  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const keyDownHandler = ({ code }) => {};
  const keyUpHandler = ({ code }) => {};

  return {
    animate,
    onResize,
    keyDownHandler,
    keyUpHandler,
  };
};

export default setScene;
