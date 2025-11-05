import { Mail, Linkedin, Github, MapPin, Calendar, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

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

        {/* Connect Options */}
        <div className="max-w-2xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
            Connect With Me
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <a
              href="mailto:gauravpatil2516@gmail.com?subject=Project Collaboration&body=Hi Gaurav, I would like to discuss..."
              className="group relative bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#CD7F5E] hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl w-12 h-12 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#CD7F5E] transition-colors duration-300">
                  Email Me
                </h3>
                <p className="text-sm text-[#4A4A4A]">
                  Quick message via Gmail
                </p>
              </div>
            </a>

            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2VErfTQpD2LvwJi_kPZ5h7yUqJQJmEo8rDCdZuZzN5Vz1qYqYqYqYqYqYq"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#CD7F5E] hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl w-12 h-12 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#CD7F5E] transition-colors duration-300">
                  Schedule a Meeting
                </h3>
                <p className="text-sm text-[#4A4A4A]">
                  Book a Google Meet call
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
