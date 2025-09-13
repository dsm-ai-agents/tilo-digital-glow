import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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
  rotation: number;
  trail: { x: number; y: number; opacity: number }[];
  element?: HTMLDivElement;
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
  active: boolean;
}

const AIAgentEffects = () => {
  const mousePos = useRef({ x: 0, y: 0 });
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const lastFrameTime = useRef<number>(0);
  const particlePool = useRef<Particle[]>([]);
  const activeParticles = useRef<Particle[]>([]);
  const agentRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  
  const agentIcons = useMemo(() => [Bot, Cpu, Zap, CircuitBoard, BrainCircuit, Sparkles], []);
  const agentColors = useMemo(() => ['primary', 'accent', 'secondary'], []);

  // Create particle pool for performance
  const createParticlePool = useCallback(() => {
    const pool: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      pool.push({
        id: i,
        x: 0,
        y: 0,
        velocityX: 0,
        velocityY: 0,
        life: 0,
        maxLife: 60,
        size: 2,
        color: 'hsl(200 100% 60%)',
        active: false
      });
    }
    return pool;
  }, []);

  // Get particle from pool
  const getParticle = useCallback((x: number, y: number): Particle | null => {
    const particle = particlePool.current.find(p => !p.active);
    if (particle) {
      particle.x = x + (Math.random() - 0.5) * 20;
      particle.y = y + (Math.random() - 0.5) * 20;
      particle.velocityX = (Math.random() - 0.5) * 2;
      particle.velocityY = (Math.random() - 0.5) * 2;
      particle.life = 60;
      particle.size = 2 + Math.random() * 3;
      particle.color = Math.random() < 0.5 ? 'hsl(200 100% 60%)' : 'hsl(280 100% 65%)';
      particle.active = true;
      activeParticles.current.push(particle);
      return particle;
    }
    return null;
  }, []);

  // Initialize agents
  useEffect(() => {
    particlePool.current = createParticlePool();
    
    const initialAgents: Agent[] = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      icon: agentIcons[i % agentIcons.length],
      color: agentColors[i % agentColors.length],
      size: 24 + Math.random() * 12,
      speed: 0.04 + Math.random() * 0.02,
      opacity: 0,
      rotation: 0,
      trail: []
    }));
    
    setAgents(initialAgents);
  }, [agentIcons, agentColors, createParticlePool]);

  // Optimized mouse tracking with throttling
  useEffect(() => {
    let throttleTimer: NodeJS.Timeout | null = null;
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsActive(true);
      
      // Throttle particle creation
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          if (Math.random() < 0.15 && activeParticles.current.length < 25) {
            getParticle(e.clientX, e.clientY);
          }
          throttleTimer = null;
        }, 50);
      }
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    // Use passive listeners for better performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, [getParticle]);

  // Optimized animation loop with frame limiting
  useEffect(() => {
    const animate = (currentTime: number) => {
      // Limit to 60fps
      if (currentTime - lastFrameTime.current < 16.67) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime.current = currentTime;

      const mouse = mousePos.current;
      
      setAgents(prevAgents => 
        prevAgents.map(agent => {
          // Calculate distance to mouse
          const dx = mouse.x - agent.x;
          const dy = mouse.y - agent.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Determine target based on mouse proximity
          let targetX = agent.targetX;
          let targetY = agent.targetY;
          let targetOpacity = isActive ? 0.7 : 0.3;
          
          if (isActive && distance < 150) {
            // Move towards mouse when close
            targetX = mouse.x + (Math.random() - 0.5) * 80;
            targetY = mouse.y + (Math.random() - 0.5) * 80;
            targetOpacity = 1;
          } else if (isActive && distance < 300) {
            // Orbit around mouse when in medium range
            const angle = Math.atan2(dy, dx) + currentTime * 0.0005;
            targetX = mouse.x + Math.cos(angle) * 120;
            targetY = mouse.y + Math.sin(angle) * 120;
            targetOpacity = 0.8;
          } else {
            // Random movement when far
            if (Math.random() < 0.005) {
              targetX = Math.random() * window.innerWidth;
              targetY = Math.random() * window.innerHeight;
            }
          }
          
          // Smooth movement with better interpolation
          const newX = agent.x + (targetX - agent.x) * agent.speed;
          const newY = agent.y + (targetY - agent.y) * agent.speed;
          const newOpacity = agent.opacity + (targetOpacity - agent.opacity) * 0.08;
          const newRotation = agent.rotation + 0.02;
          
          // Simplified trail - only 4 points
          const newTrail = agent.trail.length > 0 ? [
            { x: agent.x, y: agent.y, opacity: agent.opacity * 0.8 },
            ...agent.trail.slice(0, 2)
          ].map((point, index) => ({
            ...point,
            opacity: point.opacity * (1 - index * 0.3)
          })) : [];
          
          // Update DOM element directly for better performance
          const element = agentRefs.current.get(agent.id);
          if (element) {
            element.style.transform = `translate3d(${newX - agent.size / 2}px, ${newY - agent.size / 2}px, 0) scale(${0.8 + newOpacity * 0.4}) rotate(${newRotation}rad)`;
            element.style.opacity = newOpacity.toString();
          }
          
          return {
            ...agent,
            x: newX,
            y: newY,
            targetX,
            targetY,
            opacity: newOpacity,
            rotation: newRotation,
            trail: newTrail
          };
        })
      );
      
      // Update particles directly
      activeParticles.current = activeParticles.current.filter(particle => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.life -= 1;
        particle.velocityY += 0.03; // Lighter gravity
        
        if (particle.life <= 0) {
          particle.active = false;
          return false;
        }
        return true;
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      style={{ 
        mixBlendMode: 'screen',
        willChange: 'transform'
      }}
    >
      {/* AI Agents with optimized rendering */}
      {agents.map((agent) => {
        const Icon = agent.icon;
        return (
          <div key={agent.id}>
            {/* Simplified trail */}
            {agent.trail.slice(0, 2).map((point, index) => (
              <div
                key={`trail-${agent.id}-${index}`}
                className="absolute rounded-full will-change-transform"
                style={{
                  transform: `translate3d(${point.x - agent.size / 4}px, ${point.y - agent.size / 4}px, 0)`,
                  width: agent.size / 2,
                  height: agent.size / 2,
                  opacity: point.opacity * 0.4,
                  background: agent.color === 'primary' 
                    ? 'hsl(200 100% 60%)' 
                    : agent.color === 'accent' 
                    ? 'hsl(280 100% 65%)'
                    : 'hsl(220 15% 65%)',
                  filter: 'blur(1px)'
                }}
              />
            ))}
            
            {/* Main agent with ref for direct DOM manipulation */}
            <div
              ref={(el) => {
                if (el) agentRefs.current.set(agent.id, el);
              }}
              className="absolute will-change-transform"
              style={{
                filter: `drop-shadow(0 0 ${agent.size * 0.8}px ${
                  agent.color === 'primary' 
                    ? 'hsl(200 100% 60% / 0.6)' 
                    : agent.color === 'accent' 
                    ? 'hsl(280 100% 65% / 0.6)'
                    : 'hsl(220 15% 65% / 0.6)'
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
      
      {/* Optimized particles using CSS transforms */}
      {activeParticles.current.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full will-change-transform"
          style={{
            transform: `translate3d(${particle.x - particle.size / 2}px, ${particle.y - particle.size / 2}px, 0)`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life / particle.maxLife,
            boxShadow: `0 0 ${particle.size * 1.5}px ${particle.color}`
          }}
        />
      ))}
      
      {/* Simplified mouse cursor glow */}
      {isActive && (
        <div
          className="absolute rounded-full pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(${mousePos.current.x - 20}px, ${mousePos.current.y - 20}px, 0)`,
            width: 40,
            height: 40,
            background: 'radial-gradient(circle, hsl(200 100% 60% / 0.2), transparent 70%)',
            filter: 'blur(8px)',
            animation: 'pulse 1.5s infinite ease-in-out'
          }}
        />
      )}
      
      {/* Lightweight grid overlay */}
      {isActive && (
        <div 
          className="absolute opacity-5 pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(${mousePos.current.x - 75}px, ${mousePos.current.y - 75}px, 0)`,
            width: 150,
            height: 150,
            backgroundImage: `
              linear-gradient(hsl(200 100% 60% / 0.4) 1px, transparent 1px),
              linear-gradient(90deg, hsl(200 100% 60% / 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '15px 15px'
          }}
        />
      )}
    </div>
  );
};

export default AIAgentEffects;