import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  const ctaButtons = [
    {
      text: "Start with ₹0",
      subtext: "Free Consultation",
      gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
      hoverGradient: "hover:from-yellow-300 hover:to-orange-400"
    },
    {
      text: "Quick Start - ₹25,000", 
      subtext: "AI Kickstarter",
      gradient: "bg-gradient-to-r from-green-400 to-teal-500",
      hoverGradient: "hover:from-green-300 hover:to-teal-400"
    },
    {
      text: "Join Accelerator",
      subtext: "₹75,000 Program", 
      gradient: "bg-gradient-to-r from-blue-500 to-purple-600",
      hoverGradient: "hover:from-blue-400 hover:to-purple-500"
    },
    {
      text: "Go Elite",
      subtext: "Custom Enterprise",
      gradient: "bg-gradient-to-r from-purple-600 to-pink-600",
      hoverGradient: "hover:from-purple-500 hover:to-pink-500"
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Start Building. Start Shipping. Start Earning.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your entry point and transform your relationship with AI today.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {ctaButtons.map((button, index) => (
            <Button
              key={index}
              className={`
                h-auto p-6 text-white font-semibold rounded-2xl
                ${button.gradient} ${button.hoverGradient}
                transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
                flex flex-col items-center justify-center text-center
                border-0 relative overflow-hidden group
              `}
            >
              <div className="relative z-10">
                <div className="text-lg font-bold mb-2">{button.text}</div>
                <div className="text-sm opacity-90 mb-3">{button.subtext}</div>
                <ArrowRight className="w-5 h-5 mx-auto group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            🚀 Join 500+ professionals who have already transformed their careers with AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;