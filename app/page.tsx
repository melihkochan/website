"use client"

import { useState, useRef } from "react"
import React from "react"
import Desktop from "./windows10-components/Desktop"
import Taskbar from "./windows10-components/Taskbar"
import StartMenu from "./windows10-components/StartMenu"
import WindowsLogo from "./windows10-components/WindowsLogo"
import LoginScreen from "./windows10-components/LoginScreen"
import LockScreen from "./windows10-components/LockScreen"
import styles from "./page.module.css"

export default function Home() {
  const [isLockScreenVisible, setIsLockScreenVisible] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [startMenuOpen, setStartMenuOpen] = useState(false)
  const [openWindows, setOpenWindows] = useState<Array<{ id: string; name: string; icon: React.ReactNode }>>([])
  const [activeWindow, setActiveWindow] = useState<string | null>(null)
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([])
  const contentRef = useRef(null)

  const handleUnlock = () => {
    setIsLockScreenVisible(false)
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem("signin", "true")
  }

  const handleLogout = () => {
    localStorage.removeItem("signin")
    setIsLockScreenVisible(true)
    setIsLoggedIn(false)
  }

  const handleLock = () => {
    setIsLockScreenVisible(true)
  }

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen)
  }

  const openWindow = (app: { id: string; name: string; icon: React.ReactNode }) => {
    if (minimizedWindows.includes(app.id)) {
      setMinimizedWindows(minimizedWindows.filter((id) => id !== app.id))
      setActiveWindow(app.id)
      return
    }

    if (!openWindows.find((window) => window.id === app.id)) {
      setOpenWindows([...openWindows, app])
      setActiveWindow(app.id)
    } else {
      focusWindow(app.id)
    }
  }

  const closeWindow = (id: string | null) => {
    setOpenWindows(openWindows.filter((window) => window.id !== id))
    setMinimizedWindows(minimizedWindows.filter((windowId) => windowId !== id))

    if (activeWindow === id) {
      const remainingWindows = openWindows.filter((window) => window.id !== id && !minimizedWindows.includes(window.id))
      setActiveWindow(remainingWindows.length > 0 ? remainingWindows[remainingWindows.length - 1].id : null)
    }
  }

  const focusWindow = (id: string | null) => {
    if (!id) return
    if (minimizedWindows.includes(id)) {
      setMinimizedWindows(minimizedWindows.filter((windowId) => windowId !== id))
    }
    setActiveWindow(id)
  }

  const minimizeWindow = (id: string | null) => {
    if (!id) return
    if (!minimizedWindows.includes(id)) {
      setMinimizedWindows([...minimizedWindows, id])
    }

    if (activeWindow === id) {
      const remainingWindows = openWindows.filter((window) => window.id !== id && !minimizedWindows.includes(window.id))
      setActiveWindow(remainingWindows.length > 0 ? remainingWindows[remainingWindows.length - 1].id : null)
    }
  }

  const [showQuickSettings, setShowQuickSettings] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)

  const handleDesktopClick = () => {
    if (startMenuOpen) {
      setStartMenuOpen(false)
    }
    if (showQuickSettings) {
      setShowQuickSettings(false)
    }
    if (showCalendar) {
      setShowCalendar(false)
    }
  }

  return (
    <>
      {isLockScreenVisible ? (
        <LockScreen onUnlock={handleUnlock} />
      ) : isLoggedIn ? (
        <main
          ref={contentRef}
          className={styles.main}
          onClick={handleDesktopClick}
        >
          <>
            <WindowsLogo />
            <Desktop
                openWindow={openWindow}
                openWindows={openWindows}
                closeWindow={closeWindow}
                activeWindow={activeWindow}
                setActiveWindow={setActiveWindow}
                minimizeWindow={minimizeWindow}
              />
              {startMenuOpen && (
                <StartMenu
                  openWindow={(app: { id: string; name: string; icon: React.ReactNode }) => {
                    openWindow(app)
                    setStartMenuOpen(false)
                  }}
                  onLogout={handleLogout}
                />
              )}
              <Taskbar
                toggleStartMenu={toggleStartMenu}
                startMenuOpen={startMenuOpen}
                openWindows={openWindows}
                openWindow={openWindow}
                focusWindow={focusWindow}
                minimizedWindows={minimizedWindows}
                showQuickSettings={showQuickSettings}
                setShowQuickSettings={setShowQuickSettings}
                showCalendar={showCalendar}
                setShowCalendar={setShowCalendar}
              />
          </>
        </main>
      ) : (
        <LoginScreen onLogin={handleLogin} onLock={handleLock} />
      )}
    </>
  )
}
