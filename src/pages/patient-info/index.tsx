import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PatientInfo = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Patient Information</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to know before your visit to Sri Ananth Hospital.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Before Your Visit</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li>• Bring your ID and insurance information</li>
              <li>• Arrive 15 minutes before your appointment</li>
              <li>• Bring a list of current medications</li>
              <li>• Know your medical history</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>During Your Stay</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li>• Comfortable clothing is recommended</li>
              <li>• Feel free to ask questions</li>
              <li>• Let us know about any special needs</li>
              <li>• We respect your privacy</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Have Questions?</h2>
        <p className="text-gray-600 mb-6">
          Our patient care team is here to help.
        </p>
        <Button asChild>
          <Link to="/contact">
            Contact Us
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PatientInfo;
