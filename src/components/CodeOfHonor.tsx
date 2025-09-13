import { Shield, Heart, Target, Users, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CodeOfHonor = () => {
  const principles = [
    {
      icon: Shield,
      title: "Integrity First",
      description: "We maintain the highest ethical standards in all AI implementations, ensuring transparency, fairness, and accountability in every solution we deliver."
    },
    {
      icon: Heart,
      title: "Human-Centered AI",
      description: "Technology should enhance human capabilities, not replace them. We design AI solutions that empower people and improve quality of life."
    },
    {
      icon: Target,
      title: "Excellence in Delivery",
      description: "We are committed to delivering exceptional results that exceed expectations, with meticulous attention to detail and continuous improvement."
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "We believe in building long-term relationships based on trust, mutual respect, and shared success with our clients and community."
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "Every innovation should solve real problems and create meaningful value. We focus on practical AI solutions that drive tangible business outcomes."
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "The AI landscape evolves rapidly. We stay at the forefront of technology while sharing knowledge to elevate the entire industry."
    }
  ];

  return (
    <section id="code-of-honor" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-4">
            Our Values
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Code of Honor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide every decision, every line of code, and every client interaction. 
            These values form the foundation of Tilottams.AI's commitment to ethical AI development.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <Card key={index} className="glass-card hover:glow-primary transition-all duration-300 group h-full">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-primary/20 text-primary group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300 group-hover:scale-110">
                    <principle.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:gradient-text transition-all duration-300">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Honor Pledge */}
        <div className="mt-16">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Our Pledge</h3>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "We pledge to harness the power of artificial intelligence responsibly, 
                creating solutions that not only drive business success but also contribute 
                to a better future for humanity. Every project we undertake is a commitment 
                to excellence, ethics, and the advancement of human potential through intelligent technology."
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="font-semibold gradient-text">— Tilottams.AI Team</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeOfHonor;