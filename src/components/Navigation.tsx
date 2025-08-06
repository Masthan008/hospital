
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Group navigation items
  const navGroups = [
    {
      groupName: "About",
      items: [
        { name: "About Us", path: "/about" },
        { name: "Our Doctors", path: "/our-team" },
        { name: "Why Choose Us", path: "/why-choose-us" },
      ]
    },
    {
      groupName: "Services",
      items: [
        { name: "All Services", path: "/services" },
        { name: "General Medicine", path: "/services/general-medicine" },
        { name: "Dental Care", path: "/services/dental" },
        { name: "Gynecology", path: "/services/gynecology" },
        { name: "Urology", path: "/services/urology" },
        { name: "Pulmonology", path: "/services/pulmonology" },
        { name: "Pediatrics", path: "/services/pediatrics" },
        { name: "Infertility", path: "/services/infertility" },
      ]
    },
    {
      groupName: "Patient Care",
      items: [
        { name: "Appointments", path: "/appointment" },
        { name: "Patient Information", path: "/patient-info" },
        { name: "Visiting Hours", path: "/visiting-hours" },
        { name: "Insurance", path: "/insurance" },
        { name: "Community", path: "/community" },
        { name: "Emergency Services", path: "/emergency" }
      ]
    },
    {
      groupName: "Resources",
      items: [
        { name: "Gallery", path: "/gallery" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "FAQs", path: "/faqs" },
        { name: "Health Tips", path: "/health-tips" },
        { name: "Contact Us", path: "/contact" },
      ]
    },
    {
      groupName: "Contact",
      items: [
        { name: "Contact Us", path: "/contact" },
        { name: "Book Appointment", path: "/appointment" },
        { name: "Find a Doctor", path: "/doctors" },
        { name: "Locations", path: "/locations" },
      ]
    }
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (groupName: string) => {
    setActiveDropdown(activeDropdown === groupName ? null : groupName);
  };

  const handleBookAppointment = () => {
    // Navigate to contact page with appointment form
    window.location.href = '/contact#appointment';
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Sri Ananth Hospital Logo" 
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'flex flex-col justify-center';
                    const text = document.createElement('div');
                    text.className = 'text-primary font-bold text-lg';
                    text.textContent = 'Sri Ananth';
                    const subtext = document.createElement('div');
                    subtext.className = 'text-xs text-muted-foreground font-medium';
                    subtext.textContent = 'Multi Specialty Hospital';
                    fallback.appendChild(text);
                    fallback.appendChild(subtext);
                    target.parentNode?.insertBefore(fallback, target);
                  }}
                />
                <div className="hidden md:block">
                  <div className="text-primary font-bold text-xl font-sans">Sri Ananth</div>
                  <div className="text-xs text-muted-foreground font-medium">Multi Specialty Hospital</div>
                </div>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  isActive ? 'text-primary' : 'text-foreground/60 hover:text-foreground/80'
                )
              }
              end
            >
              Home
            </NavLink>
            {navGroups.map((group) => (
              <div key={group.groupName} className="relative group">
                <button
                  onClick={() => toggleDropdown(group.groupName)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {group.groupName}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={cn(
                    "absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg overflow-hidden z-50 transition-all duration-200 transform origin-top",
                    activeDropdown === group.groupName 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  <div className="py-1">
                    {group.items.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          cn(
                            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors",
                            isActive ? "bg-primary/5 text-primary font-medium" : ""
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+919966151626" className="font-medium text-primary hover:text-primary/80 transition-colors">+91 9966151626</a>
            </div>
            <Button 
              className="bg-hospital-green-light hover:bg-hospital-green transition-all duration-300 shadow-lg hover:shadow-xl text-white"
              onClick={handleBookAppointment}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
