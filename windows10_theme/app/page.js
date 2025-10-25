"use client"

import { useState, useEffect, useRef } from "react"
import Desktop from "@/components/Desktop"
import Taskbar from "@/components/Taskbar"
import StartMenu from "@/components/StartMenu"
import WindowsLogo from "@/components/WindowsLogo"
import LoginScreen from "@/components/LoginScreen"
import Loader from "@/components/Loader"
import styles from "./page.module.css"
import { trackLogin, trackLogout, trackAppLaunch, initAnalytics } from "@/lib/analytics"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [startMenuOpen, setStartMenuOpen] = useState(false)
  const [openWindows, setOpenWindows] = useState([])
  const [activeWindow, setActiveWindow] = useState(null)
  const [minimizedWindows, setMinimizedWindows] = useState([])
  const [loaderVisible, setLoaderVisible] = useState(true)
  const [loaderFading, setLoaderFading] = useState(false)
  const contentRef = useRef(null)

  // Initialize analytics and check if user is already logged in
  useEffect(() => {
    // Initialize analytics
    initAnalytics()

    // Check localStorage for signin status
    const isSignedIn = localStorage.getItem("signin") === "true"

    // Set login state based on localStorage
    setIsLoggedIn(isSignedIn)

    // Start the loader fade-out sequence after a delay
    const timer = setTimeout(() => {
      // First mark as fading to trigger the animation
      setLoaderFading(true)

      // Then remove the loader completely after animation completes
      setTimeout(() => {
        setLoaderVisible(false)
      }, 1000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleLogin = () => {
    setIsLoggedIn(true)
    // Track login event
    trackLogin()
    // Store login state in localStorage
    localStorage.setItem("signin", "true")
  }

  const handleLogout = () => {
    // Track logout event
    trackLogout()
    // Clear login state from localStorage
    localStorage.removeItem("signin")
    setIsLoggedIn(false)
  }

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen)
  }

  const openWindow = (app) => {
    // Track app launch
    trackAppLaunch(app.id)

    // Check if the app is minimized
    if (minimizedWindows.includes(app.id)) {
      // Remove from minimized windows
      setMinimizedWindows(minimizedWindows.filter((id) => id !== app.id))
      // Focus the window
      setActiveWindow(app.id)
      return
    }

    // Check if the window is already open
    if (!openWindows.find((window) => window.id === app.id)) {
      setOpenWindows([...openWindows, app])
      setActiveWindow(app.id)
    } else {
      focusWindow(app.id)
    }
  }

  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter((window) => window.id !== id))
    // Remove from minimized windows if it was minimized
    setMinimizedWindows(minimizedWindows.filter((windowId) => windowId !== id))

    if (activeWindow === id) {
      // Find the next window to focus
      const remainingWindows = openWindows.filter((window) => window.id !== id && !minimizedWindows.includes(window.id))
      setActiveWindow(remainingWindows.length > 0 ? remainingWindows[remainingWindows.length - 1].id : null)
    }
  }

  const focusWindow = (id) => {
    // If window is minimized, restore it
    if (minimizedWindows.includes(id)) {
      setMinimizedWindows(minimizedWindows.filter((windowId) => windowId !== id))
    }
    setActiveWindow(id)
  }

  const minimizeWindow = (id) => {
    // Add to minimized windows if not already there
    if (!minimizedWindows.includes(id)) {
      setMinimizedWindows([...minimizedWindows, id])
    }

    // Set active window to the next available window or null
    if (activeWindow === id) {
      const remainingWindows = openWindows.filter((window) => window.id !== id && !minimizedWindows.includes(window.id))
      setActiveWindow(remainingWindows.length > 0 ? remainingWindows[remainingWindows.length - 1].id : null)
    }
  }

  const handleDesktopClick = () => {
    if (startMenuOpen) {
      setStartMenuOpen(false)
    }
  }

  // Render the main content
  const renderMainContent = () => (
    <main
      ref={contentRef}
      className={styles.main}
      onClick={handleDesktopClick}
      style={{
        filter: loaderVisible ? "blur(5px)" : "none",
        transition: "filter 0.5s ease-out",
      }}
    >
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <>
          <WindowsLogo />
          <Desktop
            openWindow={openWindow}
            openWindows={openWindows}
            closeWindow={closeWindow}
            activeWindow={activeWindow}
            setActiveWindow={setActiveWindow}
            minimizeWindow={minimizeWindow}
            minimizedWindows={minimizedWindows}
          />
          {startMenuOpen && (
            <StartMenu
              openWindow={(app) => {
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
          />
        </>
      )}
    </main>
  )

  return (
    <>
      {/* Always render the main content */}
      {renderMainContent()}

      {/* Render the loader overlay if visible */}
      {loaderVisible && (
        <div className={`${styles.loaderOverlay} ${loaderFading ? styles.fadeOut : ""}`}>
          <Loader />
        </div>
      )}
    </>
  )
}
