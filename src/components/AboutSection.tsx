import { Brain, Code, Zap, Target, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced ML models and deep learning implementations",
      level: 95
    },
    {
      icon: Code,
      title: "AI Development",
      description: "Custom AI solutions and intelligent automation",
      level: 92
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamlining workflows with intelligent bots",
      level: 88
    },
    {
      icon: Target,
      title: "Strategy & Consulting",
      description: "AI transformation roadmaps and implementation",
      level: 90
    }
  ];

  const achievements = [
    {
      icon: Award,
      number: "50+",
      label: "AI Projects Delivered"
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Efficiency Gain"
    },
    {
      icon: Brain,
      number: "15+",
      label: "AI Technologies Mastered"
    },
    {
      icon: Target,
      number: "98%",
      label: "Client Satisfaction Rate"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-4">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Architecting <span className="gradient-text">Intelligent Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over a decade of experience in AI and automation, I specialize in transforming 
            complex business challenges into elegant, intelligent solutions that scale.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="glass-card hover:glow-primary transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <skill.icon className="h-12 w-12 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>
                
                {/* Skill Level Bar */}
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground mt-1 block">{skill.level}% Expertise</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center glass-card p-6 hover:glow-accent transition-all duration-300">
              <achievement.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text mb-2">{achievement.number}</div>
              <div className="text-sm text-muted-foreground">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Personal Story */}
        <Card className="glass-card">
          <CardContent className="p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">My Journey in AI</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My passion for artificial intelligence began during my early days as a software engineer, 
                where I witnessed firsthand how intelligent automation could transform entire workflows. 
                Today, I combine deep technical expertise with strategic business insight to help 
                organizations unlock the full potential of AI - from machine learning models that 
                predict customer behavior to autonomous systems that optimize operations in real-time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;