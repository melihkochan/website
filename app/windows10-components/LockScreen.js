"use client"

import { useState, useEffect } from "react"
import styles from "./LockScreen.module.css"

export default function LockScreen({ onUnlock }) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [currentDate, setCurrentDate] = useState(new Date())
  const [backgroundImage, setBackgroundImage] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)
      setCurrentDate(now)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Pick a random image from public/images (1.jpg to 6.jpg)
  useEffect(() => {
    const randomImageNumber = Math.floor(Math.random() * 6) + 1
    setBackgroundImage(`/images/${randomImageNumber}.jpg`)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const formatDate = (date) => {
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    const months = [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ]
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`
  }

  return (
    <div 
      className={styles.lockScreen} 
      onClick={onUnlock}
      style={{
        backgroundImage: backgroundImage 
          ? `url(${backgroundImage})` 
          : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.lockScreenContent}>
        <div className={styles.time}>{formatTime(currentTime)}</div>
        <div className={styles.date}>{formatDate(currentDate)}</div>
      </div>
      <div className={styles.lockScreenHint}>
        <div className={styles.lockIcon}>🔒</div>
        <div className={styles.hintText}>Kilidi açmak için tıklayın</div>
      </div>
    </div>
  )
}
