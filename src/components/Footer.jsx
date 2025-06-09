// src/components/Footer.tsx

"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-10 text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-foreground">{siteConfig.name}</h2>
          <p className="text-sm">AI-powered Career Assistant</p>
        </div>

        {/* Center - Social Icons */}
        <div className="flex space-x-6 text-xl">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-foreground transition-colors duration-200" />
          </Link>
          <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-foreground transition-colors duration-200" />
          </Link>
          <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-foreground transition-colors duration-200" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="text-xs text-center md:text-right">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
