"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, Phone, Mail, Instagram, Twitter, Facebook, Linkedin, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [studentSession, setStudentSession] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check for student session
    const session = localStorage.getItem('studentSession');
    if (session) {
      setStudentSession(JSON.parse(session));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/upsc-resources', label: 'UPSC Resources' },
    { href: '/my-books', label: 'My Books' },
    { href: '/mock-tests', label: 'Mock Tests' },
    { href: '/student-guidance', label: 'Get Guidance' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/blog', label: 'Blog' }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/navjotsimi/?hl=en",
      label: "Instagram"
    },
    {
      icon: Twitter,
      url: "https://twitter.com/siminavjot?lang=en",
      label: "Twitter"
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/navjotsimiips",
      label: "Facebook"
    },
    {
      icon: Linkedin,
      url: "https://in.linkedin.com/in/navjot-simi-71160543",
      label: "LinkedIn"
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('studentSession');
    setStudentSession(null);
    window.location.href = '/';
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile for space */}
      <div className="bg-slate-900 text-white py-2 px-4 text-sm border-b border-slate-700 mobile-hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>contact@navjotsimi.gov.in</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:block">Free Resources for UPSC Students</span>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 mobile-nav ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-white">
                  Dr. Navjot Simi IPS
                </h1>
                <p className="text-sm text-gray-300 mobile-hidden">
                  IPS Officer | Free UPSC Resources
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-medium transition-colors hover:text-blue-400 text-white"
                >
                  {item.label}
                </Link>
              ))}
              
              {studentSession ? (
                <div className="flex items-center gap-4">
                  <Link
                    href="/student-dashboard"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white transition-colors"
                  >
                    <User className="w-4 h-4" />
                    {studentSession.name}
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    href="/student-login"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Student Login
                  </Link>
                  <Link
                    href="/admin-login"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Admin
                  </Link>
                </div>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 transition-colors text-white mobile-focus btn-mobile"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-700 shadow-lg mobile-overlay-menu">
            <div className="px-4 py-2 space-y-2 mobile-space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-white hover:text-blue-400 transition-colors mobile-text-base btn-mobile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-slate-700">
                {studentSession ? (
                  <div className="space-y-2">
                    <Link
                      href="/student-dashboard"
                      className="flex items-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg btn-mobile"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="w-4 h-4" />
                      {studentSession.name}
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white btn-mobile"
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      href="/student-login"
                      className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg text-center btn-mobile"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Student Login
                    </Link>
                    <Link
                      href="/admin-login"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-center btn-mobile"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Admin Login
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-slate-700">
                <p className="text-gray-400 text-sm mb-3">Follow Us</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-blue-400" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-slate-700 pb-4">
                <p className="text-gray-400 text-sm mb-3">Quick Contact</p>
                <div className="space-y-2">
                  <a 
                    href="mailto:contact@navjotsimi.gov.in" 
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="mobile-text-sm">contact@navjotsimi.gov.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;