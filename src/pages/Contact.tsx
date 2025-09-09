import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Stethoscope,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  // Social media links moved to footer for better user experience

  const contactInfo = [
    {
      icon: MapPin,
      title: "Hospital Address",
      details: [
        "H.No 4-1-315/3, Indirabai Colony",
        "Vikarabad, Telangana - 501101",
        "India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 9966151626",
        "+91 8499995554"
      ]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        <a key="email1" href="mailto:SriAnanthMultiSpecialtyHospital@gmail.com" className="break-words hover:text-primary transition-colors">
          SriAnanthMultiSpecialtyHospital@gmail.com
        </a>,
        <a key="email2" href="mailto:sriananthdentalhospital@gmail.com" className="break-words hover:text-primary transition-colors">
          sriananthdentalhospital@gmail.com
        </a>
      ]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "OPD: 8:00 AM - 10:00 PM",
        "Emergency: 24/7 Emergency Services Everyday"
      ]
    }
  ];

  const departments = [
    "Dental - Dr. Gireesha Reddy",
    "Gynecology - Dr. Pavani",
    "Dental - Dr. Srujan Kumar"
  ];

  return (
    <div className="font-inter">
      {/* Social Media Bar - Removed duplicate */}
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-hospital-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl animate-slide-in-left">
            Get in touch with our medical team. We're here to help you with your healthcare needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-shadow animate-scale-in border-0 shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-gray-600 text-sm break-words">
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Forms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="animate-slide-in-left">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-primary">
                    <MapPin className="w-6 h-6" />
                    <span>Find Us Here</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5654!2d77.9084!3d17.3378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8f9f8c9b7b7b7%3A0x9c4e8c7b0b5b5b5b5!2sSri%20Ananth%20Multi%20Specialty%20Hospital!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="320"
                      style={{ border: 0, borderRadius: '8px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      Sri Ananth Multi Specialty Hospital<br />
                      H.No 4-1-315/3, Indirabai Colony<br />
                      Vikarabad, Telangana - 501101
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <a 
                        href="https://maps.google.com/?q=Sri+Ananth+Hospital+Vikarabad" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Appointment Form */}
            <div className="animate-slide-in-right">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-primary">
                    <Calendar className="w-6 h-6" />
                    <span>Book An Appointment</span>
                  </CardTitle>
                  <p className="text-gray-600">Schedule your visit with our medical experts</p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter last name" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Enter phone number" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter email address" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department">Choose Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept, index) => (
                            <SelectItem key={index} value={dept.toLowerCase().replace(/\s+/g, '-')}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input id="date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">9:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="15:00">3:00 PM</SelectItem>
                            <SelectItem value="16:00">4:00 PM</SelectItem>
                            <SelectItem value="17:00">5:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your symptoms or concerns..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Book Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-green-50 border-green-200 animate-scale-in">
            <CardContent className="p-8 text-center">
              <MessageSquare className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Quick WhatsApp Consultation
              </h3>
              <p className="text-green-700 mb-6">
                Get instant responses to your health queries. Our medical team is available 
                on WhatsApp for quick consultations and appointment bookings.
              </p>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a 
                  href="https://wa.me/918499995552?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sri%20Ananth%20Hospital" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span>Quick Message</span>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-500 text-white p-8 rounded-2xl animate-scale-in">
            <Stethoscope className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Medical Emergency?</h2>
            <p className="text-xl mb-6">
              For immediate medical assistance, call our 24/7 emergency helpline. 
              Our emergency team is always ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-red-500 border-white hover:bg-gray-100 whitespace-nowrap">
                <a href="tel:+918499995554" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Emergency: +91 8499995554</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;