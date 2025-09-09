import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Ambulance, AlertTriangle, MapPin, Phone, Cross } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample hospital data
const nearbyHospitals = [
  {
    id: 1,
    name: 'Sri Ananth Hospital',
    distance: '0.5 km',
    address: '123 Medical Center, Bangalore',
    phone: '+91 80 1234 5678',
    hasEmergency: true,
    waitTime: '5 min',
    coordinates: { lat: 12.9716, lng: 77.5946 }
  },
  {
    id: 2,
    name: 'City General Hospital',
    distance: '2.1 km',
    address: '456 Health Street, Bangalore',
    phone: '+91 80 8765 4321',
    hasEmergency: true,
    waitTime: '15 min',
    coordinates: { lat: 12.9758, lng: 77.6050 }
  },
  {
    id: 3,
    name: 'Metro Medical Center',
    distance: '3.7 km',
    address: '789 Wellness Avenue, Bangalore',
    phone: '+91 80 5555 1234',
    hasEmergency: true,
    waitTime: '10 min',
    coordinates: { lat: 12.9650, lng: 77.5850 }
  }
];

// Sample first aid instructions
const firstAidInstructions = {
  'CPR': [
    'Check for responsiveness and call emergency services',
    'Place the heel of your hand on the center of the chest',
    'Push hard and fast (100-120 compressions per minute)',
    'Give rescue breaths if trained',
    'Continue until help arrives or the person starts breathing'
  ],
  'Choking': [
    'Encourage the person to keep coughing',
    'Deliver 5 back blows between the shoulder blades',
    'Perform abdominal thrusts (Heimlich maneuver)',
    'Call emergency services if the blockage doesn\'t dislodge'
  ],
  'Bleeding': [
    'Apply direct pressure to the wound with a clean cloth',
    'Elevate the injured area if possible',
    'Apply a bandage to maintain pressure',
    'Seek medical help if bleeding is severe'
  ],
  'Burns': [
    'Cool the burn with running water for 10-15 minutes',
    'Remove any jewelry or tight clothing near the burn',
    'Cover with a sterile, non-stick dressing',
    'Do not use ice, butter, or ointments on severe burns'
  ]
};

