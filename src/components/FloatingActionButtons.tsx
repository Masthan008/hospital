import { useState } from 'react';
import { Phone, MessageCircle, X, ChevronUp } from 'lucide-react';

const FloatingActionButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to show/hide the FAB based on scroll position
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialMedia = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-4 h-4" />,
      url: 'https://wa.me/919966151626',
      color: 'bg-green-500 hover:bg-green-600',
      tooltip: 'Chat on WhatsApp'
    },
    {
      name: 'Call',
      icon: <Phone className="w-4 h-4" />,
      url: 'tel:+919966151626',
      color: 'bg-blue-500 hover:bg-blue-600',
      tooltip: 'Call us'
    }
  ];

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end space-y-3 transition-all duration-300">
      {isExpanded && (
        <div className="flex flex-col space-y-3 mb-3 items-end">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200 relative group`}
              aria-label={item.name}
            >
              {item.icon}
              <span className="absolute right-12 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {item.tooltip}
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Main FAB Button */}
      <button
        onClick={toggleMenu}
        className={`${isExpanded ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary-dark'} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-200`}
        aria-label={isExpanded ? 'Close menu' : 'Quick actions'}
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : isScrolled ? (
          <ChevronUp className="w-6 h-6" />
        ) : (
          <Phone className="w-6 h-6" />
        )}
      </button>

      {/* Scroll to Top Button - Only shows when scrolled down */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="bg-gray-600 bg-opacity-80 hover:bg-opacity-100 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200 mt-2"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default FloatingActionButtons;
