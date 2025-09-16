import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { 
  TestTube, 
  Calendar, 
  Download, 
  Search, 
  Filter,
  Eye,
  Heart,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowLeft,
  FileText,
  User
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function LabResults() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedResult, setSelectedResult] = useState(null);

  // Mock lab results data
  const labResults = [
    {
      id: 'LR001',
      testName: 'Complete Blood Count (CBC)',
      orderDate: '2024-01-15',
      resultDate: '2024-01-15',
      doctor: 'Dr. Gireesha Reddy',
      status: 'completed',
      category: 'Hematology',
      priority: 'routine',
      results: [
        { parameter: 'Hemoglobin', value: 14.2, unit: 'g/dL', normalRange: '12.0-16.0', status: 'normal' },
        { parameter: 'White Blood Cells', value: 8.5, unit: '10³/μL', normalRange: '4.0-11.0', status: 'normal' },
        { parameter: 'Red Blood Cells', value: 4.8, unit: '10⁶/μL', normalRange: '4.2-5.4', status: 'normal' },
        { parameter: 'Platelets', value: 350, unit: '10³/μL', normalRange: '150-450', status: 'normal' },
        { parameter: 'Hematocrit', value: 42.1, unit: '%', normalRange: '36.0-46.0', status: 'normal' }
      ],
      summary: 'All blood parameters are within normal limits. No abnormal findings detected.',
      recommendations: 'Continue regular monitoring. Maintain healthy diet and exercise routine.'
    },
    {
      id: 'LR002',
      testName: 'Lipid Profile',
      orderDate: '2024-01-12',
      resultDate: '2024-01-12',
      doctor: 'Dr. Gireesha Reddy',
      status: 'completed',
      category: 'Chemistry',
      priority: 'routine',
      results: [
        { parameter: 'Total Cholesterol', value: 220, unit: 'mg/dL', normalRange: '<200', status: 'high' },
        { parameter: 'HDL Cholesterol', value: 45, unit: 'mg/dL', normalRange: '>40', status: 'normal' },
        { parameter: 'LDL Cholesterol', value: 145, unit: 'mg/dL', normalRange: '<100', status: 'high' },
        { parameter: 'Triglycerides', value: 180, unit: 'mg/dL', normalRange: '<150', status: 'high' },
        { parameter: 'VLDL Cholesterol', value: 36, unit: 'mg/dL', normalRange: '<30', status: 'high' }
      ],
      summary: 'Elevated cholesterol levels detected. Requires dietary modifications and lifestyle changes.',
      recommendations: 'Follow low-cholesterol diet. Regular exercise recommended. Follow-up in 3 months.'
    },
    {
      id: 'LR003',
      testName: 'Liver Function Test',
      orderDate: '2024-01-10',
      resultDate: '2024-01-10',
      doctor: 'Dr. Pavani',
      status: 'completed',
      category: 'Chemistry',
      priority: 'urgent',
      results: [
        { parameter: 'ALT (SGPT)', value: 45, unit: 'U/L', normalRange: '7-56', status: 'normal' },
        { parameter: 'AST (SGOT)', value: 38, unit: 'U/L', normalRange: '10-40', status: 'normal' },
        { parameter: 'Alkaline Phosphatase', value: 85, unit: 'U/L', normalRange: '44-147', status: 'normal' },
        { parameter: 'Total Bilirubin', value: 1.2, unit: 'mg/dL', normalRange: '0.3-1.2', status: 'normal' },
        { parameter: 'Direct Bilirubin', value: 0.3, unit: 'mg/dL', normalRange: '0.0-0.3', status: 'normal' }
      ],
      summary: 'Liver function tests are normal. No evidence of liver dysfunction.',
      recommendations: 'Continue current medications. Regular monitoring not required unless symptoms develop.'
    },
    {
      id: 'LR004',
      testName: 'Thyroid Function Test',
      orderDate: '2024-01-08',
      resultDate: '2024-01-09',
      doctor: 'Dr. Gireesha Reddy',
      status: 'completed',
      category: 'Endocrinology',
      priority: 'routine',
      results: [
        { parameter: 'TSH', value: 2.5, unit: 'mIU/L', normalRange: '0.4-4.0', status: 'normal' },
        { parameter: 'Free T4', value: 1.3, unit: 'ng/dL', normalRange: '0.8-1.8', status: 'normal' },
        { parameter: 'Free T3', value: 3.2, unit: 'pg/mL', normalRange: '2.3-4.2', status: 'normal' }
      ],
      summary: 'Thyroid function is normal. No evidence of hypo or hyperthyroidism.',
      recommendations: 'No specific treatment required. Continue regular health monitoring.'
    },
    {
      id: 'LR005',
      testName: 'Blood Glucose Test',
      orderDate: '2024-01-05',
      resultDate: '2024-01-05',
      doctor: 'Dr. Gireesha Reddy',
      status: 'pending',
      category: 'Chemistry',
      priority: 'routine',
      results: [],
      summary: 'Results pending. Expected completion by end of day.',
      recommendations: 'Results will be available shortly.'
    }
  ];

  const filteredResults = labResults.filter(result => {
    const matchesSearch = result.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || result.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'high': return <TrendingUp className="w-4 h-4 text-red-600" />;
      case 'low': return <TrendingDown className="w-4 h-4 text-blue-600" />;
      default: return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-100 text-green-800 border-green-200';
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'routine': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateAbnormalCount = (results: any[]) => {
    return results.filter(r => r.status !== 'normal').length;
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

  if (selectedResult) {
    const abnormalResults = selectedResult.results.filter(r => r.status !== 'normal');
    const normalResults = selectedResult.results.filter(r => r.status === 'normal');
    
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6" data-aos="fade-down">
            <Button
              variant="outline"
              onClick={() => setSelectedResult(null)}
              className="mb-4 flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Lab Results</span>
            </Button>
            <div className="flex items-center space-x-3">
              <TestTube className="w-8 h-8 text-hospital-green" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{selectedResult.testName}</h1>
                <p className="text-gray-600">Test ID: {selectedResult.id}</p>
              </div>
            </div>
          </div>

          {/* Test Overview */}
          <Card className="mb-6" data-aos="fade-up" data-aos-delay="200">
            <CardHeader>
              <CardTitle>Test Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Order Date: {selectedResult.orderDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Result Date: {selectedResult.resultDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Ordered by: {selectedResult.doctor}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Category: {selectedResult.category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getPriorityColor(selectedResult.priority)}>
                      {selectedResult.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">
                      {selectedResult.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Summary */}
          {selectedResult.results.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" data-aos="fade-up" data-aos-delay="300">
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Normal Results</p>
                      <p className="text-2xl font-bold">{normalResults.length}</p>
                    </div>
                    <CheckCircle className="w-8 h-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Abnormal Results</p>
                      <p className="text-2xl font-bold">{abnormalResults.length}</p>
                    </div>
                    <AlertTriangle className="w-8 h-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Total Parameters</p>
                      <p className="text-2xl font-bold">{selectedResult.results.length}</p>
                    </div>
                    <TestTube className="w-8 h-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Detailed Results */}
          {selectedResult.results.length > 0 && (
            <Card className="mb-6" data-aos="fade-up" data-aos-delay="400">
              <CardHeader>
                <CardTitle>Detailed Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedResult.results.map((result, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(result.status)}
                          <h3 className="font-semibold text-gray-900">{result.parameter}</h3>
                        </div>
                        <Badge className={getStatusColor(result.status)}>
                          {result.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Result: </span>
                          <span className="font-medium">{result.value} {result.unit}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Normal Range: </span>
                          <span className="font-medium">{result.normalRange} {result.unit}</span>
                        </div>
                        <div className="md:text-right">
                          {result.status !== 'normal' && (
                            <span className={`inline-flex items-center space-x-1 text-xs px-2 py-1 rounded-full ${
                              result.status === 'high' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                              {result.status === 'high' ? 
                                <TrendingUp className="w-3 h-3" /> : 
                                <TrendingDown className="w-3 h-3" />
                              }
                              <span>{result.status === 'high' ? 'Above Normal' : 'Below Normal'}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Summary and Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="500">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{selectedResult.summary}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{selectedResult.recommendations}</p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-up" data-aos-delay="600">
            <Button className="flex items-center space-x-2 bg-hospital-green hover:bg-hospital-green/90">
              <Download className="w-4 h-4" />
              <span>Download Report</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Print Report</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Share with Doctor</span>
            </Button>
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
            <TestTube className="w-8 h-8 text-hospital-green" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Lab Results</h1>
              <p className="text-gray-600">View and download your laboratory test results</p>
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
                    placeholder="Search by test name, doctor, or category..."
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
                  <option value="all">All Results</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lab Results List */}
        <div className="space-y-4">
          {filteredResults.map((result, index) => (
            <Card 
              key={result.id} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
              onClick={() => result.status === 'completed' && setSelectedResult(result)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-hospital-green/10 rounded-lg">
                      <TestTube className="w-5 h-5 text-hospital-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{result.testName}</h3>
                      <p className="text-sm text-gray-600">{result.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getPriorityColor(result.priority)}>
                      {result.priority}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1">ID: {result.id}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Ordered: {result.orderDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Result: {result.resultDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{result.doctor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={result.status === 'completed' ? 'bg-green-100 text-green-800' : 
                                    result.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-blue-100 text-blue-800'}>
                      {result.status}
                    </Badge>
                  </div>
                </div>

                {result.status === 'completed' && result.results.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Results Overview</span>
                      <span>{calculateAbnormalCount(result.results)} abnormal out of {result.results.length} parameters</span>
                    </div>
                    <Progress 
                      value={((result.results.length - calculateAbnormalCount(result.results)) / result.results.length) * 100} 
                      className="h-2"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 line-clamp-1">{result.summary}</p>
                  <div className="flex space-x-2">
                    {result.status === 'completed' ? (
                      <>
                        <Button size="sm" variant="outline" className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>View Details</span>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>Download</span>
                        </Button>
                      </>
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        {result.status === 'pending' ? 'Processing...' : 'Results Pending'}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <Card data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-12 text-center">
              <TestTube className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Lab Results Found</h3>
              <p className="text-gray-600">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'Your lab results will appear here when available.'}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}