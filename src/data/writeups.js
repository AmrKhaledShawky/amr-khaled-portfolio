import { publicAsset } from "../utils/paths.js";

export const writeupPlatforms = [
  "Hack The Box",
  "TryHackMe",
  "Blue Team Labs",
  "CyberDefenders",
  "Other",
];

export const writeupTypes = [
  "Digital Forensics",
  "Malware Analysis",
  "Network Security",
  "Web Security",
  "Cryptography",
  "Steganography",
  "Reverse Engineering",
  "OSINT",
  "Incident Response",
  "Other",
];

export const writeupOperatingSystems = [
  "Windows",
  "Linux",
  "macOS",
  "Other",
  "N/A",
];

export const writeupDifficulties = [
  "Easy",
  "Medium",
  "Hard",
];

export const writeups = [
  {
    id: "gaslight-steganography",

    title: "Extracting Hidden Data from Icon",

    image: publicAsset("writeups/images/gaslight.png"),

    platform: "Gaslight CTF",

    type: "Steganography",

    os: "N/A",

    difficulty: "Easy",

    date: "2026-08-15",

    writeupPath: publicAsset("writeups/icon-sketch.html"),
  },
  {
  id: "unrotated",
  title: "Unrotated",
  image: publicAsset("writeups/images/unrotated.png"),
  platform: "z0d1ak CTF",
  type: "Digital Forensics",
  os: "N/A",
  difficulty: "Medium",
  date: "2026-08-23",
  tags: [],
  writeupPath: publicAsset("writeups/unrotated-content.html"),
  labUrl: "",
  isPlaceholder: false,
},
];