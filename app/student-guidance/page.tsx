"use client";

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Send, BookOpen, Clock, Target, Users, Heart, CheckCircle, AlertCircle, Calendar, MessageSquare, User, Mail, Phone, GraduationCap, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export default function StudentGuidance() {
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    
    // Educational Background
    currentStatus: '',
    qualification: '',
    college: '',
    graduationYear: '',
    workExperience: '',
    
    // UPSC Preparation Details
    preparationStage: '',
    timeAvailable: '',
    previousAttempts: '',
    targetYear: '',
    optionalSubject: '',
    coachingStatus: '',
    
    // Study Details
    subjects: '',
    strongSubjects: '',
    weakSubjects: '',
    studyMaterials: '',
    currentAffairsSource: '',
    
    // Specific Queries
    specificQuery: '',
    challenges: '',
    timeManagementIssues: '',
    motivationLevel: '',
    familySupport: '',
    financialConstraints: '',
    
    // Goals and Expectations
    careerGoals: '',
    servicePreference: '',
    expectedGuidance: '',
    urgencyLevel: '',
    
    // Additional Information
    hobbies: '',
    languagesKnown: '',
    computerSkills: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const guidanceAreas = [
    {
      icon: BookOpen,
      title: "Personalized Study Plan",
      description: "Get customized study schedules based on your available time, current level, and target timeline",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Clock,
      title: "Time Management Strategies",
      description: "Learn effective techniques for balancing preparation with work/studies and personal commitments",
      color: "from-green-500 to-green-700"
    },
    {
      icon: Target,
      title: "Subject-wise Strategy",
      description: "Develop targeted approaches for Prelims, Mains, and Interview based on your strengths and weaknesses",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Users,
      title: "Doubt Resolution",
      description: "Get your specific doubts and queries resolved by Dr. Navjot Simi IPS with detailed explanations",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: Heart,
      title: "Motivation & Mental Health",
      description: "Receive guidance on maintaining motivation, handling stress, and building mental resilience",
      color: "from-pink-500 to-pink-700"
    },
    {
      icon: GraduationCap,
      title: "Career Transition Guidance",
      description: "Special guidance for professionals transitioning from other careers to civil services",
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  const preparationStages = [
    { value: 'beginner', label: 'Just Starting (Beginner)' },
    { value: 'foundation', label: 'Foundation Building (3-6 months)' },
    { value: 'intermediate', label: 'Intermediate (6-12 months)' },
    { value: 'advanced', label: 'Advanced (1+ year preparation)' },
    { value: 'revision', label: 'Revision Phase' },
    { value: 'attempt', label: 'Appearing this year' },
    { value: 'reattempt', label: 'Re-attempting after previous failure' }
  ];

  const timeAvailableOptions = [
    { value: '1-2', label: '1-2 hours daily (Working/Student)' },
    { value: '2-4', label: '2-4 hours daily (Part-time preparation)' },
    { value: '4-6', label: '4-6 hours daily (Serious preparation)' },
    { value: '6-8', label: '6-8 hours daily (Intensive preparation)' },
    { value: '8-10', label: '8-10 hours daily (Full-time preparation)' },
    { value: '10+', label: '10+ hours daily (Complete dedication)' }
  ];

  const optionalSubjects = [
    'Geography', 'History', 'Political Science', 'Public Administration', 'Sociology',
    'Psychology', 'Anthropology', 'Philosophy', 'Economics', 'Mathematics',
    'Physics', 'Chemistry', 'Botany', 'Zoology', 'Medical Science',
    'Engineering', 'Management', 'Law', 'Literature (Hindi)', 'Literature (English)',
    'Literature (Regional)', 'Not decided yet', 'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate comprehensive query data
    const queryId = `QUERY${Date.now()}`;
    const comprehensiveQueryData = {
      id: queryId,
      submittedAt: new Date().toISOString(),
      status: 'pending',
      priority: formData.urgencyLevel || 'normal',
      
      // Personal Information
      personalInfo: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        gender: formData.gender,
        address: formData.address,
        city: formData.city,
        state: formData.state
      },
      
      // Educational Background
      education: {
        currentStatus: formData.currentStatus,
        qualification: formData.qualification,
        college: formData.college,
        graduationYear: formData.graduationYear,
        workExperience: formData.workExperience
      },
      
      // UPSC Preparation
      upscPreparation: {
        preparationStage: formData.preparationStage,
        timeAvailable: formData.timeAvailable,
        previousAttempts: formData.previousAttempts,
        targetYear: formData.targetYear,
        optionalSubject: formData.optionalSubject,
        coachingStatus: formData.coachingStatus
      },
      
      // Study Details
      studyDetails: {
        subjects: formData.subjects,
        strongSubjects: formData.strongSubjects,
        weakSubjects: formData.weakSubjects,
        studyMaterials: formData.studyMaterials,
        currentAffairsSource: formData.currentAffairsSource
      },
      
      // Challenges and Queries
      challenges: {
        specificQuery: formData.specificQuery,
        challenges: formData.challenges,
        timeManagementIssues: formData.timeManagementIssues,
        motivationLevel: formData.motivationLevel,
        familySupport: formData.familySupport,
        financialConstraints: formData.financialConstraints
      },
      
      // Goals and Additional Info
      goals: {
        careerGoals: formData.careerGoals,
        servicePreference: formData.servicePreference,
        expectedGuidance: formData.expectedGuidance,
        urgencyLevel: formData.urgencyLevel
      },
      
      // Additional Information
      additional: {
        hobbies: formData.hobbies,
        languagesKnown: formData.languagesKnown,
        computerSkills: formData.computerSkills,
        additionalInfo: formData.additionalInfo
      },
      
      // Complete form data for admin reference
      completeFormData: formData
    };
    
    // Store in localStorage (in real app, this would go to database/API)
    localStorage.setItem(`student_query_${queryId}`, JSON.stringify(comprehensiveQueryData));
    
    // Also store in admin queries list
    const adminQueries = JSON.parse(localStorage.getItem('adminQueries') || '[]');
    adminQueries.unshift(comprehensiveQueryData);
    localStorage.setItem('adminQueries', JSON.stringify(adminQueries));
    
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '', email: '', phone: '', age: '', gender: '', address: '', city: '', state: '',
      currentStatus: '', qualification: '', college: '', graduationYear: '', workExperience: '',
      preparationStage: '', timeAvailable: '', previousAttempts: '', targetYear: '', optionalSubject: '', coachingStatus: '',
      subjects: '', strongSubjects: '', weakSubjects: '', studyMaterials: '', currentAffairsSource: '',
      specificQuery: '', challenges: '', timeManagementIssues: '', motivationLevel: '', familySupport: '', financialConstraints: '',
      careerGoals: '', servicePreference: '', expectedGuidance: '', urgencyLevel: '',
      hobbies: '', languagesKnown: '', computerSkills: '', additionalInfo: ''
    });
    setCurrentStep(1);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Header />
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-12">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Comprehensive Query Submitted Successfully! 🎉
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Thank you for providing detailed information! Dr. Navjot Simi IPS will review your comprehensive profile 
                and provide personalized guidance within 24-48 hours.
              </p>
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 text-green-300">
                  <CheckCircle className="w-5 h-5" />
                  <span>Comprehensive profile received and analyzed</span>
                </div>
                <div className="flex items-center gap-3 text-green-300">
                  <CheckCircle className="w-5 h-5" />
                  <span>Personalized guidance being prepared</span>
                </div>
                <div className="flex items-center gap-3 text-yellow-300">
                  <Clock className="w-5 h-5" />
                  <span>Detailed response within 24-48 hours</span>
                </div>
                <div className="flex items-center gap-3 text-blue-300">
                  <MessageSquare className="w-5 h-5" />
                  <span>Follow-up support available</span>
                </div>
              </div>
              <div className="mt-8 flex gap-4 justify-center">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Query
                </Button>
                <Button 
                  variant="outline" 
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                  onClick={() => window.location.href = '/upsc-resources'}
                >
                  Explore Resources
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
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
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="bg-slate-700 border-slate-600 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Age
                </label>
                <Input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Your age"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  City
                </label>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Your city"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Address
              </label>
              <Textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={2}
                placeholder="Your complete address"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Educational Background & Current Status</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Status *
                </label>
                <select
                  name="currentStatus"
                  value={formData.currentStatus}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                >
                  <option value="">Select your current status</option>
                  <option value="student">Student (Undergraduate/Postgraduate)</option>
                  <option value="working-private">Working Professional (Private)</option>
                  <option value="working-government">Working Professional (Government)</option>
                  <option value="unemployed">Unemployed/Full-time UPSC Preparation</option>
                  <option value="business">Business/Self-employed</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Highest Qualification *
                </label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                >
                  <option value="">Select qualification</option>
                  <option value="graduation">Graduation (Bachelor's)</option>
                  <option value="post-graduation">Post Graduation (Master's)</option>
                  <option value="phd">PhD/Doctorate</option>
                  <option value="professional">Professional Degree (CA/CS/Medical/Engineering)</option>
                  <option value="diploma">Diploma</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  College/University
                </label>
                <Input
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  placeholder="Name of your college/university"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Graduation Year
                </label>
                <Input
                  type="number"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  placeholder="Year of graduation"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Work Experience (if any)
              </label>
              <Textarea
                name="workExperience"
                value={formData.workExperience}
                onChange={handleInputChange}
                rows={3}
                placeholder="Describe your work experience, job roles, duration, etc."
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">UPSC Preparation Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preparation Stage *
                </label>
                <select
                  name="preparationStage"
                  value={formData.preparationStage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                >
                  <option value="">Select preparation stage</option>
                  {preparationStages.map((stage) => (
                    <option key={stage.value} value={stage.value}>
                      {stage.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Time Available Daily *
                </label>
                <select
                  name="timeAvailable"
                  value={formData.timeAvailable}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                >
                  <option value="">Select time available</option>
                  {timeAvailableOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Previous UPSC Attempts
                </label>
                <select
                  name="previousAttempts"
                  value={formData.previousAttempts}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select attempts</option>
                  <option value="0">First attempt</option>
                  <option value="1">Second attempt</option>
                  <option value="2">Third attempt</option>
                  <option value="3">Fourth attempt</option>
                  <option value="4+">More than 4 attempts</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Target Year
                </label>
                <select
                  name="targetYear"
                  value={formData.targetYear}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select target year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="not-decided">Not decided yet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Optional Subject
                </label>
                <select
                  name="optionalSubject"
                  value={formData.optionalSubject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select optional subject</option>
                  {optionalSubjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Coaching Status
                </label>
                <select
                  name="coachingStatus"
                  value={formData.coachingStatus}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select coaching status</option>
                  <option value="no-coaching">Self-study (No coaching)</option>
                  <option value="online-coaching">Online coaching</option>
                  <option value="offline-coaching">Offline coaching</option>
                  <option value="hybrid">Both online and offline</option>
                  <option value="planning">Planning to join coaching</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Study Details & Challenges</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Strong Subjects
                </label>
                <Textarea
                  name="strongSubjects"
                  value={formData.strongSubjects}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Subjects you are confident in"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Weak Subjects
                </label>
                <Textarea
                  name="weakSubjects"
                  value={formData.weakSubjects}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Subjects you find challenging"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Current Study Materials
              </label>
              <Textarea
                name="studyMaterials"
                value={formData.studyMaterials}
                onChange={handleInputChange}
                rows={3}
                placeholder="List the books, online resources, coaching materials you are currently using"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Current Affairs Sources
              </label>
              <Input
                name="currentAffairsSource"
                value={formData.currentAffairsSource}
                onChange={handleInputChange}
                placeholder="Newspapers, magazines, websites you follow for current affairs"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Main Challenges in Preparation
              </label>
              <Textarea
                name="challenges"
                value={formData.challenges}
                onChange={handleInputChange}
                rows={3}
                placeholder="Describe your main challenges - time management, motivation, specific subjects, etc."
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Motivation Level
                </label>
                <select
                  name="motivationLevel"
                  value={formData.motivationLevel}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select motivation level</option>
                  <option value="very-high">Very High</option>
                  <option value="high">High</option>
                  <option value="moderate">Moderate</option>
                  <option value="low">Low</option>
                  <option value="fluctuating">Fluctuating</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Family Support
                </label>
                <select
                  name="familySupport"
                  value={formData.familySupport}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select family support level</option>
                  <option value="very-supportive">Very Supportive</option>
                  <option value="supportive">Supportive</option>
                  <option value="neutral">Neutral</option>
                  <option value="not-supportive">Not Supportive</option>
                  <option value="pressuring">Pressuring for other career</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Specific Query & Goals</h3>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Specific Query/Question *
              </label>
              <Textarea
                name="specificQuery"
                value={formData.specificQuery}
                onChange={handleInputChange}
                rows={4}
                placeholder="Ask your specific question about UPSC preparation, study strategy, time management, career guidance, etc."
                className="bg-slate-700 border-slate-600 text-white"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service Preference
                </label>
                <select
                  name="servicePreference"
                  value={formData.servicePreference}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select service preference</option>
                  <option value="ias">IAS (Indian Administrative Service)</option>
                  <option value="ips">IPS (Indian Police Service)</option>
                  <option value="ifs">IFS (Indian Foreign Service)</option>
                  <option value="irs">IRS (Indian Revenue Service)</option>
                  <option value="any">Any Central Service</option>
                  <option value="state-services">State Services</option>
                  <option value="not-decided">Not decided yet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Urgency Level
                </label>
                <select
                  name="urgencyLevel"
                  value={formData.urgencyLevel}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="normal">Normal</option>
                  <option value="high">High (Exam approaching)</option>
                  <option value="urgent">Urgent (Need immediate guidance)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                What type of guidance do you expect?
              </label>
              <Textarea
                name="expectedGuidance"
                value={formData.expectedGuidance}
                onChange={handleInputChange}
                rows={3}
                placeholder="Describe what kind of guidance you are looking for - study plan, motivation, strategy, etc."
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Career Goals & Aspirations
              </label>
              <Textarea
                name="careerGoals"
                value={formData.careerGoals}
                onChange={handleInputChange}
                rows={3}
                placeholder="Describe your long-term career goals and why you want to join civil services"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Additional Information
              </label>
              <Textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={3}
                placeholder="Any other information you would like to share - hobbies, achievements, special circumstances, etc."
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">
              Comprehensive Personalized Guidance
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Expert UPSC Guidance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Submit detailed information about your preparation journey and get comprehensive, 
              personalized guidance from Dr. Navjot Simi IPS
            </p>
            <div className="flex items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-400" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-400" />
                <span>24-48 Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-green-400" />
                <span>Personalized Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidance Areas */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Comprehensive Guidance Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guidanceAreas.map((area, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${area.color}`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-3">{area.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-slate-800/50 border-slate-700 p-8">
            <CardHeader className="px-0 pt-0">
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                  Comprehensive Guidance Form
                </CardTitle>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  Step {currentStep} of {totalSteps}
                </Badge>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                <div 
                  className="bg-blue-400 h-2 rounded-full transition-all duration-300" 
                  style={{width: `${(currentStep / totalSteps) * 100}%`}}
                ></div>
              </div>
              <p className="text-gray-300">
                Please provide detailed information to receive personalized guidance tailored to your specific needs and preparation stage.
              </p>
            </CardHeader>
            
            <CardContent className="px-0">
              <form onSubmit={handleSubmit}>
                {renderStepContent()}
                
                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    Previous
                  </Button>
                  
                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white px-8"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Submit Comprehensive Query
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}