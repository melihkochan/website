"use client"

import { useState, useEffect } from "react"
import styles from "./DesktopWidget.module.css"

export default function DesktopWidget() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString("tr-TR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const fadeOut = () => {
    setIsFading(true)
    setTimeout(() => {
      setIsFading(false)
    }, 500)
  }

  return (
    <div className={`${styles.widgetContainer} ${isFading ? styles.fading : ""}`}>
      <div className={styles.widget} onClick={fadeOut}>
        <div className={styles.timeDisplay}>{formatTime(currentTime)}</div>
        <div className={styles.dateDisplay}>{formatDate(currentTime)}</div>
      </div>
    </div>
  )
}
