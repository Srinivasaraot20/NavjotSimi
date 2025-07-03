"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Users, MessageSquare, BookOpen, LogOut, Send, Clock, CheckCircle, AlertCircle, Eye, User, Mail, Phone, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

interface AdminData {
  username: string;
  name: string;
  role: string;
  loginTime: string;
}

interface StudentQuery {
  id: string;
  submittedAt: string;
  status: string;
  priority: string;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    age: string;
    gender: string;
    city: string;
    state: string;
  };
  education: {
    currentStatus: string;
    qualification: string;
    college: string;
    graduationYear: string;
    workExperience: string;
  };
  upscPreparation: {
    preparationStage: string;
    timeAvailable: string;
    previousAttempts: string;
    targetYear: string;
    optionalSubject: string;
    coachingStatus: string;
  };
  studyDetails: {
    strongSubjects: string;
    weakSubjects: string;
    studyMaterials: string;
    currentAffairsSource: string;
  };
  challenges: {
    specificQuery: string;
    challenges: string;
    timeManagementIssues: string;
    motivationLevel: string;
    familySupport: string;
    financialConstraints: string;
  };
  goals: {
    careerGoals: string;
    servicePreference: string;
    expectedGuidance: string;
    urgencyLevel: string;
  };
  response?: string;
  respondedAt?: string;
}

