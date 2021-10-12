import { Vector3 } from "three";

const bodyParts = {
  female: [
    {
      name: "Right Foot",
      points: [
        new Vector3(-0.63, 0.19, 0.64),
        new Vector3(-0.26, 0.17, 0.67),
        new Vector3(-0.26, 0.29, 0.67),
        new Vector3(-0.65, 0.25, 0.64),

        new Vector3(-0.55, 0.19, 0.14),
        new Vector3(-0.21, 0.19, 0.14),
        new Vector3(-0.23, 0.45, 0.14),
        new Vector3(-0.5, 0.45, 0.14),

        new Vector3(-0.42, 0.16, -0.41),
        new Vector3(-0.22, 0.16, -0.41),
        new Vector3(-0.22, 0.38, -0.41),
        new Vector3(-0.42, 0.38, -0.41),
      ],
    },
    {
      name: "Left Foot",
      points: [
        new Vector3(0.26, 0.17, 0.67),
        new Vector3(0.63, 0.19, 0.64),
        new Vector3(0.65, 0.25, 0.64),
        new Vector3(0.26, 0.29, 0.67),

        new Vector3(0.55, 0.19, 0.14),
        new Vector3(0.21, 0.19, 0.14),
        new Vector3(0.23, 0.45, 0.14),
        new Vector3(0.5, 0.45, 0.14),

        new Vector3(0.42, 0.16, -0.41),
        new Vector3(0.22, 0.16, -0.41),
        new Vector3(0.22, 0.38, -0.41),
        new Vector3(0.42, 0.38, -0.41),
      ],
    },
  ],
};

export default bodyParts;
