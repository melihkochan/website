"use client"
import { useState, useEffect } from "react"
import styles from "./Notepad.module.css"

export default function Notepad() {
  const [text, setText] = useState("")

  // Load from localStorage on mount
  useEffect(() => {
    const savedText = localStorage.getItem("notepadText")
    if (savedText) {
      setText(savedText)
    }
  }, [])

  // Save to localStorage on change
  const handleChange = (e) => {
    const newText = e.target.value
    setText(newText)
    localStorage.setItem("notepadText", newText)
  }

  return (
    <div className={styles.notepadContainer}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={handleChange}
        placeholder="Not defterinize bir şeyler yazın..."
        spellCheck="false"
      />
    </div>
  )
}
