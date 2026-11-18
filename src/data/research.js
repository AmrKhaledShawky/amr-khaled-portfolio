import { publicAsset } from "../utils/paths.js";

export const researchStatuses = [
  "Verified",
  "Ongoing",
  "Waiting Acceptance",
  "Published",
  "Self Research",
  "Under Review",
];

export const research = [
  {
    id: "vulnera-x",
    title: "VulnEra-X — Research",
    projectTitle: "VulnEra-X — AI-Powered Secure Coding Platform",
    image: publicAsset("research/images/vulnera-x.png"),
    imageSurface: "light",
    field:
      "AI-Powered Secure Coding Platform for Intelligent Vulnerability Detection, Secrets Detection, and Automated Code Security Analysis",
    status: "Ongoing",
    summary:
      "Research into a developer-oriented security workflow for identifying and communicating selected weaknesses in C and C++ code, with evaluation focused on detection quality, false positives, explainability, and response time.",
    brief: [
      "VulnEra-X investigates how an AI-assisted, developer-oriented security workflow can help identify and communicate selected security weaknesses in C and C++ source code. The research focuses on practical detection quality, false-positive behavior, finding explainability, and response time.",
      "The work examines conventional SAST and AI/ML-assisted code-analysis approaches, relevant weakness taxonomies such as CWE, vulnerability datasets, and the challenges of evaluating code-level predictions without data leakage. It distinguishes active-file classification from a separate project-wide analysis path intended to consider broader code context and selected business-logic or authorization weaknesses.",
    ],
    workflow: [
      {
        title: "Problem definition and literature review",
        description:
          "Review SAST, AI/LLM-assisted vulnerability detection, false positives, context awareness, explainability, and developer feedback.",
      },
      {
        title: "Dataset and ground-truth preparation",
        description:
          "Assess candidate C/C++ vulnerability datasets, define eligible weakness categories and case-level labels, and document provenance, deduplication, and leakage controls.",
      },
      {
        title: "Model and baseline evaluation",
        description:
          "Finalize the classifier, feature extraction, preprocessing, input unit, and baseline configuration. These implementation and evaluation choices remain to be verified and frozen.",
      },
      {
        title: "Controlled testing",
        description:
          "Evaluate precision, recall, F1, false-positive rate, and other appropriate metrics on a defined held-out test set. Measure active-file latency separately from project-wide analysis.",
      },
      {
        title: "Analysis and reporting",
        description:
          "Interpret errors, limitations, reproducibility, and results only from completed experiments.",
      },
    ],
    scope: [
      "Confirmed language scope: C and C++.",
      "Static source-code analysis; the target application is not executed as part of the core SAST workflow.",
      "Selected vulnerability classes supported by finalized datasets, the detector, and test cases.",
      "A separate project-wide path for contextual analysis, evaluated independently from active-file classification.",
      "Explainable findings and remediation guidance are product objectives, not assumed research outcomes.",
    ],
    progress: [
      "The research problem, scope, objectives, research questions, and related-work structure are documented in the project thesis.",
      "Candidate datasets and evaluation considerations have been reviewed, including provenance tracking, deduplication, grouped data splits, and leakage prevention.",
      "The active-file classifier and project-wide analysis are defined as separate workflows in the system design.",
      "A provisional active-file P95 latency target of 2.0 seconds is documented. It is a target, not a measured result.",
      "The backend/database foundation is being implemented. Local Docker images for the backend and frontend, together with PostgreSQL 16, have been confirmed.",
    ],
    ongoingWork: [
      "Verify the classifier implementation, model artifact, feature schema, preprocessing, inference endpoint, and input unit against the current source code.",
      "Freeze the dataset version, selected categories, case counts, labels, and train/validation/test split strategy.",
      "Run reproducible benchmark and integration tests; report measured results only after execution.",
      "Complete a separate evaluation of the project-wide analysis workflow.",
      "Analyze questionnaire responses before making user-validated claims; the thesis revision reviewed for this entry reports no analyzed survey findings.",
      "Close outstanding security, privacy, authorization, and performance verification items.",
    ],
    integrity:
      "No detection-accuracy, latency, false-positive reduction, user-study, or comparative-performance result is claimed here. A capability in the product design is not treated as implemented or experimentally validated without implementation and test evidence.",
  },
];
