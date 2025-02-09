
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import ImpactDashboard from "@/components/ImpactDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <ImpactDashboard />
      <About />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
