"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { User, Lock, Eye, EyeOff, AlertCircle, BookOpen, UserPlus, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function StudentLogin() {
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [forgotEmail, setForgotEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'login' | 'signup' | 'forgot') => {
    if (type === 'login') {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    } else if (type === 'signup') {
      setSignupData({ ...signupData, [e.target.name]: e.target.value });
    } else {
      setForgotEmail(e.target.value);
    }
    setError('');
    setSuccess('');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check if user exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('studentUsers') || '[]');
    const user = existingUsers.find((u: any) => u.email === loginData.email && u.password === loginData.password);

    if (user) {
      // Store user session
      localStorage.setItem('studentSession', JSON.stringify({
        ...user,
        loginTime: new Date().toISOString()
      }));
      router.push('/student-dashboard');
    } else {
      setError('Invalid email or password. Please try again or sign up if you don\'t have an account.');
    }

    setIsLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (signupData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('studentUsers') || '[]');
    const userExists = existingUsers.find((u: any) => u.email === signupData.email);

    if (userExists) {
      setError('An account with this email already exists. Please login instead.');
      setIsLoading(false);
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name: signupData.name,
      email: signupData.email,
      phone: signupData.phone,
      password: signupData.password,
      createdAt: new Date().toISOString(),
      bookmarks: [],
      queries: []
    };

    existingUsers.push(newUser);
    localStorage.setItem('studentUsers', JSON.stringify(existingUsers));

    setSuccess('Account created successfully! You can now login.');
    setActiveTab('login');
    setSignupData({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

    setIsLoading(false);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check if email exists
    const existingUsers = JSON.parse(localStorage.getItem('studentUsers') || '[]');
    const user = existingUsers.find((u: any) => u.email === forgotEmail);

    if (user) {
      setSuccess('Password reset instructions have been sent to your email. Please check your inbox.');
    } else {
      setError('No account found with this email address.');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-green-500/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Student Portal
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access your personalized dashboard, track your queries, bookmark resources, and get expert guidance
            </p>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-4">
              100% Free for Students
            </Badge>
          </div>
        </div>
      </section>

      {/* Login/Signup Section */}
      <section className="py-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex mb-8 bg-slate-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'login' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'signup' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setActiveTab('forgot')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'forgot' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Forgot Password
            </button>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 p-8">
            {/* Login Tab */}
            {activeTab === 'login' && (
              <>
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <User className="w-6 h-6 text-green-400" />
                    Student Login
                  </CardTitle>
                  <p className="text-gray-300">
                    Access your personalized dashboard and resources
                  </p>
                </CardHeader>
                
                <CardContent className="px-0">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="email"
                          name="email"
                          value={loginData.email}
                          onChange={(e) => handleInputChange(e, 'login')}
                          placeholder="Enter your email"
                          className="pl-10 bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password *
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={loginData.password}
                          onChange={(e) => handleInputChange(e, 'login')}
                          placeholder="Enter your password"
                          className="pl-10 pr-10 bg-slate-700 border-slate-600 text-white"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {error && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <p className="text-red-300 text-sm">{error}</p>
                      </div>
                    )}

                    {success && (
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-green-300 text-sm">{success}</p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Logging in...
                        </div>
                      ) : (
                        <>
                          <User className="w-5 h-5 mr-2" />
                          Login to Dashboard
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </>
            )}

            {/* Signup Tab */}
            {activeTab === 'signup' && (
              <>
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <UserPlus className="w-6 h-6 text-green-400" />
                    Create Account
                  </CardTitle>
                  <p className="text-gray-300">
                    Join thousands of UPSC aspirants getting free guidance
                  </p>
                </CardHeader>
                
                <CardContent className="px-0">
                  <form onSubmit={handleSignup} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={signupData.name}
                        onChange={(e) => handleInputChange(e, 'signup')}
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
                        value={signupData.email}
                        onChange={(e) => handleInputChange(e, 'signup')}
                        placeholder="Enter your email"
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={signupData.phone}
                        onChange={(e) => handleInputChange(e, 'signup')}
                        placeholder="Enter your phone number"
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password *
                      </label>
                      <Input
                        type="password"
                        name="password"
                        value={signupData.password}
                        onChange={(e) => handleInputChange(e, 'signup')}
                        placeholder="Create a password (min 6 characters)"
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Confirm Password *
                      </label>
                      <Input
                        type="password"
                        name="confirmPassword"
                        value={signupData.confirmPassword}
                        onChange={(e) => handleInputChange(e, 'signup')}
                        placeholder="Confirm your password"
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>

                    {error && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <p className="text-red-300 text-sm">{error}</p>
                      </div>
                    )}

                    {success && (
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-green-300 text-sm">{success}</p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Creating Account...
                        </div>
                      ) : (
                        <>
                          <UserPlus className="w-5 h-5 mr-2" />
                          Create Free Account
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </>
            )}

            {/* Forgot Password Tab */}
            {activeTab === 'forgot' && (
              <>
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <Lock className="w-6 h-6 text-yellow-400" />
                    Reset Password
                  </CardTitle>
                  <p className="text-gray-300">
                    Enter your email to receive password reset instructions
                  </p>
                </CardHeader>
                
                <CardContent className="px-0">
                  <form onSubmit={handleForgotPassword} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="email"
                          value={forgotEmail}
                          onChange={(e) => handleInputChange(e, 'forgot')}
                          placeholder="Enter your registered email"
                          className="pl-10 bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <p className="text-red-300 text-sm">{error}</p>
                      </div>
                    )}

                    {success && (
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-green-300 text-sm">{success}</p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Instructions...
                        </div>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 mr-2" />
                          Send Reset Instructions
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}