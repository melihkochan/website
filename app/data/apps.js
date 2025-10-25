import React from "react"
import {
  Folder,
  Mail,
  Briefcase,
  User,
  Phone,
  GraduationCap,
  Github,
  Linkedin,
  FileText,
  Calculator as CalculatorIcon,
} from "lucide-react"

// Desktop apps - all icons visible
export const desktopApps = [
  {
    id: "file-explorer",
    name: "Dosya Gezgini",
    icon: <Folder size={32} color="#0078d7" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: <Linkedin size={32} color="#0A66C2" />,
  },
  {
    id: "github",
    name: "GitHub",
    icon: <Github size={32} color="#333" />,
  },
  {
    id: "resume-pdf",
    name: "Özgeçmiş",
    icon: <FileText size={32} color="#FF0000" />,
  },
  {
    id: "chrome",
    name: "Chrome",
    icon: <img src="/chrome.png" alt="Chrome" width="32" height="32" />,
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.3307 9.12463C31.0376 8.04079 30.1938 7.19779 29.1094 6.9052C26.74 6.25 16.5016 6.25 16.5016 6.25C16.5016 6.25 6.26302 6.25 3.89364 6.9052C2.80924 7.19786 1.96528 8.04087 1.67223 9.12463C1.01703 11.4933 1.01703 16.25 1.01703 16.25C1.01703 16.25 1.01703 21.0067 1.67223 23.3754C1.96531 24.4592 2.80927 25.3022 3.89364 25.5948C6.26302 26.25 16.5016 26.25 16.5016 26.25C16.5016 26.25 26.7401 26.25 29.1095 25.5948C30.1939 25.3021 31.0377 24.4591 31.3309 23.3754C31.9861 21.0067 31.9861 16.25 31.9861 16.25C31.9861 16.25 31.9861 11.4933 31.3307 9.12463Z" fill="#FF0000"/>
        <path d="M13.2524 20.3171L21.4196 16.25L13.2524 12.1829V20.3171Z" fill="white"/>
      </svg>
    ),
  },
  {
    id: "spotify",
    name: "Spotify",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="#1DB954" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm7.362 23.12c-.248.35-.68.468-1.053.239-2.914-1.786-6.58-2.185-10.906-1.178-.448.122-.93-.183-1.052-.556-.122-.448.183-.93.556-1.052 4.626-1.053 8.788-.603 11.996 1.365.448.183.494.681.311 1.129l-.052.053zm1.493-3.429c-.31.432-.85.619-1.303.31-3.344-2.044-8.445-2.636-12.404-1.444-.543.155-1.052-.155-1.207-.618-.155-.495.155-1.052.618-1.207 4.717-1.366 10.173-.721 13.866 1.699.465.259.56.808.301 1.273l-.881-.013zm.122-3.471c-4.26-2.517-11.26-2.75-15.32-1.52-.654.182-1.239-.183-1.44-.745-.182-.619.183-1.239.745-1.44 4.684-1.298 12.225-1.024 16.94 1.772.58.34.726 1.052.387 1.612-.361.619-1.052.765-1.612.429l-.7-.108z"/>
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: <img src="/instagram.png" alt="Instagram" width="32" height="32" />,
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.3125 7.0625C27.5 7.375 26.625 7.5625 25.6875 7.625C26.625 7.0625 27.375 6.1875 27.75 5.125C26.875 5.625 25.875 6 24.8125 6.25C24 5.25 22.8125 4.625 21.5 4.625C19 4.625 17 6.625 17 9.125C17 9.4375 17.0625 9.75 17.1875 10.0625C13.0625 9.875 9.375 7.875 6.75 4.875C6.375 5.5 6.1875 6.25 6.1875 7.0625C6.1875 8.625 6.9375 10 8.1875 10.75C7.5 10.75 6.8125 10.5625 6.25 10.3125V10.375C6.25 12.5 7.8125 14.3125 9.875 14.75C9.5 14.875 9.125 14.9375 8.75 14.9375C8.4375 14.9375 8.1875 14.875 7.9375 14.875C8.5 16.6875 10.125 18 12.0625 18C10.5 19.25 8.5 20 6.3125 20C6 20 5.6875 20 5.375 19.9375C7.3125 21.25 9.625 22 12.125 22C21.5 22 26.75 15.0625 26.75 9.25C26.75 9.0625 26.75 8.9375 26.75 8.75C27.625 8.125 28.3125 7.375 28.875 6.5C28.0625 6.875 27.1875 7.125 26.25 7.3125L28.3125 7.0625Z"/>
      </svg>
    ),
  },
  {
    id: "calculator",
    name: "Hesap Makinesi",
    icon: <CalculatorIcon size={32} color="#0078d7" />,
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
