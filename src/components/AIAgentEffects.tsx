import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Bot, Cpu, Zap, CircuitBoard, BrainCircuit, Sparkles, Network, Database, Code, Wifi } from 'lucide-react';

interface WorkingAgent {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  icon: React.ComponentType<any>;
  color: string;
  size: number;
  workState: 'thinking' | 'processing' | 'communicating' | 'idle';
  connections: number[];
  pulsePhase: number;
  rotationSpeed: number;
  opacity: number;
}

interface DataFlow {
  id: number;
  fromAgent: number;
  toAgent: number;
  progress: number;
  particles: { x: number; y: number; life: number }[];
}

interface BackgroundParticle {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

const AIAgentEffects = () => {
  const [agents, setAgents] = useState<WorkingAgent[]>([]);
  const [dataFlows, setDataFlows] = useState<DataFlow[]>([]);
  const [backgroundParticles, setBackgroundParticles] = useState<BackgroundParticle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const lastFrameTime = useRef<number>(0);
  
  const agentIcons = useMemo(() => [Bot, Cpu, BrainCircuit, Database, Code, Network, Wifi, CircuitBoard], []);
  const agentColors = useMemo(() => ['primary', 'accent', 'secondary'], []);
  const workStates: Array<WorkingAgent['workState']> = ['thinking', 'processing', 'communicating', 'idle'];

  // Initialize working agents in strategic positions
  useEffect(() => {
    const positions = [
      { x: '15%', y: '20%' }, { x: '85%', y: '25%' }, { x: '25%', y: '60%' },
      { x: '75%', y: '65%' }, { x: '50%', y: '30%' }, { x: '20%', y: '80%' },
      { x: '80%', y: '85%' }, { x: '60%', y: '15%' }
    ];
    
    const initialAgents: WorkingAgent[] = positions.map((pos, i) => ({
      id: i,
      x: (parseInt(pos.x) / 100) * window.innerWidth,
      y: (parseInt(pos.y) / 100) * window.innerHeight,
      targetX: (parseInt(pos.x) / 100) * window.innerWidth,
      targetY: (parseInt(pos.y) / 100) * window.innerHeight,
      icon: agentIcons[i % agentIcons.length],
      color: agentColors[i % agentColors.length],
      size: 32 + Math.random() * 16,
      workState: workStates[Math.floor(Math.random() * workStates.length)],
      connections: [],
      pulsePhase: Math.random() * Math.PI * 2,
      rotationSpeed: 0.01 + Math.random() * 0.02,
      opacity: 0.7 + Math.random() * 0.3
    }));

    // Create connections between agents
    initialAgents.forEach((agent, i) => {
      const numConnections = 1 + Math.floor(Math.random() * 3);
      for (let j = 0; j < numConnections; j++) {
        let targetIndex;
        do {
          targetIndex = Math.floor(Math.random() * initialAgents.length);
        } while (targetIndex === i || agent.connections.includes(targetIndex));
        
        if (agent.connections.length < 3) {
          agent.connections.push(targetIndex);
        }
      }
    });
    
    setAgents(initialAgents);
    
    // Initialize background particles
    const particles: BackgroundParticle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      velocityX: (Math.random() - 0.5) * 0.5,
      velocityY: (Math.random() - 0.5) * 0.5,
      size: 2 + Math.random() * 4,
      color: Math.random() < 0.5 ? 'hsl(200 100% 60%)' : 'hsl(280 100% 65%)',
      life: Math.random() * 300 + 200,
      maxLife: 500
    }));
    
