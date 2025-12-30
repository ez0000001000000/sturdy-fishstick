"use client";

import React from 'react';
import Image from 'next/image';
import { AspectRatio } from './aspect-ratio';

interface PreviewItem {
  id: string;
  title: string;
  description?: string;
  imageSrc?: string;
  component?: React.ReactNode;
}

interface PreviewCanvasProps {
  items: PreviewItem[];
  className?: string;
}

export function PreviewCanvas({ items, className = '' }: PreviewCanvasProps) {
  return (
    <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((item) => (
        <div key={item.id} className="group">
          <div className="overflow-hidden rounded-lg border bg-white dark:bg-gray-900 transition-all hover:shadow-lg">
            {item.imageSrc ? (
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </AspectRatio>
            ) : (
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                {item.component}
              </div>
            )}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item.description && (
              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
