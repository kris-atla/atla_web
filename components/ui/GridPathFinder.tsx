"use client";

import { useEffect, useState } from "react";

interface Point {
  x: number;
  y: number;
}

export default function GridPathfinder() {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    // GRID SETTINGS
    const GRID_SIZE = 80; // px between grid points
    const SPEED = 600; // ms between moves

    const width = window.innerWidth;
    const hero = document.getElementById("hero-section");
    const height = hero?.offsetHeight ?? window.innerHeight;

    // Create grid intersection points
    const gridPoints: Point[] = [];
    for (let x = 0; x < width; x += GRID_SIZE) {
      for (let y = 0; y < height; y += GRID_SIZE) {
        gridPoints.push({ x, y });
      }
    }

    // Start at random point
    let current = gridPoints[Math.floor(Math.random() * gridPoints.length)];

    const path: Point[] = [current];

    const interval = setInterval(() => {
      // Move to a random NEIGHBOR point in the grid
      const neighbors = gridPoints.filter(
        (p) =>
          Math.abs(p.x - current.x) <= GRID_SIZE &&
          Math.abs(p.y - current.y) <= GRID_SIZE &&
          !(p.x === current.x && p.y === current.y)
      );

      current = neighbors[Math.floor(Math.random() * neighbors.length)];
      path.push(current);

      // keep path length manageable
      if (path.length > 20) path.shift();

      setPoints([...path]);
    }, SPEED);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      width="100%"
      height="100%"
      className="absolute inset-0 pointer-events-none z-10"
    >
      <defs>
        {/* Glow effect */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glowing line */}
      <polyline
        points={points.map((p) => `${p.x},${p.y}`).join(" ")}
        fill="none"
        stroke="white"
        strokeWidth="3"
        filter="url(#glow)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
