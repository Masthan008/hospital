import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { Heart, Shield, Clock, Award, Phone } from "lucide-react";

const Home = () => {
  const features = [
    {
      id: "emergency-care",
      icon: Heart,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency services with expert medical professionals ready to assist you at any time.",
      iconColor: "text-red-500"
    },
    {
      id: "expert-doctors",
      icon: Shield,
      title: "Expert Doctors",
      description: "Our team of highly qualified and experienced doctors provide the best medical care possible.",
      iconColor: "text-blue-500"
    },
    {
      id: "modern-facility",
      icon: Clock,
      title: "Modern Facility",
      description: "State-of-the-art medical equipment and technology for accurate diagnosis and effective treatment.",
      iconColor: "text-green-500"
    },
    {
      id: "award-winning",
      icon: Award,
      title: "Award-Winning Facility",
      description: "Recognized for excellence in healthcare with multiple medical awards and certifications.",
      iconColor: "text-yellow-500"
    }
  ];

  const specialties = [
    { name: "General Medicine", id: "general-medicine" },
    { name: "Dental", id: "dental" },
    { name: "Gynecology", id: "gynecology" },
    { name: "Pediatrics", id: "pediatrics" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quality Healthcare for You and Your Family
              </h1>
              <p className="text-xl mb-8">
                Expert medical care in a comfortable and compassionate environment.
                Our team of specialists is here to provide the best treatment for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink 
                  to="/appointment" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-center"
                >
                  Book Appointment
                </NavLink>
                <a 
                  href="tel:+919966151626" 
                  className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-lg font-medium"
                >
                  <Phone className="h-5 w-5" />
                  Emergency: +91 9966151626
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md">
                <img 
                  src="/images/doctor-consultation.jpg" 
                  alt="Doctor consultation"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.id} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 ${feature.iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty) => (
              <NavLink 
                key={specialty.id}
                to={`/departments#${specialty.id}`}
                className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600">{specialty.name}</h3>
                <p className="text-gray-600 mt-2">Expert care for all your {specialty.name.toLowerCase()} needs</p>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need an Appointment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your visit with our specialists today and take the first step towards better health.
          </p>
          <NavLink 
            to="/appointment" 
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg"
          >
            Book Now
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
