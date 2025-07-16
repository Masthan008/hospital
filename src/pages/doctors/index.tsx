import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Search, Filter, MapPin, Clock, UserCog } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { doctors, departments } from "@/pages/doctors/doctorData";

const Doctors = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPin, setAdminPin] = useState("");

  // Toggle admin mode
  const handleAdminToggle = () => {
    if (!isAdmin) {
      setShowAdminLogin(true);
    } else {
      setIsAdmin(false);
      toast.success("Admin mode disabled");
    }
  };

  // Handle admin login
  const handleAdminLogin = () => {
    if (adminPin === "1234") { // Simple pin for demo
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPin("");
      toast.success("Admin mode enabled");
    } else {
      toast.error("Invalid admin PIN");
    }
  };

  // Toggle doctor availability
  const toggleDoctorAvailability = (doctorId: number) => {
    // In a real app, this would update the backend
    const updatedDoctors = doctors.map(doctor => 
      doctor.id === doctorId 
        ? { ...doctor, available: !doctor.available } 
        : doctor
    );
    // Update the UI state
    toast.success("Doctor availability updated");
  };

  const handleCardClick = (serviceSlug: string | undefined) => {
    if (!serviceSlug) {
      console.error('No service slug defined for this doctor');
      return;
    }
    navigate(`/services/${serviceSlug}`);
  };
  
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        doctor.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === "All Departments" || 
                            doctor.department === selectedDepartment;
    
    // Only show available doctors
    return matchesSearch && matchesDepartment && doctor.available;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Expert Doctors</h1>
          <p className="text-lg text-gray-600">
            Meet our team of highly qualified healthcare professionals.
          </p>
        </div>
        <Button 
          variant={isAdmin ? "destructive" : "outline"} 
          onClick={handleAdminToggle}
          className="flex items-center gap-2"
        >
          <UserCog className="w-4 h-4" />
          {isAdmin ? 'Exit Admin Mode' : 'Admin Login'}
        </Button>
      </div>

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
          
          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-full">
              <Filter className="mr-2 h-4 w-4 text-gray-500" />
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Departments">All Departments</SelectItem>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button 
            variant="outline" 
            className="w-full md:w-auto"
            onClick={() => {
              setSearchTerm("");
              setSelectedDepartment("All Departments");
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
            <Card 
              key={doctor.id} 
              className="flex flex-col h-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 cursor-pointer"
              onClick={() => doctor.serviceSlug && handleCardClick(doctor.serviceSlug)}
            >
              <div className="flex flex-col h-full">
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="h-60 w-full object-cover rounded-t-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (doctor.serviceSlug) {
                        handleCardClick(doctor.serviceSlug);
                      }
                    }} 
                  />
                  <div className={`absolute top-2 right-2 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    doctor.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {doctor.available ? 'Available Today' : 'Not Available'}
                  </div>
                </div>
                <CardContent className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">{doctor.specialization}</p>
                  <p className="text-sm text-gray-600 mt-1">{doctor.qualification}</p>
                  <p className="text-sm text-gray-500 mt-2">{doctor.experience} experience</p>
                  
                  <div className="mt-3 space-y-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Vikarabad</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Mon-Sat: 9AM - 8PM</span>
                    </div>
                  </div>
                </CardContent>
              </div>
              <CardFooter className="p-4 pt-0 mt-auto" onClick={(e) => e.stopPropagation()}>
                {isAdmin && (
                  <div className="w-full mb-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mb-2"
                      onClick={() => toggleDoctorAvailability(doctor.id)}
                    >
                      {doctor.available ? 'Mark as Unavailable' : 'Mark as Available'}
                    </Button>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2 w-full">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/doctors/${doctor.id}`} className="text-sm">
                      View Profile
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    size="sm" 
                    disabled={!doctor.available}
                    className={`w-full ${!doctor.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <Link to={`/appointment?doctor=${doctor.id}`} className="text-sm">
                      Book Now
                    </Link>
                  </Button>
                </div>

              </CardFooter>
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
              setSelectedDepartment("All Departments");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
  {/* Admin Login Modal */}
  {showAdminLogin && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Admin Login</h3>
        <p className="text-gray-600 mb-4">Enter admin PIN to manage doctor availability</p>
        <Input
          type="password"
          placeholder="Enter PIN"
          value={adminPin}
          onChange={(e) => setAdminPin(e.target.value)}
          className="mb-4"
        />
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setShowAdminLogin(false)}>
            Cancel
          </Button>
          <Button onClick={handleAdminLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  )}
};

export default Doctors;
