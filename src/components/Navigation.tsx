import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  variant?: 'top' | 'side';
}

const Navigation: React.FC<NavigationProps> = ({ variant = 'top' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Poems', href: '/poems' },
    { name: 'About', href: '/about' },
    { name: 'Collections', href: '/collections' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const siteTitle = 'Poetic Duniya';

  return (
    <nav className="sticky top-0 z-10 bg-gray-50 border-b border-gray-200">
      {/* Desktop Navigation */}
      {variant === 'top' ? (
        <div className="hidden md:flex items-center justify-between px-6 py-4">
          <Link to="/" className="font-serif text-xl text-gray-800 hover:text-gray-600 transition-opacity">
            {siteTitle}
          </Link>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-gray-500 transition-opacity font-sans"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="hidden md:flex flex-col fixed left-0 top-0 h-full w-64 bg-gray-50 border-r border-gray-200 p-6">
          <Link to="/" className="font-serif text-xl text-gray-800 hover:text-gray-600 transition-opacity mb-8">
            {siteTitle}
          </Link>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-gray-500 transition-opacity font-sans block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <Link to="/" className="font-serif text-lg text-gray-800 hover:text-gray-600 transition-opacity">
          {siteTitle}
        </Link>
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 hover:text-gray-500 transition-opacity"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={`md:hidden bg-gray-50 border-t border-gray-200 px-4 py-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0 max-h-96' : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'}`}>
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-gray-700 hover:text-gray-500 transition-opacity font-sans block"
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