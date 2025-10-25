"use client"
import styles from "./Taskbar.module.css"
import { Wifi, Volume2, Plane, Bell, BatteryLow, Sun, Bluetooth, Folder } from "lucide-react"
import { useState, useEffect } from "react"
import { allApps } from "../data/apps"

export default function Taskbar({
  toggleStartMenu,
  startMenuOpen,
  openWindows,
  openWindow,
  focusWindow,
  minimizedWindows,
  showQuickSettings,
  setShowQuickSettings,
  showCalendar,
  setShowCalendar,
}) {
  const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  const currentDate = new Date().toLocaleDateString()
  const [showTooltip, setShowTooltip] = useState(null)
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const [wifiEnabled, setWifiEnabled] = useState(true)
  const [volume, setVolume] = useState(39)
  const [brightness, setBrightness] = useState(100)
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false)
  const [airplaneMode, setAirplaneMode] = useState(false)
  const [doNotDisturb, setDoNotDisturb] = useState(false)



  // Brightness control
  useEffect(() => {
    // Apply brightness filter with minimum 15% for visibility
    const minBrightness = Math.max(brightness, 15)
    document.body.style.filter = `brightness(${minBrightness}%)`
  }, [brightness])

  // Volume control
  useEffect(() => {
    // Control all audio/video elements on the page
    const allMedia = document.querySelectorAll('audio, video')
    allMedia.forEach(media => {
      if (media.volume !== undefined) {
        media.volume = volume / 100
      }
    })
  }, [volume])

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
      <div className={styles.taskbar}>
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
              setShowTooltip("Dosya Gezgini")
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
            <Folder size={26} color="#0078d7" />
            {showTooltip === "Dosya Gezgini" && <div className={styles.tooltip}>Dosya Gezgini</div>}
          </div>

          {/* Show active windows in taskbar */}
          {openWindows.map((window) => {
            // Skip if the app is already in the pinned section
            if (["file-explorer"].includes(window.id)) return null

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
          <>
            <div 
              className={styles.overlay}
              onClick={() => setShowQuickSettings(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
              }}
            ></div>
            <div className={styles.quickSettings} onClick={(e) => e.stopPropagation()}>
            <div className={styles.quickSettingsGrid}>
              {/* Wi-Fi Tile */}
              <div 
                className={styles.quickSettingTile}
                onClick={() => {
                  const newWifiEnabled = !wifiEnabled
                  setWifiEnabled(newWifiEnabled)
                  if (newWifiEnabled && airplaneMode) {
                    setAirplaneMode(false)
                  }
                }}
                style={{ border: `2px solid ${wifiEnabled ? "#4CAF50" : "rgba(255,255,255,0.1)"}` }}
              >
                <div className={styles.quickSettingIcon}>
                  <Wifi size={24} color={wifiEnabled ? "#4CAF50" : "#999"} />
                </div>
                <div className={styles.quickSettingText}>
                  <div className={styles.quickSettingLabel}>Wi-Fi</div>
                  <div className={styles.quickSettingValue}>{wifiEnabled ? "KOCHAN" : "Kapalı"}</div>
                </div>
                <div className={`${styles.statusDot} ${wifiEnabled ? styles.active : ""}`}></div>
              </div>

              {/* Bluetooth Tile */}
              <div 
                className={styles.quickSettingTile}
                onClick={() => {
                  const newBluetoothEnabled = !bluetoothEnabled
                  setBluetoothEnabled(newBluetoothEnabled)
                  if (newBluetoothEnabled && airplaneMode) {
                    setAirplaneMode(false)
                  }
                }}
                style={{ border: `2px solid ${bluetoothEnabled ? "#0078D7" : "rgba(255,255,255,0.1)"}` }}
              >
                <div className={styles.quickSettingIcon}>
                  <Bluetooth size={24} color={bluetoothEnabled ? "#0078D7" : "#999"} />
                </div>
                <div className={styles.quickSettingText}>
                  <div className={styles.quickSettingLabel}>Bluetooth</div>
                  <div className={styles.quickSettingValue}>{bluetoothEnabled ? "Açık" : "Kapalı"}</div>
                </div>
                <div className={`${styles.statusDot} ${bluetoothEnabled ? styles.active : ""}`}></div>
              </div>

              {/* Battery */}
              <div className={styles.quickSettingItem}>
                <BatteryLow size={20} color="#FF9800" />
                <div className={styles.quickSettingItemContent}>
                  <div className={styles.quickSettingItemLabel}>Pil</div>
                  <div className={styles.quickSettingItemValue}>69%</div>
                </div>
                <div className={styles.batteryBar}>
                  <div className={styles.batteryBarFill} style={{ width: "69%" }}></div>
                </div>
              </div>

              {/* Volume Slider */}
              <div className={styles.quickSettingItem}>
                <Volume2 size={20} color="#9E62E8" />
                <div className={styles.quickSettingItemContent}>
                  <div className={styles.quickSettingItemLabel}>Ses</div>
                  <div className={styles.quickSettingItemValue}>{volume}%</div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className={styles.volumeSlider}
                />
              </div>

              {/* Brightness Slider */}
              <div className={styles.quickSettingItem}>
                <Sun size={20} color="#ff9800" />
                <div className={styles.quickSettingItemContent}>
                  <div className={styles.quickSettingItemLabel}>Parlaklık</div>
                  <div className={styles.quickSettingItemValue}>{brightness}%</div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={brightness}
                  onChange={(e) => {
                    const newBrightness = Number(e.target.value)
                    setBrightness(newBrightness)
                    // Apply brightness filter with minimum 15% for visibility
                    const minBrightness = Math.max(newBrightness, 15)
                    document.body.style.filter = `brightness(${minBrightness}%)`
                  }}
                  className={styles.brightnessSlider}
                />
              </div>

              {/* Airplane Mode */}
              <div 
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
                style={{ 
                  backgroundColor: airplaneMode ? "rgba(0, 120, 215, 0.3)" : "rgba(255, 255, 255, 0.05)", 
                  border: `2px solid ${airplaneMode ? "#0078D7" : "transparent"}` 
                }}
              >
                <Plane size={20} color={airplaneMode ? "#0078D7" : "white"} />
                <div>{airplaneMode ? "Uçak Modu" : "Uçak Modu Kapalı"}</div>
              </div>

              {/* Do Not Disturb */}
              <div 
                className={styles.actionButton}
                onClick={() => setDoNotDisturb(!doNotDisturb)}
                style={{ 
                  backgroundColor: doNotDisturb ? "rgba(255, 152, 0, 0.3)" : "rgba(255, 255, 255, 0.05)", 
                  border: `2px solid ${doNotDisturb ? "#FF9800" : "transparent"}` 
                }}
              >
                <Bell size={20} color={doNotDisturb ? "#FF9800" : "white"} />
                <div>{doNotDisturb ? "Rahatsız Etme" : "Rahatsız Etme Kapalı"}</div>
              </div>
            </div>
          </div>
          </>
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
          <>
            <div 
              className={styles.overlay}
              onClick={() => setShowCalendar(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
              }}
            ></div>
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
          </>
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
