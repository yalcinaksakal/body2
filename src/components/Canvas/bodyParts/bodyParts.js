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
    {
      name: "Left Ankle",
      points: [
        new Vector3(0.23, 0.45, 0.16),
        new Vector3(0.5, 0.45, 0.16),
        new Vector3(0.22, 0.38, -0.41),
        new Vector3(0.44, 0.38, -0.41),

        new Vector3(0.2, 0.7, -0.03),
        new Vector3(0.5, 0.7, -0.03),
        new Vector3(0.5, 0.74, -0.36),
        new Vector3(0.2, 0.74, -0.36),
      ],
    },
    {
      name: "Right Ankle",
      points: [
        new Vector3(-0.23, 0.45, 0.16),
        new Vector3(-0.5, 0.45, 0.16),
        new Vector3(-0.22, 0.38, -0.41),
        new Vector3(-0.44, 0.38, -0.41),

        new Vector3(-0.2, 0.7, -0.03),
        new Vector3(-0.5, 0.7, -0.03),
        new Vector3(-0.5, 0.74, -0.36),
        new Vector3(-0.2, 0.74, -0.36),
      ],
    },
    {
      name: "Right Leg",
      points: [
        new Vector3(-0.22, 0.7, -0.03),
        new Vector3(-0.48, 0.7, -0.03),
        new Vector3(-0.5, 0.74, -0.36),
        new Vector3(-0.22, 0.74, -0.36),

        new Vector3(-0.5, 1.94, -0.015),
        new Vector3(-0.3, 1.94, -0.015),
        new Vector3(-0.22, 1.94, -0.46),
        new Vector3(-0.56, 1.94, -0.46),

        new Vector3(-0.66, 1.94, -0.25),
        new Vector3(-0.15, 1.94, -0.25),
        new Vector3(-0.35, 1.34, -0.5),
      ],
    },
    {
      name: "Left Leg",
      points: [
        new Vector3(0.22, 0.7, -0.03),
        new Vector3(0.48, 0.7, -0.03),
        new Vector3(0.5, 0.74, -0.36),
        new Vector3(0.22, 0.74, -0.36),

        new Vector3(0.5, 1.94, -0.015),
        new Vector3(0.3, 1.94, -0.015),
        new Vector3(0.22, 1.94, -0.46),
        new Vector3(0.56, 1.94, -0.46),

        new Vector3(0.66, 1.94, -0.25),
        new Vector3(0.15, 1.94, -0.25),
        new Vector3(0.35, 1.34, -0.5),
      ],
    },
    {
      name: "Left Knee",
      points: [
        new Vector3(0.6, 1.94, -0.01),
        new Vector3(0.2, 1.94, -0.01),
        new Vector3(0.15, 1.94, -0.46),
        new Vector3(0.6, 1.94, -0.46),

        new Vector3(0.65, 2.34, 0.07),
        new Vector3(0.15, 2.34, 0.07),
        new Vector3(0.15, 2.34, -0.4),
        new Vector3(0.55, 2.34, -0.4),
      ],
    },
    {
      name: "Right Knee",
      points: [
        new Vector3(-0.6, 1.94, -0.01),
        new Vector3(-0.2, 1.94, -0.01),
        new Vector3(-0.15, 1.94, -0.46),
        new Vector3(-0.6, 1.94, -0.46),

        new Vector3(-0.65, 2.34, 0.07),
        new Vector3(-0.15, 2.34, 0.07),
        new Vector3(-0.15, 2.34, -0.4),
        new Vector3(-0.55, 2.34, -0.4),
      ],
    },
    {
      name: "Right Ankle",
      points: [],
    },
    {
      name: "Right Ankle",
      points: [],
    },
  ],
};

export default bodyParts;
