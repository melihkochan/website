"use client"
import styles from "./FolderContent.module.css"
import { Mail, Phone, Globe } from "lucide-react"

export default function ContactFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>İletişim Bilgileri</h1>

      <div className={styles.contactCard}>
        <div className={styles.contactItem}>
          <Mail size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>E-posta</span>
            <a href="mailto:melihkochan00@gmail.com" className={styles.contactValue}>
            melihkochan00@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Phone size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Telefon</span>
            <a href="tel:0 549 436 27 08" className={styles.contactValue}>
            0 549 436 27 08
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Globe size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Web Sitesi</span>
            <a
              href="https://www.melihkochan.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactValue}
            >
              www.melihkochan.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
