import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();
  const ripplesRef = useRef<{ x: number; y: number; radius: number; opacity: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticleAtMouse = () => {
      const colors = ['#00ffff', '#ff00ff', '#39ff14', '#9400d3'];
      
      // Only create particles if mouse is on screen
      if (mouseRef.current.x < 0 || mouseRef.current.y < 0) return;

      // Create fewer particles and make them smaller
      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 30;
        const offsetX = Math.cos(angle) * radius;
        const offsetY = Math.sin(angle) * radius;

        particlesRef.current.push({
          x: mouseRef.current.x + offsetX,
          y: mouseRef.current.y + offsetY,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          size: Math.random() * 1.5 + 0.5, // Smaller particles
          opacity: Math.random() * 0.4 + 0.1, // Lower opacity
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 0,
          maxLife: 40 + Math.random() * 40 // Shorter life
        });
      }

      // Limit total particles
      if (particlesRef.current.length > 50) {
        particlesRef.current = particlesRef.current.slice(-50);
      }
    };

    const createRipple = (x: number, y: number) => {
      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        opacity: 0.3 // Lower opacity for ripples
      });
    };

    const createClickBurst = (x: number, y: number) => {
      const colors = ['#00ffff', '#ff00ff', '#39ff14', '#9400d3'];
      
      // Create fewer burst particles
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const speed = 2 + Math.random() * 1.5;
        
        particlesRef.current.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2 + 1, // Smaller burst particles
          opacity: 0.6, // Lower opacity
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 0,
          maxLife: 30 + Math.random() * 15
        });
      }
    };

    const animate = () => {
      // Clear canvas with more trail effect for lighter appearance
      ctx.fillStyle = 'rgba(15, 15, 15, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create particles near mouse cursor less frequently
      if (Math.random() < 0.2) {
        createParticleAtMouse();
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life++;
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Apply gravity and friction
        particle.vy += 0.01;
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        
        // Fade out over time
        const lifeRatio = particle.life / particle.maxLife;
        particle.opacity = (1 - lifeRatio) * 0.4; // Lower max opacity
        
        // Draw particle
        if (particle.opacity > 0) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          ctx.fill();
          
          // Reduced glow effect
          ctx.shadowBlur = 5;
          ctx.shadowColor = particle.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        
        return particle.life < particle.maxLife;
      });

      // Draw connections between nearby particles with lower opacity
      particlesRef.current.forEach((particle, index) => {
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 60) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (60 - distance) / 60 * 0.15 * particle.opacity; // Lower opacity
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      // Draw ripples with lower opacity
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        ripple.radius += 3;
        ripple.opacity -= 0.02;

        if (ripple.opacity > 0) {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.strokeStyle = '#00ffff';
          ctx.globalAlpha = ripple.opacity * 0.5; // Lower opacity
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Inner ripple
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius * 0.5, 0, Math.PI * 2);
          ctx.strokeStyle = '#ff00ff';
          ctx.globalAlpha = ripple.opacity * 0.3; // Lower opacity
          ctx.lineWidth = 0.5;
          ctx.stroke();
          
          return true;
        }
        return false;
      });
      
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY);
      createClickBurst(e.clientX, e.clientY);
    };

    const handleResize = () => {
      resizeCanvas();
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.4 }} // Reduced overall opacity
    />
  );
};

export default ParticleBackground;