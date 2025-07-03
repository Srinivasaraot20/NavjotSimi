"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BookOpen, ExternalLink, Play, Users, Star, Clock, FileText, Target, Award, CheckCircle, Timer, Brain, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function MockTestsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mockTestPlatforms = [
    {
      id: 1,
      name: "EduRev UPSC Prelims Mock Tests",
      description: "Comprehensive mock tests for UPSC Prelims with detailed analysis and performance tracking",
      url: "https://edurev.in/tests/10048/Mock-Test-for-UPSC-Prelims",
      features: [
        "10,000+ Practice Questions",
        "Previous Year Papers",
        "Detailed Solutions",
        "Performance Analytics",
        "All India Standing",
        "Subject-wise Tests"
      ],
      rating: 4.8,
      users: "50K+",
      tests: "500+",
      category: "prelims",
      difficulty: "All Levels",
      price: "Free & Paid",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Mockers.in Civil Service Mock Tests",
      description: "Specialized mock tests for civil service examination with comprehensive coverage of all subjects",
      url: "https://www.mockers.in/exam/civil-service-examination-mock-test",
      features: [
        "Full-length Mock Tests",
        "Subject-wise Practice",
        "Instant Results",
        "Detailed Analysis",
        "Time Management Tips",
        "Expert Guidance"
      ],
      rating: 4.7,
      users: "30K+",
      tests: "300+",
      category: "comprehensive",
      difficulty: "Intermediate to Advanced",
      price: "Free & Premium",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "TheIASHub Free Resources",
      description: "Comprehensive collection of free UPSC resources including mock tests, study materials, and guidance",
      url: "https://theiashub.com/free-resources",
      features: [
        "Free Study Materials",
        "Mock Test Series",
        "Current Affairs",
        "Previous Year Papers",
        "Strategy Articles",
        "Expert Tips"
      ],
      rating: 4.9,
      users: "100K+",
      tests: "1000+",
      category: "resources",
      difficulty: "All Levels",
      price: "Completely Free",
      image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  const additionalResources = [
    {
      title: "UPSC Prelims Test Series 2024",
      description: "Complete test series with 50+ mock tests covering entire syllabus",
      link: "https://edurev.in/tests/upsc-prelims-2024",
      type: "Test Series",
      difficulty: "All Levels"
    },
    {
      title: "Current Affairs Mock Tests",
      description: "Monthly current affairs tests with latest updates and analysis",
      link: "https://edurev.in/tests/current-affairs-upsc",
      type: "Current Affairs",
      difficulty: "Intermediate"
    },
    {
      title: "CSAT Practice Tests",
      description: "Comprehensive CSAT preparation with quantitative and reasoning questions",
      link: "https://mockers.in/exam/csat-mock-test",
      type: "CSAT",
      difficulty: "Beginner to Advanced"
    },
    {
      title: "Mains Answer Writing Practice",
      description: "Structured answer writing practice with expert evaluation",
      link: "https://theiashub.com/mains-practice",
      type: "Mains",
      difficulty: "Advanced"
    },
    {
      title: "Interview Preparation Mock",
      description: "Personality test preparation with mock interview sessions",
      link: "https://theiashub.com/interview-prep",
      type: "Interview",
      difficulty: "Advanced"
    },
    {
      title: "Subject-wise Test Series",
      description: "Individual subject tests for focused preparation",
      link: "https://edurev.in/tests/subject-wise-upsc",
      type: "Subject Tests",
      difficulty: "All Levels"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Tests', count: mockTestPlatforms.length },
    { id: 'prelims', label: 'Prelims', count: 1 },
    { id: 'comprehensive', label: 'Comprehensive', count: 1 },
    { id: 'resources', label: 'Free Resources', count: 1 }
  ];

  const filteredPlatforms = selectedCategory === 'all' 
    ? mockTestPlatforms 
    : mockTestPlatforms.filter(platform => platform.category === selectedCategory);

  const handleTestAccess = (url: string, name: string) => {
    // Track test access
    const accessData = {
      platform: name,
      accessedAt: new Date().toISOString(),
      userId: localStorage.getItem('studentSession') ? JSON.parse(localStorage.getItem('studentSession') || '{}').id : 'anonymous'
    };
    
    localStorage.setItem(`test_access_${Date.now()}`, JSON.stringify(accessData));
    
    // Open test platform
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
              Mock Tests & Practice
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              UPSC Mock Tests Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Access the best mock test platforms for UPSC preparation. Practice with thousands of questions, 
              get detailed analysis, and track your progress with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                <Target className="w-5 h-5 mr-2" />
                Start Practice Tests
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                <Brain className="w-5 h-5 mr-2" />
                View All Resources
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-300">Mock Tests Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">180K+</div>
              <div className="text-gray-300">Students Practicing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Access Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className={`mb-12 ${isVisible ? 'animate-fadeInUp animate-delay-400' : 'opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id 
                      ? 'bg-purple-600 text-white' 
                      : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2 bg-slate-700 text-slate-300">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Mock Test Platforms */}
          <div className={`grid lg:grid-cols-3 gap-8 mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-600' : 'opacity-0'}`}>
            {filteredPlatforms.map((platform) => (
              <Card key={platform.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass overflow-hidden">
                <div className="relative">
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-500 text-white">{platform.category.toUpperCase()}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-slate-900/80 backdrop-blur-sm rounded-full p-2">
                      <Target className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight text-white">
                    {platform.name}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-yellow-400 font-medium">{platform.rating}</span>
                    </div>
                    <span className="text-gray-400">({platform.users} users)</span>
                    <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                      {platform.tests} tests
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {platform.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                    <div>
                      <span className="text-gray-400">Difficulty:</span>
                      <p className="text-white font-medium">{platform.difficulty}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Pricing:</span>
                      <p className="text-white font-medium">{platform.price}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-white mb-2 text-sm">Key Features:</h5>
                    <ul className="space-y-1">
                      {platform.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={() => handleTestAccess(platform.url, platform.name)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Start Tests
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                      onClick={() => {
                        navigator.clipboard.writeText(platform.url);
                        alert('Link copied to clipboard!');
                      }}
                    >
                      📋 Copy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Resources */}
          <div className={`${isVisible ? 'animate-fadeInUp animate-delay-800' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Additional Practice Resources
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalResources.map((resource, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-purple-500/20 p-3 rounded-lg">
                        <FileText className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2 leading-tight">
                          {resource.title}
                        </h4>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                            {resource.type}
                          </Badge>
                          <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                            {resource.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={() => handleTestAccess(resource.link, resource.title)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Access Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Study Tips */}
          <div className={`mt-20 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 glass ${isVisible ? 'animate-fadeInUp animate-delay-1000' : 'opacity-0'}`}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                🎯 Mock Test Strategy Tips
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Maximize your mock test performance with these expert strategies from Dr. Navjot Simi IPS
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Timer,
                  title: "Time Management",
                  tip: "Practice with strict time limits. Aim to complete Prelims in 1.5 hours to have buffer time for review."
                },
                {
                  icon: Brain,
                  title: "Smart Guessing",
                  tip: "Use elimination technique. If you can eliminate 2 options, guessing becomes favorable due to negative marking."
                },
                {
                  icon: TrendingUp,
                  title: "Performance Analysis",
                  tip: "Analyze every mock test. Focus on weak areas and track improvement over time."
                },
                {
                  icon: Target,
                  title: "Accuracy Focus",
                  tip: "Maintain 65-70% accuracy in mocks. Quality over quantity - attempt only questions you're confident about."
                },
                {
                  icon: CheckCircle,
                  title: "Regular Practice",
                  tip: "Take at least 2-3 mock tests per week. Consistency in practice leads to better performance."
                },
                {
                  icon: Award,
                  title: "Revision Strategy",
                  tip: "Review incorrect answers immediately. Make notes of concepts you missed for quick revision."
                }
              ].map((tip, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
                  <div className="flex items-center gap-3 mb-3">
                    <tip.icon className="w-6 h-6 text-purple-400" />
                    <h4 className="font-semibold text-white">{tip.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{tip.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}