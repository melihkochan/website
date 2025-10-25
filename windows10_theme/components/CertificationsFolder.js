"use client"
import styles from "./FolderContent.module.css"

export default function CertificationsFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Certifications</h1>

      <div className={styles.certificationsList}>
        <div className={styles.certificationItem}>
          <h2>Web Development Bootcamp</h2>
          <p className={styles.certificationIssuer}>Udemy</p>
          <p className={styles.certificationDate}>2022</p>
        </div>

        <div className={styles.certificationItem}>
          <h2>React - The Complete Guide</h2>
          <p className={styles.certificationIssuer}>Udemy</p>
          <p className={styles.certificationDate}>2023</p>
        </div>

        <div className={styles.certificationItem}>
          <h2>MongoDB Basics</h2>
          <p className={styles.certificationIssuer}>MongoDB University</p>
          <p className={styles.certificationDate}>2023</p>
        </div>
      </div>
    </div>
  )
}
