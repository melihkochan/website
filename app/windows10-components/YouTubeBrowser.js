"use client"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, RotateCcw, Star, X, Globe, ExternalLink } from "lucide-react"
import styles from "./SocialBrowser.module.css"

export default function YouTubeBrowser() {
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
              <svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.3307 9.12463C31.0376 8.04079 30.1938 7.19779 29.1094 6.9052C26.74 6.25 16.5016 6.25 16.5016 6.25C16.5016 6.25 6.26302 6.25 3.89364 6.9052C2.80924 7.19786 1.96528 8.04087 1.67223 9.12463C1.01703 11.4933 1.01703 16.25 1.01703 16.25C1.01703 16.25 1.01703 21.0067 1.67223 23.3754C1.96531 24.4592 2.80927 25.3022 3.89364 25.5948C6.26302 26.25 16.5016 26.25 16.5016 26.25C16.5016 26.25 26.7401 26.25 29.1095 25.5948C30.1939 25.3021 31.0377 24.4591 31.3309 23.3754C31.9861 21.0067 31.9861 16.25 31.9861 16.25C31.9861 16.25 31.9861 11.4933 31.3307 9.12463Z" fill="#FF0000"/>
                <path d="M13.2524 20.3171L21.4196 16.25L13.2524 12.1829V20.3171Z" fill="white"/>
              </svg>
            </div>
            <span className={styles.tabTitle}>YouTube</span>
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
          <span className={styles.urlText}>youtube.com</span>
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
              <svg width="68" height="68" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.3307 9.12463C31.0376 8.04079 30.1938 7.19779 29.1094 6.9052C26.74 6.25 16.5016 6.25 16.5016 6.25C16.5016 6.25 6.26302 6.25 3.89364 6.9052C2.80924 7.19786 1.96528 8.04087 1.67223 9.12463C1.01703 11.4933 1.01703 16.25 1.01703 16.25C1.01703 16.25 1.01703 21.0067 1.67223 23.3754C1.96531 24.4592 2.80927 25.3022 3.89364 25.5948C6.26302 26.25 16.5016 26.25 16.5016 26.25C16.5016 26.25 26.7401 26.25 29.1095 25.5948C30.1939 25.3021 31.0377 24.4591 31.3309 23.3754C31.9861 21.0067 31.9861 16.25 31.9861 16.25C31.9861 16.25 31.9861 11.4933 31.3307 9.12463Z" fill="#FF0000"/>
                <path d="M13.2524 20.3171L21.4196 16.25L13.2524 12.1829V20.3171Z" fill="white"/>
              </svg>
            </div>
            <h2 className={styles.externalSiteTitle}>YouTube</h2>
            <p className={styles.externalSiteDescription}>
              YouTube&apos;a gitmek için butona tıklayın.
            </p>
            <a
              href="https://music.youtube.com/playlist?list=OLAK5uy_kxEBBxOSpwibQZAzX-Sk35e7Bj0vD13rc"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalSiteButton}
            >
              <ExternalLink size={16} className={styles.externalLinkIcon} />
              YouTube&apos;a Git
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
