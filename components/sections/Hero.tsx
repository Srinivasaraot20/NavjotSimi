"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Award, Users, BookOpen, Shield, Star, Trophy, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    { icon: Users, number: "6+", text: "Years of Service" },
    { icon: BookOpen, number: "500+", text: "UPSC Aspirants Guided" },
    { icon: Shield, number: "10+", text: "Awards Received" }
  ];

  const slides = [
    {
      title: "Dr. Navjot Simi IPS",
      subtitle: "Inspiring Excellence in Civil Services",
      description: "From dental professional to IPS officer - a journey of determination, integrity, and service to the nation",
      image: "/image copy.png"
    },
    {
      title: "Empowering Future Officers",
      subtitle: "Comprehensive UPSC Guidance & Mentorship",
      description: "Proven strategies and personalized guidance from someone who achieved success through perseverance",
      image: "/image copy copy copy.png"
    },
    {
      title: "Serving with Dedication",
      subtitle: "Building Safer Communities Through Leadership",
      description: "Leading by example in law enforcement while inspiring the next generation of civil servants",
      image: "/image copy.png"
    }
  ];

  const featuredVideos = [
    {
      title: "IPS Journey - From Dentist to Officer",
      url: "https://youtu.be/_pU7hZxSH9k?si=fyyRhDsskgqqHyZW",
      thumbnail: "https://img.youtube.com/vi/_pU7hZxSH9k/maxresdefault.jpg"
    },
    {
      title: "UPSC Interview Experience",
      url: "https://youtu.be/GPjamyaTF-k?si=-HWsr_Ngdi1cSh85",
      thumbnail: "https://img.youtube.com/vi/GPjamyaTF-k/maxresdefault.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-24">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-800/95" />
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center opacity-30"
              priority={index === 0}
            />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Dentist to IPS Success Story</span>
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">{slides[currentSlide].title}</span>
              </h1>
              <p className="text-2xl md:text-3xl font-light text-blue-200 mb-6">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover-lift"
                onClick={() => window.location.href = '/upsc-resources'}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Start Your UPSC Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold glass"
                onClick={() => window.location.href = '/my-books'}
              >
                <Shield className="w-5 h-5 mr-2" />
                My Published Books
              </Button>
            </div>

            {/* Featured Videos */}
            <div className="grid grid-cols-2 gap-4">
              {featuredVideos.map((video, index) => (
                <div 
                  key={index}
                  className="relative cursor-pointer group glass rounded-lg overflow-hidden hover-lift"
                  onClick={() => handleVideoClick(video.url)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-24 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-1 left-1 right-1">
                    <p className="text-white text-xs font-medium truncate">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`relative ${isVisible ? 'animate-slideInRight animate-delay-300' : 'opacity-0'}`}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative glass rounded-3xl p-8 hover-lift">
                <Image
                  src="/image copy.png"
                  alt="Dr. Navjot Simi IPS"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-2xl object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                  <h3 className="font-bold text-white text-lg">Dr. Navjot Simi IPS</h3>
                  <p className="text-blue-200">Commandant, BMP 8 - Begusarai, Bihar</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">2018 Batch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-16 ${isVisible ? 'animate-fadeInUp animate-delay-500' : 'opacity-0'}`}>
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`text-center group hover-lift glass rounded-2xl p-6 animate-countUp animate-delay-${(index + 1) * 100}`}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <achievement.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">{achievement.number}</div>
              <div className="text-sm md:text-base text-gray-300">{achievement.text}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="glass rounded-full p-3">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 hidden lg:block animate-fadeInUp animate-delay-1000">
        <div className="glass rounded-lg p-4">
          <Trophy className="w-8 h-8 text-yellow-400 mb-2" />
          <div className="text-sm font-medium">Excellence</div>
          <div className="text-xs text-blue-200">in Service</div>
        </div>
      </div>

      <div className="absolute top-32 right-10 hidden lg:block animate-fadeInUp animate-delay-1200">
        <div className="glass rounded-lg p-4">
          <Users className="w-8 h-8 text-green-400 mb-2" />
          <div className="text-sm font-medium">Community</div>
          <div className="text-xs text-blue-200">Focused</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
