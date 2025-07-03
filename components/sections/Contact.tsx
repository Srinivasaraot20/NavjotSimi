"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Twitter, Facebook, Linkedin, MessageSquare, BookOpen, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      details: ["contact@navjotsimi.gov.in", "mentor@navjotsimi.gov.in"],
      color: "text-blue-400"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "text-green-400"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Punjab Police Headquarters", "Sector 9, Chandigarh - 160009"],
      color: "text-red-400"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "text-purple-400"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/navjotsimi/",
      color: "hover:text-pink-400",
      followers: "45K"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/navjotsimi",
      color: "hover:text-blue-400",
      followers: "28K"
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/navjotsimiips",
      color: "hover:text-blue-500",
      followers: "32K"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/navjot-simi-ips-1b7a621b6/",
      color: "hover:text-blue-600",
      followers: "15K"
    }
  ];

  const guidanceServices = [
    {
      icon: BookOpen,
      title: "UPSC Mentorship",
      description: "One-on-one guidance for UPSC preparation with personalized study plans",
      duration: "60 minutes",
      price: "₹2,500",
      features: ["Personalized Study Plan", "Mock Interview", "Answer Writing Review", "Strategy Discussion"]
    },
    {
      icon: MessageSquare,
      title: "Career Counseling",
      description: "Professional guidance for career transitions and civil services journey",
      duration: "45 minutes",
      price: "₹2,000",
      features: ["Career Assessment", "Goal Setting", "Roadmap Planning", "Motivation Session"]
    },
    {
      icon: Users,
      title: "Group Sessions",
      description: "Interactive group discussions and Q&A sessions with fellow aspirants",
      duration: "90 minutes",
      price: "₹1,000",
      features: ["Group Discussion", "Peer Learning", "Q&A Session", "Study Tips"]
    },
    {
      icon: Calendar,
      title: "Workshop Series",
      description: "Comprehensive workshops on specific topics and preparation strategies",
      duration: "3 hours",
      price: "₹3,500",
      features: ["Detailed Coverage", "Practice Sessions", "Resource Materials", "Follow-up Support"]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general'
    });
  };

  const bookGuidance = (serviceType: string) => {
    alert(`Booking request for ${serviceType} has been submitted. You will receive a confirmation email with payment details and scheduling information within 2 hours.`);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about UPSC preparation or need guidance? Reach out for personalized assistance and support
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-slate-800/50 border-slate-700 hover:bg-slate-800">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className={`${info.color} mt-1`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="p-6 bg-slate-800/50 border-slate-700">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-white">Follow on Social Media</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg border border-slate-600 hover:bg-slate-700 transition-all ${social.color} group`}
                    >
                      <social.icon className="w-5 h-5" />
                      <div>
                        <p className="font-medium text-sm text-white">{social.name}</p>
                        <p className="text-xs text-gray-400">{social.followers} followers</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="p-6 bg-blue-500/10 border-blue-500/30">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-blue-400">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                    Download Study Materials
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                    Join Community Forum
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                    View Success Stories
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                    Access Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-slate-800/50 border-slate-700">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="mentorship">Mentorship Request</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="media">Media & Press</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief subject of your message"
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Write your message here..."
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                    <span className="text-sm text-gray-400">
                      * Required fields
                    </span>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Guidance Services */}
            <Card className="mt-8 p-6 bg-slate-800/50 border-slate-700">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-white">Get Guidance Services</CardTitle>
                <p className="text-gray-300">Professional mentorship and guidance services</p>
              </CardHeader>
              <CardContent className="px-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {guidanceServices.map((service, index) => (
                    <div key={index} className="p-6 bg-slate-700/50 rounded-lg border border-slate-600 hover:bg-slate-700 transition-colors">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-blue-500/20 p-3 rounded-lg">
                          <service.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                          <p className="text-sm text-gray-300 mb-3">{service.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                            <span>Duration: {service.duration}</span>
                            <span className="font-semibold text-green-400">{service.price}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-white mb-2">Includes:</h5>
                        <ul className="text-xs text-gray-300 space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-blue-400 rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => bookGuidance(service.title)}
                      >
                        Book Session
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-8 p-6 bg-slate-800/50 border-slate-700">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-white">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">
                      How can I book a one-on-one mentoring session?
                    </h5>
                    <p className="text-gray-300 text-sm">
                      You can book a mentoring session through our contact form or by calling our office during business hours. Payment details will be shared after confirmation.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">
                      Are the study materials free to download?
                    </h5>
                    <p className="text-gray-300 text-sm">
                      Yes, most of our basic study materials are available for free download. Premium resources may require registration or payment.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">
                      How long does it take to get a response?
                    </h5>
                    <p className="text-gray-300 text-sm">
                      We typically respond to all inquiries within 24-48 hours during business days. Urgent matters are prioritized.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">
                      What payment methods are accepted for guidance services?
                    </h5>
                    <p className="text-gray-300 text-sm">
                      We accept online payments through UPI, net banking, credit/debit cards, and bank transfers. Payment details are shared after booking confirmation.
                    </p>
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

export default Contact;