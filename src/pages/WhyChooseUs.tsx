import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Award,
  Stethoscope,
  Users,
  Activity,
  HeartPulse,
  Phone,
  ChevronUp
} from "lucide-react";

const WhyChooseUs = () => {
  const location = useLocation();
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  // Feedback form state is kept for future implementation
  useState({
    name: '',
    email: '',
    rating: 0,
    comment: ''
  });

  // Handle smooth scrolling to sections when page loads with a hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Small delay to ensure the page has rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Check for hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Show/hide scroll to top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      id: "emergency-care",
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency care with rapid response teams and state-of-the-art facilities.",
      fullDescription: "We provide 24/7 emergency medical services with highly trained professionals and modern diagnostic tools, ensuring immediate treatment for all critical cases. Our emergency department is equipped to handle all types of medical emergencies with the highest standards of care."
    },
    {
      id: "expert-doctors",
      icon: Stethoscope,
      title: "Expert Medical Professionals",
      description: "Our team of highly qualified doctors and healthcare professionals are dedicated to providing the best medical care.",
      fullDescription: "Our doctors are top specialists in their fields with years of hands-on experience and training from reputed institutions. We carefully select our medical professionals based on their expertise, qualifications, and commitment to patient care."
    },
    {
      id: "comprehensive-care",
      icon: HeartPulse,
      title: "Comprehensive Care",
      description: "Complete healthcare solutions under one roof with state-of-the-art facilities.",
      fullDescription: "We offer multi-specialty care, seamless coordination between departments, and integrated services under one roof. Our comprehensive approach ensures that all your healthcare needs are met efficiently and effectively."
    },
    {
      id: "award-winning",
      icon: Award,
      title: "Award-Winning Facility",
      description: "Recognized for excellence in healthcare delivery and patient satisfaction.",
      fullDescription: "Sri Ananth Hospital has received several national awards for excellence in patient care and medical innovation. Our commitment to quality and patient satisfaction has been consistently recognized by healthcare authorities."
    },
    {
      id: "advanced-technology",
      icon: Activity,
      title: "Advanced Technology",
      description: "Equipped with the latest medical technology for accurate diagnosis and effective treatment.",
      fullDescription: "Our hospital is equipped with state-of-the-art medical technology and equipment to provide accurate diagnoses and effective treatments. We continuously invest in the latest medical advancements to ensure the best possible outcomes for our patients."
    },
    {
      id: "patient-centric",
      icon: Users,
      title: "Patient-Centric Approach",
      description: "Personalized treatment plans tailored to meet individual patient needs and preferences.",
      fullDescription: "We believe in treating the whole person, not just the illness. Our patient-centric approach focuses on personalized care plans, clear communication, and involving patients in their treatment decisions."
    }
  ];

  const stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "50+", label: "Expert Doctors" },
    { value: "1000+", label: "Happy Patients" },
    { value: "24/7", label: "Emergency Service" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Patient",
      content: "Excellent care and professional staff. Dr. Gireesha Reddy provided outstanding dental treatment.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Patient",
      content: "The hospital staff is very caring and the facilities are top-notch. Highly recommended!",
      rating: 5
    },
    {
      name: "Venkat Rao",
      role: "Patient",
      content: "24/7 emergency service saved my life. Forever grateful to the entire team.",
      rating: 5
    },
    {
      name: "Anjali Mehta",
      role: "Patient",
      content: "The cardiology department is exceptional. Dr. Sharma's expertise and care made all the difference in my recovery.",
      rating: 5
    },
    {
      name: "Suresh Patel",
      role: "Patient",
      content: "Clean facilities, minimal wait times, and compassionate care. The neurology team provided excellent treatment for my condition.",
      rating: 5
    },
    {
      name: "Srinivas V",
      role: "Patient",
      content: "This is a highly equipped hospital relative to this place (Vikarabad). We visited the gynecologist Dr. Pavani at this hospital. She is highly qualified and experienced. We are fully satisfied with her treatment. This hospital's gynecology dept has better facilities compared to many hospitals in Hyderabad. If you are looking for best treatment in decent cost, this is the best hospital.",
      rating: 5
    }
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-hospital-blue to-hospital-light-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose Sri Ananth Hospital?
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Experience healthcare that puts you first with our exceptional medical services and compassionate care.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Commitment to Excellence
            </h2>
            <div className="w-24 h-1 bg-hospital-blue mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <a 
                  key={feature.id}
                  href={`#${feature.id}`}
                  className="block hover:no-underline"
                >
                  <Card 
                    className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-md h-full hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                  >
                    <div className="w-16 h-16 rounded-full bg-hospital-light-blue/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-hospital-blue/30 transition-colors">
                      <Icon className="w-8 h-8 text-hospital-blue group-hover:text-hospital-blue-dark transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-hospital-blue transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </Card>
                </a>
              );
            })}
          </div>
          
          {/* Detailed Sections for Deep Linking */}
          <div className="mt-20 space-y-20">
            {features.map((feature) => (
              <section 
                key={feature.id} 
                id={feature.id}
                className="scroll-mt-20 pt-20 -mt-20"
              >
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/3 flex justify-center">
                      <div className="w-32 h-32 rounded-full bg-hospital-light-blue/20 flex items-center justify-center">
                        <feature.icon className="w-12 h-12 text-hospital-blue" />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-left">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">{feature.title}</h2>
                      <p className="text-gray-600 text-lg">{feature.fullDescription}</p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="text-4xl font-bold text-hospital-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Difference in Healthcare
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied patients who trust Sri Ananth Hospital for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-hospital-blue hover:bg-gray-100">
              <NavLink to="/contact">Book an Appointment</NavLink>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+919966151626" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Emergency: +91 9966151626
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-hospital-blue text-white flex items-center justify-center shadow-lg hover:bg-hospital-blue-dark transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default WhyChooseUs;
