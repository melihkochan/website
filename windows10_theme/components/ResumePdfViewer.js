"use client"
import { Download, Printer } from "lucide-react"
import styles from "./ResumePdfViewer.module.css"
import Experience from "./Experience"

export default function ResumePdfViewer() {
  return (
    <div className={styles.pdfViewer}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarButtons}>
          <button className={styles.toolbarButton}>File</button>
          <button className={styles.toolbarButton}>Edit</button>
          <button className={styles.toolbarButton}>View</button>
          <button className={styles.toolbarButton}>Help</button>
        </div>
        <div className={styles.toolbarActions}>
          <button className={styles.actionButton}>
            <Download size={16} />
            Save
          </button>
          <button className={styles.actionButton}>
            <Printer size={16} />
            Print
          </button>
        </div>
      </div>

      <div className={styles.pdfContent}>
        <Experience />
      </div>
    </div>
  )
}
