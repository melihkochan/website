"use client"
import styles from "./FolderContent.module.css"

export default function SkillsFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Skills</h1>

      <div className={styles.skillsGrid}>
        <div className={styles.skillCategory}>
          <h2>Languages</h2>
          <ul className={styles.skillList}>
            <li>JavaScript</li>
            <li>Java</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Frameworks</h2>
          <ul className={styles.skillList}>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Express.js</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Databases</h2>
          <ul className={styles.skillList}>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Tools & Platform</h2>
          <ul className={styles.skillList}>
            <li>Git</li>
            <li>Postman</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Other Skills</h2>
          <ul className={styles.skillList}>
            <li>REST APIs</li>
            <li>State Management (Context API)</li>
            <li>Agile Methodologies</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Soft Skills</h2>
          <ul className={styles.skillList}>
            <li>Problem-solving</li>
            <li>Team Collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
