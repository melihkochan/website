"use client"

import { useState } from "react"
import { User, Wifi, Monitor, Power, ArrowRight } from "lucide-react"
import styles from "./LoginScreen.module.css"

export default function LoginScreen({ onLogin, onLock }) {
  const [isLoading, setIsLoading] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

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
          onClick={() => window.location.reload()}
          title="Yenile"
        >
          <Monitor size={18} color="white" />
        </div>
        <div 
          className={styles.systemIcon}
          onClick={() => alert("Wi-Fi ayarları")}
          title="Wi-Fi"
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
    </div>
  )
}
