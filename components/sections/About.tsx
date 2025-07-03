"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Trophy, GraduationCap, Heart, Target, ChevronRight, Award, Users, BookOpen, ArrowRight, Play, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalInfo = {
    fullName: "Dr. Navjot Simi IPS",
    designation: "Indian Police Service (IPS) Officer",
    batch: "2018 Batch",
    cadre: "Bihar Cadre",
    education: "BDS (Bachelor of Dental Surgery)",
    specialization: "Community Policing & Women Safety",
    currentPosting: "Commandant, Bihar Military Police (BMP) 8, Begusarai",
    hometown: "Gurdaspur, Punjab",
  };

  const keyHighlights = [
    {
      icon: GraduationCap,
      title: "Dental Background",
      description: "BDS from Baba Jaswant Singh Dental Hospital and Research Institute, Ludhiana",
      color: "text-blue-400"
    },
    {
      icon: Heart,
      title: "Women Empowerment",
      description: "Champion of women's rights and safety initiatives",
      color: "text-pink-400"
    },
    {
      icon: Users,
      title: "Community Leader",
      description: "Leading community policing and youth engagement programs",
      color: "text-green-400"
    }
  ];

  const achievements = [
    "Successfully transitioned from dental profession to civil services",
    "Currently serving as Commandant, Bihar Military Police (BMP) 8, Begusarai",
    "Married to IAS officer Tushar Singla (District Magistrate, Begusarai)",
    "Mother to son Miraan",
    "Active social media presence inspiring UPSC aspirants",
    "Advocate for women's safety and empowerment",
    "Mentored numerous UPSC aspirants from diverse backgrounds"
  ];

  const featuredVideos = [
    {
      id: 1,
      title: "IPS Navjot Simi IPS - Inspiring Journey from Dentist to IPS",
      url: "https://youtu.be/_pU7hZxSH9k?si=fyyRhDsskgqqHyZW",
      thumbnail: "https://img.youtube.com/vi/_pU7hZxSH9k/maxresdefault.jpg",
      description: "Complete journey and inspiration for UPSC aspirants",
      duration: "15:30"
    },
    {
      id: 2,
      title: "UPSC Interview Experience - IPS Navjot Simi IPS",
      url: "https://youtu.be/GPjamyaTF-k?si=-HWsr_Ngdi1cSh85",
      thumbnail: "https://img.youtube.com/vi/GPjamyaTF-k/maxresdefault.jpg",
      description: "Detailed interview experience and preparation tips",
      duration: "12:45"
    },
    {
      id: 3,
      title: "Women in Police Force - IPS Navjot Simi IPS",
      url: "https://youtu.be/AlRnb4NnAO4?si=Co3oILQyvuvFwH48",
      thumbnail: "https://img.youtube.com/vi/AlRnb4NnAO4/maxresdefault.jpg",
      description: "Challenges and opportunities for women in policing",
      duration: "18:20"
    },
    {
      id: 4,
      title: "UPSC Preparation Strategy - IPS Navjot Simi IPS",
      url: "https://youtu.be/BsbEZstFzTk?si=NVi6bx0qpr1829Vq",
      thumbnail: "https://img.youtube.com/vi/BsbEZstFzTk/maxresdefault.jpg",
      description: "Complete preparation strategy and study plan",
      duration: "22:15"
    }
  ];

  const additionalContent = [
    "Born on December 21, 1987, in Gurdaspur, Punjab",
    "Earned BDS degree from Baba Jaswant Singh Dental Hospital, Ludhiana",
    "Practiced dentistry before pursuing civil services",
    "Allotted Bihar cadre and trained at SVPNPA, Hyderabad",
    "Currently posted as Commandant, Bihar Military Police (BMP) 8, Begusarai",
    "Married to IAS Tushar Singla, District Magistrate of Begusarai",
    "Active on social media inspiring UPSC aspirants"
  ];

  const journeyNumbers = [
    { number: "6+", label: "Years of Service", description: "Dedicated to Nation" },
    { number: "500+", label: "Aspirants Mentored", description: "UPSC Success Stories" },
    { number: "1st", label: "Attempt Success", description: "UPSC Achievement" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Service",
      description: "Serving the community with empathy, understanding, and genuine care for citizen welfare"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Committed to personal and professional growth while sharing knowledge with others"
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Upholding moral principles and ethical conduct in every aspect of professional and personal life"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'videos', label: 'Videos' },
    { id: 'values', label: 'Core Values' }
  ];

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">About Dr. Navjot Simi IPS</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Journey of Perseverance & Service
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From dental professional to IPS officer - a story of determination, 
            resilience, and unwavering commitment to serving the nation and empowering others.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image & Quick Info */}
          <div className={`space-y-8 ${isVisible ? 'animate-slideInLeft animate-delay-200' : 'opacity-0'}`}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl glass">
                <Image
                  src="https://tse2.mm.bing.net/th/id/OIP.ismbIBOfLbmlp_ZwOmipYAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Dr. Navjot Simi IPS"
                  width={600}
                  height={800}
                  className="object-contain w-full h-[500px] bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-lg p-4">
                    <h3 className="font-bold text-white">Dr. Navjot Simi IPS</h3>
                    <p className="text-sm text-gray-300">Commandant, BMP 8 - Begusarai, Bihar</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">2018 Batch</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {keyHighlights.map((highlight, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-slate-700 flex items-center justify-center ${highlight.color}`}>
                        <highlight.icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-white mb-2 text-sm">{highlight.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Personal Information + Tabbed Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slideInRight animate-delay-400' : 'opacity-0'}`}>  
            {/* Personal Information */}
            <Card className="bg-blue-500/10 border-blue-500/30 glass">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Personal Information</h3>
                <div className="space-y-3">
                  {Object.entries(personalInfo).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-blue-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="font-semibold text-white text-right max-w-xs">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white' 
                      : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-96">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Professional Overview</h3>
                  <div className="prose prose-lg text-gray-300">
                    <p className="leading-relaxed">
                      Dr. Navjot Simi IPS is a distinguished officer of the Indian Police Service, 
                      known for her inspiring journey from a dental professional to civil services. Born on 
                      December 21, 1987, in Gurdaspur, Punjab, her story exemplifies perseverance 
                      and determination.
                    </p>
                    <p className="leading-relaxed">
                      After completing her BDS from Baba Jaswant Singh Dental Hospital and Research 
                      Institute in Ludhiana, she initially worked as a dentist. However, driven by 
                      a desire to serve society in a broader capacity, she decided to prepare for 
                      the UPSC examination.
                    </p>
                    <p className="leading-relaxed">
                      Her dedication and hard work paid off when she cleared the UPSC exam in her 
                      first attempt in 2018. Currently serving as Commandant of 
                      Bihar Military Police (BMP) 8 in Begusarai, Bihar, she continues to inspire 
                      UPSC aspirants while excelling in her professional duties. She is married to 
                      IAS officer Tushar Singla, who serves as the District Magistrate of Begusarai.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors glass">
                        <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional Content */}
                  {showMoreContent && (
                    <div className="space-y-4 animate-fadeInUp">
                      <h4 className="text-xl font-bold text-white">Personal Journey Highlights</h4>
                      {additionalContent.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                          <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setShowMoreContent(!showMoreContent)}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    {showMoreContent ? 'Show Less' : 'View Complete Journey'}
                  </Button>
                </div>
              )}

              {activeTab === 'videos' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Featured Videos</h3>
                    <Button 
                      variant="outline" 
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                      onClick={() => window.open('https://www.youtube.com/results?search_query=navjot+simi+ips+interview', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View All Videos
                    </Button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {featuredVideos.map((video) => (
                      <Card key={video.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass overflow-hidden group cursor-pointer"
                            onClick={() => handleVideoClick(video.url)}>
                        <div className="relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                              <Play className="w-8 h-8 text-white fill-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {video.title}
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {video.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-center">
                    <h4 className="text-lg font-semibold text-red-400 mb-3">
                      🎥 Complete Video Collection
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Watch all interviews and guidance videos by Dr. Navjot Simi IPS on YouTube
                    </p>
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.open('https://www.youtube.com/results?search_query=navjot+simi+ips+interview', '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch All Videos on YouTube
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Core Values & Principles</h3>
                  <div className="grid gap-6">
                    {values.map((value, index) => (
                      <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="bg-blue-500/20 p-3 rounded-lg">
                              <value.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-2">
                                {value.title}
                              </h4>
                              <p className="text-gray-300 leading-relaxed">
                                {value.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Journey by Numbers - Animated */}
        <div className={`mt-20 ${isVisible ? 'animate-fadeInUp animate-delay-600' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Journey by Numbers
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {journeyNumbers.map((stat, index) => (
              <div key={index} className={`text-center animate-countUp animate-delay-${(index + 1) * 100}`}>
                <div className="bg-slate-800/50 glass rounded-2xl p-6 hover-lift">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;