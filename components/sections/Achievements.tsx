"use client";

import { useState, useEffect } from 'react';
import { Trophy, Award, Star, Medal, Crown, Target, Users, BookOpen, Shield, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', label: 'All Achievements' },
    { id: 'academic', label: 'Academic Excellence' },
    { id: 'professional', label: 'Professional Awards' },
    { id: 'social', label: 'Social Impact' },
    { id: 'recognition', label: 'Recognition & Honors' }
  ];

  const achievements = [
    {
      id: 2,
      title: "Commandant, Bihar Military Police",
      description: "Currently serving as Commandant of Bihar Military Police (BMP) 8 in Begusarai",
      category: "professional",
      year: "2024",
      icon: Shield,
      color: "from-blue-500 to-blue-700",
      impact: "Leading military police operations and training programs",
      featured: true
    },
    {
      id: 3,
      title: "Women Empowerment Champion",
      description: "Led multiple initiatives for women's safety and empowerment across Bihar",
      category: "social",
      year: "2019-2024",
      icon: Heart,
      color: "from-pink-500 to-pink-700",
      impact: "Benefited over 10,000 women through various programs",
      featured: true
    },
    {
      id: 4,
      title: "Excellence in Community Policing",
      description: "Implemented innovative community policing models that became benchmarks",
      category: "professional",
      year: "2020",
      icon: Users,
      color: "from-green-500 to-green-700",
      impact: "Reduced crime rates by 35% in assigned areas",
      featured: false
    },
    {
      id: 5,
      title: "UPSC Mentorship Excellence Award",
      description: "Recognized for outstanding contribution to UPSC preparation and guidance",
      category: "recognition",
      year: "2021",
      icon: BookOpen,
      color: "from-purple-500 to-purple-700",
      impact: "500+ successful candidates under guidance",
      featured: false
    },
    {
      id: 6,
      title: "Youth Development Leadership",
      description: "Established comprehensive youth engagement and skill development programs",
      category: "social",
      year: "2020-2024",
      icon: Target,
      color: "from-indigo-500 to-indigo-700",
      impact: "Engaged 2,000+ youth in positive activities",
      featured: false
    },
    {
      id: 7,
      title: "Best IPS Officer - Bihar",
      description: "State-level recognition for exceptional performance and innovation",
      category: "professional",
      year: "2022",
      icon: Trophy,
      color: "from-orange-500 to-orange-700",
      impact: "Set new standards for police administration",
      featured: false
    },
    {
      id: 8,
      title: "National Police Academy Excellence",
      description: "Outstanding performance during IPS training at SVPNPA",
      category: "academic",
      year: "2019",
      icon: Medal,
      color: "from-teal-500 to-teal-700",
      impact: "Graduated with distinction in all modules",
      featured: false
    }
  ];

  const milestones = [
    {
      number: "6+",
      label: "Years of Service",
      description: "Dedicated to Nation"
    },
    {
      number: "500+",
      label: "Aspirants Guided",
      description: "UPSC Success Stories"
    },
    {
      number: "10+",
      label: "Awards Received",
      description: "Excellence Recognition"
    }
  ];

  const impactStats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Lives Impacted",
      description: "Through various initiatives"
    },
    {
      icon: Shield,
      number: "35%",
      label: "Crime Reduction",
      description: "In assigned areas"
    },
    {
      icon: BookOpen,
      number: "95%",
      label: "Success Rate",
      description: "Of mentored candidates"
    },
    {
      icon: Heart,
      number: "50+",
      label: "Programs Launched",
      description: "For community welfare"
    }
  ];

  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeCategory);

  const featuredAchievements = achievements.filter(achievement => achievement.featured);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-4">Achievements & Recognition</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Excellence in Every Endeavor
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A testament to dedication, hard work, and unwavering commitment to excellence 
            in academics, professional service, and social impact.
          </p>
        </div>

        {/* Key Milestones - Animated */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
          {milestones.map((milestone, index) => (
            <div key={index} className={`text-center group animate-countUp animate-delay-${(index + 1) * 100}`}>
              <div className="bg-slate-800/50 glass rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover-lift border border-slate-700">
                <div className="text-4xl font-bold text-blue-400 mb-2">{milestone.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{milestone.label}</div>
                <div className="text-sm text-gray-400">{milestone.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Achievements */}
        <div className={`mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-400' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredAchievements.map((achievement, index) => (
              <Card key={achievement.id} className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all duration-300 hover-lift glass animate-scaleIn animate-delay-${(index + 1) * 200}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                      {achievement.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight text-white">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="bg-slate-700/50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-300">
                      Impact: {achievement.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fadeInUp animate-delay-600' : 'opacity-0'}`}>
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
            </Button>
          ))}
        </div>

        {/* All Achievements Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-800' : 'opacity-0'}`}>
          {filteredAchievements.map((achievement) => (
            <Card key={achievement.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                        {achievement.year}
                      </Badge>
                      <Badge className="bg-slate-700 text-slate-300 text-xs capitalize">
                        {achievement.category}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-white mb-2 leading-tight">
                      {achievement.title}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="bg-slate-700/50 p-3 rounded-lg">
                  <p className="text-xs text-gray-400">
                    <span className="font-medium">Impact:</span> {achievement.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white ${isVisible ? 'animate-fadeInUp animate-delay-1000' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Making a Difference
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Quantifying the positive impact through dedicated service and leadership
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className={`text-center animate-countUp animate-delay-${(index + 1) * 200}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;