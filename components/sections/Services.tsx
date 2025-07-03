"use client";

import { useState } from 'react';
import { FileText, MessageSquare, Phone, Clock, CheckCircle, AlertCircle, Users, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const [activeService, setActiveService] = useState('requests');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const services = [
    {
      id: 'requests',
      title: 'Citizen Requests',
      icon: FileText,
      description: 'Submit requests for police services and track their status'
    },
    {
      id: 'feedback',
      title: 'Feedback & Complaints',
      icon: MessageSquare,
      description: 'Share your feedback or file complaints about police services'
    },
    {
      id: 'emergency',
      title: 'Emergency Services',
      icon: Phone,
      description: 'Quick access to emergency contacts and services'
    },
    {
      id: 'community',
      title: 'Community Programs',
      icon: Users,
      description: 'Information about community policing initiatives'
    }
  ];

  const recentRequests = [
    {
      id: 'REQ001',
      title: 'Police Verification Certificate',
      status: 'completed',
      date: '2024-01-15',
      priority: 'normal'
    },
    {
      id: 'REQ002',
      title: 'Traffic Violation Complaint',
      status: 'in-progress',
      date: '2024-01-18',
      priority: 'high'
    },
    {
      id: 'REQ003',
      title: 'Community Safety Concern',
      status: 'pending',
      date: '2024-01-20',
      priority: 'normal'
    },
    {
      id: 'REQ004',
      title: 'Lost Property Report',
      status: 'under-review',
      date: '2024-01-22',
      priority: 'low'
    }
  ];

  const emergencyContacts = [
    { service: 'Police Emergency', number: '100', available: '24/7' },
    { service: 'Fire Service', number: '101', available: '24/7' },
    { service: 'Ambulance', number: '102', available: '24/7' },
    { service: 'Women Helpline', number: '1091', available: '24/7' },
    { service: 'Child Helpline', number: '1098', available: '24/7' },
    { service: 'Traffic Police', number: '103', available: '24/7' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'under-review': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'under-review': return <AlertCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Citizen Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Streamlined access to police services, transparent request tracking, and direct communication channels for citizens
          </p>
        </div>

        {/* Service Navigation */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                activeService === service.id 
                  ? 'ring-2 ring-blue-600 bg-blue-50' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => setActiveService(service.id)}
            >
              <CardContent className="p-6 text-center">
                <service.icon className={`w-12 h-12 mx-auto mb-4 ${
                  activeService === service.id ? 'text-blue-600' : 'text-gray-600'
                }`} />
                <h3 className={`font-semibold mb-2 ${
                  activeService === service.id ? 'text-blue-900' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Service Area */}
          <div className="lg:col-span-2">
            {activeService === 'requests' && (
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-blue-600" />
                    Submit New Request
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Request Type
                        </label>
                        <select
                          name="type"
                          value={formData.type}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="verification">Police Verification</option>
                          <option value="complaint">File Complaint</option>
                          <option value="noc">NOC Request</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief subject of your request"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Describe your request in detail"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {activeService === 'emergency' && (
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <Phone className="w-6 h-6" />
                    Emergency Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="grid gap-4">
                    {emergencyContacts.map((contact, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                        <div>
                          <h4 className="font-semibold text-gray-900">{contact.service}</h4>
                          <p className="text-sm text-gray-600">Available {contact.available}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-red-600">{contact.number}</div>
                          <Button variant="outline" size="sm" className="mt-2">
                            Call Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeService === 'community' && (
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    Community Programs
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Neighborhood Watch Program</h4>
                      <p className="text-blue-800 mb-4">Join our community-led safety initiative to create safer neighborhoods.</p>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">Join Program</Button>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-900 mb-3">Women Safety Initiative</h4>
                      <p className="text-green-800 mb-4">Comprehensive programs focused on women's safety and empowerment.</p>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
                    </div>
                    
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-yellow-900 mb-3">Youth Engagement Program</h4>
                      <p className="text-yellow-800 mb-4">Positive youth development through sports, education, and mentorship.</p>
                      <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">Get Involved</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Requests */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Recent Requests</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-4">
                  {recentRequests.map((request) => (
                    <div key={request.id} className="border-l-4 border-blue-200 pl-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900 text-sm">{request.title}</h5>
                          <p className="text-xs text-gray-500 mt-1">ID: {request.id}</p>
                          <p className="text-xs text-gray-500">{request.date}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={`text-xs ${getStatusColor(request.status)}`}>
                            <span className="flex items-center gap-1">
                              {getStatusIcon(request.status)}
                              {request.status}
                            </span>
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Requests
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-2" />
                    Police Station Locator
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Download Forms
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Clock className="w-4 h-4 mr-2" />
                    Office Hours
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Directory
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Service Hours */}
            <Card className="p-6 bg-blue-50">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg text-blue-900">Service Hours</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-800">Monday - Friday:</span>
                    <span className="text-blue-900 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-800">Saturday:</span>
                    <span className="text-blue-900 font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-800">Emergency:</span>
                    <span className="text-blue-900 font-medium">24/7 Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;