'use client';

import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface TopNavProps {
  items: NavItem[];
}

const TopNav: React.FC<TopNavProps> = ({ items }) => {
  return (
    <nav className="fixed top-4 right-4 z-50">
      <ul className="flex space-x-4 text-sm font-semibold text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-md border border-white/10 shadow-sm">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="hover:text-purple-400 transition">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
