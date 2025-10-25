"use client"

import { useState, useRef, useEffect } from "react"
import styles from "./DesktopIcon.module.css"

export default function DesktopIcon({ app, isSelected, onClick, onDoubleClick }) {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const iconRef = useRef(null)

  // Handle context menu closing
  useEffect(() => {
    if (!isContextMenuOpen) return

    // Close context menu when clicking outside
    const handleClickOutside = (e) => {
      if (iconRef.current && !iconRef.current.contains(e.target)) {
        setIsContextMenuOpen(false)
      }
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsContextMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isContextMenuOpen])

  // Removed handleContextMenu function - now directly in onContextMenu

  const handleRefresh = () => {
    setIsRefreshing(true)
    setIsContextMenuOpen(false)
    
    // Refresh animation
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }

  return (
    <div
      ref={iconRef}
      className={`${styles.iconContainer} ${isSelected ? styles.selected : ""} ${isRefreshing ? styles.refreshing : ""}`}
      onClick={onClick}
      onDoubleClick={(e) => {
        e.stopPropagation()
        onDoubleClick()
      }}
      onContextMenu={(e) => {
        console.log('Right click on icon')
        e.preventDefault()
        e.stopPropagation()
        setIsContextMenuOpen(true)
      }}
    >
      <div className={styles.icon}>
        {isRefreshing ? (
          <span className={styles.spinning}>🔄</span>
        ) : (
          app.icon
        )}
      </div>
      <div className={styles.label}>{app.name}</div>

      {isContextMenuOpen && (
        <div 
          className={styles.contextMenu}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.contextMenuItem} onClick={handleRefresh}>
            Yenile
          </div>
        </div>
      )}
    </div>
  )
}
