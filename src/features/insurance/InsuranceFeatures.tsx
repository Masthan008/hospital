import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Search, FileText, Calculator, ShieldCheck, Upload, Download, Clock, Plus, X } from 'lucide-react';
import { GlassCard, GlassPanel } from '@/components/ui/glass-card';

export default function InsuranceFeatures() {
  const [, setActiveTab] = useState('tracker');
  const [claimId, setClaimId] = useState('');
  const [coverageAmount, setCoverageAmount] = useState(500000);

  // Sample claim data
  const claimStatus = {
    id: 'CLM-2023-00456',
    status: 'In Progress',
    progress: 65,
    submitted: '2023-06-15',
    estimatedCompletion: '2023-07-30',
    documents: ['Medical_Report.pdf', 'Prescription.pdf', 'ID_Proof.pdf'],
    updates: [
      { date: '2023-06-20', status: 'Documents Verified', description: 'All submitted documents have been verified.' },
      { date: '2023-06-25', status: 'Processing', description: 'Claim is being processed by the team.' },
    ]
  };

  // Sample policies for comparison - keeping for future use
  // const policies = [
  //   {
  //     id: 1,
  //     name: 'Health Plus Gold',
  //     provider: 'Apollo Munich',
  //     coverage: 1000000,
  //     premium: 20000,
  //     features: ['Cashless Treatment', 'Pre & Post Hospitalization', 'Day Care', 'Ambulance Cover'],
  //     rating: 4.5
  //   },
  //   {
  //     id: 2,
  //     name: 'Family Health Shield',
  //     provider: 'Star Health',
  //     coverage: 1500000,
  //     premium: 25000,
  //     features: ['Cashless Treatment', 'Pre & Post Hospitalization', 'Maternity', 'Dental'],
  //     rating: 4.2
  //   },
  // ];

  const calculatePremium = () => {
    // Simple premium calculation logic
    const basePremium = 10000;
    const ageFactor = 1.2; // Example factor
    const coverageFactor = coverageAmount / 1000000;
    return Math.round(basePremium * ageFactor * coverageFactor);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <GlassPanel className="p-8 mb-12 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-hospital-blue to-hospital-green bg-clip-text text-transparent mb-4">
            Insurance Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Manage your health insurance with our comprehensive tools and services
          </p>
          <div className="mt-6 max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search claims, policies, or documents..."
              className="pl-10 w-full bg-white/50 backdrop-blur-sm border-0 focus-visible:ring-2 focus-visible:ring-hospital-blue/50"
            />
          </div>
        </GlassPanel>

        <Tabs defaultValue="tracker" className="w-full" onValueChange={setActiveTab}>
        <GlassPanel className="p-1.5 mb-8 w-full max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <TabsList className="grid w-full grid-cols-4 bg-transparent gap-1">
            <TabsTrigger 
              value="tracker" 
              className="flex items-center justify-center gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-hospital-blue data-[state=active]:shadow-sm rounded-lg transition-all py-2"
            >
              <FileText className="h-4 w-4" />
              <span className="text-sm">Claims</span>
            </TabsTrigger>
            <TabsTrigger 
              value="compare" 
              className="flex items-center justify-center gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-hospital-blue data-[state=active]:shadow-sm rounded-lg transition-all py-2"
            >
              <Search className="h-4 w-4" />
              <span className="text-sm">Compare</span>
            </TabsTrigger>
            <TabsTrigger 
              value="calculator" 
              className="flex items-center justify-center gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-hospital-blue data-[state=active]:shadow-sm rounded-lg transition-all py-2"
            >
              <Calculator className="h-4 w-4" />
              <span className="text-sm">Calculator</span>
            </TabsTrigger>
            <TabsTrigger 
              value="documents" 
              className="flex items-center justify-center gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-hospital-blue data-[state=active]:shadow-sm rounded-lg transition-all py-2"
            >
                <ShieldCheck className="h-4 w-4" />
                <span className="text-sm">Documents</span>
            </TabsTrigger>
          </TabsList>
        </GlassPanel>

        {/* Claim Tracker Tab */}
        <TabsContent value="tracker" className="space-y-8">
          <GlassCard className="max-w-3xl mx-auto p-8" data-aos="fade-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Track Your Claim</h2>
              <p className="text-gray-600">Enter your claim ID to check the status</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  placeholder="Enter Claim ID" 
                  value={claimId}
                  onChange={(e) => setClaimId(e.target.value)}
                  className="pl-10 w-full bg-white/50 backdrop-blur-sm border-0 focus-visible:ring-2 focus-visible:ring-hospital-blue/50 h-12"
                />
              </div>
              <Button className="bg-hospital-blue hover:bg-hospital-blue/90 h-12 px-6">
                Track Claim
              </Button>
            </div>

            {claimId && (
              <div className="space-y-8">
                <GlassPanel className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Claim Status</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className={`w-3 h-3 rounded-full ${
                          claimStatus.status === 'Approved' ? 'bg-green-500' : 
                          claimStatus.status === 'In Progress' ? 'bg-blue-500' : 
                          'bg-yellow-500'
                        }`}></div>
                        <span className="text-gray-700">{claimStatus.status}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Progress</p>
                      <p className="text-xl font-bold text-hospital-blue">{claimStatus.progress}%</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-hospital-blue to-hospital-green transition-all duration-1000 ease-out"
                        style={{ width: `${claimStatus.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </GlassPanel>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GlassPanel className="p-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">CLAIM DETAILS</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gray-500">Claim ID</p>
                        <p className="font-medium">{claimStatus.id}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Submitted On</p>
                        <p className="font-medium">{claimStatus.submitted}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Estimated Completion</p>
                        <p className="font-medium flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          {claimStatus.estimatedCompletion}
                        </p>
                      </div>
                    </div>
                  </GlassPanel>
                  
                  <GlassPanel className="p-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">DOCUMENTS</h3>
                    <div className="space-y-2">
                      {claimStatus.documents.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">{doc}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </GlassPanel>
                </div>
                
                <GlassPanel className="p-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">UPDATES</h3>
                  <div className="space-y-4">
                    {claimStatus.updates.map((update, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-2 bg-hospital-green rounded-full mt-2"></div>
                          {index < claimStatus.updates.length - 1 && (
                            <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{update.status}</div>
                          <p className="text-sm text-gray-600">{update.description}</p>
                          <div className="text-xs text-gray-400 mt-1">{update.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              </div>
            )}
          </GlassCard>
        </TabsContent>

        {/* Coverage Calculator Tab */}
        <TabsContent value="calculator">
          <Card className="max-w-2xl mx-auto" data-aos="fade-up">
            <CardHeader>
              <CardTitle>Coverage Calculator</CardTitle>
              <CardDescription>Estimate your ideal coverage amount and premium</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Desired Coverage Amount</label>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500">₹</span>
                  <Input 
                    type="range" 
                    min="100000" 
                    max="5000000" 
                    step="100000"
                    value={coverageAmount}
                    onChange={(e) => setCoverageAmount(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="font-medium w-32 text-right">
                    ₹{coverageAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 Lakh</span>
                  <span>50 Lakhs</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Age Group</label>
                <div className="grid grid-cols-3 gap-4">
                  {['Below 30', '30-50', '50+'].map((ageGroup, index) => (
                    <Button 
                      key={index} 
                      variant="outline"
                      className={index === 1 ? 'border-hospital-green text-hospital-green' : ''}
                    >
                      {ageGroup}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Coverage Type</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Individual', 'Family Floater'].map((type, index) => (
                    <Button 
                      key={index} 
                      variant="outline"
                      className={index === 0 ? 'border-hospital-green text-hospital-green' : ''}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Estimated Premium</h4>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-hospital-green">
                    ₹{calculatePremium().toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">per year</span>
                </div>
              </div>
              
              <Button className="w-full">
                Get Personalized Quote
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Document Center Tab */}
        <TabsContent value="documents">
          <Card className="max-w-4xl mx-auto" data-aos="fade-up">
            <CardHeader>
              <CardTitle>Document Center</CardTitle>
              <CardDescription>Upload and manage your insurance documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h4 className="font-medium mb-1">Upload Documents</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Drag and drop files here, or click to browse
                </p>
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" /> Select Files
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  Supported formats: PDF, JPG, PNG (Max 10MB)
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Your Documents</h4>
                <div className="space-y-2">
                  {claimStatus.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <span className="text-sm">{doc}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        </Tabs>
        
        {/* Floating Action Button */}
        <button 
          className="fixed bottom-8 right-8 bg-hospital-blue hover:bg-hospital-blue/90 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center z-50"
          onClick={() => console.log('New claim')}
        >
          <Plus className="h-6 w-6" />
          <span className="ml-2 hidden sm:inline">New Claim</span>
        </button>
      </div>
    </div>
  );
}
