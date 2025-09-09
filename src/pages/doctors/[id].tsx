import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, Phone, Mail, UserCog } from "lucide-react";
import { doctors } from "@/pages/doctors/doctorData";

export default function DoctorDetail() {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find(d => d.id === parseInt(id || '0'));

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Doctor not found</h2>
          <Button asChild>
            <Link to="/doctors">Back to Doctors</Link>
          </Button>
        </div>
      </div>
    );
  }

  const specializationDetails = {
    "Dental": {
      description: "Our dental department offers comprehensive oral health services including preventive care, cosmetic dentistry, and advanced surgical procedures.",
      services: [
        "Teeth Cleaning & Whitening",
        "Dental Implants",
        "Root Canal Treatment",
        "Braces & Aligners",
        "Dentures & Bridges"
      ],
      image: "/specializations/dental.jpg"
    },
    "Gynecology": {
      description: "Comprehensive women's health services including routine check-ups, prenatal care, and specialized gynecological treatments.",
      services: [
        "Prenatal & Postnatal Care",
        "Family Planning",
        "Minimally Invasive Surgery",
        "Menopause Management",
        "Fertility Treatments"
      ],
      image: "/specializations/gynecology.jpg"
    },
    // Add more specializations as needed
  } as const;

  const specialization = specializationDetails[doctor.department as keyof typeof specializationDetails] || {
    description: "Specialized medical care in this field.",
    services: [],
    image: "/specializations/general.jpg"
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/doctors" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Doctors
        </Link>
      </Button>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Doctor Image */}
          <div className="md:w-1/3">
            <img 
              src={doctor.image} 
              alt={`Dr. ${doctor.name}`} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Doctor Info */}
          <div className="p-8 md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
            <p className="text-primary text-xl font-medium mb-4">{doctor.specialization}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <UserCog className="w-5 h-5 mr-2" />
                  <span>{doctor.qualification}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{doctor.experience} experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Sri Ananth Hospital, Vikarabad</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  <a href={`tel:${doctor.phone || '+918499995554'}`} className="hover:text-primary">
                    {doctor.phone || 'Call for Appointment'}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2" />
                  <a href="mailto:ananthmultispecialityhospital@gmail.com" className="hover:text-primary">
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <Link to={`/appointment?doctor=${doctor.id}`}>
                  Book Appointment
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://wa.me/918499995554" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Specialization Details */}
        <div className="border-t border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-6">About {doctor.department} Department</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-gray-700 mb-6">{specialization.description}</p>
              
              <h3 className="text-xl font-semibold mb-4">Services Offered</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                {specialization.services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {service}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-4">About Dr. {doctor.name.split(' ').pop()}</h3>
              <p className="text-gray-700">
                {doctor.bio || `Dr. ${doctor.name.split(' ').pop()} is a highly skilled ${doctor.specialization} with ${doctor.experience} of experience in providing exceptional patient care.`}
              </p>
            </div>
            
            <div className="hidden md:block">
              <img 
                src={specialization.image} 
                alt={doctor.department} 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
