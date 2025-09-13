import { CheckCircle, Users, Zap, Crown, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TrainingSection = () => {
  const programs = [
    {
      level: "Level 0",
      title: "AI Foundations Masterclass",
      price: "₹2,999",
      originalPrice: "₹9,999",
      badge: "Most Popular",
      badgeColor: "primary",
      description: "Master AI fundamentals and build your first intelligent automation in 90 minutes.",
      features: [
        "Live expert-guided session",
        "No technical skills required",
        "3 ready-to-use AI templates",
        "Community Q&A access",
        "Certificate of completion"
      ],
      icon: Users,
      color: "primary"
    },
    {
      level: "Level 1",
      title: "AI Agent Accelerator",
      price: "₹14,999",
      originalPrice: "₹29,999",
      badge: "Quick Start",
      badgeColor: "accent",
      description: "Deploy 5 AI agents and automate your workflows within 7 days.",
      features: [
        "5 production-ready AI agents",
        "Step-by-step implementation videos",
        "Premium automation templates",
        "1-week dedicated support",
        "ROI tracking dashboard"
      ],
      icon: Zap,
      color: "accent"
    },
    {
      level: "Level 2",
      title: "AI Business Transformation",
      price: "₹49,999",
      originalPrice: "₹99,999",
      badge: "Best Value",
      badgeColor: "primary",
      description: "Complete AI transformation program with personalized mentorship and business integration.",
      features: [
        "Weekly live mentorship calls",
        "Custom AI solution development",
        "Private community access",
        "Business strategy consultation",
        "Ongoing technical support"
      ],
      icon: Crown,
      color: "primary"
    }
  ];

  const targetAudience = [
    {
      title: "Business Professionals",
      description: "Looking to enhance productivity with AI automation and stay ahead in their careers",
      icon: "💼"
    },
    {
      title: "Founders & Entrepreneurs",
      description: "Wanting to scale operations, reduce costs, and create competitive advantages",
      icon: "🚀"
    },
    {
      title: "Team Leaders",
      description: "In Marketing, Sales, HR seeking to optimize workflows and drive measurable results",
      icon: "👥"
    },
    {
      title: "Builders & Innovators",
      description: "Ready to create AI-powered products and generate new revenue streams",
      icon: "⚡"
    }
  ];

  return (
    <section id="training" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-4">
            AI Training Programs
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Master AI at <span className="gradient-text">Your Own Pace</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're just starting or ready to build advanced AI solutions, 
            we have the perfect learning path for your AI transformation journey.
          </p>
        </div>

        {/* Who Is This For */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">Who Is This For?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="glass-card hover:glow-primary transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{audience.icon}</div>
                  <h4 className="font-semibold text-lg mb-3">{audience.title}</h4>
                  <p className="text-sm text-muted-foreground">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="glass-card hover:glow-primary transition-all duration-300 relative">
              {program.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge 
                    className={`${
                      program.badgeColor === 'primary' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-accent text-accent-foreground'
                    } px-4 py-1`}
                  >
                    {program.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  <div className={`inline-flex p-4 rounded-xl mb-4 ${
                    program.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
                  }`}>
                    <program.icon className="h-8 w-8" />
                  </div>
                </div>
                
                <div className="text-sm font-medium text-muted-foreground mb-2">{program.level}</div>
                <CardTitle className="text-xl mb-4">{program.title}</CardTitle>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold gradient-text">{program.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{program.originalPrice}</span>
                  </div>
                  <div className="text-sm text-green-400">
                    Save {Math.round((1 - parseInt(program.price.replace(/[₹,]/g, '')) / parseInt(program.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                  </div>
                </div>
                
                <p className="text-muted-foreground">{program.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`h-4 w-4 ${
                        program.color === 'primary' ? 'text-primary' : 'text-accent'
                      } flex-shrink-0`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${
                    program.color === 'primary' ? 'hero-button' : 'bg-accent hover:bg-accent/90 text-accent-foreground'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 gradient-text">
                Start Building. Start Automating. Start Earning.
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Choose your entry point and transform your relationship with AI today. 
                Join thousands of professionals who've already automated their success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="hero-button text-lg px-8 py-4">
                  <span>Begin Your Journey - ₹2,999</span>
                </Button>
                <Button 
                  variant="secondary" 
                  className="text-lg px-8 py-4 glass-card hover:glow-accent"
                >
                  Schedule Consultation
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Questions? Email us at hello@tilottams.ai
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;