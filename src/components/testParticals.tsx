"use client";
import React, { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

class Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;
  angle: number;
  attractionDistance: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 3 + 1;
    this.color = "#6B46C1"; // Purple-700
    this.speed = Math.random() * 2 + 0.5;
    this.angle = Math.random() * 2 * Math.PI;
    this.attractionDistance = 100; // Distance to react to the mouse
  }

  move(mousePosition: Point | null) {
    if (mousePosition) {
      const dx = this.x - mousePosition.x;
      const dy = this.y - mousePosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.attractionDistance) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = this.attractionDistance;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.speed;
        const directionY = forceDirectionY * force * this.speed;

        this.x += directionX;
        this.y += directionY;
      } else {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
      }
    } else {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
    }

    // Bounce off edges
    if (this.x < 0 || this.x > window.innerWidth)
      this.angle = Math.PI - this.angle;
    if (this.y < 0 || this.y > window.innerHeight) this.angle = -this.angle;
  }
}

const ParticlesComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles: Particle[] = [];
  const mousePosition = useRef<Point | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      // Initialize particles
      for (let i = 0; i < 100; i++) {
        particles.push(
          new Particle(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
          )
        );
      }

      const animate = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          particle.move(mousePosition.current);
          context.beginPath();
          context.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
          context.fillStyle = particle.color;
          context.fill();
        });

        requestAnimationFrame(animate);
      };

      animate();

      const handleMouseMove = (event: MouseEvent) => {
        mousePosition.current = {
          x: event.clientX,
          y: event.clientY,
        };
      };

      const handleClick = () => {
        for (let i = 0; i < 10; i++) {
          particles.push(
            new Particle(
              Math.random() * window.innerWidth,
              Math.random() * window.innerHeight
            )
          );
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("click", handleClick);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default ParticlesComponent;
