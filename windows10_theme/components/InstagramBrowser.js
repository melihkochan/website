"use client"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, RotateCcw, Star, X, Globe, ExternalLink } from "lucide-react"
import styles from "./SocialBrowser.module.css"

export default function InstagramBrowser() {
  const [isLoading, setIsLoading] = useState(true)
  const browserContentRef = useRef(null)

  // Simulate loading
  setTimeout(() => {
    setIsLoading(false)
  }, 800)

  return (
    <div className={styles.browser} onClick={(e) => e.stopPropagation()}>
      <div className={styles.toolbar}>
        <div className={styles.tabBar}>
          <div className={styles.tab}>
            <div className={styles.favicon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFDC80" />
                  <stop offset="25%" stopColor="#FCAF45" />
                  <stop offset="50%" stopColor="#F77737" />
                  <stop offset="75%" stopColor="#F56040" />
                  <stop offset="100%" stopColor="#FD1D1D" />
                </linearGradient>
                <rect width="24" height="24" rx="6" fill="url(#instagramGradient)" />
                <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" />
                <circle cx="18.5" cy="5.5" r="1.5" fill="white" />
              </svg>
            </div>
            <span className={styles.tabTitle}>Instagram - thefstack</span>
            <X size={14} className={styles.closeTab} onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      </div>

      <div className={styles.addressBar}>
        <div className={styles.navigationButtons}>
          <button className={styles.navButton}>
            <ArrowLeft size={16} />
          </button>
          <button className={styles.navButton}>
            <ArrowRight size={16} />
          </button>
          <button className={styles.navButton}>
            <RotateCcw size={16} />
          </button>
        </div>

        <div className={styles.urlBar}>
          <Globe size={14} className={styles.urlIcon} />
          <span className={styles.urlText}>instagram.com/thefstack</span>
        </div>

        <div className={styles.browserActions}>
          <button className={styles.actionButton}>
            <Star size={16} />
          </button>
        </div>
      </div>

      <div ref={browserContentRef} className={styles.browserContent}>
        {isLoading ? (
          <div className={styles.loadingIndicator}>
            <motion.div
              className={styles.loadingBar}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            />
          </div>
        ) : (
          <div className={styles.externalSitePrompt}>
            <div className={styles.externalSiteIcon}>
              <svg width="68" height="68" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="instagramGradientLarge" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFDC80" />
                  <stop offset="25%" stopColor="#FCAF45" />
                  <stop offset="50%" stopColor="#F77737" />
                  <stop offset="75%" stopColor="#F56040" />
                  <stop offset="100%" stopColor="#FD1D1D" />
                </linearGradient>
                <rect width="24" height="24" rx="6" fill="url(#instagramGradientLarge)" />
                <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" />
                <circle cx="18.5" cy="5.5" r="1.5" fill="white" />
              </svg>
            </div>
            <h2 className={styles.externalSiteTitle}>Instagram Profile</h2>
            <p className={styles.externalSiteDescription}>
              Due to security restrictions, Instagram cannot be displayed in this window.
            </p>
            <a
              href="https://instagram.com/thefstack"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalSiteButton}
            >
              <ExternalLink size={16} className={styles.externalLinkIcon} />
              Open Instagram Profile
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
