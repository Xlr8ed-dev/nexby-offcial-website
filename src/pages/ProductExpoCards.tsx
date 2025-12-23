// src/data/features.ts
export type AccentColor = "purple" | "blue" | "green" | "orange";
import {
  Camera,
  Zap,
  WifiOff,
  Tag,
  Sparkles,
  Send,
  CheckCircle,
  BarChart3,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export type FeaturePoint = {
  icon: React.ElementType;
  title: string;
  text: string;
};

export type Feature = {
  id: number;
  tag: string;
  title: string;
  speed: string;
  description: string;
  heroIcon: React.ElementType;
  heroBg: string;
  heroCaption: string;
  accentColor: AccentColor; // ✅ FIX
  points: FeaturePoint[];
};

export const features: Feature[] = [
  // 🔹 FEATURE 1 (already existing)
  {
    id: 1,
    tag: "Feature 1",
    title: "Military-Grade OCR & Offline Capture",
    speed: "Capture Speed: < 3 Seconds.",
    description:
      "Manual data entry is the enemy of ROI. Our proprietary OCR engine extracts name, designation, company, and contact details from business cards with 99% accuracy.",
    heroIcon: Camera,
    heroBg: "from-purple-100 to-pink-100",
    heroCaption: "Mobile UI: Card Scanning Demo",
    accentColor: "purple",
    points: [
      {
        icon: Zap,
        title: "Point & Shoot:",
        text: "No shutter lag. No 'hold steady' warnings. Just scan and move.",
      },
      {
        icon: WifiOff,
        title: "Offline Cache:",
        text: "Data is stored locally and auto-syncs when connectivity is restored.",
      },
      {
        icon: Camera,
        title: "Photo Context:",
        text: "Capture visitor or badge photos to aid visual memory.",
      },
    ],
  },

  // 🔹 FEATURE 2 (YOUR VERSION)
  {
    id: 2,
    tag: "Feature 2",
    title: 'The "Smart-Tag" System',
    speed: "Structure Unstructured Data.",
    description:
      "A name without context is just a contact. A name with context is a lead.",
    heroIcon: Tag,
    heroBg: "from-blue-100 to-indigo-100",
    heroCaption: "Tag Selection & Voice Notes UI",
    accentColor: "blue",
    points: [
      {
        icon: CheckCircle,
        title: "One-Tap Tagging:",
        text: "Customize tags pre-event. Reps simply tap to categorize leads instantly.",
      },
      {
        icon: Sparkles,
        title: "Voice Notes:",
        text: "Dictate conversation summaries. AI transcribes and attaches them to the lead profile.",
      },
    ],
  },

  // 🔹 FEATURE 3 (YOUR VERSION)
  {
    id: 3,
    tag: "Feature 3",
    title: "Instant Engagement Engine",
    speed: "Strike Before They Leave the Booth.",
    description: 'The "First Mover Advantage" is automated.',
    heroIcon: Send,
    heroBg: "from-green-100 to-emerald-100",
    heroCaption: '"Message Sent" Success Screen',
    accentColor: "green",
    points: [
      {
        icon: Send,
        title: "WhatsApp Integration:",
        text: "Send pre-templated, personalized WhatsApp greetings instantly upon scanning.",
      },
      {
        icon: Zap,
        title: "Smart Email Follow-up:",
        text: "Auto-generated emails based on selected tags and interest level.",
      },
      {
        icon: CheckCircle,
        title: "Face-to-Face Validation:",
        text: "Show visitors the message was sent while you’re still talking to them.",
      },
    ],
  },

  // 🔹 FEATURE 4 (YOUR VERSION)
  {
    id: 4,
    tag: "Feature 4",
    title: "Ground Control Dashboard",
    speed: "Visibility Beyond the Booth.",
    description:
      "While your team scans, you strategize. The web dashboard gives you a live feed of floor activity.",
    heroIcon: BarChart3,
    heroBg: "from-orange-100 to-red-100",
    heroCaption: "Web Dashboard with Analytics",
    accentColor: "orange",
    points: [
      {
        icon: Users,
        title: "Live Leaderboards:",
        text: "See which rep is scanning the most leads in real time.",
      },
      {
        icon: TrendingUp,
        title: "Traffic Heatmaps:",
        text: "Understand peak hours and visitor demographics instantly.",
      },
      {
        icon: ArrowRight,
        title: "Data Export:",
        text: "One-click CSV export or direct API push to Salesforce/HubSpot.",
      },
    ],
  },
];
