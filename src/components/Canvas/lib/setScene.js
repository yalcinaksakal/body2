import { Color, Scene, Raycaster, Vector2 } from "three";

import myCam from "./camera";
import createPlane from "./createPlane";
import createLights from "./lights";
import modelLoader from "./modelLoader";
import createR from "./renderer";
import setOrbitControls from "./setOrbitControls";

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
  let mouse = new Vector2();
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

  //raycaster
  const raycaster = new Raycaster();
  //domEL
  const { domElement } = renderer;

  //append dom element onLoad
  const appender = m => {
    models.push(...m);
    scene.add(models[currentModel]);
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
  modelLoader(appender);

  //onResize
  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const clicked = event => {
    const pl = createPlane();

    mouse.x = event.clientX - window.innerWidth / 2;
    mouse.y = -event.clientY + window.innerHeight / 2;
    pl.position.set(mouse.x, mouse.y, 0);

    scene.add(plane);
    console.log(mouse, event.clientX);
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);
    // scene.children.forEach(c => console.log(c.position));
    console.log(intersects);
    if (intersects.length > 0) {
      console.log(intersects);
    }
  };

  return {
    animate,
    onResize,
    clicked,
    domElement,
  };
};

export default setScene;
