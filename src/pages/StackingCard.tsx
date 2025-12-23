// stackingCardsData.ts
import {
  Bot,
  ShieldCheck,
  FileSearch,
  MessageSquare,
  Code2,
  Globe,
  Fingerprint,
  Users,
  Cpu,
  CheckCircle,
} from "lucide-react";

export const stackingCardsData = [
  {
    id: "adaptive-ai",
    theme: "blue",
    // stickyTop: "top-24",

    image: "/images/ai-interviewer.png",
    imageAlt: "AI Interviewer",
    imageObject: "object-[50%_80%]",

    badge: {
      text: "Adaptive AI Interviewer",
      icon: Bot,
    },

    titles: {
      primary: "It Digs Deeper.",
      secondary: "Static forms are dead.",
    },

    description:
      "Our AI agent conducts dynamic, conversational voice and video interviews.",

    points: [
      {
        title: "Contextual Follow-ups",
        description:
          "If a candidate gives a vague answer, the AI asks specific follow-up questions to probe for depth.",
        icon: MessageSquare,
      },
      {
        title: "Code & Case Study",
        description:
          "For technical roles, it presents coding challenges or case scenarios that must be solved in real-time.",
        icon: Code2,
      },
      {
        title: "Multi-Lingual",
        description:
          "Interview a candidate in Tokyo in Japanese and review the transcript in English in New York.",
        icon: Globe,
      },
    ],
  },

  {
    id: "integrity-layer",
    theme: "red",
    // stickyTop: "top-28",

    image: "/images/integrity-report.png",
    imageAlt: "Integrity Report",

    badge: {
      text: "The Integrity Layer",
      icon: ShieldCheck,
    },

    titles: {
      primary: "Trust, Verified.",
      secondary: "Nexby acts as your digital proctor.",
    },

    description:
      "In the age of ChatGPT and proxy interviewers, you need a defense system.",

    points: [
      {
        title: "Lip-Sync Detection",
        description:
          "Algorithms analyze audio-visual synchronization to ensure the person speaking is the person on screen.",
        icon: Fingerprint,
      },
      {
        title: "Tab-Switch Monitoring",
        description:
          "Flags candidates who switch tabs to search for answers during technical assessments.",
        icon: Globe,
      },
      {
        title: "Object Detection",
        description:
          "Detects if a second person enters the frame or is whispering answers.",
        icon: Users,
      },
    ],
  },

  {
    id: "resume-intelligence",
    theme: "green",
    stickyTop: "top-32",

    image: "/images/resume-funnel.png",
    imageAlt: "Resume Funnel",

    badge: {
      text: "Automated Resume Intelligence",
      icon: FileSearch,
    },

    titles: {
      primary: "Beyond Keyword Matching.",
      secondary: "We analyze semantic relevance.",
    },

    description: "We don't just Ctrl+F your resume database.",

    points: [
      {
        title: "DNA Matching",
        description:
          "The AI reads the core DNA of the Job Description and matches it against candidate profiles, scoring them on a 0–100 fit scale.",
        icon: Cpu,
      },
      {
        title: "Instant Reject",
        description:
          "Automatically filter out candidates who don't meet non-negotiable criteria before they enter the funnel.",
        icon: CheckCircle,
      },
    ],
  },
];
