import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, ChevronDown, ChevronUp, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Policy {
  id: string;
  name: string;
  insurer: string;
  premium: number;
  features: {
    roomRent: string;
    prePostHospitalization: string;
    dayCareProcedures: boolean;
    healthCheckup: boolean;
    ambulanceCover: string;
    maternityCover: boolean;
    preExistingDiseases: string;
    noClaimBonus: string;
    restorationBenefit: boolean;
    ayshCoverage: boolean;
    criticalIllness: boolean;
  };
  networkHospitals: number;
  claimSettlementRatio: number;
  waitingPeriod: string;
  policyTerm: string;
}

export function PolicyComparison() {
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>(['basic', 'standard']);
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    coverage: true,
    benefits: true,
    network: true,
    terms: true
  });

  const policies: Policy[] = [
    {
      id: 'basic',
      name: 'Health Guard',
      insurer: 'Apollo Munich',
      premium: 5000,
      features: {
        roomRent: 'Up to ₹5,000 per day',
        prePostHospitalization: '30/60 days',
        dayCareProcedures: true,
        healthCheckup: false,
        ambulanceCover: 'Up to ₹2,000 per hospitalization',
        maternityCover: false,
        preExistingDiseases: '4 years waiting',
        noClaimBonus: '10% per year (max 50%)',
        restorationBenefit: false,
        ayshCoverage: false,
        criticalIllness: false
      },
      networkHospitals: 5000,
      claimSettlementRatio: 92.5,
      waitingPeriod: '30 days',
      policyTerm: '1 year'
    },
    {
      id: 'standard',
      name: 'Health Plus',
      insurer: 'Star Health',
      premium: 7500,
      features: {
        roomRent: 'Up to ₹7,500 per day',
        prePostHospitalization: '60/90 days',
        dayCareProcedures: true,
        healthCheckup: true,
        ambulanceCover: 'Up to ₹3,000 per hospitalization',
        maternityCover: true,
        preExistingDiseases: '3 years waiting',
        noClaimBonus: '10% per year (max 100%)',
        restorationBenefit: true,
        ayshCoverage: true,
        criticalIllness: false
      },
      networkHospitals: 9500,
      claimSettlementRatio: 94.2,
      waitingPeriod: '30 days',
      policyTerm: '1 year'
    },
    {
      id: 'premium',
      name: 'Health Supreme',
      insurer: 'HDFC ERGO',
      premium: 12000,
      features: {
        roomRent: 'No limit',
        prePostHospitalization: '90/180 days',
        dayCareProcedures: true,
        healthCheckup: true,
        ambulanceCover: 'Up to ₹5,000 per hospitalization',
        maternityCover: true,
        preExistingDiseases: '2 years waiting',
        noClaimBonus: '15% per year (max 100%)',
        restorationBenefit: true,
        ayshCoverage: true,
        criticalIllness: true
      },
      networkHospitals: 12000,
      claimSettlementRatio: 95.8,
      waitingPeriod: '15 days',
      policyTerm: '2 years'
    },
    {
      id: 'family',
      name: 'Family Health',
      insurer: 'ICICI Lombard',
      premium: 18000,
      features: {
        roomRent: 'No limit',
        prePostHospitalization: '90/180 days',
        dayCareProcedures: true,
        healthCheckup: true,
        ambulanceCover: 'Up to ₹7,500 per hospitalization',
        maternityCover: true,
        preExistingDiseases: '1 year waiting',
        noClaimBonus: '20% per year (max 100%)',
        restorationBenefit: true,
        ayshCoverage: true,
        criticalIllness: true
      },
      networkHospitals: 15000,
      claimSettlementRatio: 96.3,
      waitingPeriod: '15 days',
      policyTerm: '2 years'
    }
  ];

  const togglePolicy = (policyId: string) => {
    setSelectedPolicies(prev => {
      if (prev.includes(policyId)) {
        if (prev.length > 2) {
          return prev.filter(id => id !== policyId);
        }
        return prev;
      } else {
        if (prev.length < 4) {
          return [...prev, policyId];
        }
        return prev;
      }
    });
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const renderFeatureCell = (value: any, isBoolean = false) => {
    if (isBoolean) {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-gray-300 mx-auto" />
      );
    }
    return <div className="text-center">{value}</div>;
  };

  const renderSection = (title: string, sectionKey: string, rows: {label: string, key: string, isBoolean?: boolean, tooltip?: string}[]) => (
    <div className="border rounded-lg overflow-hidden mb-6">
      <button
        className="w-full px-6 py-4 bg-gray-50 flex justify-between items-center text-left"
        onClick={() => toggleSection(sectionKey)}
      >
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {expandedSections[sectionKey] ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      {expandedSections[sectionKey] && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      {row.label}
                      {row.tooltip && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="ml-1.5 text-gray-400 hover:text-gray-500">
                                <Info className="h-4 w-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p className="text-sm">{row.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  </td>
                  {selectedPolicies.map(policyId => {
                    const policy = policies.find(p => p.id === policyId);
                    if (!policy) return null;
                    const value = policy.features[row.key as keyof typeof policy.features] || policy[row.key as keyof typeof policy];
                    return (
                      <td key={`${policyId}-${row.key}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {renderFeatureCell(value, row.isBoolean)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Compare Health Insurance Policies</h3>
        <p className="text-sm text-gray-500">Select up to 4 policies to compare features and benefits</p>
      </div>

      {/* Policy Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {policies.map(policy => (
          <div 
            key={policy.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selectedPolicies.includes(policy.id) 
                ? 'ring-2 ring-hospital-green border-hospital-green' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => togglePolicy(policy.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">{policy.name}</h4>
                <p className="text-sm text-gray-500">{policy.insurer}</p>
              </div>
              {selectedPolicies.includes(policy.id) ? (
                <div className="h-5 w-5 rounded-full bg-hospital-green text-white flex items-center justify-center">
                  <Check className="h-3.5 w-3.5" />
                </div>
              ) : (
                <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
              )}
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(policy.premium)}
                <span className="text-sm font-normal text-gray-500">/year</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedPolicies.length > 0 ? (
        <div className="space-y-6">
          {/* Summary Row */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                    Policy Details
                  </th>
                  {selectedPolicies.map(policyId => {
                    const policy = policies.find(p => p.id === policyId);
                    if (!policy) return null;
                    return (
                      <th key={policyId} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {policy.name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Premium (Annual)
                  </td>
                  {selectedPolicies.map(policyId => {
                    const policy = policies.find(p => p.id === policyId);
                    if (!policy) return null;
                    return (
                      <td key={`${policyId}-premium`} className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {formatCurrency(policy.premium)}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Network Hospitals
                  </td>
                  {selectedPolicies.map(policyId => {
                    const policy = policies.find(p => p.id === policyId);
                    if (!policy) return null;
                    return (
                      <td key={`${policyId}-hospitals`} className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {policy.networkHospitals.toLocaleString()}+
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Claim Settlement Ratio
                  </td>
                  {selectedPolicies.map(policyId => {
                    const policy = policies.find(p => p.id === policyId);
                    if (!policy) return null;
                    return (
                      <td key={`${policyId}-ratio`} className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {policy.claimSettlementRatio}%
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Coverage Details */}
          {renderSection('Coverage Details', 'coverage', [
            { label: 'Room Rent', key: 'roomRent' },
            { label: 'Pre & Post Hospitalization', key: 'prePostHospitalization' },
            { label: 'Day Care Procedures', key: 'dayCareProcedures', isBoolean: true },
            { label: 'Free Health Check-up', key: 'healthCheckup', isBoolean: true },
            { label: 'Ambulance Cover', key: 'ambulanceCover' },
            { label: 'Maternity Cover', key: 'maternityCover', isBoolean: true },
            { label: 'AYUSH Treatment', key: 'ayshCoverage', isBoolean: true, tooltip: 'Covers Ayurveda, Yoga, Unani, Siddha, and Homeopathy treatments' },
            { label: 'Critical Illness', key: 'criticalIllness', isBoolean: true }
          ])}

          {/* Benefits */}
          {renderSection('Benefits', 'benefits', [
            { label: 'No Claim Bonus', key: 'noClaimBonus', tooltip: 'Bonus for not making any claims in previous years' },
            { label: 'Restoration Benefit', key: 'restorationBenefit', isBoolean: true, tooltip: 'Restores the sum insured after exhaustion in case of multiple hospitalizations' },
            { label: 'Pre-existing Diseases', key: 'preExistingDiseases' },
            { label: 'Policy Term', key: 'policyTerm' },
            { label: 'Initial Waiting Period', key: 'waitingPeriod' }
          ])}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
            <Button variant="outline">
              Download Comparison
            </Button>
            <Button className="bg-hospital-green hover:bg-hospital-green/90">
              Get Callback
            </Button>
            <Button>
              Buy Now
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <div className="mx-auto h-12 w-12 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No policies selected</h3>
          <p className="mt-1 text-sm text-gray-500">Select at least 2 policies to compare</p>
        </div>
      )}
    </div>
  );
}
