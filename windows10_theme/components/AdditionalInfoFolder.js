"use client"
import styles from "./FolderContent.module.css"

export default function AdditionalInfoFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Additional Information</h1>

      <div className={styles.additionalInfo}>
        <div className={styles.infoSection}>
          <h2>Work Experience</h2>
          <div className={styles.workExperience}>
            <h3>Full Stack Developer - IVY Knowledge Service Pvt Ltd</h3>
            <p className={styles.workDuration}>September 2024 - Present</p>
            <p className={styles.workDescription}>
              IVY Knowledge Services Pvt. Ltd is a leading data analytics training institute operating as Ivy
              Professional School. During my time there, I contributed to the development of AI-integrated learning
              systems and internal web tools.
            </p>
            <ul className={styles.workResponsibilities}>
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
        </div>

        <div className={styles.infoSection}>
          <h2>Languages</h2>
          <ul className={styles.languageList}>
            <li>English (Professional)</li>
            <li>Hindi (Native)</li>
            <li>Bengali (Conversational)</li>
          </ul>
        </div>

        <div className={styles.infoSection}>
          <h2>Interests</h2>
          <ul className={styles.interestsList}>
            <li>Web Development</li>
            <li>Artificial Intelligence</li>
            <li>Open Source Contribution</li>
            <li>Reading</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
