"use client"
import { ExternalLink } from "lucide-react"
import styles from "./FolderContent.module.css"

export default function ProjectsFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Projects</h1>

      <div className={styles.projectItem}>
        <h2>PrepAI</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://prepai.ivyproschool.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
        <ul>
          <li>
            Integrated AI-powered chatbot features where users can select specific topics related to Data Science, Data
            Engineering, and Power BI to resolve their queries.
          </li>
          <li>
            Developed an AI-based quiz system where users can test their knowledge, with AI-generated questions based on
            selected topics and subtopics.
          </li>
          <li>
            Implemented an AI-driven review system to analyze quiz performance, highlighting strengths and weak points
            with personalized improvement suggestions.
          </li>
          <li>
            Built a dynamic lesson plan feature that unlocks quizzes after completing daily lessons, ensuring
            progressive learning.
          </li>
          <li>
            Developed an AI-powered resume builder with ATS score analysis and skill scoring, allowing users to optimize
            their resumes effectively.
          </li>
          <li>Collaborated in Agile teams, managing projects via GitHub.</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>PDF Splitter</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://pdf-splitter.thefstack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
        <ul>
          <li>Built a web application that allows users to split PDF files into individual pages or custom ranges.</li>
          <li>
            Implemented a drag-and-drop interface for easy file uploading and a preview feature to view PDF pages.
          </li>
          <li>Used React.js for the frontend and Node.js with Express for the backend processing.</li>
          <li>Integrated PDF.js for rendering previews and pdf-lib for manipulation operations.</li>
          <li>Ensured secure file handling with temporary storage and automatic cleanup.</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Real Time Chat Application</h2>
        <div className={styles.projectLinks}>
          <span className={styles.projectLink}>Live Demo</span>
        </div>
        <ul>
          <li>
            Developed a real-time chat app where users can sign up, log in, and communicate in a shared chat room.
          </li>
          <li>Enabled instant messaging using Socket.io, ensuring smooth, real-time communication.</li>
          <li>Integrated Strapi as a headless CMS backend for user and message management.</li>
          <li>Built a secure authentication system for user registration and login.</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Rocket Health</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://rockethealththefstack.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
        <ul>
          <li>Developed a static healthcare-themed web application with a focus on clean UI and minimal design.</li>
          <li>Implemented a typing text animation for improved interactivity using pure CSS.</li>
          <li>Structured entirely using HTML and CSS without any JavaScript frameworks.</li>
          <li>Designed an informative layout to clearly present health-related content.</li>
          <li>Emphasized performance and responsiveness for fast user experience.</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Basic E-Commerce API</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/thefstack/first-ecommerce-api"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> GitHub Repository
          </a>
        </div>
        <ul>
          <li>Implemented secure user authentication with OTP-based email verification.</li>
          <li>Designed and developed CRUD operations for product management.</li>
          <li>Secured API endpoints using JWT-based token authentication.</li>
          <li>Integrated MongoDB for efficient data storage and retrieval.</li>
          <li>Utilized Nodemailer for sending verification emails during user registration.</li>
        </ul>
      </div>
    </div>
  )
}
