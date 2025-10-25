"use client"
import { useState } from "react"
import { Folder, File, ChevronRight, HardDrive, Download, Users, ComputerIcon as Desktop } from "lucide-react"
import styles from "./FileExplorer.module.css"

export default function FileExplorer({ openWindow }) {
  const [currentPath, setCurrentPath] = useState("Documents")

  const handleItemClick = (itemType, itemName) => {
    if (itemType === "folder") {
      if (itemName === "Projeler") {
        // Open the Projects window
        const projectsApp = {
          id: "projects",
          name: "Projeler",
          icon: <Folder size={16} color="#0078d7" />,
        }
        openWindow(projectsApp)
      } else {
        // Update the current path when clicking on a folder
        setCurrentPath(itemName)
      }
    } else if (itemType === "file" && itemName === "Özgeçmiş.pdf") {
      // Open the resume PDF viewer
      const resumeApp = {
        id: "resume-pdf",
        name: "Özgeçmiş.pdf",
        icon: <File size={16} color="#0078d7" />,
      }
      openWindow(resumeApp)
    }
  }

  return (
    <div className={styles.fileExplorer}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarButtons}>
          <button className={styles.toolbarButton}>Dosya</button>
          <button className={styles.toolbarButton}>Giriş</button>
          <button className={styles.toolbarButton}>Paylaş</button>
          <button className={styles.toolbarButton}>Görünüm</button>
        </div>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Ara" className={styles.searchInput} />
        </div>
      </div>

      <div className={styles.explorerContent}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <div className={styles.sidebarHeader}>Hızlı Erişim</div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("Desktop")}>
              <Desktop size={16} className={styles.sidebarIcon} />
              <span>Masaüstü</span>
            </div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("Downloads")}>
              <Download size={16} className={styles.sidebarIcon} />
              <span>İndirilenler</span>
            </div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("Documents")}>
              <Users size={16} className={styles.sidebarIcon} />
              <span>Belgeler</span>
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <div className={styles.sidebarHeader}>Bilgisayar</div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("Desktop")}>
              <Desktop size={16} className={styles.sidebarIcon} />
              <span>Masaüstü</span>
            </div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("Documents")}>
              <Users size={16} className={styles.sidebarIcon} />
              <span>Belgeler</span>
            </div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("Downloads")}>
              <Download size={16} className={styles.sidebarIcon} />
              <span>İndirilenler</span>
            </div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("C:")}>
              <HardDrive size={16} className={styles.sidebarIcon} />
              <span>Yerel Disk (C:)</span>
            </div>
          </div>
        </div>

        <div className={styles.fileList}>
          <div className={styles.breadcrumb}>
            <span>Bilgisayar</span>
            <ChevronRight size={14} />
            <span>{currentPath === "Documents" ? "Belgeler" : currentPath === "Desktop" ? "Masaüstü" : currentPath === "Downloads" ? "İndirilenler" : currentPath === "Projects" ? "Projeler" : currentPath === "Resume" ? "Özgeçmiş" : currentPath === "Certificates" ? "Sertifikalar" : currentPath === "Personal" ? "Kişisel" : currentPath === "C:" ? "Yerel Disk (C:)" : currentPath}</span>
          </div>

          <div className={styles.files}>
            {currentPath === "Documents" && (
              <>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "Projeler")}>
                  <Folder size={40} color="#ffd700" />
                  <span>Projeler</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "Resume")}>
                  <Folder size={40} color="#ffd700" />
                  <span>Özgeçmiş</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("file", "Özgeçmiş.pdf")}>
                  <File size={40} color="#0078d7" />
                  <span>Özgeçmiş.pdf</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "Certificates")}>
                  <Folder size={40} color="#ffd700" />
                  <span>Sertifikalar</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "Personal")}>
                  <Folder size={40} color="#ffd700" />
                  <span>Kişisel</span>
                </div>
              </>
            )}

            {currentPath === "Projects" && (
              <>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "PrepAI")}>
                  <Folder size={40} color="#ffd700" />
                  <span>PrepAI</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "PDF Splitter")}>
                  <Folder size={40} color="#ffd700" />
                  <span>PDF Splitter</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "Real Time Chat")}>
                  <Folder size={40} color="#ffd700" />
                  <span>Real Time Chat</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "Rocket Health")}>
                  <Folder size={40} color="#ffd700" />
                  <span>Rocket Health</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "E-Commerce API")}>
                  <Folder size={40} color="#ffd700" />
                  <span>E-Commerce API</span>
                </div>
              </>
            )}

            {currentPath === "Resume" && (
              <>
                <div className={styles.fileItem} onClick={() => handleItemClick("file", "Özgeçmiş.pdf")}>
                  <File size={40} color="#0078d7" />
                  <span>Özgeçmiş.pdf</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("file", "Cover Letter.docx")}>
                  <File size={40} color="#2b579a" />
                  <span>Kapak Mektubu.docx</span>
                </div>
              </>
            )}

            {currentPath === "Certificates" && (
              <>
                <div className={styles.fileItem}>
                  <File size={40} color="#0078d7" />
                  <span>Web Geliştirme.pdf</span>
                </div>
                <div className={styles.fileItem}>
                  <File size={40} color="#0078d7" />
                  <span>React.pdf</span>
                </div>
                <div className={styles.fileItem}>
                  <File size={40} color="#0078d7" />
                  <span>Node.js.pdf</span>
                </div>
              </>
            )}

            {currentPath === "Desktop" && (
              <>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "Projeler")}>
                  <Folder size={40} color="#ffd700" />
                  <span>Projeler</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("file", "Özgeçmiş.pdf")}>
                  <File size={40} color="#0078d7" />
                  <span>Özgeçmiş.pdf</span>
                </div>
              </>
            )}

            {currentPath === "Downloads" && (
              <>
                <div className={styles.fileItem} onClick={() => handleItemClick("file", "Özgeçmiş.pdf")}>
                  <File size={40} color="#0078d7" />
                  <span>Özgeçmiş.pdf</span>
                </div>
                <div className={styles.fileItem}>
                  <File size={40} color="#0078d7" />
                  <span>Proje Dokümantasyonu.pdf</span>
                </div>
              </>
            )}

            {currentPath === "C:" && (
              <>
                <div className={styles.fileItem}>
                  <Folder size={40} color="#ffd700" />
                  <span>Program Files</span>
                </div>
                <div className={styles.fileItem}>
                  <Folder size={40} color="#ffd700" />
                  <span>Kullanıcılar</span>
                </div>
                <div className={styles.fileItem}>
                  <Folder size={40} color="#ffd700" />
                  <span>Windows</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.statusBar}>
        <div className={styles.statusItem}>
          {currentPath === "Documents"
            ? "5 öğe"
            : currentPath === "Projects"
              ? "5 öğe"
              : currentPath === "Resume"
                ? "2 öğe"
                : currentPath === "Certificates"
                  ? "3 öğe"
                  : currentPath === "Desktop"
                    ? "2 öğe"
                    : currentPath === "Downloads"
                      ? "2 öğe"
                      : currentPath === "C:"
                        ? "3 öğe"
                        : "0 öğe"}
        </div>
      </div>
    </div>
  )
}
