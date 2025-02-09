
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-primary">
            EcoTrack
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#features"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="/#about"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About Us
            </a>
            <a
              href="/#contact"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Button variant="ghost" onClick={() => window.location.href = "/login"}>Login</Button>
            <Button variant="default" onClick={() => window.location.href = "/register"}>Sign Up</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="/#features"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="/#about"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="/#contact"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Contact
              </a>
              <Button
                variant="default"
                className="w-full"
                onClick={() => navigate("/auth")}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
