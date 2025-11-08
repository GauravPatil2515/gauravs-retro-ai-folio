import { Mail, Linkedin, Github, MapPin, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "65f38202-4b00-44b4-aec8-c4ad95b2722e",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="h-screen bg-background flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-3 md:mb-4">
            Get in Touch
          </h1>
          <p className="text-sm md:text-base text-[#4A4A4A] max-w-2xl mx-auto">
            Let's discuss your next project
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          {/* Left Column - Get In Touch */}
          <div className="space-y-4">
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold text-[#1A1A1A] mb-2">
                Get In Touch
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4 text-sm">
                I'm always excited to work on new challenges. Whether you have a specific project in mind or just want to explore possibilities, let's start the conversation.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-xl p-2.5 flex-shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-0.5 text-sm md:text-base">Email</h3>
                    <a href="mailto:gauravpatil2516@gmail.com" className="text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors text-xs md:text-sm">
                      gauravpatil2516@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-xl p-2.5 flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-0.5 text-sm md:text-base">Location</h3>
                    <p className="text-[#4A4A4A] text-xs md:text-sm">Thane, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-base md:text-lg font-bold text-[#1A1A1A] mb-2">Connect</h3>
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/GauravPatil2515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white p-2.5 rounded-xl transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gauravpatil2515/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-[#0077B5] text-[#1A1A1A] hover:text-white p-2.5 rounded-xl transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="mailto:gauravpatil2516@gmail.com"
                  className="bg-gray-100 hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white p-2.5 rounded-xl transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Contact */}
          <div>
            <div className="space-y-3">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4">
                Quick Contact
              </h2>

              <a
                href="mailto:gauravpatil2516@gmail.com"
                className="block w-full bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] hover:from-[#2A2A2A] hover:to-[#1A1A1A] text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl text-center text-sm md:text-base"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 inline-block mr-2 mb-1" />
                Send Email
              </a>

              <button className="w-full bg-white border-2 border-gray-200 hover:border-[#1A1A1A] text-[#1A1A1A] py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] text-center text-sm md:text-base">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 inline-block mr-2 mb-1" />
                Book a Call
              </button>

              <p className="text-xs md:text-sm text-[#6B7280] text-center pt-1">
                Book a 30-minute discovery call to discuss your project requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
