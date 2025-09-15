import { Star, Quote } from "lucide-react";
const TestimonialsSection = () => {
  const testimonials = [{
    name: "Rahul Verma",
    role: "Senior Developer",
    company: "Tech Solutions",
    content: "Srishti has a sharp eye for detail and an excellent grasp of backend development. Her ability to structure APIs efficiently impressed me during our collaborative project.",
    rating: 5,
    avatar: "RV"
  }, {
    name: "Ananya Sharma",
    role: "Frontend Lead",
    company: "Digital Innovations",
    content: "Her frontend work in Angular stands out for being user-friendly and bug-free. She combines technical skills with creativity, making projects intuitive.",
    rating: 5,
    avatar: "AS"
  }, {
    name: "Vikram Patel",
    role: "Project Manager",
    company: "Agile Solutions",
    content: "Srishti is a dependable team player who ensures smooth delivery under Agile frameworks. Her problem-solving skills saved us multiple times during tight deadlines.",
    rating: 5,
    avatar: "VP"
  }, {
    name: "Neha Reddy",
    role: "QA Engineer",
    company: "Quality First",
    content: "Her unit testing and debugging skills reduced our bug count significantly. Srishti always ensures that quality is never compromised.",
    rating: 5,
    avatar: "NR"
  }];
  return <section className="section-container">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Testimonials from colleagues and collaborators who have worked with me
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="portfolio-card relative group animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              
              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  
                </div>
              </div>
            </div>)}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-primary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="mb-6 opacity-90">
            Let's collaborate on your next project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;