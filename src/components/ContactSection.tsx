import { Mail, Phone, MapPin, Send, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@tilottam.ai",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Let's have a conversation"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Available globally"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-4">
            Let's Connect
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build the <span className="gradient-text">Future Together?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking to automate processes, implement AI solutions, or explore the possibilities 
            of machine learning, I'm here to help turn your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="glass-card hover:glow-primary transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300">
                          <method.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{method.title}</h3>
                        <p className="text-primary font-medium">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full hero-button justify-start" size="lg">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Schedule a Call
                  </span>
                </Button>
                <Button variant="secondary" className="w-full glass-card hover:glow-accent justify-start" size="lg">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Send a Message</CardTitle>
              <p className="text-muted-foreground">
                Tell me about your project and how I can help you achieve your AI goals.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input 
                    placeholder="Your full name" 
                    className="glass-card border-white/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="glass-card border-white/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Project Type</label>
                <Input 
                  placeholder="e.g., AI Chatbot, Process Automation, ML Model" 
                  className="glass-card border-white/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                  rows={5}
                  className="glass-card border-white/20 focus:border-primary resize-none"
                />
              </div>

              <Button className="w-full hero-button text-lg py-4">
                <span className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </span>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                I typically respond within 24 hours. For urgent inquiries, please call directly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;