import {
  Color,
  PCFShadowMap,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { createBodyParts } from "./createBodyParts";
// import createCube from "./createBodyParts";
import myCam from "./camera";
import createPlane from "./createPlane";
import intersectionChecker, { helper } from "./intersectionChecker";
import createLights from "./lights";
import modelLoader from "./modelLoader";
import posMapper from "./posMapper";
import createR from "./renderer";
import setOrbitControls from "./setOrbitControls";
import femaleBodyParts from "../bodyParts/bodyParts";

const models = [];
let currentModel = 0;
let scene;

export const changeModel = () => {
  if (models.length < 2) return;
  scene.remove(models[currentModel]);
  currentModel++;
  currentModel %= 2;
  scene.add(models[currentModel]);
  scene.remove(helper);
  return currentModel;
};

const setScene = (parent, setIsLoading, setBodyPart) => {
  const renderer = new WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const fov = 60;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 10000;
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2.5;

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = 1.2;
  controls.maxDistance = 5000;
  controls.update();

  const scene = new Scene();

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

  //background, texture onLoad calls appender

  scene.background = new Color("rgb(100, 100, 100)");
  modelLoader(appender);

  //onResize
  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  //body parts

  const femaleBodyPartsConvex = femaleBodyParts.map(p =>
    createBodyParts(p.points, p.name, "yellow")
  );

  // femaleBodyPartsConvex.forEach(c => scene.add(c));
  // scene.add(helper);
  //click
  const clicked = event => {
    if (currentModel === 1) return;
    const mouse = posMapper(event.clientX, event.clientY);
    const isIntesecting = intersectionChecker(
      mouse,
      femaleBodyPartsConvex,
      camera,
      setBodyPart
    );

    if (isIntesecting && !scene.children.includes(helper)) scene.add(helper);
  };

  domElement.addEventListener("click", clicked);

  //   -------

  let renderRequested = false;


  //animate
  //   const animate = () => {
  //     renderer.render(scene, camera);
  //     controls.update();
  //   };

  function render() {
    renderRequested = undefined;

    // if (resizeRendererToDisplaySize(renderer)) {
    //   const canvas = renderer.domElement;
    //   camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //   camera.updateProjectionMatrix();
    // }

    controls.update();
    renderer.render(scene, camera);
  }
  render();

  function requestRenderIfNotRequested() {
    if (!renderRequested) {
      renderRequested = true;
      requestAnimationFrame(render);
    }
  }

  controls.addEventListener("change", requestRenderIfNotRequested);
  //   window.addEventListener("resize", requestRenderIfNotRequested);
};

export default setScene;
