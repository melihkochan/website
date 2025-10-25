"use client"
import styles from "./FolderContent.module.css"

export default function PersonalInfoFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Kişisel Bilgiler</h1>

      <div className={styles.infoCard}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>İsim:</span>
          <span className={styles.infoValue}>Melih KOÇHAN</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Konum:</span>
          <span className={styles.infoValue}>Kocaeli/Darıca</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Müsaitlik:</span>
          <span className={styles.infoValue}>Hemen</span>
        </div>
        
      </div>
    </div>
  )
}
