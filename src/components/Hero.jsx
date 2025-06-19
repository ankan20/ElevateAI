"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-20 md:pt-30 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2 animate-gradient">
            Build Smarter. Learn Faster. <br /> Ace Every Interview.
          </h1>
          <p className="mx-auto max-w-[650px] text-muted-foreground md:text-xl">
            Discover the ultimate toolkit for job seekers—craft winning resumes,
            explore top tech trends, and sharpen your interview skills with real-time AI insights.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 cursor-pointer">
              Launch Career Toolkit
            </Button>
          </Link>
          <Link href="">
            <Button size="lg" variant="outline" className="px-8 cursor-pointer">
              Preview Features
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/cover_image.jpeg"
              width={960}
              height={540}
              alt="Platform Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
