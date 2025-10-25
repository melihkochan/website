"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useDragControls } from "framer-motion"
import { X, Minus, Square, Maximize2 } from "lucide-react"
import styles from "./Window.module.css"
import ChromeBrowser from "./ChromeBrowser"
import ProjectsFolder from "./ProjectsFolder"
import PersonalInfoFolder from "./PersonalInfoFolder"
import ContactFolder from "./ContactFolder"
import SkillsFolder from "./SkillsFolder"
import EducationFolder from "./EducationFolder"
import CertificationsFolder from "./CertificationsFolder"
import AdditionalInfoFolder from "./AdditionalInfoFolder"
import GithubBrowser from "./GithubBrowser"
import LinkedinBrowser from "./LinkedinBrowser"
import InstagramBrowser from "./InstagramBrowser"
import MailBrowser from "./MailBrowser"
import FileExplorer from "./FileExplorer"
import ResumePdfViewer from "./ResumePdfViewer"

function getInitialWindowPosition(appId) {
  // Get window dimensions
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1000
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800
  const isMobile = typeof window !== "undefined" ? window.innerWidth <= 768 : false

  // Default sizes for different app types
  let width = 800
  let height = 500
  let left = 100
  let top = 50

  // Adjust for mobile screens
  if (isMobile) {
    width = windowWidth * 0.95 // 95% of screen width on mobile
    height = windowHeight * 0.7 // 70% of screen height on mobile
    left = windowWidth * 0.025 // Center horizontally
    top = windowHeight * 0.1 // Position near the top on mobile

    // Ensure height doesn't exceed available space accounting for taskbar
    const maxHeight = typeof window !== "undefined" ? window.innerHeight - 50 : 800
    height = Math.min(height, maxHeight)
  } else {
    // Desktop sizing logic (existing code)
    // Adjust size for Chrome
    if (appId === "chrome" || appId === "github" || appId === "linkedin" || appId === "instagram") {
      width = Math.min(1000, windowWidth * 0.8) // 80% of screen width, max 1000px
      height = Math.min(600, windowHeight * 0.7) // 70% of screen height, max 600px

      // Center the window
      left = Math.max(0, (windowWidth - width) / 2)
      top = Math.max(0, (windowHeight - height - 40) / 3) // Account for taskbar
    }

    // Adjust size for folder windows
    if (
      ["projects", "personal-info", "contact", "skills", "education", "certifications", "additional-info"].includes(
        appId,
      )
    ) {
      width = Math.min(900, windowWidth * 0.75) // 75% of screen width, max 900px
      height = Math.min(700, windowHeight * 0.8) // 80% of screen height, max 700px

      // Center the window
      left = Math.max(0, (windowWidth - width) / 2)
      top = Math.max(0, (windowHeight - height - 40) / 3) // Account for taskbar
    }

    // Specific adjustment for file explorer
    if (appId === "file-explorer") {
      width = Math.min(900, windowWidth * 0.75) // 75% of screen width, max 900px
      height = Math.min(700, windowHeight * 0.8) // 80% of screen height, max 700px

      // Center the window
      left = Math.max(0, (windowWidth - width) / 2)
      top = Math.max(0, (windowHeight - height - 40) / 3) // Account for taskbar
    }

    // Specific adjustment for mail
    if (appId === "mail") {
      width = Math.min(800, windowWidth * 0.7) // 70% of screen width, max 800px
      height = Math.min(500, windowHeight * 0.6) // 60% of screen height, max 500px

      // Center the window
      left = Math.max(0, (windowWidth - width) / 2)
      top = Math.max(0, (windowHeight - height - 40) / 3) // Account for taskbar
    }

    // Specific adjustment for resume PDF
    if (appId === "resume-pdf") {
      width = Math.min(900, windowWidth * 0.8) // 80% of screen width, max 900px
      height = Math.min(800, windowHeight * 0.85) // 85% of screen height, max 800px

      // Center the window
      left = Math.max(0, (windowWidth - width) / 2)
      top = Math.max(0, (windowHeight - height - 40) / 3) // Account for taskbar
    }
  }

  // Ensure window is fully visible
  left = Math.min(left, windowWidth - width)
  top = Math.min(top, windowHeight - height - 40) // Account for taskbar

  return { width, height, left, top }
}

