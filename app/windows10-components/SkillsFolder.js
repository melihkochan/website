"use client"
import styles from "./FolderContent.module.css"

export default function SkillsFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Yetenekler</h1>

      <div className={styles.skillsGrid}>
        <div className={styles.skillCategory}>
          <h2>Diller</h2>
          <ul className={styles.skillList}>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Java</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Çerçeveler & Kütüphaneler</h2>
          <ul className={styles.skillList}>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>Framer Motion</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Veritabanları</h2>
          <ul className={styles.skillList}>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Araçlar & Platformlar</h2>
          <ul className={styles.skillList}>
            <li>Git</li>
            <li>Postman</li>
            <li>ESLint</li>
            <li>Vercel</li>
            <li>CSS Modules</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Diğer Yetenekler</h2>
          <ul className={styles.skillList}>
            <li>REST APIs</li>
            <li>Durum Yönetimi (Context API)</li>
            <li>Çevik Metodolojiler</li>
            <li>Responsive Design</li>
            <li>UI/UX Tasarımı</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Kişisel Yetenekler</h2>
          <ul className={styles.skillList}>
            <li>Problem Çözme</li>
            <li>Ekip Çalışması</li>
            <li>İletişim</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
