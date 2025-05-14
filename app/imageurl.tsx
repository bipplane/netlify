'use client';

import Image from 'next/image';

/**
 * Check if a URL is external (starts with http:// or https://)
 */
export const isExternalUrl = (url: string): boolean => {
  return url.startsWith('http://') || url.startsWith('https://');
};

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
}

/**
 * A wrapper around Next.js Image component that handles both internal and external images
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  objectFit = 'cover',
  priority = false
}) => {
  // Determine if URL is external
  const isExternal = isExternalUrl(src);
  
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ 
        objectFit, 
        ...style 
      }}
      unoptimized={isExternal}
      priority={priority}
    />
  );
};

/**
 * A fallback component when no image is available
 */
export const ImageFallback: React.FC<{className?: string}> = ({ className = '' }) => (
  <div className={`bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center ${className}`}>
    <span className="text-3xl text-slate-500">🚀</span>
  </div>
);