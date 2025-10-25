# Windows 10 UI Clone - Interactive Portfolio

![Windows 10 UI Clone](https://portfolio.thefstack.com/images/preview.png)

## 🌐 Live Demo

Visit the live demo at [portfolio.thefstack.com](https://portfolio.thefstack.com)

## 📖 Overview

This project is an interactive portfolio website designed as a Windows 10 desktop clone. It provides a unique and engaging way to showcase skills, projects, and professional information through a familiar Windows 10 interface. Users can interact with the desktop, open applications, and explore content just like they would on a real Windows 10 system.

## 📸 Screenshots

### Login Screen
![Login Screen](https://portfolio.thefstack.com/images/screenshots/login.png)

### Desktop
![Desktop](https://portfolio.thefstack.com/images/screenshots/desktop.png)

### Start Menu
![Start Menu](https://portfolio.thefstack.com/images/screenshots/startmenu.png)

### Project Window
![Project Window](https://portfolio.thefstack.com/images/screenshots/projects.png)

### File Explorer
![File Explorer](https://portfolio.thefstack.com/images/screenshots/explorer.png)

## ✨ Features

- **Realistic Windows 10 UI** with taskbar, start menu, and desktop icons
- **Interactive windows** that can be moved, resized, minimized, and closed
- **Login screen** with animation
- **File Explorer** to browse portfolio content
- **Chrome browser** simulation to view websites
- **Multiple portfolio sections** presented as folders:
  - Projects
  - Personal Information
  - Skills
  - Education
  - Certifications
  - Contact Information
  - Additional Information
- **External links** to GitHub, LinkedIn, and other professional profiles
- **Responsive design** that adapts to different screen sizes

## 🛠️ Technologies Used

- **React.js** - Frontend library
- **Next.js** - React framework
- **Framer Motion** - Animation library
- **CSS Modules** - Styling
- **Lucide React** - Icons
- **Vercel** - Deployment platform

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/thefstack/windows10-portfolio.git
   cd windows10-portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🖥️ Usage

1. **Login Screen**: When you first visit the site, you'll see a Windows 10 login screen. Click anywhere or press any key to "log in".

2. **Desktop**: After logging in, you'll see the Windows 10 desktop with icons. Double-click any icon to open the corresponding application.

3. **Start Menu**: Click the Windows logo in the taskbar to open the Start Menu, which contains additional applications and a power button to "log out".

4. **Taskbar**: Use the taskbar to switch between open applications or access the Start Menu.

5. **Windows**: Interact with windows by:
   - Dragging the title bar to move windows
   - Clicking the maximize button to expand windows
   - Clicking the minimize button to hide windows in the taskbar
   - Clicking the close button to close windows
   - Clicking anywhere on a window to bring it to the front

## 📂 Project Structure

\`\`\`
windows10-portfolio/
├── app/                  # Next.js app directory
│   ├── layout.js         # Root layout component
│   ├── page.js           # Main page component
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── Desktop.js        # Desktop component
│   ├── LoginScreen.js    # Login screen component
│   ├── StartMenu.js      # Start menu component
│   ├── Taskbar.js        # Taskbar component
│   ├── Window.js         # Window component
│   └── ...               # Other components
├── data/                 # Data files
│   ├── apps.js           # App definitions
│   └── ...               # Other data files
├── public/               # Static files
│   └── images/           # Image assets
└── ...                   # Configuration files
\`\`\`

## 🔄 Application Flow

The following diagram illustrates the component hierarchy and interaction flow:

\`\`\`mermaid
graph TD
    A["App (page.js)"] --> B["LoginScreen"]
    A --> C["Desktop"]
    A --> D["Taskbar"]
    A --> E["StartMenu"]
    
    C --> F["DesktopIcon(s)"]
    C --> G["Window(s)"]
    
    G --> H["ChromeBrowser"]
    G --> I["FileExplorer"]
    G --> J["ProjectsFolder"]
    G --> K["PersonalInfoFolder"]
    G --> L["SkillsFolder"]
    G --> M["EducationFolder"]
    G --> N["CertificationsFolder"]
    G --> O["ContactFolder"]
    G --> P["AdditionalInfoFolder"]
    G --> Q["GithubBrowser"]
    G --> R["LinkedinBrowser"]
    G --> S["MailBrowser"]
    
    D --> T["TaskbarIcon(s)"]
    
    E --> U["StartMenuItem(s)"]
\`\`\`

### Flow Explanation:

1. The application starts with the main App component which manages the overall state.
2. Initially, the LoginScreen is displayed.
3. After login, the Desktop, Taskbar, and potentially the StartMenu are rendered.
4. The Desktop contains DesktopIcons and can open Windows.
5. Windows can contain various content components like browsers, folders, etc.
6. The Taskbar shows active applications and allows switching between them.
7. The StartMenu provides access to all applications.

## 🔍 State Management

The application uses React's useState and useEffect hooks for state management. Key states include:

- `isLoggedIn`: Tracks whether the user has logged in
- `openWindows`: Tracks which windows are currently open
- `activeWindow`: Tracks which window is currently active/focused
- `minimizedWindows`: Tracks which windows are minimized
- `startMenuOpen`: Tracks whether the Start Menu is open

## 📱 Responsive Design

The application is designed to be responsive across different screen sizes:

- On larger screens, the full Windows 10 desktop experience is provided
- On smaller screens, certain elements are adjusted or hidden to maintain usability
- The taskbar adapts to show fewer items on mobile devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Microsoft for the Windows 10 design inspiration
- The React and Next.js teams for their amazing frameworks
- Framer Motion for the smooth animations
- Lucide for the beautiful icons

## 📞 Contact

For any questions or feedback, please reach out to:

- Email: rajsharmahwh19@gmail.com
- LinkedIn: [linkedin.com/in/thefstack](https://linkedin.com/in/thefstack)
- GitHub: [github.com/thefstack](https://github.com/thefstack)
- Website: [www.thefstack.com](https://www.thefstack.com)
