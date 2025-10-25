"use client"
import styles from "./FolderContent.module.css"

export default function EducationFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Education</h1>

      <div className={styles.educationItem}>
        <div className={styles.educationHeader}>
          <h2>B.Sc (Hons.) Computer Science</h2>
          <span className={styles.educationYear}>2021-2024</span>
        </div>
        <p className={styles.educationInstitution}>University of Delhi</p>
      </div>
    </div>
  )
}
