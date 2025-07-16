import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Calendar, Phone } from "lucide-react";
import { doctors } from "@/pages/doctors/doctorData";

// Define the service data type
type Service = {
  slug: string;
  name: string;
  description: string;
  features: string[];
  procedures: string[];
  image: string;
};

// Mock service data - in a real app, this would come from an API
const services: Service[] = [
  {
    slug: "dental",
    name: "Dental Care",
    description: "Comprehensive dental care for the whole family, from routine check-ups to advanced cosmetic and restorative procedures.",
    features: [
      "Painless dental treatments",
      "Advanced digital imaging",
      "Same-day emergency care",
      "Child-friendly environment"
    ],
    procedures: [
      "Teeth Whitening",
      "Dental Implants",
      "Root Canal Treatment",
      "Braces & Aligners",
      "Dental Crowns & Bridges"
    ],
    image: "/services/dental.jpg"
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    description: "Comprehensive heart care with advanced diagnostic and treatment options for all cardiac conditions.",
    features: [
      "24/7 Cardiac Emergency Care",
      "Non-invasive Cardiology",
      "Interventional Procedures",
      "Preventive Cardiology"
    ],
    procedures: [
      "Angioplasty",
      "Pacemaker Implantation",
      "Echocardiography",
      "Stress Testing",
      "Holter Monitoring"
    ],
    image: "/services/cardiology.jpg"
  },
  // Add more services as needed
];

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);
  const serviceDoctors = doctors.filter(doctor => doctor.serviceSlug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link to="/doctors" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Doctors
        </Link>
      </Button>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h1>
            <p className="text-gray-600 mb-6">{service.description}</p>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Common Procedures</h3>
              <div className="flex flex-wrap gap-2">
                {service.procedures.map((procedure, index) => (
                  <span 
                    key={index}
                    className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                  >
                    {procedure}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild>
                <Link to="/appointment" className="flex-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <a href={`tel:${serviceDoctors[0]?.phone || '+918499995550'}`} className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-gray-100 min-h-[400px] hidden md:block">
            <img 
              src={service.image} 
              alt={service.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {serviceDoctors.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Our {service.name} Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDoctors.map((doctor) => (
              <div 
                key={doctor.id} 
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold">{doctor.name}</h3>
                <p className="text-sm text-primary mt-1">{doctor.specialization}</p>
                <p className="text-sm text-gray-600 mt-2">{doctor.qualification}</p>
                <p className="text-sm text-gray-500 mt-1">{doctor.experience} experience</p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/doctors/${doctor.id}`} className="text-sm">
                      View Profile
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
