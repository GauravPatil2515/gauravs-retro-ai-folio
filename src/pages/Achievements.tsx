import { Card } from "@/components/ui/card";
import { Trophy, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Second Runner-Up - OxygenIgnite Hackathon",
      description: "NIT Goa (Stellar India)",
      date: "2024",
      icon: Trophy,
      image: null
    },
    {
      title: "Winner - Cognition",
      description: "Department-Level Project Competition",
      date: "2024",
      icon: Trophy,
      image: null
    },
    {
      title: "Runner-up - BNB Chain Bombay Hackathon",
      description: "Blockchain hackathon competition",
      date: "2024",
      icon: Award,
      image: null
    },
    {
      title: "Top 3 (Sustainability) - ByteCamp Hackathon",
      description: "Sustainability-focused hackathon",
      date: "2024",
      icon: Trophy,
      image: null
    },
    {
      title: "Semi-finalist - Deep Blue Project Season 10",
      description: "Mastek's flagship project competition",
      date: "2024",
      icon: Award,
      image: null
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
        <div className="animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 md:mb-12 text-center md:text-left">
            Achievements & Hackathons
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 rounded-2xl group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-[4/3] flex items-center justify-center overflow-hidden">
                  {achievement.image ? (
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 md:gap-4 p-4">
                      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="w-10 h-10 md:w-12 md:h-12 text-[#1A1A1A]" />
                      </div>
                      <p className="text-xs md:text-sm text-gray-400 font-medium">Image placeholder</p>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-2 md:p-2.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h3 className="font-heading text-base md:text-lg font-bold text-[#1A1A1A] leading-tight">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-[#4A4A4A] text-xs md:text-sm mb-2 md:mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  <p className="text-[#6B7280] text-xs md:text-sm font-medium">
                    {achievement.date}
                  </p>
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
