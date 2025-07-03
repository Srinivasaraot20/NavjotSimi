"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, User, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function OfficerLogin() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    department: 'general'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const departments = [
    { id: 'general', label: 'General Administration', code: 'GA' },
    { id: 'law-order', label: 'Law & Order', code: 'LO' },
    { id: 'crime-branch', label: 'Crime Branch', code: 'CB' },
    { id: 'traffic', label: 'Traffic Police', code: 'TP' },
    { id: 'cyber-crime', label: 'Cyber Crime', code: 'CC' },
    { id: 'women-cell', label: 'Women Cell', code: 'WC' },
    { id: 'community', label: 'Community Policing', code: 'CP' },
    { id: 'investigation', label: 'Investigation', code: 'INV' }
  ];

  // Demo credentials for testing
  const demoCredentials = [
    { username: 'officer.admin', password: 'admin123', department: 'general', name: 'Dr. Navjot Simi IPS', rank: 'SP' },
    { username: 'officer.law', password: 'law123', department: 'law-order', name: 'Inspector Rajesh Kumar', rank: 'Inspector' },
    { username: 'officer.crime', password: 'crime123', department: 'crime-branch', name: 'ASI Priya Sharma', rank: 'ASI' },
    { username: 'officer.traffic', password: 'traffic123', department: 'traffic', name: 'SI Amit Singh', rank: 'SI' },
    { username: 'officer.cyber', password: 'cyber123', department: 'cyber-crime', name: 'Inspector Sunita Rao', rank: 'Inspector' },
    { username: 'officer.women', password: 'women123', department: 'women-cell', name: 'ASI Kavita Jain', rank: 'ASI' },
    { username: 'officer.community', password: 'community123', department: 'community', name: 'SI Manish Gupta', rank: 'SI' },
    { username: 'officer.investigation', password: 'inv123', department: 'investigation', name: 'Inspector Deepika Rao', rank: 'Inspector' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check credentials
    const officer = demoCredentials.find(
      cred => cred.username === loginData.username && 
              cred.password === loginData.password && 
              cred.department === loginData.department
    );

    if (officer) {
      // Store officer data in localStorage for demo
      localStorage.setItem('officerData', JSON.stringify(officer));
      router.push('/officer-dashboard');
    } else {
      setError('Invalid credentials. Please check your username, password, and department.');
    }

    setIsLoading(false);
  };

  const fillDemoCredentials = (credentials: any) => {
    setLoginData({
      username: credentials.username,
      password: credentials.password,
      department: credentials.department
    });
    setError('');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-blue-500/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Shield className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Officer Login Portal
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Secure access for police officers to manage citizen requests, appointments, and departmental tasks
            </p>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Login Form */}
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-400" />
                  Officer Authentication
                </CardTitle>
                <p className="text-gray-300">
                  Please enter your credentials to access the officer dashboard
                </p>
              </CardHeader>
              
              <CardContent className="px-0">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Officer Username *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="text"
                        name="username"
                        value={loginData.username}
                        onChange={handleInputChange}
                        placeholder="Enter your officer username"
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
                        onChange={handleInputChange}
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

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={loginData.department}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      required
                    >
                      {departments.map((dept) => (
                        <option key={dept.id} value={dept.id}>
                          {dept.label} ({dept.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-red-400 font-medium">Authentication Failed</p>
                        <p className="text-red-300 text-sm">{error}</p>
                      </div>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Authenticating...
                      </div>
                    ) : (
                      <>
                        <Shield className="w-5 h-5 mr-2" />
                        Login to Dashboard
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-slate-600">
                  <p className="text-sm text-gray-400 text-center mb-4">
                    Forgot your credentials? Contact IT Support: +91-172-2740344
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Demo Credentials & Info */}
            <div className="space-y-6">
              {/* Demo Credentials */}
              <Card className="bg-blue-500/10 border-blue-500/30 p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-blue-400 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Demo Credentials
                  </CardTitle>
                  <p className="text-blue-300 text-sm">
                    Use these demo credentials to test the officer dashboard
                  </p>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-3">
                    {demoCredentials.slice(0, 4).map((cred, index) => (
                      <div 
                        key={index}
                        className="p-3 bg-slate-800/50 rounded-lg border border-slate-600 cursor-pointer hover:bg-slate-700 transition-colors"
                        onClick={() => fillDemoCredentials(cred)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-white">{cred.name}</span>
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                            {cred.rank}
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-400 space-y-1">
                          <div>Username: <span className="text-blue-400">{cred.username}</span></div>
                          <div>Password: <span className="text-blue-400">{cred.password}</span></div>
                          <div>Department: <span className="text-blue-400">{departments.find(d => d.id === cred.department)?.label}</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-blue-300 mt-4">
                    Click on any credential card to auto-fill the login form
                  </p>
                </CardContent>
              </Card>

              {/* Security Features */}
              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-white">Security Features</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                      <div>
                        <p className="text-white font-medium">Multi-Factor Authentication</p>
                        <p className="text-gray-400">Secure login with department verification</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                      <div>
                        <p className="text-white font-medium">Role-Based Access</p>
                        <p className="text-gray-400">Department-specific dashboard access</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                      <div>
                        <p className="text-white font-medium">Session Management</p>
                        <p className="text-gray-400">Automatic logout for security</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                      <div>
                        <p className="text-white font-medium">Audit Trail</p>
                        <p className="text-gray-400">All actions are logged and tracked</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Department Info */}
              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-white">Department Access</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {departments.map((dept) => (
                      <div key={dept.id} className="flex items-center gap-2 p-2 bg-slate-700/50 rounded">
                        <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                          {dept.code}
                        </Badge>
                        <span className="text-gray-300">{dept.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}