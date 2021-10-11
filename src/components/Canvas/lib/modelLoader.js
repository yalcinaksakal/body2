import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshStandardMaterial } from "three";
const modelLoader = (scene, onLoadFunc) => {
  const addModel = (gltf, scale = 1, posy = 0, roty = 0) => {
    const model = gltf.scene;
    model.traverse(object => {
      if (object.isMesh)
        object.material = new MeshStandardMaterial({
          color: "white",
          transparent: false,
          opacity: 1,
        });
    });
    model.scale.set(scale, scale, scale);
    model.rotation.y = roty;
    model.position.set(0, posy, 0);
    scene.add(model);
    onLoadFunc();
  };

  const loader = new GLTFLoader();

  loader.load("gtlfs/female_base_mesh/scene.gltf", gltf =>
    addModel(gltf, 3.5, 0, Math.PI)
  );

  loader.load("gtlfs/male_base_mesh/scene.gltf", gltf =>
    addModel(gltf, 1, 5.3)
  );
};
export default modelLoader;
