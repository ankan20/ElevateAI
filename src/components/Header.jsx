"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BiCoffee } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

const Header = () => {
  return (
    <div className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="flex h-full items-center px-4 container mx-auto">
        {/* Left Section */}
        <div className="font-bold text-2xl flex-1 flex items-center gap-2">
          <Link href="/" className="flex-1 flex items-center gap-2">
          <GiArtificialIntelligence className="text-yellow-400 text-2xl drop-shadow" />
            <span className="inline bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg">
              ElevateAI
            </span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Coffee Button */}
          <Button
            variant="outline"
            onClick={() => window.open("https://buymeacoffee.com/ankan_21", "_blank")}
            className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer"
            size="icon"
          >
            <BiCoffee className="h-5 w-5" />
          </Button>

          {/* GitHub Button */}
          <Button
            variant="outline"
            onClick={() => window.open("https://github.com/ankan20/ElevateAI", "_blank")}
            className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer"
          >
            <FaGithub className="text-white text-xl mr-2" />
            <span className="hidden sm:block">View on GitHub</span>
          </Button>

          {/* User Auth */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
