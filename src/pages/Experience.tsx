import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-12 md:mb-16 text-center animate-fade-in-up">
          Where I've Worked
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {/* Experience 1 */}
            <div className="relative pl-6 md:pl-8 border-l-[3px] border-[#CD7F5E] animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="absolute w-3 h-3 bg-[#CD7F5E] rounded-full -left-[7px] top-0" />
              <Card className="p-6 md:p-8 bg-white hover:shadow-2xl transition-all duration-500 rounded-2xl border border-gray-100 group">
                <div className="mb-2 md:mb-3 text-xs md:text-sm text-[#CD7F5E] font-semibold">Jun 2025 - Aug 2025</div>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-[#1A1A1A] group-hover:text-[#CD7F5E] transition-colors duration-300">Pioneer Machines & Automation Pvt. Ltd</h3>
                <div className="text-base md:text-lg text-[#4A4A4A] mb-3 md:mb-4 font-semibold">AI Intern</div>
                <ul className="space-y-2 text-[#4A4A4A] text-sm md:text-base">
                  <li className="leading-relaxed flex items-start">
                    <span className="text-[#CD7F5E] mr-2">▸</span>
                    <span>Vertex AI + PubMed medical document analysis</span>
                  </li>
                  <li className="leading-relaxed flex items-start">
                    <span className="text-[#CD7F5E] mr-2">▸</span>
                    <span>Built retrieval workflows improving clinical data throughput</span>
                  </li>
                  <li className="leading-relaxed flex items-start">
                    <span className="text-[#CD7F5E] mr-2">▸</span>
                    <span>Data scraping, chunking, image matching, ML pipelines</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