export default function Window({ app, onClose, isActive, onFocus, zIndex, onMinimize }) {
  const initialPosition = getInitialWindowPosition(app.id)
  const [windowSize, setWindowSize] = useState({
    width: initialPosition.width,
    height: initialPosition.height,
  })
  const [windowPosition, setWindowPosition] = useState({
    left: initialPosition.left,
    top: initialPosition.top,
  })
  // Store the pre-maximized state to restore when un-maximizing
  const [preMaximizedState, setPreMaximizedState] = useState(null)
  const [isMaximized, setIsMaximized] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const dragControls = useDragControls()
  const windowRef = useRef(null)

  useEffect(() => {
    if (isActive && windowRef.current) {
      windowRef.current.focus()
    }
  }, [isActive])

  // Only reset minimized state when window becomes active AND was previously minimized
  useEffect(() => {
    if (isActive && isMinimized) {
      setIsMinimized(false)
    }
  }, [isActive])

  const toggleMaximize = (e) => {
    e.stopPropagation()

    if (!isMaximized) {
      // Save current position and size before maximizing
      setPreMaximizedState({
        position: { ...windowPosition },
        size: { ...windowSize },
      })
      setIsMaximized(true)
    } else {
      // Restore previous position and size
      if (preMaximizedState) {
        setWindowPosition(preMaximizedState.position)
        setWindowSize(preMaximizedState.size)
      }
      setIsMaximized(false)
    }
  }

  const handleMinimize = (e) => {
    e.stopPropagation()
    // Set minimized state
    setIsMinimized(true)
    // Call the onMinimize prop to notify parent component
    if (onMinimize) {
      onMinimize(app.id)
    }
  }

  const handleWindowClick = (e) => {
    e.stopPropagation()
    onFocus()
  }

  // Render specific content based on app ID
  const renderAppContent = () => {
    switch (app.id) {
      case "chrome":
        return <ChromeBrowser />
      case "projects":
        return <ProjectsFolder />
      case "personal-info":
        return <PersonalInfoFolder />
      case "contact":
        return <ContactFolder />
      case "skills":
        return <SkillsFolder />
      case "education":
        return <EducationFolder />
      case "certifications":
        return <CertificationsFolder />
      case "additional-info":
        return <AdditionalInfoFolder />
      case "github":
        return <GithubBrowser />
      case "linkedin":
        return <LinkedinBrowser />
      case "instagram":
        return <InstagramBrowser />
      case "mail":
        return <MailBrowser />
      case "file-explorer":
        return <FileExplorer openWindow={app.openWindow} />
      case "resume-pdf":
        return <ResumePdfViewer />
      default:
        return (
          <div className={styles.emptyContent}>
            <h2>Welcome to {app.name}</h2>
            <p>This is a placeholder content for {app.name} application.</p>
          </div>
        )
    }
  }

  // If minimized, don't render the window
  if (isMinimized) return null

  // Calculate window styles based on maximized state
  const windowStyles = {
    zIndex: isActive ? zIndex + 10 : zIndex, // Increase z-index when active
    ...(isMaximized
      ? {
          top: 0,
          left: 0,
          width: "100%",
          height: "calc(100% - 40px)", // Account for taskbar
          maxHeight: "calc(100dvh - 40px)", // Use dvh for mobile browsers
          borderRadius: 0,
        }
      : {
          width: `${windowSize.width}px`,
          height: `${windowSize.height}px`,
          left: windowPosition.left,
          top: windowPosition.top,
        }),
  }

  return (
    <motion.div
      ref={windowRef}
      className={`${styles.window} ${isMaximized ? styles.maximized : ""} ${isActive ? styles.active : ""} ${
        app.id === "chrome" ||
        app.id === "github" ||
        app.id === "linkedin" ||
        app.id === "instagram" ||
        app.id === "mail"
          ? styles.browserWindow
          : ""
      }`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      drag={!isMaximized}
      dragControls={dragControls}
      dragMomentum={false}
      dragListener={false}
      dragElastic={0}
      style={windowStyles}
      onClick={handleWindowClick}
      tabIndex={0}
      onDragEnd={(event, info) => {
        if (!isMaximized) {
          const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1000
          const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800

          // Calculate new position
          let newLeft = windowPosition.left + info.offset.x
          let newTop = windowPosition.top + info.offset.y

          // Ensure window stays within screen boundaries
          newLeft = Math.max(0, Math.min(newLeft, windowWidth - windowSize.width))
          newTop = Math.max(0, Math.min(newTop, windowHeight - windowSize.height - 40))

          setWindowPosition({ left: newLeft, top: newTop })
        }
      }}
    >
      <div
        className={styles.titleBar}
        onPointerDown={(e) => {
          e.stopPropagation()
          onFocus()
          if (!isMaximized) {
            dragControls.start(e)
          }
        }}
        onDoubleClick={toggleMaximize}
      >
        <div className={styles.titleBarLeft}>
          <div className={styles.appIcon}>{app.icon}</div>
          <div className={styles.title}>{app.name}</div>
        </div>
        <div className={styles.titleBarControls}>
          <motion.div
            className={styles.control}
            onClick={handleMinimize}
            whileHover={{ backgroundColor: "#e5e5e5" }}
            initial={false}
          >
            <Minus size={16} />
          </motion.div>
          <motion.div
            className={styles.control}
            onClick={toggleMaximize}
            whileHover={{ backgroundColor: "#e5e5e5" }}
            initial={false}
          >
            {isMaximized ? <Square size={14} /> : <Maximize2 size={14} />}
          </motion.div>
          <motion.div
            className={`${styles.control} ${styles.close}`}
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            whileHover={{ backgroundColor: "#e81123" }}
            initial={false}
          >
            <X size={16} />
          </motion.div>
        </div>
      </div>
      <div
        className={styles.windowContent}
        style={{
          height: "calc(100% - 32px)",
          overflow: "hidden", // Change from auto to hidden to let child components handle scrolling
        }}
      >
        {renderAppContent()}
      </div>
    </motion.div>
  )
}
