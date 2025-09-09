import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Billing = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Billing & Payments</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transparent billing and convenient payment options for your healthcare needs.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Your Bill</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600">
                We believe in transparent billing. Your bill includes all charges for the services you received during your visit.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Common Billing Inquiries:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Room charges (if admitted)</li>
                  <li>Doctor's consultation fees</li>
                  <li>Laboratory tests and procedures</li>
                  <li>Medications and supplies</li>
                  <li>Nursing care</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Payment Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="font-medium w-32">Cash:</span>
                  <span className="text-gray-600">Pay at the billing counter</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-32">Cards:</span>
                  <span className="text-gray-600">Visa, MasterCard, Rupay, American Express</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-32">UPI:</span>
                  <span className="text-gray-600">Google Pay, PhonePe, Paytm, BHIM</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-32">Net Banking:</span>
                  <span className="text-gray-600">All major banks supported</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-32">Insurance:</span>
                  <span className="text-gray-600">Direct billing with network providers</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Assistance?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our billing representatives are available to answer your questions and assist with payment arrangements.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Billing Department Hours:</p>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
                <Button asChild className="mt-4">
                  <Link to="/contact#billing">
                    Contact Billing Department
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Financial Assistance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600">
                We understand that medical expenses can be challenging. We offer financial assistance programs for eligible patients.
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact#financial-aid">
                  Learn About Financial Aid
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Billing;