export default function AdminDashboard() {
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [queries, setQueries] = useState<StudentQuery[]>([]);
  const [selectedQuery, setSelectedQuery] = useState<StudentQuery | null>(null);
  const [response, setResponse] = useState('');
  const [isResponding, setIsResponding] = useState(false);
  const [viewingQuery, setViewingQuery] = useState<StudentQuery | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if admin is logged in
    const adminSession = localStorage.getItem('adminData');
    if (!adminSession) {
      router.push('/admin-login');
      return;
    }

    const admin = JSON.parse(adminSession);
    setAdminData(admin);

    // Load all student queries
    loadQueries();
  }, [router]);

  const loadQueries = () => {
    const allQueries: StudentQuery[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('student_query_')) {
        const query = JSON.parse(localStorage.getItem(key) || '{}');
        allQueries.push(query);
      }
    }
    setQueries(allQueries.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()));
  };

  const handleLogout = () => {
    localStorage.removeItem('adminData');
    router.push('/');
  };

  const handleRespond = async (query: StudentQuery) => {
    if (!response.trim()) return;

    setIsResponding(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Update query with response
    const updatedQuery = {
      ...query,
      status: 'responded',
      response: response,
      respondedAt: new Date().toISOString()
    };

    // Save updated query
    localStorage.setItem(`student_query_${query.id}`, JSON.stringify(updatedQuery));

    // Update local state
    setQueries(queries.map(q => q.id === query.id ? updatedQuery : q));
    setSelectedQuery(null);
    setResponse('');
    setIsResponding(false);

    alert('Response sent successfully!');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'responded': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'responded': return <CheckCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'high': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'normal': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  if (!adminData) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p>Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  const pendingQueries = queries.filter(q => q.status === 'pending');
  const respondedQueries = queries.filter(q => q.status === 'responded');

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Admin Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Admin Dashboard
              </h1>
              <p className="text-xl text-gray-300">
                Welcome, {adminData.name}
              </p>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mt-2">
                Administrator Access
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
                    <Shield className="w-4 h-4 mr-2" />
                    Overview
                  </Button>
                  <Button
                    variant={activeTab === 'queries' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('queries')}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Student Queries ({pendingQueries.length})
                  </Button>
                  <Button
                    variant={activeTab === 'students' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('students')}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Students
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
                    <Card className="bg-yellow-500/10 border-yellow-500/30">
                      <CardContent className="p-6 text-center">
                        <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                        <div className="text-2xl font-bold text-white">{pendingQueries.length}</div>
                        <div className="text-yellow-300">Pending Queries</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-500/10 border-green-500/30">
                      <CardContent className="p-6 text-center">
                        <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                        <div className="text-2xl font-bold text-white">{respondedQueries.length}</div>
                        <div className="text-green-300">Responded Queries</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-blue-500/10 border-blue-500/30">
                      <CardContent className="p-6 text-center">
                        <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <div className="text-2xl font-bold text-white">{queries.length}</div>
                        <div className="text-blue-300">Total Queries</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recent Queries */}
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">Recent Queries</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {queries.slice(0, 5).map((query) => (
                        <div key={query.id} className="flex items-center justify-between p-4 border-b border-slate-600 last:border-b-0">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-medium text-white">{query.personalInfo.name}</h4>
                              <Badge className={`${getPriorityColor(query.priority)} border text-xs`}>
                                {query.priority}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-300 truncate max-w-md">{query.challenges.specificQuery}</p>
                            <p className="text-xs text-gray-400">{new Date(query.submittedAt).toLocaleDateString()}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={`${getStatusColor(query.status)} border`}>
                              <span className="flex items-center gap-1">
                                {getStatusIcon(query.status)}
                                {query.status}
                              </span>
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setViewingQuery(query)}
                              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                            >
                              <Eye className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Queries Tab */}
              {activeTab === 'queries' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">Student Queries</h2>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                      {pendingQueries.length} Pending
                    </Badge>
                  </div>

                  {queries.length === 0 ? (
                    <Card className="bg-slate-800/50 border-slate-700 p-12 text-center">
                      <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">No Queries Yet</h3>
                      <p className="text-gray-300">
                        Student queries will appear here when they submit questions
                      </p>
                    </Card>
                  ) : (
                    <div className="space-y-4">
                      {queries.map((query) => (
                        <Card key={query.id} className="bg-slate-800/50 border-slate-700">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="font-semibold text-white">{query.personalInfo.name}</h4>
                                  <Badge className={`${getStatusColor(query.status)} border text-xs`}>
                                    <span className="flex items-center gap-1">
                                      {getStatusIcon(query.status)}
                                      {query.status}
                                    </span>
                                  </Badge>
                                  <Badge className={`${getPriorityColor(query.priority)} border text-xs`}>
                                    {query.priority}
                                  </Badge>
                                </div>
                                <p className="text-gray-300 mb-3">{query.challenges.specificQuery}</p>
                                <div className="grid md:grid-cols-4 gap-4 text-sm">
                                  <div>
                                    <span className="text-gray-400">Email:</span>
                                    <p className="text-white">{query.personalInfo.email}</p>
                                  </div>
                                  <div>
                                    <span className="text-gray-400">Preparation Stage:</span>
                                    <p className="text-white capitalize">{query.upscPreparation.preparationStage}</p>
                                  </div>
                                  <div>
                                    <span className="text-gray-400">Time Available:</span>
                                    <p className="text-white">{query.upscPreparation.timeAvailable} hours daily</p>
                                  </div>
                                  <div>
                                    <span className="text-gray-400">Service Preference:</span>
                                    <p className="text-white uppercase">{query.goals.servicePreference || 'Not specified'}</p>
                                  </div>
                                </div>
                                <div className="text-xs text-gray-400 mt-2">
                                  Submitted: {new Date(query.submittedAt).toLocaleString()}
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setViewingQuery(query)}
                                  className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                                >
                                  <Eye className="w-4 h-4 mr-1" />
                                  View Details
                                </Button>
                                {query.status === 'pending' && (
                                  <Button
                                    className="bg-blue-600 hover:bg-blue-700 text-white"
                                    onClick={() => setSelectedQuery(query)}
                                  >
                                    <Send className="w-4 h-4 mr-2" />
                                    Respond
                                  </Button>
                                )}
                              </div>
                            </div>
                            
                            {query.response && (
                              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                                <h5 className="font-medium text-green-400 mb-2">Your Response:</h5>
                                <p className="text-green-300 text-sm leading-relaxed">{query.response}</p>
                                <p className="text-xs text-green-400 mt-2">
                                  Responded: {query.respondedAt ? new Date(query.respondedAt).toLocaleString() : ''}
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Students Tab */}
              {activeTab === 'students' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white">Registered Students</h2>
                  
                  <Card className="bg-slate-800/50 border-slate-700 p-12 text-center">
                    <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Student Management</h3>
                    <p className="text-gray-300">
                      Student management features will be available in the full version
                    </p>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* View Query Details Modal */}
      {viewingQuery && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white">Complete Query Details</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewingQuery(null)}
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                Close
              </Button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-400" />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div><span className="text-gray-400">Name:</span> <span className="text-white">{viewingQuery.personalInfo.name}</span></div>
                    <div><span className="text-gray-400">Email:</span> <span className="text-white">{viewingQuery.personalInfo.email}</span></div>
                    <div><span className="text-gray-400">Phone:</span> <span className="text-white">{viewingQuery.personalInfo.phone}</span></div>
                    <div><span className="text-gray-400">Age:</span> <span className="text-white">{viewingQuery.personalInfo.age}</span></div>
                    <div><span className="text-gray-400">Gender:</span> <span className="text-white">{viewingQuery.personalInfo.gender}</span></div>
                    <div><span className="text-gray-400">City:</span> <span className="text-white">{viewingQuery.personalInfo.city}</span></div>
                  </div>
                </div>

                {/* Educational Background */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-green-400" />
                    Educational Background
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div><span className="text-gray-400">Current Status:</span> <span className="text-white">{viewingQuery.education.currentStatus}</span></div>
                    <div><span className="text-gray-400">Qualification:</span> <span className="text-white">{viewingQuery.education.qualification}</span></div>
                    <div><span className="text-gray-400">College:</span> <span className="text-white">{viewingQuery.education.college}</span></div>
                    <div><span className="text-gray-400">Graduation Year:</span> <span className="text-white">{viewingQuery.education.graduationYear}</span></div>
                  </div>
                  {viewingQuery.education.workExperience && (
                    <div className="mt-3">
                      <span className="text-gray-400">Work Experience:</span>
                      <p className="text-white mt-1">{viewingQuery.education.workExperience}</p>
                    </div>
                  )}
                </div>

                {/* UPSC Preparation */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    UPSC Preparation Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div><span className="text-gray-400">Preparation Stage:</span> <span className="text-white">{viewingQuery.upscPreparation.preparationStage}</span></div>
                    <div><span className="text-gray-400">Time Available:</span> <span className="text-white">{viewingQuery.upscPreparation.timeAvailable} hours daily</span></div>
                    <div><span className="text-gray-400">Previous Attempts:</span> <span className="text-white">{viewingQuery.upscPreparation.previousAttempts}</span></div>
                    <div><span className="text-gray-400">Target Year:</span> <span className="text-white">{viewingQuery.upscPreparation.targetYear}</span></div>
                    <div><span className="text-gray-400">Optional Subject:</span> <span className="text-white">{viewingQuery.upscPreparation.optionalSubject}</span></div>
                    <div><span className="text-gray-400">Coaching Status:</span> <span className="text-white">{viewingQuery.upscPreparation.coachingStatus}</span></div>
                  </div>
                </div>

                {/* Study Details */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Study Details</h3>
                  <div className="space-y-3 text-sm">
                    {viewingQuery.studyDetails.strongSubjects && (
                      <div><span className="text-gray-400">Strong Subjects:</span> <p className="text-white mt-1">{viewingQuery.studyDetails.strongSubjects}</p></div>
                    )}
                    {viewingQuery.studyDetails.weakSubjects && (
                      <div><span className="text-gray-400">Weak Subjects:</span> <p className="text-white mt-1">{viewingQuery.studyDetails.weakSubjects}</p></div>
                    )}
                    {viewingQuery.studyDetails.studyMaterials && (
                      <div><span className="text-gray-400">Study Materials:</span> <p className="text-white mt-1">{viewingQuery.studyDetails.studyMaterials}</p></div>
                    )}
                    {viewingQuery.studyDetails.currentAffairsSource && (
                      <div><span className="text-gray-400">Current Affairs Sources:</span> <p className="text-white mt-1">{viewingQuery.studyDetails.currentAffairsSource}</p></div>
                    )}
                  </div>
                </div>

                {/* Challenges and Query */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Challenges & Query</h3>
                  <div className="space-y-3 text-sm">
                    <div><span className="text-gray-400">Specific Query:</span> <p className="text-white mt-1">{viewingQuery.challenges.specificQuery}</p></div>
                    {viewingQuery.challenges.challenges && (
                      <div><span className="text-gray-400">Main Challenges:</span> <p className="text-white mt-1">{viewingQuery.challenges.challenges}</p></div>
                    )}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><span className="text-gray-400">Motivation Level:</span> <span className="text-white">{viewingQuery.challenges.motivationLevel}</span></div>
                      <div><span className="text-gray-400">Family Support:</span> <span className="text-white">{viewingQuery.challenges.familySupport}</span></div>
                    </div>
                  </div>
                </div>

                {/* Goals */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Goals & Expectations</h3>
                  <div className="space-y-3 text-sm">
                    {viewingQuery.goals.careerGoals && (
                      <div><span className="text-gray-400">Career Goals:</span> <p className="text-white mt-1">{viewingQuery.goals.careerGoals}</p></div>
                    )}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><span className="text-gray-400">Service Preference:</span> <span className="text-white uppercase">{viewingQuery.goals.servicePreference}</span></div>
                      <div><span className="text-gray-400">Urgency Level:</span> <span className="text-white">{viewingQuery.goals.urgencyLevel}</span></div>
                    </div>
                    {viewingQuery.goals.expectedGuidance && (
                      <div><span className="text-gray-400">Expected Guidance:</span> <p className="text-white mt-1">{viewingQuery.goals.expectedGuidance}</p></div>
                    )}
                  </div>
                </div>

                {/* Response Section */}
                {viewingQuery.response && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <h4 className="font-medium text-green-400 mb-2">Your Response:</h4>
                    <p className="text-green-300 text-sm leading-relaxed">{viewingQuery.response}</p>
                    <p className="text-xs text-green-400 mt-2">
                      Responded: {viewingQuery.respondedAt ? new Date(viewingQuery.respondedAt).toLocaleString() : ''}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-slate-700">
                  {viewingQuery.status === 'pending' && (
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => {
                        setSelectedQuery(viewingQuery);
                        setViewingQuery(null);
                      }}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Respond to Query
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                    onClick={() => setViewingQuery(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Response Modal */}
      {selectedQuery && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-slate-700">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white">Respond to Query</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedQuery(null)}
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                Cancel
              </Button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="mb-6">
                <h3 className="font-semibold text-white mb-2">Student: {selectedQuery.personalInfo.name}</h3>
                <p className="text-gray-300 mb-4">{selectedQuery.challenges.specificQuery}</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Preparation Stage:</span>
                    <p className="text-white capitalize">{selectedQuery.upscPreparation.preparationStage}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Time Available:</span>
                    <p className="text-white">{selectedQuery.upscPreparation.timeAvailable} hours daily</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Response *
                </label>
                <Textarea
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  rows={8}
                  placeholder="Provide detailed guidance and advice for this student's query..."
                  className="bg-slate-700 border-slate-600 text-white"
                  required
                />
              </div>
              
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                onClick={() => handleRespond(selectedQuery)}
                disabled={isResponding || !response.trim()}
              >
                {isResponding ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Response...
                  </div>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Response
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}