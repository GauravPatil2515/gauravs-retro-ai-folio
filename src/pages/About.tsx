import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4 md:mb-6">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-[#4A4A4A] max-w-3xl mx-auto px-4">
            AI/ML Engineer & Backend Developer passionate about building intelligent systems
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
          <Card className="p-6 md:p-10 bg-white hover:shadow-2xl transition-all duration-500 animate-slide-in-right rounded-2xl border border-gray-100 group relative overflow-hidden">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#1A1A1A] group-hover:text-[#CD7F5E] transition-colors duration-300">AI & Machine Learning</h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base">
              Building intelligent solutions with deep learning, computer vision, and NLP for real-world healthcare applications
            </p>
          </Card>
          
          <Card className="p-6 md:p-10 bg-white hover:shadow-2xl transition-all duration-500 animate-slide-in-left rounded-2xl border border-gray-100 group relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#1A1A1A] group-hover:text-[#CD7F5E] transition-colors duration-300">Backend Development</h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base">
              Designing scalable APIs and robust backend systems with Flask, FastAPI, and modern cloud technologies
            </p>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto animate-scale-in px-4" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed text-center">
              Passionate about building <span className="font-bold text-[#1A1A1A]">ethical, accessible healthcare AI</span> solutions that make a real impact in people's lives
            </p>
          </div>

          <div className="pt-8 flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="/resume/Gaurav_Patil_Resume.pdf"
              download="Gaurav_Patil_Resume.pdf"
              className="group relative inline-flex items-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-gradient-to-br hover:from-[#1A1A1A] hover:via-[#2A2A2A] hover:to-[#1A1A1A] hover:text-white rounded-2xl transition-all duration-500 hover:scale-105 shadow-md hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] text-sm md:text-base px-6 md:px-8 py-3 font-semibold overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <ExternalLink className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
              <span className="relative z-10">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
