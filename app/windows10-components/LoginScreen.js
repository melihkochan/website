"use client"

import { useState, useEffect } from "react"
import { User, Wifi, Power, ArrowRight, WifiOff, Volume2, Sun, Battery, Bluetooth, Plane, Bell, BatteryLow } from "lucide-react"
import styles from "./LoginScreen.module.css"

export default function LoginScreen({ onLogin, onLock }) {
  const [isLoading, setIsLoading] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [showQuickSettings, setShowQuickSettings] = useState(false)
  const [wifiEnabled, setWifiEnabled] = useState(true)
  const [volume, setVolume] = useState(39)
  const [brightness, setBrightness] = useState(100)
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false)
  const [airplaneMode, setAirplaneMode] = useState(false)
  const [doNotDisturb, setDoNotDisturb] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login after 2 seconds
    setTimeout(() => {
      setFadeOut(true)

      // Store login state in localStorage
      localStorage.setItem("signin", "true")

      // Wait for fade out animation to complete
      setTimeout(() => {
        onLogin()
      }, 500)
    }, 2000)
  }

  // Volume control
  useEffect(() => {
    const audioElements = document.querySelectorAll('audio')
    audioElements.forEach(audio => {
      audio.volume = volume / 100
    })
  }, [volume])

  // Brightness control
  useEffect(() => {
    // Apply brightness filter with minimum 15% for visibility
    const minBrightness = Math.max(brightness, 15)
    document.body.style.filter = `brightness(${minBrightness}%)`
  }, [brightness])

  const toggleAirplaneMode = () => {
    const newAirplaneMode = !airplaneMode
    setAirplaneMode(newAirplaneMode)
    if (newAirplaneMode) {
      setWifiEnabled(false)
      setBluetoothEnabled(false)
    }
  }

  const toggleWifi = () => {
    const newWifiEnabled = !wifiEnabled
    setWifiEnabled(newWifiEnabled)
    if (newWifiEnabled && airplaneMode) {
      setAirplaneMode(false)
    }
  }

  const toggleBluetooth = () => {
    const newBluetoothEnabled = !bluetoothEnabled
    setBluetoothEnabled(newBluetoothEnabled)
    if (newBluetoothEnabled && airplaneMode) {
      setAirplaneMode(false)
    }
  }

  return (
    <div className={`${styles.loginScreen} ${fadeOut ? styles.fadeOut : ""}`}>
      {/* Center avatar and name */}
      <div className={styles.centerContent}>
        <div className={styles.centerAvatar}>
          <User size={60} color="white" />
        </div>
        <div className={styles.centerName}>melihkochan</div>

        <form onSubmit={handleSubmit} className={styles.passwordForm}>
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? <div className={styles.loader}></div> : <ArrowRight size={18} />}
          </button>
        </form>
      </div>

      <div className={styles.systemIcons}>
        <div 
          className={styles.systemIcon}
          onClick={(e) => {
            e.stopPropagation()
            setShowQuickSettings(!showQuickSettings)
          }}
          title="İnternet"
        >
          <Wifi size={18} color="white" />
        </div>
        <div 
          className={styles.systemIcon}
          onClick={() => {
            if (onLock) {
              onLock()
            }
          }}
          title="Kilitle"
        >
          <Power size={18} color="white" />
        </div>
      </div>

      {/* Quick Settings Panel */}
      {showQuickSettings && (
        <div className={styles.quickSettings}>
          <div className={styles.quickSettingsGrid}>
            {/* Wi-Fi Tile */}
            <div 
              className={styles.quickSettingTile}
              onClick={toggleWifi}
              style={{ border: `2px solid ${wifiEnabled ? "#4CAF50" : "rgba(255,255,255,0.1)"}` }}
            >
              <div className={styles.quickSettingIcon}>
                {wifiEnabled ? <Wifi size={24} color="#4CAF50" /> : <WifiOff size={24} color="#999" />}
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
              onClick={toggleBluetooth}
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
                }}
                className={styles.brightnessSlider}
              />
            </div>

            {/* Airplane Mode */}
            <div 
              className={styles.actionButton}
              onClick={toggleAirplaneMode}
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
      )}

      {/* Overlay to close quick settings */}
      {showQuickSettings && (
        <div 
          className={styles.overlay}
          onClick={() => setShowQuickSettings(false)}
        />
      )}
    </div>
  )
}
