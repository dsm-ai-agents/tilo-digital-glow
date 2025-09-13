import React, { useState, useEffect, useRef } from 'react';
import { Bot, Cpu, Zap, CircuitBoard, BrainCircuit, Sparkles } from 'lucide-react';

interface Agent {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  icon: React.ComponentType<any>;
  color: string;
  size: number;
  speed: number;
  opacity: number;
  trail: { x: number; y: number; opacity: number }[];
}

interface Particle {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

const AIAgentEffects = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [agents, setAgents] = useState<Agent[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  
  const agentIcons = [Bot, Cpu, Zap, CircuitBoard, BrainCircuit, Sparkles];
  const agentColors = ['primary', 'accent', 'secondary'];

  // Initialize agents
  useEffect(() => {
    const initialAgents: Agent[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      icon: agentIcons[i % agentIcons.length],
      color: agentColors[i % agentColors.length],
      size: 20 + Math.random() * 15,
      speed: 0.02 + Math.random() * 0.03,
      opacity: 0,
      trail: []
    }));
    
    setAgents(initialAgents);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsActive(true);
      
      // Create particles at mouse position
      if (Math.random() < 0.3) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          velocityX: (Math.random() - 0.5) * 2,
          velocityY: (Math.random() - 0.5) * 2,
          life: 60,
          maxLife: 60,
          size: 2 + Math.random() * 3,
          color: Math.random() < 0.5 ? 'hsl(200 100% 60%)' : 'hsl(280 100% 65%)'
        };
        
        setParticles(prev => [...prev.slice(-20), newParticle]);
      }
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setAgents(prevAgents => 
        prevAgents.map(agent => {
          // Calculate distance to mouse
          const dx = mousePos.x - agent.x;
          const dy = mousePos.y - agent.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Determine target based on mouse proximity
          let targetX = agent.targetX;
          let targetY = agent.targetY;
          let targetOpacity = isActive ? 0.7 : 0.3;
          
          if (isActive && distance < 200) {
            // Move towards mouse when close
            targetX = mousePos.x + (Math.random() - 0.5) * 100;
            targetY = mousePos.y + (Math.random() - 0.5) * 100;
            targetOpacity = 0.9;
          } else if (isActive && distance < 400) {
            // Orbit around mouse when in medium range
            const angle = Math.atan2(dy, dx) + Date.now() * 0.001;
            targetX = mousePos.x + Math.cos(angle) * 150;
            targetY = mousePos.y + Math.sin(angle) * 150;
            targetOpacity = 0.8;
          } else {
            // Random movement when far
            if (Math.random() < 0.01) {
              targetX = Math.random() * window.innerWidth;
              targetY = Math.random() * window.innerHeight;
            }
          }
          
          // Smooth movement
          const newX = agent.x + (targetX - agent.x) * agent.speed;
          const newY = agent.y + (targetY - agent.y) * agent.speed;
          const newOpacity = agent.opacity + (targetOpacity - agent.opacity) * 0.1;
          
          // Update trail
          const newTrail = [
            { x: agent.x, y: agent.y, opacity: agent.opacity },
            ...agent.trail.slice(0, 8)
          ].map((point, index) => ({
            ...point,
            opacity: point.opacity * (1 - index * 0.15)
          }));
          
          return {
            ...agent,
            x: newX,
            y: newY,
            targetX,
            targetY,
            opacity: newOpacity,
            trail: newTrail
          };
        })
      );
      
      // Update particles
      setParticles(prevParticles =>
        prevParticles
          .map(particle => ({
            ...particle,
            x: particle.x + particle.velocityX,
            y: particle.y + particle.velocityY,
            life: particle.life - 1,
            velocityY: particle.velocityY + 0.05 // Gravity
          }))
          .filter(particle => particle.life > 0)
      );
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos, isActive]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      style={{ mixBlendMode: 'screen' }}
    >
      {/* AI Agents */}
      {agents.map((agent) => {
        const Icon = agent.icon;
        return (
          <div key={agent.id}>
            {/* Agent trail */}
            {agent.trail.map((point, index) => (
              <div
                key={`trail-${agent.id}-${index}`}
                className="absolute"
                style={{
                  left: point.x - agent.size / 4,
                  top: point.y - agent.size / 4,
                  width: agent.size / 2,
                  height: agent.size / 2,
                  opacity: point.opacity * 0.3,
                  background: agent.color === 'primary' 
                    ? 'hsl(200 100% 60%)' 
                    : agent.color === 'accent' 
                    ? 'hsl(280 100% 65%)'
                    : 'hsl(220 15% 65%)',
                  borderRadius: '50%',
                  filter: 'blur(2px)',
                  transition: 'opacity 0.3s ease'
                }}
              />
            ))}
            
            {/* Main agent */}
            <div
              className="absolute transition-all duration-300 ease-out"
              style={{
                left: agent.x - agent.size / 2,
                top: agent.y - agent.size / 2,
                opacity: agent.opacity,
                transform: `scale(${0.8 + agent.opacity * 0.4}) rotate(${Date.now() * 0.001}rad)`,
                filter: `drop-shadow(0 0 ${agent.size}px ${
                  agent.color === 'primary' 
                    ? 'hsl(200 100% 60% / 0.8)' 
                    : agent.color === 'accent' 
                    ? 'hsl(280 100% 65% / 0.8)'
                    : 'hsl(220 15% 65% / 0.8)'
                })`
              }}
            >
              <div
                className={`rounded-full flex items-center justify-center backdrop-blur-sm border ${
                  agent.color === 'primary' 
                    ? 'bg-primary/20 border-primary/30 text-primary' 
                    : agent.color === 'accent' 
                    ? 'bg-accent/20 border-accent/30 text-accent'
                    : 'bg-secondary/20 border-secondary/30 text-secondary-foreground'
                }`}
                style={{ width: agent.size, height: agent.size }}
              >
                <Icon size={agent.size * 0.5} />
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life / particle.maxLife,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            transition: 'opacity 0.1s ease'
          }}
        />
      ))}
      
      {/* Mouse cursor glow */}
      {isActive && (
        <div
          className="absolute rounded-full transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePos.x - 25,
            top: mousePos.y - 25,
            width: 50,
            height: 50,
            background: 'radial-gradient(circle, hsl(200 100% 60% / 0.3), hsl(280 100% 65% / 0.2), transparent)',
            filter: 'blur(10px)',
            animation: 'pulse 2s infinite'
          }}
        />
      )}
      
      {/* Digital grid overlay on hover */}
      {isActive && (
        <div 
          className="absolute opacity-10 transition-opacity duration-500"
          style={{
            left: mousePos.x - 100,
            top: mousePos.y - 100,
            width: 200,
            height: 200,
            backgroundImage: `
              linear-gradient(hsl(200 100% 60% / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(200 100% 60% / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            pointerEvents: 'none',
            animation: 'fade-in 0.3s ease-out'
          }}
        />
      )}
    </div>
  );
};

export default AIAgentEffects;