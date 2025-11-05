import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
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
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6 animate-fade-in-up">
            Let's Build Something Together
          </h1>
          <p className="text-base md:text-lg text-[#4A4A4A] max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            Open to collaborations, internships, and interesting AI projects. 
            Especially excited about healthcare tech and research opportunities.
          </p>
          
          {/* Contact Info Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#CD7F5E]" />
              <a href="mailto:gauravpatil2516@gmail.com" className="text-[#1A1A1A] hover:text-[#CD7F5E] transition-smooth font-medium">
                gauravpatil2516@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-[#CD7F5E]" />
              <a href="https://linkedin.com/in/gauravpatil2515" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#CD7F5E] transition-smooth font-medium">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 md:w-5 md:h-5 text-[#CD7F5E]" />
              <a href="https://github.com/GauravPatil2515" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#CD7F5E] transition-smooth font-medium">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#4A4A4A]">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#CD7F5E]" />
              <span className="font-medium">Thane, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Card className="p-6 md:p-10 bg-white rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2 text-center">
              Send Me a Message
            </h2>
            <p className="text-[#4A4A4A] text-center mb-8">
              Fill out the form and I'll get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#CD7F5E] focus:outline-none transition-colors duration-300 text-[#1A1A1A] bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#CD7F5E] focus:outline-none transition-colors duration-300 text-[#1A1A1A] bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#CD7F5E] focus:outline-none transition-colors duration-300 text-[#1A1A1A] bg-white"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#CD7F5E] focus:outline-none transition-colors duration-300 text-[#1A1A1A] resize-none bg-white"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-700 text-center font-semibold">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-center font-semibold">
                  ✗ Something went wrong. Please try again or email me directly.
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] hover:from-[#CD7F5E] hover:to-[#B86F4E] text-white py-6 rounded-xl font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 md:mt-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <p className="text-sm md:text-base text-[#4A4A4A] max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hi — 
            I'm always happy to connect! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
