"use client"

import { useState, useEffect } from "react"
import DesktopIcon from "./DesktopIcon"
import Window from "./Window"
import styles from "./Desktop.module.css"
import { desktopApps } from "@/data/apps"

export default function Desktop({
  openWindow,
  openWindows,
  closeWindow,
  minimizeWindow,
  minimizedWindows,
  activeWindow,
  setActiveWindow,
}) {
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [windowZIndexes, setWindowZIndexes] = useState({})

  // Initialize z-indexes for windows
  useEffect(() => {
    const newZIndexes = {}
    openWindows.forEach((window, index) => {
      if (!windowZIndexes[window.id]) {
        newZIndexes[window.id] = 100 + index
      } else {
        newZIndexes[window.id] = windowZIndexes[window.id]
      }
    })
    setWindowZIndexes({ ...windowZIndexes, ...newZIndexes })
  }, [openWindows])

  const handleIconClick = (e, app) => {
    e.stopPropagation()
    setSelectedIcon(app.id)
  }

  const handleIconDoubleClick = (app) => {
    openWindow(app)
  }

  const handleDesktopClick = () => {
    setSelectedIcon(null)
    setActiveWindow(null)
  }

  const focusWindow = (id) => {
    setActiveWindow(id)

    // Update z-indexes to bring the focused window to the front
    const maxZ = Math.max(...Object.values(windowZIndexes), 100)
    setWindowZIndexes({
      ...windowZIndexes,
      [id]: maxZ + 1,
    })
  }

  return (
    <div className={styles.desktop} onClick={handleDesktopClick}>
      <div className={styles.iconGrid} onClick={(e) => e.stopPropagation()}>
        {desktopApps.map((app) => (
          <DesktopIcon
            key={app.id}
            app={app}
            isSelected={selectedIcon === app.id}
            onClick={(e) => handleIconClick(e, app)}
            onDoubleClick={() => handleIconDoubleClick(app)}
          />
        ))}
      </div>

      {openWindows.map((window) => {
        // Add openWindow function to the window props
        const windowWithOpenWindow = {
          ...window,
          openWindow: openWindow,
        }

        return (
          <Window
            key={window.id}
            app={windowWithOpenWindow}
            onClose={() => closeWindow(window.id)}
            isActive={activeWindow === window.id}
            onFocus={() => focusWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            zIndex={windowZIndexes[window.id] || 100}
          />
        )
      })}
    </div>
  )
}
