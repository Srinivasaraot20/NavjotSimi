"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Users, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      designation: "IAS Officer, AIR 15 (2023)",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Dr. Navjot Simi IPS's guidance was instrumental in my success. Her practical approach and constant motivation helped me clear UPSC in my second attempt. The personalized study plan and regular feedback sessions made all the difference.",
      rating: 5,
      category: "UPSC Success"
    },
    {
      id: 2,
      name: "Rahul Verma",
      designation: "IPS Officer, AIR 42 (2023)",
      image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "The interview preparation sessions and personality development guidance from Dr. Simi IPS were exceptional. She helped me present my best self and overcome my communication barriers. Her own journey from medicine to IPS inspired me greatly.",
      rating: 5,
      category: "Interview Guidance"
    },
    {
      id: 3,
      name: "Anita Gupta",
      designation: "IAS Officer, AIR 8 (2022)",
      image: "https://images.pexels.com/photos/5668887/pexels-photo-5668887.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Dr. Navjot Simi IPS's comprehensive study material and regular mock tests were game-changers. Her mentorship goes beyond academics to overall personality development. The ethics and governance preparation was outstanding.",
      rating: 5,
      category: "Study Material"
    },
    {
      id: 4,
      name: "Vikash Kumar",
      designation: "IFS Officer, AIR 156 (2023)",
      image: "https://images.pexels.com/photos/5490275/pexels-photo-5490275.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Coming from a rural background, I lacked resources and guidance. Dr. Navjot Simi IPS's scholarship program and free study materials made quality education accessible. Her real-life examples made complex concepts easy to understand.",
      rating: 5,
      category: "Mentorship"
    },
    {
      id: 5,
      name: "Sunita Rao",
      designation: "Citizen, Chandigarh",
      image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Dr. Navjot Simi IPS's community policing initiatives have transformed our neighborhood. Her approachable nature and quick response to citizen concerns have built tremendous trust in the police force.",
      rating: 5,
      category: "Community Service"
    },
    {
      id: 6,
      name: "Dr. Rajesh Patel",
      designation: "Former UPSC Chairperson",
      image: "https://images.pexels.com/photos/5490278/pexels-photo-5490278.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Dr. Navjot Simi IPS's contribution to UPSC preparation is remarkable. Her holistic approach produces well-rounded officers who serve with integrity and compassion. Her own achievement of AIR 3 speaks volumes.",
      rating: 5,
      category: "Expert Opinion"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Successful Candidates" },
    { icon: Star, number: "4.9", label: "Average Rating" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: BookOpen, number: "1000+", label: "Hours of Guidance" }
  ];

  const categories = [
    { id: 'all', label: 'All Testimonials', count: testimonials.length },
    { id: 'UPSC Success', label: 'UPSC Success', count: testimonials.filter(t => t.category === 'UPSC Success').length },
    { id: 'Interview Guidance', label: 'Interview Guidance', count: testimonials.filter(t => t.category === 'Interview Guidance').length },
    { id: 'Community Service', label: 'Community Service', count: testimonials.filter(t => t.category === 'Community Service').length },
    { id: 'Expert Opinion', label: 'Expert Opinion', count: testimonials.filter(t => t.category === 'Expert Opinion').length }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">Testimonials & Reviews</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What People Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from successful UPSC candidates, citizens, and experts about their experiences 
            with Dr. Navjot Simi IPS's guidance and service.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-slate-800/50 glass rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-slate-700 transition-colors border border-slate-700">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-2xl bg-slate-800/50 border-slate-700 glass">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Testimonial Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <Image
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-gray-300 mb-2">
                        {testimonials[currentTestimonial].designation}
                      </p>
                      <div className="flex items-center gap-1">
                        {renderStars(testimonials[currentTestimonial].rating)}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-blue-400 mb-4" />
                    <blockquote className="text-lg text-gray-300 leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      {testimonials[currentTestimonial].category}
                    </Badge>
                    
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={prevTestimonial}
                        className="flex items-center gap-1 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Previous
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={nextTestimonial}
                        className="flex items-center gap-1 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                      >
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative lg:min-h-[400px] bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 6).map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow bg-slate-800/50 border-slate-700 hover:bg-slate-800 glass">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">{testimonial.designation}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                <Quote className="w-6 h-6 text-blue-400 mb-3" />
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  "{testimonial.quote.substring(0, 120)}..."
                </p>

                <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                  {testimonial.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Filter */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">
            Browse by Category
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 bg-slate-700 text-slate-300">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 md:p-12 text-center glass border border-blue-500/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who achieved their dreams with expert guidance and proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-3 text-lg">
              <Award className="w-5 h-5 mr-2" />
              View Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;