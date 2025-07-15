import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  Carrot, 
  ShieldCheck,
  Brain,
  ShieldOff,
  Baby,
  UserCog,
  AlertTriangle
} from "lucide-react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HealthTips = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const tips = [
    {
      id: 1,
      icon: Heart,
      title: "Daily Health Tips",
      description: "Stay hydrated, sleep well, and walk 30 minutes a day. Small changes make a big impact!"
    },
    {
      id: 2,
      icon: Shield,
      title: "Preventive Care",
      description: "Get regular check-ups, vaccinations, and screenings for a healthy future."
    },
    {
      id: 3,
      icon: Carrot,
      title: "Nutrition",
      description: "Eat fresh fruits, green vegetables, and limit processed foods to maintain immunity."
    },
    {
      id: 4,
      icon: Baby,
      title: "Child Care",
      description: "Ensure proper nutrition, vaccinations, and regular check-ups for children's health."
    },
    {
      id: 5,
      icon: UserCog,
      title: "Senior Care",
      description: "Specialized care and regular health monitoring for our elderly patients."
    },
    {
      id: 6,
      icon: AlertTriangle,
      title: "Health Alerts",
      description: "Stay updated with important health alerts and seasonal disease prevention tips."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Tips & Resources</h1>
          <p className="text-xl text-teal-100">Your guide to better living from Sri Ananth Hospital</p>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip) => (
              <div 
                key={tip.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={tip.id * 100}
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <tip.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthTips;
