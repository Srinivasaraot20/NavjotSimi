"use client";

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BookOpen, ExternalLink, Play, Users, Star, Clock, FileText, Video, Search, Filter, Heart, Award, Target, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function UPSCResources() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', count: 150 },
    { id: 'books', label: 'Published Books', count: 6 },
    { id: 'prelims', label: 'Prelims', count: 45 },
    { id: 'mains', label: 'Mains', count: 38 },
    { id: 'interview', label: 'Interview', count: 25 },
    { id: 'optional', label: 'Optional Subjects', count: 28 },
    { id: 'current-affairs', label: 'Current Affairs', count: 14 }
  ];

  const publishedBooks = [
    {
      id: 1,
      title: "GS Services Previous Years Question Papers (2024-2013) - Paper 1",
      description: "Elevate your UPSC CSE Mains preparation with this comprehensive collection of previous years' question papers, meticulously solved by distinguished civil servants Dr. Navjot Simi IPS and Tushar Singla IAS. This invaluable resource covers detailed topic-wise solutions for General Studies Paper 1, spanning 12 years of UPSC CSE Mains examinations.",
      amazonLink: "https://www.amazon.in/GS-Services-Previous-2024-2013-Question/dp/8196424167?ref_=ast_author_dp",
      storeLink: "https://www.amazon.in/stores/Navjot-Simi/author/B0FDL4HSF7?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      publisher: "UPSC Guide",
      features: [
        "12 years of solved papers (2013-2024)",
        "Topic-wise detailed solutions",
        "Strategic approach explanations",
        "Answer writing style guidance",
        "Marking scheme analysis"
      ],
      rating: 4.8,
      reviews: 245
    },
    {
      id: 2,
      title: "GS Services Previous Years Question Papers (2024-2013) - Paper 2",
      description: "Comprehensive collection covering General Studies Paper 2 with detailed solutions and strategic approaches by Dr. Navjot Simi IPS and Tushar Singla IAS. Perfect for understanding governance, polity, and social justice topics.",
      amazonLink: "https://www.amazon.in/GS-Services-Previous-2024-2013-Question/dp/8196424132/ref=sr_1_4?crid=3I0AY0J5QPWJ1&dib=eyJ2IjoiMSJ9.Fi7TmjRyyIWwTLFQsoEB6thMQ1xn4z5BNKS44L3eFQRs9MPmEDgBe4YHDb7WBBGoygHtcWyO9186wABYP4mdadku5UDKbJUTpZ1sZFsC3PE.ujm6mhaEemraZG0TeJLZPq0jnw2eUksc6rxwJ-rTTMQ&dib_tag=se&keywords=navjot+simi+book&qid=1751173293&sprefix=navjo%2Caps%2C263&sr=8-4",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      publisher: "UPSC Guide",
      features: [
        "Governance and administration focus",
        "Polity and constitution coverage",
        "Social justice and welfare schemes",
        "International relations insights",
        "Comparative analysis of answers"
      ],
      rating: 4.7,
      reviews: 189
    },
    {
      id: 3,
      title: "GS Services Previous Years Question Papers (2024-2013) - Paper 3",
      description: "Specialized coverage of General Studies Paper 3 focusing on technology, economic development, bio-diversity, environment, security and disaster management with expert solutions.",
      amazonLink: "https://www.amazon.in/GS-Services-Previous-2024-2013-Question/dp/8196424140/ref=sr_1_2?crid=3I0AY0J5QPWJ1&dib=eyJ2IjoiMSJ9.Fi7TmjRyyIWwTLFQsoEB6thMQ1xn4z5BNKS44L3eFQRs9MPmEDgBe4YHDb7WBBGoygHtcWyO9186wABYP4mdadku5UDKbJUTpZ1sZFsC3PE.ujm6mhaEemraZG0TeJLZPq0jnw2eUksc6rxwJ-rTTMQ&dib_tag=se&keywords=navjot+simi+book&qid=1751173293&sprefix=navjo%2Caps%2C263&sr=8-2",
      image: "https://images.pexels.com/photos/5838731/pexels-photo-5838731.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      publisher: "UPSC Guide",
      features: [
        "Science and technology coverage",
        "Economic development analysis",
        "Environment and biodiversity",
        "Security and disaster management",
        "Current affairs integration"
      ],
      rating: 4.9,
      reviews: 312
    },
    {
      id: 4,
      title: "GS Services Previous Years Question Papers (2024-2013) - Paper 4 (Ethics)",
      description: "Complete guide to Ethics, Integrity and Aptitude paper with real-life case studies, philosophical approaches, and practical solutions by experienced civil servants.",
      amazonLink: "https://www.amazon.in/GS-Services-Previous-2024-2013-Question/dp/8196424159",
      image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      publisher: "UPSC Guide",
      features: [
        "Ethics and moral philosophy",
        "Real-life case study analysis",
        "Integrity and aptitude questions",
        "Administrative ethics focus",
        "Practical approach to solutions"
      ],
      rating: 4.8,
      reviews: 267
    },
    {
      id: 5,
      title: "General Studies Paper I & II - Comprehensive Guide",
      description: "A comprehensive guide covering both General Studies Paper I and II with detailed explanations, practice questions, and strategic insights for UPSC CSE preparation.",
      amazonLink: "https://www.amazon.in/General-Studies-Paper-i-II/dp/B0CD43ZMHB/ref=sr_1_5?crid=3I0AY0J5QPWJ1&dib=eyJ2IjoiMSJ9.Fi7TmjRyyIWwTLFQsoEB6thMQ1xn4z5BNKS44L3eFQRs9MPmEDgBe4YHDb7WBBGoygHtcWyO9186wABYP4mdadku5UDKbJUTpZ1sZFsC3PE.ujm6mhaEemraZG0TeJLZPq0jnw2eUksc6rxwJ-rTTMQ&dib_tag=se&keywords=navjot+simi+book&qid=1751173293&sprefix=navjo%2Caps%2C263&sr=8-5",
      image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      publisher: "UPSC Guide",
      features: [
        "Combined coverage of Paper I & II",
        "Comprehensive topic explanations",
        "Practice questions with solutions",
        "Strategic preparation approach",
        "Updated content for latest syllabus"
      ],
      rating: 4.6,
      reviews: 156
    },
    {
      id: 6,
      title: "Prelims General Studies - Topicwise Explanation (2011-2023)",
      description: "Complete topicwise explanation of UPSC Prelims General Studies questions from 2011-2023, providing comprehensive analysis and strategic insights for effective preparation.",
      amazonLink: "https://www.amazon.in/Prelims-General-Topicwise-Explanation-2011-2023/dp/B0CD421KBT/ref=sr_1_6?crid=3I0AY0J5QPWJ1&dib=eyJ2IjoiMSJ9.Fi7TmjRyyIWwTLFQsoEB6thMQ1xn4z5BNKS44L3eFQRs9MPmEDgBe4YHDb7WBBGoygHtcWyO9186wABYP4mdadku5UDKbJUTpZ1sZFsC3PE.ujm6mhaEemraZG0TeJLZPq0jnw2eUksc6rxwJ-rTTMQ&dib_tag=se&keywords=navjot+simi+book&qid=1751173293&sprefix=navjo%2Caps%2C263&sr=8-6",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      publisher: "UPSC Guide",
      features: [
        "Topicwise question analysis (2011-2023)",
        "Detailed explanations for each question",
        "Pattern recognition and trends",
        "Strategic preparation insights",
        "Comprehensive Prelims coverage"
      ],
      rating: 4.7,
      reviews: 203
    }
  ];

  const freeResources = [
    {
      id: 1,
      title: "UPSC Prelims Strategy Guide 2024",
      description: "Comprehensive strategy guide for UPSC Prelims with subject-wise approach and time management tips",
      category: "prelims",
      type: "pdf",
      link: "https://drive.google.com/file/d/1example_prelims_guide/view",
      downloads: 15420,
      rating: 4.9,
      featured: true,
      author: "Dr. Navjot Simi IPS",
      lastUpdated: "2024-01-15"
    },
    {
      id: 2,
      title: "Answer Writing Masterclass Series",
      description: "Learn the art of effective answer writing for mains examination with real examples and evaluation techniques",
      category: "mains",
      type: "video",
      link: "https://youtube.com/playlist?list=example_answer_writing",
      downloads: 8750,
      rating: 4.8,
      featured: true,
      author: "Dr. Navjot Simi IPS",
      lastUpdated: "2024-01-10"
    },
    {
      id: 3,
      title: "Interview Success Stories & Mock Sessions",
      description: "Real experiences and expert tips for personality test preparation with mock interview recordings",
      category: "interview",
      type: "video",
      link: "https://youtube.com/playlist?list=example_interview_prep",
      downloads: 6200,
      rating: 4.7,
      featured: false,
      author: "Dr. Navjot Simi IPS",
      lastUpdated: "2024-01-08"
    },
    {
      id: 4,
      title: "Current Affairs Monthly Compilation - January 2024",
      description: "Latest current affairs with analysis for both prelims and mains, curated by experts",
      category: "current-affairs",
      type: "pdf",
      link: "https://drive.google.com/file/d/1example_current_affairs/view",
      downloads: 12800,
      rating: 4.9,
      featured: true,
      author: "Expert Team",
      lastUpdated: "2024-01-31"
    },
    {
      id: 5,
      title: "Geography Optional - Complete Notes",
      description: "Complete syllabus coverage with previous year questions and answer writing practice",
      category: "optional",
      type: "pdf",
      link: "https://drive.google.com/file/d/1example_geography_notes/view",
      downloads: 4500,
      rating: 4.6,
      featured: false,
      author: "Dr. Navjot Simi IPS",
      lastUpdated: "2023-12-20"
    },
    {
      id: 6,
      title: "Ethics Case Study Analysis Workshop",
      description: "Real-life case studies with detailed solutions and approach methodology",
      category: "mains",
      type: "video",
      link: "https://youtube.com/playlist?list=example_ethics_workshop",
      downloads: 5600,
      rating: 4.8,
      featured: false,
      author: "Dr. Navjot Simi IPS",
      lastUpdated: "2024-01-05"
    }
  ];

  const interviewTips = [
    {
      title: "Confidence Building Techniques",
      description: "Practical methods to build confidence and overcome nervousness during UPSC interview",
      link: "https://youtube.com/watch?v=example_confidence"
    },
    {
      title: "Current Affairs for Interview",
      description: "How to effectively use current affairs knowledge in personality test responses",
      link: "https://youtube.com/watch?v=example_current_affairs"
    },
    {
      title: "Body Language and Communication",
      description: "Master the art of non-verbal communication and effective presentation",
      link: "https://youtube.com/watch?v=example_body_language"
    },
    {
      title: "Handling Stress Questions",
      description: "Strategies to handle difficult and stress-inducing questions with composure",
      link: "https://youtube.com/watch?v=example_stress_questions"
    }
  ];

  const studyPlans = [
    {
      title: "12-Month Comprehensive Plan",
      description: "Complete UPSC preparation roadmap for beginners",
      duration: "12 months",
      difficulty: "Beginner",
      link: "https://drive.google.com/file/d/1example_12month_plan/view"
    },
    {
      title: "6-Month Intensive Plan",
      description: "Fast-track preparation for experienced candidates",
      duration: "6 months", 
      difficulty: "Advanced",
      link: "https://drive.google.com/file/d/1example_6month_plan/view"
    },
    {
      title: "3-Month Revision Plan",
      description: "Final revision strategy for exam preparation",
      duration: "3 months",
      difficulty: "Expert",
      link: "https://drive.google.com/file/d/1example_3month_plan/view"
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? [...publishedBooks, ...freeResources]
    : activeCategory === 'books'
    ? publishedBooks
    : freeResources.filter(resource => resource.category === activeCategory);

  const handleResourceClick = (link: string) => {
    window.open(link, '_blank');
  };

  const handleBookmark = (resource: any) => {
    // Check if user is logged in
    const studentSession = localStorage.getItem('studentSession');
    if (!studentSession) {
      alert('Please login to bookmark resources. Click on "Student Login" to create your free account.');
      window.location.href = '/student-login';
      return;
    }

    // Add to bookmarks
    localStorage.setItem(`bookmark_${resource.id}`, JSON.stringify(resource));
    alert('✅ Resource bookmarked successfully! Access it from your dashboard.');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">
              100% Free for Students
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Free UPSC Resources Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive study materials, expert guidance, and proven strategies - completely free for UPSC aspirants from Dr. Navjot Simi IPS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Heart className="w-5 h-5 mr-2" />
                Access Free Resources
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Target className="w-5 h-5 mr-2" />
                Get Guidance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">6</div>
              <div className="text-gray-300">Published Books</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Students Helped</div>
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
          
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800 border-slate-600 text-white"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className={`${
                      activeCategory === category.id 
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

          {/* Published Books Section */}
          {(activeCategory === 'all' || activeCategory === 'books') && (
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                📚 Published Books by Dr. Navjot Simi IPS & Tushar Singla IAS
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publishedBooks.map((book) => (
                  <Card key={book.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass overflow-hidden">
                    <div className="relative">
                      <Image
                        src={book.image}
                        alt={book.title}
                        width={400}
                        height={240}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500 text-white">Published Book</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-slate-900/80 backdrop-blur-sm rounded-full p-2">
                          <BookOpen className="w-5 h-5 text-yellow-400" />
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg leading-tight text-white">
                        {book.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-yellow-400 font-medium">{book.rating}</span>
                        </div>
                        <span className="text-gray-400">({book.reviews} reviews)</span>
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {book.publisher}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {book.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="font-semibold text-white mb-2 text-sm">Key Features:</h5>
                        <ul className="space-y-1">
                          {book.features.map((feature, index) => (
                            <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                              <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white"
                          onClick={() => handleResourceClick(book.amazonLink)}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Buy on Amazon
                        </Button>
                        {book.storeLink && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                            onClick={() => handleResourceClick(book.storeLink)}
                          >
                            Author Store
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Study Plans */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    Free Study Plans
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {studyPlans.map((plan, index) => (
                    <div key={index} className="p-4 border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors">
                      <h4 className="font-semibold text-white mb-2">{plan.title}</h4>
                      <p className="text-sm text-gray-300 mb-3">{plan.description}</p>
                      <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
                        <span>{plan.duration}</span>
                        <Badge variant="outline" className="border-slate-600 text-slate-300">{plan.difficulty}</Badge>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                        onClick={() => handleResourceClick(plan.link)}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Access Free
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Interview Tips */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Interview Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {interviewTips.map((tip, index) => (
                    <div key={index} className="p-3 border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors">
                      <h5 className="font-medium text-white text-sm mb-1">{tip.title}</h5>
                      <p className="text-xs text-gray-300 mb-2">{tip.description}</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white text-xs"
                        onClick={() => handleResourceClick(tip.link)}
                      >
                        <Play className="w-3 h-3 mr-1" />
                        Watch Free
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Get Guidance */}
              <Card className="bg-green-500/10 border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-green-400">Get Free Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-300 text-sm mb-4">
                    Need personalized guidance? Submit your queries and get expert advice from Dr. Navjot Simi IPS.
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.location.href = '/student-guidance'}
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Submit Query
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Resources Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {freeResources.filter(resource => 
                  activeCategory === 'all' || resource.category === activeCategory
                ).map((resource) => (
                  <Card key={resource.id} className="group hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700 hover:bg-slate-800">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          {resource.featured && (
                            <Badge className="bg-green-500 text-white mb-2">Free & Featured</Badge>
                          )}
                          <CardTitle className="text-lg group-hover:text-blue-400 transition-colors text-white">
                            {resource.title}
                          </CardTitle>
                        </div>
                        <div className="bg-slate-700 p-2 rounded-lg">
                          {resource.type === 'pdf' ? (
                            <FileText className="w-5 h-5 text-red-400" />
                          ) : (
                            <Video className="w-5 h-5 text-blue-400" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span>By {resource.author}</span>
                          <span>{resource.lastUpdated}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">{resource.downloads.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-gray-300">{resource.rating}</span>
                            </div>
                          </div>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            FREE
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => handleResourceClick(resource.link)}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {resource.type === 'pdf' ? 'Access PDF' : 'Watch Video'}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                          onClick={() => handleBookmark(resource)}
                        >
                          📖 Bookmark
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Free Platform Notice */}
          <div className="mt-20 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 text-center glass">
            <h3 className="text-3xl font-bold text-white mb-6">
              🎓 Completely Free for Students
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              This platform is dedicated to helping UPSC aspirants with free resources, guidance, and support. No hidden charges, no premium content - everything is free for students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8"
                onClick={() => window.location.href = '/student-guidance'}
              >
                <Heart className="w-5 h-5 mr-2" />
                Get Free Guidance
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white px-8"
                onClick={() => window.location.href = '/success-stories'}
              >
                <Award className="w-5 h-5 mr-2" />
                Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}