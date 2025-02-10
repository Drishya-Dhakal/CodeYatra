"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Leaf, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.1",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
                Smart Waste Management
                <span className="text-green-600"> for a Greener Future</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
                Join us in creating a sustainable tomorrow through intelligent
                waste management solutions. Together, we can make a difference.
              </p>
              <div className="mt-10">
                <Link href="/auth">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Features */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Recycling</h3>
                <p className="text-center text-muted-foreground">
                  Intelligent sorting and recycling solutions for maximum
                  efficiency
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-center text-muted-foreground">
                  Sustainable practices that minimize environmental impact
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Real-Time Analytics
                </h3>
                <p className="text-center text-muted-foreground">
                  Track and optimize your waste management metrics
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
