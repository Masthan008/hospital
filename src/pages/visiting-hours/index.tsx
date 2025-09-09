import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VisitingHours = () => {
  const visitingHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Emergency', hours: '24/7' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Visiting Hours</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We welcome visitors during the following hours. Please check with the nursing station for any restrictions.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">General Visiting Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {visitingHours.map((item, index) => (
                <div key={index} className="flex justify-between py-3 border-b last:border-b-0">
                  <span className="font-medium">{item.day}</span>
                  <span className="text-gray-600">{item.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Important Notes:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Visitors may be limited based on patient condition</li>
                <li>Children under 12 must be accompanied by an adult</li>
                <li>Please check with the nursing station for ICU visiting hours</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisitingHours;
