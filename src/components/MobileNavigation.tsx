import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Briefcase, Users, Phone, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const bottomNavItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const allNavItems = [
    { name: 'Our Doctors', path: '/our-team' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Appointments', path: '/appointment' },
    { name: 'Patient Information', path: '/patient-info' },
    { name: 'Visiting Hours', path: '/visiting-hours' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Community', path: '/community' },
    { name: 'Emergency Services', path: '/emergency' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Health Tips', path: '/health-tips' },
    { name: 'Find a Doctor', path: '/doctors' },
    { name: 'Locations', path: '/locations' },
  ];

  return (
    <>
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden z-50">
        <div className="flex justify-around max-w-7xl mx-auto">
          {bottomNavItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex-1 flex flex-col items-center justify-center pt-2 pb-1 text-sm font-medium transition-colors',
                  isActive ? 'text-primary' : 'text-gray-500 hover:text-primary'
                )
              }
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span>{item.name}</span>
            </NavLink>
          ))}
          <button
            onClick={() => setIsOpen(true)}
            className="flex-1 flex flex-col items-center justify-center pt-2 pb-1 text-sm font-medium text-gray-500 hover:text-primary"
          >
            <Menu className="w-6 h-6 mb-1" />
            <span>More</span>
          </button>
        </div>
      </nav>

      {/* Full-screen Overlay Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">More</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 gap-1">
            {allNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium">{item.name}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
