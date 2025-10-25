"use client"

import { useState } from "react"
import styles from "./DesktopGallery.module.css"

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
]

export default function DesktopGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [openedImage, setOpenedImage] = useState(null)

  return (
    <>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryHeader}>
          <h3 className={styles.galleryTitle}>Galeri</h3>
        </div>
        <div className={styles.galleryGrid}>
          {images.map((src, index) => (
            <div
              key={index}
              className={`${styles.galleryItem} ${hoveredIndex === index ? styles.hovered : ""} ${selectedIndex === index ? styles.selected : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setOpenedImage(index)}
            >
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`}
                className={styles.galleryImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay}>
                <div className={styles.imageNumber}>{index + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openedImage !== null && (
        <div 
          className={styles.imageModal}
          onClick={() => setOpenedImage(null)}
        >
          <button 
            className={styles.closeButton}
            onClick={(e) => {
              e.stopPropagation()
              setOpenedImage(null)
            }}
          >
            ✕
          </button>
          <img 
            src={images[openedImage]} 
            alt={`Image ${openedImage + 1}`}
            className={styles.fullImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
