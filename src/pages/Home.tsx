import { Card, CardContent } from "@/components/ui/card";
import hospitalHero from "@/assets/hospital-hero-v2.jpg";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Heart, Shield, Clock, Award, Phone } from "lucide-react";

const Home = () => {
  const features = [
    {
      name: "Anonymous",
      text: "Excellent care and professional staff. Dr. Gireesha Reddy provided outstanding dental treatment.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      text: "The hospital staff is very caring and the facilities are top-notch. Highly recommended!",
      rating: 5
    },
    {
      name: "Venkat Rao",
      text: "24/7 emergency service saved my life. Forever grateful to the entire team.",
      rating: 5
    },
    {
      name: "Anjali Mehta",
      text: "Professional and caring staff. Had a great experience during my treatment.",
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
      icon: Shield,
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
      image: "/images/awards-bg.png",
      iconColor: "text-white"
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



  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hospitalHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in leading-tight text-white">
            <div className="block">Caring for Health Caring for You</div>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-8 animate-slide-in-left text-white bg-red-600/90 inline-block px-6 py-2 rounded-full">
            <span className="flex items-center justify-center space-x-2 whitespace-nowrap">
              <Clock className="w-6 h-6" />
              <span>24/7 Emergency Services Everyday</span>
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
            <Button size="lg" asChild className="text-lg px-8 py-3">
              <NavLink to="/contact">Book Now</NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              <NavLink to="/services">View Specialties</NavLink>
            </Button>
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            About Sri Ananth Multi Specialty Hospital
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Why Choose Sri Ananth Hospital?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <NavLink 
                key={item.id}
                to={`/why-choose-us#${item.id}`}
                className="block h-full hover:no-underline"
              >
                <Card 
                  className="group text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden h-full flex flex-col bg-white hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  data-aos-duration="800"
                  data-aos-easing="ease-out-cubic"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="min-w-full min-h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to a solid color if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div 
                      className="flex justify-center -mt-12 mb-4 relative z-20"
                      data-aos="zoom-in"
                      data-aos-delay={`${index * 100 + 200}`}
                      data-aos-duration="600"
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <item.icon className={`w-8 h-8 ${item.iconColor || 'text-primary'} group-hover:text-white transition-colors duration-300`} />
                      </div>
                    </div>
                    <h3 
                      className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300"
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100 + 100}`}
                      data-aos-duration="600"
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="flex-1 text-gray-600"
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100 + 150}`}
                      data-aos-duration="600"
                    >
                      {item.description}
                    </p>
                    <div className="mt-4 text-sm text-primary font-medium group-hover:underline">
                      Learn more →
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
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



      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                </CardContent>
                <div className="p-6 bg-gray-100 border-t">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Insurance Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Health Insurance Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We accept all major health insurance providers for cashless treatment and easy claims.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { name: 'Apollo Munich', logo: '/insurance/apollo-munich.png' },
              { name: 'Star Health', logo: '/insurance/star-health.png' },
              { name: 'HDFC ERGO', logo: '/insurance/hdfc-ergo.png' },
              { name: 'ICICI Lombard', logo: '/insurance/icici-lombard.png' },
              { name: 'Bajaj Allianz', logo: '/insurance/bajaj-allianz.png' },
              { name: 'Max Bupa', logo: '/insurance/max-bupa.png' },
              { name: 'Reliance General', logo: '/insurance/reliance.png' },
              { name: 'New India Assurance', logo: '/insurance/new-india.png' },
              { name: 'Oriental Insurance', logo: '/insurance/oriental.png' },
              { name: 'United India', logo: '/insurance/united-india.png' },
            ].map((partner, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center h-28"
                data-aos="fade-up"
                data-aos-delay={50 * (index % 5)}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16 max-w-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.outerHTML = `<div class="text-center">
                      <div class="text-sm font-bold text-primary">${partner.name}</div>
                      <div class="text-xs text-gray-500">Insurance Partner</div>
                    </div>`;
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-hospital-green hover:bg-hospital-green/90">
              <NavLink to="/contact#insurance">
                Insurance Assistance
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;