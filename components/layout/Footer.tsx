"use client";

import Link from 'next/link';
import { Shield, Mail, MapPin, Instagram, Twitter, Facebook, Linkedin, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Dr. Navjot Simi IPS", href: "#about" },
        { name: "UPSC Resources", href: "/upsc-resources" },
        { name: "My Published Books", href: "/my-books" },
        { name: "Get Free Guidance", href: "/student-guidance" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Student Login", href: "/student-login" }
      ]
    },
    {
      title: "UPSC Preparation",
      links: [
        { name: "Prelims Strategy", href: "/upsc-resources#prelims" },
        { name: "Mains Guidance", href: "/upsc-resources#mains" },
        { name: "Interview Tips", href: "/upsc-resources#interview" },
        { name: "Study Materials", href: "/upsc-resources#downloads" },
        { name: "Mock Tests", href: "/mock-tests" },
        { name: "Current Affairs", href: "/upsc-resources#current-affairs" }
      ]
    },
    {
      title: "Student Portal",
      links: [
        { name: "Student Login", href: "/student-login" },
        { name: "Create Account", href: "/student-login" },
        { name: "Submit Query", href: "/student-guidance" },
        { name: "Track Queries", href: "/student-dashboard" },
        { name: "Bookmark Resources", href: "/student-dashboard" },
        { name: "Free Guidance", href: "/student-guidance" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Free Study Plans", href: "/upsc-resources" },
        { name: "Video Tutorials", href: "/upsc-resources#videos" },
        { name: "Published Books", href: "/my-books" },
        { name: "Blog Articles", href: "/blog" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Admin Login", href: "/admin-login" }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/navjotsimi/?hl=en",
      color: "hover:text-pink-400"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/siminavjot?lang=en",
      color: "hover:text-blue-400"
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/navjotsimiips",
      color: "hover:text-blue-500"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://in.linkedin.com/in/navjot-simi-71160543",
      color: "hover:text-blue-600"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "contact@navjotsimi.gov.in"
    },
    {
      icon: MapPin,
      text: "Commandant, BMP 8, Begusarai, Bihar"
    }
  ];

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Navjot Simi IPS</h3>
                <p className="text-gray-300">IPS Officer</p>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              Dedicated to empowering UPSC aspirants with free resources, expert guidance, 
              and comprehensive support. From dental professional to IPS officer - inspiring 
              the next generation of civil servants.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <info.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-slate-800 transition-colors ${social.color}`}
                  aria-label={`Follow on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.name}
                      {link.href.startsWith('http') && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated - 100% Free!</h4>
              <p className="text-gray-300 text-sm">
                Get the latest UPSC preparation tips, free resources, and guidance updates directly in your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                Subscribe Free
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} Dr. Navjot Simi IPS. All rights reserved.</span>
              <span>•</span>
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for UPSC Aspirants - 100% Free Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;