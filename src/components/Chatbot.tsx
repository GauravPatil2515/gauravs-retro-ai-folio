import { useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello, welcome to Gaurav's portfolio. What brings you here today? Are you exploring AI/ML solutions or web development services for your project?",
      isBot: true,
    },
  ]);

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message;
    // Add user message
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setMessage("");
    setIsLoading(true);

    try {
      // Call Groq API
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`, // Store your API key in .env file
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant", // Fast response model
          messages: [
            {
              role: "system",
              content: `You are a helpful AI assistant for Gaurav Patil's portfolio website. You have comprehensive knowledge about Gaurav's background, skills, and projects.

ABOUT GAURAV:
- Backend Developer & AI/ML Engineer
- B.E. AI/ML at SIES GST, CGPA 8.57
- Location: Thane, Maharashtra, India
- Email: gauravpatil2516@gmail.com
- Passionate about ethical, accessible healthcare AI solutions

EXPERIENCE:
1. AI Intern at Pioneer Machines & Automation Pvt. Ltd (Jun 2025 - Aug 2025)
   - Vertex AI + PubMed medical document analysis
   - Built retrieval workflows improving clinical data throughput
   - Data scraping, chunking, image matching, ML pipelines

2. Technical Head at IEEE SIES GST (2024 - Present)
   - Led AI/ML workshops at Technopedia 2024 for 50+ attendees
   - Delivered CNN workshop on Indian Sign Language recognition

3. ML & DS Coordinator at Google Developers Group (2024 - 2025)
   - Mentored 100+ students on model design, evaluation, and deployment

KEY PROJECTS:
1. Neuro-RAG (Production / Healthcare AI)
   - Mental health diagnostic system using RAG over ICD-10
   - Vectorized 14,000+ lines into 1,438 chunks with FAISS
   - Sub-30ms latency with clinical accuracy
   - Tech: Python, FAISS, Flask, LangChain

2. Retinal Vessel Segmentation (Computer Vision / Medical Imaging)
   - U-Net++ model achieving 83.7% Dice score on DRIVE dataset
   - Real-time inference dashboard under 1 second
   - Tech: PyTorch, U-Net++, FastAPI, OpenCV

3. DermAI (Deep Learning / Medical Diagnosis)
   - Vision Transformer hitting 99.1% accuracy (Cohen's Kappa 0.975)
   - Skin disease classification with Llama 3.3 for medical Q&A
   - Grad-CAM explainability
   - Tech: ViT, TensorFlow, Llama 3.3, Flask

ACHIEVEMENTS:
- SIH Internal Hackathon - Participant (2024 & 2025)
- Second Runner-Up - OxygenIgnite Hackathon, NIT Goa (2025)
- Runner-up - BNB Chain Bombay Hackathon (2025)
- Top 3 (Sustainability) - ByteCamp Hackathon (2025)
- Semi-finalist - Deep Blue Project Season 10, Mastek (2025)
- Winner - Cognition, Department-Level Project Competition (2025)

TECHNICAL SKILLS:
Programming: Python, C, SQL
ML/DL: PyTorch, TensorFlow, Scikit-learn, XGBoost, LangChain, Hugging Face, SHAP
Computer Vision & NLP: U-Net++, OpenCV, ViT, Detectron2, Grad-CAM, Mask R-CNN, SentenceTransformers
Backend & Deployment: Flask, FastAPI, Docker, Git, Streamlit, PostgreSQL, MongoDB, Redis

SERVICES OFFERED:
1. AI & Machine Learning Development
2. Backend Development with Python
3. Healthcare AI Solutions
4. Computer Vision Applications
5. NLP & RAG Systems

Answer questions professionally and concisely. Encourage users to contact Gaurav at gauravpatil2516@gmail.com for collaborations. If asked about availability, mention he's open to collaborations, internships, and interesting AI projects, especially in healthcare tech and research.`
            },
            ...messages.map(msg => ({
              role: msg.isBot ? "assistant" : "user",
              content: msg.text
            })),
            {
              role: "user",
              content: userMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from Groq");
      }

      const data = await response.json();
      const botResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't process that. Please try again or contact Gaurav directly at gauravpatil2516@gmail.com";

      setMessages((prev) => [
        ...prev,
        {
          text: botResponse,
          isBot: true,
        },
      ]);
    } catch (error) {
      console.error("Error calling Groq API:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm having trouble connecting right now. Please try again later or contact Gaurav directly at gauravpatil2516@gmail.com",
          isBot: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-110 z-50 flex items-center justify-center group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform duration-300" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-[90vw] max-w-md h-[500px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] z-50 flex flex-col overflow-hidden border-2 border-gray-100 transition-all duration-700 ease-out animate-in slide-in-from-bottom-12 slide-in-from-right-12 fade-in zoom-in-95">
          {/* Chat Header */}
          <div className="bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white p-4 md:p-5 flex items-center justify-between rounded-t-3xl">
            <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-700" style={{ animationDelay: '200ms' }}>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold">Chat</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out hover:rotate-90"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] p-3 md:p-4 rounded-2xl ${
                    msg.isBot
                      ? "bg-white text-[#4A4A4A] border border-gray-200"
                      : "bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white"
                  } text-sm md:text-base leading-relaxed shadow-sm`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-3xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSendMessage()}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-full border-2 border-gray-200 focus:border-[#1A1A1A] outline-none text-sm md:text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !message.trim()}
                className="w-12 h-12 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
