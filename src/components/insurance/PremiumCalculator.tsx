import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Info, ArrowRight, Check, Shield, Users, HeartPulse, DollarSign } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Plan {
  id: string;
  name: string;
  basePremium: number;
  features: string[];
  coverage: {
    roomRent: string;
    prePostHospitalization: string;
    dayCareProcedures: boolean;
    healthCheckup: boolean;
    ambulanceCover: boolean;
  };
}

export function PremiumCalculator() {
  const [age, setAge] = useState<number>(30);
  const [coverage, setCoverage] = useState<number>(500000);
  const [familyMembers, setFamilyMembers] = useState<number>(1);
  const [cityTier, setCityTier] = useState<number>(1);
  const [selectedPlan, setSelectedPlan] = useState<string>('basic');
  const [showPlans, setShowPlans] = useState<boolean>(false);
  const [calculatedPremium, setCalculatedPremium] = useState<number | null>(null);

  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Basic Plan',
      basePremium: 5000,
      features: [
        'Room Rent: Up to ₹5,000 per day',
        'Pre & Post Hospitalization: 30/60 days',
        'Day Care Procedures: Covered',
        'Annual Health Check-up: Not included',
        'Ambulance Cover: Up to ₹2,000 per hospitalization'
      ],
      coverage: {
        roomRent: 'Up to ₹5,000 per day',
        prePostHospitalization: '30/60 days',
        dayCareProcedures: true,
        healthCheckup: false,
        ambulanceCover: true
      }
    },
    {
      id: 'standard',
      name: 'Standard Plan',
      basePremium: 8000,
      features: [
        'Room Rent: Up to ₹10,000 per day',
        'Pre & Post Hospitalization: 60/90 days',
        'Day Care Procedures: Covered',
        'Annual Health Check-up: Basic package',
        'Ambulance Cover: Up to ₹5,000 per hospitalization'
      ],
      coverage: {
        roomRent: 'Up to ₹10,000 per day',
        prePostHospitalization: '60/90 days',
        dayCareProcedures: true,
        healthCheckup: true,
        ambulanceCover: true
      }
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      basePremium: 12000,
      features: [
        'Room Rent: No limit',
        'Pre & Post Hospitalization: 90/180 days',
        'Day Care Procedures: Covered',
        'Annual Health Check-up: Comprehensive package',
        'Ambulance Cover: Up to ₹10,000 per hospitalization',
        'Maternity Cover: Included',
        'Domiciliary Treatment: Covered'
      ],
      coverage: {
        roomRent: 'No limit',
        prePostHospitalization: '90/180 days',
        dayCareProcedures: true,
        healthCheckup: true,
        ambulanceCover: true
      }
    }
  ];

  const calculatePremium = () => {
    // Base premium based on plan
    let premium = plans.find(p => p.id === selectedPlan)?.basePremium || 0;
    
    // Age factor
    let ageFactor = 1;
    if (age > 45) ageFactor = 1.5;
    if (age > 60) ageFactor = 2;
    
    // Coverage factor (per lakh)
    const coverageFactor = coverage / 100000;
    
    // Family members factor
    const familyFactor = 1 + ((familyMembers - 1) * 0.5);
    
    // City tier factor (higher for metro cities)
    const cityFactor = cityTier === 1 ? 1.2 : cityTier === 2 ? 1.1 : 1;
    
    // Calculate final premium
    const calculated = premium * ageFactor * coverageFactor * familyFactor * cityFactor;
    setCalculatedPremium(Math.round(calculated));
    setShowPlans(true);
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setShowPlans(false);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Health Insurance Premium Calculator</h3>
        <p className="text-sm text-gray-500">Get an estimate of your health insurance premium</p>
      </div>

      {!showPlans ? (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age of Eldest Member</label>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500">{age} years</span>
              <Slider
                value={[age]}
                onValueChange={(value) => setAge(value[0])}
                min={18}
                max={75}
                step={1}
                className="flex-1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sum Insured</label>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>₹5 Lakhs</span>
                <span>₹50 Lakhs</span>
              </div>
              <Slider
                value={[coverage / 100000]}
                onValueChange={(value) => setCoverage(value[0] * 100000)}
                min={5}
                max={50}
                step={1}
              />
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  {formatCurrency(coverage)} Cover
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Members</label>
              <Select
                value={familyMembers.toString()}
                onValueChange={(value) => setFamilyMembers(parseInt(value))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Individual (1)</SelectItem>
                  <SelectItem value="2">Couple (2)</SelectItem>
                  <SelectItem value="3">Family (3)</SelectItem>
                  <SelectItem value="4">Family (4)</SelectItem>
                  <SelectItem value="5">Family (5)</SelectItem>
                  <SelectItem value="6">Family (6)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City Tier</label>
              <Select
                value={cityTier.toString()}
                onValueChange={(value) => setCityTier(parseInt(value))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select city tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Tier 1 (Metro)</SelectItem>
                  <SelectItem value="2">Tier 2</SelectItem>
                  <SelectItem value="3">Tier 3 & Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="pt-2">
            <Button 
              className="w-full bg-hospital-green hover:bg-hospital-green/90"
              size="lg"
              onClick={calculatePremium}
            >
              Calculate Premium
            </Button>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">How is premium calculated?</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>Your premium is calculated based on age, sum insured, number of members, and city tier. Premiums are higher for older individuals, higher coverage amounts, and metro cities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-center py-4 bg-green-50 rounded-lg">
            <h4 className="text-lg font-medium text-green-800">Your Estimated Annual Premium</h4>
            <p className="mt-2 text-3xl font-bold text-green-600">
              {calculatedPremium ? formatCurrency(calculatedPremium) : '--'}
            </p>
            <p className="mt-2 text-sm text-green-700">
              For {familyMembers} {familyMembers === 1 ? 'person' : 'people'} with {formatCurrency(coverage)} cover
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700">Plan Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`border rounded-lg p-5 cursor-pointer transition-all ${
                    selectedPlan === plan.id 
                      ? 'border-hospital-green ring-2 ring-hospital-green/30' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium text-gray-900">{plan.name}</h5>
                      <p className="text-2xl font-bold text-gray-900 mt-2">
                        {formatCurrency(plan.basePremium)}
                        <span className="text-sm font-normal text-gray-500">/year</span>
                      </p>
                    </div>
                    {selectedPlan === plan.id && (
                      <div className="h-5 w-5 rounded-full bg-hospital-green text-white flex items-center justify-center">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                  
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {plan.features.slice(0, 5).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={selectedPlan === plan.id ? 'default' : 'outline'}
                    className={`w-full mt-4 ${
                      selectedPlan === plan.id ? 'bg-hospital-green hover:bg-hospital-green/90' : ''
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Button 
                variant="outline" 
                onClick={() => setShowPlans(false)}
                className="flex-1"
              >
                Back to Calculator
              </Button>
              <Button 
                className="bg-hospital-green hover:bg-hospital-green/90 flex-1"
                size="lg"
              >
                Proceed to Buy <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
