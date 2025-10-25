"use client"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, RotateCcw, Star, X, Globe, ExternalLink } from "lucide-react"
import styles from "./SocialBrowser.module.css"

export default function TwitterBrowser() {
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="currentColor"/>
              </svg>
            </div>
            <span className={styles.tabTitle}>Twitter - melihkochan</span>
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
          <span className={styles.urlText}>x.com/melihkochan1</span>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="#1DA1F2">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className={styles.externalSiteTitle}>Twitter Profili</h2>
            <p className={styles.externalSiteDescription}>
              Twitter profilime erişmek için aşağıdaki linke tıklayın.
            </p>
            <a
              href="https://x.com/melihkochan1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalSiteButton}
            >
              <ExternalLink size={16} className={styles.externalLinkIcon} />
              Twitter Profilini Aç
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
