import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import 'aos/dist/aos.css';
import { 
  Heart, 
  Clock, 
  Users, 
  Award,
  Phone
} from "lucide-react";
import { useEffect } from "react";
import hospitalHero from "@/assets/hospital-hero-v2.jpg";

const Home = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 800,
          once: true,
          easing: 'ease-in-out',
          mirror: false
        });
      });
    }
  }, []);

  const testimonials = [
    {
      name: "Suresh Patel",
      text: "Clean facilities, minimal wait times, and compassionate care. The neurology team provided excellent treatment for my condition.",
      rating: 5
    },
    {
      name: "Srinivas V",
      text: "This is a highly equipped hospital relative to this place (Vikarabad). We visited the gynecologist Dr. Pavani at this hospital. She is highly qualified and experienced. We are fully satisfied with her treatment. This hospital's gynecology dept has better facilities compared to many hospitals in Hyderabad. If you are looking for best treatment in decent cost, this is the best hospital.",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      id: "emergency-care",
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "Round-the-clock medical emergency services with expert doctors and modern equipment.",
      image: "/feature-images/EMERGENCY CARE .png"
    },
    {
      id: "expert-doctors",
      icon: Users,
      title: "Expert Medical Professionals",
      description: "Highly qualified specialists with years of experience in their respective fields.",
      image: "/feature-images/EXEPERINECED DOCTORS .png"
    },
    {
      id: "comprehensive-care",
      icon: Heart,
      title: "Comprehensive Care",
      description: "Complete healthcare solutions under one roof with state-of-the-art facilities.",
      image: "/feature-images/COMPEHENSIVE CARE .png"
    },
    {
      id: "award-winning",
      icon: Award,
      title: "Award-Winning Facility",
      description: "Recognized for excellence in healthcare with multiple medical awards and certifications.",
      image: "/feature-images/awards-bg.png"
    }
  ];



  const specialties = [
    { name: "General Medicine", image: "/service-images/GENERAL MEDICINE.png", id: "general-medicine" },
    { name: "Dental", image: "/service-images/DENTAL .png", id: "dental" },
    { name: "Urology", image: "/service-images/UROLOGY.png", id: "urology" },
    { name: "Cardiology", image: "/service-images/CARDIOLOGY .png", id: "cardiology" },
    { name: "Orthopedics", image: "/service-images/ORTHOPEDICS .png", id: "orthopedics" },
    { name: "Audiology", image: "/service-images/AUDIOLOGY .png", id: "audiology" },
    { name: "General Surgery", image: "/service-images/GENERAL SURGERY .png", id: "general-surgery" },
    { name: "Gynecology", image: "/service-images/GYNECOLOGY.png", id: "gynecology" },
    { name: "Pulmonology", image: "/service-images/PULMONOLGY.png", id: "pulmonology" },
    { name: "Pediatrics", image: "/service-images/PEDIATRICS.png", id: "pediatrics" },
    { name: "Critical Care", image: "/service-images/CRITICAL CARE.png", id: "critical-care" },
    { name: "Infertility", image: "/service-images/INFERTILITY.png", id: "infertility" },
    { name: "Maxillofacial", image: "/service-images/MAXILLOFACIAL.png", id: "maxillofacial" }
  ];
  
  const insurancePartners = [
    {
      name: 'Aditya Birla Health',
      image: '/insurance images/ADITYA BIRLA HEALTH - SADH.png'
    },
    {
      name: 'Star Health',
      image: '/insurance images/STAR PERSONAL AND CARING  - SADH.png'
    },
    {
      name: 'HDFC ERGO',
      image: '/insurance images/HDFC ERGO - SADH (2).png'
    },
    {
      name: 'Cigna TTK',
      image: '/insurance images/CIGNA TTK  - SADH.png'
    },
    {
      name: 'Bajaj Health',
      image: '/insurance images/BAJAJ HEALTH - SADH.png'
    },
    {
      name: 'Future General',
      image: '/insurance images/FURURE GENERAL  - SADH.png'
    },
    {
      name: 'GPHL',
      image: '/insurance images/GPHL  - SADH.png'
    },
    {
      name: 'Chola MS',
      image: '/insurance images/CHOLA MS  - SADH.png'
    }
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={hospitalHero} 
            alt="Sri Ananth Hospital" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6" data-aos="fade-up">
              Your Health is Our Priority
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8" data-aos="fade-up" data-aos-delay="100">
              Providing compassionate and comprehensive healthcare services with state-of-the-art facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="200">
              <Button asChild className="bg-white text-hospital-green hover:bg-gray-100 px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                <NavLink to="/appointment">Book Appointment</NavLink>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                <a href="tel:+919966151626" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> 
                  <span>Emergency: 99661 51626</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
        </div>
      </section>

      {/* Doctors Profile Section */}
      <section className="py-16 bg-hospital-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Meet Our Expert Doctors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dr. Gireesha Reddy */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in">
              <div className="h-80 w-full overflow-hidden bg-gray-50">
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img 
                    src="/doctors/dr-gireesha.jpg" 
                    alt="Dr. Gireesha Reddy" 
                    className="h-full w-full object-cover"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Gireesha Reddy</h3>
                <p className="text-lg text-hospital-blue font-semibold mb-4">
                  BDS, MDS [MBBS]
                </p>
                <p className="text-gray-600 mb-1 font-medium">Sri Ananth Multispeciality Hospital</p>
                <p className="text-gray-500 text-sm mb-4">Managing Director</p>
                <div className="flex items-center space-x-4">
                  <Button asChild className="flex-1">
                    <a href="tel:+919966151626" className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dr. Pavani */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="h-80 w-full overflow-hidden bg-gray-50">
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img 
                    src="/doctors/dr-pavani.jpg" 
                    alt="Dr. Pavani" 
                    className="h-full w-full object-cover"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Pavani</h3>
                <p className="text-lg text-hospital-blue font-semibold mb-4">
                  MBBS, DGO, DNB<br />
                  DRM (Germany)<br />
                  Diploma in Reproductive Medicine
                </p>
                <p className="text-gray-600 mb-1 font-medium">Gynecologist and Infertility Specialist</p>
                <div className="flex items-center space-x-4 mt-4">
                  <Button asChild className="flex-1">
                    <a href="tel:+919966151626" className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dr. Srujan Kumar */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="h-80 w-full overflow-hidden bg-gray-50">
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img 
                    src="/doctors/dr-srujan.jpg" 
                    alt="DR P SRUJAN KUMAR" 
                    className="h-full w-full object-cover"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. P Srujan Kumar</h3>
                <p className="text-lg text-hospital-blue font-semibold mb-4">
                  BDS MDS<br />
                  PERIODONTIST AND IMPLANTOLOGIST
                </p>
                <div className="flex items-center space-x-4">
                  <Button asChild className="flex-1">
                    <a href="tel:+919966151626" className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Sri Ananth Multi Specialty Hospital</h2>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 animate-slide-in-left">
            Located in Vikarabad, Telangana, Sri Ananth Multi Specialty Hospital is committed to 
            providing comprehensive healthcare services with a patient-first approach. Our state-of-the-art 
            facility combines modern medical technology with compassionate care.
          </p>
          <Button asChild size="lg" className="animate-scale-in">
            <NavLink to="/about">Learn More About Us</NavLink>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Sri Ananth Hospital?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-hospital-green mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={item.id}
                className="p-5 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300 h-full flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-hospital-green/10 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-hospital-green" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
                  />
                  <div className="hidden icon-fallback absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-hospital-blue">
                      <item.icon className="w-8 h-8" />
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{item.description}</p>
                  <div className="mt-auto">
                    <NavLink 
                      to={`/why-choose-us#${item.id}`} 
                      className="text-hospital-blue hover:underline font-medium inline-flex items-center"
                    >
                      Learn more <span className="ml-1">→</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in">
            Our Specialties
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <NavLink 
                key={index} 
                to={`/services#${specialty.id}`}
                className="group block text-center animate-scale-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md h-full flex flex-col">
                  <div className="relative pt-[100%] overflow-hidden">
                    <div className="absolute inset-0">
                      <img 
                        src={specialty.image} 
                        alt={specialty.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to a solid color if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.style.background = '#f3f4f6';
                            parent.classList.add('flex', 'items-center', 'justify-center');
                          }
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold p-4 text-center text-gray-800 group-hover:text-hospital-green transition-colors duration-300 bg-white border-t border-gray-100">
                    {specialty.name}
                  </h3>
                </Card>
              </NavLink>
            ))}
          </div>
        </div>
      </section>



      {/* Health Insurance Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Our Health Insurance Partners
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              We are empaneled with all major health insurance providers for cashless treatment and hassle-free claims.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
            {insurancePartners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 h-32 flex flex-col items-center justify-center"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={50 * (index % 4) + 100}
              >
                <img 
                  src={partner.image} 
                  alt={`${partner.name} logo`} 
                  className="h-16 object-contain mb-3"
                />
                <div className="text-center">
                  <div className="text-sm font-medium text-primary">{partner.name}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-duration="800">
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We accept all major health insurance providers. Check your eligibility and coverage details.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-hospital-green hover:bg-hospital-green/90 transition-all duration-300 transform hover:scale-105"
              >
                <NavLink to="/insurance" className="text-white">
                  View Insurance Details
                </NavLink>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
              >
                <a href="tel:+919000000000" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call for Assistance
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
