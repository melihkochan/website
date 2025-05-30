"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function SocialLinks() {
  return (
    <div className="w-full flex justify-center mt-8 mb-4">
      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/in/melihkochan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white text-2xl transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/melihkochan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white text-2xl transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:melihkochan@gmail.com"
          className="text-gray-300 hover:text-white text-2xl transition"
          aria-label="E-mail"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
} 