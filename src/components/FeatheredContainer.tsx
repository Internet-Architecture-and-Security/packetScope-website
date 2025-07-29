
import React, { useState } from 'react';
import { Eye, BarChart3, MapPin, ShieldCheck, Cpu } from 'lucide-react';

const FeatheredContainer = ({ 
  src, 
  alt = "展示图片",
  className = ""
}) => {
  return (
    <div className={`relative w-full h-full overflow-hidden rounded-xl bg-gray-900 ${className}`}>
      {/* 图片背景 */}
      <img 
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* 羽化遮挡层 */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-gray-900/20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-transparent to-gray-900/20 pointer-events-none"></div> */}
    </div>
  );
};
export default FeatheredContainer;