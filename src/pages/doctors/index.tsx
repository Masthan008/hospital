import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Filter, UserCog, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DoctorAvailability } from "@/components/doctor/DoctorAvailability";

const doctors = [
  {
    id: 1,
    name: "Dr. Gireesha Reddy",
    specialization: "Dental Surgeon",
    qualification: "BDS, MDS",
    experience: "15+ years",
    image: "/doctors/dr-gireesha.jpg",
    department: "Dental",
    available: true,
  },
  {
    id: 2,
    name: "Dr. Pavani",
    specialization: "Gynecologist",
    qualification: "MBBS, DGO, DNB, DRM (Germany)",
    experience: "12+ years",
    image: "/doctors/dr-pavani.jpg",
    department: "Gynecology",
    available: true,
  },
  {
    id: 3,
    name: "Dr. P Srujan Kumar",
    specialization: "Periodontist and Implantologist",
    qualification: "BDS, MDS",
    experience: "10+ years",
    image: "/doctors/dr-srujan.jpg",
    department: "Dental",
    available: true,
  },
  {
    id: 4,
    name: "Dr. Chief Medical Officer",
    specialization: "Chief Medical Officer",
    qualification: "MD, FRCS",
    experience: "20+ years",
    image: "/doctors/chief-medical-officer.jpg",
    department: "Administration",
    available: true,
  },
];

const departments = [
  { value: "all", label: "All Departments" },
  { value: "dental", label: "Dental" },
  { value: "gynecology", label: "Gynecology" },
  { value: "administration", label: "Administration" },
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("all");
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminPin, setAdminPin] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  // Toggle admin mode (in a real app, this would verify credentials)
  const handleAdminToggle = () => {
    if (isAdminMode) {
      setIsAdminMode(false);
      toast.success('Exited admin mode');
    } else {
      setShowAdminLogin(true);
    }
  };

  const handleAdminLogin = () => {
    // In a real app, verify credentials with backend
    if (adminPin === '1234') { // Simple pin for demo
      setIsAdminMode(true);
      setShowAdminLogin(false);
      setAdminPin('');
      toast.success('Admin mode activated');
    } else {
      toast.error('Invalid admin PIN');
    }
  };

  const handleStatusChange = (_doctorId: number, available: boolean) => {
    // In a real app, this would update the doctor's status in the backend
    // The _doctorId parameter is prefixed with _ to indicate it's intentionally unused
    toast.success(`Doctor ${available ? 'marked as available' : 'set to on leave'}`);
  };
  
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = department === "all" || 
                            doctor.department.toLowerCase() === department.toLowerCase();
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Our Expert Doctors</h1>
          <p className="text-xl text-gray-600">
            Meet our team of highly qualified and experienced healthcare professionals.
          </p>
        </div>
        <Button 
          variant={isAdminMode ? "destructive" : "outline"} 
          onClick={handleAdminToggle}
          className="flex items-center gap-2"
        >
          {isAdminMode ? (
            <>
              <LogOut className="h-4 w-4" />
              Exit Admin Mode
            </>
          ) : (
            <>
              <UserCog className="h-4 w-4" />
              Doctor Login
            </>
          )}
        </Button>
      </div>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl">Doctor Login</CardTitle>
              <p className="text-sm text-gray-500">Enter your credentials to manage availability</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="adminPin">PIN</Label>
                <Input
                  id="adminPin"
                  type="password"
                  placeholder="Enter your PIN"
                  value={adminPin}
                  onChange={(e) => setAdminPin(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowAdminLogin(false)}>
                Cancel
              </Button>
              <Button onClick={handleAdminLogin}>Login</Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* Search and Filter */}
      <div className="mb-12 bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by name or specialization..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger className="w-full">
              <Filter className="mr-2 h-4 w-4 text-gray-500" />
              <SelectValue placeholder="Select Department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept.value} value={dept.value}>
                  {dept.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button 
            variant="outline" 
            className="w-full md:w-auto"
            onClick={() => {
              setSearchTerm("");
              setDepartment("all");
            }}
          >
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Doctors Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="w-full h-64 flex items-center justify-center bg-gray-100">
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
                {!doctor.available && (
                  <div className="absolute top-4 right-4 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    On Leave
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                <div className="space-y-1">
                  <p className="text-primary font-medium">{doctor.specialization}</p>
                  <p className="text-sm text-gray-600">{doctor.qualification}</p>
                  <p className="text-sm text-gray-500">{doctor.experience} experience</p>
                </div>
              </CardHeader>
              <CardContent>
                <DoctorAvailability 
                  doctorId={doctor.id} 
                  isAdmin={isAdminMode}
                  onStatusChange={(available) => handleStatusChange(doctor.id, available)}
                />
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    doctor.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {doctor.available ? 'Available Today' : 'Not Available'}
                  </span>
                  <Button 
                    asChild 
                    size="sm" 
                    disabled={!doctor.available}
                    className={!doctor.available ? 'opacity-50 cursor-not-allowed' : ''}
                  >
                    <Link to="/appointment" state={{ doctor: doctor.name }}>
                      Book Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No doctors found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setSearchTerm("");
              setDepartment("all");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Doctors;
