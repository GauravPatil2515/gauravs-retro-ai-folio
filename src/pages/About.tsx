import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4 md:mb-6">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-[#4A4A4A] max-w-3xl mx-auto px-4">
            AI/ML Engineer & Backend Developer passionate about building intelligent systems
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
          <Card className="p-6 md:p-10 bg-white hover:shadow-2xl transition-all duration-500 animate-on-scroll rounded-2xl border border-gray-100 group">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#1A1A1A]">AI & Machine Learning</h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base">
              Building intelligent solutions with deep learning, computer vision, and NLP for real-world healthcare applications
            </p>
          </Card>
          
          <Card className="p-6 md:p-10 bg-white hover:shadow-2xl transition-all duration-500 animate-on-scroll animate-delay-1 rounded-2xl border border-gray-100 group">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#1A1A1A]">Backend Development</h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base">
              Designing scalable APIs and robust backend systems with Flask, FastAPI, and modern cloud technologies
            </p>
          </Card>
        </div>

        {/* Bio Section */}
        <div className="max-w-3xl mx-auto animate-on-scroll space-y-4 md:space-y-6 px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h3 className="font-heading text-lg md:text-xl font-bold text-[#1A1A1A] mb-4">Education</h3>
            <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
              <span className="font-semibold text-[#1A1A1A]">B.E. AI/ML</span> at SIES GST, CGPA <span className="font-semibold">8.57</span>
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h3 className="font-heading text-lg md:text-xl font-bold text-[#1A1A1A] mb-4">Experience</h3>
            <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
              Interned at <span className="font-semibold text-[#1A1A1A]">Pioneer Machines</span> building Vertex AI pipelines for medical document analysis
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h3 className="font-heading text-lg md:text-xl font-bold text-[#1A1A1A] mb-4">Leadership</h3>
            <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed mb-3">
              <span className="font-semibold text-[#1A1A1A]">Technical Head</span> at IEEE SIES GST
            </p>
            <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
              <span className="font-semibold text-[#1A1A1A]">ML Coordinator</span> at Google Developers Group
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed italic">
              Passionate about building <span className="font-semibold text-[#1A1A1A]">ethical, accessible healthcare AI</span> solutions that make a real impact
            </p>
          </div>

          <div className="pt-4 flex justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm md:text-base px-6 md:px-8"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
