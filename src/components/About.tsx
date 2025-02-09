
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "10,000+", label: "Kg Recycled" },
  { value: "5,000+", label: "Active Users" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "50+", label: "Communities" },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We're on a mission to revolutionize waste management through smart
            technology and community engagement. Our platform empowers individuals
            and communities to make a positive impact on the environment through
            efficient waste tracking and recycling initiatives.
          </p>
          <Button
            variant="default"
            size="lg"
            className="group"
          >
            Join Our Mission
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-secondary rounded-2xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
