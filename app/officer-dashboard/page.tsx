"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Users, MessageSquare, FileText, LogOut, Bell, Settings, Calendar, Clock, CheckCircle, AlertCircle, TrendingUp, Award, Target, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface OfficerData {
  username: string;
  password: string;
  department: string;
  name: string;
  rank: string;
}

interface Notification {
  id: number;
  title: string;
  message: string;
  type: string;
  department: string;
  timestamp: string;
  read: boolean;
  action: string;
}

export default function OfficerDashboard() {
  const [officerData, setOfficerData] = useState<OfficerData | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Check if officer is logged in
    const session = localStorage.getItem('officerData');
    if (!session) {
      router.push('/officer-login');
      return;
    }

    const officer = JSON.parse(session);
    setOfficerData(officer);

    // Load notifications based on department
    loadNotifications(officer.department);
  }, [router]);

  const loadNotifications = (department: string) => {
    // Sample notifications - in real app, these would come from API
    const allNotifications: Notification[] = [
      {
        id: 1,
        title: "New Citizen Request",
        message: "Police verification request submitted by Rajesh Kumar",
        type: "request",
        department: "general",
        timestamp: "2024-01-25T10:30:00Z",
        read: false,
        action: "Review Request"
      },
      {
        id: 2,
        title: "Traffic Violation Report",
        message: "Multiple traffic violations reported on MG Road",
        type: "violation",
        department: "traffic",
        timestamp: "2024-01-25T09:15:00Z",
        read: false,
        action: "Investigate"
      },
      {
        id: 3,
        title: "Community Meeting",
        message: "Monthly community policing meeting scheduled",
        type: "meeting",
        department: "community",
        timestamp: "2024-01-25T08:00:00Z",
        read: true,
        action: "View Details"
      },
      {
        id: 4,
        title: "Cyber Crime Alert",
        message: "New phishing scam targeting local businesses",
        type: "alert",
        department: "cyber-crime",
        timestamp: "2024-01-24T16:45:00Z",
        read: false,
        action: "Issue Warning"
      },
      {
        id: 5,
        title: "Women Safety Initiative",
        message: "New safety app deployment in sector 15",
        type: "initiative",
        department: "women-cell",
        timestamp: "2024-01-24T14:20:00Z",
        read: true,
        action: "Monitor Progress"
      }
    ];

    // Filter notifications based on department
    const relevantNotifications = department === 'general' 
      ? allNotifications 
      : allNotifications.filter(n => n.department === department || n.department === 'general');

    setNotifications(relevantNotifications);
    setUnreadCount(relevantNotifications.filter(n => !n.read).length);
  };

  const handleLogout = () => {
    localStorage.removeItem('officerData');
    router.push('/');
  };

  const markAsRead = (notificationId: number) => {
    setNotifications(notifications.map(n => 
      n.id === notificationId ? { ...n, read: true } : n
    ));
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'request': return <FileText className="w-5 h-5 text-blue-400" />;
      case 'violation': return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'meeting': return <Calendar className="w-5 h-5 text-green-400" />;
      case 'alert': return <Bell className="w-5 h-5 text-yellow-400" />;
      case 'initiative': return <Target className="w-5 h-5 text-purple-400" />;
      default: return <Bell className="w-5 h-5 text-gray-400" />;
    }
  };

  const getDepartmentStats = () => {
    const baseStats = {
      'general': { requests: 45, resolved: 38, pending: 7, satisfaction: 92 },
      'law-order': { incidents: 23, resolved: 20, pending: 3, satisfaction: 88 },
      'crime-branch': { cases: 15, solved: 12, pending: 3, satisfaction: 85 },
      'traffic': { violations: 156, resolved: 142, pending: 14, satisfaction: 90 },
      'cyber-crime': { reports: 28, resolved: 24, pending: 4, satisfaction: 87 },
      'women-cell': { cases: 12, resolved: 10, pending: 2, satisfaction: 95 },
      'community': { programs: 8, active: 6, planned: 2, satisfaction: 93 },
      'investigation': { cases: 34, closed: 28, ongoing: 6, satisfaction: 89 }
    };

    return baseStats[officerData?.department as keyof typeof baseStats] || baseStats.general;
  };

  if (!officerData) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const stats = getDepartmentStats();

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Dashboard Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Officer Dashboard
              </h1>
              <p className="text-xl text-gray-300">
                Welcome, {officerData.name} ({officerData.rank})
              </p>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mt-2 capitalize">
                {officerData.department.replace('-', ' ')} Department
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                  {unreadCount > 0 && (
                    <Badge className="ml-2 bg-red-500 text-white text-xs">
                      {unreadCount}
                    </Badge>
                  )}
                </Button>
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
                    variant={activeTab === 'requests' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('requests')}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Citizen Requests
                  </Button>
                  <Button
                    variant={activeTab === 'notifications' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('notifications')}
                  >
                    <Bell className="w-4 h-4 mr-2" />
                    Notifications ({unreadCount})
                  </Button>
                  <Button
                    variant={activeTab === 'reports' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setActiveTab('reports')}
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Reports
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
                  <div className="grid md:grid-cols-4 gap-6">
                    <Card className="bg-blue-500/10 border-blue-500/30">
                      <CardContent className="p-6 text-center">
                        <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <div className="text-2xl font-bold text-white">{Object.values(stats)[0]}</div>
                        <div className="text-blue-300">Total Cases</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-500/10 border-green-500/30">
                      <CardContent className="p-6 text-center">
                        <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                        <div className="text-2xl font-bold text-white">{Object.values(stats)[1]}</div>
                        <div className="text-green-300">Resolved</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-yellow-500/10 border-yellow-500/30">
                      <CardContent className="p-6 text-center">
                        <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                        <div className="text-2xl font-bold text-white">{Object.values(stats)[2]}</div>
                        <div className="text-yellow-300">Pending</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-purple-500/10 border-purple-500/30">
                      <CardContent className="p-6 text-center">
                        <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                        <div className="text-2xl font-bold text-white">{Object.values(stats)[3]}%</div>
                        <div className="text-purple-300">Satisfaction</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recent Activity */}
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {notifications.slice(0, 5).map((notification) => (
                          <div key={notification.id} className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg">
                            {getNotificationIcon(notification.type)}
                            <div className="flex-1">
                              <h4 className="font-medium text-white">{notification.title}</h4>
                              <p className="text-sm text-gray-300">{notification.message}</p>
                              <p className="text-xs text-gray-400">
                                {new Date(notification.timestamp).toLocaleString()}
                              </p>
                            </div>
                            {!notification.read && (
                              <div className="w-3 h-3 bg-blue-400 rounded-full" />
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          <FileText className="w-4 h-4 mr-2" />
                          New Report
                        </Button>
                        <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                          <Users className="w-4 h-4 mr-2" />
                          Citizen Services
                        </Button>
                        <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                          <Phone className="w-4 h-4 mr-2" />
                          Emergency Response
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">Notifications</h2>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      {unreadCount} Unread
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <Card key={notification.id} className={`bg-slate-800/50 border-slate-700 ${!notification.read ? 'ring-2 ring-blue-500/30' : ''}`}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            {getNotificationIcon(notification.type)}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-semibold text-white">{notification.title}</h4>
                                {!notification.read && (
                                  <Badge className="bg-blue-500 text-white text-xs">New</Badge>
                                )}
                              </div>
                              <p className="text-gray-300 mb-3">{notification.message}</p>
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-gray-400">
                                  {new Date(notification.timestamp).toLocaleString()}
                                </p>
                                <div className="flex gap-2">
                                  <Button 
                                    size="sm" 
                                    className="bg-blue-600 hover:bg-blue-700 text-white"
                                    onClick={() => markAsRead(notification.id)}
                                  >
                                    {notification.action}
                                  </Button>
                                  {!notification.read && (
                                    <Button 
                                      size="sm" 
                                      variant="outline"
                                      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                                      onClick={() => markAsRead(notification.id)}
                                    >
                                      Mark Read
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Other tabs would be implemented similarly */}
              {activeTab === 'requests' && (
                <Card className="bg-slate-800/50 border-slate-700 p-12 text-center">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Citizen Requests</h3>
                  <p className="text-gray-300">
                    Citizen request management features will be available in the full version
                  </p>
                </Card>
              )}

              {activeTab === 'reports' && (
                <Card className="bg-slate-800/50 border-slate-700 p-12 text-center">
                  <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Reports & Analytics</h3>
                  <p className="text-gray-300">
                    Detailed reports and analytics features will be available in the full version
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}