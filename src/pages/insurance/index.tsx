import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Insurance = () => {
  const insuranceProviders = [
    { name: 'Star Health Insurance', status: 'In Network' },
    { name: 'HDFC ERGO', status: 'In Network' },
    { name: 'ICICI Lombard', status: 'In Network' },
    { name: 'Bajaj Allianz', status: 'In Network' },
    { name: 'Reliance General Insurance', status: 'In Network' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Insurance & Billing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We accept most major insurance plans. Please verify your coverage with our billing department.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Accepted Insurance Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insuranceProviders.map((provider, index) => (
                <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                  <span className="font-medium">{provider.name}</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    {provider.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Billing Inquiries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                For questions about your bill or insurance coverage, please contact our billing department.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Contact Billing Department
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Cash</li>
                <li>• Credit/Debit Cards</li>
                <li>• Net Banking</li>
                <li>• UPI Payments</li>
                <li>• Insurance Direct Billing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
