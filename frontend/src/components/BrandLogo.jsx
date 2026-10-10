import React from 'react';
import { Hammer, Wrench } from 'lucide-react';
import './BrandLogo.css';

function BrandLogo({ variant = "navbar" }) {
  return (
    <div className={`brand-logo-component ${variant}`}>
      <span className="logo-text-quick">
        <span className="q-wrapper">
          Q
          <span className="q-pointer-triangle"></span>
        </span>
        uick
      </span>
      <span className="logo-text-fix">Fix</span>
      
      {/* Crossed Tools Emblem from image */}
      <span className="logo-tool-emblem">
        <Hammer size={18} className="tool-hammer" />
        <Wrench size={16} className="tool-wrench" />
      </span>
    </div>
  );
}

export default BrandLogo;