import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Pill, 
  Calendar, 
  Download, 
  Search, 
  Filter,
  Eye,
  Heart,
  Clock,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  User,
  FileText,
  ShoppingCart,
  Phone,
  Info
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function PrescriptionManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  // Mock prescription data
  const prescriptions = [
    {
      id: 'RX001',
      prescriptionDate: '2024-01-15',
      doctor: 'Dr. Gireesha Reddy',
      department: 'General Medicine',
      visitType: 'Follow-up Consultation',
      status: 'active',
      validUntil: '2024-02-15',
      medications: [
        {
          name: 'Amlodipine 5mg',
          genericName: 'Amlodipine Besylate',
          dosage: '5mg',
          frequency: 'Once daily',
          duration: '30 days',
          instructions: 'Take with or without food. Same time each day.',
          quantity: '30 tablets',
          refills: 2,
          remainingRefills: 2,
          sideEffects: ['Dizziness', 'Swelling of ankles'],
          precautions: 'Monitor blood pressure regularly'
        },
        {
          name: 'Metformin 500mg',
          genericName: 'Metformin Hydrochloride',
          dosage: '500mg',
          frequency: 'Twice daily',
          duration: '30 days',
          instructions: 'Take with meals to reduce stomach upset.',
          quantity: '60 tablets',
          refills: 3,
          remainingRefills: 3,
          sideEffects: ['Nausea', 'Diarrhea', 'Metallic taste'],
          precautions: 'Take with food. Monitor blood sugar levels.'
        }
      ],
      diagnosis: 'Hypertension and Type 2 Diabetes',
      notes: 'Continue current medications. Monitor blood pressure and glucose levels. Follow-up in 4 weeks.',
      pharmacyNotes: 'Patient counseled on medication timing and side effects.'
    },
    {
      id: 'RX002',
      prescriptionDate: '2024-01-12',
      doctor: 'Dr. Anusha',
      department: 'Emergency Medicine',
      visitType: 'Emergency Visit',
      status: 'completed',
      validUntil: '2024-01-19',
      medications: [
        {
          name: 'Omeprazole 20mg',
          genericName: 'Omeprazole',
          dosage: '20mg',
          frequency: 'Once daily',
          duration: '7 days',
          instructions: 'Take 30 minutes before breakfast on empty stomach.',
          quantity: '7 capsules',
          refills: 0,
          remainingRefills: 0,
          sideEffects: ['Headache', 'Stomach pain'],
          precautions: 'Do not crush or chew capsules'
        },
        {
          name: 'Ondansetron 4mg',
          genericName: 'Ondansetron HCl',
          dosage: '4mg',
          frequency: 'As needed',
          duration: '3 days',
          instructions: 'Take for nausea. Maximum 3 doses per day.',
          quantity: '9 tablets',
          refills: 0,
          remainingRefills: 0,
          sideEffects: ['Drowsiness', 'Constipation'],
          precautions: 'Do not exceed recommended dosage'
        }
      ],
      diagnosis: 'Acute Gastritis',
      notes: 'Short-term treatment for gastritis. Return if symptoms persist or worsen.',
      pharmacyNotes: 'Patient advised to take omeprazole before meals.'
    },
    {
      id: 'RX003',
      prescriptionDate: '2024-01-10',
      doctor: 'Dr. Srujan',
      department: 'Dental Surgery',
      visitType: 'Post-surgical Care',
      status: 'completed',
      validUntil: '2024-01-17',
      medications: [
        {
          name: 'Amoxicillin 500mg',
          genericName: 'Amoxicillin Trihydrate',
          dosage: '500mg',
          frequency: 'Three times daily',
          duration: '7 days',
          instructions: 'Take with food. Complete the full course.',
          quantity: '21 capsules',
          refills: 0,
          remainingRefills: 0,
          sideEffects: ['Diarrhea', 'Nausea', 'Rash'],
          precautions: 'Complete full course even if feeling better'
        },
        {
          name: 'Ibuprofen 400mg',
          genericName: 'Ibuprofen',
          dosage: '400mg',
          frequency: 'Every 6-8 hours',
          duration: '5 days',
          instructions: 'Take with food or milk to prevent stomach upset.',
          quantity: '20 tablets',
          refills: 0,
          remainingRefills: 0,
          sideEffects: ['Stomach upset', 'Dizziness'],
          precautions: 'Do not exceed 1200mg in 24 hours'
        }
      ],
      diagnosis: 'Post-operative Care - Wisdom Tooth Extraction',
      notes: 'Antibiotics to prevent infection. Pain management for 5 days. Follow post-op instructions.',
      pharmacyNotes: 'Patient counseled on antibiotic compliance and pain management.'
    },
    {
      id: 'RX004',
      prescriptionDate: '2024-01-08',
      doctor: 'Dr. Gireesha Reddy',
      department: 'General Medicine',
      visitType: 'Routine Consultation',
      status: 'expired',
      validUntil: '2024-01-15',
      medications: [
        {
          name: 'Vitamin D3 1000 IU',
          genericName: 'Cholecalciferol',
          dosage: '1000 IU',
          frequency: 'Once daily',
          duration: '30 days',
          instructions: 'Take with largest meal of the day.',
          quantity: '30 tablets',
          refills: 2,
          remainingRefills: 1,
          sideEffects: ['Rarely: nausea, weakness'],
          precautions: 'Take with fat-containing meal for better absorption'
        }
      ],
      diagnosis: 'Vitamin D Deficiency',
      notes: 'Supplement for vitamin D deficiency. Recheck levels in 3 months.',
      pharmacyNotes: 'Patient advised on optimal timing for vitamin D absorption.'
    }
  ];

  const filteredPrescriptions = prescriptions.filter(prescription => {
    const matchesSearch = prescription.medications.some(med => 
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.genericName.toLowerCase().includes(searchTerm.toLowerCase())
    ) || prescription.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
       prescription.diagnosis.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || prescription.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'completed': return <Clock className="w-4 h-4 text-blue-600" />;
      case 'expired': return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
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

  if (selectedPrescription) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6" data-aos="fade-down">
            <Button
              variant="outline"
              onClick={() => setSelectedPrescription(null)}
              className="mb-4 flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Prescriptions</span>
            </Button>
            <div className="flex items-center space-x-3">
              <Pill className="w-8 h-8 text-hospital-green" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Prescription Details</h1>
                <p className="text-gray-600">Prescription ID: {selectedPrescription.id}</p>
              </div>
            </div>
          </div>

          {/* Prescription Overview */}
          <Card className="mb-6" data-aos="fade-up" data-aos-delay="200">
            <CardHeader>
              <CardTitle>Prescription Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Date: {selectedPrescription.prescriptionDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Doctor: {selectedPrescription.doctor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Department: {selectedPrescription.department}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Valid Until: {selectedPrescription.validUntil}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(selectedPrescription.status)}>
                      {selectedPrescription.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Visit: {selectedPrescription.visitType}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Diagnosis</h3>
                <p className="text-gray-600">{selectedPrescription.diagnosis}</p>
              </div>
            </CardContent>
          </Card>

          {/* Medications List */}
          <Card className="mb-6" data-aos="fade-up" data-aos-delay="300">
            <CardHeader>
              <CardTitle>Prescribed Medications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {selectedPrescription.medications.map((medication, index) => (
                  <div key={index} className="p-6 border border-gray-200 rounded-lg bg-white">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{medication.name}</h3>
                        <p className="text-sm text-gray-600">Generic: {medication.genericName}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{medication.dosage}</Badge>
                        <p className="text-xs text-gray-500 mt-1">Qty: {medication.quantity}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Frequency:</span>
                          <span className="font-medium">{medication.frequency}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">{medication.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Refills Remaining:</span>
                          <span className="font-medium">{medication.remainingRefills}/{medication.refills}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="text-gray-600">Instructions:</span>
                          <p className="font-medium mt-1">{medication.instructions}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Side Effects</h4>
                        <div className="flex flex-wrap gap-1">
                          {medication.sideEffects.map((effect, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {effect}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Precautions</h4>
                        <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                          <Info className="w-4 h-4 text-yellow-600 inline mr-2" />
                          {medication.precautions}
                        </p>
                      </div>
                    </div>

                    {medication.remainingRefills > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Button size="sm" className="flex items-center space-x-2">
                          <ShoppingCart className="w-4 h-4" />
                          <span>Order Refill</span>
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Doctor's Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" data-aos="fade-up" data-aos-delay="400">
            <Card>
              <CardHeader>
                <CardTitle>Doctor's Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{selectedPrescription.notes}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pharmacy Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{selectedPrescription.pharmacyNotes}</p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="500">
            <div className="space-y-4">
              <Button className="w-full flex items-center justify-center space-x-2 bg-hospital-green hover:bg-hospital-green/90">
                <Download className="w-4 h-4" />
                <span>Download Prescription</span>
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Print Prescription</span>
              </Button>
            </div>
            <div className="space-y-4">
              <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Order from Pharmacy</span>
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Contact Pharmacy</span>
              </Button>
            </div>
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
            <Pill className="w-8 h-8 text-hospital-green" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Prescription Management</h1>
              <p className="text-gray-600">View and manage your prescriptions and medications</p>
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
                    placeholder="Search by medication name, doctor, or diagnosis..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-hospital-green"
                >
                  <option value="all">All Prescriptions</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="expired">Expired</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prescriptions List */}
        <div className="space-y-4">
          {filteredPrescriptions.map((prescription, index) => (
            <Card 
              key={prescription.id} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
              onClick={() => setSelectedPrescription(prescription)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-hospital-green/10 rounded-lg">
                      <Pill className="w-5 h-5 text-hospital-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {prescription.medications.length} Medication{prescription.medications.length > 1 ? 's' : ''}
                      </h3>
                      <p className="text-sm text-gray-600">{prescription.diagnosis}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getStatusColor(prescription.status)}>
                      {getStatusIcon(prescription.status)}
                      <span className="ml-1">{prescription.status}</span>
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1">ID: {prescription.id}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Date: {prescription.prescriptionDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{prescription.doctor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Valid until: {prescription.validUntil}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Medications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {prescription.medications.slice(0, 3).map((med, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {med.name}
                      </Badge>
                    ))}
                    {prescription.medications.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{prescription.medications.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 line-clamp-1">{prescription.notes}</p>
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

        {filteredPrescriptions.length === 0 && (
          <Card data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-12 text-center">
              <Pill className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Prescriptions Found</h3>
              <p className="text-gray-600">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'Your prescriptions will appear here when available.'}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}