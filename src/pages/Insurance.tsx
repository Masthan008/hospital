import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Phone, CheckCircle, Search, Filter, MessageCircle, Upload, X, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const Insurance = () => {
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCoverage, setSelectedCoverage] = useState<string[]>([]);
  const [showChat, setShowChat] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // All possible coverage types
  const allCoverageTypes = [
    'Cashless Treatment',
    'Pre & Post Hospitalization',
    'Day Care Procedures',
    'Ambulance Cover',
    'Preventive Health Check-up',
    'AYUSH Treatment',
    'Maternity Cover',
    'Organ Donor Expenses'
  ];

  // Toggle coverage filter
  const toggleCoverage = (coverage: string) => {
    setSelectedCoverage(prev => 
      prev.includes(coverage)
        ? prev.filter(item => item !== coverage)
        : [...prev, coverage]
    );
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles([...uploadedFiles, ...Array.from(e.target.files)]);
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Toggle FAQ item
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  const insurancePartners = [
    {
      name: 'Apollo Munich',
      coverage: ['Cashless Treatment', 'Pre & Post Hospitalization', 'Day Care Procedures'],
      contact: '1800 123 4567'
    },
    {
      name: 'Star Health',
      coverage: ['Cashless Hospitalization', 'Ambulance Cover', 'Preventive Health Check-up'],
      contact: '1800 425 2255'
    },
    {
      name: 'HDFC ERGO',
      coverage: ['Cashless Claims', 'Domiciliary Treatment', 'AYUSH Treatment'],
      contact: '1800 102 2233'
    },
    {
      name: 'ICICI Lombard',
      coverage: ['Preventive Health Check-up', 'Organ Donor Expenses', 'Maternity Cover'],
      contact: '1800 2666'
    },
    {
      name: 'Bajaj Allianz',
      coverage: ['Day Care Procedures', 'Domiciliary Hospitalization', 'AYUSH Treatment'],
      contact: '1800 209 5858'
    },
    {
      name: 'Max Bupa',
      coverage: ['Pre & Post Hospitalization', 'Day Care Treatment', 'Domiciliary Treatment'],
      contact: '1800 209 5859'
    },
    {
      name: 'Reliance General',
      coverage: ['Cashless Hospitalization', 'Preventive Health Check-up', 'Organ Donor Expenses'],
      contact: '1800 3009'
    },
    {
      name: 'New India Assurance',
      coverage: ['Pre & Post Hospitalization', 'Day Care Procedures', 'Domiciliary Treatment'],
      contact: '1800 209 1415'
    },
    {
      name: 'Oriental Insurance',
      coverage: ['Cashless Treatment', 'Preventive Health Check-up', 'AYUSH Treatment'],
      contact: '1800 180 2746'
    },
    {
      name: 'United India',
      coverage: ['Cashless Hospitalization', 'Day Care Procedures', 'Organ Donor Expenses'],
      contact: '1800 425 2255'
    }
  ];

  // Filter insurance partners based on search and selected coverages
  const filteredPartners = insurancePartners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.coverage.some(cov => cov.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCoverage = selectedCoverage.length === 0 || 
      selectedCoverage.every(cov => partner.coverage.includes(cov));
    
    return matchesSearch && matchesCoverage;
  });

  // FAQ data
  const faqs = [
    {
      question: "How do I check if my insurance is accepted?",
      answer: "You can check our list of accepted insurance providers above or contact our insurance desk for verification."
    },
    {
      question: "What documents do I need for cashless treatment?",
      answer: "You'll need your insurance card, photo ID, and pre-authorization form from your insurance provider."
    },
    {
      question: "How long does claim processing take?",
      answer: "Most cashless claims are processed within 2-4 hours. For reimbursement claims, it typically takes 7-14 working days after document submission."
    },
    {
      question: "What if my treatment isn't covered by insurance?",
      answer: "We offer various payment plans and financial assistance programs. Our billing department can discuss options with you."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Action Button for Chat */}
      <button 
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-8 right-8 bg-hospital-green text-white p-4 rounded-full shadow-lg z-50 hover:bg-hospital-green/90 transition-all"
      >
        {showChat ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Popup */}
      {showChat && (
        <div className="fixed bottom-24 right-8 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="bg-hospital-green text-white p-4">
            <h3 className="font-bold">Insurance Support</h3>
            <p className="text-sm opacity-80">We're here to help with your insurance queries</p>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="text-sm bg-gray-100 p-3 rounded-lg mb-3">
              Hello! How can we assist you with your insurance today?
            </div>
            <div className="text-sm bg-blue-50 p-3 rounded-lg ml-8 mb-3">
              I need help with my claim
            </div>
          </div>
          <div className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-green/50"
              />
              <button className="bg-hospital-green text-white p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="bg-hospital-green text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Insurance Partners</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are proud to be associated with leading health insurance providers to offer you cashless treatment and hassle-free claims.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Find Your Insurance Provider</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by provider name or coverage..."
                  className="pl-10 pr-4 py-6 text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Filter by Coverage</h3>
              <div className="flex flex-wrap gap-3">
                {allCoverageTypes.map((coverage) => (
                  <div key={coverage} className="flex items-center">
                    <Checkbox 
                      id={`coverage-${coverage}`}
                      checked={selectedCoverage.includes(coverage)}
                      onCheckedChange={() => toggleCoverage(coverage)}
                      className="h-5 w-5 rounded border-gray-300 text-hospital-green focus:ring-hospital-green"
                    />
                    <label 
                      htmlFor={`coverage-${coverage}`}
                      className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      {coverage}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Partners Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insurancePartners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">{partner.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-700">Coverage Includes:</h4>
                    <ul className="space-y-2">
                      {partner.coverage.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-hospital-green mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <div className="bg-hospital-green/10 p-2 rounded-full mr-3">
                      <Phone className="w-5 h-5 text-hospital-green" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">24/7 Helpline</p>
                      <a 
                        href={`tel:${partner.contact.replace(/\s/g, '')}`} 
                        className="font-medium text-primary hover:underline"
                      >
                        {partner.contact}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Upload Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Insurance Documents</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full" 
                    placeholder="+91 98765 43210" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Provider</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select Provider</option>
                    {insurancePartners.map(partner => (
                      <option key={partner.name} value={partner.name}>{partner.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full" 
                  placeholder="Any specific instructions or details about your documents..." 
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Documents</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-hospital-green hover:text-hospital-green/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-hospital-green"
                      >
                        <span>Upload files</span>
                        <input 
                          id="file-upload" 
                          name="file-upload" 
                          type="file" 
                          className="sr-only" 
                          multiple
                          onChange={handleFileUpload}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                </div>
                
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium text-gray-700">Uploaded Files:</p>
                    <ul className="space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                          <span className="text-sm text-gray-600 truncate max-w-xs">{file.name}</span>
                          <button 
                            onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== index))}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X size={16} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="pt-2">
                <Button 
                  className="w-full bg-hospital-green hover:bg-hospital-green/90"
                  size="lg"
                >
                  Submit Documents
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {activeFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Insurance?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our dedicated insurance desk is here to assist you with all your insurance-related queries and claims.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <NavLink to="/contact">
                Contact Us for Assistance
              </NavLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <a href="tel:+919000000000" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
