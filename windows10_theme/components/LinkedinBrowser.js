"use client"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, RotateCcw, Star, X, Globe, ExternalLink } from "lucide-react"
import styles from "./SocialBrowser.module.css"

export default function LinkedinBrowser() {
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
                <rect width="24" height="24" rx="2" fill="#0A66C2" />
                <path
                  d="M5 9H8V19H5V9ZM6.5 7.5C5.4 7.5 4.5 6.6 4.5 5.5C4.5 4.4 5.4 3.5 6.5 3.5C7.6 3.5 8.5 4.4 8.5 5.5C8.5 6.6 7.6 7.5 6.5 7.5ZM13 19H10V9H13V10.5C13.9 9.3 15.2 8.5 16.5 8.5C19 8.5 20 10.5 20 13V19H17V13.5C17 12.5 16.5 11.5 15.5 11.5C14.5 11.5 13 12.5 13 14V19Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className={styles.tabTitle}>LinkedIn - thefstack</span>
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
          <span className={styles.urlText}>linkedin.com/in/thefstack</span>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 34 34">
                <g>
                  <path
                    d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                    fill="#0A66C2"
                  ></path>
                </g>
              </svg>
            </div>
            <h2 className={styles.externalSiteTitle}>LinkedIn Profile</h2>
            <p className={styles.externalSiteDescription}>
              Due to security restrictions, LinkedIn cannot be displayed in this window.
            </p>
            <a
              href="https://linkedin.com/in/thefstack"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalSiteButton}
            >
              <ExternalLink size={16} className={styles.externalLinkIcon} />
              Open LinkedIn Profile
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
