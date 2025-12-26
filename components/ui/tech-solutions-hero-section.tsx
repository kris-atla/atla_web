import React from "react";
import "./tech-solutions-hero-section.css";

interface HaosShowcaseProps {
  bg: React.ReactNode;
  category: string;
  year: string | number;
  solutionLabel: string;
  solutionValue: string | number;
  title: string;
  subtitle: string;
  statLabel: string;
  statValue: string | number;
  bottomValue: string | number;
  progressPercent?: number;
  logoText?: React.ReactNode;
  onAction?: () => void;
  className?: string;
}

export default function HaosShowcase({
  bg,
  category,
  year,
  solutionLabel,
  solutionValue,
  title,
  subtitle,
  statLabel,
  statValue,
  bottomValue,
  progressPercent,
  logoText,
  onAction,
  className,
}: HaosShowcaseProps) {
  return (
    <section className={`haos-container ${className}`}>
      {/* component content... */}
    </section>
  );
}
