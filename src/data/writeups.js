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
];