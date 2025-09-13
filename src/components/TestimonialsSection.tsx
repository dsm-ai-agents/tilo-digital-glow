import { Quote, Star, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      program: "AI Transformation Program",
      rating: 5,
      text: "Tilottams is the best AI mentor I've encountered. I've worked with many digital consultants, but no one can replace Tilottams in training and implementation. His approach to AI automation has transformed our entire marketing workflow. May his knowledge continue to empower more professionals like us! 🙏",
      avatar: "RK"
    },
    {
      name: "Priya Sharma", 
      role: "Operations Manager",
      company: "StartupHub India",
      program: "AI Agent Kickstarter",
      rating: 5,
      text: "In my journey of digital transformation, I've worked with many consultants, but none have impacted our business the way Tilottams has. He isn't just a consultant—he's a true AI strategist who genuinely wants to see businesses grow. His teaching methodology makes complex AI concepts feel accessible and actionable. Grateful for the transformation!",
      avatar: "PS"
    },
    {
      name: "Amit Patel",
      role: "Founder & CEO", 
      company: "InnovateLabs",
      program: "Enterprise AI Builder",
      rating: 5,
      text: "Tilottams' AI implementation session was exceptional compared to others I've attended. I really appreciated his focus on practical, revenue-generating applications alongside the technical theory. The ROI we've achieved through his AI solutions has been remarkable. Thank you, Tilottams!",
      avatar: "AP"
    },
    {
      name: "Sneha Reddy",
      role: "Product Manager",
      company: "CloudTech Dynamics", 
      program: "AI Transformation Program",
      rating: 5,
      text: "Working with Tilottams has been a game-changer for our product development process. His custom AI agents have reduced our time-to-market by 60% while improving quality. The level of support and mentorship provided throughout the program was outstanding.",
      avatar: "SR"
    },
    {
      name: "Vikram Singh",
      role: "Sales Director",
      company: "Enterprise Solutions Co",
      program: "AI Agent Kickstarter", 
      rating: 5,
      text: "The AI automation tools developed by Tilottams have revolutionized our sales processes. What used to take hours now takes minutes. Our team productivity has increased by 200%, and client satisfaction scores have never been higher.",
      avatar: "VS"
    },
    {
      name: "Anita Joshi",
      role: "HR Head",
      company: "Global Tech Services",
      program: "Enterprise AI Builder",
      rating: 5,
      text: "Tilottams' expertise in AI for HR processes is unmatched. The recruitment automation and employee engagement tools he created have transformed how we operate. Highly recommend his services to any organization looking to leverage AI effectively.",
      avatar: "AJ"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-4">
            Client Success Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            💬 <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our community is transforming their careers and businesses with AI automation
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card hover:glow-primary transition-all duration-300 group h-full">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-accent" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-accent">{testimonial.company}</p>
                  </div>
                </div>

                {/* Program Badge */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                    {testimonial.program}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
                  <div className="text-muted-foreground">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;