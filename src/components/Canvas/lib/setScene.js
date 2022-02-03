import { Color, Scene } from "three";
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
let currentModel = 0,
	scene,
	requestRenderIfNotRequested;

export const changeModel = () => {
	if (models.length < 2) return;
	scene.remove(models[currentModel]);
	currentModel++;
	currentModel %= 2;
	scene.add(models[currentModel]);
	scene.remove(helper);
	requestRenderIfNotRequested();
	return currentModel;
};

const setScene = (parent, setIsLoading, setBodyPart) => {
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
		requestRenderIfNotRequested();
	};

	//add controls
	const controls = setOrbitControls(camera, domElement);
	let renderRequested = false;
	//animate
	const animate = () => {
		renderRequested = undefined;
		renderer.render(scene, camera);
		controls.update();
	};
	requestRenderIfNotRequested = () => {
		if (!renderRequested) {
			renderRequested = true;
			requestAnimationFrame(animate);
		}
	};

	controls.addEventListener("change", requestRenderIfNotRequested);
	//background, texture onLoad calls appender

	scene.background = new Color("rgb(80, 100, 120)");
	modelLoader(appender);

	//onResize
	const onResize = () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		requestRenderIfNotRequested();
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
		requestRenderIfNotRequested();
	};

	// const cube = createCube();
	// scene.add(cube);
	// const moveCube = (x, y, z) => {
	//   cube.position.x += x;
	//   cube.position.y += y;
	//   cube.position.z += z;
	//   console.log(cube.position);
	// };

	domElement.addEventListener("click", clicked);

	//keys

	// window.addEventListener("keydown", ({ code }) => {
	//   switch (code) {
	//     case "ArrowUp":
	//       moveCube(0, 0.02, 0);
	//       break;
	//     case "ArrowDown":
	//       moveCube(0, -0.02, 0);
	//       break;
	//     case "ArrowLeft":
	//       moveCube(-0.02, 0, 0);
	//       break;
	//     case "ArrowRight":
	//       moveCube(0.02, 0, 0);
	//       break;
	//     case "KeyA":
	//       moveCube(0, 0, 0.02);
	//       break;
	//     case "KeyZ":
	//       moveCube(0, 0, -0.02);
	//       break;
	//     default:
	//       break;
	//   }
	// });

	return onResize;
};

export default setScene;
