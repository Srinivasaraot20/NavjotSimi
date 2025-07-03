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
      image: "/public/testimonial1.jpg",
      quote: "Dr. Navjot Simi IPS's guidance was instrumental in my success. Her practical approach and constant motivation helped me clear UPSC in my second attempt. The personalized study plan and regular feedback sessions made all the difference."
    },
    {
      id: 2,
      name: "Rahul Verma",
      designation: "IPS Officer, AIR 42 (2023)",
      image: "/public/testimonial2.jpg",
      quote: "The interview preparation sessions and personality development guidance from Dr. Simi IPS were exceptional. She helped me present my best self and overcome my communication barriers. Her own journey from medicine to IPS inspired me greatly."
    },
    {
      id: 3,
      name: "Anita Gupta",
      designation: "IAS Officer, AIR 8 (2022)",
      image: "/public/testimonial3.jpg",
      quote: "Dr. Navjot Simi IPS's comprehensive study material and regular mock tests were game-changers. Her mentorship goes beyond academics to overall personality development. The ethics and governance preparation was outstanding."
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What People Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from successful UPSC candidates and experts about their experiences with Dr. Navjot Simi IPS's guidance and service.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all hover-lift">
              <img src={t.image} alt={t.name} className="w-20 h-20 mx-auto rounded-full object-cover mb-4" />
              <blockquote className="text-lg text-gray-300 leading-relaxed mb-4">"{t.quote}"</blockquote>
              <div className="font-bold text-white text-lg mb-1">{t.name}</div>
              <div className="text-blue-300 text-sm">{t.designation}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
