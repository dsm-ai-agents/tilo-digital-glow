import { useEffect, useRef } from 'react';

interface NetworkNode {
  x: number;
  y: number;
  name: string;
  connections: number[];
}

interface MatrixChar {
  x: number;
  y: number;
  char: string;
  speed: number;
  opacity: number;
}

const MatrixWorldMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  
  // Major cities/network nodes (approximate positions)
  const networkNodes: NetworkNode[] = [
    { x: 0.15, y: 0.4, name: "New York", connections: [1, 2, 3] },
    { x: 0.5, y: 0.35, name: "London", connections: [0, 2, 4, 5] },
    { x: 0.55, y: 0.5, name: "Frankfurt", connections: [0, 1, 3, 4] },
    { x: 0.75, y: 0.4, name: "Tokyo", connections: [0, 2, 4, 6] },
    { x: 0.65, y: 0.6, name: "Singapore", connections: [1, 2, 3, 5] },
    { x: 0.45, y: 0.7, name: "Dubai", connections: [1, 4, 6] },
    { x: 0.85, y: 0.75, name: "Sydney", connections: [3, 5] }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let matrixChars: MatrixChar[] = [];
    const matrixCharsCount = 100;
    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Initialize matrix characters
      matrixChars = [];
      for (let i = 0; i < matrixCharsCount; i++) {
        matrixChars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          char: characters[Math.floor(Math.random() * characters.length)],
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const drawWorldMap = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const mapWidth = Math.min(canvas.width * 0.8, 800);
      const mapHeight = mapWidth * 0.5;
      
      // Draw world map outline (simplified)
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 4]);
      
      // Draw continents as simplified shapes
      const continents = [
        // North America
        { x: centerX - mapWidth * 0.3, y: centerY - mapHeight * 0.2, w: mapWidth * 0.25, h: mapHeight * 0.4 },
        // Europe
        { x: centerX - mapWidth * 0.05, y: centerY - mapHeight * 0.25, w: mapWidth * 0.15, h: mapHeight * 0.3 },
        // Asia
        { x: centerX + mapWidth * 0.1, y: centerY - mapHeight * 0.3, w: mapWidth * 0.35, h: mapHeight * 0.5 },
        // Africa
        { x: centerX - mapWidth * 0.05, y: centerY, w: mapWidth * 0.2, h: mapHeight * 0.35 },
        // Australia
        { x: centerX + mapWidth * 0.3, y: centerY + mapHeight * 0.2, w: mapWidth * 0.15, h: mapHeight * 0.15 }
      ];
      
      continents.forEach(continent => {
        ctx.strokeRect(continent.x, continent.y, continent.w, continent.h);
      });
      
      ctx.setLineDash([]);
      
      // Draw network nodes
      networkNodes.forEach((node, index) => {
        const nodeX = centerX + (node.x - 0.5) * mapWidth;
        const nodeY = centerY + (node.y - 0.5) * mapHeight;
        
        // Pulsing effect
        const pulse = Math.sin(Date.now() * 0.003 + index) * 0.3 + 0.7;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(nodeX, nodeY, 0, nodeX, nodeY, 15);
        gradient.addColorStop(0, `rgba(0, 255, 255, ${pulse * 0.8})`);
        gradient.addColorStop(0.5, `rgba(255, 0, 255, ${pulse * 0.4})`);
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, 15, 0, Math.PI * 2);
        ctx.fill();
        
        // Core node
        ctx.fillStyle = `rgba(255, 255, 255, ${pulse})`;
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Node label
        ctx.fillStyle = `rgba(0, 255, 255, 0.7)`;
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(node.name, nodeX, nodeY - 20);
      });
      
      // Draw connections
      networkNodes.forEach((node, index) => {
        const nodeX = centerX + (node.x - 0.5) * mapWidth;
        const nodeY = centerY + (node.y - 0.5) * mapHeight;
        
        node.connections.forEach(connectionIndex => {
          if (connectionIndex > index) { // Avoid duplicate lines
            const targetNode = networkNodes[connectionIndex];
            const targetX = centerX + (targetNode.x - 0.5) * mapWidth;
            const targetY = centerY + (targetNode.y - 0.5) * mapHeight;
            
            // Animated connection line
            const progress = (Math.sin(Date.now() * 0.002 + index + connectionIndex) + 1) / 2;
            
            ctx.strokeStyle = `rgba(255, 0, 255, ${0.3 + progress * 0.4})`;
            ctx.lineWidth = 1 + progress;
            ctx.setLineDash([5, 10]);
            ctx.lineDashOffset = Date.now() * 0.05;
            
            ctx.beginPath();
            ctx.moveTo(nodeX, nodeY);
            ctx.lineTo(targetX, targetY);
            ctx.stroke();
            
            // Data packets
            const packetX = nodeX + (targetX - nodeX) * progress;
            const packetY = nodeY + (targetY - nodeY) * progress;
            
            ctx.fillStyle = `rgba(0, 255, 255, ${progress})`;
            ctx.beginPath();
            ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });
      
      ctx.setLineDash([]);
    };
    
    const drawMatrix = () => {
      // Matrix rain effect
      matrixChars.forEach(char => {
        ctx.fillStyle = `rgba(0, 255, 0, ${char.opacity})`;
        ctx.font = '12px monospace';
        ctx.fillText(char.char, char.x, char.y);
        
        // Move character down
        char.y += char.speed;
        
        // Reset character when it goes off screen
        if (char.y > canvas.height) {
          char.y = -20;
          char.x = Math.random() * canvas.width;
          char.char = characters[Math.floor(Math.random() * characters.length)];
        }
        
        // Randomly change character
        if (Math.random() < 0.01) {
          char.char = characters[Math.floor(Math.random() * characters.length)];
        }
      });
    };
    
    const animate = () => {
      // Clear canvas with slight trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw matrix background
      drawMatrix();
      
      // Draw world map and network
      drawWorldMap();
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default MatrixWorldMap;