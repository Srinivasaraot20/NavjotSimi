"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BookOpen, ExternalLink, Star, Download, Award, Users, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function MyBooksPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const publishedBooks = [
    {
      id: 1,
      title: "GS Services Previous Years Question Papers (2024-2013) - Paper 1",
      description: "Elevate your UPSC CSE Mains preparation with this comprehensive collection of previous years' question papers, meticulously solved by distinguished civil servants Dr. Navjot Simi IPS and Tushar Singla IAS. This invaluable resource covers detailed topic-wise solutions for General Studies Paper 1, spanning 12 years of UPSC CSE Mains examinations.",
      amazonLink: "https://www.amazon.in/GS-Services-Previous-2024-2013-Question/dp/8196424167?ref_=ast_author_dp",
      storeLink: "https://www.amazon.in/stores/Navjot-Simi/author/B0FDL4HSF7?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true",
      image: "https://m.media-amazon.com/images/I/71-vBxQebZL._SL1500_.jpg",
      publisher: "UPSC Guide",
      features: [
        "12 years of solved papers (2013-2024)",
        "Topic-wise detailed solutions",
        "Strategic approach explanations",
        "Answer writing style guidance",
        "Marking scheme analysis"
      ],
      rating: 4.8,
      reviews: 245
    },
    {
      id: 2,
      title: "GS Services Previous Years Question Papers (2024-2013) - Paper 2",
      description: "Comprehensive collection covering General Studies Paper 2 with detailed solutions and strategic approaches by Dr. Navjot Simi IPS and Tushar Singla IAS. Perfect for understanding governance, polity, and social justice topics.",
      amazonLink: "https://www.amazon.in/GS-Services-Previous-2024-2013-Question/dp/8196424132/ref=sr_1_4?crid=3I0AY0J5QPWJ1&dib=eyJ2IjoiMSJ9.Fi7TmjRyyIWwTLFQsoEB6thMQ1xn4z5BNKS44L3eFQRs9MPmEDgBe4YHDb7WBBGoygHtcWyO9186wABYP4mdadku5UDKbJUTpZ1sZFsC3PE.ujm6mhaEemraZG0TeJLZPq0jnw2eUksc6rxwJ-rTTMQ&dib_tag=se&keywords=navjot+simi+book&qid=1751173293&sprefix=navjo%2Caps%2C263&sr=8-4",
      image: "https://m.media-amazon.com/images/I/71zPGalgpwL._SY425_.jpg",
      publisher: "UPSC Guide",
      features: [
        "Governance and administration focus",
        "Polity and constitution coverage",
        "Social justice and welfare schemes",
        "International relations insights",
        "Comparative analysis of answers"
      ],
      rating: 4.7,
      reviews: 189
    },
    {
      id: 3,
      title: "GS Services Previous Years Question Papers (2024-2013) - Paper 3",
      description: "Specialized coverage of General Studies Paper 3 focusing on technology, economic development, bio-diversity, environment, security and disaster management with expert solutions.",
      amazonLink: "https://www.amazon.in/GS-Services-Previous-2024-2013-Question/dp/8196424140/ref=sr_1_2?crid=3I0AY0J5QPWJ1&dib=eyJ2IjoiMSJ9.Fi7TmjRyyIWwTLFQsoEB6thMQ1xn4z5BNKS44L3eFQRs9MPmEDgBe4YHDb7WBBGoygHtcWyO9186wABYP4mdadku5UDKbJUTpZ1sZFsC3PE.ujm6mhaEemraZG0TeJLZPq0jnw2eUksc6rxwJ-rTTMQ&dib_tag=se&keywords=navjot+simi+book&qid=1751173293&sprefix=navjo%2Caps%2C263&sr=8-2",
      image: "https://m.media-amazon.com/images/I/7176OxoDFPL._SY425_.jpg",
      publisher: "UPSC Guide",
      features: [
        "Science and technology coverage",
        "Economic development analysis",
        "Environment and biodiversity",
        "Security and disaster management",
        "Current affairs integration"
      ],
      rating: 4.9,
      reviews: 312
    },
    {
      id: 4,
      title: "GS Services Previous Years Question Papers (2024-2013) - Paper 4 (Ethics)",
      description: "Complete guide to Ethics, Integrity and Aptitude paper with real-life case studies, philosophical approaches, and practical solutions by experienced civil servants.",
      amazonLink: "https://www.amazon.in/GS-Services-Previous-2024-2013-Question/dp/8196424159",
      image: "https://m.media-amazon.com/images/I/71P7xjT8EnL._SL1500_.jpg",
      publisher: "UPSC Guide",
      features: [
        "Ethics and moral philosophy",
        "Real-life case study analysis",
        "Integrity and aptitude questions",
        "Administrative ethics focus",
        "Practical approach to solutions"
      ],
      rating: 4.8,
      reviews: 267
    },
    {
      id: 5,
      title: "General Studies Paper I & II - Comprehensive Guide",
      description: "A comprehensive guide covering both General Studies Paper I and II with detailed explanations, practice questions, and strategic insights for UPSC CSE preparation.",
      amazonLink: "https://www.amazon.in/General-Studies-Paper-i-II/dp/B0CD43ZMHB/ref=sr_1_5?crid=3I0AY0J5QPWJ1&dib=eyJ2IjoiMSJ9.Fi7TmjRyyIWwTLFQsoEB6thMQ1xn4z5BNKS44L3eFQRs9MPmEDgBe4YHDb7WBBGoygHtcWyO9186wABYP4mdadku5UDKbJUTpZ1sZFsC3PE.ujm6mhaEemraZG0TeJLZPq0jnw2eUksc6rxwJ-rTTMQ&dib_tag=se&keywords=navjot+simi+book&qid=1751173293&sprefix=navjo%2Caps%2C263&sr=8-5",
      image: "https://m.media-amazon.com/images/I/613FfLljI3L._SY385_.jpg",
      publisher: "UPSC Guide",
      features: [
        "Combined coverage of Paper I & II",
        "Comprehensive topic explanations",
        "Practice questions with solutions",
        "Strategic preparation approach",
        "Updated content for latest syllabus"
      ],
      rating: 4.6,
      reviews: 156
    },
    {
      id: 6,
      title: "Prelims General Studies - Topicwise Explanation (2011-2023)",
      description: "Complete topicwise explanation of UPSC Prelims General Studies questions from 2011-2023, providing comprehensive analysis and strategic insights for effective preparation.",
      amazonLink: "https://www.amazon.in/Prelims-General-Topicwise-Explanation-2011-2023/dp/B0CD421KBT/ref=sr_1_6?crid=3I0AY0J5QPWJ1&dib=eyJ2IjoiMSJ9.Fi7TmjRyyIWwTLFQsoEB6thMQ1xn4z5BNKS44L3eFQRs9MPmEDgBe4YHDb7WBBGoygHtcWyO9186wABYP4mdadku5UDKbJUTpZ1sZFsC3PE.ujm6mhaEemraZG0TeJLZPq0jnw2eUksc6rxwJ-rTTMQ&dib_tag=se&keywords=navjot+simi+book&qid=1751173293&sprefix=navjo%2Caps%2C263&sr=8-6",
      image: "https://m.media-amazon.com/images/I/51E2mLK5ZuL._SY385_.jpg",
      publisher: "UPSC Guide",
      features: [
        "Topicwise question analysis (2011-2023)",
        "Detailed explanations for each question",
        "Pattern recognition and trends",
        "Strategic preparation insights",
        "Comprehensive Prelims coverage"
      ],
      rating: 4.7,
      reviews: 203
    }
  ];

  const stats = [
    { icon: BookOpen, number: "6", label: "Published Books" },
    { icon: Star, number: "4.8", label: "Average Rating" },
    { icon: Users, number: "1.2K+", label: "Total Reviews" },
    { icon: Award, number: "12+", label: "Years Coverage" }
  ];

  const handleBookPurchase = (link: string, title: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-4">
              📚 Published Books
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My Published Books
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive UPSC preparation books by Dr. Navjot Simi IPS & Tushar Singla IAS - 
              meticulously crafted to guide your civil services journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Books
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop on Amazon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-800/50 glass rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover-lift border border-slate-700">
                  <stat.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp animate-delay-400' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              📚 Published Books by Dr. Navjot Simi IPS & Tushar Singla IAS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive UPSC preparation books with detailed solutions, strategic approaches, 
              and expert insights from successful civil servants
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-fadeInUp animate-delay-600' : 'opacity-0'}`}>
            {publishedBooks.map((book, index) => (
              <Card key={book.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all hover-lift glass overflow-hidden">
                <div className="relative">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={400}
                    height={600}
                    className="w-full h-96 object-contain bg-white"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500 text-white">Published Book</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-slate-900/80 backdrop-blur-sm rounded-full p-2">
                      <BookOpen className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight text-white">
                    {book.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-yellow-400 font-medium">{book.rating}</span>
                    </div>
                    <span className="text-gray-400">({book.reviews} reviews)</span>
                    <Badge variant="outline" className="border-slate-600 text-slate-300">
                      {book.publisher}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {book.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-white mb-2 text-sm">Key Features:</h5>
                    <ul className="space-y-1">
                      {book.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                          <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white"
                      onClick={() => handleBookPurchase(book.amazonLink, book.title)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy on Amazon
                    </Button>
                    {book.storeLink && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                        onClick={() => handleBookPurchase(book.storeLink, book.title)}
                      >
                        Author Store
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Author Information */}
          <div className={`mt-20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 md:p-12 glass ${isVisible ? 'animate-fadeInUp animate-delay-800' : 'opacity-0'}`}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                About the Authors
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-yellow-500/20 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-10 h-10 text-yellow-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Dr. Navjot Simi IPS</h4>
                <p className="text-gray-300 mb-4">
                  Commandant, Bihar Military Police (BMP) 8, Begusarai
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Dental Professional turned IPS Officer</p>
                  <p>• Expert in Community Policing & Women Safety</p>
                  <p>• Mentor to 500+ UPSC Aspirants</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Tushar Singla IAS</h4>
                <p className="text-gray-300 mb-4">
                  District Magistrate, Begusarai, Bihar
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• IAS Officer, Bihar Cadre</p>
                  <p>• Expert in Administration & Governance</p>
                  <p>• Co-author of UPSC Preparation Books</p>
                  <p>• Married to Dr. Navjot Simi IPS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`mt-16 text-center ${isVisible ? 'animate-fadeInUp animate-delay-1000' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Start Your UPSC Journey with Expert Guidance
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              These books represent years of experience and expertise in UPSC preparation. 
              Get the strategic advantage you need to succeed in your civil services journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://www.amazon.in/stores/Navjot-Simi/author/B0FDL4HSF7', '_blank')}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Visit Amazon Store
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-3 text-lg"
                onClick={() => window.location.href = '/student-guidance'}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Get Free Guidance
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}