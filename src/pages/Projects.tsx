import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, Eye, MessageSquare } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-16 text-center animate-on-scroll">
          Selected Work
        </h1>
        
        <div className="space-y-12 max-w-6xl mx-auto">
          {/* Project 1: Neuro-RAG */}
          <Card className="overflow-hidden card-shadow hover-lift hover:card-shadow-hover transition-smooth animate-on-scroll rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-[#CD7F5E] text-white rounded-full px-4 py-1">
                  Production / Healthcare AI
                </Badge>
                <h3 className="font-heading text-4xl font-bold mb-4 text-[#1A1A1A]">Neuro-RAG</h3>
                <p className="text-[#4A4A4A] leading-relaxed mb-6">
                  Mental health diagnostic system using retrieval-augmented generation over ICD-10. 
                  Vectorized 14,000+ lines into 1,438 chunks with FAISS achieving sub-30ms latency. 
                  Built for clinical accuracy with inline citations and evidence panels.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="rounded-md">Python</Badge>
                  <Badge variant="outline" className="rounded-md">FAISS</Badge>
                  <Badge variant="outline" className="rounded-md">Flask</Badge>
                  <Badge variant="outline" className="rounded-md">LangChain</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="transition-smooth rounded-lg">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button size="sm" className="bg-[#CD7F5E] hover:bg-[#CD7F5E]/90 transition-smooth rounded-lg">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
              <div className="bg-muted rounded-lg flex items-center justify-center p-8 h-[400px]">
                <MessageSquare className="w-32 h-32 text-[#CD7F5E]/30" />
              </div>
            </div>
          </Card>

          {/* Project 2: Retinal Vessel Segmentation */}
          <Card className="overflow-hidden card-shadow hover-lift hover:card-shadow-hover transition-smooth animate-on-scroll rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="bg-muted rounded-lg flex items-center justify-center p-8 h-[400px] order-2 md:order-1">
                <Eye className="w-32 h-32 text-[#CD7F5E]/30" />
              </div>
              <div className="flex flex-col justify-center order-1 md:order-2">
                <Badge className="w-fit mb-4 bg-[#CD7F5E] text-white rounded-full px-4 py-1">
                  Computer Vision / Medical Imaging
                </Badge>
                <h3 className="font-heading text-4xl font-bold mb-4 text-[#1A1A1A]">Retinal Vessel Segmentation</h3>
                <p className="text-[#4A4A4A] leading-relaxed mb-6">
                  U-Net++ model achieving 83.7% Dice score on DRIVE dataset. Real-time inference 
                  dashboard under 1 second with drag-and-drop upload and multiple visualization modes. 
                  Production pipeline with mixed precision training.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="rounded-md">PyTorch</Badge>
                  <Badge variant="outline" className="rounded-md">U-Net++</Badge>
                  <Badge variant="outline" className="rounded-md">FastAPI</Badge>
                  <Badge variant="outline" className="rounded-md">OpenCV</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="transition-smooth rounded-lg">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button size="sm" className="bg-[#CD7F5E] hover:bg-[#CD7F5E]/90 transition-smooth rounded-lg">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Try it Live
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Project 3: DermAI */}
          <Card className="overflow-hidden card-shadow hover-lift hover:card-shadow-hover transition-smooth animate-on-scroll rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-[#CD7F5E] text-white rounded-full px-4 py-1">
                  Deep Learning / Medical Diagnosis
                </Badge>
                <h3 className="font-heading text-4xl font-bold mb-4 text-[#1A1A1A]">DermAI</h3>
                <p className="text-[#4A4A4A] leading-relaxed mb-6">
                  Vision Transformer hitting 99.1% accuracy (Cohen's Kappa 0.975) on skin disease 
                  classification. Integrated Llama 3.3 for medical Q&A with Grad-CAM explainability. 
                  Flask + SQLite backend with queued uploads.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="rounded-md">ViT</Badge>
                  <Badge variant="outline" className="rounded-md">TensorFlow</Badge>
                  <Badge variant="outline" className="rounded-md">Llama 3.3</Badge>
                  <Badge variant="outline" className="rounded-md">Flask</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="transition-smooth rounded-lg">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
              <div className="bg-muted rounded-lg flex items-center justify-center p-8 h-[400px]">
                <Brain className="w-32 h-32 text-[#CD7F5E]/30" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
