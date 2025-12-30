"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ShikiCodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

export function ShikiCodeBlock({ 
  code, 
  language = 'tsx', 
  title,
  className = '' 
}: ShikiCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900 text-white rounded-t-lg border border-gray-800">
          <span className="text-sm font-medium">{title}</span>
          <button
            onClick={handleCopy}
            className="p-1 rounded hover:bg-gray-700 transition-colors"
            title="Copy code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400 group-hover:text-white" />
            )}
          </button>
        </div>
      )}
      <pre className={`bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed border border-gray-800 ${
        title ? 'rounded-t-none' : ''
      } ${className}`}>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
