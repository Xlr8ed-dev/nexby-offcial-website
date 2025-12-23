// src/data/capabilitiesData.ts
import {
  Activity,
  Zap,
  Pause,
  MessageSquare,
  Phone,
  Globe,
  Server,
} from "lucide-react";

export type Capability = {
  id: number;
  stickyTop: string;
  accent: "indigo" | "green" | "purple";
  hero: {
    icon?: any;
    subtitle: string;
    animate?: boolean;
  };
  badge: {
    icon: any;
    text: string;
  };
  title: string;
  subtitle: string;
  points: {
    icon: any;
    title: string;
    description: string;
  }[];
};

export const capabilitiesData: Capability[] = [
  // 🔹 Capability 1
  {
    id: 1,
    stickyTop: "top-24",
    accent: "indigo",
    hero: {
      icon: Activity,
      subtitle: "Real-time Sentiment Detection",
      animate: true,
    },
    badge: {
      icon: Activity,
      text: "Human-Parity Voice Engine",
    },
    title: "It Breathes. It Pauses. It Listens.",
    subtitle: 'The "Uncanny Valley" is over.',
    points: [
      {
        icon: Zap,
        title: "Sub-Second Latency",
        description:
          "Responses happen in <800ms. No awkward pauses that scream 'I am a robot.'",
      },
      {
        icon: Pause,
        title: "Barge-In Capable",
        description:
          "If the customer interrupts, the agent stops immediately and pivots.",
      },
      {
        icon: MessageSquare,
        title: "Emotional Calibration",
        description:
          "Empathetic during collections, energetic during sales, patient during support.",
      },
    ],
  },

  // 🔹 Capability 2
  {
    id: 2,
    stickyTop: "top-28",
    accent: "green",
    hero: {
      subtitle: "Infographic: Call → WhatsApp → CRM",
    },
    badge: {
      icon: Globe,
      text: "The Omni-Channel Loop",
    },
    title: "Voice is just the trigger.",
    subtitle: "A call rarely ends with just words. It ends with action.",
    points: [
      {
        icon: MessageSquare,
        title: "Voice-to-WhatsApp",
        description:
          "Payment links are sent instantly while the customer is still on the call.",
      },
      {
        icon: Phone,
        title: "SMS & Email Follow-up",
        description: "Automatic follow-ups if the call fails to connect.",
      },
      {
        icon: Server,
        title: "CRM Write-Back",
        description:
          "Every intent and promise-to-pay is logged into Salesforce or Zoho.",
      },
    ],
  },

  // 🔹 Capability 3
  {
    id: 3,
    stickyTop: "top-32",
    accent: "purple",
    hero: {
      subtitle: "Visual: Language Map / Code-Switching Demo",
    },
    badge: {
      icon: Globe,
      text: "Deep Linguistics",
    },
    title: "Speak Their Language. Literally.",
    subtitle: "India is not a monolith. The world is not monolingual.",
    points: [
      {
        icon: Globe,
        title: "12+ Indian Languages",
        description:
          "Hindi, Marathi, Tamil, Telugu, Kannada, Malayalam, Bengali, and more.",
      },
      {
        icon: Globe,
        title: "Global Accents",
        description:
          "US, UK, and Australian accents tuned for specific geographies.",
      },
      {
        icon: MessageSquare,
        title: "Code-Switching",
        description:
          'Understands "Hinglish" or mixed-language sentences effortlessly.',
      },
    ],
  },
];
