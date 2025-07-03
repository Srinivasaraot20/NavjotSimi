"use client";

import { useState, useEffect } from 'react';
import { GraduationCap, Award, Users, Target, BookOpen, Heart, Shield, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Journey = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const journeyPhases = [
    {
      phase: "Dental Education",
      period: "2005-2010",
      title: "Foundation in Healthcare",
      description: "Completed Bachelor of Dental Surgery (BDS) from Baba Jaswant Singh Dental Hospital and Research Institute in Ludhiana, establishing a strong foundation in healthcare and service.",
      icon: Heart,
      color: "from-red-500 to-red-700",
      achievements: [
        "Completed BDS with excellent academic record",
        "Gained practical experience in dental healthcare",
        "Developed patient care and communication skills",
        "Built foundation for service-oriented career"
      ],
      quote: "Dentistry taught me to care for individuals, but I wanted to serve society at large."
    },
    {
      phase: "Professional Practice",
      period: "2010-2017",
      title: "Early Career as Dentist",
      description: "Started professional career as a dentist, gaining valuable experience in healthcare while gradually developing interest in civil services and broader social impact.",
      icon: BookOpen,
      color: "from-blue-500 to-blue-700",
      achievements: [
        "Established dental practice",
        "Gained professional healthcare experience",
        "Developed leadership and management skills",
        "Realized calling for broader social service"
      ],
      quote: "Working as a dentist made me realize I wanted to impact society on a larger scale."
    },
    {
      phase: "UPSC Preparation",
      period: "2017-2018",
      title: "The Determined Journey",
      description: "Decided to pursue civil services with full dedication. Prepared systematically and achieved success in the first attempt.",
      icon: Target,
      color: "from-yellow-500 to-yellow-700",
      achievements: [
        "Made the bold decision to pursue civil services",
        "Dedicated preparation with systematic approach",
        "Balanced work and preparation effectively",
        "Achieved success in first attempt"
      ],
      quote: "Success in UPSC requires not just knowledge, but the right approach and unwavering determination."
    },
    {
      phase: "UPSC Success",
      period: "2018",
      title: "UPSC Success",
      description: "Achieved success in UPSC Civil Services Examination 2018 in first attempt, proving that dedication and smart preparation can lead to success.",
      icon: Award,
      color: "from-green-500 to-green-700",
      achievements: [
        "Allocated to Bihar cadre IPS",
        "Proved that career transition is possible",
        "Became inspiration for many aspirants"
      ],
      quote: "UPSC success was not just a result, but validation that with dedication, any dream is achievable."
    },
    {
      phase: "IPS Training",
      period: "2018-2019",
      title: "Professional Foundation",
      description: "Underwent rigorous training at Sardar Vallabhbhai Patel National Police Academy, learning the nuances of law enforcement, leadership, and public service.",
      icon: Shield,
      color: "from-purple-500 to-purple-700",
      achievements: [
        "Completed training at SVPNPA, Hyderabad",
        "Excelled in law enforcement modules",
        "Developed leadership and crisis management skills",
        "Prepared for field responsibilities in Bihar"
      ],
      quote: "Training taught me that being an IPS officer is about serving people with integrity and courage."
    },
    {
      phase: "Field Service & Leadership",
      period: "2019-Present",
      title: "Service & Excellence",
      description: "Currently serving as Commandant of Bihar Military Police (BMP) 8 in Begusarai while building a beautiful family with IAS officer Tushar Singla and inspiring countless UPSC aspirants.",
      icon: Star,
      color: "from-indigo-500 to-indigo-700",
      achievements: [
        "Currently serving as Commandant, BMP 8, Begusarai",
        "Married to IAS Tushar Singla (District Magistrate, Begusarai)",
        "Mother to son Miraan",
        "Active mentor for UPSC aspirants"
      ],
      quote: "True success is when you can balance professional excellence with personal happiness and inspire others along the way."
    }
  ];

  const inspirationalQuotes = [
    {
      quote: "The transition from dentistry to civil services taught me that sometimes the biggest risk is not taking any risk at all.",
      context: "On career change"
    },
    {
      quote: "UPSC success in the first attempt showed me that with proper planning and dedication, any goal is achievable.",
      context: "On achievement"
    },
    {
      quote: "Every citizen interaction is an opportunity to build trust and make a positive difference in someone's life.",
      context: "On policing philosophy"
    }
  ];

  const journeyNumbers = [
    { number: "6+", label: "Years of Service", description: "Dedicated to Nation" },
    { number: "500+", label: "Aspirants Mentored", description: "UPSC Success Stories" },
    { number: "1st", label: "Attempt Success", description: "UPSC Achievement" }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">Journey of Perseverance</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Dentistry to IPS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A remarkable journey of transformation, resilience, and service - from healing smiles 
            as a dentist to serving society as an IPS officer.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 hidden lg:block" />

          <div className="space-y-16">
            {journeyPhases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } ${isVisible ? `animate-slideInLeft animate-delay-${(index + 1) * 200}` : 'opacity-0'}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 hidden lg:block" />

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card 
                    className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all duration-300 cursor-pointer hover-lift glass ${
                      activePhase === index ? 'ring-2 ring-blue-500 shadow-lg' : ''
                    }`}
                    onClick={() => setActivePhase(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${phase.color}`}>
                          <phase.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                              {phase.period}
                            </Badge>
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                              {phase.phase}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {phase.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-4">
                        {phase.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 mb-4">
                        <h4 className="font-semibold text-white text-sm">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {phase.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Quote */}
                      <div className="bg-slate-700/50 p-4 rounded-lg border-l-4 border-blue-500">
                        <p className="text-gray-300 italic text-sm">
                          "{phase.quote}"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Inspirational Quotes Section */}
        <div className={`mt-20 ${isVisible ? 'animate-fadeInUp animate-delay-1000' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Words of Wisdom
            </h3>
            <p className="text-gray-300">
              Insights and reflections from the journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {inspirationalQuotes.map((item, index) => (
              <Card key={index} className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass animate-scaleIn animate-delay-${(index + 1) * 200}`}>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-blue-400">"</span>
                    </div>
                    <blockquote className="text-gray-300 italic mb-4 leading-relaxed">
                      {item.quote}
                    </blockquote>
                    <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                      {item.context}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Journey Numbers - Centered */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {journeyNumbers.map((item, idx) => (
            <div key={idx} className="text-center group animate-countUp animate-delay-${(idx + 1) * 100}">
              <div className="bg-slate-800/50 glass rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover-lift border border-slate-700">
                <div className="text-4xl font-bold text-blue-400 mb-2">{item.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{item.label}</div>
                <div className="text-sm text-gray-400">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
