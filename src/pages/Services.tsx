import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, Check, ArrowRight, Clock, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI/ML Development",
      description: "End-to-end machine learning solutions from research to production",
      features: [
        "Custom deep learning models (PyTorch, TensorFlow)",
        "Computer vision & medical imaging (YOLO, U-Net, ResNet)",
        "NLP & RAG systems (LangChain, BERT, Hugging Face)",
        "Model optimization, deployment & MLOps pipelines"
      ],
      technologies: ["PyTorch", "TensorFlow", "OpenCV", "LangChain", "FAISS"],
      delay: "0.2s"
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Scalable and robust backend systems with modern technologies",
      features: [
        "RESTful API design & development (FastAPI, Flask)",
        "Database architecture (PostgreSQL, MongoDB, Redis)",
        "Authentication, security & cloud deployment",
        "Containerization with Docker & CI/CD integration"
      ],
      technologies: ["Python", "FastAPI", "Flask", "PostgreSQL", "Docker"],
      delay: "0.3s"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-3 md:mb-4">
            Services & Solutions
          </h1>
          <p className="text-sm md:text-base text-[#4A4A4A] max-w-3xl mx-auto px-4">
            Specialized AI/ML development services to transform your ideas into intelligent, scalable solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12 max-w-5xl mx-auto">{services.map((service, index) => (
            <Card 
              key={index}
              className="p-5 md:p-6 bg-gradient-to-br from-white via-gray-50/30 to-white shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-500 rounded-2xl border border-gray-200 hover:border-[#1A1A1A] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-white/50 to-transparent rounded-2xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.15)] group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)]">
                  <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                
                <h3 className="font-heading text-lg md:text-xl font-bold mb-2 text-[#1A1A1A] group-hover:text-[#CD7F5E] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[#4A4A4A] text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-1.5 mb-4 md:mb-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-[#5B5B5B] group/item hover:text-[#1A1A1A] transition-colors duration-300">
                      <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#CD7F5E] mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-gradient-to-br from-gray-100 to-gray-50 text-[#1A1A1A] rounded-lg text-xs font-medium border border-gray-200 hover:border-[#1A1A1A] hover:bg-gray-100 transition-all duration-300 cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-gray-800 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="text-center relative z-10">
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                Let's Build Something Great
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
                Looking for AI/ML expertise to bring your vision to life? I'm open to collaborations, 
                internships, and impactful healthcare technology projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 md:mb-8">
                <Button
                  onClick={() => window.location.href = '/contact'}
                  className="group relative bg-[#CD7F5E] hover:bg-[#B86F4E] text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl text-sm md:text-base font-semibold transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Me
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                
                <Button
                  onClick={() => window.location.href = '/experience'}
                  className="group relative bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-6 md:px-8 py-4 md:py-5 rounded-2xl text-sm md:text-base font-semibold transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center text-xs md:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#CD7F5E]" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#CD7F5E]" />
                  <span>Based in Thane, Maharashtra</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
