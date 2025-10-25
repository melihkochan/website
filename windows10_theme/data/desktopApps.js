import { Code, Github, Linkedin } from "lucide-react"

export const desktopApps = [
  {
    id: "projects",
    name: "Projects",
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
