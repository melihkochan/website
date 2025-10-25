"use client"

import { useState, useEffect, useRef } from "react"
import DesktopIcon from "./DesktopIcon"
import Window from "./Window"
import styles from "./Desktop.module.css"
import { desktopApps } from "../data/apps"

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
  const [isSelecting, setIsSelecting] = useState(false)
  const [selectionStart, setSelectionStart] = useState({ x: 0, y: 0 })
  const [selectionEnd, setSelectionEnd] = useState({ x: 0, y: 0 })
  const desktopRef = useRef(null)

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

  const handleMouseDown = (e) => {
    // Start selection on desktop background, not on icons or windows
    // Check if click target is the desktop container or its direct children (like iconGrid)
    const target = e.target
    const isClickingDesktop = target === desktopRef.current || 
                              (desktopRef.current && desktopRef.current.contains(target))
    
    // Don't start selection if clicking on an icon
    const isClickingIcon = target.closest('[class*="iconContainer"]') || 
                           target.closest('[class*="DesktopIcon"]')
    
    if (isClickingDesktop && !isClickingIcon) {
      setIsSelecting(true)
      const rect = desktopRef.current.getBoundingClientRect()
      setSelectionStart({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
      setSelectionEnd({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  const handleMouseMove = (e) => {
    if (isSelecting) {
      const rect = desktopRef.current.getBoundingClientRect()
      setSelectionEnd({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  const handleMouseUp = () => {
    setIsSelecting(false)
    setSelectionStart({ x: 0, y: 0 })
    setSelectionEnd({ x: 0, y: 0 })
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

  // Add event listeners for mouse events
  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e)
    const handleGlobalMouseUp = () => handleMouseUp()

    if (isSelecting) {
      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isSelecting])

  // Calculate selection box dimensions and position
  const selectionStyle = {
    position: 'absolute',
    left: Math.min(selectionStart.x, selectionEnd.x),
    top: Math.min(selectionStart.y, selectionEnd.y),
    width: Math.abs(selectionEnd.x - selectionStart.x),
    height: Math.abs(selectionEnd.y - selectionStart.y),
    border: '1px dashed #0078d7',
    backgroundColor: 'rgba(0, 120, 215, 0.1)',
    pointerEvents: 'none',
    zIndex: 9999
  }

  return (
    <div 
      ref={desktopRef}
      className={styles.desktop} 
      onClick={handleDesktopClick}
      onMouseDown={handleMouseDown}
    >
      {isSelecting && (
        <div style={selectionStyle} />
      )}
      <div className={styles.iconGrid}>
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
