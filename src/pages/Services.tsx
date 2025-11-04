import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Brain, Eye, Database, Mail, Calendar } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4 md:mb-6 text-center animate-fade-in-up">
          What I Do
        </h1>
        <p className="text-center text-base md:text-lg text-[#4A4A4A] mb-12 md:mb-16 max-w-3xl mx-auto animate-slide-in-right px-4" style={{ animationDelay: '0.2s' }}>
          Specialized in AI/ML and Backend Development with expertise in these technologies
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-16 md:mb-20">
          <div className="animate-scale-in bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-2.5 md:p-3 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#1A1A1A] group-hover:text-[#CD7F5E] transition-colors duration-300">AI & Machine Learning</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["PyTorch", "TensorFlow", "LangChain", "Hugging Face", "OpenCV", "YOLO", "BERT", "Scikit-learn"].map(skill => (
                <span key={skill} className="skill-tag text-xs md:text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="animate-scale-in bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-2.5 md:p-3 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#1A1A1A] group-hover:text-[#CD7F5E] transition-colors duration-300">Backend Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "Flask", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "Redis", "Git"].map(skill => (
                <span key={skill} className="skill-tag text-xs md:text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <Card className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-500">
            <div className="text-center">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3 md:mb-4">
                Let's Work Together
              </h2>
              <p className="text-base md:text-lg text-[#4A4A4A] mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Interested in collaborating on AI/ML projects or need backend development expertise? 
                Let's discuss how we can build something amazing together.
              </p>
              
              <div className="flex justify-center">
                <Button
                  onClick={() => window.location.href = '/contact'}
                  className="group relative bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white px-10 md:px-12 py-6 rounded-2xl text-base md:text-lg font-semibold hover:from-[#2A2A2A] hover:via-[#1A1A1A] hover:to-[#2A2A2A] transition-all duration-500 hover:scale-105 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.35)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">Get in Touch</span>
                </Button>
              </div>

              <p className="text-sm text-[#6B7280] mt-6 md:mt-8">
                Typical response time: Within 24 hours
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
