import { MapPin, Calendar, Award, BookOpen, Coffee, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import profileImage from "@/assets/profile-tilottam.jpg";

const MeetTilottam = () => {
  const highlights = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Leading AI transformation projects across multiple industries"
    },
    {
      icon: Code2,
      title: "50+ AI Solutions Delivered",
      description: "From chatbots to complex ML systems, delivered with excellence"
    },
    {
      icon: BookOpen,
      title: "Continuous Learner",
      description: "Always exploring cutting-edge AI technologies and methodologies"
    },
    {
      icon: Coffee,
      title: "Passionate Problem Solver",
      description: "Turning complex business challenges into elegant AI solutions"
    }
  ];

  const expertise = [
    "Machine Learning & Deep Learning",
    "Natural Language Processing",
    "Computer Vision & Image Recognition", 
    "Conversational AI & Chatbots",
    "Robotic Process Automation",
    "MLOps & AI Infrastructure",
    "Business Strategy & AI Consulting",
    "Custom AI Application Development"
  ];

  return (
    <section id="meet-tilottam" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
            Leadership
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet <span className="gradient-text">Tilottam Wagh</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI Automation Architect & Visionary Leader driving the future of intelligent business solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                <img 
                  src={profileImage} 
                  alt="Tilottam Wagh - AI Expert" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Transforming Businesses with <span className="gradient-text">AI Innovation</span>
              </h3>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-5 w-5 mr-2 text-accent" />
                <span>Mumbai, India</span>
                <Calendar className="h-5 w-5 ml-6 mr-2 text-accent" />
                <span>Available for Global Projects</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over a decade of experience in artificial intelligence and automation, 
                I specialize in architecting intelligent solutions that transform how businesses operate. 
                My passion lies in bridging the gap between cutting-edge AI technology and practical 
                business applications that deliver measurable results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From Fortune 500 companies to innovative startups, I've helped organizations across 
                various industries implement AI strategies that not only automate processes but also 
                unlock new opportunities for growth and innovation.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="glass-card p-4 hover:glow-accent transition-all duration-300">
                  <highlight.icon className="h-6 w-6 text-accent mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{highlight.title}</h4>
                  <p className="text-xs text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>

            <Button 
              className="hero-button"
              onClick={() => window.open('https://calendly.com/app/scheduling/meeting_types/user/me', '_blank')}
            >
              <span>Schedule a Meeting</span>
            </Button>
          </div>
        </div>

        {/* Expertise Section */}
        <Card className="glass-card">
          <CardContent className="p-8 lg:p-12">
            <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">Core Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {expertise.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-3 rounded-lg bg-secondary/30 hover:bg-accent/10 transition-colors duration-300 group"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Philosophy */}
        <div className="mt-16 text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">My Philosophy</h3>
              <blockquote className="text-xl text-muted-foreground leading-relaxed italic">
                "The future belongs to those who understand that AI is not just about technology—it's about 
                augmenting human intelligence, creativity, and potential. Every AI solution should make 
                people more capable, businesses more efficient, and the world a little bit better."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MeetTilottam;