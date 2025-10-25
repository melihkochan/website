"use client"

import { motion } from "framer-motion"
import styles from "./DesktopIcon.module.css"

export default function DesktopIcon({ app, isSelected, onClick, onDoubleClick }) {
  return (
    <motion.div
      className={`${styles.iconContainer} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
      onDoubleClick={(e) => {
        e.stopPropagation()
        onDoubleClick()
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.icon}>{app.icon}</div>
      <div className={styles.label}>{app.name}</div>
    </motion.div>
  )
}
