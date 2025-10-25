"use client"

import { motion } from "framer-motion"
import { Search, Power, User } from "lucide-react"
import styles from "./StartMenu.module.css"
import { allApps } from "@/data/apps"
import { desktopApps } from "@/data/desktopApps"

export default function StartMenu({ openWindow, onLogout }) {
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
        <input type="text" placeholder="Type here to search" />
      </div>

      <div className={styles.pinnedApps}>
        <h3>Pinned</h3>
        <div className={styles.appGrid}>
          {allApps
            .filter((app) => !desktopApps.some((desktopApp) => desktopApp.id === app.id))
            .slice(0, 12)
            .map((app) => (
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
        <h3>All apps</h3>
        <div className={styles.appList}>
          {allApps.map((app) => (
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
          <span>thefstack</span>
        </div>
        <button className={styles.powerButton} onClick={handleLogout}>
          <Power size={20} />
        </button>
      </div>
    </motion.div>
  )
}
