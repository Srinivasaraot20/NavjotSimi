"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight, Trophy, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stories = [
    {
      id: 1,
      name: "Priya Sharma",
      rank: "AIR 15",
      service: "IAS",
      year: "2023",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Dr. Navjot Simi IPS's guidance was instrumental in my success. Her practical approach and constant motivation helped me clear UPSC in my second attempt.",
      story: "Coming from a small town in Rajasthan, I always dreamed of becoming an IAS officer. Dr. Simi IPS's mentorship program provided me with the right direction and study materials. Her emphasis on answer writing and current affairs preparation made all the difference.",
      background: "Engineering Graduate",
      attempts: 2,
      optional: "Public Administration"
    },
    {
      id: 2,
      name: "Rahul Verma",
      rank: "AIR 42",
      service: "IPS",
      year: "2023",
      image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "The interview preparation sessions and personality development guidance from Dr. Simi IPS were exceptional. She helped me present my best self.",
      story: "As an aspirant from a rural background, I lacked confidence in communication. Dr. Simi IPS's personalized coaching sessions transformed my personality and communication skills, leading to my selection as an IPS officer.",
      background: "Arts Graduate",
      attempts: 3,
      optional: "Sociology"
    },
    {
      id: 3,
      name: "Anita Gupta",
      rank: "AIR 8",
      service: "IAS",
      year: "2022",
      image: "https://images.pexels.com/photos/5668887/pexels-photo-5668887.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Dr. Simi IPS's comprehensive study material and regular mock tests were game-changers. Her mentorship goes beyond academics to overall personality development.",
      story: "Balancing job and UPSC preparation was challenging. Dr. Simi IPS's structured approach and time management techniques helped me optimize my preparation while working full-time.",
      background: "Working Professional",
      attempts: 1,
      optional: "Geography"
    },
    {
      id: 4,
      name: "Vikash Kumar",
      rank: "AIR 156",
      service: "IFS",
      year: "2023",
      image: "https://images.pexels.com/photos/5490275/pexels-photo-5490275.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "The ethics and governance preparation under Dr. Simi IPS's guidance was outstanding. Her real-life examples made complex concepts easy to understand.",
      story: "Coming from a farmer's family, resources were limited. Dr. Simi IPS's scholarship program and free study materials made quality education accessible to me.",
      background: "Agriculture Background",
      attempts: 2,
      optional: "Agriculture"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Patel",
      designation: "Former UPSC Chairperson",
      message: "Dr. Navjot Simi IPS's contribution to UPSC preparation is remarkable. Her holistic approach produces well-rounded officers."
    },
    {
      name: "Mrs. Sunita Rao",
      designation: "Education Ministry",
      message: "The quality of guidance and resources provided by Dr. Simi IPS is unmatched in the civil services preparation domain."
    },
    {
      name: "Mr. Amit Singh",
      designation: "IAS Officer, 2020 Batch",
      message: "Dr. Simi IPS's mentorship program is a beacon of hope for countless aspirants across the country."
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const stats = [
    { icon: Trophy, number: "500+", label: "Success Stories" },
    { icon: Users, number: "95%", label: "Success Rate" },
    { icon: Star, number: "4.9", label: "Average Rating" },
    { icon: Calendar, number: "5+", label: "Years Experience" }
  ];

  return (
    <section id="stories" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Inspiring journeys of UPSC aspirants who achieved their dreams with guidance and dedication
          </p>
        </div>

        {/* Success Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
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

        {/* Featured Success Story */}
        <div className={`mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-400' : 'opacity-0'}`}>
          <Card className="overflow-hidden shadow-2xl bg-slate-800/50 border-slate-700 glass">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Story Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <Image
                        src={stories[currentStory].image}
                        alt={stories[currentStory].name}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {stories[currentStory].name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                          {stories[currentStory].service} {stories[currentStory].rank}
                        </Badge>
                        <span className="text-gray-400">• {stories[currentStory].year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-blue-400 mb-4" />
                    <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                      "{stories[currentStory].quote}"
                    </blockquote>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {stories[currentStory].story}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <span className="text-sm text-gray-500">Background:</span>
                      <p className="font-semibold text-white">{stories[currentStory].background}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Attempts:</span>
                      <p className="font-semibold text-white">{stories[currentStory].attempts}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Optional:</span>
                      <p className="font-semibold text-white">{stories[currentStory].optional}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Service:</span>
                      <p className="font-semibold text-white">{stories[currentStory].service}</p>
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
                      {stories.map((_, index) => (
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
                </div>

                {/* Image */}
                <div className="relative lg:min-h-[500px] bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                  <Image
                    src={stories[currentStory].image}
                    alt={stories[currentStory].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className={`mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-600' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            What Leaders Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass animate-scaleIn animate-delay-${(index + 1) * 200}`}>
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    "{testimonial.message}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.designation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-slate-800/30 glass rounded-2xl p-8 md:p-12 text-center ${isVisible ? 'animate-fadeInUp animate-delay-800' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who achieved their UPSC dreams with expert guidance and proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Start Your Journey
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-3 text-lg">
              View More Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;