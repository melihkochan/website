"use client"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, RotateCcw, Star, X, Globe, ExternalLink } from "lucide-react"
import styles from "./SocialBrowser.module.css"

export default function GithubBrowser() {
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
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                  fill="black"
                />
              </svg>
            </div>
            <span className={styles.tabTitle}>GitHub - thefstack</span>
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
          <span className={styles.urlText}>github.com/thefstack</span>
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
              <svg height="68" viewBox="0 0 16 16" width="68">
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  fill="#24292f"
                ></path>
              </svg>
            </div>
            <h2 className={styles.externalSiteTitle}>GitHub Profile</h2>
            <p className={styles.externalSiteDescription}>
              Due to security restrictions, GitHub cannot be displayed in this window.
            </p>
            <a
              href="https://github.com/thefstack"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalSiteButton}
            >
              <ExternalLink size={16} className={styles.externalLinkIcon} />
              Open GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
