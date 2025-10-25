"use client"
import styles from "./Taskbar.module.css"
import { Search, Monitor, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export default function Taskbar({
  toggleStartMenu,
  startMenuOpen,
  openWindows,
  openWindow,
  focusWindow,
  minimizedWindows,
}) {
  const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  const currentDate = new Date().toLocaleDateString()
  const [showTooltip, setShowTooltip] = useState(null)
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }

    // Initial check
    checkScreenSize()

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Find apps by ID to open them from the taskbar
  const handleOpenApp = (appId) => {
    // Import apps data
    const { allApps } = require("@/data/apps")
    const app = allApps.find((app) => app.id === appId)
    if (app) {
      const existingWindow = openWindows.find((w) => w.id === app.id)
      if (existingWindow) {
        focusWindow(app.id)
      } else {
        openWindow(app)
      }
    }
  }

  // Check if an app is minimized
  const isAppMinimized = (appId) => {
    return minimizedWindows.includes(appId)
  }

  return (
    <div className={styles.taskbar} onClick={(e) => e.stopPropagation()}>
      <div className={styles.left}>
        <div
          className={`${styles.startButton} ${startMenuOpen ? styles.active : ""}`}
          onClick={toggleStartMenu}
          onMouseEnter={() => {
            setShowTooltip("Start")
            setHoveredIcon("start")
          }}
          onMouseLeave={() => {
            setShowTooltip(null)
            setHoveredIcon(null)
          }}
          style={{
            backgroundColor:
              hoveredIcon === "start" ? "rgba(255, 255, 255, 0.1)" : startMenuOpen ? "#0078d7" : "transparent",
          }}
        >
          <div className={styles.windowsLogo}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                fill="#fff"
                d="M0,0L7.5,1V7.5H0V0z M8.5,1L16,0v7.5H8.5V1z M0,8.5H7.5V15L0,16V8.5z M8.5,8.5H16V16L8.5,15V8.5z"
              />
            </svg>
          </div>
          {showTooltip === "Start" && <div className={styles.tooltip}>Start</div>}
        </div>

        {!isSmallScreen && (
          <div
            className={styles.searchContainer}
            onMouseEnter={() => {
              setShowTooltip("Search")
              setHoveredIcon("search")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            onClick={() => handleOpenApp("search")}
          >
            <Search size={14} className={styles.searchIcon} />
            <span className={styles.searchText}>Type here to search</span>
            {showTooltip === "Search" && <div className={styles.tooltip}>Search</div>}
          </div>
        )}

        <div className={styles.taskbarIcons}>
          {/* File Explorer */}
          <div
            className={`${styles.taskbarIcon} ${
              openWindows.some((w) => w.id === "file-explorer") ? styles.activeApp : ""
            } ${isAppMinimized("file-explorer") ? styles.minimizedApp : ""}`}
            onClick={() => handleOpenApp("file-explorer")}
            onMouseEnter={() => {
              setShowTooltip("File Explorer")
              setHoveredIcon("file-explorer")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            style={{
              backgroundColor: hoveredIcon === "file-explorer" ? "rgba(255, 255, 255, 0.1)" : "transparent",
            }}
          >
            <Monitor size={20} color="#fff" />
            {showTooltip === "File Explorer" && <div className={styles.tooltip}>File Explorer</div>}
          </div>

          {/* Edge */}
          <div
            className={`${styles.taskbarIcon} ${
              openWindows.some((w) => w.id === "edge") ? styles.activeApp : ""
            } ${isAppMinimized("edge") ? styles.minimizedApp : ""}`}
            onClick={() => handleOpenApp("edge")}
            onMouseEnter={() => {
              setShowTooltip("Microsoft Edge")
              setHoveredIcon("edge")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            style={{
              backgroundColor: hoveredIcon === "edge" ? "rgba(255, 255, 255, 0.1)" : "transparent",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#0078D7" />
              <path d="M12 4L4 8.5L12 13L20 8.5L12 4Z" fill cy="12" r="10" fill="#0078D7" />
              <path d="M12 4L4 8.5L12 13L20 8.5L12 4Z" fill="#fff" />
              <path d="M4 8.5V15.5L12 20L20 15.5V8.5" stroke="#fff" strokeWidth="1" />
            </svg>
            {showTooltip === "Microsoft Edge" && <div className={styles.tooltip}>Microsoft Edge</div>}
          </div>

          {/* Chrome */}
          <div
            className={`${styles.taskbarIcon} ${
              openWindows.some((w) => w.id === "chrome") ? styles.activeApp : ""
            } ${isAppMinimized("chrome") ? styles.minimizedApp : ""}`}
            onClick={() => handleOpenApp("chrome")}
            onMouseEnter={() => {
              setShowTooltip("Chrome")
              setHoveredIcon("chrome")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            style={{
              backgroundColor: hoveredIcon === "chrome" ? "rgba(255, 255, 255, 0.1)" : "transparent",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="20" fill="#4285F4" />
              <circle cx="24" cy="24" r="8" fill="white" />
              <path d="M24 12L42 12" stroke="white" strokeWidth="8" strokeLinecap="round" />
              <path d="M6 12L12 12" stroke="#EA4335" strokeWidth="8" strokeLinecap="round" />
              <path d="M10 32L16 18" stroke="#FBBC05" strokeWidth="8" strokeLinecap="round" />
              <path d="M32 18L38 32" stroke="#34A853" strokeWidth="8" strokeLinecap="round" />
            </svg>
            {showTooltip === "Chrome" && <div className={styles.tooltip}>Chrome</div>}
          </div>

          {/* Mail */}
          <div
            className={`${styles.taskbarIcon} ${
              openWindows.some((w) => w.id === "mail") ? styles.activeApp : ""
            } ${isAppMinimized("mail") ? styles.minimizedApp : ""}`}
            onClick={() => handleOpenApp("mail")}
            onMouseEnter={() => {
              setShowTooltip("Mail")
              setHoveredIcon("mail")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            style={{
              backgroundColor: hoveredIcon === "mail" ? "rgba(255, 255, 255, 0.1)" : "transparent",
            }}
          >
            <Mail size={20} color="#fff" />
            {showTooltip === "Mail" && <div className={styles.tooltip}>Mail</div>}
          </div>

          {/* Show active windows in taskbar */}
          {openWindows.map((window) => {
            // Skip if the app is already in the pinned section
            if (["file-explorer", "edge", "chrome", "mail"].includes(window.id)) return null

            return (
              <div
                key={window.id}
                className={`${styles.taskbarIcon} ${styles.activeApp} ${
                  isAppMinimized(window.id) ? styles.minimizedApp : ""
                }`}
                onClick={() => focusWindow(window.id)}
                onMouseEnter={() => {
                  setShowTooltip(window.name)
                  setHoveredIcon(window.id)
                }}
                onMouseLeave={() => {
                  setShowTooltip(null)
                  setHoveredIcon(null)
                }}
                style={{
                  backgroundColor: hoveredIcon === window.id ? "rgba(255, 255, 255, 0.1)" : "transparent",
                }}
              >
                <div className={styles.appIconSmall}>{window.icon}</div>
                {showTooltip === window.name && <div className={styles.tooltip}>{window.name}</div>}
              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.systemTray}>
          <div
            className={styles.trayIcon}
            onMouseEnter={() => {
              setShowTooltip("Network")
              setHoveredIcon("network")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            style={{
              backgroundColor: hoveredIcon === "network" ? "rgba(255, 255, 255, 0.1)" : "transparent",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10V14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 7V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M16 10V14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {showTooltip === "Network" && <div className={styles.tooltip}>Network</div>}
          </div>

          <div
            className={styles.trayIcon}
            onMouseEnter={() => {
              setShowTooltip("Volume")
              setHoveredIcon("volume")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            style={{
              backgroundColor: hoveredIcon === "volume" ? "rgba(255, 255, 255, 0.1)" : "transparent",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10L12 4L18 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 14L12 20L18 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {showTooltip === "Volume" && <div className={styles.tooltip}>Volume</div>}
          </div>
        </div>

        <div
          className={styles.dateTime}
          onMouseEnter={() => {
            setShowTooltip("Date and time")
            setHoveredIcon("datetime")
          }}
          onMouseLeave={() => {
            setShowTooltip(null)
            setHoveredIcon(null)
          }}
          style={{
            backgroundColor: hoveredIcon === "datetime" ? "rgba(255, 255, 255, 0.1)" : "transparent",
          }}
        >
          <div className={styles.time}>{currentTime}</div>
          <div className={styles.date}>{currentDate}</div>
          {showTooltip === "Date and time" && <div className={styles.tooltip}>Date and time</div>}
        </div>

        <div
          className={styles.showDesktop}
          onMouseEnter={() => {
            setShowTooltip("Show desktop")
            setHoveredIcon("showdesktop")
          }}
          onMouseLeave={() => {
            setShowTooltip(null)
            setHoveredIcon(null)
          }}
          style={{
            backgroundColor: hoveredIcon === "showdesktop" ? "rgba(255, 255, 255, 0.1)" : "transparent",
          }}
        >
          {showTooltip === "Show desktop" && <div className={styles.tooltip}>Show desktop</div>}
        </div>
      </div>
    </div>
  )
}
