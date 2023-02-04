import React from 'react';

export default function MegaMenu() {
  return (
    <div className="text-xs text-white/90">
      <ul className="flex items-center gap-4">
        <li className="cursor-pointer transition-all hover:text-cyan-500">
          Offers
        </li>
        <li className="cursor-pointer transition-all hover:text-cyan-500">
          Products
        </li>
        <li className="cursor-pointer transition-all hover:text-cyan-500">
          Blog
        </li>
      </ul>
    </div>
  );
}
