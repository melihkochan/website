"use client";
import { SplineScene } from "./ui/splite";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export function SplineSceneBasic() {
  // Spotlight için mouse pozisyonu
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(600);
  const mouseY = useMotionValue(300);

  // Yumuşak animasyon için spring
  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = spotlightRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div
      className="flex flex-col w-full h-screen min-h-screen relative bg-black overflow-x-hidden"
      ref={spotlightRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mouse'u takip eden spotlight */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: springX,
            top: springY,
            width: 350,
            height: 350,
            x: -175,
            y: -175,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0) 70%)",
            zIndex: 20,
            mixBlendMode: "screen",
          }}
        />
      )}
      <div className="flex-1 flex flex-col md:flex-row w-full z-10 max-w-full overflow-x-hidden">
        {/* Sol içerik */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-24 py-8 sm:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Hi I&apos;m Melih Kochan
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-xl">
            This is a simple welcome page for now. Feel free to explore the links and discover more!
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-6">
            <a href="https://www.linkedin.com/in/melih-kochan-7961371a2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-white hover:text-blue-400 transition" size={32} />
            </a>
            <a href="https://github.com/melihkochan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-white hover:text-gray-400 transition" size={32} />
            </a>
            <a href="https://twitter.com/melihkochan1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-blue-300 transition" size={32} />
            </a>
            <a href="https://instagram.com/melih_kochan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-white hover:text-pink-400 transition" size={32} />
            </a>
          </div>
        </div>
        {/* Sağ 3D model */}
        <div className="flex-1 relative min-h-[200px] sm:min-h-[300px] bg-black flex items-center justify-center z-10">
          <div className="w-full h-full relative max-w-full overflow-x-hidden">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 