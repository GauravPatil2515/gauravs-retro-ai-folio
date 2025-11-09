import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Eye, MessageSquare, Github, ExternalLink } from "lucide-react";

const Experience = () => {
  const projects = [
    {
      title: "Neuro-RAG",
      category: "Production / Healthcare AI",
      description: "Mental health diagnostic system using retrieval-augmented generation over ICD-10. Vectorized 14,000+ lines into 1,438 chunks with FAISS achieving sub-30ms latency. Built for clinical accuracy with inline citations and evidence panels.",
      tech: ["Python", "FAISS", "Flask", "LangChain"],
      icon: MessageSquare,
      image: "/projects/neuro-rag.png",
      github: "https://github.com/GauravPatil2515/NEURO-RAG.git",
      demo: null,
    },
    {
      title: "Retinal Vessel Segmentation",
      category: "Computer Vision / Medical Imaging",
      description: "U-Net++ model achieving 83.7% Dice score on DRIVE dataset. Real-time inference dashboard under 1 second with drag-and-drop upload and multiple visualization modes. Production pipeline with mixed precision training.",
      tech: ["PyTorch", "U-Net++", "FastAPI", "OpenCV"],
      icon: Eye,
      image: "/projects/retinal-vessel.png",
      github: "https://github.com/GauravPatil2515/Retina-Unet.git",
      demo: null,
    },
    {
      title: "DermAI",
      category: "Deep Learning / Medical Diagnosis",
      description: "Vision Transformer hitting 99.1% accuracy (Cohen's Kappa 0.975) on skin disease classification. Integrated Llama 3.3 for medical Q&A with Grad-CAM explainability. Flask + SQLite backend with queued uploads.",
      tech: ["ViT", "TensorFlow", "Llama 3.3", "Flask"],
      icon: Brain,
      image: "/projects/dermai.png",
      github: "https://github.com/GauravPatil2515/derm-ai.git",
      demo: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-12 md:mb-16 text-center">
          Where I've Worked
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {/* Experience 1 */}
            <div className="relative pl-6 md:pl-8 border-l-[3px] border-[#DAA520]">
              <div className="absolute w-3 h-3 bg-[#DAA520] rounded-full -left-[7px] top-0 shadow-lg shadow-[#DAA520]/50" />
              <Card className="p-6 md:p-8 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-500 rounded-2xl border border-gray-200 hover:border-gray-300 group">
                <div className="mb-3 md:mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-full text-xs font-bold text-white shadow-md">Jun 2025 - Aug 2025</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-[#1A1A1A] group-hover:text-[#DAA520] transition-colors duration-300">Pioneer Machines & Automation Pvt. Ltd</h3>
                <div className="text-base md:text-lg text-[#4A4A4A] mb-3 md:mb-4 font-semibold">AI Intern</div>
                <ul className="space-y-2 text-[#4A4A4A] text-sm">
                  <li className="leading-relaxed flex items-start">
                    <span className="text-[#DAA520] mr-2">▸</span>
                    <span>Vertex AI + PubMed medical document analysis</span>
                  </li>
                  <li className="leading-relaxed flex items-start">
                    <span className="text-[#DAA520] mr-2">▸</span>
                    <span>Built retrieval workflows improving clinical data throughput</span>
                  </li>
                  <li className="leading-relaxed flex items-start">
                    <span className="text-[#DAA520] mr-2">▸</span>
                    <span>Data scraping, chunking, image matching, ML pipelines</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 md:mb-12 text-center">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-white p-6 md:p-7 rounded-2xl border border-gray-200 hover:border-gray-300 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute -inset-px bg-gradient-to-b from-white/50 to-transparent rounded-2xl pointer-events-none"></div>
                
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
                    <span className="inline-block px-3 py-1 bg-[#DAA520]/10 text-[#DAA520] text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#DAA520] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#4A4A4A] text-sm mb-4 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 text-[#1A1A1A] rounded-lg text-xs font-medium hover:border-[#DAA520] hover:bg-[#DAA520]/5 hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 rounded-xl font-semibold"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          className="w-full bg-[#DAA520] text-white hover:bg-[#B8860B] transition-all duration-300 rounded-xl font-semibold"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )}
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
