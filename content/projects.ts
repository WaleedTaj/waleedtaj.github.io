/**
 * Featured projects and their case studies. Everything here comes from
 * verified project information; leave optional fields out rather than guess.
 * Screenshots live in lib/media.ts (`projectScreenshots`), keyed by the same slug.
 */

export type ProjectSlug = "slms360" | "toddlers-app-staff" | "deenlink" | "service-square";

export type Challenge = {
  title: string;
  body: string;
};

export type ProjectOutcome = {
  /** Short display value, e.g. "~40%". */
  value: string;
  label: string;
  /** How to read the number, shown beside it. */
  note: string;
};

export type Project = {
  slug: ProjectSlug;
  name: string;
  category: string;
  platforms: ("Android" | "iOS")[];
  /** Organization the work was done with, matching content/experience.ts. */
  company: string;
  /** One sentence for listings. */
  summary: string;
  /** Overview paragraphs for the case study. */
  overview: string[];
  /** What the case study should demonstrate, phrased as a takeaway. */
  focus: string;
  features: string[];
  contributions: string[];
  challenges: Challenge[];
  outcome?: ProjectOutcome;
  /** Technologies confirmed for this project only. */
  stack: string[];
  /** Problem areas the work covered, drawn from the features and contributions. */
  areas: string[];
  store: StoreLinks;
};

export const projects: Project[] = [
  {
    slug: "slms360",
    name: "SLMS360",
    category: "Education Technology · SaaS",
    platforms: ["Android", "iOS"],
    company: "Brainstormer Technologies",
    summary:
      "An institutional management app that brings attendance, payroll, leave, documents and staff performance into one mobile experience.",
    overview: [
      "SLMS360 brings an institution's administrative and staff operations into a single mobile app. Staff mark attendance, check payroll and salary information, apply for leave, manage documents, follow projects and raise maintenance requests, while administrators run evaluations and performance reviews.",
      "Each of those areas is its own module with its own rules, so day-to-day work meant extending features without disturbing the others, and keeping a large app fast and dependable as it grew.",
    ],
    focus:
      "Maintaining and improving a complex, multi-module production application, from new workflows to performance and reliability.",
    features: [
      "QR-based attendance",
      "Location-based attendance verification",
      "Payroll and salary information",
      "Leave management",
      "Document management",
      "Project tracking",
      "Staff evaluations",
      "Performance reviews",
      "Maintenance requests",
      "Administrative workflows",
    ],
    contributions: [
      "Flutter feature development",
      "REST API integration",
      "Business workflow implementation",
      "UI improvements",
      "Bug fixing",
      "Application maintenance",
      "Performance optimization",
    ],
    challenges: [
      {
        title: "Location-based attendance",
        body: "Making attendance dependable meant combining QR scanning with location verification, and accounting for platform-specific behavior on Android and iOS.",
      },
      {
        title: "Performance and responsiveness",
        body: "Debugging and optimization across the app, with refinements to loading and state-management behavior so screens respond more quickly.",
      },
    ],
    outcome: {
      value: "~40%",
      label: "Overall performance improvement",
      note: "An approximate figure for the combined effect of optimization work across the app, not a single benchmarked measurement.",
    },
    stack: ["Flutter", "Dart", "REST APIs"],
    areas: ["QR scanning", "Location verification", "Multi-module workflows", "Performance"],
    store: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.brainstormer.slms360_management_app",
      appStore: "https://apps.apple.com/us/app/slms-360/id6740049911",
    },
  },
  {
    slug: "toddlers-app-staff",
    name: "Toddlers App Staff",
    category: "Childcare · Education Management",
    platforms: ["Android", "iOS"],
    company: "Brainstormer Technologies",
    summary:
      "A childcare management app that helps staff and educators run classrooms, attendance, activities, schedules and communication.",
    overview: [
      "Toddlers App Staff is the tool educators and staff use through the day: taking student attendance and reviewing its history, managing classrooms, activities and timetables, checking staff schedules and salary information, and staying in touch through chat.",
      "My work focused on improving an established app rather than starting from scratch: restructuring screens, building reusable components, fixing bugs and making navigation and loading feel quicker.",
    ],
    focus:
      "Improving an established application: making the codebase easier to work in while making the app noticeably more pleasant to use.",
    features: [
      "Student attendance",
      "Attendance history",
      "Classroom management",
      "Activities",
      "Timetables",
      "Staff schedules",
      "Salary information",
      "Chat and communication",
      "Daily operational workflows",
    ],
    contributions: [
      "UI improvements",
      "Application maintenance",
      "Bug fixing",
      "Screen restructuring",
      "Reusable UI components",
      "Navigation improvements",
      "Performance optimization",
    ],
    challenges: [
      {
        title: "Restructuring the UI codebase",
        body: "Large, complex UI files were reorganized into smaller components with clearer responsibilities, which made screens easier to change and bugs easier to isolate.",
      },
      {
        title: "Usability and loading behavior",
        body: "Smoothing out screen navigation and loading states so the app felt more responsive during the tasks staff repeat every day.",
      },
    ],
    outcome: {
      value: "~30%",
      label: "Overall performance improvement",
      note: "An approximate figure for the app as a whole after restructuring and optimization, not a benchmark of one specific operation.",
    },
    stack: ["Flutter", "Dart"],
    areas: ["UI architecture", "Reusable components", "Navigation", "Performance"],
    store: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.brainstormers.toddlersStaff",
      appStore: "https://apps.apple.com/om/app/toddlersapp-staff/id6744242178",
    },
  },
  {
    slug: "deenlink",
    name: "DeenLink: My Dua's",
    category: "Islamic · Educational",
    platforms: ["Android", "iOS"],
    company: "Brainstormer Technologies",
    summary:
      "An Islamic companion app for Quran, Hadith, Duas and Adhkar, with offline access, audio and Arabic and Urdu reading.",
    overview: [
      "DeenLink brings Quranic content, Hadith, Duas and Adhkar together with audio, Tasbeeh and personal reading tools such as bookmarks and last-read tracking.",
      "Much of the content is meant to be read anywhere, so it is stored on the device and works offline, with Arabic and Urdu reading support.",
    ],
    focus:
      "Offline-first, content-heavy development: local databases, multilingual reading and the small details that make long-form reading comfortable.",
    features: [
      "Quran reading",
      "Hadith content",
      "Duas",
      "Adhkar",
      "Tasbeeh",
      "Offline content",
      "Arabic and Urdu support",
      "Bookmarks",
      "Last-read tracking",
      "Audio",
      "Personalized reading features",
    ],
    contributions: [
      "Flutter feature development",
      "Offline functionality",
      "Local data handling",
      "SQLite integration",
      "Content organization",
      "UI improvements",
      "Multilingual reading functionality",
      "Firebase-based update management",
      "Application maintenance",
    ],
    challenges: [
      {
        title: "Offline data management",
        body: "Managing a substantial amount of local content, including migrating it from JSON into SQL and storing it in SQLite so it remains available without a connection.",
      },
      {
        title: "Multilingual reading experience",
        body: "Improving how Arabic and Urdu text is presented so it is comfortable to read and easy to navigate.",
      },
      {
        title: "Reading state and personalization",
        body: "Implementing and improving last-read tracking, bookmarks and reading preferences so readers can pick up where they left off.",
      },
    ],
    stack: ["Flutter", "Dart", "SQLite", "Firebase"],
    areas: ["Offline-first", "JSON-to-SQL migration", "Arabic and Urdu text", "Reading state"],
    store: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.brainstormer.deenlink",
      appStore: "https://apps.apple.com/us/app/deenlink-my-duas/id6753102883",
    },
  },
  {
    slug: "service-square",
    name: "Service Square",
    category: "Professional Services Marketplace",
    platforms: ["Android", "iOS"],
    company: "Dynamic Dev Technologies",
    summary:
      "A multi-role marketplace connecting customers with service professionals, from discovery and requests to appointments and chat.",
    overview: [
      "Service Square connects customers with service professionals. Customers discover services and professionals, send requests and book appointments; professionals manage the requests that come in. Chat, notifications and service history tie the two sides together.",
      "Because both roles share one app, much of the work involved keeping two sets of screens and responsibilities consistent while they depend on the same API-driven data.",
    ],
    focus:
      "Multi-role application architecture, interconnected workflows and the API integrations behind them.",
    features: [
      "Role-based authentication",
      "Service discovery",
      "Professional profiles",
      "Service requests",
      "Appointments",
      "Chat",
      "Notifications",
      "Service history",
    ],
    contributions: [
      "Flutter feature development",
      "Multi-role workflows",
      "REST API integration",
      "Authentication",
      "Service request flows",
      "UI development",
      "Bug fixing",
      "Application maintenance",
    ],
    challenges: [
      {
        title: "Role-based application flows",
        body: "Customers and service providers have different responsibilities and interfaces, so flows had to branch cleanly by role from sign-in onward.",
      },
      {
        title: "API-driven service requests",
        body: "Implementing and maintaining service request workflows whose steps depend on each other, along with the loading, empty and error states each step needs.",
      },
      {
        title: "Communication",
        body: "Working on chat and notifications so customers and professionals stay informed as a request moves forward.",
      },
    ],
    stack: ["Flutter", "Dart", "REST APIs"],
    areas: ["Role-based auth", "Request workflows", "Chat", "Notifications"],
    store: {
      googlePlay: "https://play.google.com/store/apps/details?id=co.nannysquare.app",
      appStore: "https://apps.apple.com/ng/app/services-square/id6777226346",
    },
  },
];

