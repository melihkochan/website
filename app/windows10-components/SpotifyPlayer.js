"use client"
import styles from "./SpotifyPlayer.module.css"

export default function SpotifyPlayer() {
  const albumUrl = "https://open.spotify.com/embed/album/3bGxEDwqYnjyDgngVLqEol?utm_source=generator&theme=0"

  return (
    <div className={styles.spotifyContainer}>
      <iframe
        src={albumUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Player - Ecliptic Signals by KOCHAN"
      ></iframe>
    </div>
  )
}
