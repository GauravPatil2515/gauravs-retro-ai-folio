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
  MessageSquare
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
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-lg font-bold tracking-tight">GP</span>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-secondary hover:text-foreground transition-smooth">About</a>
              <a href="#projects" className="text-sm text-secondary hover:text-foreground transition-smooth">Projects</a>
              <a href="#experience" className="text-sm text-secondary hover:text-foreground transition-smooth">Experience</a>
              <a href="#contact" className="text-sm text-secondary hover:text-foreground transition-smooth">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-32 md:pb-48 relative">
          <div className="max-w-4xl animate-on-scroll">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-6">
              Gaurav Patil
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary mb-8 tracking-tight">
              AI/ML Engineer & Healthcare Tech Builder
            </p>
            <p className="text-lg md:text-xl text-secondary max-w-3xl mb-12 leading-relaxed">
              I build intelligent systems that solve real problems - from mental health diagnostics to retinal disease detection. 
              Currently studying AI/ML at SIES GST and shipping production-ready models.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground transition-smooth hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground hover:bg-foreground hover:text-background transition-smooth"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-on-scroll">Building AI that matters</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 card-shadow hover:card-shadow-hover transition-smooth animate-on-scroll">
              <Brain className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-3">AI/ML Engineering</h3>
              <p className="text-secondary leading-relaxed">
                PyTorch, TensorFlow, RAG systems, computer vision - building intelligent models that actually work in production.
              </p>
            </Card>
            
            <Card className="p-8 card-shadow hover:card-shadow-hover transition-smooth animate-on-scroll animate-delay-1">
              <Heart className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-3">Healthcare Focus</h3>
              <p className="text-secondary leading-relaxed">
                Medical imaging, diagnostic tools, clinical data pipelines - technology that saves lives and improves care.
              </p>
            </Card>
            
            <Card className="p-8 card-shadow hover:card-shadow-hover transition-smooth animate-on-scroll animate-delay-2">
              <Zap className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-3">Production-Ready</h3>
              <p className="text-secondary leading-relaxed">
                FastAPI, Flask, Docker - not just notebooks. Real deployments, real users, real impact.
              </p>
            </Card>
          </div>

          <div className="max-w-3xl animate-on-scroll">
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              Currently pursuing B.E. in AI/ML at SIES GST with an 8.57 CGPA. I've had the privilege of interning at 
              Pioneer Machines, where I built ML pipelines on Vertex AI for medical document analysis.
            </p>
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              I'm passionate about healthcare AI because I believe technology should be accessible and ethical. 
              Whether it's diagnosing mental health conditions or detecting retinal diseases, every line of code is 
              an opportunity to make a difference.
            </p>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              As Technical Head at IEEE SIES GST, I've mentored 100+ students through workshops and hackathons. 
              Nothing beats the feeling of seeing someone's first model train successfully.
            </p>
            <Button variant="outline" size="lg" className="transition-smooth hover:bg-foreground hover:text-background">
              <ExternalLink className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-on-scroll">Selected Work</h2>
          
          <div className="grid gap-12">
            {/* Project 1: Neuro-RAG */}
            <Card className="overflow-hidden card-shadow hover:card-shadow-hover transition-smooth hover:-translate-y-1 animate-on-scroll">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-accent/10 text-accent border-accent/20">Production / Healthcare AI</Badge>
                  <h3 className="text-3xl font-bold mb-4">Neuro-RAG</h3>
                  <p className="text-secondary leading-relaxed mb-6">
                    Mental health diagnostic system using retrieval-augmented generation over ICD-10. Handles 14,000+ 
                    vectorized chunks with &lt;30ms latency. Built for clinical accuracy with inline citations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">FAISS</Badge>
                    <Badge variant="outline">Flask</Badge>
                    <Badge variant="outline">LangChain</Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="transition-smooth">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button size="sm" className="bg-accent hover:bg-accent/90 transition-smooth">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
                <div className="bg-muted rounded-lg flex items-center justify-center p-8">
                  <MessageSquare className="w-32 h-32 text-accent/20" />
                </div>
              </div>
            </Card>

            {/* Project 2: Retinal Vessel Segmentation */}
            <Card className="overflow-hidden card-shadow hover:card-shadow-hover transition-smooth hover:-translate-y-1 animate-on-scroll">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="bg-muted rounded-lg flex items-center justify-center p-8 order-2 md:order-1">
                  <Eye className="w-32 h-32 text-accent/20" />
                </div>
                <div className="flex flex-col justify-center order-1 md:order-2">
                  <Badge className="w-fit mb-4 bg-accent/10 text-accent border-accent/20">Computer Vision / Medical Imaging</Badge>
                  <h3 className="text-3xl font-bold mb-4">Retinal Vessel Segmentation</h3>
                  <p className="text-secondary leading-relaxed mb-6">
                    U-Net++ model achieving 83.7% Dice score on DRIVE dataset. Real-time inference dashboard with 
                    drag-and-drop upload and multiple viz modes. Production pipeline with mixed precision training.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline">PyTorch</Badge>
                    <Badge variant="outline">U-Net++</Badge>
                    <Badge variant="outline">FastAPI</Badge>
                    <Badge variant="outline">OpenCV</Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="transition-smooth">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button size="sm" className="bg-accent hover:bg-accent/90 transition-smooth">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Try it Live
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Project 3: DermAI */}
            <Card className="overflow-hidden card-shadow hover:card-shadow-hover transition-smooth hover:-translate-y-1 animate-on-scroll">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-accent/10 text-accent border-accent/20">Deep Learning / Medical Diagnosis</Badge>
                  <h3 className="text-3xl font-bold mb-4">DermAI</h3>
                  <p className="text-secondary leading-relaxed mb-6">
                    Vision Transformer classifier hitting 99.1% accuracy (Kappa 0.975). Integrated Llama 3.3 for medical Q&A. 
                    Grad-CAM explainability + Flask web app with SQLite backend.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline">ViT</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">Llama 3.3</Badge>
                    <Badge variant="outline">Flask</Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="transition-smooth">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
                <div className="bg-muted rounded-lg flex items-center justify-center p-8">
                  <Brain className="w-32 h-32 text-accent/20" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-on-scroll">Where I've Worked & Led</h2>
          
          <div className="max-w-3xl">
            <div className="space-y-12">
              {/* Experience 1 */}
              <div className="relative pl-8 border-l-2 border-accent animate-on-scroll">
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0" />
                <div className="mb-2 text-sm text-accent font-semibold">Jun 2025 - Aug 2025</div>
                <h3 className="text-2xl font-bold mb-2">Pioneer Machines & Automation Pvt. Ltd</h3>
                <div className="text-lg text-secondary mb-4">AI Intern</div>
                <ul className="space-y-2 text-secondary">
                  <li className="leading-relaxed">• Vertex AI + PubMed medical document analysis</li>
                  <li className="leading-relaxed">• Built retrieval workflows improving clinical data throughput</li>
                  <li className="leading-relaxed">• Data scraping, chunking, image matching, ML pipelines</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="relative pl-8 border-l-2 border-accent animate-on-scroll">
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0" />
                <div className="mb-2 text-sm text-accent font-semibold">2024 - Present</div>
                <h3 className="text-2xl font-bold mb-2">IEEE SIES GST</h3>
                <div className="text-lg text-secondary mb-4">Technical Head</div>
                <ul className="space-y-2 text-secondary">
                  <li className="leading-relaxed">• Led AI/ML workshops at Technopedia 2024 for 50+ attendees</li>
                  <li className="leading-relaxed">• Delivered CNN workshop on Indian Sign Language recognition</li>
                  <li className="leading-relaxed">• Created lab materials, demos, live troubleshooting</li>
                </ul>
              </div>

              {/* Experience 3 */}
              <div className="relative pl-8 border-l-2 border-accent animate-on-scroll">
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0" />
                <div className="mb-2 text-sm text-accent font-semibold">2024 - 2025</div>
                <h3 className="text-2xl font-bold mb-2">Google Developers Group</h3>
                <div className="text-lg text-secondary mb-4">ML & DS Coordinator</div>
                <ul className="space-y-2 text-secondary">
                  <li className="leading-relaxed">• Mentored 100+ students on model design & deployment</li>
                  <li className="leading-relaxed">• Organized peer-led hackathons and practice sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 md:py-32 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-on-scroll">Wins & Milestones</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Second Runner-Up", event: "OxygenIgnite Hackathon, NIT Goa" },
              { icon: Award, title: "Winner", event: "Cognition (Dept. Project Competition)" },
              { icon: Award, title: "Runner-up", event: "BNB Chain Bombay Hackathon" },
              { icon: Award, title: "Top 3 (Sustainability)", event: "ByteCamp Hackathon" },
              { icon: Award, title: "Semi-finalist", event: "Deep Blue Project S10 (Mastek)" },
              { icon: Award, title: "Certified", event: "Supervised ML + Advanced Algorithms (DeepLearning.AI & Stanford)" },
            ].map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 card-shadow hover:card-shadow-hover transition-smooth hover:-translate-y-1 animate-on-scroll"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <achievement.icon className="w-8 h-8 mb-3 text-accent" />
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{achievement.event}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-on-scroll">Tools I Work With</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "SQL"].map(skill => (
                  <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll animate-delay-1">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold">ML/DL</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LangChain", "Hugging Face"].map(skill => (
                  <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll animate-delay-2">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold">CV & NLP</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["U-Net++", "OpenCV", "ViT", "Detectron2", "Grad-CAM", "SentenceTransformers"].map(skill => (
                  <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll animate-delay-3">
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold">Deployment</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Flask", "FastAPI", "Docker", "Git", "Streamlit", "Power BI"].map(skill => (
                  <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Let's Build Something</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto mb-12 animate-on-scroll">
            Open to collaborations, internships, and interesting AI projects. 
            Especially excited about healthcare tech and research opportunities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 transition-smooth hover:scale-105"
              onClick={() => window.open('mailto:gauravpatil2516@gmail.com')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="transition-smooth hover:bg-foreground hover:text-background"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="transition-smooth hover:bg-foreground hover:text-background"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-secondary animate-on-scroll">
            <MapPin className="w-4 h-4" />
            <span>Thane, Maharashtra, India</span>
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
          className="fixed bottom-8 right-8 rounded-full bg-accent hover:bg-accent/90 transition-smooth hover:scale-110 shadow-lg z-50"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
