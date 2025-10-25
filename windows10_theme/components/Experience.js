"use client"
import styles from "./Experience.module.css"

export default function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.resumeHeader}>
        <h1>Raj Sharma</h1>
        <div className={styles.contactInfo}>
          <p>Kolkata, India</p>
          <p>Email: rajsharmahwh19@gmail.com</p>
          <p>Phone: +91 9142892678</p>
          <p>
            <a href="https://linkedin.com/in/thefstack" target="_blank" rel="noopener noreferrer">
              LinkedIn: linkedin.com/in/thefstack
            </a>
          </p>
          <p>
            <a href="https://github.com/thefstack" target="_blank" rel="noopener noreferrer">
              Github: github.com/thefstack
            </a>
          </p>
          <p>
            <a href="https://www.thefstack.com" target="_blank" rel="noopener noreferrer">
              Website: www.thefstack.com
            </a>
          </p>
        </div>
      </div>

      <section className={styles.resumeSection}>
        <h2>Work Experience</h2>
        <div className={styles.experienceItem}>
          <div className={styles.jobHeader}>
            <h3>Full Stack Developer- IVY Knowledge Service Pvt Ltd</h3>
            <span className={styles.date}>September 2024 - Present</span>
          </div>
          <p>
            IVY Knowledge Services Pvt. Ltd is a leading data analytics training institute operating as Ivy Professional
            School. During my time there, I contributed to the development of AI-integrated learning systems and
            internal web tools
          </p>
          <ul>
            <li>
              Integrated AI-powered chatbot features for resolving user queries on topics like Data Science, Data
              Engineering, and Power BI.
            </li>
            <li>Developed an AI-based quiz system generating questions based on selected topics and subtopics.</li>
            <li>
              Implemented an AI-driven review system analyzing quiz performance and offering personalized improvement
              suggestions.
            </li>
            <li>
              Built a dynamic lesson plan feature that unlocks quizzes upon completion of daily lessons to encourage
              progressive learning.
            </li>
            <li>
              Created an AI-powered resume builder with ATS score analysis and skill scoring for optimized resume
              building.
            </li>
            <li>Collaborated with Agile teams, managing repositories and project workflows using GitHub.</li>
          </ul>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Projects</h2>

        <div className={styles.projectItem}>
          <h3>
            PrepAI |{" "}
            <a
              href="https://prepai.ivyproschool.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Live Demo
            </a>
          </h3>
          <ul>
            <li>
              Integrated AI-powered chatbot features where users can select specific topics related to Data Science,
              Data Engineering, and Power BI to resolve their queries.
            </li>
            <li>
              Developed an AI-based quiz system where users can test their knowledge, with AI-generated questions based
              on selected topics and subtopics.
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
              Developed an AI-powered resume builder with ATS score analysis and skill scoring, allowing users to
              optimize their resumes effectively.
            </li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <h3>
            PDF Splitter |{" "}
            <a
              href="https://pdf-splitter.thefstack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Live Demo
            </a>
          </h3>
          <ul>
            <li>
              Built a web application that allows users to split PDF files into individual pages or custom ranges.
            </li>
            <li>
              Implemented a drag-and-drop interface for easy file uploading and a preview feature to view PDF pages.
            </li>
            <li>Used React.js for the frontend and Node.js with Express for the backend processing.</li>
            <li>Integrated PDF.js for rendering previews and pdf-lib for manipulation operations.</li>
            <li>Ensured secure file handling with temporary storage and automatic cleanup.</li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <h3>
            Real Time Chat Application | <span className={styles.projectLink}>Live Demo</span>
          </h3>
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
          <h3>
            Rocket Health |{" "}
            <a
              href="https://rockethealththefstack.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Live Demo
            </a>
          </h3>
          <ul>
            <li>Developed a static healthcare-themed web application with a focus on clean UI and minimal design.</li>
            <li>Implemented a typing text animation for improved interactivity using pure CSS.</li>
            <li>Structured entirely using HTML and CSS without any JavaScript frameworks.</li>
            <li>Designed an informative layout to clearly present health-related content.</li>
            <li>Emphasized performance and responsiveness for fast user experience.</li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <h3>
            Basic E-Commerce API |{" "}
            <a
              href="https://github.com/thefstack/first-ecommerce-api"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              GitHub Repository
            </a>
          </h3>
          <ul>
            <li>Implemented secure user authentication with OTP-based email verification.</li>
            <li>Designed and developed CRUD operations for product management.</li>
            <li>Secured API endpoints using JWT-based token authentication.</li>
            <li>Integrated MongoDB for efficient data storage and retrieval.</li>
            <li>Utilized Nodemailer for sending verification emails during user registration.</li>
          </ul>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Skills</h2>
        <ul className={styles.skillsList}>
          <li>
            <strong>Languages:</strong> JavaScript, Java
          </li>
          <li>
            <strong>Frameworks:</strong> React.js, Next.js, Express.js, Node.js
          </li>
          <li>
            <strong>Databases:</strong> MongoDB, MySQL
          </li>
          <li>
            <strong>Tools & Platform:</strong> Git, Postman
          </li>
          <li>
            <strong>Other Skills:</strong> REST APIs, State Management (Context API), Agile Methodologies
          </li>
          <li>
            <strong>Soft Skills:</strong> Problem-solving, Team Collaboration
          </li>
        </ul>
      </section>

      <section className={styles.resumeSection}>
        <h2>Education</h2>
        <div className={styles.educationItem}>
          <h3>B.Sc (Hons.) Computer Science (University of Delhi)</h3>
          <span className={styles.date}>[2021-2024]</span>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <strong>Location Preference:</strong> Open to relocate
          </li>
          <li>
            <strong>Availability:</strong> Immediate
          </li>
        </ul>
      </section>
    </div>
  )
}
