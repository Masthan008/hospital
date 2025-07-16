import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Phone, CheckCircle } from "lucide-react";

const Insurance = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Insurance Partners Grid */}
      <section className="py-16">
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

      {/* CTA Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Insurance?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our insurance desk is here to assist you with all your insurance-related queries and claims.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <NavLink to="/contact">
              Contact Us for Assistance
            </NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
