"use client"
import React, { useState, useEffect } from 'react';
import { Sparkles, Target, Users, Zap, Trophy, Smile, Brain, Star, Award, BookOpen, Heart, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";
const faqs = [
  {
    question: "What age group is this course designed for?",
    answer: "Our confidence-building microcourse is specifically designed for students in grades 3-5 (typically ages 8-11). The content, activities, and language are carefully crafted to be age-appropriate and engaging for elementary school children."
  },
  {
    question: "How long does the course take to complete?",
    answer: "The course consists of 15-minute daily lessons over 4 weeks. This bite-sized approach makes it easy for children to stay engaged while building lasting confidence habits. Parents can also adjust the pace based on their child's needs."
  },
  {
    question: "Do parents need to participate in the lessons?",
    answer: "While children can work through many activities independently, parental involvement enhances the experience significantly. We provide guidance for parents on how to support their child's confidence journey and reinforce lessons in daily life."
  },
  {
    question: "What if my child is shy or reluctant to participate?",
    answer: "Our course is specifically designed for shy and hesitant children! We start with low-pressure, fun activities that gradually build confidence. Many parents report that even their most reserved children begin to open up within the first week."
  },
  {
    question: "Is this course suitable for children with learning differences?",
    answer: "Absolutely! Our inclusive approach works well for children with various learning styles and differences. The visual, auditory, and kinesthetic activities ensure every child can find methods that work best for them."
  },
  {
    question: "What kind of results can we expect to see?",
    answer: "Most families notice positive changes within the first week, including increased willingness to try new things, better communication, and improved self-advocacy. Long-term benefits include stronger academic performance and better social relationships."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a 30-day money-back guarantee. If you and your child don't see positive changes in their confidence level within the first month, we'll provide a full refund, no questions asked."
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Build Self-Worth",
    description: "Help your child develop genuine self-appreciation and inner confidence that lasts a lifetime.",
    color: "text-rose-600",
    bgColor: "from-rose-50 to-pink-50",
    delay: "0s"
  },
  {
    icon: Target,
    title: "Goal Achievement",
    description: "Learn proven strategies to set age-appropriate goals and celebrate every small victory along the way.",
    color: "text-blue-600",
    bgColor: "from-blue-50 to-sky-50",
    delay: "0.1s"
  },
  {
    icon: Users,
    title: "Social Skills",
    description: "Develop the confidence to make friends, speak up in class, and navigate social situations with ease.",
    color: "text-emerald-600",
    bgColor: "from-emerald-50 to-green-50",
    delay: "0.2s"
  },
  {
    icon: BookOpen,
    title: "Academic Confidence",
    description: "Transform classroom anxiety into curiosity and excitement for learning new things.",
    color: "text-indigo-600",
    bgColor: "from-indigo-50 to-purple-50",
    delay: "0.3s"
  },
  {
    icon: Zap,
    title: "Quick Results",
    description: "See positive changes in just 15 minutes a day with our bite-sized, engaging activities.",
    color: "text-amber-600",
    bgColor: "from-amber-50 to-yellow-50",
    delay: "0.4s"
  },
  {
    icon: Trophy,
    title: "Celebrate Success",
    description: "Learn to recognize achievements big and small, building a positive mindset and growth mentality.",
    color: "text-orange-600",
    bgColor: "from-orange-50 to-red-50",
    delay: "0.5s"
  },
  {
    icon: Smile,
    title: "Emotional Resilience",
    description: "Develop healthy coping strategies and bounce back stronger from challenges and setbacks.",
    color: "text-purple-600",
    bgColor: "from-purple-50 to-pink-50",
    delay: "0.6s"
  },
  {
    icon: Brain,
    title: "Growth Mindset",
    description: "Foster the belief that abilities can be developed through effort, strategy, and persistence.",
    color: "text-teal-600",
    bgColor: "from-teal-50 to-cyan-50",
    delay: "0.7s"
  },
  {
    icon: Star,
    title: "Lasting Impact",
    description: "Build confidence skills that will serve your child throughout their academic journey and beyond.",
    color: "text-yellow-600",
    bgColor: "from-yellow-50 to-orange-50",
    delay: "0.8s"
  }
];

const FloatingElement = ({
  children,
  delay = "0s",
  className = "",
}: {
  children: ReactNode;
  delay?: string;
  className?: string;
}) => (
  <div 
    className={`animate-float ${className}`}
    style={{
      animationDelay: delay,
      animationDuration: "6s",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease-in-out"
    }}
  >
    {children}
  </div>
);


export default function HOME() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleItem = (index: number) => {
  setOpenItems(prev =>
    prev.includes(index)
      ? prev.filter(item => item !== index)
      : [...prev, index]
  );
};


  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-1deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }
        .gradient-bg {
          background: linear-gradient(-45deg, #f8fafc, #e0f2fe, #ddd6fe, #fce7f3);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
        }
        .stagger-animation {
          opacity: 0;
          transform: translateY(30px);
          animation: staggerIn 0.8s ease-out forwards;
        }
        @keyframes staggerIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingElement delay="0s" className="absolute top-20 left-10 opacity-20">
            <Star className="w-8 h-8 text-yellow-400" />
          </FloatingElement>
          <FloatingElement delay="2s" className="absolute top-40 right-20 opacity-20">
            <Trophy className="w-10 h-10 text-orange-400" />
          </FloatingElement>
          <FloatingElement delay="4s" className="absolute bottom-40 left-20 opacity-20">
            <Heart className="w-6 h-6 text-rose-400" />
          </FloatingElement>
          <FloatingElement delay="1s" className="absolute top-1/3 right-10 opacity-20">
            <Sparkles className="w-8 h-8 text-purple-400" />
          </FloatingElement>
          <FloatingElement delay="3s" className="absolute bottom-20 right-1/4 opacity-20">
            <Award className="w-7 h-7 text-blue-400" />
          </FloatingElement>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.1) 1px, transparent 0)`,
            backgroundSize: '60px 60px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Animated Badge */}
          <div className="mb-6 sm:mb-8 stagger-animation" style={{ animationDelay: '0.2s' }}>
            <span className="inline-flex items-center px-4 sm:px-6 py-3 sm:py-4 bg-white/90 backdrop-blur-md border border-indigo-200/50 text-indigo-700 font-semibold rounded-full text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-glow">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse-scale" />
              ✨ For Grades 3-5 Students
            </span>
          </div>
          
          {/* Main Heading with Staggered Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-slate-900 text-shadow">
            <div className="stagger-animation" style={{ animationDelay: '0.4s' }}>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">
                Unlock Confidence
              </span>
            </div>
            <div className="stagger-animation" style={{ animationDelay: '0.6s' }}>
              <span className="text-slate-800 inline-block hover:scale-105 transition-transform duration-300">
                Superpowers!
              </span>
            </div>
          </h1>
          
          {/* Animated Subtitle */}
          <div className="stagger-animation" style={{ animationDelay: '0.8s' }}>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
              Help your child build unshakeable confidence with our proven microcourse designed specifically for elementary students. 
              <span className="text-indigo-600 font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Transform self-doubt into self-belief!</span>
            </p>
          </div>
          
          {/* Animated CTA Buttons */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 stagger-animation" style={{ animationDelay: '1s' }}>
            <button className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 animate-bounce-gentle" />
              <span className="text-center relative z-10">Start Building Confidence</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </button>
            
            <button className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 border-2 border-indigo-200 text-indigo-700 hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 font-semibold text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <BookOpen className="w-5 h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Learn More</span>
            </button>
          </div>

          {/* Animated Trust Indicators */}
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row items-center justify-center text-slate-600 px-2 stagger-animation" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-slate-200/50 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current group-hover:animate-pulse-scale transition-all duration-300" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <span className="font-medium text-sm sm:text-base">Trusted by 2,000+ families</span>
            </div>
            
            <div className="hidden md:block w-px h-6 bg-slate-300 animate-pulse"></div>
            
            <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-slate-200/50 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <span className="text-lg sm:text-xl group-hover:animate-bounce-gentle">⚡</span>
              <span className="font-medium text-sm sm:text-base">15-minute daily lessons</span>
            </div>
            
            <div className="hidden md:block w-px h-6 bg-slate-300 animate-pulse"></div>
            
            <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-slate-200/50 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <span className="text-lg sm:text-xl group-hover:animate-bounce-gentle">🎯</span>
              <span className="font-medium text-sm sm:text-base">Age-appropriate activities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-indigo-50/50"></div>
        
        <div className="md:max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="stagger-animation" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 px-2 text-shadow">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">
                  Confidence Superpowers
                </span>
                <br />
                <span className="text-slate-800 inline-block hover:scale-105 transition-transform duration-300">
                  Your Child Will Develop
                </span>
              </h2>
            </div>
            <div className="stagger-animation" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                Our proven curriculum helps elementary students build the foundation for lifelong confidence and success.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="stagger-animation card-hover"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <Card className="group h-full border border-slate-200/50 bg-white/80 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    
                    <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${benefit.bgColor} group-hover:scale-110 transition-all duration-300 flex-shrink-0 relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${benefit.color} relative z-10 group-hover:animate-bounce-gentle`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-slate-900 group-hover:text-indigo-700 transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-sm sm:text-base group-hover:text-slate-700 transition-colors duration-300">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Animated Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20 px-4 stagger-animation" style={{ animationDelay: '1.5s' }}>
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/50 rounded-xl sm:rounded-2xl text-emerald-700 font-semibold text-base sm:text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce-gentle" />
              <span>Start seeing results in just one week!</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-br from-slate-50 to-indigo-50/30 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="stagger-animation" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 px-2 text-shadow">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">
                  Frequently Asked
                </span>
                <br />
                <span className="text-slate-800 inline-block hover:scale-105 transition-transform duration-300">
                  Questions
                </span>
              </h2>
            </div>
            <div className="stagger-animation" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
                Get answers to common questions about our confidence-building course for elementary students.
              </p>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(index);
              
              return (
                <div
                  key={index}
                  className="stagger-animation"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <Card className="border border-slate-200/50 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                    {/* Hover shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    
                    <CardContent className="p-0 relative z-10">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full p-4 sm:p-6 lg:p-8 text-left flex items-start sm:items-center justify-between hover:bg-gradient-to-r hover:from-slate-50/50 hover:to-indigo-50/50 transition-all duration-300 rounded-lg group/button"
                      >
                        <h3 className="font-semibold text-base sm:text-lg text-slate-900 pr-4 text-left leading-tight group-hover/button:text-indigo-700 transition-colors duration-300">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 mt-1 sm:mt-0">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 transform rotate-180 group-hover/button:rotate-0 transition-transform duration-300" />
                          ) : (
                            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover/button:text-indigo-600 group-hover/button:animate-bounce-gentle transition-all duration-300" />
                          )}
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                          <p className="text-slate-600 leading-relaxed text-sm sm:text-base lg:text-lg transform transition-transform duration-500" style={{ transform: isOpen ? 'translateY(0)' : 'translateY(-10px)' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Animated Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16 px-4 stagger-animation" style={{ animationDelay: '1.4s' }}>
            <p className="text-slate-600 mb-4 sm:mb-6 text-base sm:text-lg">
              Still have questions? We&apos;re here to help!
            </p>
            <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-base sm:text-lg underline underline-offset-4 decoration-2 hover:decoration-4 transition-all duration-300 transform hover:scale-105 relative group">
              <span className="relative z-10">Contact our support team</span>
              <div className="absolute inset-0 bg-indigo-100 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300 -m-2"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <FloatingElement delay="0s" className="animate-bounce-gentle">
          <button className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-glow group">
            <Heart className="w-6 h-6 group-hover:animate-pulse-scale" />
          </button>
        </FloatingElement>
      </div>
    </div>
  );
}