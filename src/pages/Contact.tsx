import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background py-20 flex items-center">
      <div className="container mx-auto px-8 lg:px-16 text-center">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6 animate-on-scroll">
          Let's Build Something
        </h1>
        <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto mb-12 animate-on-scroll leading-relaxed">
          Open to collaborations, internships, and interesting AI projects. 
          Especially excited about healthcare tech and research opportunities.
        </p>
        
        <div className="flex flex-col items-center gap-6 mb-12 animate-on-scroll">
          <div className="flex items-center gap-3 text-lg">
            <Mail className="w-5 h-5 text-[#CD7F5E]" />
            <a href="mailto:gauravpatil2516@gmail.com" className="text-[#1A1A1A] hover:text-[#CD7F5E] transition-smooth">
              gauravpatil2516@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Linkedin className="w-5 h-5 text-[#CD7F5E]" />
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#CD7F5E] transition-smooth">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Github className="w-5 h-5 text-[#CD7F5E]" />
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#CD7F5E] transition-smooth">
              GitHub
            </a>
          </div>
          <div className="flex items-center gap-3 text-lg text-[#4A4A4A]">
            <MapPin className="w-5 h-5 text-[#CD7F5E]" />
            <span>Thane, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
