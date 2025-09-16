import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Download, 
  Calendar, 
  Search, 
  Filter,
  FileText,
  Heart,
  User,
  ArrowLeft,
  CheckCircle,
  Clock,
  AlertCircle,
  Award,
  Shield,
  Activity,
  Plus
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function MedicalCertificates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isRequesting, setIsRequesting] = useState(false);

  // Mock medical certificates data
  const certificates = [
    {
      id: 'MC001',
      type: 'Fitness Certificate',
      purpose: 'Employment',
      issueDate: '2024-01-15',
      validUntil: '2024-07-15',
      doctor: 'Dr. Gireesha Reddy',
      department: 'General Medicine',
      status: 'active',
      description: 'Medical fitness certificate for employment purposes',
      conditions: 'No medical restrictions for office work',
      downloadUrl: '#',
      certificateNumber: 'FC-2024-001'
    },
    {
      id: 'MC002',
      type: 'Medical Leave Certificate',
      purpose: 'Sick Leave',
      issueDate: '2024-01-12',
      validUntil: '2024-01-19',
      doctor: 'Dr. Pavani',
      department: 'Emergency Medicine',
      status: 'expired',
      description: 'Medical certificate for sick leave due to gastroenteritis',
      conditions: 'Recommended rest for 7 days',
      downloadUrl: '#',
      certificateNumber: 'ML-2024-002'
    },
    {
      id: 'MC003',
      type: 'Vaccination Certificate',
      purpose: 'Travel',
      issueDate: '2024-01-10',
      validUntil: '2025-01-10',
      doctor: 'Dr. Srujan',
      department: 'Preventive Medicine',
      status: 'active',
      description: 'COVID-19 vaccination certificate for international travel',
      conditions: 'Fully vaccinated with booster dose',
      downloadUrl: '#',
      certificateNumber: 'VC-2024-003'
    },
    {
      id: 'MC004',
      type: 'Disability Certificate',
      purpose: 'Benefits',
      issueDate: '2024-01-08',
      validUntil: '2025-01-08',
      doctor: 'Dr. Gireesha Reddy',
      department: 'Orthopedics',
      status: 'active',
      description: 'Temporary disability certificate for workplace accommodation',
      conditions: '25% temporary disability - lifting restrictions',
      downloadUrl: '#',
      certificateNumber: 'DC-2024-004'
    },
    {
      id: 'MC005',
      type: 'Birth Certificate',
      purpose: 'Legal Documentation',
      issueDate: '2024-01-05',
      validUntil: 'Permanent',
      doctor: 'Dr. Pavani',
      department: 'Obstetrics & Gynecology',
      status: 'active',
      description: 'Official birth certificate issued by hospital',
      conditions: 'Live birth - normal delivery',
      downloadUrl: '#',
      certificateNumber: 'BC-2024-005'
    }
  ];

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || cert.status === filterType;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'expired': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'expired': return <AlertCircle className="w-4 h-4 text-red-600" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getCertificateIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'fitness certificate': return <Activity className="w-5 h-5 text-green-600" />;
      case 'medical leave certificate': return <Clock className="w-5 h-5 text-blue-600" />;
      case 'vaccination certificate': return <Shield className="w-5 h-5 text-purple-600" />;
      case 'disability certificate': return <Award className="w-5 h-5 text-orange-600" />;
      case 'birth certificate': return <Heart className="w-5 h-5 text-pink-600" />;
      default: return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const handleRequestCertificate = () => {
    setIsRequesting(true);
    // Simulate API call
    setTimeout(() => {
      setIsRequesting(false);
      // In real app, this would redirect to request form
    }, 2000);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 600,
          once: true,
          easing: 'ease-in-out',
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8" data-aos="fade-down">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Download className="w-8 h-8 text-hospital-green" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Medical Certificates</h1>
                <p className="text-gray-600">Download and manage your medical certificates</p>
              </div>
            </div>
            <Button 
              onClick={handleRequestCertificate}
              disabled={isRequesting}
              className="bg-hospital-green hover:bg-hospital-green/90 flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>{isRequesting ? 'Processing...' : 'Request Certificate'}</span>
            </Button>
          </div>
          
          <NavLink 
            to="/patient-portal/dashboard"
            className="inline-flex items-center space-x-2 text-hospital-green hover:text-hospital-green/80"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </NavLink>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" data-aos="fade-up" data-aos-delay="100">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Active Certificates</p>
                  <p className="text-2xl font-bold">{certificates.filter(c => c.status === 'active').length}</p>
                </div>
                <CheckCircle className="w-8 h-8 opacity-80" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Expired Certificates</p>
                  <p className="text-2xl font-bold">{certificates.filter(c => c.status === 'expired').length}</p>
                </div>
                <AlertCircle className="w-8 h-8 opacity-80" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Total Certificates</p>
                  <p className="text-2xl font-bold">{certificates.length}</p>
                </div>
                <FileText className="w-8 h-8 opacity-80" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6" data-aos="fade-up" data-aos-delay="200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by certificate type, purpose, or doctor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-hospital-green"
                >
                  <option value="all">All Certificates</option>
                  <option value="active">Active</option>
                  <option value="expired">Expired</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certificates List */}
        <div className="space-y-4">
          {filteredCertificates.map((certificate, index) => (
            <Card 
              key={certificate.id} 
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {getCertificateIcon(certificate.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{certificate.type}</h3>
                      <p className="text-sm text-gray-600">Purpose: {certificate.purpose}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getStatusColor(certificate.status)}>
                      {getStatusIcon(certificate.status)}
                      <span className="ml-1">{certificate.status}</span>
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1">#{certificate.certificateNumber}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Issued: {certificate.issueDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Valid Until: {certificate.validUntil}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{certificate.doctor}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">{certificate.description}</p>
                  <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                    <strong>Conditions:</strong> {certificate.conditions}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">Department: {certificate.department}</span>
                  <div className="flex space-x-2">
                    {certificate.status === 'active' && (
                      <>
                        <Button size="sm" className="flex items-center space-x-1 bg-hospital-green hover:bg-hospital-green/90">
                          <Download className="w-3 h-3" />
                          <span>Download PDF</span>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center space-x-1">
                          <FileText className="w-3 h-3" />
                          <span>View Details</span>
                        </Button>
                      </>
                    )}
                    {certificate.status === 'expired' && (
                      <Button size="sm" variant="outline" className="flex items-center space-x-1">
                        <Plus className="w-3 h-3" />
                        <span>Request Renewal</span>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <Card data-aos="fade-up" data-aos-delay="400">
            <CardContent className="p-12 text-center">
              <Download className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Medical Certificates Found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || filterType !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'You don\'t have any medical certificates yet.'}
              </p>
              <Button 
                onClick={handleRequestCertificate}
                className="bg-hospital-green hover:bg-hospital-green/90 flex items-center space-x-2 mx-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Request New Certificate</span>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Certificate Types Info */}
        <Card className="mt-8" data-aos="fade-up" data-aos-delay="500">
          <CardHeader>
            <CardTitle>Available Certificate Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <Activity className="w-6 h-6 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Fitness Certificate</h3>
                <p className="text-sm text-gray-600">For employment, sports, or general fitness verification</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Medical Leave</h3>
                <p className="text-sm text-gray-600">For sick leave or medical absence documentation</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <Shield className="w-6 h-6 text-purple-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Vaccination</h3>
                <p className="text-sm text-gray-600">For travel, school, or workplace requirements</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <Award className="w-6 h-6 text-orange-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Disability</h3>
                <p className="text-sm text-gray-600">For benefits, accommodations, or legal purposes</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <Heart className="w-6 h-6 text-pink-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Birth Certificate</h3>
                <p className="text-sm text-gray-600">Official hospital-issued birth documentation</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <FileText className="w-6 h-6 text-gray-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Custom</h3>
                <p className="text-sm text-gray-600">Other medical certificates as per requirements</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}