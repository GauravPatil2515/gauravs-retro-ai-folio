import { useState, useRef, useEffect } from "react";
import { MessageCircle, ChevronDown, Send, Loader2, Mail, Briefcase, Code, FileText, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  text: string;
  isBot: boolean;
  actions?: ActionButton[];
}

interface ActionButton {
  label: string;
  icon: React.ReactNode;
  action: () => void;
  variant?: 'primary' | 'secondary';
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm Gaurav's AI assistant. I can help you explore his projects, skills, and experience. What would you like to know?",
      isBot: true,
      actions: [
        {
          label: "View Projects",
          icon: <Briefcase className="w-4 h-4" />,
          action: () => navigate("/experience"),
          variant: 'primary'
        },
        {
          label: "Contact Gaurav",
          icon: <Mail className="w-4 h-4" />,
          action: () => window.location.href = "mailto:gauravpatil2516@gmail.com",
          variant: 'secondary'
        }
      ]
    },
  ]);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle Esc key to close chat
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);

  // Clear chat history
  const clearChat = () => {
    setMessages([{
      text: "Hi! I'm Gaurav's AI assistant. I can help you explore his projects, skills, and experience. What would you like to know?",
      isBot: true,
      actions: [
        {
          label: "View Projects",
          icon: <Briefcase className="w-4 h-4" />,
          action: () => navigate("/experience"),
          variant: 'primary'
        },
        {
          label: "Contact Gaurav",
          icon: <Mail className="w-4 h-4" />,
          action: () => window.location.href = "mailto:gauravpatil2516@gmail.com",
          variant: 'secondary'
        }
      ]
    }]);
  };

  // Generate follow-up questions based on conversation
  const getSuggestedQuestions = (userMsg: string, botResponse: string): string[] => {
    const msg = (userMsg + ' ' + botResponse).toLowerCase();
    
    if (msg.match(/\b(project|neuro-rag|dermai|retinal)\b/)) {
      return [
        "What technologies did you use?",
        "Tell me about other projects",
        "How can I see the code?"
      ];
    }
    
    if (msg.match(/\b(skill|technology|tech stack)\b/)) {
      return [
        "What's your strongest skill?",
        "Do you know cloud platforms?",
        "Tell me about your experience"
      ];
    }
    
    if (msg.match(/\b(achievement|hackathon|award)\b/)) {
      return [
        "What was your biggest win?",
        "Tell me about your projects",
        "Are you available for hire?"
      ];
    }
    
    if (msg.match(/\b(service|offer|help)\b/)) {
      return [
        "What's your pricing?",
        "Can you build AI solutions?",
        "How do I contact you?"
      ];
    }
    
    return [
      "Tell me about your background",
      "What are your recent projects?",
      "How can we collaborate?"
    ];
  };

  // Clean markdown formatting and format text properly
  const cleanText = (text: string): string => {
    return text
      .replace(/\*\*/g, '') // Remove bold
      .replace(/\*/g, '')   // Remove italic
      .replace(/#{1,6}\s/g, '') // Remove headers
      .replace(/`/g, '')    // Remove code blocks
      .replace(/\n{3,}/g, '\n\n') // Normalize multiple line breaks
      .trim();
  };

  // Format text into paragraphs for better readability
  const formatText = (text: string): JSX.Element => {
    const paragraphs = text.split('\n\n').filter(p => p.trim());
    
    return (
      <>
        {paragraphs.map((para, idx) => {
          // Check if it's a list item
          const lines = para.split('\n').filter(l => l.trim());
          
          if (lines.length > 1 && lines.every(l => l.match(/^[\-•]/) || l.match(/^\d+\./))) {
            // It's a list
            return (
              <ul key={idx} className="space-y-1 ml-4 list-disc">
                {lines.map((line, i) => (
                  <li key={i} className="text-sm md:text-base">
                    {line.replace(/^[\-•]\s*/, '').replace(/^\d+\.\s*/, '')}
                  </li>
                ))}
              </ul>
            );
          } else {
            // It's a paragraph
            return (
              <p key={idx} className="mb-2 last:mb-0">
                {para}
              </p>
            );
          }
        })}
      </>
    );
  };

  // Detect intent and generate action buttons
  const detectIntent = (userMsg: string, botResponse: string): ActionButton[] => {
    const msg = (userMsg + ' ' + botResponse).toLowerCase();
    const actions: ActionButton[] = [];

    // Priority 1: Contact/Hire (highest priority)
    const hasContactIntent = msg.match(/\b(contact|hire|email|collaborate|reach|get in touch|availability|available|work with|talk to)\b/);
    
    // Priority 2: About/Background
    const hasAboutIntent = msg.match(/\b(about|who|background|education|story|journey|tell me)\b/);
    
    // Priority 3: Projects/Experience
    const hasProjectIntent = msg.match(/\b(project|work|portfolio|built|created|neuro-rag|dermai|retinal|github|experience)\b/);
    
    // Priority 4: Achievements
    const hasAchievementIntent = msg.match(/\b(achievement|award|hackathon|win|won|competition|recognition)\b/);
    
    // Priority 5: Services
    const hasServiceIntent = msg.match(/\b(service|offer|do|help|build|develop|capabilities|expertise|provide)\b/);
    
    // Priority 6: Skills
    const hasSkillIntent = msg.match(/\b(skill|technology|tech stack|language|framework|tool|know)\b/);

    // Generate buttons based on priority
    if (hasContactIntent) {
      actions.push({
        label: "Email Me",
        icon: <Mail className="w-4 h-4" />,
        action: () => window.location.href = "mailto:gauravpatil2516@gmail.com",
        variant: 'primary'
      });
      actions.push({
        label: "Contact Page",
        icon: <ExternalLink className="w-4 h-4" />,
        action: () => {
          navigate("/contact");
          setIsOpen(false);
        },
        variant: 'secondary'
      });
    } else if (hasAboutIntent) {
      actions.push({
        label: "About Me",
        icon: <ExternalLink className="w-4 h-4" />,
        action: () => {
          navigate("/about");
          setIsOpen(false);
        },
        variant: 'primary'
      });
    } else if (hasProjectIntent) {
      actions.push({
        label: "View Projects",
        icon: <Code className="w-4 h-4" />,
        action: () => {
          navigate("/experience");
          setIsOpen(false);
        },
        variant: 'primary'
      });
    } else if (hasAchievementIntent) {
      actions.push({
        label: "See Achievements",
        icon: <ExternalLink className="w-4 h-4" />,
        action: () => {
          navigate("/achievements");
          setIsOpen(false);
        },
        variant: 'primary'
      });
    } else if (hasServiceIntent) {
      actions.push({
        label: "My Services",
        icon: <Briefcase className="w-4 h-4" />,
        action: () => {
          navigate("/services");
          setIsOpen(false);
        },
        variant: 'primary'
      });
    }

    // Always offer resume download if mentioned
    if (msg.match(/\b(resume|cv|download)\b/) && actions.length < 2) {
      actions.push({
        label: "Download Resume",
        icon: <FileText className="w-4 h-4" />,
        action: () => window.open('/resume/Gaurav_Patil_Resume.pdf', '_blank'),
        variant: 'secondary'
      });
    }

    // If no specific intent, offer home page
    if (actions.length === 0) {
      actions.push({
        label: "Explore Portfolio",
        icon: <ExternalLink className="w-4 h-4" />,
        action: () => {
          navigate("/");
          setIsOpen(false);
        },
        variant: 'primary'
      });
    }

    return actions.slice(0, 2); // Limit to 2 buttons
  };

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message;
    // Add user message
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setMessage("");
    setIsLoading(true);
    setIsTyping(true);

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

IMPORTANT FORMATTING RULES:
- Answer in clear, well-structured paragraphs
- DO NOT use markdown symbols
- Separate different ideas with double line breaks
- Keep responses concise (2-4 short paragraphs max)
- Use simple language, avoid technical jargon unless asked
- When listing items, use simple numbered format on separate lines
- For technical details, provide specific metrics and technologies

RESPONSE STYLE:
- Be friendly, professional, and conversational
- Give detailed, informative answers with specific examples
- Mention technologies, metrics, and achievements when relevant
- Encourage users to explore relevant sections (projects, services, achievements, about)
- Mention email for collaborations: gauravpatil2516@gmail.com
- If asked about availability: open to collaborations, internships, AI projects (especially healthcare)
- Keep answers focused and to the point`
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
      let botResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't process that. Please try again or contact Gaurav directly at gauravpatil2516@gmail.com";
      
      // Clean the response
      botResponse = cleanText(botResponse);
      
      // Detect intent and generate action buttons
      const actions = detectIntent(userMessage, botResponse);
      
      // Generate suggested questions
      const suggestedQuestions = getSuggestedQuestions(userMessage, botResponse);

      setIsTyping(false);
      
      // Simulate typing delay for better UX
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: botResponse,
            isBot: true,
            actions: actions.length > 0 ? actions : undefined,
          },
        ]);
        
        // Add suggested questions as a separate message after a short delay
        if (suggestedQuestions.length > 0) {
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                text: "You might also want to ask:",
                isBot: true,
                actions: suggestedQuestions.slice(0, 2).map(q => ({
                  label: q,
                  icon: <></>,
                  action: async () => {
                    // Set the message and trigger send
                    const questionToSend = q;
                    setMessages((prevMsgs) => [...prevMsgs, { text: questionToSend, isBot: false }]);
                    setIsLoading(true);
                    setIsTyping(true);
                    
                    try {
                      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
                        },
                        body: JSON.stringify({
                          model: "llama-3.1-8b-instant",
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

IMPORTANT FORMATTING RULES:
- Answer in clear, well-structured paragraphs
- DO NOT use markdown symbols
- Separate different ideas with double line breaks
- Keep responses concise (2-4 short paragraphs max)
- Use simple language, avoid technical jargon unless asked
- When listing items, use simple numbered format on separate lines
- For technical details, provide specific metrics and technologies

RESPONSE STYLE:
- Be friendly, professional, and conversational
- Give detailed, informative answers with specific examples
- Mention technologies, metrics, and achievements when relevant
- Encourage users to explore relevant sections (projects, services, achievements, about)
- Mention email for collaborations: gauravpatil2516@gmail.com
- If asked about availability: open to collaborations, internships, AI projects (especially healthcare)
- Keep answers focused and to the point`
                            },
                            ...messages.filter(m => !m.text.includes("You might also want to ask")).map(msg => ({
                              role: msg.isBot ? "assistant" : "user",
                              content: msg.text
                            })),
                            {
                              role: "user",
                              content: questionToSend
                            }
                          ],
                          temperature: 0.7,
                          max_tokens: 500,
                        }),
                      });

                      if (!response.ok) throw new Error("Failed to get response from Groq");

                      const data = await response.json();
                      let botResp = data.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";
                      botResp = cleanText(botResp);
                      const newActions = detectIntent(questionToSend, botResp);

                      setIsTyping(false);
                      setTimeout(() => {
                        setMessages((prevMsgs) => [
                          ...prevMsgs,
                          {
                            text: botResp,
                            isBot: true,
                            actions: newActions.length > 0 ? newActions : undefined,
                          },
                        ]);
                      }, 300);
                    } catch (error) {
                      console.error("Error:", error);
                      setIsTyping(false);
                    } finally {
                      setIsLoading(false);
                    }
                  },
                  variant: 'secondary' as const
                }))
              },
            ]);
          }, 500);
        }
      }, 300);
    } catch (error) {
      console.error("Error calling Groq API:", error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm having trouble connecting right now. Please try again later or contact Gaurav directly at gauravpatil2516@gmail.com",
          isBot: true,
          actions: [
            {
              label: "Email Gaurav",
              icon: <Mail className="w-4 h-4" />,
              action: () => window.location.href = "mailto:gauravpatil2516@gmail.com",
              variant: 'primary'
            }
          ]
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickReplies = [
    "Tell me about yourself",
    "What projects have you built?",
    "What services do you offer?",
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] hover:from-[#CD7F5E] hover:via-[#B86F4E] hover:to-[#CD7F5E] text-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_50px_rgba(205,127,94,0.4)] transition-all duration-500 hover:scale-110 z-50 flex items-center justify-center group animate-in fade-in zoom-in-95 duration-700"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform duration-300" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-0 right-0 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 w-full h-[calc(100vh-60px)] md:w-[90vw] md:max-w-md md:h-[500px] bg-white md:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] z-50 flex flex-col overflow-hidden border-t-2 md:border-2 border-gray-100 md:rounded-t-3xl rounded-t-2xl"
          style={{
            animation: 'slideInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white p-3 md:p-4 flex items-center justify-between rounded-t-3xl shadow-lg">
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center ring-2 ring-white/30 transition-all duration-300 hover:scale-110 group"
                aria-label="Close chat"
              >
                <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-y-0.5 transition-transform duration-300" />
              </button>
              <div>
                <h3 className="font-heading text-base md:text-lg font-bold text-white">Chat with AI</h3>
              </div>
            </div>
            
            {/* Clear Chat Button */}
            {messages.length > 1 && (
              <button
                onClick={clearChat}
                className="px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105 text-white/90 hover:text-white"
                aria-label="Clear chat"
              >
                Clear
              </button>
            )}
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isBot ? "justify-start" : "justify-end"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div className="flex flex-col max-w-[85%] gap-2">
                  <div
                    className={`p-3 md:p-4 rounded-2xl ${
                      msg.isBot
                        ? "bg-white text-[#2A2A2A] border border-gray-200 rounded-tl-sm"
                        : "bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white rounded-tr-sm"
                    } text-sm md:text-base leading-relaxed shadow-sm`}
                  >
                    {msg.isBot ? formatText(msg.text) : msg.text}
                  </div>
                  
                  {/* Action Buttons */}
                  {msg.isBot && msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {msg.actions.map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          onClick={action.action}
                          className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm ${
                            action.variant === 'primary'
                              ? 'bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] text-white hover:shadow-md'
                              : 'bg-white text-[#2A2A2A] border border-gray-300 hover:border-[#1A1A1A]'
                          }`}
                        >
                          {action.icon}
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-white text-[#2A2A2A] border border-gray-200 rounded-2xl rounded-tl-sm p-3 md:p-4 shadow-sm max-w-[85%]">
                  {/* Loading Skeleton */}
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded-full animate-pulse w-32"></div>
                    <div className="h-3 bg-gray-200 rounded-full animate-pulse w-24"></div>
                    <div className="h-3 bg-gray-200 rounded-full animate-pulse w-28"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-3 md:p-4 border-t border-gray-200 bg-white rounded-b-2xl md:rounded-b-3xl">
            {/* Quick Replies */}
            {messages.length === 1 && !isLoading && (
              <div className="mb-2 md:mb-3 flex flex-wrap gap-1.5 md:gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setMessage(reply);
                      setTimeout(() => handleSendMessage(), 100);
                    }}
                    className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm bg-gray-100 hover:bg-gray-200 text-[#2A2A2A] rounded-full transition-all duration-300 hover:scale-105 border border-gray-300"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
            
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSendMessage()}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-full border-2 border-gray-200 focus:border-[#1A1A1A] outline-none text-sm md:text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 focus:bg-white"
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
