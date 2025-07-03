"use client";

import { useState } from 'react';
import { BookOpen, Download, Play, Users, Star, Clock, FileText, Video } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'prelims', label: 'Prelims' },
    { id: 'mains', label: 'Mains' },
    { id: 'interview', label: 'Interview' },
    { id: 'optional', label: 'Optional Subjects' }
  ];

  const resources = [
    {
      id: 1,
      title: "Complete Prelims Strategy Guide 2024",
      description: "Comprehensive guide covering all subjects with previous year analysis",
      category: "prelims",
      type: "pdf",
      downloads: 2500,
      rating: 4.9,
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Answer Writing Masterclass",
      description: "Learn the art of effective answer writing for mains examination",
      category: "mains",
      type: "video",
      downloads: 1800,
      rating: 4.8,
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Interview Success Stories & Tips",
      description: "Real experiences and expert tips for personality test preparation",
      category: "interview",
      type: "pdf",
      downloads: 1500,
      rating: 4.7,
      image: "https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Current Affairs Monthly Compilation",
      description: "Latest current affairs with analysis for both prelims and mains",
      category: "prelims",
      type: "pdf",
      downloads: 3200,
      rating: 4.9,
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 5,
      title: "Public Administration Optional Guide",
      description: "Complete syllabus coverage with previous year questions",
      category: "optional",
      type: "pdf",
      downloads: 980,
      rating: 4.6,
      image: "https://images.pexels.com/photos/5838731/pexels-photo-5838731.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Ethics Case Study Analysis",
      description: "Real-life case studies with detailed solutions and approach",
      category: "mains",
      type: "video",
      downloads: 1200,
      rating: 4.8,
      image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      featured: false
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  const stats = [
    { icon: Download, number: "50K+", label: "Downloads" },
    { icon: Users, number: "500+", label: "Students Guided" },
    { icon: Star, number: "4.8", label: "Average Rating" },
    { icon: Clock, number: "24/7", label: "Access" }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            UPSC Education Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive resources, expert guidance, and proven strategies to help you succeed in your UPSC journey
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  {resource.featured && (
                    <Badge className="bg-yellow-500 text-white">Featured</Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    {resource.type === 'pdf' ? (
                      <FileText className="w-5 h-5 text-red-600" />
                    ) : (
                      <Video className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{resource.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    {resource.type === 'pdf' ? 'Download PDF' : 'Watch Video'}
                  </Button>
                  <Button variant="outline" size="sm">
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Study Tips Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Proven Study Strategies
              </h3>
              <div className="space-y-4">
                {[
                  "Create a structured study plan with daily targets",
                  "Focus on conceptual clarity over rote memorization",
                  "Practice answer writing regularly for mains",
                  "Stay updated with current affairs daily",
                  "Take regular mock tests and analyze performance",
                  "Maintain physical and mental well-being"
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Need Personalized Guidance?
                </h4>
                <p className="text-gray-600 mb-6">
                  Get one-on-one mentorship and customized study plans
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Book Mentoring Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;