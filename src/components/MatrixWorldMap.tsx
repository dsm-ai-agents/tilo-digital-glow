import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let matrixChars: MatrixChar[] = [];
    const matrixCharsCount = 150;
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
          speed: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const drawMatrix = () => {
      // Matrix rain effect
      matrixChars.forEach(char => {
        ctx.fillStyle = `rgba(0, 255, 0, ${char.opacity})`;
        ctx.font = '14px monospace';
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
        if (Math.random() < 0.02) {
          char.char = characters[Math.floor(Math.random() * characters.length)];
        }
      });
    };
    
    const animate = () => {
      // Clear canvas with slight trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw matrix background
      drawMatrix();
      
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