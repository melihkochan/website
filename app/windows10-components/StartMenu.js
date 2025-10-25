"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Power, User } from "lucide-react"
import styles from "./StartMenu.module.css"
import { allApps, desktopApps } from "../data/apps"

export default function StartMenu({ openWindow, onLogout }) {
  const [searchQuery, setSearchQuery] = useState("")

  const menuVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const handleAppClick = (e, app) => {
    e.stopPropagation()
    openWindow(app)
  }

  const handleLogout = (e) => {
    e.stopPropagation()
    onLogout()
  }

  // Filter apps based on search query
  const filteredApps = searchQuery
    ? allApps.filter((app) =>
        app.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allApps

  const pinnedApps = filteredApps
    .filter((app) => !desktopApps.some((desktopApp) => desktopApp.id === app.id))
    .slice(0, 12)

  return (
    <motion.div
      className={styles.startMenu}
      initial="hidden"
      animate="visible"
      variants={menuVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.searchBar}>
        <Search size={16} />
        <input
          type="text"
          placeholder="Buraya yazarak arayın"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div className={styles.pinnedApps}>
        <h3>{searchQuery ? "Sonuçlar" : "Sabitlenmiş"}</h3>
        <div className={styles.appGrid}>
          {pinnedApps.map((app) => (
            <motion.div
              key={app.id}
              className={styles.appTile}
              onClick={(e) => handleAppClick(e, app)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.appIcon}>{app.icon}</div>
              <div className={styles.appName}>{app.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.allApps}>
        <h3>Tüm Uygulamalar</h3>
        <div className={styles.appList}>
          {filteredApps.map((app) => (
            <motion.div
              key={app.id}
              className={styles.appListItem}
              onClick={(e) => handleAppClick(e, app)}
              whileHover={{ backgroundColor: "#f0f0f0" }}
            >
              <div className={styles.appListIcon}>{app.icon}</div>
              <div className={styles.appListName}>{app.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.userProfile}>
          <User size={24} />
          <span>melihkochan</span>
        </div>
        <button className={styles.powerButton} onClick={handleLogout}>
          <Power size={20} />
        </button>
      </div>
    </motion.div>
  )
}
