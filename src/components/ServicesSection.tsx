import { Bot, Cpu, Database, Settings, Workflow, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI that understands context, learns from interactions, and provides 24/7 customer support with human-like responses.",
      features: ["Natural Language Processing", "Multi-platform Integration", "Continuous Learning", "Analytics & Insights"],
      color: "primary"
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "End-to-end workflow automation that eliminates repetitive tasks, reduces errors, and accelerates business processes across all departments.",
      features: ["Robotic Process Automation", "Workflow Optimization", "Integration APIs", "Performance Monitoring"],
      color: "accent"
    },
    {
      icon: Database,
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, pattern recognition, and data-driven decision making that transforms raw data into actionable insights.",
      features: ["Predictive Analytics", "Computer Vision", "Recommendation Systems", "Anomaly Detection"],
      color: "primary"
    },
    {
      icon: Cpu,
      title: "AI Strategy & Consulting",
      description: "Strategic guidance on AI adoption, technology selection, and implementation roadmaps tailored to your business objectives and constraints.",
      features: ["AI Readiness Assessment", "Technology Roadmap", "ROI Analysis", "Team Training"],
      color: "accent"
    },
    {
      icon: Settings,
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your unique business challenges, from concept to deployment and ongoing optimization.",
      features: ["Requirements Analysis", "Proof of Concept", "Full Development", "Deployment & Support"],
      color: "primary"
    },
    {
      icon: Lightbulb,
      title: "AI Innovation Labs",
      description: "Collaborative innovation sessions to explore cutting-edge AI possibilities, prototype new ideas, and validate concepts before full implementation.",
      features: ["Innovation Workshops", "Rapid Prototyping", "Concept Validation", "Technology Exploration"],
      color: "accent"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
            Services & Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforming Business with <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intelligent automation to advanced machine learning, I deliver comprehensive AI solutions 
            that drive measurable business outcomes and competitive advantages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover:glow-primary transition-all duration-300 group h-full">
              <CardHeader className="pb-4">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  service.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                      }`}></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <Button 
                  variant="ghost" 
                  className={`mt-auto ${
                    service.color === 'primary' 
                      ? 'hover:bg-primary/10 hover:text-primary' 
                      : 'hover:bg-accent/10 hover:text-accent'
                  } transition-colors duration-300`}
                >
                  Learn More →
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
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how AI can revolutionize your operations, enhance customer experiences, 
                and drive unprecedented growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="hero-button text-lg px-8 py-4">
                  <span>Schedule a Consultation</span>
                </Button>
                <Button 
                  variant="secondary" 
                  className="text-lg px-8 py-4 glass-card hover:glow-accent"
                >
                  View Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;