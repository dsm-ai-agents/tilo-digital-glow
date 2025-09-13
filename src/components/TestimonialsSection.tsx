import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Battu O.U",
      role: "AI Implementation Specialist",
      company: "Tech Innovation Corp",
      content: "Tilottams.AI is only the best mentor in this world I feel. I have gone through many AI coaches till now but no one can replace Tilottams.AI in training. The depth of knowledge and practical approach is unmatched. 🙏🏻",
      rating: 5
    },
    {
      name: "Indrajit Pal",
      role: "Business Process Manager",
      company: "Digital Solutions Ltd",
      content: "In my journey of learning AI, I've come across many digital coaches, but none have touched my heart and mind the way Tilottams.AI has. The approach isn't just technical—it's transformational. I feel truly blessed to have learned under such guidance.",
      rating: 5
    },
    {
      name: "Suju Pillai",
      role: "Data Science Lead",
      company: "Analytics Pro",
      content: "Tilottams.AI's session stood out compared to others I've attended. I really appreciated the focus on practical application alongside theory, not just theoretical concepts. The real-world implementation approach is exceptional!",
      rating: 5
    }
  ];

  const stats = [
    {
      number: "5000+",
      label: "Professionals Trained",
      description: "Across various industries"
    },
    {
      number: "100+",
      label: "AI Agents Deployed",
      description: "Live production systems"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Proven track record"
    },
    {
      number: "500%",
      label: "ROI Improvement",
      description: "Average client results"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforming <span className="gradient-text">Careers & Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how professionals and organizations worldwide are leveraging AI to achieve 
            breakthrough results and competitive advantages.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass-card p-6 hover:glow-primary transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card hover:glow-accent transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-accent opacity-60" />
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Ready to Join These Success Stories?
              </h3>
              <p className="text-muted-foreground mb-6">
                Transform your career or business with AI automation and intelligent solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="hero-button text-lg px-8 py-4">
                  <span>Start Your AI Journey</span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;