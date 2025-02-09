
import { ClipboardList, Truck, Award, BarChart } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Register",
    description: "Create your account and set up your profile",
  },
  {
    icon: Truck,
    title: "Pick Up Request",
    description: "Schedule waste collection at your convenience",
  },
  {
    icon: Award,
    title: "Earn Rewards",
    description: "Get points for your recycling efforts",
  },
  {
    icon: BarChart,
    title: "Track Impact",
    description: "Monitor your environmental contribution",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started with our simple four-step process and begin your journey
            towards sustainable waste management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
              )}

              {/* Step content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