export default function EmergencyServices() {
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
  const [selectedAid, setSelectedAid] = useState<string>('CPR');
  const [ambulanceStatus, setAmbulanceStatus] = useState<'idle' | 'dispatched' | 'arrived'>('idle');
  const [countdown, setCountdown] = useState<number | null>(null);

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Default to a location if geolocation fails
          setLocation({ lat: 12.9716, lng: 77.5946 });
        }
      );
    } else {
      // Default to a location if geolocation is not supported
      setLocation({ lat: 12.9716, lng: 77.5946 });
    }
  }, []);

  // Handle emergency button click
  const handleEmergency = () => {
    if (!emergencyMode) {
      setEmergencyMode(true);
      setAmbulanceStatus('dispatched');
      setCountdown(300); // 5 minutes countdown
      
      // Simulate ambulance arrival
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev === null) return null;
          if (prev <= 0) {
            clearInterval(timer);
            setAmbulanceStatus('arrived');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    } else {
      // Cancel emergency
      setEmergencyMode(false);
      setAmbulanceStatus('idle');
      setCountdown(null);
    }
  };

  // Format countdown to MM:SS
  const formatCountdown = (seconds: number | null) => {
    if (seconds === null) return '--:--';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Emergency Button */}
      <div className="fixed bottom-8 right-8 z-50" data-aos="fade-up" data-aos-delay="300">
        <Button 
          onClick={handleEmergency}
          className={`rounded-full h-16 w-16 p-0 flex items-center justify-center shadow-lg ${
            emergencyMode 
              ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
              : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          {emergencyMode ? (
            <Cross className="h-8 w-8" />
          ) : (
            <AlertTriangle className="h-8 w-8" />
          )}
        </Button>
      </div>

      {/* Emergency Alert */}
      {emergencyMode && (
        <Alert variant="destructive" className="mb-8" data-aos="fade-up">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>Emergency Mode Activated</AlertTitle>
          <AlertDescription>
            Help is on the way! Your location has been shared with emergency services.
          </AlertDescription>
        </Alert>
      )}

      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-hospital-red mb-4">Emergency Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Immediate assistance when you need it most
        </p>
      </div>

      <Tabs defaultValue="hospitals" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8" data-aos="fade-up" data-aos-delay="100">
          <TabsTrigger value="hospitals" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Nearby Hospitals
          </TabsTrigger>
          <TabsTrigger value="firstaid" className="flex items-center gap-2">
            <Cross className="h-4 w-4" /> First Aid Guide
          </TabsTrigger>
          <TabsTrigger value="ambulance" className="flex items-center gap-2">
            <Ambulance className="h-4 w-4" /> Ambulance Tracker
          </TabsTrigger>
        </TabsList>

        {/* Nearby Hospitals Tab */}
        <TabsContent value="hospitals" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyHospitals.map((hospital, index) => (
              <Card key={hospital.id} className="hover:shadow-lg transition-shadow"
                data-aos="fade-up" data-aos-delay={100 * (index % 3)}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{hospital.name}</CardTitle>
                      <CardDescription>{hospital.distance} away</CardDescription>
                    </div>
                    {hospital.hasEmergency && (
                      <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        24/7 Emergency
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{hospital.address}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${hospital.phone}`} className="hover:underline">
                      {hospital.phone}
                    </a>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Wait Time:</span>{' '}
                    <span className="text-hospital-green">{hospital.waitTime}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MapPin className="h-4 w-4 mr-2" /> Directions
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Phone className="h-4 w-4 mr-2" /> Call Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-8" data-aos="fade-up">
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map View Coming Soon</p>
            </div>
          </div>
        </TabsContent>

        {/* First Aid Guide Tab */}
        <TabsContent value="firstaid" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1" data-aos="fade-right">
              <div className="space-y-2">
                {Object.keys(firstAidInstructions).map((aid) => (
                  <Button
                    key={aid}
                    variant={selectedAid === aid ? 'default' : 'ghost'}
                    className={`w-full justify-start ${
                      selectedAid === aid ? 'bg-hospital-red' : ''
                    }`}
                    onClick={() => setSelectedAid(aid)}
                  >
                    {aid}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3" data-aos="fade-left">
              <Card>
                <CardHeader>
                  <CardTitle>{selectedAid} - First Aid Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {(firstAidInstructions as any)[selectedAid].map((step: string, index: number) => (
                      <li key={index} className="flex gap-3">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hospital-red text-white flex items-center justify-center">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </li>
                    ))}
                  </ol>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="text-hospital-red border-hospital-red">
                    Watch Video Guide
                  </Button>
                  <div className="text-sm text-gray-500">
                    For demonstration only. Please seek professional training.
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Ambulance Tracker Tab */}
        <TabsContent value="ambulance" className="space-y-8">
          <Card className="max-w-2xl mx-auto" data-aos="fade-up">
            <CardHeader>
              <CardTitle>Ambulance Status</CardTitle>
              <CardDescription>
                {ambulanceStatus === 'idle' 
                  ? 'Request an ambulance when needed' 
                  : ambulanceStatus === 'dispatched'
                    ? 'Ambulance is on the way to your location'
                    : 'Ambulance has arrived at your location'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="h-48 w-48 rounded-full border-4 border-gray-200 flex items-center justify-center">
                    {ambulanceStatus === 'idle' ? (
                      <Ambulance className="h-16 w-16 text-gray-300" />
                    ) : (
                      <div className="text-center">
                        <Ambulance 
                          className={`h-16 w-16 mx-auto mb-2 ${
                            ambulanceStatus === 'dispatched' ? 'animate-pulse text-hospital-red' : 'text-green-500'
                          }`}
                        />
                        <p className="text-sm text-gray-500">
                          {ambulanceStatus === 'dispatched' ? 'ETA' : 'Arrived'}
                        </p>
                        <p className="text-2xl font-bold">
                          {ambulanceStatus === 'dispatched' 
                            ? formatCountdown(countdown) 
                            : '00:00'}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {ambulanceStatus === 'dispatched' && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-ping">
                      Live
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Your Location</p>
                    <p className="font-medium">
                      {location 
                        ? `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}` 
                        : 'Getting location...'}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4 mr-2" /> Share Location
                  </Button>
                </div>
                
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Live Ambulance Tracking Coming Soon</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                disabled={ambulanceStatus === 'idle'}
                onClick={() => setAmbulanceStatus('idle')}
              >
                Cancel Request
              </Button>
              <Button 
                variant="destructive"
                className="gap-2"
                onClick={handleEmergency}
                disabled={ambulanceStatus !== 'idle'}
              >
                <Ambulance className="h-4 w-4" />
                {ambulanceStatus === 'idle' ? 'Request Ambulance' : 'Ambulance Dispatched'}
              </Button>
            </CardFooter>
          </Card>
          
          <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <Alert>
              <AlertTriangle className="h-5 w-5" />
              <AlertTitle>In case of emergency</AlertTitle>
              <AlertDescription className="space-y-2">
                <p>Call <span className="font-bold">108</span> for immediate emergency assistance.</p>
                <p>For non-emergency medical advice, call our 24/7 helpline at <span className="font-bold">+91 80 1234 5678</span>.</p>
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
