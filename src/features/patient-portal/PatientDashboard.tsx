import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  User, 
  FileText, 
  TestTube, 
  Pill, 
  Download, 
  LogOut,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Heart,
  Activity,
  Clock,
  Bell
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface PatientDashboardProps {
  patientData: any;
  onLogout: () => void;
}

export function PatientDashboard({ patientData, onLogout }: PatientDashboardProps) {
  const [activeSection, setActiveSection] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Activity, path: '/patient-portal/dashboard' },
    { id: 'medical-history', label: 'Medical History', icon: FileText, path: '/patient-portal/medical-history' },
    { id: 'lab-results', label: 'Lab Results', icon: TestTube, path: '/patient-portal/lab-results' },
    { id: 'prescriptions', label: 'Prescriptions', icon: Pill, path: '/patient-portal/prescriptions' },
    { id: 'discharge-summaries', label: 'Discharge Summaries', icon: FileText, path: '/patient-portal/discharge-summaries' },
    { id: 'certificates', label: 'Medical Certificates', icon: Download, path: '/patient-portal/certificates' }
  ];

  const recentActivities = [
    { id: 1, type: 'appointment', title: 'Appointment with Dr. Gireesha Reddy', date: '2024-01-15', status: 'completed' },
    { id: 2, type: 'lab', title: 'Blood Test Results Available', date: '2024-01-10', status: 'new' },
    { id: 3, type: 'prescription', title: 'New Prescription Added', date: '2024-01-08', status: 'active' },
    { id: 4, type: 'certificate', title: 'Fitness Certificate Issued', date: '2024-01-05', status: 'completed' }
  ];

  const upcomingAppointments = [
    { id: 1, doctor: 'Dr. Srujan', specialty: 'Dental Surgery', date: '2024-01-20', time: '10:00 AM' },
    { id: 2, doctor: 'Dr. Pavani', specialty: 'Gynecology', date: '2024-01-25', time: '2:00 PM' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Heart className="w-8 h-8 text-hospital-green" />
                <h1 className="text-2xl font-bold text-gray-900">Patient Portal</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback className="bg-hospital-green text-white">
                    {patientData?.name?.split(' ').map((n: string) => n[0]).join('') || 'JD'}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{patientData?.name}</p>
                  <p className="text-xs text-gray-500">Patient ID: {patientData?.id}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={onLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1" data-aos="fade-right">
            <Card className="sticky top-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">Quick Access</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-hospital-green text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveSection(item.id)}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Patient Info Card */}
            <Card data-aos="fade-up" data-aos-delay="200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Patient Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{patientData?.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{patientData?.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{patientData?.address}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-gray-900">Blood Group: </span>
                      <Badge variant="outline" className="ml-2">{patientData?.bloodGroup}</Badge>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-900">Date of Birth: </span>
                      <span className="text-sm text-gray-600">{patientData?.dateOfBirth}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-900">Emergency Contact: </span>
                      <span className="text-sm text-gray-600">{patientData?.emergencyContact}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="300">
              <Card className="bg-gradient-to-r from-hospital-green to-hospital-green/80 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Total Visits</p>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                    <Activity className="w-8 h-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-hospital-blue to-hospital-blue/80 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Lab Reports</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <TestTube className="w-8 h-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Prescriptions</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <Pill className="w-8 h-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card data-aos="fade-up" data-aos-delay="400">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Recent Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'new' ? 'bg-green-500' :
                          activity.status === 'active' ? 'bg-blue-500' :
                          'bg-gray-400'
                        }`} />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                      <Badge variant={activity.status === 'new' ? 'default' : 'secondary'}>
                        {activity.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card data-aos="fade-up" data-aos-delay="500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Upcoming Appointments</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-hospital-green/10 rounded-lg flex items-center justify-center">
                          <User className="w-6 h-6 text-hospital-green" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{appointment.doctor}</p>
                          <p className="text-xs text-gray-500">{appointment.specialty}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                        <p className="text-xs text-gray-500">{appointment.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Button asChild className="w-full">
                    <NavLink to="/book-appointment">Book New Appointment</NavLink>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}