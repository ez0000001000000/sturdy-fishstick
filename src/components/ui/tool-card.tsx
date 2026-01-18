'use client';

import React from 'react';

interface ToolCardProps {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
  tag?: {
    text: string;
    className?: string;
  };
}

export const ToolCard: React.FC<ToolCardProps> = ({ name, description, url, imageUrl, tag }) => {
  const [imgSrc, setImgSrc] = React.useState(imageUrl);

  const handleImageError = () => {
    setImgSrc('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJtMCAxNkg1VjVoNHYySjl2MmgxdjNoM3YtMmgxVjloMnYyaDFoMXYzaC0ydjJoLTF2LTNoLTN2M2gxdjJoLTF2MWg0eiIvPjwvc3ZnPg==');
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500"
    >
      {tag && (
        <span className={`absolute -top-2 -right-2 px-2 py-1 text-xs font-medium rounded-full z-10 ${tag.className || 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
          {tag.text}
        </span>
      )}
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
          <img 
            src={imgSrc}
            alt={`${name} logo`}
            className="h-8 w-8 object-contain"
            onError={handleImageError}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {name}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-400 dark:group-hover:border-indigo-500 pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
    </a>
  );
};
