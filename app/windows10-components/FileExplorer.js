"use client"
import { useState } from "react"
import { Folder, File, ChevronRight, HardDrive, Download, Users, ComputerIcon as Desktop } from "lucide-react"
import styles from "./FileExplorer.module.css"

export default function FileExplorer({ openWindow }) {
  const [currentPath, setCurrentPath] = useState("Documents")

  const handleItemClick = (itemType, itemName) => {
    if (itemType === "folder") {
      if (itemName === "Projects") {
        // Open the Projects window
        const projectsApp = {
          id: "projects",
          name: "Projects",
          icon: <Folder size={16} color="#0078d7" />,
        }
        openWindow(projectsApp)
      } else {
        // Update the current path when clicking on a folder
        setCurrentPath(itemName)
      }
    } else if (itemType === "file" && itemName === "Resume.pdf") {
      // Open the resume PDF viewer
      const resumeApp = {
        id: "resume-pdf",
        name: "Resume.pdf",
        icon: <File size={16} color="#0078d7" />,
      }
      openWindow(resumeApp)
    }
  }

  return (
    <div className={styles.fileExplorer}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarButtons}>
          <button className={styles.toolbarButton}>File</button>
          <button className={styles.toolbarButton}>Home</button>
          <button className={styles.toolbarButton}>Share</button>
          <button className={styles.toolbarButton}>View</button>
        </div>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
      </div>

      <div className={styles.explorerContent}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <div className={styles.sidebarHeader}>Quick access</div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("Desktop")}>
              <Desktop size={16} className={styles.sidebarIcon} />
              <span>Desktop</span>
            </div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("Downloads")}>
              <Download size={16} className={styles.sidebarIcon} />
              <span>Downloads</span>
            </div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("Documents")}>
              <Users size={16} className={styles.sidebarIcon} />
              <span>Documents</span>
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <div className={styles.sidebarHeader}>This PC</div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("Desktop")}>
              <Desktop size={16} className={styles.sidebarIcon} />
              <span>Desktop</span>
            </div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("Documents")}>
              <Users size={16} className={styles.sidebarIcon} />
              <span>Documents</span>
            </div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("Downloads")}>
              <Download size={16} className={styles.sidebarIcon} />
              <span>Downloads</span>
            </div>
            <div className={styles.sidebarItem} onClick={() => setCurrentPath("C:")}>
              <HardDrive size={16} className={styles.sidebarIcon} />
              <span>Local Disk (C:)</span>
            </div>
          </div>
        </div>

        <div className={styles.fileList}>
          <div className={styles.breadcrumb}>
            <span>This PC</span>
            <ChevronRight size={14} />
            <span>{currentPath}</span>
          </div>

          <div className={styles.files}>
            {currentPath === "Documents" && (
              <>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "Projects")}>
                  <Folder size={40} color="#ffd700" />
                  <span>Projects</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "Resume")}>
                  <Folder size={40} color="#ffd700" />
                  <span>Resume</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("file", "Resume.pdf")}>
                  <File size={40} color="#0078d7" />
                  <span>Resume.pdf</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "Certificates")}>
                  <Folder size={40} color="#ffd700" />
                  <span>Certificates</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "Personal")}>
                  <Folder size={40} color="#ffd700" />
                  <span>Personal</span>
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
                <div className={styles.fileItem} onClick={() => handleItemClick("file", "Resume.pdf")}>
                  <File size={40} color="#0078d7" />
                  <span>Resume.pdf</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("file", "Cover Letter.docx")}>
                  <File size={40} color="#2b579a" />
                  <span>Cover Letter.docx</span>
                </div>
              </>
            )}

            {currentPath === "Certificates" && (
              <>
                <div className={styles.fileItem}>
                  <File size={40} color="#0078d7" />
                  <span>Web Development.pdf</span>
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
                <div className={styles.fileItem} onClick={() => handleItemClick("folder", "Projects")}>
                  <Folder size={40} color="#ffd700" />
                  <span>Projects</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleItemClick("file", "Resume.pdf")}>
                  <File size={40} color="#0078d7" />
                  <span>Resume.pdf</span>
                </div>
              </>
            )}

            {currentPath === "Downloads" && (
              <>
                <div className={styles.fileItem} onClick={() => handleItemClick("file", "Resume.pdf")}>
                  <File size={40} color="#0078d7" />
                  <span>Resume.pdf</span>
                </div>
                <div className={styles.fileItem}>
                  <File size={40} color="#0078d7" />
                  <span>Project Documentation.pdf</span>
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
                  <span>Users</span>
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
            ? "5 items"
            : currentPath === "Projects"
              ? "5 items"
              : currentPath === "Resume"
                ? "2 items"
                : currentPath === "Certificates"
                  ? "3 items"
                  : currentPath === "Desktop"
                    ? "2 items"
                    : currentPath === "Downloads"
                      ? "2 items"
                      : currentPath === "C:"
                        ? "3 items"
                        : "0 items"}
        </div>
      </div>
    </div>
  )
}
