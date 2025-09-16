import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Calendar, 
  Download, 
  Search, 
  Filter,
  Eye,
  Heart,
  User,
  Clock,
  ArrowLeft,
  Stethoscope,
  Activity,
  Pill,
  AlertCircle,
  CheckCircle,
  Share,
  Print
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function DischargeSummaries() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedSummary, setSelectedSummary] = useState(null);

  // Mock discharge summaries data
  const dischargeSummaries = [
    {
      id: 'DS001',
      admissionDate: '2024-01-10',
      dischargeDate: '2024-01-15',
      lengthOfStay: '5 days',
      admissionType: 'Emergency',
      primaryDoctor: 'Dr. Gireesha Reddy',
      department: 'Internal Medicine',
      dischargeDiagnosis: 'ST-Elevation Myocardial Infarction (STEMI), Post-PCI',
      condition: 'Stable',
      summary: 'Patient underwent successful primary PCI. Recovery was uncomplicated.',
      status: 'final'
    },
    {
      id: 'DS002',
      admissionDate: '2024-01-08',
      dischargeDate: '2024-01-10',
      lengthOfStay: '2 days',
      admissionType: 'Emergency',
      primaryDoctor: 'Dr. Pavani',
      department: 'Emergency Medicine',
      dischargeDiagnosis: 'Acute Gastroenteritis, resolved',
      condition: 'Good',
      summary: 'Patient responded well to IV fluid therapy and supportive care.',
      status: 'final'
    }
  ];

  const filteredSummaries = dischargeSummaries.filter(summary => {
    const matchesSearch = summary.dischargeDiagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         summary.primaryDoctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || summary.admissionType.toLowerCase() === filterType;
    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({ duration: 600, once: true });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8" data-aos="fade-down">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="w-8 h-8 text-hospital-green" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Discharge Summaries</h1>
              <p className="text-gray-600">View your hospital discharge summaries and care instructions</p>
            </div>
          </div>
          
          <NavLink 
            to="/patient-portal/dashboard"
            className="inline-flex items-center space-x-2 text-hospital-green hover:text-hospital-green/80"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </NavLink>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6" data-aos="fade-up" data-aos-delay="100">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by diagnosis, doctor, or department..."
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
                  <option value="all">All Summaries</option>
                  <option value="emergency">Emergency Admissions</option>
                  <option value="elective">Elective Admissions</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Discharge Summaries List */}
        <div className="space-y-4">
          {filteredSummaries.map((summary, index) => (
            <Card 
              key={summary.id} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-hospital-green/10 rounded-lg">
                      <FileText className="w-5 h-5 text-hospital-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{summary.dischargeDiagnosis}</h3>
                      <p className="text-sm text-gray-600">{summary.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={summary.admissionType === 'Emergency' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}>
                      {summary.admissionType}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1">ID: {summary.id}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Admitted: {summary.admissionDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Discharged: {summary.dischargeDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Stay: {summary.lengthOfStay}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{summary.primaryDoctor}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 line-clamp-2">{summary.summary}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <Badge className="bg-green-100 text-green-800">
                    Condition: {summary.condition}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>View Details</span>
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>Download</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSummaries.length === 0 && (
          <Card data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-12 text-center">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Discharge Summaries Found</h3>
              <p className="text-gray-600">
                {searchTerm || filterType !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'Your discharge summaries will appear here when available.'}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}