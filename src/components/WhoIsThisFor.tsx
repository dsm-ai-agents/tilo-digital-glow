import { Briefcase, Rocket, Users2, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WhoIsThisFor = () => {
  const audiences = [
    {
      icon: Briefcase,
      title: "Professionals",
      description: "Looking to enhance productivity with AI automation and stay ahead in their careers",
      color: "primary"
    },
    {
      icon: Rocket,
      title: "Founders & CEOs",
      description: "Wanting to scale operations, reduce costs, and create competitive advantages through AI",
      color: "accent"
    },
    {
      icon: Users2,
      title: "Team Leaders",
      description: "In Marketing, Sales, HR seeking to optimize workflows and drive measurable results",
      color: "primary"
    },
    {
      icon: Wrench,
      title: "Builders & Solopreneurs",
      description: "Ready to create AI-powered products and generate new revenue streams",
      color: "accent"
    }
  ];

  return (
    <section id="who-is-this-for" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
            Target Audience
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Who Is This For?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perfect for anyone ready to harness AI to transform their work and income
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="glass-card hover:glow-primary transition-all duration-300 group h-full">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex p-4 rounded-xl mb-4 mx-auto ${
                  audience.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <audience.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:gradient-text transition-all duration-300">
                  {audience.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Ready to Transform Your Career?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of professionals who have already transformed their work with AI automation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;