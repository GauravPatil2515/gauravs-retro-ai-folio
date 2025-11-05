import { Card } from "@/components/ui/card";
import { Brain, Eye, MessageSquare } from "lucide-react";

const Experience = () => {
  const projects = [
    {
      title: "Neuro-RAG",
      category: "Production / Healthcare AI",
      description: "Mental health diagnostic system using retrieval-augmented generation over ICD-10. Vectorized 14,000+ lines into 1,438 chunks with FAISS achieving sub-30ms latency. Built for clinical accuracy with inline citations and evidence panels.",
      tech: ["Python", "FAISS", "Flask", "LangChain"],
      icon: MessageSquare,
      image: "/projects/neuro-rag.png",
    },
    {
      title: "Retinal Vessel Segmentation",
      category: "Computer Vision / Medical Imaging",
      description: "U-Net++ model achieving 83.7% Dice score on DRIVE dataset. Real-time inference dashboard under 1 second with drag-and-drop upload and multiple visualization modes. Production pipeline with mixed precision training.",
      tech: ["PyTorch", "U-Net++", "FastAPI", "OpenCV"],
      icon: Eye,
      image: "/projects/retinal-vessel.png",
    },
    {
      title: "DermAI",
      category: "Deep Learning / Medical Diagnosis",
      description: "Vision Transformer hitting 99.1% accuracy (Cohen's Kappa 0.975) on skin disease classification. Integrated Llama 3.3 for medical Q&A with Grad-CAM explainability. Flask + SQLite backend with queued uploads.",
      tech: ["ViT", "TensorFlow", "Llama 3.3", "Flask"],
      icon: Brain,
      image: "/projects/dermai.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-12 md:mb-16 text-center animate-fade-in-up">
          Where I've Worked
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {/* Experience 1 */}
            <div className="relative pl-6 md:pl-8 border-l-[3px] border-[#CD7F5E] animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="absolute w-3 h-3 bg-[#CD7F5E] rounded-full -left-[7px] top-0" />
              <Card className="p-6 md:p-8 bg-white hover:shadow-2xl transition-all duration-500 rounded-2xl border border-gray-100 group">
                <div className="mb-2 md:mb-3 text-xs md:text-sm text-[#CD7F5E] font-semibold">Jun 2025 - Aug 2025</div>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-[#1A1A1A] group-hover:text-[#CD7F5E] transition-colors duration-300">Pioneer Machines & Automation Pvt. Ltd</h3>
                <div className="text-base md:text-lg text-[#4A4A4A] mb-3 md:mb-4 font-semibold">AI Intern</div>
                <ul className="space-y-2 text-[#4A4A4A] text-sm md:text-base">
                  <li className="leading-relaxed flex items-start">
                    <span className="text-[#CD7F5E] mr-2">▸</span>
                    <span>Vertex AI + PubMed medical document analysis</span>
                  </li>
                  <li className="leading-relaxed flex items-start">
                    <span className="text-[#CD7F5E] mr-2">▸</span>
                    <span>Built retrieval workflows improving clinical data throughput</span>
                  </li>
                  <li className="leading-relaxed flex items-start">
                    <span className="text-[#CD7F5E] mr-2">▸</span>
                    <span>Data scraping, chunking, image matching, ML pipelines</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 md:mb-12 text-center animate-fade-in-up">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-white p-6 md:p-7 rounded-2xl border-2 border-gray-100 hover:border-[#1A1A1A]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 animate-scale-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Image Placeholder */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-video rounded-xl flex items-center justify-center overflow-hidden mb-5">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 p-4">
                      <div className="bg-white rounded-xl p-3 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <project.icon className="w-8 h-8 text-[#1A1A1A] relative z-10" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="relative z-10">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-[#CD7F5E]/10 text-[#CD7F5E] text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#CD7F5E] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#4A4A4A] text-sm md:text-base mb-4 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="skill-tag px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
