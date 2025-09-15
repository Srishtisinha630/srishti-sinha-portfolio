import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Github, Linkedin, Download, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would typically send to backend
    const mailtoLink = `mailto:srishtisinha630@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
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
            <div className="portfolio-card">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, 
                whether it's a full-time position, freelance project, or just 
                a chat about technology and development.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="font-semibold hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-semibold">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="text-sm text-muted-foreground mb-4">Follow me on</div>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
              
              {/* Resume Download */}
              <div className="mt-8 pt-8 border-t border-border">
                <Button className="w-full btn-hero">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="portfolio-card">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full btn-hero">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm text-muted-foreground">
              I'll get back to you within 24 hours!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;