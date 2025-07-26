import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Phone, Mail, ShieldCheck, FileText } from "lucide-react";

const Insurance = () => {
  const insuranceProviders = [
    { 
      name: 'ADITYA BIRLA HEALTH', 
      logo: '/insurance%20images/ADITYA%20BIRLA%20HEALTH%20-%20SADH.png',
      status: 'In Network',
      contact: '1800-123-4567',
      email: 'support@adityabirlahealth.com'
    },
    { 
      name: 'BAJAJ HEALTH', 
      logo: '/insurance%20images/BAJAJ%20HEALTH%20-%20SADH.png',
      status: 'In Network',
      contact: '1800-123-4568',
      email: 'support@bajajhealth.com'
    },
    { 
      name: 'CHOLA MS', 
      logo: '/insurance%20images/CHOLA%20MS%20%20-%20SADH.png',
      status: 'In Network',
      contact: '1800-123-4569',
      email: 'support@cholams.com'
    },
    { 
      name: 'CIGNA TTK', 
      logo: '/insurance%20images/CIGNA%20TTK%20%20-%20SADH.png',
      status: 'In Network',
      contact: '1800-123-4570',
      email: 'support@cignattk.com'
    },
    { 
      name: 'FUTURE GENERALI', 
      logo: '/insurance%20images/FURURE%20GENERAL%20%20-%20SADH.png',
      status: 'In Network',
      contact: '1800-123-4571',
      email: 'support@futuregenerali.in'
    },
    { 
      name: 'GPHL', 
      logo: '/insurance%20images/GPHL%20%20-%20SADH.png',
      status: 'In Network',
      contact: '1800-123-4572',
      email: 'support@gphl.com'
    },
    { 
      name: 'HDFC ERGO', 
      logo: '/insurance%20images/HDFC%20ERGO%20-%20SADH%20(2).png',
      status: 'In Network',
      contact: '1800-123-4573',
      email: 'support@hdfcergo.com'
    },
    { 
      name: 'STAR HEALTH', 
      logo: '/insurance%20images/STAR%20PERSONAL%20AND%20CARING%20%20-%20SADH.png',
      status: 'In Network',
      contact: '1800-123-4574',
      email: 'support@starhealth.in'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Insurance & Billing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We accept a wide range of insurance providers. Please find below the list of our insurance partners.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Card className="mb-12">
          <CardHeader className="bg-gray-50">
            <CardTitle className="text-2xl">Our Insurance Partners</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {insuranceProviders.map((provider, index) => (
                <div 
                  key={index} 
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-4 bg-white flex flex-col items-center">
                    <div className="h-24 w-full flex items-center justify-center mb-4">
                      <img 
                        src={encodeURI(provider.logo)} 
                        alt={provider.name}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-lg font-semibold text-center mb-2">{provider.name}</h3>
                      <div className="flex items-center justify-center mb-3">
                        <span className="flex items-center text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                          <CheckCircle2 className="w-4 h-4 mr-1" />
                          {provider.status}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                          <a href={`tel:${provider.contact}`} className="hover:text-primary hover:underline">
                            {provider.contact}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-primary" />
                          <a href={`mailto:${provider.email}`} className="hover:text-primary hover:underline truncate">
                            {provider.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-xl">Billing & Claims</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cashless Claims</h3>
                    <p className="text-gray-600">
                      We offer cashless claim facility with all our partner insurance providers.
                      Please carry your insurance card and valid ID proof at the time of admission.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Documentation</h3>
                    <p className="text-gray-600">
                      Please ensure you have all necessary documents including insurance policy copy,
                      photo ID, and any pre-authorization forms required by your provider.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-xl">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">
                Our insurance desk is available to assist you with any queries regarding coverage,
                claims, or documentation requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Insurance Helpdesk</p>
                    <a href="tel:+919876543210" className="font-medium text-gray-900 hover:text-primary">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <a href="mailto:insurance@sriananthhospital.com" className="font-medium text-gray-900 hover:text-primary">
                      insurance@sriananthhospital.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
