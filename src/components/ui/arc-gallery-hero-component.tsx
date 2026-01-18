'use client';

import React, { useEffect, useState } from 'react';

// --- The ArcGalleryHero Component ---
type ArcGalleryHeroProps = {
  images: string[];
  startAngle?: number;
  endAngle?: number;
  // radius for different screen sizes
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  // size of each card for different screen sizes
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  // optional extra class on outer section
  className?: string;
};

export const ArcGalleryHero: React.FC<ArcGalleryHeroProps> = ({
  images,
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 260,
  cardSizeLg = 160,
  cardSizeMd = 140,
  cardSizeSm = 120,
  className = '',
}) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });
  const [mounted, setMounted] = useState(false);

  // Effect to handle responsive resizing of the arc and cards
  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  // Ensure at least 2 points to distribute angles for the arc calculation
  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section className={`relative overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col pt-20 ${className}`}>
      {/* Background ring container that controls geometry */}
      <div
        className="relative mx-auto"
        style={{
          width: '100%',
          // Give it a bit more height to prevent clipping
          height: mounted ? dimensions.radius * 1.2 : radiusLg * 1.2,
        }}
      >
        {/* Center pivot for transforms - positioned at bottom center */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {/* Each image is positioned on the circle and rotated to face outward */}
          {mounted ? images.map((src, i) => {
            const angle = startAngle + step * i; // degrees
            const angleRad = (angle * Math.PI) / 180;
            
            // Calculate x and y positions on the arc
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;
            
            return (
              <div
                key={i}
                className="absolute opacity-0 animate-fade-in-up"
                style={{
                  width: dimensions.cardSize,
                  height: dimensions.cardSize,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  transform: `translate(-50%, 50%)`,
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: 'forwards',
                  zIndex: count - i,
                }}
              >
                <div 
                  className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full flex items-center justify-center p-4"
                  style={{ transform: `rotate(${angle / 4}deg)` }}
                >
                  <img 
                    src={src} 
                    alt={`Tool ${i + 1}`}
                    className="w-full h-full object-contain"
                    style={{ 
                      maxWidth: '80px',
                      maxHeight: '80px'
                    }}
                    onError={(e) => {
                      // Fallback in case the image fails to load
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJtMCAxNkg1VdoaDRsMi02IDQgNCA0LTQgMiAyaDR2MnoiLz48L3N2Zz4=';
                    }}
                  />
                </div>
              </div>
            );
          }) : images.map((src, i) => (
            <div
              key={i}
              className="absolute opacity-0"
              style={{
                width: radiusLg / 4,
                height: radiusLg / 4,
                left: '50%',
                bottom: '20%',
                transform: 'translate(-50%, 50%)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content positioned below the arc */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 -mt-40 md:-mt-52 lg:-mt-64">
        <div className="text-center max-w-2xl px-6 opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Tools We Work With
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We leverage cutting-edge technologies and frameworks to build robust, scalable, 
            and modern web applications that drive business growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              onClick={() => {
                const element = document.getElementById('technology-stack');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Our Stack
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translate(-50%, 60%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 50%);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation-name: fade-in-up;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
        }
        .animate-fade-in {
          animation-name: fade-in;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
        }
      `}</style>
    </section>
  );
};
