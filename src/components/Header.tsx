import { useState } from 'react';
import { Menu, X, Brain, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Brain className="h-8 w-8 text-primary animate-pulse" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-accent animate-pulse" />
            </div>
            <span className="text-xl font-bold gradient-text">Tilottams.AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('meet-tilottam')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Meet Tilottam
            </button>
            <button
              onClick={() => scrollToSection('who-is-this-for')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Who Is This For
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('training')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Training
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hero-button"
            >
              <span>Let's Connect</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('meet-tilottam')}
                className="text-left text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Meet Tilottam
              </button>
              <button
                onClick={() => scrollToSection('who-is-this-for')}
                className="text-left text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Who Is This For
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('code-of-honor')}
                className="text-left text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Code of Honor
              </button>
              <button
                onClick={() => scrollToSection('training')}
                className="text-left text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Training
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Success Stories
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="hero-button self-start"
              >
                <span>Let's Connect</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;