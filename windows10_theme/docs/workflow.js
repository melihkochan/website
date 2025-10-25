/**
 * Windows 10 UI Clone - Application Workflow
 *
 * This document explains the workflow and component interactions in the Windows 10 UI Clone project.
 */

/**
 * Application Initialization Flow:
 *
 * 1. The application starts in app/page.js which is the main component
 * 2. Initial states are set up:
 *    - isLoggedIn: false (user starts at login screen)
 *    - openWindows: [] (no windows open initially)
 *    - activeWindow: null (no active window)
 *    - minimizedWindows: [] (no minimized windows)
 *    - startMenuOpen: false (start menu closed)
 *    - loaderVisible: true (initial loader is shown)
 *
 * 3. On first load, a loader animation is displayed
 * 4. After the loader animation completes, the login screen is shown
 * 5. The application checks localStorage for previous login state
 */

/**
 * Login Process:
 *
 * 1. User clicks on the login screen
 * 2. handleLogin() is called which:
 *    - Sets isLoggedIn to true
 *    - Stores login state in localStorage
 * 3. The desktop environment is rendered
 */

/**
 * Desktop Interaction Flow:
 *
 * 1. Desktop shows desktop icons from desktopApps array
 * 2. User can:
 *    - Click on desktop to deselect all icons and windows
 *    - Click on an icon to select it
 *    - Double-click an icon to open its associated application
 */

/**
 * Window Management Flow:
 *
 * 1. When an app is opened:
 *    - openWindow(app) is called
 *    - The app is added to openWindows array
 *    - The app becomes the activeWindow
 *
 * 2. Window focus management:
 *    - Clicking on a window calls focusWindow(id)
 *    - The clicked window becomes the activeWindow
 *    - Z-index is updated to bring the window to front
 *
 * 3. Window minimization:
 *    - Clicking minimize button calls minimizeWindow(id)
 *    - Window is added to minimizedWindows array
 *    - Window is hidden from view but remains in openWindows
 *
 * 4. Window restoration:
 *    - Clicking a minimized window's taskbar icon restores it
 *    - Window is removed from minimizedWindows array
 *    - Window becomes the activeWindow
 *
 * 5. Window closing:
 *    - Clicking close button calls closeWindow(id)
 *    - Window is removed from openWindows array
 *    - If it was minimized, it's also removed from minimizedWindows
 */

/**
 * Taskbar Interaction Flow:
 *
 * 1. Taskbar shows:
 *    - Start button
 *    - Search box (on larger screens)
 *    - Pinned apps
 *    - Currently open apps
 *    - System tray with date/time
 *
 * 2. Clicking the Start button:
 *    - Toggles the startMenuOpen state
 *    - Shows/hides the StartMenu component
 *
 * 3. Clicking a taskbar icon:
 *    - If the app is not open, it opens the app
 *    - If the app is open but minimized, it restores the window
 *    - If the app is already open and visible, it focuses the window
 */

/**
 * Start Menu Interaction Flow:
 *
 * 1. Start Menu shows:
 *    - Search box
 *    - Pinned apps
 *    - All apps list
 *    - User profile and power button
 *
 * 2. Clicking an app in the Start Menu:
 *    - Opens the app
 *    - Closes the Start Menu
 *
 * 3. Clicking the power button:
 *    - Calls the logout function
 *    - Clears localStorage
 *    - Sets isLoggedIn to false
 *    - Returns to login screen
 */

/**
 * Browser Simulation Flow:
 *
 * 1. Chrome browser component simulates web browsing with:
 *    - Address bar
 *    - Navigation buttons
 *    - Tab management
 *    - Content area
 *
 * 2. Social media browsers (GitHub, LinkedIn) show:
 *    - External site prompt
 *    - Link to open the actual site in a new tab
 */

/**
 * File Explorer Flow:
 *
 * 1. File Explorer shows:
 *    - Sidebar with quick access locations
 *    - File/folder listing for the current path
 *    - Breadcrumb navigation
 *
 * 2. Clicking a folder:
 *    - Updates the current path
 *    - Shows contents of that folder
 *
 * 3. Clicking special folders (like Projects):
 *    - Opens the corresponding application window
 */

/**
 * Portfolio Content Flow:
 *
 * Various folder components display portfolio information:
 * - ProjectsFolder: Shows project details with links
 * - PersonalInfoFolder: Shows personal information
 * - SkillsFolder: Shows technical and soft skills
 * - EducationFolder: Shows educational background
 * - CertificationsFolder: Shows certifications
 * - ContactFolder: Shows contact information with links
 * - AdditionalInfoFolder: Shows additional professional details
 */

/**
 * Responsive Behavior:
 *
 * 1. On smaller screens:
 *    - Search box in taskbar is hidden
 *    - System tray shows fewer items
 *    - Windows are sized appropriately
 *
 * 2. Window positioning is adjusted to ensure visibility
 *
 * 3. Touch interactions are supported for mobile devices
 */
