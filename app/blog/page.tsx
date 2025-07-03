"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, User, Clock, ArrowRight, Tag, Search, BookOpen, Star, Eye, Filter, Download, Video, X } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  views: number;
  downloads: number;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', label: 'All Posts', count: 52 },
    { id: 'prelims', label: 'Prelims Strategy', count: 12 },
    { id: 'mains', label: 'Mains Preparation', count: 10 },
    { id: 'interview', label: 'Interview Tips', count: 8 },
    { id: 'motivation', label: 'Motivation', count: 6 },
    { id: 'current-affairs', label: 'Current Affairs', count: 8 },
    { id: 'ips-specific', label: 'IPS Journey', count: 8 }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How to Become IPS: Complete Roadmap from Medical Background",
      excerpt: "Step-by-step guide for transitioning from medical profession to IPS, including eligibility, preparation strategy, and training process.",
      fullContent: `
        <h2>Introduction: From Healing Bodies to Protecting Society</h2>
        <p>The journey from medicine to the Indian Police Service represents one of the most challenging yet rewarding career transitions in civil services. As someone who successfully made this transition, achieving AIR 3 in UPSC 2008, I understand the unique challenges and opportunities that medical professionals face when pursuing IPS.</p>

        <h2>Why Choose IPS After Medicine?</h2>
        <p>Medical professionals bring unique skills to policing:</p>
        <ul>
          <li><strong>Analytical Thinking:</strong> Medical training develops systematic problem-solving abilities crucial for investigation and crime analysis.</li>
          <li><strong>Crisis Management:</strong> Experience in emergency medical situations translates well to law enforcement crisis scenarios.</li>
          <li><strong>Human Psychology Understanding:</strong> Medical background provides insights into human behavior, essential for community policing.</li>
          <li><strong>Ethical Foundation:</strong> The Hippocratic Oath's emphasis on service aligns with the IPS motto of service to society.</li>
        </ul>

        <h2>Eligibility Criteria for IPS</h2>
        <h3>Educational Qualifications</h3>
        <p>Medical graduates (MBBS, BDS, AYUSH) are eligible for UPSC Civil Services. Your medical degree provides a strong foundation for the examination.</p>

        <h3>Age Limits</h3>
        <ul>
          <li>General Category: 21-32 years</li>
          <li>OBC: 21-35 years</li>
          <li>SC/ST: 21-37 years</li>
        </ul>

        <h3>Physical Standards for IPS</h3>
        <p>Unlike other civil services, IPS has specific physical requirements:</p>
        <ul>
          <li><strong>Height:</strong> Male - 165 cm, Female - 150 cm (relaxations for certain categories)</li>
          <li><strong>Chest:</strong> Male - 84 cm (unexpanded), 89 cm (expanded)</li>
          <li><strong>Vision:</strong> 6/6 or 6/9 in better eye, 6/12 or 6/9 in worse eye</li>
          <li><strong>Medical Fitness:</strong> Comprehensive medical examination</li>
        </ul>

        <h2>UPSC Preparation Strategy for Medical Professionals</h2>
        <h3>Leveraging Medical Background</h3>
        <p>Your medical education provides advantages in several areas:</p>
        <ul>
          <li><strong>Science & Technology:</strong> Strong foundation in biological sciences</li>
          <li><strong>Ethics:</strong> Medical ethics knowledge applicable to administrative ethics</li>
          <li><strong>Current Affairs:</strong> Health policy, medical breakthroughs, pandemic management</li>
          <li><strong>Essay Writing:</strong> Experience in case presentations helps in structured writing</li>
        </ul>

        <h3>Time Management for Working Professionals</h3>
        <p>Balancing medical practice with UPSC preparation requires strategic planning:</p>
        <ul>
          <li><strong>Early Morning Study:</strong> 4-6 AM for focused preparation</li>
          <li><strong>Lunch Break Revision:</strong> Quick current affairs updates</li>
          <li><strong>Weekend Intensive Study:</strong> 8-10 hours on weekends</li>
          <li><strong>Leave Planning:</strong> Strategic leave for intensive preparation phases</li>
        </ul>

        <h2>Subject-wise Preparation Strategy</h2>
        <h3>General Studies Paper I</h3>
        <ul>
          <li><strong>History:</strong> Focus on modern Indian history, freedom struggle</li>
          <li><strong>Geography:</strong> Physical and human geography, disaster management</li>
          <li><strong>Polity:</strong> Constitutional framework, governance structures</li>
          <li><strong>Economics:</strong> Basic economic concepts, government schemes</li>
        </ul>

        <h3>General Studies Paper II</h3>
        <ul>
          <li><strong>Governance:</strong> Public administration, e-governance</li>
          <li><strong>Social Justice:</strong> Government policies, welfare schemes</li>
          <li><strong>International Relations:</strong> India's foreign policy, global issues</li>
        </ul>

        <h3>General Studies Paper III</h3>
        <ul>
          <li><strong>Science & Technology:</strong> Leverage your medical background</li>
          <li><strong>Environment:</strong> Ecology, climate change, conservation</li>
          <li><strong>Security:</strong> Internal security, disaster management</li>
          <li><strong>Economics:</strong> Economic development, government budgeting</li>
        </ul>

        <h3>General Studies Paper IV (Ethics)</h3>
        <ul>
          <li><strong>Ethics & Integrity:</strong> Apply medical ethics principles</li>
          <li><strong>Case Studies:</strong> Use medical case study approach</li>
          <li><strong>Public Service Values:</strong> Connect with medical service ideals</li>
        </ul>

        <h2>Optional Subject Selection</h2>
        <p>Medical professionals have several good optional choices:</p>
        <ul>
          <li><strong>Medical Science:</strong> Direct advantage, but limited scope</li>
          <li><strong>Public Administration:</strong> Highly relevant for civil services</li>
          <li><strong>Psychology:</strong> Useful for understanding human behavior</li>
          <li><strong>Sociology:</strong> Relevant for community policing</li>
        </ul>

        <h2>Physical Preparation for IPS</h2>
        <h3>Fitness Regimen</h3>
        <p>Start physical preparation early:</p>
        <ul>
          <li><strong>Cardiovascular Fitness:</strong> Running, cycling, swimming</li>
          <li><strong>Strength Training:</strong> Basic weight training, bodyweight exercises</li>
          <li><strong>Flexibility:</strong> Yoga, stretching routines</li>
          <li><strong>Sports:</strong> Team sports for coordination and teamwork</li>
        </ul>

        <h3>Medical Examination Preparation</h3>
        <p>Ensure you meet all medical standards:</p>
        <ul>
          <li>Regular health check-ups</li>
          <li>Vision care and eye exercises</li>
          <li>Dental health maintenance</li>
          <li>Stress management for overall health</li>
        </ul>

        <h2>Interview Preparation</h2>
        <h3>Highlighting Medical Background</h3>
        <p>Present your medical experience as an asset:</p>
        <ul>
          <li><strong>Service Orientation:</strong> Emphasize your commitment to serving people</li>
          <li><strong>Crisis Management:</strong> Share experiences handling medical emergencies</li>
          <li><strong>Ethical Decision Making:</strong> Discuss medical ethics applications</li>
          <li><strong>Continuous Learning:</strong> Highlight adaptability and learning mindset</li>
        </ul>

        <h2>Training at National Police Academy</h2>
        <h3>What to Expect</h3>
        <p>The training at SVPNPA, Hyderabad includes:</p>
        <ul>
          <li><strong>Academic Training:</strong> Law, investigation, administration</li>
          <li><strong>Physical Training:</strong> Drill, weapons training, outdoor activities</li>
          <li><strong>Practical Training:</strong> Field attachments, case studies</li>
          <li><strong>Personality Development:</strong> Leadership, communication skills</li>
        </ul>

        <h2>Career Progression in IPS</h2>
        <h3>Ranks and Responsibilities</h3>
        <ul>
          <li><strong>Assistant Superintendent of Police (ASP):</strong> Entry level, district postings</li>
          <li><strong>Superintendent of Police (SP):</strong> District head, major responsibilities</li>
          <li><strong>Deputy Inspector General (DIG):</strong> Range/zone command</li>
          <li><strong>Inspector General (IG):</strong> State-level positions</li>
          <li><strong>Additional Director General (ADG):</strong> Senior state positions</li>
          <li><strong>Director General of Police (DGP):</strong> State police head</li>
        </ul>

        <h2>Specialization Opportunities</h2>
        <p>IPS officers can specialize in various fields:</p>
        <ul>
          <li><strong>Crime Investigation:</strong> CID, CBI postings</li>
          <li><strong>Intelligence:</strong> IB, RAW opportunities</li>
          <li><strong>Traffic Management:</strong> Urban traffic planning</li>
          <li><strong>Cyber Crime:</strong> Digital investigation and prevention</li>
          <li><strong>VIP Security:</strong> SPG, security arrangements</li>
          <li><strong>Training:</strong> Police training institutions</li>
        </ul>

        <h2>Challenges and How to Overcome Them</h2>
        <h3>Common Challenges</h3>
        <ul>
          <li><strong>Career Change Anxiety:</strong> Leaving established medical practice</li>
          <li><strong>Physical Demands:</strong> Adapting to physical requirements</li>
          <li><strong>Family Concerns:</strong> Irregular hours, transfers</li>
          <li><strong>Social Perception:</strong> Explaining career change decision</li>
        </ul>

        <h3>Solutions</h3>
        <ul>
          <li><strong>Gradual Transition:</strong> Reduce medical practice gradually</li>
          <li><strong>Family Support:</strong> Involve family in decision-making</li>
          <li><strong>Peer Network:</strong> Connect with other medical professionals in civil services</li>
          <li><strong>Clear Vision:</strong> Maintain focus on service goals</li>
        </ul>

        <h2>Success Mantras</h2>
        <ul>
          <li><strong>Consistency:</strong> Regular study schedule despite work pressure</li>
          <li><strong>Smart Work:</strong> Leverage medical knowledge effectively</li>
          <li><strong>Physical Fitness:</strong> Start early and maintain throughout</li>
          <li><strong>Mock Tests:</strong> Regular practice and evaluation</li>
          <li><strong>Current Affairs:</strong> Daily reading and note-making</li>
          <li><strong>Answer Writing:</strong> Practice structured responses</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The transition from medicine to IPS is challenging but immensely rewarding. Your medical background provides unique advantages that, when properly leveraged, can lead to success in both UPSC examination and IPS career. Remember, the skills that made you a good doctor - dedication, service orientation, analytical thinking, and ethical decision-making - are exactly what make an excellent IPS officer.</p>

        <p>The journey requires sacrifice, dedication, and unwavering commitment, but the opportunity to serve the nation in a different capacity makes every effort worthwhile. As you embark on this journey, remember that you're not just changing careers; you're expanding your service to society from healing individuals to protecting and serving entire communities.</p>
      `,
      author: "Dr. Navjot Simi IPS",
      date: "2024-01-25",
      readTime: "15 min read",
      category: "ips-specific",
      tags: ["IPS", "Career Change", "Medical Background", "UPSC"],
      image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: true,
      views: 3200,
      downloads: 450
    },
    {
      id: 2,
      title: "Physical Fitness Preparation for IPS: Complete Training Guide",
      excerpt: "Comprehensive physical fitness plan, medical standards, and training tips specifically designed for IPS aspirants.",
      fullContent: `
        <h2>Introduction: The Physical Dimension of IPS</h2>
        <p>Physical fitness is not just a requirement for IPS selection; it's a way of life for police officers. Unlike other civil services, IPS demands both mental acuity and physical prowess. This comprehensive guide will help you prepare for the physical challenges of IPS selection and career.</p>

        <h2>Understanding IPS Physical Standards</h2>
        <h3>Height Requirements</h3>
        <ul>
          <li><strong>Male Candidates:</strong> Minimum 165 cm (relaxations available for certain categories)</li>
          <li><strong>Female Candidates:</strong> Minimum 150 cm (relaxations available for certain categories)</li>
          <li><strong>Tribal Areas:</strong> 160 cm for males, 145 cm for females</li>
          <li><strong>Northeastern States:</strong> 162.5 cm for males, 147.5 cm for females</li>
        </ul>

        <h2>12-Month Fitness Preparation Plan</h2>
        <h3>Months 1-3: Foundation Building</h3>
        <h4>Week 1-4: Basic Conditioning</h4>
        <ul>
          <li><strong>Running:</strong> 2-3 km daily at comfortable pace</li>
          <li><strong>Walking:</strong> 30-45 minutes brisk walking</li>
          <li><strong>Basic Exercises:</strong> Push-ups (10-15), sit-ups (15-20), squats (15-20)</li>
          <li><strong>Stretching:</strong> 15-20 minutes daily flexibility routine</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Physical fitness for IPS is not just about meeting minimum standards; it's about developing the physical and mental resilience needed for a demanding career in law enforcement. The journey requires dedication, consistency, and smart training approaches.</p>
      `,
      author: "Dr. Navjot Simi IPS",
      date: "2024-01-23",
      readTime: "12 min read",
      category: "ips-specific",
      tags: ["Physical Fitness", "IPS Training", "Medical Standards"],
      image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: true,
      views: 2800,
      downloads: 380
    },
    {
      id: 3,
      title: "Cracking UPSC Prelims: Smart Strategies for Beginners",
      excerpt: "Essential tips and proven strategies to clear UPSC Prelims examination in your first attempt with confidence.",
      fullContent: `
        <h2>Introduction: Your Gateway to Civil Services</h2>
        <p>The UPSC Preliminary Examination is your first step toward a career in civil services. As someone who achieved AIR 3 in the first attempt, I understand the challenges and opportunities that Prelims presents. This comprehensive guide will provide you with proven strategies to crack Prelims efficiently.</p>

        <h2>Understanding UPSC Prelims Structure</h2>
        <h3>Paper I: General Studies</h3>
        <ul>
          <li><strong>Duration:</strong> 2 hours</li>
          <li><strong>Questions:</strong> 100 questions</li>
          <li><strong>Marks:</strong> 200 marks (2 marks each)</li>
          <li><strong>Negative Marking:</strong> 1/3rd mark deducted for wrong answers</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Cracking UPSC Prelims requires a systematic approach, consistent effort, and smart strategies. The key is to build a strong foundation, practice extensively, and maintain a positive mindset throughout the preparation journey.</p>
      `,
      author: "Dr. Navjot Simi IPS",
      date: "2024-01-20",
      readTime: "8 min read",
      category: "prelims",
      tags: ["UPSC", "Prelims", "Strategy", "Beginners"],
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: true,
      views: 2400,
      downloads: 380
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const handleDownload = (postId: number) => {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
      // Simulate PDF download
      const link = document.createElement('a');
      link.href = `/blog-posts/${post.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
      link.download = `${post.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
      link.click();
      
      // Update download count
      post.downloads = (post.downloads || 0) + 1;
    }
  };

  const openFullArticle = (post: BlogPost) => {
    setSelectedArticle(post);
  };

  const closeFullArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Insights & Guidance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive articles, preparation strategies, and motivational content to guide your UPSC journey and IPS career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Articles
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Download className="w-5 h-5 mr-2" />
                Download Resources
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
              <div className="text-4xl font-bold text-blue-400 mb-2">52+</div>
              <div className="text-gray-300">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">15K+</div>
              <div className="text-gray-300">Total Reads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">8+</div>
              <div className="text-gray-300">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">4.8★</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search and Filter */}
          <div className={`mb-12 ${isVisible ? 'animate-fadeInUp animate-delay-400' : 'opacity-0'}`}>
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800 border-slate-600 text-white"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`${
                      selectedCategory === category.id 
                        ? 'bg-blue-600 text-white' 
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
          </div>

          {/* Featured Posts */}
          {selectedCategory === 'all' && !searchTerm && (
            <div className={`mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-600' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Featured Articles
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.slice(0, 3).map((post) => (
                  <Card key={post.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass overflow-hidden">
                    <div className="relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={240}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500 text-white">Featured</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-slate-900/80 backdrop-blur-sm rounded-full p-2">
                          {post.category === 'ips-specific' ? (
                            <Video className="w-5 h-5 text-blue-400" />
                          ) : (
                            <BookOpen className="w-5 h-5 text-blue-400" />
                          )}
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors leading-tight">
                        {post.title}
                      </h3>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-slate-600 text-slate-300 hover:bg-blue-600 hover:text-white"
                          onClick={() => openFullArticle(post)}
                        >
                          Read More
                        </Button>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-600 text-slate-300 hover:bg-green-600 hover:text-white"
                            onClick={() => handleDownload(post.id)}
                          >
                            <Download className="w-3 h-3 mr-1" />
                            PDF
                          </Button>
                          <span className="text-xs text-gray-500">{post.downloads} downloads</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-fadeInUp animate-delay-800' : 'opacity-0'}`}>
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass overflow-hidden group">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      post.category === 'ips-specific' ? 'bg-purple-600' :
                      post.category === 'prelims' ? 'bg-blue-600' :
                      post.category === 'mains' ? 'bg-green-600' :
                      post.category === 'interview' ? 'bg-yellow-600' :
                      post.category === 'motivation' ? 'bg-pink-600' :
                      'bg-indigo-600'
                    } text-white capitalize`}>
                      {post.category.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-slate-600 text-slate-300 hover:bg-blue-600 hover:text-white"
                      onClick={() => openFullArticle(post)}
                    >
                      Read More
                    </Button>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-slate-300 hover:bg-green-600 hover:text-white"
                        onClick={() => handleDownload(post.id)}
                      >
                        <Download className="w-3 h-3 mr-1" />
                        PDF
                      </Button>
                      <span className="text-xs text-gray-500">{post.views} views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {filteredPosts.length > 12 && (
            <div className="text-center mt-12">
              <Button variant="outline" className="px-8 py-3 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                Load More Articles
              </Button>
            </div>
          )}

          {/* Newsletter Subscription */}
          <div className={`mt-20 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 md:p-12 text-center glass ${isVisible ? 'animate-fadeInUp animate-delay-1000' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Latest Content
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly insights, preparation tips, and exclusive resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-slate-800 border-slate-600 text-white"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden border border-slate-700">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-2xl font-bold text-white">{selectedArticle.title}</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={closeFullArticle}
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {selectedArticle.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedArticle.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedArticle.readTime}
                </div>
              </div>
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent }}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}