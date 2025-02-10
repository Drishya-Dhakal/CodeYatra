"use client";

import Link from "next/link";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-semibold text-green-500">
                EcoTrack
              </span>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="http://localhost:5174"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div>
              <Button
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6"
              >
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </Button>
            </div>
          </div>
        </div>
      </header>
  );
}
