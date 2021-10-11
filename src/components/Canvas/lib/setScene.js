import { Color, Scene } from "three";

import myCam from "./camera";
import createPlane from "./createPlane";
import intersectionChecker from "./intersectionChecker";
import createLights from "./lights";
import modelLoader from "./modelLoader";
import posMapper from "./posMapper";
import createR from "./renderer";
// import setOrbitControls from "./setOrbitControls";

const models = [];
let currentModel = 0;
let scene;

export const changeModel = () => {
  if (models.length < 2) return;
  scene.remove(models[currentModel]);
  currentModel++;
  currentModel %= 2;
  scene.add(models[currentModel]);
};

const setScene = (parent, setIsLoading) => {
  let autoRotate = true;

  //renderer
  const renderer = createR();
  //camera
  const camera = myCam();

  //scene
  scene = new Scene();

  //plane
  const plane = createPlane();
  scene.add(plane);
  //lights
  Object.values(createLights()).forEach(light => {
    scene.add(light);
  });

  //domEL
  const { domElement } = renderer;

  //append dom element onLoad
  const appender = m => {
    models.push(...m);
    scene.add(models[currentModel]);
    setIsLoading(false);
    parent.appendChild(domElement);
  };

  //add controls
  // const controls = setOrbitControls(camera, domElement);

  //animate
  const animate = () => {
    renderer.render(scene, camera);
    if (autoRotate) rotateModel(0.01);
    // controls.update();
  };

  //background, texture onLoad calls appender

  scene.background = new Color("rgb(81, 81, 81)");
  modelLoader(appender);

  //onResize
  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const clicked = event => {
    intersectionChecker(
      posMapper(event.clientX, event.clientY, camera),
      models[currentModel],
      scene
    );
  };

  //Rotation
  let isRotating = false;
  let prevX = 0;
  let direction = 1;

  const rotateModel = r => models.forEach(m => (m.rotation.y += r));
  const handleRotation = posx => {
    if (autoRotate) autoRotate = false;
    direction = posx > prevX ? 1 : -1;
    prevX = posx;
    rotateModel(0.05 * direction);
  };

  //click
  domElement.addEventListener("mousedown", () => (isRotating = true));
  domElement.addEventListener("mouseup", () => (isRotating = false));
  domElement.addEventListener("mousemove", e => {
    if (!isRotating) return;
    handleRotation(e.clientX);
  });
  domElement.addEventListener("click", clicked);

  //touch
  domElement.addEventListener("touchstart", () => (isRotating = true));
  domElement.addEventListener("touchend", () => (isRotating = false));
  domElement.addEventListener("touchmove", e => {
    if (!isRotating) return;
    handleRotation(e.touches[0].clientX);
  });

  return {
    animate,
    onResize,
  };
};

export default setScene;
