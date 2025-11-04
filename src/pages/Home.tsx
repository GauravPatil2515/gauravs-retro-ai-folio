const Home = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Tech keywords background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-[0.03] text-[#1A1A1A] font-bold leading-tight">
          <span className="text-[8rem] sm:text-[10rem] md:text-[12rem] mx-4 md:mx-8 my-2 md:my-4">AI/ML</span>
          <span className="text-[6rem] sm:text-[7rem] md:text-[8rem] mx-3 md:mx-6 my-2 md:my-3">Python</span>
          <span className="text-[7rem] sm:text-[9rem] md:text-[10rem] mx-4 md:mx-8 my-2 md:my-4">Flask</span>
          <span className="text-[5rem] sm:text-[6rem] md:text-[7rem] mx-3 md:mx-6 my-2 md:my-3">TensorFlow</span>
          <span className="text-[6rem] sm:text-[8rem] md:text-[9rem] mx-4 md:mx-8 my-2 md:my-4">React</span>
          <span className="text-[8rem] sm:text-[10rem] md:text-[11rem] mx-3 md:mx-6 my-2 md:my-3">MongoDB</span>
          <span className="text-[6rem] sm:text-[7rem] md:text-[8rem] mx-4 md:mx-8 my-2 md:my-4">Supabase</span>
          <span className="text-[7rem] sm:text-[9rem] md:text-[10rem] mx-3 md:mx-6 my-2 md:my-3">Docker</span>
          <span className="text-[6rem] sm:text-[8rem] md:text-[9rem] mx-4 md:mx-8 my-2 md:my-4">PostgreSQL</span>
          <span className="text-[5rem] sm:text-[6rem] md:text-[7rem] mx-3 md:mx-6 my-2 md:my-3">FastAPI</span>
          <span className="text-[8rem] sm:text-[10rem] md:text-[11rem] mx-4 md:mx-8 my-2 md:my-4">Transformers</span>
          <span className="text-[6rem] sm:text-[7rem] md:text-[8rem] mx-3 md:mx-6 my-2 md:my-3">Cloud</span>
          <span className="text-[7rem] sm:text-[9rem] md:text-[10rem] mx-4 md:mx-8 my-2 md:my-4">MySQL</span>
          <span className="text-[6rem] sm:text-[8rem] md:text-[9rem] mx-3 md:mx-6 my-2 md:my-3">LinkedIn</span>
          <span className="text-[5rem] sm:text-[6rem] md:text-[7rem] mx-4 md:mx-8 my-2 md:my-4">Console</span>
          <span className="text-[9rem] sm:text-[11rem] md:text-[12rem] mx-3 md:mx-6 my-2 md:my-3">RAG</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-24 md:pt-32 pb-24 md:pb-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Name */}
          <h1 
            className="font-heading font-extrabold text-[#1A1A1A] mb-6 md:mb-8 animate-on-scroll"
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
            className="text-[#2A2A2A] mb-6 md:mb-8 animate-on-scroll animate-delay-1 px-4"
            style={{
              fontSize: 'clamp(1.25rem, 4vw, 2.25rem)',
              lineHeight: '1.3',
              fontWeight: 400
            }}
          >
            I am a <span className="font-bold">Backend Developer & AI/ML Engineer</span>
          </p>
          
          {/* Description */}
          <p 
            className="text-[#6B7280] mb-10 md:mb-12 mx-auto animate-on-scroll animate-delay-2 px-4"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: '1.8',
              maxWidth: '720px',
              fontWeight: 400
            }}
          >
            I create innovative AI applications and scalable backend solutions that drive real-world impact
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5 animate-on-scroll animate-delay-3 px-4">
            <button
              onClick={() => window.location.href = '/services'}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white px-8 md:px-10 py-4 rounded-xl text-sm md:text-base font-semibold hover:from-[#2A2A2A] hover:to-[#1A1A1A] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => window.location.href = '/services'}
              className="bg-white border-2 border-[#E5E7EB] text-[#1A1A1A] px-8 md:px-10 py-4 rounded-xl text-sm md:text-base font-semibold hover:border-[#1A1A1A] hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
