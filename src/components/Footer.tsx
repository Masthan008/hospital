import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="space-y-4">
            <div className="flex flex-col items-start space-y-3">
              <div className="flex items-center space-x-3">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Sri Ananth Multi Specialty Hospital" 
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <h3 className="text-2xl font-bold text-primary">Sri Ananth</h3>
                  <p className="text-sm text-muted-foreground font-medium">Multi Specialty Hospital</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Caring for Health, Caring for You. Providing comprehensive healthcare services with compassion and excellence.
            </p>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <Clock className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span className="text-sm font-medium text-red-600">24/7 Emergency Services Everyday</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-sm mb-2">About</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="/our-team" className="text-muted-foreground hover:text-primary transition-colors">Our Doctors</a></li>
                  <li><a href="/why-choose-us" className="text-muted-foreground hover:text-primary transition-colors">Why Choose Us</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-sm mb-2">Services</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="/services#general-medicine" className="text-muted-foreground hover:text-primary transition-colors">General Medicine</a></li>
                  <li><a href="/services#dental" className="text-muted-foreground hover:text-primary transition-colors">Dental Care</a></li>
                  <li><a href="/services#gynecology" className="text-muted-foreground hover:text-primary transition-colors">Gynecology</a></li>
                  <li><a href="/services#urology" className="text-muted-foreground hover:text-primary transition-colors">Urology</a></li>
                  <li><a href="/services#pulmonology" className="text-muted-foreground hover:text-primary transition-colors">Pulmonology</a></li>
                  <li><a href="/services#pediatrics" className="text-muted-foreground hover:text-primary transition-colors">Pediatrics</a></li>
                  <li><a href="/services#infertility" className="text-muted-foreground hover:text-primary transition-colors">Infertility</a></li>
                </ul>
              </div>
              <div className="mt-4">
                <h5 className="font-medium text-sm mb-2">Patient Care</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="/appointment" className="text-muted-foreground hover:text-primary transition-colors">Appointments</a></li>
                  <li><a href="/patient-info" className="text-muted-foreground hover:text-primary transition-colors">Patient Information</a></li>
                  <li><a href="/visiting-hours" className="text-muted-foreground hover:text-primary transition-colors">Visiting Hours</a></li>
                  <li><a href="/insurance" className="text-muted-foreground hover:text-primary transition-colors">Insurance</a></li>
                  <li><a href="/billing" className="text-muted-foreground hover:text-primary transition-colors">Billing</a></li>
                </ul>
              </div>
              <div className="mt-4">
                <h5 className="font-medium text-sm mb-2">Resources</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</a></li>
                  <li><a href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
                  <li><a href="/health-tips" className="text-muted-foreground hover:text-primary transition-colors">Health Tips</a></li>
                  <li><a href="/faqs" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
                  <li><a href="/doctors" className="text-muted-foreground hover:text-primary transition-colors">Find a Doctor</a></li>
                  <li><a href="/locations" className="text-muted-foreground hover:text-primary transition-colors">Locations</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>H.No 4-1-315/3, Indirabai Colony</p>
                  <p>Vikarabad, Telangana - 501101</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919966151626" className="text-muted-foreground hover:text-primary transition-colors">+91 9966151626</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+918499995554" className="text-muted-foreground hover:text-primary transition-colors">+91 8499995554</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">SriAnanthMultiSpecialtyHospital@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Health Updates</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive health tips and hospital updates.
            </p>
            <div className="space-y-2">
              <Input placeholder="Your email address" type="email" />
              <Button className="w-full" size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Sri Ananth Multi Specialty Hospital. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;