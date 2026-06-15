'use client';

import React, { useState, useEffect, useRef } from 'react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  wrapperClassName?: string;
}

export default function LazyVideo({ src, className = '', wrapperClassName = '', style, children, ...props }: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 2) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`} style={style}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )}
      <video
        ref={videoRef}
        onLoadedData={() => setIsLoaded(true)}
        onLoadedMetadata={() => setIsLoaded(true)}
        className={className}
        playsInline
        {...props}
      >
        <source src={src as string} type="video/mp4" />
        {children}
      </video>
    </div>
  );
}
