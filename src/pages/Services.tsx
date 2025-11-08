import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, Eye, Stethoscope, MessageSquare, Workflow, Check, ArrowRight, Clock, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Model Development",
      description: "Custom machine learning models tailored to your specific needs",
      features: [
        "Deep learning model architecture design",
        "Computer vision solutions (image classification, object detection)",
        "Natural Language Processing (text analysis, sentiment)",
        "Model optimization and deployment"
      ],
      technologies: ["PyTorch", "TensorFlow", "OpenCV", "YOLO"],
      delay: "0.2s"
    },
    {
      icon: Stethoscope,
      title: "Healthcare AI Solutions",
      description: "Specialized AI applications for medical diagnosis and analysis",
      features: [
        "Medical image analysis (retinal, dermatological)",
        "Disease detection and classification systems",
        "Patient data analysis and insights",
        "HIPAA-compliant model development"
      ],
      technologies: ["U-Net", "ResNet", "Medical Imaging"],
      delay: "0.3s"
    },
    {
      icon: MessageSquare,
      title: "RAG & Chatbot Systems",
      description: "Intelligent conversational AI with contextual understanding",
      features: [
        "Retrieval-Augmented Generation systems",
        "Custom knowledge base integration",
        "Multi-modal chatbot development",
        "Fine-tuned language models"
      ],
      technologies: ["LangChain", "BERT", "Hugging Face", "Vector DBs"],
      delay: "0.4s"
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Scalable and robust API development for your applications",
      features: [
        "RESTful API design and development",
        "Database architecture and optimization",
        "Authentication and security implementation",
        "Cloud deployment and scaling"
      ],
      technologies: ["FastAPI", "Flask", "PostgreSQL", "Docker"],
      delay: "0.5s"
    },
    {
      icon: Eye,
      title: "Computer Vision Projects",
      description: "Advanced visual recognition and processing systems",
      features: [
        "Real-time object detection and tracking",
        "Image segmentation and analysis",
        "Facial recognition systems",
        "Custom CNN architectures"
      ],
      technologies: ["OpenCV", "YOLO", "Mask R-CNN"],
      delay: "0.6s"
    },
    {
      icon: Workflow,
      title: "ML Pipeline Development",
      description: "End-to-end machine learning workflow automation",
      features: [
        "Data preprocessing and feature engineering",
        "Model training and validation pipelines",
        "CI/CD for ML models (MLOps)",
        "Model monitoring and retraining"
      ],
      technologies: ["Scikit-learn", "MLflow", "Docker", "Git"],
      delay: "0.7s"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4 md:mb-6 hover:text-[#CD7F5E] transition-colors duration-300 cursor-default">
            Services & Solutions
          </h1>
          <p className="text-base md:text-lg text-[#4A4A4A] max-w-3xl mx-auto px-4">
            Specialized AI/ML development services to transform your ideas into intelligent, scalable solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 bg-gradient-to-br from-white via-gray-50/50 to-white hover:shadow-2xl transition-all duration-500 rounded-2xl border-2 border-gray-100 hover:border-[#CD7F5E]/30 group relative overflow-hidden animate-scale-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#CD7F5E]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#1A1A1A] group-hover:text-[#CD7F5E] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[#4A4A4A] text-sm md:text-base mb-4 md:mb-5 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-5 md:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#5B5B5B] group/item hover:text-[#1A1A1A] transition-colors duration-300">
                      <Check className="w-4 h-4 text-[#CD7F5E] mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-gradient-to-br from-gray-100 to-gray-50 text-[#1A1A1A] rounded-lg text-xs font-medium border border-gray-200 hover:border-[#CD7F5E] hover:bg-[#CD7F5E]/10 transition-all duration-300 cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-gray-800 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="text-center relative z-10">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Let's Build Something Great
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto px-4 leading-relaxed">
                Looking for AI/ML expertise to bring your vision to life? I'm open to collaborations, 
                internships, and impactful healthcare technology projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-10">
                <Button
                  onClick={() => window.location.href = '/contact'}
                  className="group relative bg-[#CD7F5E] hover:bg-[#B86F4E] text-white px-8 md:px-10 py-6 rounded-2xl text-base md:text-lg font-semibold transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Me
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                
                <Button
                  onClick={() => window.location.href = '/experience'}
                  className="group relative bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 md:px-10 py-6 rounded-2xl text-base md:text-lg font-semibold transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-sm md:text-base text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#CD7F5E]" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#CD7F5E]" />
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
