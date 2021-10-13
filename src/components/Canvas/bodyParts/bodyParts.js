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
      name: "Right Thigh",
      points: [
        new Vector3(-0.65, 2.34, 0.07),
        new Vector3(-0.15, 2.34, 0.07),
        new Vector3(-0.15, 2.34, -0.4),
        new Vector3(-0.6, 2.34, -0.4),

        new Vector3(-0.7, 4.1, 0.2),
        new Vector3(-0.1, 3.6, 0.1),

        new Vector3(0, 3.5, -0.2),

        new Vector3(-0.45, 3.75, 0.3),

        new Vector3(-0.2, 3.4, -0.5),

        new Vector3(-0.65, 3.54, -0.5),
        new Vector3(-0.75, 3.7, -0.27),
      ],
    },
    {
      name: "Left Thigh",
      points: [
        new Vector3(0.65, 2.34, 0.07),
        new Vector3(0.15, 2.34, 0.07),
        new Vector3(0.15, 2.34, -0.4),
        new Vector3(0.6, 2.34, -0.4),

        new Vector3(0.7, 4.1, 0.2),
        new Vector3(0.1, 3.6, 0.1),

        new Vector3(0, 3.5, -0.2),

        new Vector3(0.45, 3.75, 0.3),

        new Vector3(0.2, 3.4, -0.5),

        new Vector3(0.65, 3.54, -0.5),
        new Vector3(0.75, 3.7, -0.27),
      ],
    },
    {
      name: "Genitals, Urinary tract, Groin",
      points: [
        new Vector3(-0.7, 4.1, 0.2),
        new Vector3(-0.5, 4.1, 0.3),

        new Vector3(-0.1, 3.6, 0.1),
        new Vector3(0, 3.5, -0.2),
        new Vector3(-0.5, 3.8, 0.3),
        new Vector3(-0.75, 3.7, -0.27),

        new Vector3(0.7, 4.1, 0.2),
        new Vector3(0.5, 4.1, 0.3),

        new Vector3(0.1, 3.6, 0.1),
        new Vector3(0, 3.5, -0.2),
        new Vector3(0.5, 3.8, 0.3),
        new Vector3(0.75, 3.7, -0.27),
      ],
    },
    {
      name: "Buttocks, Anal Region",
      points: [
        new Vector3(-0.75, 4.1, 0.2),
        new Vector3(0, 3.5, -0.2),
        new Vector3(-0.3, 3.4, -0.5),
        new Vector3(-0.65, 3.54, -0.5),
        new Vector3(0.75, 4.1, 0.2),
        new Vector3(0, 3.5, -0.2),
        new Vector3(0.3, 3.4, -0.5),
        new Vector3(0.65, 3.54, -0.5),
        new Vector3(-0.3, 3.94, -0.7),
        new Vector3(0.3, 3.94, -0.7),
        new Vector3(0.65, 4.38, -0.47),
        new Vector3(-0.65, 4.38, -0.47),
      ],
    },
    {
      name: "Abdomen",
      points: [
        new Vector3(-0.75, 4.1, 0.2),
        new Vector3(-0.5, 4.1, 0.3),
        new Vector3(0.75, 4.1, 0.2),
        new Vector3(0.5, 4.1, 0.3),
        new Vector3(0.66, 4.26, -0.165),
        new Vector3(-0.66, 4.26, -0.165),
        new Vector3(0.43, 4.7, -0.15),
        new Vector3(-0.43, 4.7, -0.15),
        new Vector3(0.47, 4.7, 0.155),
        new Vector3(0.22, 4.7, 0.3),
        new Vector3(-0.22, 4.7, 0.3),
        new Vector3(-0.47, 4.7, 0.155),
        new Vector3(0.48, 5.1, -0.16),
        new Vector3(-0.48, 5.1, -0.16),
        new Vector3(0.47, 5, 0.3),
        new Vector3(-0.47, 5, 0.3),
      ],
    },
    {
      name: "Waist",
      points: [
        new Vector3(0.65, 4.38, -0.47),
        new Vector3(-0.65, 4.38, -0.47),
        new Vector3(0.66, 4.26, -0.165),
        new Vector3(-0.66, 4.26, -0.165),

        new Vector3(0.43, 4.7, -0.15),
        new Vector3(-0.43, 4.7, -0.15),
        new Vector3(0.43, 4.7, -0.36),
        new Vector3(-0.43, 4.7, -0.36),

        new Vector3(0.48, 5.1, -0.16),
        new Vector3(-0.48, 5.1, -0.16),
        new Vector3(0.43, 5.1, -0.5),
        new Vector3(-0.43, 5.1, -0.5),
      ],
    },
    {
      name: "Chest",
      points: [
        new Vector3(0.5, 5.1, -0.16),
        new Vector3(-0.5, 5.1, -0.16),
        new Vector3(0.47, 5, 0.3),
        new Vector3(-0.47, 5, 0.3),
        new Vector3(-0.26, 5.2, 0.25),
        new Vector3(0, 5.3, 0.3),
        new Vector3(0.26, 5.2, 0.25),
        new Vector3(0.58, 5.5, -0.2),
        new Vector3(-0.58, 5.5, -0.2),
      ],
    },
    {
      name: "Breasts",
      points: [
        new Vector3(-0.26, 5.2, 0.25),
        new Vector3(0, 5.3, 0.3),
        new Vector3(0.26, 5.2, 0.25),

        new Vector3(0.58, 5.5, -0.2),
        new Vector3(-0.58, 5.5, -0.2),
        new Vector3(-0.54, 5.2, 0.06),
        new Vector3(0.54, 5.2, 0.06),

        new Vector3(0.58, 5.46, 0.25),
        new Vector3(-0.58, 5.46, 0.25),
        new Vector3(0.5, 5.2, 0.32),
        new Vector3(-0.5, 5.2, 0.32),
        new Vector3(0.36, 5.45, 0.34),
        new Vector3(0, 5.5, 0.1),
        new Vector3(-0.36, 5.45, 0.34),

        new Vector3(0.48, 5.7, 0.22),
        new Vector3(-0.48, 5.7, 0.22),
      ],
    },
    {
      name: "Chest",
      points: [
        new Vector3(0.48, 5.7, 0.22),
        new Vector3(-0.48, 5.7, 0.22),
        new Vector3(0.6, 5.4, -0.2),
        new Vector3(-0.6, 5.4, -0.2),
        new Vector3(-0.6, 5.8, -0.02),
        new Vector3(0.6, 5.8, -0.02),
        new Vector3(0.22, 6.06, -0.1),
        new Vector3(-0.22, 6.06, -0.1),
      ],
    },
    {
      name: "Back",
      points: [
        new Vector3(0.43, 5.1, -0.5),
        new Vector3(-0.43, 5.1, -0.5),
        new Vector3(0.5, 5.1, -0.16),
        new Vector3(-0.5, 5.1, -0.16),

        new Vector3(0.58, 5.5, -0.2),
        new Vector3(-0.58, 5.5, -0.2),

        new Vector3(-0.58, 5.54, -0.65),
        new Vector3(0.58, 5.54, -0.65),

        new Vector3(0.22, 6.08, -0.62),
        new Vector3(-0.22, 6.08, -0.62),
      ],
    },
    {
      name: "Neck",
      points: [
        //  boyun taban arka
        new Vector3(0.22, 6.08, -0.62),
        new Vector3(-0.22, 6.08, -0.62),
        // boyun taban ön
        new Vector3(0.22, 6.06, -0.1),
        new Vector3(-0.22, 6.06, -0.1),
        //boyun taban omuz
        new Vector3(0.28, 6.22, -0.42),
        new Vector3(-0.28, 6.22, -0.42),
        // boyun tavan omuz
        new Vector3(0.22, 6.44, -0.26),
        new Vector3(-0.22, 6.44, -0.26),
        // boyun tavan ön
        new Vector3(0.02, 6.3, 0.02),
        new Vector3(0.16, 6.35, -0.05),
        new Vector3(-0.16, 6.35, -0.05),
        // boyun tavan arka
        new Vector3(0, 6.44, -0.5),
        new Vector3(0.16, 6.42, -0.45),
        new Vector3(-0.16, 6.42, -0.45),
      ],
    },
    {
      name: "Left Thigh",
      points: [],
    },
    {
      name: "Left Thigh",
      points: [],
    },
    {
      name: "Left Thigh",
      points: [],
    },
    {
      name: "Left Thigh",
      points: [],
    },
    {
      name: "Left Thigh",
      points: [],
    },
  ],
};

export default bodyParts;