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
  FileText,
  Twitter,
  Youtube,
} from "lucide-react"

// Desktop apps - all icons visible
export const desktopApps = [
  {
    id: "file-explorer",
    name: "Dosya Gezgini",
    icon: <Folder size={32} color="#0078d7" />,
  },
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
    id: "instagram",
    name: "Instagram",
    icon: <Instagram size={32} color="#E4405F" />,
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: <Twitter size={32} color="#1DA1F2" />,
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: <Youtube size={32} color="#FF0000" />,
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
  {
    id: "spotify",
    name: "Spotify",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DB954" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.84.54-.959 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    id: "resume-pdf",
    name: "Özgeçmiş",
    icon: <FileText size={32} color="#FF0000" />,
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
]

// Essential Windows apps to keep in the Start Menu
const essentialWindowsApps = [
  {
    id: "mail",
    name: "E-posta",
    icon: <Mail size={24} color="#0078d7" />,
  },
]

// Combine portfolio apps and essential Windows apps for the Start Menu
export const allApps = [...desktopApps, ...portfolioApps, ...essentialWindowsApps]
