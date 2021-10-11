import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshStandardMaterial } from "three";
const modelLoader = onLoadFunc => {
  let loaded = 0;
  const models = [];
  const addModel = (gltf, scale = 1, posy = 0, roty = 0) => {
    const model = gltf.scene;
    models.push(model);
    model.traverse(object => {
      if (object.isMesh)
        object.material = new MeshStandardMaterial({
          color: "#ffceb4",
          transparent: false,
          opacity: 1,
        });
      object.castShadow = true;
    });
    model.scale.set(scale, scale, scale);
    model.rotation.y = roty;
    model.position.set(0, posy, 0);

    loaded++;
    if (loaded === 2) onLoadFunc(models);
  };

  const loader = new GLTFLoader();

  loader.load("gtlfs/female_base_mesh/scene.gltf", gltf =>
    addModel(gltf, 3.5, 1, Math.PI)
  );

  loader.load("gtlfs/male_base_mesh/scene.gltf", gltf =>
    addModel(gltf, 1, 6.5)
  );
};
export default modelLoader;
