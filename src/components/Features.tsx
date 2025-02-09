
import { Recycle, Award, Bot, Users, Gamepad, ChartLine, Star, Gift } from "lucide-react";

const features = [
  {
    icon: Gamepad,
    title: "Gamified Experience",
    description:
      "Turn waste management into an engaging journey with points, badges, and challenges",
  },
  {
    icon: Bot,
    title: "AI-Powered Insights",
    description:
      "Get personalized recommendations for better waste sorting and recycling habits",
  },
  {
    icon: ChartLine,
    title: "Live Impact Dashboard",
    description:
      "Track your environmental impact in real-time with interactive visualizations",
  },
  {
    icon: Users,
    title: "Community Challenges",
    description:
      "Join local eco-warriors in community recycling challenges and events",
  },
  {
    icon: Gift,
    title: "Eco Rewards Marketplace",
    description:
      "Redeem your recycling points for sustainable products and services",
  },
  {
    icon: Star,
    title: "Achievement System",
    description:
      "Unlock badges and rewards as you reach new recycling milestones",
  },
  {
    icon: Recycle,
    title: "Smart Waste Tracking",
    description:
      "Real-time monitoring of your waste collection and recycling progress",
  },
  {
    icon: Award,
    title: "Impact Leaderboards",
    description:
      "Compare your sustainability efforts with others in your community",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-secondary/50 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Features for Sustainable Living
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our innovative features can help you make a positive
            environmental impact while earning rewards and connecting with your
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
