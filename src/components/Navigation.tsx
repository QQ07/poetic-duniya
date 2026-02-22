import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Poems', href: '/poems' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const siteTitle = 'Poetic Duniya';

  return (
    <nav className="sticky top-0 z-20 bg-[#FAF9F6] border-b border-[#E8D5D5] backdrop-blur-sm">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="font-serif text-2xl text-[#1A1A1A] hover:text-[#8B7355] transition-colors duration-300"
        >
          {siteTitle}
        </Link>
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-sm text-[#1A1A1A] hover:text-[#E8D5D5] transition-colors duration-300 font-sans"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-4">
        <Link 
          to="/" 
          className="font-serif text-xl text-[#1A1A1A] hover:text-[#8B7355] transition-colors"
        >
          {siteTitle}
        </Link>
        <button
          onClick={toggleMobileMenu}
          className="text-[#1A1A1A] hover:text-[#8B7355] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-[#FAF9F6] border-t border-[#E8D5D5] px-4 py-4 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 max-h-96' 
            : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'
        }`}
      >
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-sm text-[#1A1A1A] hover:text-[#8B7355] transition-colors font-sans block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;