export type StoreLinks = {
  googlePlay: string;
  appStore: string;
};

/** Published apps without a case study, shown after the featured projects. */
export type PublishedApp = {
  name: string;
  company: string;
  /** Short factual label. Omit unless the app's purpose is confirmed. */
  tag?: string;
  /** Related featured case study, when the app belongs to the same product. */
  related?: ProjectSlug;
  store: StoreLinks;
};

export const publishedApps: PublishedApp[] = [
  {
    name: "SLMS360 Student",
    company: "Brainstormer Technologies",
    related: "slms360",
    store: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.brainstormertech.slms360student&hl=en",
      appStore: "https://apps.apple.com/us/app/slms360-student/id6746668474",
    },
  },
  {
    name: "Toddlers App",
    company: "Brainstormer Technologies",
    related: "toddlers-app-staff",
    store: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.brainstormers.toddlers",
      appStore: "https://apps.apple.com/us/app/toddlersapp/id6670381835",
    },
  },
  {
    name: "BloodSync",
    company: "Brainstormer Technologies",
    store: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.brainstormertech.blood_sync",
      appStore: "https://apps.apple.com/us/app/blood-sync-app/id6754638842",
    },
  },
  {
    name: "MyFable: Personalise AI Story",
    company: "Brainstormer Technologies",
    tag: "AI story generation",
    store: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.brainstormertech.fable_ai",
      appStore: "https://apps.apple.com/us/app/myfable-personalise-ai-story/id6752928766",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/** The projects before and after `slug`, wrapping around. */
export function adjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const count = projects.length;
  return {
    previous: projects[(index - 1 + count) % count],
    next: projects[(index + 1) % count],
  };
}

export const projectHref = (slug: ProjectSlug) => `/projects/${slug}`;
