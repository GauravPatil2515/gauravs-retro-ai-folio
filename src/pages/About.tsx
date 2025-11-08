import { Card } from "@/components/ui/card";
import { Brain, Code } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6 md:mb-8">
            About Me
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column - Description */}
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
              Passionate developer with expertise in full-stack development and AI/ML
            </p>
            
            <div className="space-y-4">
              <p className="text-[#5B5B5B] leading-relaxed">
                Building scalable web applications using modern technologies
              </p>
              
              <p className="text-[#5B5B5B] leading-relaxed">
                Developing intelligent solutions using cutting-edge AI/ML techniques
              </p>
              
              <p className="text-[#5B5B5B] leading-relaxed">
                Designing and implementing cloud-native solutions
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="/resume/Gaurav_Patil_Resume.pdf"
                download="Gaurav_Patil_Resume.pdf"
                className="inline-flex items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] hover:from-[#2A2A2A] hover:to-[#1A1A1A] text-white px-8 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-6 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 md:p-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-500 rounded-2xl border border-gray-200 hover:border-gray-300 group relative overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-b from-white/50 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold mb-2 text-[#1A1A1A] group-hover:text-[#CD7F5E] transition-colors duration-300">
                    AI & Machine Learning
                  </h3>
                  <p className="text-[#5B5B5B] text-sm md:text-base leading-relaxed">
                    Custom AI solutions, automation, and intelligent data processing
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-500 rounded-2xl border border-gray-200 hover:border-gray-300 group relative overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-b from-white/50 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold mb-2 text-[#1A1A1A] group-hover:text-[#CD7F5E] transition-colors duration-300">
                    Full-Stack Development
                  </h3>
                  <p className="text-[#5B5B5B] text-sm md:text-base leading-relaxed">
                    End-to-end web applications with modern frameworks
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
