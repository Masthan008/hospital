import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Ambulance, Clock, Stethoscope, UserCheck, ClipboardCheck, Shield } from "lucide-react";

export default function PatientInfo() {
  const location = useLocation();
  const isERVisit = location.hash === '#er-visit';

  const erProcess = [
    {
      icon: <Ambulance className="w-8 h-8 text-red-600" />,
      title: "Arrival & Triage",
      description: "Upon arrival, our triage nurse will assess your condition to determine the severity of your illness or injury. The most critical patients are seen first."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      title: "Registration",
      description: "A staff member will collect your personal and insurance information. In emergency situations, registration may occur after you've been treated."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-green-600" />,
      title: "Medical Evaluation",
      description: "An emergency physician will examine you, order necessary tests, and develop a treatment plan. This may include lab work, imaging, or consultations with specialists."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-purple-600" />,
      title: "Treatment",
      description: "Based on the evaluation, you'll receive appropriate treatment which may include medications, procedures, or other interventions."
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      title: "Disposition",
      description: "After treatment, you may be discharged with follow-up instructions, admitted to the hospital, or transferred to another facility if specialized care is needed."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {isERVisit ? "What to Expect in the ER" : "Patient Information"}
          </h1>
          <p className="text-xl text-blue-100">
            {isERVisit 
              ? "Understanding our emergency care process" 
              : "Resources and information for our patients"}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isERVisit ? (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Our Emergency Care Process
              </h2>
              <p className="text-gray-600 mb-8">
                We understand that visiting the emergency room can be stressful. 
                Here's what you can expect during your visit to our emergency department.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {erProcess.map((step, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-full bg-opacity-10 mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Important Notes
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Please bring your ID, insurance card, and list of medications.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Wait times vary based on the severity of patients' conditions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>For life-threatening emergencies, call 108 or go to the nearest emergency room immediately.</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">General Patient Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900">Visiting Hours</h3>
                    <p className="text-gray-600">General: 10:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">ICU: Limited hours, please check with staff</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">What to Bring</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Photo ID</li>
                      <li>Insurance information</li>
                      <li>List of current medications</li>
                      <li>Medical history or records</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Emergency Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h3 className="font-medium text-red-800 mb-2">Emergency Contact</h3>
                    <p className="text-red-600 font-semibold">+91 8499995554</p>
                    <p className="text-sm text-red-600">24/7 Emergency Services</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">What to Expect in the ER</h3>
                    <p className="text-gray-600 mb-4">
                      Learn about our emergency room procedures and what to bring with you.
                    </p>
                    <Button asChild variant="outline">
                      <Link to="/patient-info#er-visit">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
