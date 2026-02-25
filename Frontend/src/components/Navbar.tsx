import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio', hidden: true },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-soft'
          : 'bg-card/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-nav">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold text-primary">
              Navlyon
            </span>
          </Link>

          {/* Navigation Links - Always visible */}
          <div className="flex items-center gap-3 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs sm:text-sm font-medium text-foreground/70 transition-colors hover:text-primary whitespace-nowrap ${
                    link.hidden ? 'hidden' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs sm:text-sm font-medium text-foreground/70 transition-colors hover:text-primary whitespace-nowrap ${
                    link.hidden ? 'hidden' : ''
                  }`}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <Button variant="default" size="sm" className="rounded-xl flex-shrink-0 hidden sm:inline-flex md:h-11 md:px-6 md:text-sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
