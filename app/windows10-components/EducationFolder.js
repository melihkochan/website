"use client"
import styles from "./FolderContent.module.css"

export default function EducationFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Eğitim</h1>

      <div className={styles.educationItem}>
        <div className={styles.educationHeader}>
          <h2>Düzce Üniversitesi</h2>
          <span className={styles.educationYear}>2022</span>
        </div>
        <p className={styles.educationInstitution}>Üniversite eğitimim boyunca, modern yazılım geliştirme prensipleri ve disiplinli programlama yetkinlikleri üzerine odaklandım. Özellikle nesne yönelimli programlama mimarileri, veri tabanı yönetimi ve web teknolojileri konusunda güçlü bir teorik ve pratik temel oluşturdum. </p>
      </div>
    </div>
  )
}
