const Home = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-24 md:pt-32 pb-24 md:pb-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Name */}
          <h1 
            className="font-heading font-extrabold text-[#1A1A1A] mb-6 md:mb-8 animate-fade-in-up group cursor-default transition-colors duration-300 hover:text-[#CD7F5E]"
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 6.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: '1',
              fontWeight: 900
            }}
          >
            Gaurav Patil
          </h1>
          
          {/* Subtitle with mixed weights */}
          <p 
            className="text-[#2A2A2A] mb-6 md:mb-8 animate-slide-in-right px-4 cursor-default"
            style={{
              fontSize: 'clamp(1.25rem, 4vw, 2.25rem)',
              lineHeight: '1.3',
              fontWeight: 400,
              animationDelay: '0.2s'
            }}
          >
            I am a <span className="font-bold transition-colors duration-300 hover:text-[#CD7F5E]">Backend Developer & AI/ML Engineer</span>
          </p>
          
          {/* Description */}
          <p 
            className="text-[#6B7280] mb-10 md:mb-12 mx-auto animate-fade-in px-4 cursor-default transition-colors duration-300 hover:text-[#4A4A4A]"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: '1.8',
              maxWidth: '720px',
              fontWeight: 400,
              animationDelay: '0.4s'
            }}
          >
            I create <span className="transition-colors duration-300 hover:text-[#CD7F5E]">innovative AI applications</span> and <span className="transition-colors duration-300 hover:text-[#CD7F5E]">scalable backend solutions</span> that drive real-world impact
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5 animate-scale-in px-4" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => window.location.href = '/services'}
              className="group relative bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white px-8 md:px-10 py-4 rounded-2xl text-sm md:text-base font-semibold hover:from-[#2A2A2A] hover:via-[#1A1A1A] hover:to-[#2A2A2A] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.35)] hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">View My Work</span>
            </button>
            <button
              onClick={() => window.location.href = '/services'}
              className="group relative bg-white border-2 border-[#E5E7EB] text-[#1A1A1A] px-8 md:px-10 py-4 rounded-2xl text-sm md:text-base font-semibold hover:border-[#1A1A1A] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-105 overflow-hidden hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1A1A1A]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
