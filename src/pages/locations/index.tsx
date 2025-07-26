import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    id: 1,
    name: "Sri Ananth Multi Specialty Hospital",
    address: "H.No. 1-2-3, Near Bus Stand, Vikarabad, Telangana 501101",
    phone: "+91 9966151626",
    email: "info@sriananthhospital.com",
    hours: "24/7 Emergency, OPD: 8:00 AM - 9:00 PM",
    coordinates: "17.3369° N, 78.4808° E",
    mapLink: "https://maps.google.com/?q=Sri+Ananth+Hospital+Vikarabad"
  },
  {
    id: 2,
    name: "Sri Ananth Dental Clinic",
    address: "Opposite RTC Complex, Main Road, Vikarabad, Telangana 501101",
    phone: "+91 9000000001",
    email: "dental@sriananthhospital.com",
    hours: "Monday - Saturday: 9:00 AM - 8:00 PM, Sunday: 9:00 AM - 1:00 PM",
    coordinates: "17.3380° N, 78.4820° E",
    mapLink: "https://maps.google.com/?q=Sri+Ananth+Dental+Clinic+Vikarabad"
  },
  // Diagnostic center entry removed as per user request
];

const Locations = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Locations</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find the nearest Sri Ananth Hospital facility to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location) => (
          <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{location.name}</h3>
                  <p className="text-gray-600">{location.address}</p>
                </div>
              </div>
              
              <div className="space-y-3 mt-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-3" />
                  <a href={`tel:${location.phone.replace(/\s+/g, '')}`} className="text-gray-700 hover:text-primary">
                    {location.phone}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-3" />
                  <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-primary">
                    {location.email}
                  </a>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{location.hours}</span>
                </div>
                
                <div className="flex items-center">
                  <Navigation className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">{location.coordinates}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href={location.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Contact</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          For medical emergencies, please call our 24/7 emergency hotline or visit our main hospital location immediately.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:+919966151626" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <Phone className="h-5 w-5 mr-2" />
            Emergency: +91 9966151626
          </a>
          <a 
            href="tel:108" 
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <Phone className="h-5 w-5 mr-2" />
            Ambulance: 108
          </a>
        </div>
      </div>
    </div>
  );
};

export default Locations;
