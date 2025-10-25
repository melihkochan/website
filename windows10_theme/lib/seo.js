/**
 * SEO utility functions for the Windows 10 UI Clone Portfolio
 */

// Generate canonical URL
export function getCanonicalUrl(path = "") {
  const baseUrl = "https://portfolio.thefstack.com"
  return `${baseUrl}${path}`
}

// Generate structured data for the portfolio
export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raj Sharma",
    url: "https://portfolio.thefstack.com",
    sameAs: ["https://github.com/thefstack", "https://linkedin.com/in/thefstack", "https://www.thefstack.com"],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "IVY Knowledge Service Pvt Ltd",
    },
    image: "https://portfolio.thefstack.com/images/profile.jpg",
    description: "Full Stack Developer specializing in React, Next.js, and Node.js",
    knowsAbout: ["JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Delhi",
      sameAs: "https://www.du.ac.in/",
    },
  }
}

// Generate Open Graph metadata
export function generateOpenGraphData({
  title = "Windows 10 UI Clone - Interactive Portfolio by thefstack",
  description = "An interactive portfolio website designed as a Windows 10 desktop clone. Explore projects, skills, and professional information through a familiar Windows 10 interface.",
  url = "https://portfolio.thefstack.com",
  image = "https://portfolio.thefstack.com/images/og-image.png",
}) {
  return {
    title,
    description,
    url,
    siteName: "thefstack Portfolio",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: "Windows 10 UI Clone Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  }
}

// Generate Twitter Card metadata
export function generateTwitterCardData({
  title = "Windows 10 UI Clone - Interactive Portfolio by thefstack",
  description = "An interactive portfolio website designed as a Windows 10 desktop clone. Explore projects, skills, and professional information through a familiar Windows 10 interface.",
  image = "https://portfolio.thefstack.com/images/og-image.png",
}) {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@thefstack",
  }
}
