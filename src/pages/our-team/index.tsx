import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Gireesha Reddy",
    title: "BDS, MDS",
    role: "Dental Surgeon",
    department: "Dental",
    image: "/doctors/dr-gireesha.jpg",
    bio: "With over 15 years of experience in dental care, Dr. Gireesha Reddy leads our dental team with expertise and compassion."
  },
  {
    id: 2,
    name: "Dr. Pavani",
    title: "MBBS, DGO, DNB, DRM (Germany)",
    role: "Gynecologist and Infertility Specialist",
    department: "Gynecology",
    image: "/doctors/dr-pavani.jpg",
    bio: "Specializing in reproductive medicine, Dr. Pavani brings international expertise to our gynecology department."
  },
  {
    id: 3,
    name: "Dr. P Srujan Kumar",
    title: "BDS, MDS",
    role: "Periodontist and Implantologist",
    department: "Dental",
    image: "/doctors/dr-srujan.jpg",
    bio: "Expert in dental implants and periodontal treatments, Dr. Srujan Kumar ensures healthy smiles for all patients."
  },
  {
    id: 4,
    name: "Dr. Chief Medical Officer",
    title: "MD, FRCS",
    role: "Chief Medical Officer",
    department: "Administration",
    image: "/doctors/chief-medical-officer.jpg",
    bio: "With over 20 years of medical experience, our Chief Medical Officer oversees the highest standards of patient care and medical excellence."
  }
];

const OurTeam = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Expert Medical Team</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet our team of highly skilled and experienced healthcare professionals dedicated to your well-being.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-64 w-full overflow-hidden bg-gray-50">
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/images/doctor-placeholder.png';
                    target.className = 'w-full h-full object-cover';
                  }}
                />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
              <p className="text-hospital-blue font-semibold mb-2">{doctor.title}</p>
              <p className="text-gray-600 mb-4">{doctor.role}</p>
              <p className="text-gray-600 text-sm mb-4">{doctor.bio}</p>
              <div className="flex flex-col space-y-2 mt-4">
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+919966151626" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Book Appointment</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-hospital-light-blue rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">24/7 Emergency Care</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our emergency department is staffed with experienced doctors and nurses ready to provide immediate care when you need it most.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:+919966151626" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <Phone className="h-5 w-5 mr-2" />
            Emergency: +91 9966151626
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
