import React, { useState } from 'react';
import { Home, Search, MessageSquare, User, MoreHorizontal, Hexagon, Compass, TrendingUp, Bell } from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  notifications?: number;
}

const Navbar: React.FC = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  
  const navItems: NavItem[] = [
    { label: 'Home', icon: <Home size={24} />, active: true },
    { label: 'Discover', icon: <Compass size={24} /> },
    { label: 'Trending', icon: <TrendingUp size={24} /> },
    { label: 'Messages', icon: <MessageSquare size={24} />, notifications: 3 },
    { label: 'Profile', icon: <User size={24} /> }
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 backdrop-blur-lg bg-white/80">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center text-primary-600 hover:text-primary-700 transition-colors">
                <Hexagon size={32} strokeWidth={2.5} className="transform rotate-12 animate-pulse" />
                <span className="ml-2 text-xl font-bold tracking-tight">SocietyX</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-center md:max-w-xl px-4">
            <div className={`relative w-full max-w-lg transition-all duration-200 ${searchFocused ? 'scale-105' : ''}`}>
              <input
                type="text"
                placeholder="Search topics, people, or conversations..."
                className="w-full px-4 py-2 rounded-xl bg-gray-100 focus:bg-white border border-transparent focus:border-primary-300 focus:ring-2 focus:ring-primary-200 transition-all"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col items-center px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200
                  ${item.active 
                    ? 'text-primary-600 bg-primary-50 scale-105' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50 hover:scale-105'
                  }`}
              >
                <div className="relative">
                  {item.icon}
                  {item.notifications && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                      {item.notifications}
                    </span>
                  )}
                </div>
                <span className="mt-1 text-xs">{item.label}</span>
              </div>
            ))}
            
            <button className="ml-2 p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 hover:scale-105">
              <Bell size={24} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 backdrop-blur-lg bg-white/80">
        <div className="grid grid-cols-5 gap-1 px-2">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col items-center px-1 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all duration-200
                ${item.active 
                  ? 'text-primary-600 bg-primary-50 scale-105' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50 hover:scale-105'
                }`}
            >
              <div className="relative">
                {item.icon}
                {item.notifications && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                    {item.notifications}
                  </span>
                )}
              </div>
              <span className="mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;