import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ambulance, Phone, Clock, MapPin, AlertCircle, Shield, Activity, UserCheck, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for ambulance tracking
const mockAmbulances = [
  { id: 1, status: 'dispatched', eta: '8-10 mins', location: 'Near Clock Tower', distance: '2.5 km' },
  { id: 2, status: 'available', eta: 'Immediate', location: 'At Hospital', distance: '0 km' },
  { id: 3, status: 'on-route', eta: '15 mins', location: 'NH 44', distance: '5.7 km' },
];

export default function EmergencyServices() {
  const emergencyContacts = [
    { name: "Emergency", number: "108", available: "24/7" },
    { name: "Ambulance", number: "+91 8499995554", available: "24/7" },
    { name: "Front Desk", number: "+91 8499995554", available: "24/7" },
  ];

  const [activeAmbulance, setActiveAmbulance] = useState<number | null>(null);
  const [trackingCode, setTrackingCode] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackedAmbulance, setTrackedAmbulance] = useState<any>(null);

  // Simulate tracking an ambulance
  const handleTrackAmbulance = (id: number) => {
    const ambulance = mockAmbulances.find(amb => amb.id === id);
    if (ambulance) {
      setTrackedAmbulance(ambulance);
      setActiveAmbulance(id);
      setIsTracking(true);
      setTrackingCode(`TRK-${1000 + id}`);
    }
  };

  const emergencyServices = [
    {
      title: "24/7 Emergency Care",
      description: "Immediate medical attention for all emergencies with a dedicated team of emergency medicine specialists.",
      icon: <AlertCircle className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Ambulance Service",
      description: "Fully equipped ambulances with trained paramedics for safe and quick patient transport.",
      icon: <Ambulance className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Trauma Care",
      description: "Specialized trauma care unit with advanced life support systems and experienced trauma surgeons.",
      icon: <HeartPulse className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Critical Care",
      description: "Advanced critical care units equipped with state-of-the-art life support systems.",
      icon: <Activity className="w-8 h-8 text-red-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Emergency Services</h1>
          <p className="text-xl text-red-100">Immediate medical attention when you need it most</p>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <div className="bg-red-700 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Emergency Number:</span>
              <a href="tel:+918499995554" className="text-white hover:underline font-bold">
                +91 8499995554
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>24/7 Emergency Services</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Vikarabad, Telangana</span>
            </div>
            {isTracking && trackedAmbulance && (
              <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>Tracking: Ambulance {trackedAmbulance.id} - {trackedAmbulance.eta} ETA</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Services */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Emergency Services</h2>
            
            <div className="space-y-6">
              {emergencyServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">When to Visit the Emergency Room</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Chest pain or difficulty breathing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Severe abdominal pain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Sudden dizziness, weakness, or loss of coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Severe or uncontrolled bleeding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Broken bones or severe injuries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Seizures or loss of consciousness</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact, Tracker & Map */}
          <div className="space-y-6">
            {/* Ambulance Tracker */}
            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Ambulance className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Ambulance Tracker</h3>
                </div>
                
                {isTracking && trackedAmbulance ? (
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-green-800">Ambulance {trackedAmbulance.id} is {trackedAmbulance.status}</p>
                          <p className="text-sm text-green-600">Tracking Code: {trackingCode}</p>
                        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {trackedAmbulance.eta} ETA
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-green-100">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                          <span>Current Location:</span>
                          <span className="font-medium">{trackedAmbulance.location}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>Distance:</span>
                          <span className="font-medium">{trackedAmbulance.distance}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <Button variant="outline" size="sm" className="text-xs">
                          Share Location
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs" onClick={() => {
                          setIsTracking(false);
                          setTrackedAmbulance(null);
                          setActiveAmbulance(null);
                        }}>
                          Stop Tracking
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 mb-3">Track your ambulance in real-time</p>
                    <div className="space-y-2">
                      {mockAmbulances.map((ambulance) => (
                        <div 
                          key={ambulance.id} 
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            activeAmbulance === ambulance.id 
                              ? 'border-red-300 bg-red-50' 
                              : 'border-gray-200 hover:border-red-200 hover:bg-red-50/50'
                          }`}
                          onClick={() => handleTrackAmbulance(ambulance.id)}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${
                                ambulance.status === 'available' ? 'bg-green-500' : 
                                ambulance.status === 'dispatched' ? 'bg-yellow-500' : 'bg-blue-500'
                              }`}></div>
                              <div>
                                <p className="font-medium text-gray-800">Ambulance {ambulance.id}</p>
                                <p className="text-xs text-gray-500 capitalize">{ambulance.status}</p>
                              </div>
                            </div>
                            <span className="text-sm font-medium text-gray-700">{ambulance.eta}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Don't see your ambulance? Call our emergency number for assistance.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="w-5 h-5 text-red-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Emergency Contacts</h3>
                </div>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">{contact.name}</p>
                        <p className="text-sm text-gray-500">Available: {contact.available}</p>
                      </div>
                      <a 
                        href={`tel:${contact.number.replace(/\D/g, '')}`}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        {contact.number}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0167030000003!2d78.0245!3d17.4508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f7b2f3e3c1d%3A0x1f1b5b5b5b5b5b5b!2sSri%20Ananth%20Hospital!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span>Near Bus Stand, Vikarabad, Telangana 501101</span>
                  </p>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link to="/contact">Get Directions</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Emergency Info Banner */}
      <div className="bg-blue-50 border-t border-b border-blue-200 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">What to Expect in the ER</h3>
            <p className="text-gray-700 mb-6">
              Our emergency team follows a triage system to ensure the most critical patients are seen first. 
              Please be patient as we work to provide the best possible care for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/patient-info#er-visit">Learn More About ER Visits</Link>
              </Button>
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
