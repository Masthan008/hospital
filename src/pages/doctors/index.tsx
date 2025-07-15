import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    name: "Dr. Rajesh Kumar",
    specialization: "Cardiologist",
    qualification: "MD, DM (Cardiology)",
    experience: "12+ years",
    image: "/doctors/dr-rajesh.jpg",
    department: "Cardiology",
    available: true,
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    specialization: "Orthopedic Surgeon",
    qualification: "MS (Ortho), DNB",
    experience: "10+ years",
    image: "/doctors/dr-priya.jpg",
    department: "Orthopedics",
    available: false,
  },
  {
    id: 4,
    name: "Dr. Amit Patel",
    specialization: "Neurologist",
    qualification: "DM (Neurology)",
    experience: "8+ years",
    image: "/doctors/dr-amit.jpg",
    department: "Neurology",
    available: true,
  },
  {
    id: 5,
    name: "Dr. Sunita Reddy",
    specialization: "Pediatrician",
    qualification: "MD (Pediatrics)",
    experience: "14+ years",
    image: "/doctors/dr-sunita.jpg",
    department: "Pediatrics",
    available: true,
  },
  {
    id: 6,
    name: "Dr. Vikram Singh",
    specialization: "General Surgeon",
    qualification: "MS (General Surgery)",
    experience: "18+ years",
    image: "/doctors/dr-vikram.jpg",
    department: "General Surgery",
    available: true,
  },
];

const departments = [
  { value: "all", label: "All Departments" },
  { value: "cardiology", label: "Cardiology" },
  { value: "dental", label: "Dental" },
  { value: "neurology", label: "Neurology" },
  { value: "orthopedics", label: "Orthopedics" },
  { value: "pediatrics", label: "Pediatrics" },
  { value: "general-surgery", label: "General Surgery" },
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("all");
  
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = department === "all" || 
                            doctor.department.toLowerCase() === department.toLowerCase();
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Expert Doctors</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet our team of highly qualified and experienced healthcare professionals.
        </p>
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
