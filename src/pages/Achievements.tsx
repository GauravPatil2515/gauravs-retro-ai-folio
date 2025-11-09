import { Card } from "@/components/ui/card";
import { Trophy, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "SIH Internal Hackathon - Participant",
      description: "SIES Graduate School of Technology, Nerul",
      date: "2024 & 2025",
      icon: Trophy,
      image: "/achievements/sih-certificate.png",
      category: "Hackathon",
      badge: "Participant"
    },
    {
      title: "Second Runner-Up - OxygenIgnite Hackathon",
      description: "NIT Goa (Stellar India)",
      date: "2025",
      icon: Trophy,
      image: "/achievements/bnb-chain.jpg",
      category: "Hackathon",
      badge: "2nd Runner-Up"
    },
    {
      title: "Runner-up - BNB Chain Bombay Hackathon",
      description: "Blockchain hackathon competition",
      date: "2025",
      icon: Award,
      image: "/achievements/oxygen-ignite.jpg",
      category: "Hackathon",
      badge: "Runner-Up"
    },
    {
      title: "Top 3 (Sustainability) - ByteCamp Hackathon",
      description: "Sustainability-focused hackathon",
      date: "2025",
      icon: Trophy,
      image: "/achievements/bytecamp.png",
      category: "Hackathon",
      badge: "Top 3"
    },
    {
      title: "Semi-finalist - Deep Blue Project Season 10",
      description: "Mastek's flagship project competition",
      date: "2025",
      icon: Award,
      image: "/achievements/deep-blue.jpg",
      category: "Competition",
      badge: "Semi-Finalist"
    },
    {
      title: "Winner - Cognition",
      description: "Department-Level Project Competition",
      date: "2025",
      icon: Trophy,
      image: null,
      category: "Award",
      badge: "Winner"
    },
  ];

  const publications = [
    {
      title: "Attention Enhanced Speaker representation with Contrastive Learning",
      venue: "ICCUBEA, IEEE",
      date: "2025",
    },
    {
      title: "Advanced Fake News Detection Using BERT and Dimension Capture",
      venue: "IEEE Conference",
      date: "2025",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl">
        {/* Achievements & Hackathons Section */}
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 md:mb-12 text-center md:text-left">
            Achievements & Hackathons
          </h2>
          <div className="grid gap-6 md:gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="bg-white overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-500 border border-gray-200 hover:border-gray-300 rounded-2xl group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute -inset-px bg-gradient-to-b from-white/50 to-transparent rounded-2xl pointer-events-none"></div>
                
                {/* Image - Flexible aspect ratio based on actual image */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden aspect-[4/3]">
                  {achievement.image ? (
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 md:gap-4 p-4 aspect-[4/3]">
                      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <achievement.icon className="w-10 h-10 md:w-12 md:h-12 text-[#1A1A1A] relative z-10" />
                      </div>
                      <p className="text-xs md:text-sm text-gray-400 font-medium">Image placeholder</p>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-7">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Enhanced Icon */}
                    <div className="relative flex-shrink-0 group/icon">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520] to-[#B8860B] rounded-xl blur-md opacity-20 group-hover/icon:opacity-40 transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-3 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Title with better typography */}
                    <h3 className="font-heading text-lg md:text-xl font-bold text-[#1A1A1A] leading-tight tracking-tight group-hover:text-[#DAA520] transition-colors duration-300 flex-1">
                      {achievement.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#4A4A4A] text-sm md:text-base mb-3 leading-relaxed font-medium">
                    {achievement.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    {achievement.date.split('&').map((year, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-full text-xs font-bold text-white shadow-md"
                      >
                        {year.trim()}
                      </span>
                    ))}
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

export default Achievements;
