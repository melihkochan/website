"use client"
import styles from "./FolderContent.module.css"
import { Mail, Phone, Globe } from "lucide-react"

export default function ContactFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Contact Information</h1>

      <div className={styles.contactCard}>
        <div className={styles.contactItem}>
          <Mail size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Email</span>
            <a href="mailto:rajsharmahwh19@gmail.com" className={styles.contactValue}>
              rajsharmahwh19@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Phone size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Phone</span>
            <a href="tel:+919142892678" className={styles.contactValue}>
              +91 9142892678
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Globe size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Website</span>
            <a
              href="https://www.thefstack.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactValue}
            >
              www.thefstack.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
