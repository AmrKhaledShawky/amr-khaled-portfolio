export const researchStatuses = [
  "Verified",
  "Ongoing",
  "Waiting Acceptance",
  "Published",
  "Self Research",
  "Under Review",
];

import { publicAsset } from "../utils/paths.js";

export const research = [
    {
        id: "vulnera-x",
        title: "VulnEra-X: AI-Powered Secure Coding Platform",
        image: publicAsset("research/images/vulnera-x.png"),
        field: "AI-Powered Application Security",
        status: "Ongoing",
        researchPath: publicAsset("research/vulnera-x.html")
}
];
