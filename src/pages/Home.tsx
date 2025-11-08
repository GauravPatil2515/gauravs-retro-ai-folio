import { Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-background py-12 md:py-20">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Name */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6 md:mb-8">
            Gaurav Patil
          </h1>
          
          {/* Subtitle with mixed weights */}
          <p className="text-lg md:text-xl text-[#2A2A2A] mb-6 md:mb-8 px-4">
            I am a <span className="font-bold">Backend Developer & AI/ML Engineer</span>
          </p>
          
          {/* Description */}
          <p className="text-sm md:text-base text-[#6B7280] mb-10 md:mb-12 mx-auto px-4 max-w-3xl leading-relaxed">
            I create innovative AI applications and scalable backend solutions that drive real-world impact
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5 px-4">
            <button
              onClick={() => window.location.href = '/experience'}
              className="group relative bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white px-8 md:px-10 py-4 rounded-2xl text-sm md:text-base font-semibold hover:from-[#2A2A2A] hover:via-[#1A1A1A] hover:to-[#2A2A2A] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.35)] hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">View My Work</span>
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="group relative bg-white border-2 border-[#E5E7EB] text-[#1A1A1A] px-8 md:px-10 py-4 rounded-2xl text-sm md:text-base font-semibold hover:border-[#1A1A1A] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-105 overflow-hidden hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1A1A1A]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Contact Me</span>
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8 md:mt-10 px-4">
            <a
              href="https://github.com/GauravPatil2515"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#1A1A1A] hover:bg-[#1A1A1A] transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6 text-[#1A1A1A] group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/gauravpatil2515/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#0077B5] hover:bg-[#0077B5] transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-[#1A1A1A] group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="mailto:gauravpatil2516@gmail.com"
              className="group w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#CD7F5E] hover:bg-[#CD7F5E] transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#1A1A1A] group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
