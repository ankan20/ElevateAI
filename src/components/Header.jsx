"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BiCoffee } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
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
            onClick={() =>
              window.open("https://buymeacoffee.com/ankan_21", "_blank")
            }
            className="hidden md:flex bg-background text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer"
            size="icon"
          >
            <BiCoffee className="h-5 w-5" />
          </Button>

          {/* GitHub Button */}
          <Button
            variant="outline"
            onClick={() =>
              window.open("https://github.com/ankan20/ElevateAI", "_blank")
            }
            className="hidden md:flex bg-background text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer"
          >
            <FaGithub className="text-white text-xl mr-2" />
            <span className="hidden sm:block">View on GitHub</span>
          </Button>

          {/* Features and Auth section */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <SignedIn>
              <Link href="/dashboard">
                <div className="flex items-center gap-2">
                  {/* Desktop Button with Text */}
                  <Button
                    variant="outline"
                    className="hidden md:inline-flex items-center gap-2 cursor-pointer"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Industry Insights
                  </Button>

                  {/* Mobile Icon Button with Tooltip */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        className="md:hidden w-10 h-10 p-0 cursor-pointer"
                      >
                        <LayoutDashboard className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Industry Insights</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </Link>

              {/* Growth Tools Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2 cursor-pointer">
                    <StarsIcon className="h-4 w-4" />
                    <span className="hidden md:block">Growth Tools</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link
                      href="/resume"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <FileText className="h-4 w-4" />
                      Build Resume
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/ai-cover-letter"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <PenBox className="h-4 w-4" />
                      Cover Letter
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/interview"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <GraduationCap className="h-4 w-4" />
                      Interview Prep
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <Button variant="outline" className="cursor-pointer">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                    userButtonPopoverCard: "shadow-xl",
                    userPreviewMainIdentifier: "font-semibold",
                  },
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
