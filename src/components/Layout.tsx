import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
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
      
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    animateVisibleElements();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background relative">
      {/* Dense Tech Background Pattern for All Pages */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-[0.025] text-[#1A1A1A] font-bold leading-none">
          {/* Row 1 */}
          <span className="text-[5rem] sm:text-[7rem] md:text-[8rem] mx-2 md:mx-4 my-1">PyTorch</span>
          <span className="text-[4rem] sm:text-[5rem] md:text-[6rem] mx-2 md:mx-3 my-1">CNN</span>
          <span className="text-[6rem] sm:text-[8rem] md:text-[10rem] mx-2 md:mx-4 my-1">Flask</span>
          <span className="text-[4rem] sm:text-[6rem] md:text-[7rem] mx-2 md:mx-3 my-1">LSTM</span>
          <span className="text-[5rem] sm:text-[7rem] md:text-[9rem] mx-2 md:mx-4 my-1">Docker</span>
          
          {/* Row 2 */}
          <span className="text-[7rem] sm:text-[9rem] md:text-[11rem] mx-2 md:mx-3 my-1">TensorFlow</span>
          <span className="text-[4rem] sm:text-[6rem] md:text-[7rem] mx-2 md:mx-4 my-1">Redis</span>
          <span className="text-[6rem] sm:text-[8rem] md:text-[10rem] mx-2 md:mx-3 my-1">FastAPI</span>
          <span className="text-[5rem] sm:text-[7rem] md:text-[8rem] mx-2 md:mx-4 my-1">BERT</span>
          
          {/* Row 3 */}
          <span className="text-[4rem] sm:text-[5rem] md:text-[6rem] mx-2 md:mx-3 my-1">PostgreSQL</span>
          <span className="text-[8rem] sm:text-[10rem] md:text-[12rem] mx-2 md:mx-4 my-1">RAG</span>
          <span className="text-[5rem] sm:text-[7rem] md:text-[8rem] mx-2 md:mx-3 my-1">MongoDB</span>
          <span className="text-[6rem] sm:text-[8rem] md:text-[9rem] mx-2 md:mx-4 my-1">Django</span>
          <span className="text-[4rem] sm:text-[6rem] md:text-[7rem] mx-2 md:mx-3 my-1">YOLO</span>
          
          {/* Row 4 */}
          <span className="text-[5rem] sm:text-[7rem] md:text-[9rem] mx-2 md:mx-4 my-1">Kafka</span>
          <span className="text-[7rem] sm:text-[9rem] md:text-[11rem] mx-2 md:mx-3 my-1">LangChain</span>
          <span className="text-[4rem] sm:text-[5rem] md:text-[6rem] mx-2 md:mx-4 my-1">AWS</span>
          <span className="text-[6rem] sm:text-[8rem] md:text-[10rem] mx-2 md:mx-3 my-1">GPT</span>
          <span className="text-[5rem] sm:text-[7rem] md:text-[8rem] mx-2 md:mx-4 my-1">RabbitMQ</span>
          
          {/* Row 5 */}
          <span className="text-[4rem] sm:text-[6rem] md:text-[7rem] mx-2 md:mx-3 my-1">Keras</span>
          <span className="text-[8rem] sm:text-[10rem] md:text-[12rem] mx-2 md:mx-4 my-1">NLP</span>
          <span className="text-[5rem] sm:text-[6rem] md:text-[7rem] mx-2 md:mx-3 my-1">Nginx</span>
          <span className="text-[6rem] sm:text-[8rem] md:text-[10rem] mx-2 md:mx-4 my-1">OpenCV</span>
          <span className="text-[4rem] sm:text-[5rem] md:text-[6rem] mx-2 md:mx-3 my-1">GCP</span>
          
          {/* Row 6 */}
          <span className="text-[5rem] sm:text-[7rem] md:text-[9rem] mx-2 md:mx-4 my-1">Pandas</span>
          <span className="text-[7rem] sm:text-[9rem] md:text-[11rem] mx-2 md:mx-3 my-1">Vertex AI</span>
          <span className="text-[4rem] sm:text-[6rem] md:text-[7rem] mx-2 md:mx-4 my-1">ViT</span>
          <span className="text-[6rem] sm:text-[8rem] md:text-[10rem] mx-2 md:mx-3 my-1">NumPy</span>
          <span className="text-[5rem] sm:text-[7rem] md:text-[8rem] mx-2 md:mx-4 my-1">Gunicorn</span>
          
          {/* Row 7 */}
          <span className="text-[4rem] sm:text-[5rem] md:text-[6rem] mx-2 md:mx-3 my-1">SHAP</span>
          <span className="text-[8rem] sm:text-[10rem] md:text-[12rem] mx-2 md:mx-4 my-1">Transformers</span>
          <span className="text-[5rem] sm:text-[7rem] md:text-[8rem] mx-2 md:mx-3 my-1">K8s</span>
          <span className="text-[6rem] sm:text-[8rem] md:text-[9rem] mx-2 md:mx-4 my-1">LLM</span>
          <span className="text-[4rem] sm:text-[6rem] md:text-[7rem] mx-2 md:mx-3 my-1">CUDA</span>
          
          {/* Row 8 */}
          <span className="text-[5rem] sm:text-[7rem] md:text-[9rem] mx-2 md:mx-4 my-1">Celery</span>
          <span className="text-[7rem] sm:text-[9rem] md:text-[11rem] mx-2 md:mx-3 my-1">U-Net</span>
          <span className="text-[4rem] sm:text-[5rem] md:text-[6rem] mx-2 md:mx-4 my-1">gRPC</span>
          <span className="text-[6rem] sm:text-[8rem] md:text-[10rem] mx-2 md:mx-3 my-1">ResNet</span>
          <span className="text-[5rem] sm:text-[7rem] md:text-[8rem] mx-2 md:mx-4 my-1">Airflow</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 mt-6 md:mt-8">
          <div className="glass-effect rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50 px-4 md:px-6 py-3.5 hover:shadow-[0_12px_50px_rgb(0,0,0,0.18)] transition-all duration-500 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-2 md:gap-4">
              {/* Logo */}
              <Link 
                to="/" 
                className="flex items-center gap-2 group flex-shrink-0"
              >
                <div className="bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] rounded-xl p-2.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ animationDuration: '3s' }}></div>
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-white relative z-10" />
                </div>
              </Link>

              {/* Nav Links */}
              <div className="flex items-center gap-1 md:gap-2">
                <Link
                  to="/"
                  className={`px-3 sm:px-4 md:px-6 py-2 text-sm md:text-[15px] font-medium rounded-xl transition-all duration-500 relative overflow-hidden ${
                    isActive('/') 
                      ? 'text-white bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] shadow-lg font-semibold' 
                      : 'text-[#5B5B5B] hover:text-[#1A1A1A] hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 hover:shadow-md'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`px-3 sm:px-4 md:px-6 py-2 text-sm md:text-[15px] font-medium rounded-xl transition-all duration-500 relative overflow-hidden ${
                    isActive('/about') 
                      ? 'text-white bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] shadow-lg font-semibold' 
                      : 'text-[#5B5B5B] hover:text-[#1A1A1A] hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 hover:shadow-md'
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/achievements"
                  className={`px-3 sm:px-4 md:px-6 py-2 text-sm md:text-[15px] font-medium rounded-xl transition-all duration-500 relative overflow-hidden ${
                    isActive('/achievements') 
                      ? 'text-white bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] shadow-lg font-semibold' 
                      : 'text-[#5B5B5B] hover:text-[#1A1A1A] hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 hover:shadow-md'
                  }`}
                >
                  <span className="hidden sm:inline">Achievements</span>
                  <span className="sm:hidden">Awards</span>
                </Link>
                <Link
                  to="/services"
                  className={`px-3 sm:px-4 md:px-6 py-2 text-sm md:text-[15px] font-medium rounded-xl transition-all duration-500 relative overflow-hidden ${
                    isActive('/services') 
                      ? 'text-white bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] shadow-lg font-semibold' 
                      : 'text-[#5B5B5B] hover:text-[#1A1A1A] hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 hover:shadow-md'
                  }`}
                >
                  Services
                </Link>
                <Link
                  to="/experience"
                  className={`px-3 sm:px-4 md:px-6 py-2 text-sm md:text-[15px] font-medium rounded-xl transition-all duration-500 relative overflow-hidden ${
                    isActive('/experience') 
                      ? 'text-white bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] shadow-lg font-semibold' 
                      : 'text-[#5B5B5B] hover:text-[#1A1A1A] hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 hover:shadow-md'
                  }`}
                >
                  <span className="hidden sm:inline">Experience</span>
                  <span className="sm:hidden">Work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 md:py-8 mt-16 md:mt-20 bg-gradient-to-b from-transparent to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#4A4A4A] text-xs md:text-sm">
          © 2025 Gaurav Patil - Designed with care, built with code
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] hover:from-[#2A2A2A] hover:via-[#1A1A1A] hover:to-[#2A2A2A] transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] z-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center group relative overflow-hidden"
          aria-label="Back to top"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:animate-bounce relative z-10" />
        </button>
      )}
    </div>
  );
};

export default Layout;
