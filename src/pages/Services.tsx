import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Activity,
  User,
  Heart,
  Baby,
  HeartPulse
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ServicesProps {
  defaultTab?: string;
}

const Services = ({ defaultTab }: ServicesProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>(defaultTab || 'all');

  const services = [
    {
      id: "general-medicine",
      icon: Stethoscope,
      image: "/service-images/GENERAL MEDICINE.png",
      title: "General Medicine",
      description: "Comprehensive primary healthcare services including routine check-ups, preventive care, and treatment of common medical conditions. Our experienced physicians provide personalized care for patients of all ages.",
      features: ["Routine Health Check-ups", "Chronic Disease Management", "Preventive Care", "Emergency Consultations"]
    },
    {
      id: "cardiology",
      icon: Heart,
      image: "/service-images/CARDIOLOGY .png",
      title: "Cardiology",
      description: "Comprehensive heart care services including diagnosis, treatment, and management of cardiovascular diseases. Our cardiologists use advanced technology for accurate diagnosis and effective treatment.",
      features: ["Echocardiogram", "Stress Testing", "Angioplasty", "Pacemaker Implantation"]
    },
    {
      id: "orthopedics",
      icon: Activity,
      image: "/service-images/ORTHOPEDICS .png",
      title: "Orthopedics",
      description: "Specialized care for musculoskeletal conditions including bones, joints, ligaments, tendons, and muscles. Our orthopedic surgeons provide both surgical and non-surgical treatments.",
      features: ["Joint Replacement", "Arthroscopy", "Fracture Care", "Sports Medicine"]
    },
    {
      id: "neurology",
      icon: Activity,
      image: "/service-images/NEUROLOGY.png",
      title: "Neurology",
      description: "Expert care for disorders of the nervous system including the brain, spinal cord, and peripheral nerves. Our neurologists provide comprehensive diagnosis and treatment.",
      features: ["Stroke Care", "Epilepsy Treatment", "Headache Management", "Nerve Conduction Studies"]
    },
    {
      id: "dental",
      icon: User,
      image: "/service-images/DENTAL .png",
      title: "Dental Care",
      description: "Complete dental care services from routine cleanings to complex oral surgeries. Led by Dr. Gireesha Reddy and Dr. Srujan Kumar, our dental department offers state-of-the-art treatments with the latest technology.",
      features: ["Dental Implants", "Cosmetic Dentistry", "Periodontal Treatment", "Emergency Dental Care"]
    },
    {
      id: "gynecology",
      icon: Heart,
      image: "/service-images/GYNECOLOGY.png",
      title: "Gynecology",
      description: "Comprehensive women's health services including routine check-ups, prenatal care, and treatment of gynecological conditions. Led by Dr. Pavani, our gynecology department provides expert care for women of all ages.",
      features: ["Routine Check-ups", "Prenatal & Postnatal Care", "Family Planning", "Menopause Management"]
    },
    {
      id: "urology",
      icon: Activity,
      image: "/service-images/UROLOGY.png",
      title: "Urology",
      description: "Specialized treatment for urological conditions affecting the urinary tract and male reproductive system. Our urologists provide both medical and surgical treatments with minimal invasive techniques.",
      features: ["Kidney Stone Treatment", "Prostate Care", "Urinary Tract Infections", "Male Infertility"]
    },
    {
      id: "pulmonology",
      icon: Activity,
      image: "/service-images/PULMONOLGY.png",
      title: "Pulmonology",
      description: "Specialized care for respiratory disorders including asthma, COPD, and sleep apnea. Our pulmonologists provide comprehensive diagnosis and treatment for all lung-related conditions.",
      features: ["Asthma Management", "COPD Treatment", "Sleep Studies", "Lung Function Tests"]
    },
    {
      id: "pediatrics",
      icon: Baby,
      image: "/service-images/PEDIATRICS.png",
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents. Our pediatricians provide compassionate care in a child-friendly environment.",
      features: ["Well-baby Check-ups", "Vaccinations", "Childhood Illnesses", "Growth & Development Monitoring"]
    },
    {
      id: "infertility",
      icon: HeartPulse,
      image: "/service-images/INFERTILITY.png",
      title: "Infertility",
      description: "Comprehensive fertility evaluation and treatment options for couples facing conception challenges. Led by Dr. Pavani, our fertility specialists provide personalized care and advanced reproductive technologies.",
      features: ["Fertility Testing", "IUI/IVF", "Fertility Preservation", "PCOS Management"]
    },
    {
      id: "dermatology",
      icon: Activity,
      image: "/placeholder.svg",
      title: "Dermatology",
      description: "Comprehensive skin care services for medical, surgical, and cosmetic concerns. Our dermatologists provide expert care for all skin types and conditions.",
      features: ["Acne Treatment", "Skin Cancer Screening", "Cosmetic Procedures", "Hair & Nail Disorders"]
    },
    {
      id: "gastroenterology",
      icon: Activity,
      image: "/placeholder.svg",
      title: "Gastroenterology",
      description: "Specialized care for digestive system disorders including the esophagus, stomach, intestines, liver, and pancreas. Our gastroenterologists provide advanced diagnostic and therapeutic procedures.",
      features: ["Endoscopy", "Colonoscopy", "Liver Disease Management", "GERD Treatment"]
    }
  ];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setActiveTab(id);
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [location, defaultTab]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    navigate(`/services#${tabId}`, { replace: true });
  };

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-teal-100">Comprehensive healthcare services for you and your family</p>
        </div>
      </section>

      {/* Service Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={activeTab === 'all' ? 'default' : 'outline'}
            onClick={() => handleTabClick('all')}
            className="mb-2"
          >
            All Services
          </Button>
          {services.map((service) => (
            <Button
              key={service.id}
              variant={activeTab === service.id ? 'default' : 'outline'}
              onClick={() => handleTabClick(service.id)}
              className="mb-2"
            >
              {service.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card 
                key={service.id}
                id={service.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative pt-[60%] bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                      target.className = "absolute top-0 left-0 w-full h-full object-contain p-8 bg-gray-100";
                      
                      // Add service icon as overlay
                      const iconContainer = document.createElement('div');
                      iconContainer.className = "absolute inset-0 flex items-center justify-center";
                      const iconElement = document.createElement('div');
                      iconElement.className = "w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center";
                      iconElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-teal-600"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`;
                      iconContainer.appendChild(iconElement);
                      target.parentNode?.appendChild(iconContainer);
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Services:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Button 
                      className="w-full"
                      onClick={() => navigate(`/services/${service.id}`)}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
