import React from "react"
import {
  Folder,
  Mail,
  Briefcase,
  Code,
  User,
  Phone,
  GraduationCap,
  Award,
  Info,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react"

// Only show these 4 icons on the desktop (3 portfolio + Chrome)
export const desktopApps = [
  {
    id: "projects",
    name: "Projeler",
    icon: <Code size={32} color="#0078d7" />,
  },
  {
    id: "github",
    name: "GitHub",
    icon: <Github size={32} color="#333" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: <Linkedin size={32} color="#0A66C2" />,
  },
  {
    id: "chrome",
    name: "Chrome",
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="#4285F4" />
        <circle cx="24" cy="24" r="8" fill="white" />
        <path d="M24 12L42 12" stroke="white" strokeWidth="8" strokeLinecap="round" />
        <path d="M6 12L12 12" stroke="#EA4335" strokeWidth="8" strokeLinecap="round" />
        <path d="M10 32L16 18" stroke="#FBBC05" strokeWidth="8" strokeLinecap="round" />
        <path d="M32 18L38 32" stroke="#34A853" strokeWidth="8" strokeLinecap="round" />
      </svg>
    ),
  },
]

// Portfolio-related apps for the Start Menu
const portfolioApps = [
  {
    id: "personal-info",
    name: "Kişisel Bilgiler",
    icon: <User size={24} color="#0078d7" />,
  },
  {
    id: "contact",
    name: "İletişim",
    icon: <Phone size={24} color="#0078d7" />,
  },
  {
    id: "skills",
    name: "Yetenekler",
    icon: <Briefcase size={24} color="#0078d7" />,
  },
  {
    id: "education",
    name: "Eğitim",
    icon: <GraduationCap size={24} color="#0078d7" />,
  },
  {
    id: "certifications",
    name: "Sertifikalar",
    icon: <Award size={24} color="#0078d7" />,
  },
  {
    id: "additional-info",
    name: "Ek Bilgiler",
    icon: <Info size={24} color="#0078d7" />,
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: <Instagram size={24} color="#E4405F" />,
  },
]

// Essential Windows apps to keep in the Start Menu
const essentialWindowsApps = [
  {
    id: "file-explorer",
    name: "Dosya Gezgini",
    icon: <Folder size={24} color="#0078d7" />,
  },
  {
    id: "mail",
    name: "E-posta",
    icon: <Mail size={24} color="#0078d7" />,
  },
]

// Combine portfolio apps and essential Windows apps for the Start Menu
export const allApps = [...desktopApps, ...portfolioApps, ...essentialWindowsApps]
