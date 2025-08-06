import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import 'aos/dist/aos.css';
import { 
  Heart, 
  Clock, 
  Stethoscope,
  ShieldCheck,
  Activity,
  HeartPulse,
  Phone
} from "lucide-react";
import { useEffect } from "react";
// Hero image will use direct public path

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

  const features = [
    {
      id: "emergency-care",
      icon: Clock,
      image: "/images/gallery/EMEGENCY ROOM .png",
      title: "24/7 Emergency Care",
      description: "Round-the-clock medical emergency services with expert doctors and modern equipment.",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      id: "expert-doctors",
      icon: Stethoscope,
      image: "/images/gallery/MEDICAL TEAM .png",
      title: "Expert Doctors",
      description: "Highly qualified specialists with years of experience in their respective fields.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: "comprehensive-care",
      icon: HeartPulse,
      image: "/images/gallery/OPERATION THEATRE .png",
      title: "Comprehensive Care",
      description: "Complete healthcare solutions under one roof with state-of-the-art facilities.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      id: "quality-care",
      icon: ShieldCheck,
      image: "/images/gallery/LABORATORY .png",
      title: "Quality Certified",
      description: "Recognized for excellence in healthcare with multiple medical awards and certifications.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  const specialties = [
    { 
      id: "general-medicine",
      name: "General Medicine", 
      icon: Activity,
      image: "/service-images/GENERAL MEDICINE.png",
      description: "Comprehensive care for adults with a wide range of medical conditions.",
      path: "/services/general-medicine"
    },
    { 
      id: "cardiology",
      name: "Cardiology", 
      icon: Heart,
      image: "/service-images/CARDIOLOGY .png",
      description: "Expert care for heart conditions and cardiovascular health.",
      path: "/services/cardiology"
    },
    { 
      id: "pediatrics",
      name: "Pediatrics", 
      icon: Activity,
      image: "/service-images/PULMONOLGY.png",
      description: "Specialized healthcare for infants, children, and adolescents.",
      path: "/services/pediatrics"
    },
    { 
      id: "orthopedics",
      name: "Orthopedics", 
      icon: Activity,
      image: "/service-images/ORTHOPEDICS .png",
      description: "Treatment for musculoskeletal system including bones, joints, and muscles.",
      path: "/services/orthopedics"
    }
  ];

  const insurancePartners = [
    { id: 1, name: "Star Health", image: "/insurance images/STAR PERSONAL AND CARING  - SADH.png" },
    { id: 2, name: "HDFC ERGO", image: "/insurance images/HDFC ERGO - SADH (2).png" },
    { id: 3, name: "ICICI Lombard", image: "/insurance images/GPHL  - SADH.png" },
    { id: 4, name: "Bajaj Allianz", image: "/insurance images/BAJAJ HEALTH - SADH.png" },
    { id: 5, name: "Reliance General", image: "/insurance images/FURURE GENERAL  - SADH.png" },
    { id: 6, name: "United India", image: "/insurance images/CHOLA MS  - SADH.png" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/gallery/BUILDING .png" 
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
                <p className="text-gray-600 mb-4">Specialist in General Medicine & Emergency Care</p>
                <Button asChild className="w-full bg-hospital-green hover:bg-hospital-green/90">
                  <NavLink to="/book-appointment">Book Appointment</NavLink>
                </Button>
              </div>
            </div>

            {/* Dr. Srujan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in">
              <div className="h-80 w-full overflow-hidden bg-gray-50">
                <img 
                  src="/doctors/dr-srujan.jpg" 
                  alt="Dr. Srujan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Srujan</h3>
                <p className="text-lg text-hospital-blue font-semibold mb-4">
                  BDS, MDS (Dental Surgery)
                </p>
                <p className="text-gray-600 mb-1 font-medium">Sri Ananth Multispeciality Hospital</p>
                <p className="text-gray-600 mb-4">Consultant Dental Surgeon & Oral Health Specialist</p>
                <Button asChild className="w-full bg-hospital-green hover:bg-hospital-green/90">
                  <NavLink to="/book-appointment">Book Appointment</NavLink>
                </Button>
              </div>
            </div>

            {/* Dr. Anusha */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in">
              <div className="h-80 w-full overflow-hidden bg-gray-50">
                <img 
                  src="/doctors/dr-pavani.jpg" 
                  alt="Dr. Anusha" 
                  className="w-full h-full object-cover"
                />
                </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Anusha</h3>
                <p className="text-lg text-hospital-blue font-semibold mb-4">
                  MBBS, DGO (Obstetrics & Gynecology)
                </p>
                <p className="text-gray-600 mb-1 font-medium">Sri Ananth Multispeciality Hospital</p>
                <p className="text-gray-600 mb-4">Consultant Obstetrician & Gynecologist</p>
                <Button asChild className="w-full bg-hospital-green hover:bg-hospital-green/90">
                  <NavLink to="/book-appointment">Book Appointment</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Experience world-class healthcare with our comprehensive medical services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.id} className={`p-6 ${feature.bgColor} border-0`} data-aos="fade-up" data-aos-delay="200">
                <div className="relative mb-4">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className={`absolute top-2 right-2 w-8 h-8 ${feature.iconColor} rounded-full flex items-center justify-center`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Our Medical Specialties
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Comprehensive healthcare services across multiple specialties with expert doctors and modern facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty) => (
              <NavLink
                key={specialty.id}
                to={specialty.path}
                className="group block"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-hospital-green/10 to-hospital-blue/10 relative overflow-hidden">
                    <img 
                      src={specialty.image} 
                      alt={specialty.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement?.classList.remove('bg-gradient-to-br');
                        target.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                        const icon = document.createElement('div');
                        icon.innerHTML = `<${specialty.icon.name} class="w-16 h-16 text-hospital-green" />`;
                        target.parentElement?.appendChild(icon);
                      }}
                    />
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
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-3 border border-gray-200">
                  <img 
                    src={partner.image} 
                    alt={`${partner.name} logo`} 
                    className="h-12 w-12 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-xs font-bold text-gray-600">${partner.name.substring(0, 2)}</span>`;
                      }
                    }}
                  />
                </div>
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
