"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { User, BookOpen, MessageSquare, Clock, Star, LogOut, Settings, Target, Heart, Download, ExternalLink, Trash2, Eye, Calendar, Award, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface StudentData {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  bookmarks: any[];
  queries: any[];
}

interface BookmarkItem {
  id: number;
  title: string;
  description: string;
  rating?: number;
  link: string;
  type?: string;
  author?: string;
  category?: string;
  lastUpdated?: string;
  thumbnail?: string;
  duration?: string;
}

export default function StudentDashboard() {
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [queries, setQueries] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Check if student is logged in
    const session = localStorage.getItem('studentSession');
    if (!session) {
      router.push('/student-login');
      return;
    }

    const student = JSON.parse(session);
    setStudentData(student);

    // Load bookmarks from localStorage
    loadBookmarks();

    // Load queries from localStorage
    loadQueries();
  }, [router]);

  const loadBookmarks = () => {
    const savedBookmarks: BookmarkItem[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('bookmark_')) {
        try {
          const bookmark = JSON.parse(localStorage.getItem(key) || '{}');
          if (bookmark.id && bookmark.title) {
            savedBookmarks.push(bookmark);
          }
        } catch (error) {
          console.error('Error parsing bookmark:', error);
        }
      }
    }
    setBookmarks(savedBookmarks);
  };

  const loadQueries = () => {
    const savedQueries = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('student_query_')) {
        try {
          const query = JSON.parse(localStorage.getItem(key) || '{}');
          if (query.id) {
            savedQueries.push(query);
          }
        } catch (error) {
          console.error('Error parsing query:', error);
        }
      }
    }
    setQueries(savedQueries.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()));
  };

  const handleLogout = () => {
    localStorage.removeItem('studentSession');
    router.push('/');
  };

  const removeBookmark = (resourceId: number) => {
    localStorage.removeItem(`bookmark_${resourceId}`);
    setBookmarks(bookmarks.filter(b => b.id !== resourceId));
  };

  const accessResource = (link: string) => {
    window.open(link, '_blank');
  };

  const getQueryStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'responded': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  if (!studentData) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Dashboard Header */}
      <section className="bg-gradient-to-r from-slate-900 via-green-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, {studentData.name}! 👋
              </h1>
              <p className="text-xl text-gray-300">
                Your personalized UPSC preparation dashboard
              </p>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-2">
                Free Student Account
              </Badge>
            </div>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <div className="space-y-2">
                  <Button
                    variant={activeTab === 'overview' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('overview')}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Overview
                  </Button>
                  <Button
                    variant={activeTab === 'bookmarks' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('bookmarks')}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Bookmarks ({bookmarks.length})
                  </Button>
                  <Button
                    variant={activeTab === 'queries' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('queries')}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    My Queries ({queries.length})
                  </Button>
                  <Button
                    variant={activeTab === 'resources' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('resources')}
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Quick Access
                  </Button>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Stats Cards */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-blue-500/10 border-blue-500/30">
                      <CardContent className="p-6 text-center">
                        <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <div className="text-2xl font-bold text-white">{bookmarks.length}</div>
                        <div className="text-blue-300">Bookmarked Resources</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-500/10 border-green-500/30">
                      <CardContent className="p-6 text-center">
                        <MessageSquare className="w-12 h-12 text-green-400 mx-auto mb-4" />
                        <div className="text-2xl font-bold text-white">{queries.length}</div>
                        <div className="text-green-300">Queries Submitted</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-purple-500/10 border-purple-500/30">
                      <CardContent className="p-6 text-center">
                        <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                        <div className="text-2xl font-bold text-white">
                          {Math.floor((Date.now() - new Date(studentData.createdAt).getTime()) / (1000 * 60 * 60 * 24))}
                        </div>
                        <div className="text-purple-300">Days Since Joining</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Account Info */}
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">Account Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm text-gray-400">Full Name</label>
                          <p className="text-white font-medium">{studentData.name}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-400">Email Address</label>
                          <p className="text-white font-medium">{studentData.email}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-400">Phone Number</label>
                          <p className="text-white font-medium">{studentData.phone || 'Not provided'}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-400">Member Since</label>
                          <p className="text-white font-medium">
                            {new Date(studentData.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Button 
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => window.location.href = '/student-guidance'}
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Submit New Query
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                          onClick={() => window.location.href = '/upsc-resources'}
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          Browse Resources
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {bookmarks.slice(0, 3).map((bookmark, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                            <BookOpen className="w-5 h-5 text-blue-400" />
                            <div className="flex-1">
                              <p className="text-white text-sm font-medium">Bookmarked: {bookmark.title}</p>
                              <p className="text-gray-400 text-xs">Resource saved to your collection</p>
                            </div>
                          </div>
                        ))}
                        {queries.slice(0, 2).map((query, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                            <MessageSquare className="w-5 h-5 text-green-400" />
                            <div className="flex-1">
                              <p className="text-white text-sm font-medium">Query Submitted</p>
                              <p className="text-gray-400 text-xs">{query.challenges?.specificQuery?.substring(0, 50) || query.specificQuery?.substring(0, 50)}...</p>
                            </div>
                            <Badge className={`${getQueryStatusColor(query.status)} border text-xs`}>
                              {query.status}
                            </Badge>
                          </div>
                        ))}
                        {bookmarks.length === 0 && queries.length === 0 && (
                          <div className="text-center py-8">
                            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-400">No recent activity. Start by bookmarking resources or submitting queries!</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Bookmarks Tab */}
              {activeTab === 'bookmarks' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">My Bookmarks</h2>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {bookmarks.length} Resources
                      </Badge>
                      <Button 
                        variant="outline" 
                        className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                        onClick={() => window.location.href = '/upsc-resources'}
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Browse More
                      </Button>
                    </div>
                  </div>

                  {bookmarks.length === 0 ? (
                    <Card className="bg-slate-800/50 border-slate-700 p-12 text-center">
                      <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">No Bookmarks Yet</h3>
                      <p className="text-gray-300 mb-6">
                        Start bookmarking resources to access them quickly from your dashboard. 
                        Visit the resources page and click the bookmark button on any resource.
                      </p>
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => window.location.href = '/upsc-resources'}
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Browse Resources
                      </Button>
                    </Card>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                      {bookmarks.map((resource, index) => (
                        <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all">
                          <CardContent className="p-6">
                            {/* Video Thumbnail for YouTube videos */}
                            {resource.thumbnail && (
                              <div className="relative mb-4 cursor-pointer" onClick={() => accessResource(resource.link)}>
                                <img
                                  src={resource.thumbnail}
                                  alt={resource.title}
                                  className="w-full h-32 object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                                  <Play className="w-8 h-8 text-white" />
                                </div>
                                {resource.duration && (
                                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    {resource.duration}
                                  </div>
                                )}
                              </div>
                            )}

                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h4 className="font-semibold text-white leading-tight mb-2">{resource.title}</h4>
                                <div className="flex items-center gap-2 mb-2">
                                  {resource.type && (
                                    <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                                      {resource.type.toUpperCase()}
                                    </Badge>
                                  )}
                                  {resource.category && (
                                    <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs capitalize">
                                      {resource.category}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white"
                                onClick={() => removeBookmark(resource.id)}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                            
                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                              {resource.description}
                            </p>
                            
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-4">
                                {resource.rating && (
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-gray-300 text-sm">{resource.rating}</span>
                                  </div>
                                )}
                                {resource.author && (
                                  <span className="text-gray-400 text-xs">By {resource.author}</span>
                                )}
                              </div>
                              {resource.lastUpdated && (
                                <span className="text-gray-500 text-xs">{resource.lastUpdated}</span>
                              )}
                            </div>
                            
                            <div className="flex gap-2">
                              <Button
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={() => accessResource(resource.link)}
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                {resource.type === 'video' ? 'Watch Video' : 'Access Resource'}
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                                onClick={() => {
                                  navigator.clipboard.writeText(resource.link);
                                  alert('Link copied to clipboard!');
                                }}
                              >
                                📋 Copy Link
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Queries Tab */}
              {activeTab === 'queries' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">My Queries</h2>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.location.href = '/student-guidance'}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Submit New Query
                    </Button>
                  </div>

                  {queries.length === 0 ? (
                    <Card className="bg-slate-800/50 border-slate-700 p-12 text-center">
                      <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">No Queries Yet</h3>
                      <p className="text-gray-300 mb-6">
                        Submit your first query to get personalized guidance from Dr. Navjot Simi IPS. 
                        Get expert advice on study plans, strategies, and preparation tips.
                      </p>
                      <Button 
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => window.location.href = '/student-guidance'}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Submit Your First Query
                      </Button>
                    </Card>
                  ) : (
                    <div className="space-y-4">
                      {queries.map((query, index) => (
                        <Card key={index} className="bg-slate-800/50 border-slate-700">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="font-semibold text-white">{query.challenges?.specificQuery || query.specificQuery}</h4>
                                  <Badge className={`${getQueryStatusColor(query.status)} border text-xs`}>
                                    {query.status}
                                  </Badge>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                                  <div>
                                    <span className="text-gray-400">Preparation Stage:</span>
                                    <p className="text-white capitalize">{query.upscPreparation?.preparationStage || 'Not specified'}</p>
                                  </div>
                                  <div>
                                    <span className="text-gray-400">Time Available:</span>
                                    <p className="text-white">{query.upscPreparation?.timeAvailable || 'Not specified'} hours daily</p>
                                  </div>
                                </div>
                                <div className="text-xs text-gray-400">
                                  Submitted: {new Date(query.submittedAt).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                            
                            {query.challenges?.challenges && (
                              <div className="mb-4 p-3 bg-slate-700/50 rounded-lg">
                                <span className="text-gray-400 text-sm font-medium">Challenges mentioned:</span>
                                <p className="text-gray-300 text-sm mt-1">{query.challenges.challenges}</p>
                              </div>
                            )}
                            
                            {query.response && (
                              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Award className="w-4 h-4 text-green-400" />
                                  <h5 className="font-medium text-green-400">Expert Response from Dr. Navjot Simi IPS:</h5>
                                </div>
                                <p className="text-green-300 text-sm leading-relaxed">{query.response}</p>
                                <p className="text-xs text-green-400 mt-2">
                                  Responded: {query.respondedAt ? new Date(query.respondedAt).toLocaleString() : ''}
                                </p>
                              </div>
                            )}
                            
                            {query.status === 'pending' && (
                              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mt-4">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-yellow-400" />
                                  <span className="text-yellow-400 text-sm font-medium">
                                    Your query is being reviewed. You'll receive a response within 24-48 hours.
                                  </span>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Quick Access Tab */}
              {activeTab === 'resources' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white">Quick Access</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20 transition-colors cursor-pointer"
                          onClick={() => window.location.href = '/upsc-resources'}>
                      <CardContent className="p-6 text-center">
                        <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Free Resources</h3>
                        <p className="text-blue-300 text-sm mb-4">Access study materials, books, and guides</p>
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                          100% Free
                        </Badge>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-500/10 border-green-500/30 hover:bg-green-500/20 transition-colors cursor-pointer"
                          onClick={() => window.location.href = '/student-guidance'}>
                      <CardContent className="p-6 text-center">
                        <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Get Guidance</h3>
                        <p className="text-green-300 text-sm mb-4">Submit queries and get expert advice</p>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          24-48 Hr Response
                        </Badge>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20 transition-colors cursor-pointer"
                          onClick={() => window.location.href = '/success-stories'}>
                      <CardContent className="p-6 text-center">
                        <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Success Stories</h3>
                        <p className="text-purple-300 text-sm mb-4">Read inspiring UPSC success journeys</p>
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                          500+ Stories
                        </Badge>
                      </CardContent>
                    </Card>

                    <Card className="bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20 transition-colors cursor-pointer"
                          onClick={() => window.location.href = '/blog'}>
                      <CardContent className="p-6 text-center">
                        <MessageSquare className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Blog & Articles</h3>
                        <p className="text-orange-300 text-sm mb-4">Read expert insights and tips</p>
                        <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                          50+ Articles
                        </Badge>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Study Progress Tracker */}
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">Study Progress Tracker</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-2">{bookmarks.length}</div>
                          <div className="text-sm text-gray-300">Resources Saved</div>
                          <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                            <div className="bg-blue-400 h-2 rounded-full" style={{width: `${Math.min(bookmarks.length * 10, 100)}%`}}></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400 mb-2">{queries.length}</div>
                          <div className="text-sm text-gray-300">Queries Asked</div>
                          <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                            <div className="bg-green-400 h-2 rounded-full" style={{width: `${Math.min(queries.length * 20, 100)}%`}}></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400 mb-2">
                            {queries.filter(q => q.status === 'responded').length}
                          </div>
                          <div className="text-sm text-gray-300">Responses Received</div>
                          <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                            <div className="bg-purple-400 h-2 rounded-full" style={{width: `${queries.length > 0 ? (queries.filter(q => q.status === 'responded').length / queries.length) * 100 : 0}%`}}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}