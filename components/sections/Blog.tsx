"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowRight, Tag, Search } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'prelims', label: 'Prelims Strategy' },
    { id: 'mains', label: 'Mains Preparation' },
    { id: 'interview', label: 'Interview Tips' },
    { id: 'motivation', label: 'Motivation' },
    { id: 'current-affairs', label: 'Current Affairs' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Cracking UPSC Prelims: Smart Strategies for Beginners",
      excerpt: "Essential tips and proven strategies to clear UPSC Prelims examination in your first attempt with confidence.",
      content: "The UPSC Prelims examination is the first hurdle in your civil services journey...",
      author: "Dr. Navjot Simi IPS",
      date: "2024-01-20",
      readTime: "8 min read",
      category: "prelims",
      tags: ["UPSC", "Prelims", "Strategy", "Beginners"],
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: true,
      views: 2400
    },
    {
      id: 2,
      title: "Mastering Mains: Answer Writing Techniques That Work",
      excerpt: "Learn the art of effective answer writing with structured approaches and real examples from successful candidates.",
      content: "Answer writing is perhaps the most crucial skill for UPSC Mains success...",
      author: "Dr. Navjot Simi IPS",
      date: "2024-01-18",
      readTime: "12 min read",
      category: "mains",
      tags: ["Mains", "Answer Writing", "Techniques"],
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: true,
      views: 1800
    },
    {
      id: 3,
      title: "Interview Success: From Nervousness to Confidence",
      excerpt: "Transform your personality and communication skills to excel in the UPSC interview round.",
      content: "The UPSC interview is not just about knowledge but personality assessment...",
      author: "Dr. Navjot Simi IPS",
      date: "2024-01-15",
      readTime: "10 min read",
      category: "interview",
      tags: ["Interview", "Personality Test", "Communication"],
      image: "https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false,
      views: 1200
    },
    {
      id: 4,
      title: "Staying Motivated During Long Preparation Journey",
      excerpt: "Mental health and motivation strategies to maintain consistency throughout your UPSC preparation.",
      content: "UPSC preparation is a marathon, not a sprint. Mental resilience is key...",
      author: "Dr. Navjot Simi IPS",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "motivation",
      tags: ["Motivation", "Mental Health", "Consistency"],
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false,
      views: 980
    },
    {
      id: 5,
      title: "Current Affairs Mastery: Sources and Strategy",
      excerpt: "Comprehensive guide to current affairs preparation with reliable sources and effective note-making techniques.",
      content: "Current affairs form the backbone of both Prelims and Mains preparation...",
      author: "Dr. Navjot Simi IPS",
      date: "2024-01-10",
      readTime: "9 min read",
      category: "current-affairs",
      tags: ["Current Affairs", "Sources", "Strategy"],
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false,
      views: 1500
    },
    {
      id: 6,
      title: "Ethics and Integrity: Real-life Case Studies",
      excerpt: "Develop ethical reasoning and decision-making skills through practical case study analysis.",
      content: "Ethics paper requires a different approach combining theoretical knowledge with practical wisdom...",
      author: "Dr. Navjot Simi IPS",
      date: "2024-01-08",
      readTime: "11 min read",
      category: "mains",
      tags: ["Ethics", "Case Studies", "Mains"],
      image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      featured: false,
      views: 1100
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Guidance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert articles, preparation strategies, and motivational content to guide your UPSC journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <div className="mb-16">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-white">Featured</Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white capitalize">
                    {post.category.replace('-', ' ')}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Read More
                  </Button>
                  <span className="text-xs text-gray-500">{post.views} views</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredPosts.length > 6 && (
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-3">
              Load More Articles
            </Button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Stay Updated with Latest Content
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly insights, preparation tips, and exclusive resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;