import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Calendar, 
  User, 
  Search, 
  Filter,
  Download,
  Eye,
  Heart,
  Stethoscope,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowLeft
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function MedicalHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedRecord, setSelectedRecord] = useState(null);

  // Mock medical history data
  const medicalRecords = [
    {
      id: 'MH001',
      date: '2024-01-15',
      type: 'consultation',
      doctor: 'Dr. Gireesha Reddy',
      department: 'General Medicine',
      diagnosis: 'Hypertension - Routine Follow-up',
      symptoms: ['High blood pressure', 'Mild headache'],
      treatment: 'Medication adjustment, lifestyle counseling',
      status: 'completed',
      severity: 'medium',
      notes: 'Patient responding well to treatment. Blood pressure controlled. Continue medication.',
      vitals: {
        bloodPressure: '130/85 mmHg',
        heartRate: '72 bpm',
        temperature: '98.6°F',
        weight: '70 kg'
      }
    },
    {
      id: 'MH002',
      date: '2024-01-10',
      type: 'emergency',
      doctor: 'Dr. Pavani',
      department: 'Emergency Medicine',
      diagnosis: 'Acute Gastritis',
      symptoms: ['Severe stomach pain', 'Nausea', 'Vomiting'],
      treatment: 'IV fluids, antacids, pain management',
      status: 'completed',
      severity: 'high',
      notes: 'Patient admitted for 6 hours. Symptoms resolved. Discharged with medication.',
      vitals: {
        bloodPressure: '120/80 mmHg',
        heartRate: '85 bpm',
        temperature: '99.2°F',
        weight: '69 kg'
      }
    },
    {
      id: 'MH003',
      date: '2024-01-05',
      type: 'surgery',
      doctor: 'Dr. Srujan',
      department: 'Dental Surgery',
      diagnosis: 'Wisdom Tooth Extraction',
      symptoms: ['Tooth pain', 'Swelling'],
      treatment: 'Surgical extraction under local anesthesia',
      status: 'completed',
      severity: 'low',
      notes: 'Procedure completed successfully. Post-operative instructions given.',
      vitals: {
        bloodPressure: '125/78 mmHg',
        heartRate: '68 bpm',
        temperature: '98.4°F'
      }
    },
    {
      id: 'MH004',
      date: '2023-12-20',
      type: 'checkup',
      doctor: 'Dr. Gireesha Reddy',
      department: 'General Medicine',
      diagnosis: 'Annual Health Checkup',
      symptoms: ['Routine screening'],
      treatment: 'Comprehensive health assessment',
      status: 'completed',
      severity: 'low',
      notes: 'Overall health good. Recommended regular exercise and diet modification.',
      vitals: {
        bloodPressure: '118/75 mmHg',
        heartRate: '70 bpm',
        temperature: '98.6°F',
        weight: '71 kg'
      }
    }
  ];

  const filteredRecords = medicalRecords.filter(record => {
    const matchesSearch = record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || record.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'consultation': return <Stethoscope className="w-4 h-4" />;
      case 'emergency': return <AlertCircle className="w-4 h-4" />;
      case 'surgery': return <Activity className="w-4 h-4" />;
      case 'checkup': return <CheckCircle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  useEffect(() => {
    // Initialize AOS animations
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

  if (selectedRecord) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6" data-aos="fade-down">
            <Button
              variant="outline"
              onClick={() => setSelectedRecord(null)}
              className="mb-4 flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Medical History</span>
            </Button>
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-hospital-green" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Medical Record Details</h1>
                <p className="text-gray-600">Record ID: {selectedRecord.id}</p>
              </div>
            </div>
          </div>

          {/* Detailed Record View */}
          <div className="space-y-6">
            <Card data-aos="fade-up" data-aos-delay="200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getTypeIcon(selectedRecord.type)}
                    <span>{selectedRecord.diagnosis}</span>
                  </div>
                  <Badge className={getSeverityColor(selectedRecord.severity)}>
                    {selectedRecord.severity} priority
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Visit Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>Date: {selectedRecord.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span>Doctor: {selectedRecord.doctor}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span>Department: {selectedRecord.department}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Symptoms</h3>
                      <ul className="space-y-1">
                        {selectedRecord.symptoms.map((symptom, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-hospital-green rounded-full" />
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Vital Signs</h3>
                      <div className="space-y-2 text-sm">
                        {Object.entries(selectedRecord.vitals).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Treatment</h3>
                      <p className="text-sm text-gray-600">{selectedRecord.treatment}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Doctor's Notes</h3>
                  <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                    {selectedRecord.notes}
                  </p>
                </div>

                <div className="mt-6 flex space-x-4">
                  <Button className="flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download Report</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Print Record</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8" data-aos="fade-down">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="w-8 h-8 text-hospital-green" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Medical History</h1>
              <p className="text-gray-600">Complete record of your medical visits and treatments</p>
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
                  <option value="all">All Records</option>
                  <option value="consultation">Consultations</option>
                  <option value="emergency">Emergency</option>
                  <option value="surgery">Surgery</option>
                  <option value="checkup">Checkups</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Records List */}
        <div className="space-y-4">
          {filteredRecords.map((record, index) => (
            <Card 
              key={record.id} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
              onClick={() => setSelectedRecord(record)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      record.type === 'emergency' ? 'bg-red-100 text-red-600' :
                      record.type === 'surgery' ? 'bg-blue-100 text-blue-600' :
                      record.type === 'consultation' ? 'bg-green-100 text-green-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {getTypeIcon(record.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{record.diagnosis}</h3>
                      <p className="text-sm text-gray-600">{record.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getSeverityColor(record.severity)}>
                      {record.severity}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {record.date}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{record.doctor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 capitalize">{record.status}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{record.type}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 line-clamp-2">{record.notes}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    {record.symptoms.slice(0, 2).map((symptom, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {symptom}
                      </Badge>
                    ))}
                    {record.symptoms.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{record.symptoms.length - 2} more
                      </Badge>
                    )}
                  </div>
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

        {filteredRecords.length === 0 && (
          <Card data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-12 text-center">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Medical Records Found</h3>
              <p className="text-gray-600">
                {searchTerm || filterType !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'Your medical history will appear here after your visits.'}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}