    setBackgroundParticles(particles);
  }, [agentIcons, agentColors]);

  // Create data flows between connected agents
  const createDataFlow = useCallback((fromId: number, toId: number) => {
    const newFlow: DataFlow = {
      id: Date.now() + Math.random(),
      fromAgent: fromId,
      toAgent: toId,
      progress: 0,
      particles: Array.from({ length: 5 }, (_, i) => ({
        x: 0, y: 0, life: 30 - i * 5
      }))
    };
    
    setDataFlows(prev => [...prev.slice(-8), newFlow]);
  }, []);

  // Animation loop for AI collaboration
  useEffect(() => {
    const animate = (currentTime: number) => {
      // Limit to 60fps
      if (currentTime - lastFrameTime.current < 16.67) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime.current = currentTime;

      // Update agents
      setAgents(prevAgents => 
        prevAgents.map(agent => {
          // Update work state periodically
          let newWorkState = agent.workState;
          if (Math.random() < 0.002) {
            newWorkState = workStates[Math.floor(Math.random() * workStates.length)];
            
            // Create data flow when starting communication
            if (newWorkState === 'communicating' && agent.connections.length > 0) {
              const targetConnection = agent.connections[Math.floor(Math.random() * agent.connections.length)];
              createDataFlow(agent.id, targetConnection);
            }
          }

          // Subtle movement patterns
          let newTargetX = agent.targetX;
          let newTargetY = agent.targetY;
          
          if (Math.random() < 0.001) {
            const baseX = (agent.id % 4) * (window.innerWidth / 4) + window.innerWidth / 8;
            const baseY = Math.floor(agent.id / 4) * (window.innerHeight / 2) + window.innerHeight / 4;
            newTargetX = baseX + (Math.random() - 0.5) * 200;
            newTargetY = baseY + (Math.random() - 0.5) * 200;
          }

          // Smooth movement
          const newX = agent.x + (newTargetX - agent.x) * 0.01;
          const newY = agent.y + (newTargetY - agent.y) * 0.01;
          
          // Update pulse phase
          const newPulsePhase = agent.pulsePhase + agent.rotationSpeed;
          
          return {
            ...agent,
            x: newX,
            y: newY,
            targetX: newTargetX,
            targetY: newTargetY,
            workState: newWorkState,
            pulsePhase: newPulsePhase
          };
        })
      );

      // Update data flows
      setDataFlows(prevFlows =>
        prevFlows
          .map(flow => ({
            ...flow,
            progress: flow.progress + 0.02,
            particles: flow.particles.map(p => ({
              ...p,
              life: p.life - 1
            }))
          }))
          .filter(flow => flow.progress < 1)
      );

      // Update background particles
      setBackgroundParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: particle.x + particle.velocityX,
          y: particle.y + particle.velocityY,
          life: particle.life - 1,
          // Wrap around screen edges
          ...(particle.x > window.innerWidth && { x: 0 }),
          ...(particle.x < 0 && { x: window.innerWidth }),
          ...(particle.y > window.innerHeight && { y: 0 }),
          ...(particle.y < 0 && { y: window.innerHeight })
        })).filter(p => p.life > 0)
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [createDataFlow, workStates]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      style={{ 
        opacity: 0.8,
        background: 'radial-gradient(circle at 30% 70%, hsl(200 100% 60% / 0.05), transparent 50%), radial-gradient(circle at 70% 30%, hsl(280 100% 65% / 0.05), transparent 50%)'
      }}
    >
      {/* Background floating particles */}
      {backgroundParticles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            transform: `translate3d(${particle.x}px, ${particle.y}px, 0)`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: (particle.life / particle.maxLife) * 0.3,
            filter: `blur(${particle.size * 0.5}px)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
        />
      ))}

      {/* Connection lines between agents */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {agents.map(agent => 
          agent.connections.map(connectionId => {
            const targetAgent = agents[connectionId];
            if (!targetAgent) return null;
            
            const isActive = agent.workState === 'communicating';
            
            return (
              <line
                key={`${agent.id}-${connectionId}`}
                x1={agent.x}
                y1={agent.y}
                x2={targetAgent.x}
                y2={targetAgent.y}
                stroke={agent.color === 'primary' ? 'hsl(200 100% 60%)' : agent.color === 'accent' ? 'hsl(280 100% 65%)' : 'hsl(220 15% 65%)'}
                strokeWidth={isActive ? 2 : 1}
                opacity={isActive ? 0.6 : 0.2}
                strokeDasharray={isActive ? "5,5" : "none"}
                style={{
                  filter: isActive ? `drop-shadow(0 0 4px ${agent.color === 'primary' ? 'hsl(200 100% 60%)' : 'hsl(280 100% 65%)'})` : 'none',
                  animation: isActive ? 'pulse 2s infinite' : 'none'
                }}
              />
            );
          })
        )}
      </svg>

      {/* Data flow particles along connections */}
      {dataFlows.map(flow => {
        const fromAgent = agents[flow.fromAgent];
        const toAgent = agents[flow.toAgent];
        if (!fromAgent || !toAgent) return null;

        return flow.particles.map((particle, index) => {
          const progress = (flow.progress + index * 0.1) % 1;
          const x = fromAgent.x + (toAgent.x - fromAgent.x) * progress;
          const y = fromAgent.y + (toAgent.y - fromAgent.y) * progress;
          
          return (
            <div
              key={`${flow.id}-${index}`}
              className="absolute rounded-full"
              style={{
                transform: `translate3d(${x - 2}px, ${y - 2}px, 0)`,
                width: 4,
                height: 4,
                backgroundColor: fromAgent.color === 'primary' ? 'hsl(200 100% 60%)' : 'hsl(280 100% 65%)',
                opacity: particle.life > 0 ? 0.8 : 0,
                boxShadow: `0 0 8px ${fromAgent.color === 'primary' ? 'hsl(200 100% 60%)' : 'hsl(280 100% 65%)'}`,
                zIndex: 2
              }}
            />
          );
        });
      })}

      {/* Working AI Agents */}
      {agents.map((agent) => {
        const Icon = agent.icon;
        const workIntensity = agent.workState === 'processing' ? 1.2 : agent.workState === 'thinking' ? 1.1 : 1;
        const pulseScale = 1 + Math.sin(agent.pulsePhase) * 0.1 * workIntensity;
        
        return (
          <div key={agent.id} className="absolute" style={{ zIndex: 3 }}>
            {/* Agent work aura */}
            <div
              className="absolute rounded-full"
              style={{
                transform: `translate3d(${agent.x - agent.size}px, ${agent.y - agent.size}px, 0) scale(${pulseScale})`,
                width: agent.size * 2,
                height: agent.size * 2,
                background: `radial-gradient(circle, ${
                  agent.color === 'primary' 
                    ? 'hsl(200 100% 60% / 0.1)' 
                    : agent.color === 'accent' 
                    ? 'hsl(280 100% 65% / 0.1)'
                    : 'hsl(220 15% 65% / 0.1)'
                }, transparent 70%)`,
                opacity: agent.workState === 'idle' ? 0.3 : 0.8
              }}
            />
            
            {/* Main agent */}
            <div
              className="absolute"
              style={{
                transform: `translate3d(${agent.x - agent.size / 2}px, ${agent.y - agent.size / 2}px, 0) scale(${pulseScale}) rotate(${agent.pulsePhase * 20}deg)`,
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
                className={`rounded-full flex items-center justify-center backdrop-blur-sm border-2 ${
                  agent.color === 'primary' 
                    ? 'bg-primary/30 border-primary/50 text-primary' 
                    : agent.color === 'accent' 
                    ? 'bg-accent/30 border-accent/50 text-accent'
                    : 'bg-secondary/30 border-secondary/50 text-secondary-foreground'
                }`}
                style={{ 
                  width: agent.size, 
                  height: agent.size,
                  opacity: agent.opacity,
                  boxShadow: agent.workState !== 'idle' ? `inset 0 0 20px ${
                    agent.color === 'primary' ? 'hsl(200 100% 60% / 0.3)' : 'hsl(280 100% 65% / 0.3)'
                  }` : 'none'
                }}
              >
                <Icon size={agent.size * 0.5} />
              </div>
              
              {/* Work state indicator */}
              <div
                className="absolute -top-1 -right-1 rounded-full"
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 
                    agent.workState === 'processing' ? '#00ff00' :
                    agent.workState === 'thinking' ? '#ffaa00' :
                    agent.workState === 'communicating' ? '#00aaff' : '#666',
                  boxShadow: `0 0 6px ${
                    agent.workState === 'processing' ? '#00ff00' :
                    agent.workState === 'thinking' ? '#ffaa00' :
                    agent.workState === 'communicating' ? '#00aaff' : 'transparent'
                  }`,
                  animation: agent.workState !== 'idle' ? 'pulse 1s infinite' : 'none'
                }}
              />
            </div>
          </div>
        );
      })}

      {/* Neural network grid overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(200 100% 60% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(200 100% 60% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          animation: 'fade-in 2s ease-out'
        }}
      />
    </div>
  );
};

export default AIAgentEffects;