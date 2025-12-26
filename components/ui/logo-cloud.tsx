'use client';

import { animate, motion, useMotionValue } from 'framer-motion';
import React, { CSSProperties, useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PlusIcon } from "lucide-react";




function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    speed?: number;
    speedOnHover?: number;
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    className?: string;
};

function InfiniteSlider({
    children,
    gap = 16,
    speed = 100,
    speedOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
}: InfiniteSliderProps) {
    const [currentSpeed, setCurrentSpeed] = useState(speed);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        let controls;
        const size = direction === 'horizontal' ? width : height;
        if (size === 0) return;

        const contentSize = size + gap;
        const from = reverse ? -contentSize / 2 : 0;
        const to = reverse ? 0 : -contentSize / 2;

        const distanceToTravel = Math.abs(to - from);
        const duration = distanceToTravel / currentSpeed;

        if (isTransitioning) {
            const remainingDistance = Math.abs(translation.get() - to);
            const transitionDuration = remainingDistance / currentSpeed;
            controls = animate(translation, [translation.get(), to], {
                ease: 'linear',
                duration: transitionDuration,
                onComplete: () => {
                    setIsTransitioning(false);
                    setKey((prevKey) => prevKey + 1);
                },
            });
        } else {
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from);
                },
            });
        }

        return () => controls?.stop();
    }, [key, translation, currentSpeed, width, height, gap, isTransitioning, direction, reverse]);

    const hoverProps = speedOnHover
        ? {
              onHoverStart: () => {
                  setIsTransitioning(true);
                  setCurrentSpeed(speedOnHover);
              },
              onHoverEnd: () => {
                  setIsTransitioning(true);
                  setCurrentSpeed(speed);
              },
          }
        : {};

    return (
        <div className={cn('overflow-hidden', className)}>
            <motion.div
                className="flex w-max items-center"
                style={{
                    ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column',
                }}
                ref={ref}
                {...hoverProps}>
                {children}
                {children}
            </motion.div>
        </div>
    );
}

export type BlurredInfiniteSliderProps = InfiniteSliderProps & {
    fadeWidth?: number | string;
    containerClassName?: string;
};

export function BlurredInfiniteSlider({
    children,
    fadeWidth = 80,
    containerClassName,
    ...sliderProps
}: BlurredInfiniteSliderProps) {

    const fadeValue = typeof fadeWidth === 'number' ? `${fadeWidth}px` : fadeWidth;

    const maskStyle: CSSProperties = {
        maskImage: `linear-gradient(to right, transparent, black ${fadeValue}, black calc(100% - ${fadeValue}), transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeValue}, black calc(100% - ${fadeValue}), transparent)`,
    };

    return (
        <div
            className={cn('relative w-full', containerClassName)}
            style={maskStyle}
        >
            <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
        </div>
    );
}

// Tech logos relevant to ATLA's stack
const TECH_LOGOS = [
    { src: "/react.svg", alt: "React Logo", height: 40}, 
    { src: "/Vercel_logo_2025.svg", alt: "Vercel Logo", height: 22 },
    { src: "/github.svg", alt: "GitHub Logo", height: 28 },
    { src: "/docker-4.svg", alt: "Docker Logo", height: 25 },
    { src: "/ChatGPT-Logo.svg", alt: "OpenAI Logo", height: 25 },
    // Duplicate for infinite scroll smoothness
    { src: "/react.svg", alt: "React Logo", height: 40}, 
    { src: "/Vercel_logo_2025.svg", alt: "Vercel Logo", height: 22 },
    { src: "/github.svg", alt: "GitHub Logo", height: 28 },
    { src: "/docker-4.svg", alt: "Docker Logo", height: 25 },
    { src: "/ChatGPT-Logo.svg", alt: "OpenAI Logo", height: 25 },
    { src: "/react.svg", alt: "React Logo", height: 40}, 
    { src: "/Vercel_logo_2025.svg", alt: "Vercel Logo", height: 22 },
    { src: "/github.svg", alt: "GitHub Logo", height: 28 },
    { src: "/docker-4.svg", alt: "Docker Logo", height: 25 },
    { src: "/ChatGPT-Logo.svg", alt: "OpenAI Logo", height: 25 },
];

export default function LogoCloud() {
    return (
        <section className="overflow-hidden py-8 w-full">
            <div className="m-auto max-w-7xl px-6 md:px-10">
                {/* Bordered Container */}
                <div className="relative border-2 border-black shadow-lg p-8 md:p-12 bg-white">
                    {/* Corner Plus Icons */}
                    <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 bg-white" />
                    <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 bg-white" />
                    <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 bg-white" />
                    <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 bg-white" />

                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-black mb-12 text-center">
                            Teknik vi arbetar med
                        </h2>
                        <div className="w-full h-16 relative">
                            <BlurredInfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={60}
                                fadeWidth="24px"
                            >
                                {TECH_LOGOS.map((logo, idx) => (
                                    <div key={`${logo.src}-${idx}`} className="flex items-center justify-center h-full">
                                        <img
                                            className="w-auto object-contain hover:scale-110 transition-transform duration-300"
                                            src={logo.src}
                                            alt={logo.alt}
                                            style={{ height: `${logo.height}px` }}
                                            loading="eager"
                                        />
                                    </div>
                                ))}
                            </BlurredInfiniteSlider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
