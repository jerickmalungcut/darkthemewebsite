import acmeLogo from "@/assets/images/acme.png";
import quantumLogo from "@/assets/images/quantum.png";
import echoLogo from "@/assets/images/echo.png";
import celestialLogo from "@/assets/images/celestial.png";
import pulseLogo from "@/assets/images/pulse.png";
import apexLogo from "@/assets/images/apex.png";

const images = [
  {
    src: acmeLogo,
    name: "AcmeLogo",
  },
  {
    src: quantumLogo,
    name: "Quantum Logo",
  },
  {
    src: echoLogo,
    name: "EchoLogo",
  },
  {
    src: celestialLogo,
    name: "Celestial logo",
  },
  {
    src: pulseLogo,
    name: "PulseLogo",
  },
  {
    src: apexLogo,
    name: "ApexLogo",
  },
];

export default images;

import { RiLeafLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { FiDatabase } from "react-icons/fi";

export interface Feature {
  title: string;
  description: string;
  image: React.ReactNode;
}

const RiLeafIcon = <RiLeafLine size={30} />;
const GoGearIcon = <GoGear size={30} />;
const FiDatabaseIcon = <FiDatabase size={30} />;

export const featuresSection: Feature[] = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
    image: RiLeafIcon,
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    image: GoGearIcon,
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    image: FiDatabaseIcon,
  },
];

export const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, Paypal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized user.",
  },
];
