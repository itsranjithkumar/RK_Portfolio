'use client';

import Image from 'next/image';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  return (
    <div className="media-box relative w-[400px] h-[300px] flex items-center justify-center bg-black overflow-hidden">
      {type === 'image' ? (
        <img 
          src={source} 
          alt=""
          className="w-full h-full object-cover"
        />
      ) : (
        <video 
          src={source}
          className="min-w-full min-h-full max-w-none w-auto h-auto object-contain"
          autoPlay
          muted
          loop
          playsInline
        />
      )}
    </div>
  );
}
