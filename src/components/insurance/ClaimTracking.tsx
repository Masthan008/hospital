import { Search, FileText, Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Claim {
  id: string;
  date: string;
  patientName: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected' | 'processing';
  documents: number;
}

export function ClaimTracking() {
  const [trackingId, setTrackingId] = useState('');
  const [activeClaim, setActiveClaim] = useState<Claim | null>(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Mock claims data - in a real app, this would come from an API
  const mockClaims: Claim[] = [
    {
      id: 'CLM-2023-05678',
      date: '2023-11-15',
      patientName: 'Rahul Sharma',
      amount: 12500,
      status: 'approved',
      documents: 3
    },
    {
      id: 'CLM-2023-05679',
      date: '2023-11-18',
      patientName: 'Priya Patel',
      amount: 8500,
      status: 'processing',
      documents: 2
    },
    {
      id: 'CLM-2023-05680',
      date: '2023-11-20',
      patientName: 'Amit Kumar',
      amount: 21500,
      status: 'pending',
      documents: 4
    },
    {
      id: 'CLM-2023-05681',
      date: '2023-11-22',
      patientName: 'Neha Gupta',
      amount: 15000,
      status: 'rejected',
      documents: 5
    }
  ];

  const handleTrackClaim = () => {
    if (!trackingId) return;
    
    const claim = mockClaims.find(c => c.id === trackingId);
    setActiveClaim(claim || null);
    setSearchPerformed(true);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <Clock className="h-5 w-5 text-amber-500" />;
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-amber-100 text-amber-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Track Your Claim</h3>
        <p className="text-sm text-gray-500">Enter your claim ID to check the status</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Enter Claim ID (e.g., CLM-2023-05678)"
            className="pl-10"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleTrackClaim()}
          />
        </div>
        <Button 
          onClick={handleTrackClaim}
          className="bg-hospital-green hover:bg-hospital-green/90"
        >
          Track Claim
        </Button>
      </div>

      {searchPerformed && (
        <div className="space-y-6">
          {activeClaim ? (
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Claim #{activeClaim.id}</h4>
                    <p className="text-sm text-gray-500">Filed on {new Date(activeClaim.date).toLocaleDateString()}</p>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(activeClaim.status)}`}>
                    {getStatusIcon(activeClaim.status)}
                    <span className="ml-1.5">{getStatusText(activeClaim.status)}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Patient Name</p>
                    <p className="mt-1 text-gray-900">{activeClaim.patientName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Claim Amount</p>
                    <p className="mt-1 text-gray-900">₹{activeClaim.amount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Documents</p>
                    <p className="mt-1 text-gray-900 flex items-center">
                      <FileText className="h-4 w-4 mr-1.5 text-gray-400" />
                      {activeClaim.documents} files
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="text-sm font-medium text-gray-700 mb-4">Claim Status</h5>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    <div className="space-y-8">
                      {[
                        { status: 'pending', label: 'Claim Submitted', date: activeClaim.date },
                        { status: 'processing', label: 'Under Review', date: '2023-11-16' },
                        { status: activeClaim.status, label: activeClaim.status === 'approved' ? 'Approved' : activeClaim.status === 'rejected' ? 'Claim Rejected' : 'In Progress', date: '2023-11-18' },
                        ...(activeClaim.status === 'approved' ? [{ status: 'approved', label: 'Payment Processed', date: '2023-11-19' }] : [])
                      ].map((step, index) => (
                        <div key={index} className="relative pl-10">
                          <div className={`absolute left-0 top-0 h-8 w-8 rounded-full flex items-center justify-center ${
                            step.status === 'pending' ? 'bg-amber-100 text-amber-600' : 
                            step.status === 'processing' ? 'bg-blue-100 text-blue-600' :
                            step.status === 'approved' ? 'bg-green-100 text-green-600' :
                            'bg-red-100 text-red-600'
                          }`}>
                            {step.status === 'pending' && <Clock className="h-4 w-4" />}
                            {step.status === 'processing' && <AlertCircle className="h-4 w-4" />}
                            {step.status === 'approved' && <CheckCircle2 className="h-4 w-4" />}
                            {step.status === 'rejected' && <XCircle className="h-4 w-4" />}
                          </div>
                          <h6 className="text-sm font-medium text-gray-900">{step.label}</h6>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {new Date(step.date).toLocaleDateString('en-IN', { 
                              day: 'numeric', 
                              month: 'short', 
                              year: 'numeric' 
                            })}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h5 className="text-sm font-medium text-gray-700 mb-3">Next Steps</h5>
                  {activeClaim.status === 'pending' && (
                    <p className="text-sm text-gray-600">
                      Your claim is being processed. We'll update the status once our team reviews your documents.
                    </p>
                  )}
                  {activeClaim.status === 'processing' && (
                    <p className="text-sm text-gray-600">
                      Our team is currently reviewing your claim. You'll receive an update within 2-3 business days.
                    </p>
                  )}
                  {activeClaim.status === 'approved' && (
                    <p className="text-sm text-gray-600">
                      Your claim has been approved! The payment will be processed within 5-7 business days.
                    </p>
                  )}
                  {activeClaim.status === 'rejected' && (
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">
                        Your claim has been rejected. Please contact our support team for more information.
                      </p>
                      <Button variant="outline" size="sm" className="border-red-200 text-red-700 hover:bg-red-50">
                        Contact Support
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <FileText className="h-12 w-12 mx-auto text-gray-400" />
              <h4 className="mt-3 text-sm font-medium text-gray-900">No claim found</h4>
              <p className="mt-1 text-sm text-gray-500">Please check your claim ID and try again.</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4"
                onClick={() => {
                  setSearchPerformed(false);
                  setTrackingId('');
                }}
              >
                Try Again
              </Button>
            </div>
          )}

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Need help with your claim?</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>Contact our claims support team at <a href="tel:+919000000000" className="font-medium underline">+91 90000 00000</a> or email <a href="mailto:claims@example.com" className="font-medium underline">claims@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
