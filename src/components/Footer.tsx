import { Brain, Sparkles, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-gradient-to-t from-background to-background/80">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Brain className="h-8 w-8 text-primary animate-pulse" />
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-accent animate-pulse" />
              </div>
              <span className="text-xl font-bold gradient-text">Tilottams.AI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming businesses through intelligent automation and cutting-edge AI solutions. 
              Building the future, one algorithm at a time.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="rounded-full hover:glow-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:glow-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:glow-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:glow-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">AI Chatbots</div>
              <div className="text-muted-foreground">Process Automation</div>
              <div className="text-muted-foreground">Machine Learning</div>
              <div className="text-muted-foreground">AI Consulting</div>
              <div className="text-muted-foreground">Custom Development</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Tilottams.AI. All rights reserved. Built with passion for AI innovation.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;