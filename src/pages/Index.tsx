import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ChevronUp,
  Brain,
  Heart,
  Zap,
  Award,
  Code,
  Database,
  Eye,
  MessageSquare,
  Trophy,
  Medal,
  FileText,
  Sprout,
  Target
} from "lucide-react";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Function to check and animate visible elements
    const animateVisibleElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add('animate-fade-in-up');
        }
      });
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      animateVisibleElements();
      
      // Add shadow to navbar on scroll
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    // Run on initial load to animate elements already in viewport
    animateVisibleElements();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-[rgba(0,0,0,0.06)] shadow-sm">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <a 
              href="#" 
              className="font-heading text-2xl font-bold text-[#1A1A1A] hover:scale-105 transition-transform duration-300"
            >
              GP
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#about" 
                className="text-base font-medium text-[#4A4A4A] hover:text-[#CD7F5E] transition-all duration-300 relative group"
              >
                About
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#CD7F5E] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#projects" 
                className="text-base font-medium text-[#4A4A4A] hover:text-[#CD7F5E] transition-all duration-300 relative group"
              >
                Projects
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#CD7F5E] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#experience" 
                className="text-base font-medium text-[#4A4A4A] hover:text-[#CD7F5E] transition-all duration-300 relative group"
              >
                Experience
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#CD7F5E] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#achievements" 
                className="text-base font-medium text-[#4A4A4A] hover:text-[#CD7F5E] transition-all duration-300 relative group"
              >
                Achievements
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#CD7F5E] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#contact" 
                className="text-base font-medium text-[#4A4A4A] hover:text-[#CD7F5E] transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#CD7F5E] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#F0EFEC 1px, transparent 1px), linear-gradient(90deg, #F0EFEC 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="container mx-auto px-8 lg:px-16 pt-40 pb-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="font-heading font-extrabold text-[#1A1A1A] mb-4 animate-on-scroll"
              style={{
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}
            >
              Gaurav Patil
            </h1>
            <p 
              className="font-semibold text-[#2A2A2A] mb-6 animate-on-scroll animate-delay-1"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 600
              }}
            >
              AI/ML Engineer & Healthcare Tech Builder
            </p>
            <p 
              className="text-[#4A4A4A] mb-10 mx-auto animate-on-scroll animate-delay-2"
              style={{
                fontSize: '18px',
                lineHeight: '1.7',
                maxWidth: '680px',
                fontWeight: 400,
                opacity: 1
              }}
            >
              I build intelligent systems that solve real problems - from mental health diagnostics to retinal disease detection. 
              Currently studying AI/ML at SIES GST and shipping production models that work in the real world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll animate-delay-3">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#CD7F5E] text-white px-8 py-4 rounded-lg text-base font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-[#CD7F5E] text-[#CD7F5E] px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#CD7F5E] hover:text-white transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading mb-16 animate-on-scroll">Building AI that matters</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-10 bg-card card-shadow hover-lift hover:card-shadow-hover transition-smooth animate-on-scroll rounded-xl">
              <Brain className="w-12 h-12 mb-4 text-accent" />
              <h3 className="font-heading text-xl font-semibold mb-3">AI/ML Engineering</h3>
              <p className="text-secondary leading-relaxed">
                PyTorch, TensorFlow, RAG systems, computer vision, deep learning architecture
              </p>
            </Card>
            
            <Card className="p-10 bg-card card-shadow hover-lift hover:card-shadow-hover transition-smooth animate-on-scroll animate-delay-1 rounded-xl">
              <Heart className="w-12 h-12 mb-4 text-accent" />
              <h3 className="font-heading text-xl font-semibold mb-3">Healthcare Focus</h3>
              <p className="text-secondary leading-relaxed">
                Medical imaging, diagnostic tools, clinical data pipelines, real-world impact
              </p>
            </Card>
            
            <Card className="p-10 bg-card card-shadow hover-lift hover:card-shadow-hover transition-smooth animate-on-scroll animate-delay-2 rounded-xl">
              <Zap className="w-12 h-12 mb-4 text-accent" />
              <h3 className="font-heading text-xl font-semibold mb-3">Production-Ready</h3>
              <p className="text-secondary leading-relaxed">
                FastAPI, Flask, Docker, deployed systems with actual users
              </p>
            </Card>
          </div>

          <div className="max-w-3xl animate-on-scroll space-y-6">
            <p className="text-lg text-secondary leading-relaxed">
              B.E. AI/ML at SIES GST, CGPA 8.57
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Interned at Pioneer Machines building Vertex AI pipelines
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Technical Head at IEEE, ML Coordinator at GDG
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-8">
              Passionate about ethical, accessible healthcare AI
            </p>
            <Button variant="outline" size="lg" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-lg transition-smooth">
              <ExternalLink className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading mb-16 animate-on-scroll">Selected Work</h2>
          
          <div className="space-y-12">
            {/* Project 1: Neuro-RAG - Image Right */}
            <Card className="overflow-hidden card-shadow hover-lift hover:card-shadow-hover transition-smooth animate-on-scroll rounded-xl">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-accent text-accent-foreground rounded-full px-4 py-1">Production / Healthcare AI</Badge>
                  <h3 className="font-heading text-4xl font-bold mb-4">Neuro-RAG</h3>
                  <p className="text-secondary leading-relaxed mb-6">
                    Mental health diagnostic system using retrieval-augmented generation over ICD-10. Vectorized 14,000+ lines into 1,438 chunks with FAISS achieving sub-30ms latency. Built for clinical accuracy with inline citations and evidence panels.
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
                    <Button size="sm" className="bg-accent hover:bg-accent/90 transition-smooth rounded-lg">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
                <div className="bg-muted rounded-lg flex items-center justify-center p-8 h-[400px]">
                  <MessageSquare className="w-32 h-32 text-accent/30" />
                </div>
              </div>
            </Card>

            {/* Project 2: Retinal Vessel Segmentation - Image Left */}
            <Card className="overflow-hidden card-shadow hover-lift hover:card-shadow-hover transition-smooth animate-on-scroll rounded-xl">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="bg-muted rounded-lg flex items-center justify-center p-8 h-[400px] order-2 md:order-1">
                  <Eye className="w-32 h-32 text-accent/30" />
                </div>
                <div className="flex flex-col justify-center order-1 md:order-2">
                  <Badge className="w-fit mb-4 bg-accent text-accent-foreground rounded-full px-4 py-1">Computer Vision / Medical Imaging</Badge>
                  <h3 className="font-heading text-4xl font-bold mb-4">Retinal Vessel Segmentation</h3>
                  <p className="text-secondary leading-relaxed mb-6">
                    U-Net++ model achieving 83.7% Dice score on DRIVE dataset. Real-time inference dashboard under 1 second with drag-and-drop upload and multiple visualization modes. Production pipeline with mixed precision training.
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
                    <Button size="sm" className="bg-accent hover:bg-accent/90 transition-smooth rounded-lg">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Try it Live
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Project 3: DermAI - Image Right */}
            <Card className="overflow-hidden card-shadow hover-lift hover:card-shadow-hover transition-smooth animate-on-scroll rounded-xl">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-accent text-accent-foreground rounded-full px-4 py-1">Deep Learning / Medical Diagnosis</Badge>
                  <h3 className="font-heading text-4xl font-bold mb-4">DermAI</h3>
                  <p className="text-secondary leading-relaxed mb-6">
                    Vision Transformer hitting 99.1% accuracy (Cohen's Kappa 0.975) on skin disease classification. Integrated Llama 3.3 for medical Q&A with Grad-CAM explainability. Flask + SQLite backend with queued uploads.
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
                  <Brain className="w-32 h-32 text-accent/30" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading mb-16 animate-on-scroll">Where I've Worked & Led</h2>
          
          <div className="max-w-3xl">
            <div className="space-y-12">
              {/* Experience 1 */}
              <div className="relative pl-8 border-l-[3px] border-accent animate-on-scroll">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-0" />
                <Card className="p-8 bg-card card-shadow rounded-lg">
                  <div className="mb-2 text-sm text-accent font-semibold">Jun 2025 - Aug 2025</div>
                  <h3 className="font-heading text-2xl font-bold mb-2">Pioneer Machines & Automation Pvt. Ltd</h3>
                  <div className="text-lg text-secondary mb-4">AI Intern</div>
                  <ul className="space-y-2 text-secondary">
                    <li className="leading-relaxed">Vertex AI + PubMed medical document analysis</li>
                    <li className="leading-relaxed">Built retrieval workflows improving clinical data throughput</li>
                    <li className="leading-relaxed">Data scraping, chunking, image matching, ML pipelines</li>
                  </ul>
                </Card>
              </div>

              {/* Experience 2 */}
              <div className="relative pl-8 border-l-[3px] border-accent animate-on-scroll">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-0" />
                <Card className="p-8 bg-card card-shadow rounded-lg">
                  <div className="mb-2 text-sm text-accent font-semibold">2024 - Present</div>
                  <h3 className="font-heading text-2xl font-bold mb-2">IEEE SIES GST</h3>
                  <div className="text-lg text-secondary mb-4">Technical Head</div>
                  <ul className="space-y-2 text-secondary">
                    <li className="leading-relaxed">Led AI/ML workshops at Technopedia 2024 for 50+ attendees</li>
                    <li className="leading-relaxed">Delivered CNN workshop on Indian Sign Language recognition</li>
                    <li className="leading-relaxed">Created lab materials and demos with live troubleshooting</li>
                  </ul>
                </Card>
              </div>

              {/* Experience 3 */}
              <div className="relative pl-8 border-l-[3px] border-accent animate-on-scroll">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-0" />
                <Card className="p-8 bg-card card-shadow rounded-lg">
                  <div className="mb-2 text-sm text-accent font-semibold">2024 - 2025</div>
                  <h3 className="font-heading text-2xl font-bold mb-2">Google Developers Group</h3>
                  <div className="text-lg text-secondary mb-4">ML & DS Coordinator</div>
                  <ul className="space-y-2 text-secondary">
                    <li className="leading-relaxed">Mentored 100+ students on model design, evaluation, and deployment</li>
                    <li className="leading-relaxed">Organized peer-led hackathons and practice sessions</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading mb-16 animate-on-scroll">Wins & Milestones</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Trophy, title: "Second Runner-Up", event: "OxygenIgnite Hackathon, NIT Goa" },
              { icon: Medal, title: "Winner", event: "Cognition (Dept. Project Competition)" },
              { icon: Medal, title: "Runner-up", event: "BNB Chain Bombay Hackathon" },
              { icon: Sprout, title: "Top 3 (Sustainability)", event: "ByteCamp Hackathon" },
              { icon: Target, title: "Semi-finalist", event: "Deep Blue Project S10 (Mastek)" },
              { icon: FileText, title: "Certified", event: "Supervised ML + Advanced Algorithms (DeepLearning.AI & Stanford)" },
            ].map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 bg-card card-shadow hover-lift hover:card-shadow-hover transition-smooth animate-on-scroll rounded-lg"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <achievement.icon className="w-8 h-8 mb-3 text-accent" />
                <h3 className="font-heading text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{achievement.event}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading mb-16 animate-on-scroll">Tools I Work With</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-accent" />
                <h3 className="font-heading text-xl font-semibold">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "SQL"].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll animate-delay-1">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-accent" />
                <h3 className="font-heading text-xl font-semibold">ML/DL</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LangChain", "Hugging Face", "SHAP"].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll animate-delay-2">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-accent" />
                <h3 className="font-heading text-xl font-semibold">CV & NLP</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["U-Net++", "OpenCV", "ViT", "Detectron2", "Grad-CAM", "Mask R-CNN", "SentenceTransformers"].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll animate-delay-3">
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-accent" />
                <h3 className="font-heading text-xl font-semibold">Deployment</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Flask", "FastAPI", "Docker", "Git", "Streamlit", "Power BI", "Jupyter"].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading mb-6 animate-on-scroll">Let's Build Something</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto mb-12 animate-on-scroll leading-relaxed">
            Open to collaborations, internships, and interesting AI projects. 
            Especially excited about healthcare tech and research opportunities.
          </p>
          
          <div className="flex flex-col items-center gap-6 mb-12 animate-on-scroll">
            <div className="flex items-center gap-3 text-lg">
              <Mail className="w-5 h-5 text-accent" />
              <a href="mailto:gauravpatil2516@gmail.com" className="text-foreground hover:text-accent transition-smooth">
                gauravpatil2516@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Linkedin className="w-5 h-5 text-accent" />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-smooth">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Github className="w-5 h-5 text-accent" />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-smooth">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-3 text-lg text-secondary">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Thane, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-secondary text-sm">
          © 2025 Gaurav Patil - Designed with care, built with code
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 rounded-full bg-accent hover:bg-accent/90 transition-smooth hover:scale-110 shadow-lg z-50 w-12 h-12"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5 text-accent-foreground" />
        </Button>
      )}
    </div>
  );
};

export default Index;
