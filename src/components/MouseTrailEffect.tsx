import { useEffect, useRef, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  hue: number;
  life: number;
  maxLife: number;
  id: number;
}

const MouseTrailEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const trailPoints = useRef<TrailPoint[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      setIsActive(true);
      
      // Add new trail points
      for (let i = 0; i < 3; i++) {
        const hue = (Date.now() * 0.1 + i * 30) % 360;
        trailPoints.current.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          hue,
          life: 60,
          maxLife: 60,
          id: Date.now() + Math.random()
        });
      }
      
      // Limit trail points
      if (trailPoints.current.length > 200) {
        trailPoints.current = trailPoints.current.slice(-150);
      }
    };
    
    const handleMouseLeave = () => {
      setIsActive(false);
    };
    
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      trailPoints.current = trailPoints.current.filter(point => {
        point.life -= 1;
        
        if (point.life <= 0) return false;
        
        const alpha = point.life / point.maxLife;
        const size = alpha * 8 + 2;
        
        // Create water-like flowing motion
        point.x += (Math.random() - 0.5) * 2;
        point.y += Math.sin(Date.now() * 0.01 + point.id) * 0.5 + 0.5;
        
        // Create gradient for water effect
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size
        );
        
        gradient.addColorStop(0, `hsla(${point.hue}, 80%, 60%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(${(point.hue + 60) % 360}, 70%, 50%, ${alpha * 0.6})`);
        gradient.addColorStop(1, `hsla(${(point.hue + 120) % 360}, 60%, 40%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add inner glow
        ctx.shadowColor = `hsl(${point.hue}, 80%, 60%)`;
        ctx.shadowBlur = size * 2;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${point.hue}, 90%, 70%, ${alpha * 0.8})`;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        return true;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MouseTrailEffect;