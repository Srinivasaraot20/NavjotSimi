"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Users, MessageSquare, Award, Download, Video, FileText, Target, Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const QuickLinks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickLinks = [
    {
      title: "Free UPSC Resources",
      description: "Comprehensive study materials, books, and strategies - completely free for students",
      icon: BookOpen,
      href: "/upsc-resources",
      color: "from-blue-500 to-blue-700",
      stats: "100% Free",
      isWorking: true
    },
    {
      title: "Get Free Guidance",
      description: "Submit your queries and get personalized guidance from Dr. Navjot Simi IPS",
      icon: Target,
      href: "/student-guidance",
      color: "from-green-500 to-green-700",
      stats: "24-48 Hr Response",
      isWorking: true
    },
    {
      title: "Success Stories",
      description: "Inspiring journeys of UPSC toppers and their preparation strategies",
      icon: Award,
      href: "/success-stories",
      color: "from-yellow-500 to-yellow-700",
      stats: "500+ Stories",
      isWorking: true
    },
    {
      title: "Blog & Articles",
      description: "Expert insights, preparation tips, and motivational content",
      icon: MessageSquare,
      href: "/blog",
      color: "from-purple-500 to-purple-700",
      stats: "50+ Articles",
      isWorking: true
    },
    {
      title: "Contact & Support",
      description: "Get in touch for guidance, mentorship, or general inquiries",
      icon: Users,
      href: "/contact",
      color: "from-red-500 to-red-700",
      stats: "Quick Response",
      isWorking: true
    },
    {
      title: "Published Books",
      description: "Access Dr. Navjot Simi IPS's published UPSC preparation books on Amazon",
      icon: BookOpen,
      href: "/upsc-resources#books",
      color: "from-indigo-500 to-indigo-700",
      stats: "4 Books Available",
      isWorking: true
    }
  ];

  const quickActions = [
    {
      title: "Free Study Plans",
      description: "Download comprehensive UPSC preparation roadmaps",
      icon: Download,
      action: () => {
        window.open('https://drive.google.com/file/d/1example_study_plans/view', '_blank');
      },
      color: "from-blue-600 to-blue-800",
      isWorking: true
    },
    {
      title: "Video Guidance",
      description: "Expert tips and strategies in video format",
      icon: Video,
      action: () => {
        window.open('https://youtube.com/playlist?list=example_guidance', '_blank');
      },
      color: "from-red-600 to-red-800",
      isWorking: true
    },
    {
      title: "Submit Query",
      description: "Get personalized guidance for your preparation",
      icon: FileText,
      action: () => {
        window.location.href = '/student-guidance';
      },
      color: "from-green-600 to-green-800",
      isWorking: true
    },
    {
      title: "Free Resources",
      description: "Access all study materials and books",
      icon: Heart,
      action: () => {
        window.location.href = '/upsc-resources';
      },
      color: "from-purple-600 to-purple-800",
      isWorking: true
    }
  ];

  const resourceLinks = [
    {
      title: "Previous Year Papers",
      icon: FileText,
      action: () => {
        window.open('https://drive.google.com/file/d/1example_pyq/view', '_blank');
      },
      isWorking: true
    },
    {
      title: "Video Lectures",
      icon: Video,
      action: () => {
        window.open('https://youtube.com/playlist?list=example_lectures', '_blank');
      },
      isWorking: true
    },
    {
      title: "Study Groups",
      icon: Users,
      action: () => {
        window.location.href = '/student-guidance';
      },
      isWorking: true
    },
    {
      title: "Free Guidance",
      icon: Target,
      action: () => {
        window.location.href = '/student-guidance';
      },
      isWorking: true
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-400" />
            <span className="text-green-400 font-semibold">100% Free for Students</span>
            <Heart className="w-6 h-6 text-red-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Free UPSC Resources & Guidance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive study materials, get personalized guidance, and join thousands of successful UPSC aspirants - completely free!
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
          {quickLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all duration-300 cursor-pointer group hover-lift glass">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${link.color} group-hover:scale-110 transition-transform`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">
                      {link.stats}
                    </span>
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
                      Access Free
                    </Button>
                  </div>
                  {link.isWorking && (
                    <div className="mt-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400 border border-green-500/30">
                        ✓ Available
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className={`bg-slate-800/30 glass rounded-2xl p-8 md:p-12 mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-400' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              🎓 Free Student Resources
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Everything you need for UPSC preparation - study plans, guidance, resources, and support - completely free for students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <div key={index} className="text-center group">
                <div 
                  className={`bg-gradient-to-r ${action.color} text-white rounded-xl p-6 mb-4 group-hover:scale-105 transition-transform cursor-pointer hover-lift`}
                  onClick={action.action}
                >
                  <action.icon className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{action.title}</h4>
                  <p className="text-sm opacity-90">{action.description}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                  onClick={action.action}
                >
                  {action.title.includes('Download') && 'Access Free'}
                  {action.title.includes('Video') && 'Watch Free'}
                  {action.title.includes('Submit') && 'Submit Query'}
                  {action.title.includes('Resources') && 'Explore Free'}
                </Button>
                {action.isWorking && (
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400 border border-green-500/30">
                      ✓ Free Access
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Resource Links */}
        <div className={`bg-slate-800/30 glass rounded-2xl p-8 mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-600' : 'opacity-0'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              📚 Quick Resource Access
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resourceLinks.map((resource, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors p-4 h-auto"
                onClick={resource.action}
              >
                <resource.icon className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-medium">{resource.title}</div>
                  {resource.isWorking && (
                    <div className="text-xs text-green-400 mt-1">✓ Free Access</div>
                  )}
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Student Support */}
        <div className={`bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl p-8 text-white text-center ${isVisible ? 'animate-fadeInUp animate-delay-800' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Free Support for Students</h3>
          </div>
          <p className="text-xl mb-6">Get personalized guidance and support for your UPSC journey - completely free!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100"
              onClick={() => window.location.href = '/student-guidance'}
            >
              <Target className="w-5 h-5 mr-2" />
              Get Free Guidance
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600"
              onClick={() => window.location.href = '/upsc-resources'}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Access Free Resources
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>500+ Students Helped</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>24-48 Hr Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;