'use client';

import Image from 'next/image';
import React from 'react';

interface CornerBadgeProps {
  imageSrc: string;
  size?: number; // Optional: default 64
  borderColor?: string; // Optional Tailwind color
}

const CornerBadge: React.FC<CornerBadgeProps> = ({
  imageSrc,
  size = 90,
  borderColor = 'border-purple-500',
}) => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <div
        className={`rounded-full overflow-hidden border-4 ${borderColor}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={imageSrc}
          alt="Corner Badge"
          width={size}
          height={size}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default CornerBadge;
