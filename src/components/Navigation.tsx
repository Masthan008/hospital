
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, ChevronRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
    <nav className="bg-white shadow-md sticky top-0 z-50" ref={navRef}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center justify-center lg:justify-start mx-auto lg:mx-0"
          >
            <img 
              src="/assets/images/logo.png" 
              alt="Sri Ananth Hospital" 
              className="h-10 lg:h-12 w-auto" 
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              asChild 
              variant="outline" 
              className="border-hospital-green text-hospital-green hover:bg-hospital-green hover:text-white hidden md:flex"
            >
              <a href="tel:+919100000000">
                <Phone className="h-4 w-4 mr-2" />
                Emergency: 91000 00000
              </a>
            </Button>
            <Button asChild className="bg-hospital-green hover:bg-hospital-green/90">
              <NavLink to="/appointment">
                Book Appointment
              </NavLink>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden overflow-y-auto",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Sri Ananth Hospital Logo" 
                  className="h-12 w-auto object-contain"
                />
                <div className="hidden sm:flex flex-col">
                  <span className="font-bold text-base leading-tight text-gray-800">Sri Ananth</span>
                  <span className="text-xs font-medium text-gray-600">Multi Speciality Hospital</span>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <nav className="p-4 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "flex items-center px-3 py-3 text-sm font-medium rounded-lg mb-1",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-gray-700 hover:bg-gray-100"
                )
              }
            >
              Home
            </NavLink>
            
            {navGroups.map((group) => (
              <div key={group.groupName} className="mb-1">
                <button
                  onClick={() => toggleDropdown(group.groupName)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg",
                    activeDropdown === group.groupName || 
                    group.items.some(item => location.pathname === item.path)
                      ? "text-primary bg-primary/5" 
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <span>{group.groupName}</span>
                  <ChevronRight 
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === group.groupName ? "rotate-90" : ""
                    )} 
                  />
                </button>
                
                <div 
                  className={cn(
                    "pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-200",
                    activeDropdown === group.groupName 
                      ? "max-h-96 opacity-100" 
                      : "max-h-0 opacity-0"
                  )}
                >
                  {group.items.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "block px-3 py-2 text-sm rounded-lg",
                          isActive 
                            ? "bg-primary/5 text-primary font-medium" 
                            : "text-gray-600 hover:bg-gray-50"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="pt-4 mt-4 border-t">
              <div className="flex items-center space-x-2 text-sm mb-4 px-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919966151626" className="font-medium text-primary hover:text-primary/80 transition-colors">
                  +91 9966151626
                </a>
              </div>
              <Button 
                className="w-full bg-hospital-green hover:bg-hospital-green/90"
                onClick={() => {
                  handleBookAppointment();
                  setIsOpen(false);
                }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </nav>
        </div>
        
        {/* Overlay when mobile menu is open */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navigation;
