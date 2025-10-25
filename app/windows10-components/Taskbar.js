"use client"
import styles from "./Taskbar.module.css"
import { Search, Monitor, Mail, Wifi, Volume2 } from "lucide-react"
import { useState, useEffect } from "react"
import { allApps } from "../data/apps"

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
  const [showQuickSettings, setShowQuickSettings] = useState(false)
  const [wifiEnabled, setWifiEnabled] = useState(true)
  const [volume, setVolume] = useState(39)
  const [brightness, setBrightness] = useState(100)
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false)
  const [airplaneMode, setAirplaneMode] = useState(false)
  const [doNotDisturb, setDoNotDisturb] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)

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

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar)
    if (showQuickSettings) setShowQuickSettings(false)
  }

  const getCurrentDateInfo = () => {
    const now = new Date()
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    return {
      day: now.getDate(),
      month: months[now.getMonth()],
      year: now.getFullYear(),
      dayName: days[now.getDay()],
    }
  }

  const generateCalendar = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startingDayOfWeek = firstDay.getDay()
    const daysInMonth = lastDay.getDate()

    const calendar = []
    
    // Add previous month's days
    const prevMonth = new Date(year, month, 0)
    const prevMonthDays = prevMonth.getDate()
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      calendar.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        isToday: false,
      })
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = i === now.getDate()
      calendar.push({
        day: i,
        isCurrentMonth: true,
        isToday,
      })
    }

    // Add next month's days to complete the grid
    const remainingDays = 42 - calendar.length // 6 rows x 7 days
    for (let i = 1; i <= remainingDays; i++) {
      calendar.push({
        day: i,
        isCurrentMonth: false,
        isToday: false,
      })
    }

    return calendar
  }

  return (
    <>
      <div className={styles.taskbar} onClick={(e) => {
        e.stopPropagation()
        if (e.target === e.currentTarget) {
          setShowQuickSettings(false)
          setShowCalendar(false)
        }
      }}>
      {/* Left side: Start button and search */}
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
      </div>

      {/* Center: Taskbar icons */}
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

      {/* Right side: System tray and time */}
      <div className={styles.right}>
        <div className={styles.systemTray}>
          <div
            className={styles.trayIcon}
            onClick={() => {
              setShowQuickSettings(!showQuickSettings)
              if (showCalendar) setShowCalendar(false)
            }}
            onMouseEnter={() => {
              setShowTooltip("Ağ ve Ses")
              setHoveredIcon("network")
            }}
            onMouseLeave={() => {
              setShowTooltip(null)
              setHoveredIcon(null)
            }}
            style={{
              backgroundColor: hoveredIcon === "network" ? "rgba(255, 255, 255, 0.1)" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            <Wifi size={24} color={wifiEnabled ? "#4CAF50" : "#999"} />
            <Volume2 size={24} color="#fff" />
            {showTooltip === "Ağ ve Ses" && <div className={styles.tooltip}>Ağ ve Ses</div>}
          </div>
        </div>

        {showQuickSettings && (
          <div className={styles.quickSettings} onClick={(e) => e.stopPropagation()}>
            <div className={styles.quickSettingRow}>
              <div className={styles.quickSettingTile} onClick={() => setWifiEnabled(!wifiEnabled)} style={{ border: `2px solid ${wifiEnabled ? "#4CAF50" : "rgba(255,255,255,0.1)"}` }}>
                <Wifi size={32} color={wifiEnabled ? "#4CAF50" : "#999"} />
                <div className={styles.settingTitle}>Wi-Fi</div>
                <div className={styles.settingSubtitle}>{wifiEnabled ? "KOCHAN" : "Kapalı"}</div>
                <div className={styles.indicator} style={{ backgroundColor: wifiEnabled ? "#4CAF50" : "#666" }}></div>
              </div>

              <div className={styles.quickSettingTile} onClick={() => setBluetoothEnabled(!bluetoothEnabled)} style={{ border: `2px solid ${bluetoothEnabled ? "#0078D7" : "rgba(255,255,255,0.1)"}` }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.71 7.71L12 2H11V9.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L11 14.41V22H12L17.71 16.29L13.41 12L17.71 7.71Z"
                    fill={bluetoothEnabled ? "#0078D7" : "#999"}
                  />
                </svg>
                <div className={styles.settingTitle}>Bluetooth</div>
                <div className={styles.settingSubtitle}>{bluetoothEnabled ? "Açık" : "Kapalı"}</div>
                <div className={styles.indicator} style={{ backgroundColor: bluetoothEnabled ? "#0078D7" : "#666" }}></div>
              </div>
            </div>

            <div className={styles.quickSettingItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                  fill="#FF9800"
                />
              </svg>
              <div className={styles.settingInfo}>
                <div className={styles.settingLabel}>Pil</div>
                <div className={styles.settingStatus}>Enerji Tasarrufu</div>
              </div>
              <div className={styles.settingValue}>69%</div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "69%" }}></div>
              </div>
            </div>

            <div className={styles.quickSettingItem}>
              <Volume2 size={20} color="#9E62E8" />
              <div className={styles.settingInfo}>
                <div className={styles.settingLabel}>Ses</div>
              </div>
              <div className={styles.settingValue}>{volume}%</div>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => {
                  const newVolume = parseInt(e.target.value)
                  setVolume(newVolume)
                  // Control all audio/video elements
                  const allMedia = document.querySelectorAll('audio, video')
                  allMedia.forEach(media => {
                    if (media.volume !== undefined) {
                      media.volume = newVolume / 100
                    }
                  })
                  // Apply visual feedback to Spotify iframe (cannot control volume due to cross-origin)
                  const spotifyFrame = document.querySelector('iframe[src*="spotify"]')
                  if (spotifyFrame) {
                    const opacity = newVolume / 100
                    spotifyFrame.style.opacity = Math.max(opacity, 0.3)
                    spotifyFrame.style.filter = `brightness(${opacity * 100}%)`
                  }
                }}
                className={styles.volumeSlider}
              />
            </div>

            <div className={styles.quickSettingItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" fill="#FF9800" />
                <path d="M12 1V7M12 17V23M4 12H10M14 12H20" stroke="#FF9800" strokeWidth="2" />
              </svg>
              <div className={styles.settingInfo}>
                <div className={styles.settingLabel}>Parlaklık</div>
              </div>
              <div className={styles.settingValue}>{brightness}%</div>
              <input
                type="range"
                min="0"
                max="100"
                value={brightness}
                onChange={(e) => {
                  const newBrightness = parseInt(e.target.value)
                  setBrightness(newBrightness)
                  // Apply brightness filter with minimum 20% for visibility
                  const minBrightness = Math.max(newBrightness, 20)
                  document.body.style.filter = `brightness(${minBrightness}%)`
                }}
                className={styles.brightnessSlider}
              />
            </div>

            <div className={styles.quickSettingRow}>
              <button
                className={styles.actionButton}
                onClick={() => {
                  setAirplaneMode(!airplaneMode)
                  if (!airplaneMode) {
                    setWifiEnabled(false)
                    setBluetoothEnabled(false)
                  } else {
                    setWifiEnabled(true)
                  }
                }}
                style={{ backgroundColor: airplaneMode ? "rgba(0, 120, 215, 0.3)" : "rgba(255, 255, 255, 0.05)", border: `2px solid ${airplaneMode ? "#0078D7" : "transparent"}` }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 16V14C21 12.9 20.1 12 19 12H5C3.9 12 3 12.9 3 14V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16ZM21 10V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V10C3 11.1 3.9 12 5 12H19C20.1 12 21 11.1 21 10Z"
                    fill={airplaneMode ? "#0078D7" : "white"}
                  />
                </svg>
                <div>{airplaneMode ? "Uçak Modu Kapalı" : "Uçak Modu"}</div>
              </button>
              <button
                className={styles.actionButton}
                onClick={() => setDoNotDisturb(!doNotDisturb)}
                style={{ backgroundColor: doNotDisturb ? "rgba(255, 152, 0, 0.3)" : "rgba(255, 255, 255, 0.05)", border: `2px solid ${doNotDisturb ? "#FF9800" : "transparent"}` }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                    fill={doNotDisturb ? "#FF9800" : "white"}
                  />
                </svg>
                <div>{doNotDisturb ? "Rahatsız Etme Kapalı" : "Rahatsız Etme"}</div>
              </button>
            </div>
          </div>
        )}

        <div
          className={styles.dateTime}
          onClick={toggleCalendar}
          onMouseEnter={() => {
            setShowTooltip("Tarih ve saat")
            setHoveredIcon("datetime")
          }}
          onMouseLeave={() => {
            setShowTooltip(null)
            setHoveredIcon(null)
          }}
          style={{
            backgroundColor: hoveredIcon === "datetime" ? "rgba(255, 255, 255, 0.1)" : "transparent",
            cursor: "pointer",
          }}
        >
          <div className={styles.time}>{currentTime}</div>
          <div className={styles.date}>{currentDate}</div>
          {showTooltip === "Tarih ve saat" && <div className={styles.tooltip}>Tarih ve saat</div>}
        </div>

        {showCalendar && (
          <div className={styles.calendar} onClick={(e) => e.stopPropagation()}>
            <div className={styles.calendarHeader}>
              <div className={styles.calendarTitle}>{getCurrentDateInfo().day} {getCurrentDateInfo().month} {getCurrentDateInfo().dayName}</div>
            </div>
            <div className={styles.calendarGrid}>
              <div className={styles.calendarDayName}>Pt</div>
              <div className={styles.calendarDayName}>Sa</div>
              <div className={styles.calendarDayName}>Ça</div>
              <div className={styles.calendarDayName}>Pe</div>
              <div className={styles.calendarDayName}>Cu</div>
              <div className={styles.calendarDayName}>Ct</div>
              <div className={styles.calendarDayName}>Pa</div>
              {generateCalendar().map((day, index) => (
                <div
                  key={index}
                  className={`${styles.calendarDay} ${day.isCurrentMonth ? styles.currentMonth : styles.otherMonth} ${day.isToday ? styles.today : ""}`}
                >
                  {day.day}
                </div>
              ))}
            </div>
          </div>
        )}

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
    </>
  )
}
