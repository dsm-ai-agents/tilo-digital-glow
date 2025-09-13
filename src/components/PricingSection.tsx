import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingSection = () => {
  const pricingTiers = [
    {
      level: "Level 0",
      badge: "Most Popular",
      badgeColor: "bg-accent text-accent-foreground",
      icon: Star,
      title: "Free AI Agent Masterclass",
      price: "₹99",
      originalPrice: null,
      description: "Still watching YouTube tutorials? In 90 mins, build your first AI Agent — no fluff, no jargon.",
      features: [
        "Live session with expert guidance",
        "No technical skills required", 
        "3 free agent templates included",
        "Q&A session with community"
      ],
      buttonText: "Reserve Spot",
      buttonVariant: "default" as const,
      color: "accent",
      link: "https://learn.datasciencemasterminds.com/web/checkout/6819d10a6678a78a07d37647"
    },
    {
      level: "Level 1", 
      badge: "Quick Start",
      badgeColor: "bg-primary/20 text-primary",
      icon: Zap,
      title: "AI Agent Kickstarter",
      price: "₹399",
      originalPrice: null,
      description: "If you're not automating at least 1 task with AI — you're already behind.",
      features: [
        "5 ready-made AI agents",
        "Step-by-step video guide", 
        "Premium prompt pack",
        "1-week email support"
      ],
      buttonText: "Buy & Build Now",
      buttonVariant: "secondary" as const,
      color: "primary",
      link: "https://learn.datasciencemasterminds.com/web/checkout/6819d10a6678a78a07d37647"
    },
    {
      level: "Level 2",
      badge: "Best Value", 
      badgeColor: "bg-green-500/20 text-green-400",
      icon: Rocket,
      title: "AI Agent Accelerator",
      price: "₹15,000",
      originalPrice: null,
      description: "Become the person who replaces repetitive work with automations in 21 days.",
      features: [
        "Weekly live mentorship sessions",
        "Private community access",
        "Peer support and networking",
        "Certificate of completion"
      ],
      buttonText: "Join Accelerator",
      buttonVariant: "default" as const,
      color: "accent",
      link: "https://learn.datasciencemasterminds.com/web/checkout/6819d10a6678a78a07d37647"
    },
    {
      level: "Level 3",
      badge: "Elite",
      badgeColor: "bg-gradient-primary text-white",
      icon: Crown,
      title: "AI Agent Product Builder Cohort",
      price: "Premium",
      originalPrice: null,
      description: "No VC? No problem. Ship monetizable AI-powered tools and start earning.",
      features: [
        "Master N8N, LangChain, Cursor, Supabase",
        "Deploy with integrated payments",
        "Ship 3 real monetizable tools",
        "1-on-1 founder mentorship"
      ],
      buttonText: "Apply for Builder",
      buttonVariant: "secondary" as const,
      color: "primary",
      link: "https://learn.datasciencemasterminds.com/web/checkout/6819d10a6678a78a07d37647"
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-4">
            Investment Plans
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🚀 <span className="gradient-text">Choose Your Stage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're just starting or ready to build enterprise solutions, we have the perfect path for your AI journey
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="glass-card hover:glow-primary transition-all duration-300 group relative h-full flex flex-col">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className={`${tier.badgeColor} px-3 py-1 text-xs font-semibold`}>
                  {tier.badge}
                </Badge>
              </div>

              <CardHeader className="text-center pb-4 pt-8">
                <div className="mb-4">
                  <span className="text-sm font-medium text-muted-foreground">{tier.level}</span>
                </div>
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  tier.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <tier.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:gradient-text transition-all duration-300 mb-2">
                  {tier.title}
                </CardTitle>
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold gradient-text">{tier.price}</span>
                    {tier.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">{tier.originalPrice}</span>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 text-center text-sm leading-relaxed">
                  {tier.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm">
                      <Check className={`w-4 h-4 mr-3 mt-0.5 flex-shrink-0 ${
                        tier.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a 
                  href={tier.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button 
                    variant={tier.buttonVariant}
                    className={`w-full ${tier.buttonVariant === 'default' ? 'hero-button' : 'glass-card hover:glow-accent'}`}
                  >
                    <span>{tier.buttonText}</span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 gradient-text">
                Start Building. Start Shipping. Start Earning.
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Choose your entry point and transform your relationship with AI today. 
                Every package includes lifetime access to updates and our exclusive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://learn.datasciencemasterminds.com/web/checkout/6819d10a6678a78a07d37647"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="hero-button text-lg px-8 py-4">
                    <span>Start with Free Consultation</span>
                  </Button>
                </a>
                <a 
                  href="https://learn.datasciencemasterminds.com/web/checkout/6819d10a6678a78a07d37647"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="secondary" 
                    className="text-lg px-8 py-4 glass-card hover:glow-accent"
                  >
                    View Success Stories
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;