
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with dynamic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 animate-gradient" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent animate-fade-in">
            <span className="text-sm font-medium">Join the eco-revolution</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 animate-fade-in">
            Smart Waste Management for a{" "}
            <span className="text-primary">Cleaner Future</span>
          </h1>
          
          <p className="text-xl text-gray-600 animate-fade-in-slow max-w-2xl mx-auto">
            Track your impact, earn rewards, and join a community of eco-warriors making
            a difference. Start your sustainable journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90"
              onClick={() => navigate("/auth")}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToFeatures}
              className="group"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "50T", label: "Waste Recycled" },
              { number: "30K", label: "Trees Saved" },
              { number: "100+", label: "Communities" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;
