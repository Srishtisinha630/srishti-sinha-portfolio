import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Github, Linkedin, Download, Send } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Srishti_Sinha_Resume.pdf';
    link.download = 'Srishti_Sinha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_8z3rn6u', // Service ID
        'template_4flcsrc', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '_5Dr-KxPU6mUm8OHZ' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you within 12 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, U.P., India",
      link: null
    },
    {
      icon: Mail,
      label: "Email",
      value: "srishtisinha630@gmail.com",
      link: "mailto:srishtisinha630@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8744085594",
      link: "tel:+918744085594"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Srishtisinha630",
      color: "hover:text-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/srishti-sinha-03aa3721b",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section className="section-container bg-hero-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card animate-scale-in">
              <h3 className="text-3xl font-bold mb-6 gradient-text-enhanced">Let's Connect</h3>
              <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                I'm always interested in hearing about new opportunities, 
                whether it's a full-time position, freelance project, or just 
                a chat about technology and development.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-6 hover-lift p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">{info.label}</div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="font-bold text-lg hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-bold text-lg">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-border/30">
                <div className="text-muted-foreground mb-6 font-medium">Follow me on</div>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-secondary/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:text-primary animate-scale-in"
                        style={{animationDelay: `${0.4 + index * 0.1}s`}}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
              
              {/* Resume Download */}
              <div className="mt-10 pt-8 border-t border-border/30">
                <Button
                  onClick={downloadResume}
                  className="w-full btn-hero text-lg py-4"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume (PDF)
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card animate-scale-in" style={{animationDelay: "0.2s"}}>
            <h3 className="text-3xl font-bold mb-8 gradient-text-enhanced">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="animate-slide-up" style={{animationDelay: "0.4s"}}>
                  <label htmlFor="name" className="block font-semibold mb-3 text-lg">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:scale-105 bg-secondary/20 backdrop-blur-sm border-border/30 rounded-xl h-14 text-lg"
                  />
                </div>
                
                <div className="animate-slide-up" style={{animationDelay: "0.6s"}}>
                  <label htmlFor="email" className="block font-semibold mb-3 text-lg">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:scale-105 bg-secondary/20 backdrop-blur-sm border-border/30 rounded-xl h-14 text-lg"
                  />
                </div>
                
                <div className="animate-slide-up" style={{animationDelay: "0.8s"}}>
                  <label htmlFor="message" className="block font-semibold mb-3 text-lg">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary focus:scale-105 resize-none bg-secondary/20 backdrop-blur-sm border-border/30 rounded-xl text-lg"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-hero text-lg py-6 animate-slide-up" 
                style={{animationDelay: "1s"}}
              >
                <Send className="w-5 h-5 mr-3" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            
            <div className="mt-8 text-center text-muted-foreground animate-fade-in" style={{animationDelay: "1.2s"}}>
              <div className="inline-flex items-center px-4 py-2 bg-secondary/30 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                I'll get back to you within 12 hours!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;