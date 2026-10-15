import type { BrandIconName } from "@/components/ui/brand-icons";

/** Technical skills from the résumé, grouped by what they cover. */

export type SkillIcon = "mobile" | "layers" | "plug" | "spark" | "database" | "pin" | "tools" | "compass";

export type SkillGroup = {
  title: string;
  description: string;
  icon: SkillIcon;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Flutter & Mobile Development",
    description: "The core of my work: building the app itself for both platforms from one codebase.",
    icon: "mobile",
    skills: [
      "Flutter",
      "Dart",
      "Responsive and Adaptive UI",
      "Material 3",
      "Cupertino",
      "Custom Widgets",
      "Android and iOS Development",
    ],
  },
  {
    title: "Architecture & State Management",
    description: "Keeping features organized and state predictable as an app grows.",
    icon: "layers",
    skills: ["Clean Architecture", "Provider", "Riverpod", "GetX", "State Management"],
  },
  {
    title: "API & Integration",
    description: "Connecting the app to backends, sign-in providers and outside services.",
    icon: "plug",
    skills: [
      "REST APIs",
      "Dio",
      "HTTP",
      "Authentication",
      "Google Sign-In",
      "Apple Sign-In",
      "Third-Party Integrations",
    ],
  },
  {
    title: "AI Integration",
    description:
      "Connecting apps to hosted language models and cloud services to power generative features such as personalized stories.",
    icon: "spark",
    skills: ["AI Feature Integration", "AI Story Generation", "Hugging Face (Llama 3)", "Google Cloud"],
  },
  {
    title: "Firebase & Data",
    description: "Storing, syncing and caching data, online and off.",
    icon: "database",
    skills: [
      "Firebase",
      "Cloud Firestore",
      "Firebase Cloud Messaging",
      "Remote Config",
      "SQLite",
      "Secure Storage",
      "Offline Support",
      "Caching",
    ],
  },
  {
    title: "Platform Features",
    description: "Device capabilities that real-world apps depend on.",
    icon: "pin",
    skills: ["Google Maps", "Location-Based Functionality", "Notifications", "Localization", "File Handling"],
  },
  {
    title: "Tools & Deployment",
    description: "From the editor to the stores, and keeping things fast and stable along the way.",
    icon: "tools",
    skills: [
      "Git",
      "GitHub",
      "Android Studio",
      "VS Code",
      "Xcode",
      "Postman",
      "Google Play Console",
      "App Store Connect",
      "CI/CD",
      "Testing and Debugging",
      "Performance Optimization",
    ],
  },
];

/** Logos for skills that are a single, recognizable tool. Others show a plain marker. */
export const skillLogos: Partial<Record<string, BrandIconName>> = {
  Flutter: "flutter",
  Dart: "dart",
  "Hugging Face (Llama 3)": "huggingface",
  "Google Cloud": "googlecloud",
  Firebase: "firebase",
  SQLite: "sqlite",
  "Google Maps": "googlemaps",
  Git: "git",
  GitHub: "github",
  "Android Studio": "androidstudio",
  Xcode: "xcode",
  Postman: "postman",
  "Google Play Console": "googleplay",
  "App Store Connect": "appstore",
};

/** The core stack, shown with logos on the About page. */
export const coreStack: { name: string; logo: BrandIconName }[] = [
  { name: "Flutter", logo: "flutter" },
  { name: "Dart", logo: "dart" },
  { name: "Firebase", logo: "firebase" },
  { name: "Android", logo: "android" },
  { name: "iOS", logo: "apple" },
];

/** Being learned now. Shown separately and never as production expertise. */
export const exploring: SkillGroup = {
  title: "Currently Exploring",
  description: "Areas I'm learning to understand the full picture behind the apps I build.",
  icon: "compass",
  skills: ["Serverpod", "PostgreSQL", "Backend Development", "Software Architecture"],
};
