"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Star, Quote, ChevronLeft, ChevronRight, Trophy, Users, Calendar, X, BookOpen, Award, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SuccessStory {
  id: number;
  name: string;
  rank: string;
  service: string;
  year: string;
  image: string;
  quote: string;
  story: string;
  background: string;
  attempts: number;
  optional: string;
  fullStory: string;
  preparation: {
    duration: string;
    strategy: string;
    challenges: string[];
    resources: string[];
  };
  advice: string[];
}

export default function SuccessStoriesPage() {
  const [currentStory, setCurrentStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stories: SuccessStory[] = [
    {
      id: 1,
      name: "Priya Sharma",
      rank: "AIR 15",
      service: "IAS",
      year: "2023",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Dr. Navjot Simi's guidance was instrumental in my success. Her practical approach and constant motivation helped me clear UPSC in my second attempt.",
      story: "Coming from a small town in Rajasthan, I always dreamed of becoming an IAS officer. Dr. Simi's mentorship program provided me with the right direction and study materials. Her emphasis on answer writing and current affairs preparation made all the difference.",
      background: "Engineering Graduate",
      attempts: 2,
      optional: "Public Administration",
      fullStory: "My journey to UPSC success wasn't straightforward. After completing my engineering degree, I worked in the private sector for two years before deciding to pursue civil services. The transition was challenging, but Dr. Navjot Simi's guidance made it possible. Her structured approach to preparation, emphasis on conceptual clarity, and regular feedback sessions were game-changers. The mock interviews and answer writing practice sessions helped me build confidence and improve my presentation skills.",
      preparation: {
        duration: "18 months",
        strategy: "Focused on conceptual clarity and regular revision",
        challenges: ["Time management", "Answer writing", "Interview preparation"],
        resources: ["NCERT books", "Standard reference books", "Dr. Simi's guidance materials"]
      },
      advice: [
        "Start with NCERT books for building strong foundation",
        "Practice answer writing regularly",
        "Stay updated with current affairs",
        "Take regular mock tests",
        "Maintain consistency in preparation"
      ]
    },
    {
      id: 2,
      name: "Rahul Verma",
      rank: "AIR 42",
      service: "IPS",
      year: "2023",
      image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "The interview preparation sessions and personality development guidance from Dr. Simi were exceptional. She helped me present my best self.",
      story: "As an aspirant from a rural background, I lacked confidence in communication. Dr. Simi's personalized coaching sessions transformed my personality and communication skills, leading to my selection as an IPS officer.",
      background: "Arts Graduate",
      attempts: 3,
      optional: "Sociology",
      fullStory: "Coming from a rural background in Uttar Pradesh, I faced numerous challenges in my UPSC journey. Language barriers, lack of resources, and limited exposure were major hurdles. Dr. Navjot Simi's mentorship program not only provided academic guidance but also helped in personality development. Her emphasis on building confidence and improving communication skills was crucial for my success.",
      preparation: {
        duration: "3 years",
        strategy: "Gradual improvement with focus on weak areas",
        challenges: ["Language barrier", "Confidence issues", "Limited resources"],
        resources: ["Online materials", "Library books", "Mentorship sessions"]
      },
      advice: [
        "Don't let background limitations discourage you",
        "Work on communication skills",
        "Seek guidance from experienced mentors",
        "Practice speaking in English regularly",
        "Believe in yourself and stay persistent"
      ]
    },
    {
      id: 3,
      name: "Anita Gupta",
      rank: "AIR 8",
      service: "IAS",
      year: "2022",
      image: "https://images.pexels.com/photos/5668887/pexels-photo-5668887.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Dr. Simi's comprehensive study material and regular mock tests were game-changers. Her mentorship goes beyond academics to overall personality development.",
      story: "Balancing job and UPSC preparation was challenging. Dr. Simi's structured approach and time management techniques helped me optimize my preparation while working full-time.",
      background: "Working Professional",
      attempts: 1,
      optional: "Geography",
      fullStory: "As a working professional in the IT sector, finding time for UPSC preparation was my biggest challenge. Dr. Navjot Simi's guidance helped me create an effective study schedule that balanced work and preparation. Her emphasis on smart study techniques and efficient time management made it possible to clear UPSC in my first attempt while continuing my job.",
      preparation: {
        duration: "14 months",
        strategy: "Smart study with efficient time management",
        challenges: ["Time constraints", "Work-study balance", "Stress management"],
        resources: ["Online courses", "Weekend classes", "Mobile apps for current affairs"]
      },
      advice: [
        "Create a realistic study schedule",
        "Use technology for efficient learning",
        "Focus on quality over quantity",
        "Take care of your health",
        "Stay motivated and focused on your goal"
      ]
    },
    {
      id: 4,
      name: "Vikash Kumar",
      rank: "AIR 156",
      service: "IFS",
      year: "2023",
      image: "https://images.pexels.com/photos/5490275/pexels-photo-5490275.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "The ethics and governance preparation under Dr. Simi's guidance was outstanding. Her real-life examples made complex concepts easy to understand.",
      story: "Coming from a farmer's family, resources were limited. Dr. Simi's scholarship program and free study materials made quality education accessible to me.",
      background: "Agriculture Background",
      attempts: 2,
      optional: "Agriculture",
      fullStory: "Born into a farming family in Bihar, I understood the challenges faced by rural India firsthand. This motivated me to join the civil services to bring about positive change. Dr. Navjot Simi's free guidance program was a blessing for someone like me with limited financial resources. Her comprehensive study materials and regular doubt-clearing sessions helped me achieve my dream of becoming an IFS officer.",
      preparation: {
        duration: "2 years",
        strategy: "Systematic preparation with focus on rural issues",
        challenges: ["Financial constraints", "Limited resources", "Family pressure"],
        resources: ["Free online materials", "Library resources", "Scholarship programs"]
      },
      advice: [
        "Don't let financial constraints stop you",
        "Utilize free resources effectively",
        "Connect your background with your preparation",
        "Seek help from mentors and seniors",
        "Stay determined despite challenges"
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Stories', count: stories.length },
    { id: 'ias', label: 'IAS Success', count: stories.filter(s => s.service === 'IAS').length },
    { id: 'ips', label: 'IPS Success', count: stories.filter(s => s.service === 'IPS').length },
    { id: 'ifs', label: 'IFS Success', count: stories.filter(s => s.service === 'IFS').length },
    { id: 'first-attempt', label: 'First Attempt', count: stories.filter(s => s.attempts === 1).length }
  ];

  const filteredStories = activeCategory === 'all' 
    ? stories 
    : activeCategory === 'first-attempt'
    ? stories.filter(story => story.attempts === 1)
    : stories.filter(story => story.service.toLowerCase() === activeCategory);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % filteredStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  const openFullStory = (story: SuccessStory) => {
    setSelectedStory(story);
  };

  const closeFullStory = () => {
    setSelectedStory(null);
  };

  const stats = [
    { icon: Trophy, number: "500+", label: "Success Stories" },
    { icon: Users, number: "95%", label: "Success Rate" },
    { icon: Star, number: "4.9", label: "Average Rating" },
    { icon: Calendar, number: "5+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Inspiring journeys of UPSC aspirants who achieved their dreams with guidance and dedication
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <BookOpen className="w-5 h-5 mr-2" />
                Read Stories
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Target className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div key={index} className={`text-center group animate-countUp animate-delay-${(index + 1) * 100}`}>
                <div className="bg-slate-800/50 glass rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover-lift border border-slate-700">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentStory(0);
                }}
                className={`${
                  activeCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 bg-slate-700 text-slate-300">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-400' : 'opacity-0'}`}>
            <Card className="overflow-hidden shadow-2xl bg-slate-800/50 border-slate-700 glass">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Story Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <Image
                          src={filteredStories[currentStory]?.image || ''}
                          alt={filteredStories[currentStory]?.name || ''}
                          width={80}
                          height={80}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {filteredStories[currentStory]?.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            {filteredStories[currentStory]?.service} {filteredStories[currentStory]?.rank}
                          </Badge>
                          <span className="text-gray-400">• {filteredStories[currentStory]?.year}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <Quote className="w-8 h-8 text-blue-400 mb-4" />
                      <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                        "{filteredStories[currentStory]?.quote}"
                      </blockquote>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {filteredStories[currentStory]?.story}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <span className="text-sm text-gray-500">Background:</span>
                        <p className="font-semibold text-white">{filteredStories[currentStory]?.background}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Attempts:</span>
                        <p className="font-semibold text-white">{filteredStories[currentStory]?.attempts}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Optional:</span>
                        <p className="font-semibold text-white">{filteredStories[currentStory]?.optional}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Service:</span>
                        <p className="font-semibold text-white">{filteredStories[currentStory]?.service}</p>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                      <Button 
                        variant="outline" 
                        onClick={prevStory}
                        className="flex items-center gap-2 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Previous
                      </Button>
                      
                      <div className="flex space-x-2">
                        {filteredStories.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentStory(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentStory 
                                ? 'bg-blue-400 scale-125' 
                                : 'bg-slate-600 hover:bg-slate-500'
                            }`}
                          />
                        ))}
                      </div>

                      <Button 
                        variant="outline" 
                        onClick={nextStory}
                        className="flex items-center gap-2 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                      >
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="mt-6">
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => openFullStory(filteredStories[currentStory])}
                      >
                        Read Full Story
                      </Button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative lg:min-h-[500px] bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                    <Image
                      src={filteredStories[currentStory]?.image || ''}
                      alt={filteredStories[currentStory]?.name || ''}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* All Stories Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-fadeInUp animate-delay-600' : 'opacity-0'}`}>
            {filteredStories.map((story, index) => (
              <Card key={story.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass">
                <div className="relative">
                  <Image
                    src={story.image}
                    alt={story.name}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      {story.service} {story.rank}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-white">{story.name}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{story.year}</span>
                    <span>•</span>
                    <span>{story.attempts} attempt{story.attempts > 1 ? 's' : ''}</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {story.story.substring(0, 120)}...
                  </p>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                      {story.background}
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-slate-600 text-slate-300 hover:bg-blue-600 hover:text-white"
                      onClick={() => openFullStory(story)}
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`mt-20 bg-slate-800/30 glass rounded-2xl p-8 md:p-12 text-center ${isVisible ? 'animate-fadeInUp animate-delay-800' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who achieved their UPSC dreams with expert guidance and proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-3 text-lg">
                <Award className="w-5 h-5 mr-2" />
                Get Free Guidance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Full Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden border border-slate-700">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-2xl font-bold text-white">{selectedStory.name}'s Journey</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={closeFullStory}
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-1">
                  <Image
                    src={selectedStory.image}
                    alt={selectedStory.name}
                    width={300}
                    height={300}
                    className="w-full rounded-lg object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-white mb-4">About {selectedStory.name}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <span className="text-gray-400">Rank:</span>
                      <p className="text-white font-medium">{selectedStory.service} {selectedStory.rank}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Year:</span>
                      <p className="text-white font-medium">{selectedStory.year}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Background:</span>
                      <p className="text-white font-medium">{selectedStory.background}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Attempts:</span>
                      <p className="text-white font-medium">{selectedStory.attempts}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Optional:</span>
                      <p className="text-white font-medium">{selectedStory.optional}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Preparation:</span>
                      <p className="text-white font-medium">{selectedStory.preparation.duration}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Full Story</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedStory.fullStory}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Preparation Strategy</h4>
                  <p className="text-gray-300 mb-3">{selectedStory.preparation.strategy}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-white mb-2">Challenges Faced:</h5>
                      <ul className="space-y-1">
                        {selectedStory.preparation.challenges.map((challenge, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-2">Resources Used:</h5>
                      <ul className="space-y-1">
                        {selectedStory.preparation.resources.map((resource, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                            {resource}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Advice for Aspirants</h4>
                  <ul className="space-y-2">
                    {selectedStory.advice.map((tip, index) => (
                      <li key={index} className="text-gray-300 flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-400 text-xs font-bold">{index + 1}</span>
                        </div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}