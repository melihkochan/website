"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, RotateCcw, Home, Star, Menu, X, Search, Globe } from "lucide-react"
import styles from "./ChromeBrowser.module.css"

export default function ChromeBrowser() {
  const [url, setUrl] = useState("https://www.thefstack.com")
  const [inputUrl, setInputUrl] = useState("www.thefstack.com")
  const [isLoading, setIsLoading] = useState(true)
  const [history, setHistory] = useState(["https://www.thefstack.com"])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const browserContentRef = useRef(null)
  const mockContentRef = useRef(null)
  const browserRef = useRef(null)
  const iframeRef = useRef(null)

  useEffect(() => {
    // Update input URL when URL changes
    if (url.startsWith("https://")) {
      setInputUrl(url.replace("https://", ""))
    } else if (url.startsWith("http://")) {
      setInputUrl(url.replace("http://", ""))
    } else {
      setInputUrl(url)
    }
  }, [url])

  // Handle clicks outside the iframe to deactivate it
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (browserContentRef.current && !browserContentRef.current.contains(e.target)) {
  //       setIframeActive(false)
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }
  // }, [])

  // Prevent events from bubbling outside the browser component
  // useEffect(() => {
  //   const browser = browserRef.current
  //   if (!browser) return

  //   const stopPropagation = (e) => {
  //     // Don't stop propagation for wheel events to allow scrolling
  //     if (e.type !== "wheel") {
  //       e.stopPropagation()
  //     }
  //   }

  //   // Add event listeners to capture and stop events
  //   const events = ["click", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove"]

  //   events.forEach((event) => {
  //     browser.addEventListener(event, stopPropagation, { capture: true })
  //   })

  //   return () => {
  //     events.forEach((event) => {
  //       browser.removeEventListener(event, stopPropagation, { capture: true })
  //     })
  //   }
  // }, [])

  // Add this function after the other useEffect hooks
  useEffect(() => {
    const handleWheel = (e) => {
      // Don't stop propagation for wheel events to allow scrolling
      e.stopPropagation()
    }

    // Get references to the elements
    const browserContent = browserContentRef.current

    if (browserContent) {
      browserContent.addEventListener("wheel", handleWheel, { passive: true })
    }

    return () => {
      if (browserContent) {
        browserContent.removeEventListener("wheel", handleWheel)
      }
    }
  }, [])

  const handleUrlSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    let newUrl = inputUrl

    // Add https if missing
    if (!newUrl.startsWith("http://") && !newUrl.startsWith("https://")) {
      newUrl = "https://" + newUrl
    }

    setUrl(newUrl)

    // Add to history if it's a new URL
    if (newUrl !== history[historyIndex]) {
      const newHistory = history.slice(0, historyIndex + 1)
      newHistory.push(newUrl)
      setHistory(newHistory)
      setHistoryIndex(newHistory.length - 1)
    }
  }

  const goBack = () => {
    if (historyIndex > 0) {
      setIsLoading(true)
      setHistoryIndex(historyIndex - 1)
      setUrl(history[historyIndex - 1])
    }
  }

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      setIsLoading(true)
      setHistoryIndex(historyIndex + 1)
      setUrl(history[historyIndex + 1])
    }
  }

  const reload = () => {
    setIsLoading(true)
    // Force iframe reload by setting a key with current timestamp
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src
    }
  }

  const goHome = () => {
    setIsLoading(true)
    const homeUrl = "https://www.thefstack.com"
    setUrl(homeUrl)

    // Add to history
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(homeUrl)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  // Get the current domain for the favicon and title
  const getDomain = (url) => {
    try {
      const urlObj = new URL(url)
      return urlObj.hostname
    } catch (e) {
      return url
    }
  }

  const currentDomain = getDomain(url)

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={styles.browser}>
      <div className={styles.toolbar}>
        <div className={styles.tabBar}>
          <div className={styles.tab}>
            <div className={styles.favicon}>
              {currentDomain.includes("google") ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#4285F4" />
                  <circle cx="12" cy="12" r="4" fill="white" />
                  <path d="M12 8L20 8" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M4 8L8 8" stroke="#EA4335" strokeWidth="4" strokeLinecap="round" />
                  <path d="M6.5 14.5L9 9" stroke="#FBBC05" strokeWidth="4" strokeLinecap="round" />
                  <path d="M15 9L17.5 14.5" stroke="#34A853" strokeWidth="4" strokeLinecap="round" />
                </svg>
              ) : currentDomain.includes("thefstack") ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#2563EB" />
                  <path d="M7 7H17V9H7V7Z" fill="white" />
                  <path d="M7 11H17V13H7V11Z" fill="white" />
                  <path d="M7 15H17V17H7V15Z" fill="white" />
                </svg>
              ) : (
                <Globe size={16} color="#5f6368" />
              )}
            </div>
            <span className={styles.tabTitle}>{currentDomain}</span>
            <X size={14} className={styles.closeTab} />
          </div>
          <div className={styles.newTab}>+</div>
        </div>
      </div>

      <div className={styles.addressBar}>
        <div className={styles.navigationButtons}>
          <button className={styles.navButton} onClick={goBack} disabled={historyIndex <= 0}>
            <ArrowLeft size={16} />
          </button>
          <button className={styles.navButton} onClick={goForward} disabled={historyIndex >= history.length - 1}>
            <ArrowRight size={16} />
          </button>
          <button className={styles.navButton} onClick={reload}>
            <RotateCcw size={16} />
          </button>
        </div>

        <form onSubmit={handleUrlSubmit} className={styles.urlForm}>
          <div className={styles.urlBar}>
            <Search size={14} className={styles.searchIcon} />
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className={styles.urlInput}
            />
          </div>
        </form>

        <div className={styles.browserActions}>
          <button className={styles.actionButton}>
            <Star size={16} />
          </button>
          <button className={styles.actionButton} onClick={goHome}>
            <Home size={16} />
          </button>
          <button className={styles.actionButton}>
            <Menu size={16} />
          </button>
        </div>
      </div>

      <div ref={browserContentRef} className={styles.browserContent}>
        {isLoading && (
          <div className={styles.loadingIndicator}>
            <motion.div
              className={styles.loadingBar}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            />
          </div>
        )}
        <div className={styles.iframeWrapper}>
          <iframe
            ref={iframeRef}
            src={url}
            className={styles.iframe}
            onLoad={handleIframeLoad}
            title="Browser Content"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            scrolling="yes"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>
    </div>
  )
}
