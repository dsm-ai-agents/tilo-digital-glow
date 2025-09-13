import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/ai-hero-banner.jpg';
import profileImage from '@/assets/profile-tilottam.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="AI Automation Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
                🤖 AI Automation Architect
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Building the <span className="gradient-text">Future</span> of 
                <br />AI Automation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                I transform businesses through intelligent automation, machine learning solutions, 
                and cutting-edge AI implementations that drive real results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('services')}
                className="hero-button text-lg px-8 py-6"
              >
                <span className="flex items-center gap-2">
                  Explore My Work <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
              <Button 
                variant="secondary"
                className="text-lg px-8 py-6 glass-card hover:glow-primary"
              >
                <span className="flex items-center gap-2">
                  <Download className="h-5 w-5" /> Download Resume
                </span>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <Button size="icon" variant="ghost" className="rounded-full hover:glow-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:glow-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:glow-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden glass-card glow-primary">
                <img 
                  src={profileImage} 
                  alt="Tilottam - AI Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;