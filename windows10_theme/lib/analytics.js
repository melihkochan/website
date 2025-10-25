/**
 * Analytics utility for the Windows 10 UI Clone Portfolio
 *
 * This file provides functions to track user interactions and page views
 * without relying on external analytics services.
 */

// Initialize analytics
export function initAnalytics() {
  if (typeof window === "undefined") return

  // Create a unique session ID if one doesn't exist
  if (!localStorage.getItem("session_id")) {
    localStorage.setItem("session_id", generateSessionId())
  }

  // Track page view on initialization
  trackPageView()

  // Add event listeners for window interactions
  window.addEventListener("beforeunload", () => {
    trackEvent("session", "end")
  })
}

// Track page views
export function trackPageView() {
  if (typeof window === "undefined") return

  const data = {
    type: "pageview",
    url: window.location.pathname,
    referrer: document.referrer || "direct",
    sessionId: localStorage.getItem("session_id"),
    timestamp: new Date().toISOString(),
    screenSize: `${window.innerWidth}x${window.innerHeight}`,
    userAgent: navigator.userAgent,
  }

  // In a real implementation, you would send this data to your analytics endpoint
  console.log("Page view tracked:", data)

  // For demonstration, store in localStorage
  const analytics = JSON.parse(localStorage.getItem("analytics") || "[]")
  analytics.push(data)
  localStorage.setItem("analytics", JSON.stringify(analytics))
}

// Track specific events
export function trackEvent(category, action, label = null, value = null) {
  if (typeof window === "undefined") return

  const data = {
    type: "event",
    category,
    action,
    label,
    value,
    url: window.location.pathname,
    sessionId: localStorage.getItem("session_id"),
    timestamp: new Date().toISOString(),
  }

  // In a real implementation, you would send this data to your analytics endpoint
  console.log("Event tracked:", data)

  // For demonstration, store in localStorage
  const analytics = JSON.parse(localStorage.getItem("analytics") || "[]")
  analytics.push(data)
  localStorage.setItem("analytics", JSON.stringify(analytics))
}

// Generate a random session ID
function generateSessionId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

// Track window interactions
export function trackWindowInteraction(windowId, action) {
  trackEvent("window", action, windowId)
}

// Track app launches
export function trackAppLaunch(appId) {
  trackEvent("app", "launch", appId)
}

// Track user login
export function trackLogin() {
  trackEvent("user", "login")
}

// Track user logout
export function trackLogout() {
  trackEvent("user", "logout")
}
