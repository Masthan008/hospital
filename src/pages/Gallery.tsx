import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  title?: string;
};

const Gallery = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
      mirror: false
    });

    // Show/hide scroll to top button
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      AOS.refresh();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hospital gallery images using available images
  const galleryImages: GalleryImage[] = [
    // Hospital Building
    {
      id: 'f1',
      src: '/images/gallery/BUILDING .png',
      alt: 'Sri Ananth Hospital Building',
      category: 'facility'
    },
    
    // Medical Team
    {
      id: 'm1',
      src: '/images/gallery/MEDICAL TEAM .png',
      alt: 'Our Expert Medical Team',
      category: 'staff'
    },
    {
      id: 'm2',
      src: '/images/gallery/DOCTOR WITH PATIENT .png',
      alt: 'Doctor with Patient',
      category: 'staff'
    },
    
    // Facilities
    {
      id: 'fc1',
      src: '/images/gallery/OPERATION THEATRE .png',
      alt: 'Modern Operation Theater',
      category: 'facilities',
      title: 'Operation Theater'
    },
    {
      id: 'fc2',
      src: '/images/gallery/icu.jpg',
      alt: 'Intensive Care Unit (ICU)',
      category: 'facilities',
      title: 'ICU'
    },
    {
      id: 'fc3',
      src: '/images/gallery/inpatient-ward.jpg',
      alt: 'Inpatient Wards',
      category: 'facilities',
      title: 'Inpatient Wards'
    },
    {
      id: 'fc4',
      src: '/images/gallery/pharmacy.jpg',
      alt: 'Pharmacy',
      category: 'facilities',
      title: 'Pharmacy'
    },
    {
      id: 'fc5',
      src: '/images/gallery/debtal-clinic.jpg',
      alt: 'Dental Clinic',
      category: 'facilities',
      title: 'Dental Clinic'
    },
    {
      id: 'fc6',
      src: '/images/gallery/LABORATORY-INTERIOR.jpg',
      alt: 'Laboratory',
      category: 'facilities',
      title: 'Laboratory'
    },
    {
      id: 'fc7',
      src: '/images/gallery/PRIVATE-ROOMS.jpg',
      alt: 'Private Rooms',
      category: 'facilities',
      title: 'Private Rooms'
    },
    {
      id: 'fc8',
      src: '/images/gallery/SCANNING-ROOM.jpg',
      alt: 'Scanning Room',
      category: 'facilities',
      title: 'Scanning Room'
    },
    {
      id: 'fc9',
      src: '/images/gallery/AC-WARDS.jpg',
      alt: 'AC Wards',
      category: 'facilities',
      title: 'AC Wards'
    },
    {
      id: 'fc10',
      src: '/images/gallery/GENERAL-WARDS.jpg',
      alt: 'General Wards',
      category: 'facilities',
      title: 'General Wards'
    },
    {
      id: 'fc11',
      src: '/images/gallery/WAITING-HALL.jpg',
      alt: 'Waiting Hall',
      category: 'facilities',
      title: 'Waiting Hall'
    },
    {
      id: 'fc12',
      src: '/images/gallery/DOCTORS-LOUNGE.jpg',
      alt: 'Doctors Lounge',
      category: 'facilities',
      title: 'Doctors Lounge'
    },
    {
      id: 'fc13',
      src: '/images/gallery/DELUXE-ROOMS.jpg',
      alt: 'Deluxe Rooms',
      category: 'facilities',
      title: 'Deluxe Rooms'
    },
    {
      id: 'fc14',
      src: '/images/gallery/DENTAL-ROOM.jpg',
      alt: 'Dental Room',
      category: 'facilities',
      title: 'Dental Room'
    },
    
    // Events
    {
      id: 'e1',
      src: '/images/gallery/HEALTH CAMP .png',
      alt: 'Health Camp Event',
      category: 'events'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-hospital-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl md:text-2xl opacity-90">A glimpse into our world-class facilities and dedicated team</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-hospital-blue text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setActiveCategory('facility')}
              className={`px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-colors ${
                activeCategory === 'facility' 
                  ? 'bg-hospital-blue text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Hospital
            </button>
            <button
              onClick={() => setActiveCategory('staff')}
              className={`px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-colors ${
                activeCategory === 'staff' 
                  ? 'bg-hospital-blue text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Medical Team
            </button>
            <button
              onClick={() => setActiveCategory('facilities')}
              className={`px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-colors ${
                activeCategory === 'facilities' 
                  ? 'bg-hospital-blue text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Facilities
            </button>
            <button
              onClick={() => setActiveCategory('events')}
              className={`px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-colors ${
                activeCategory === 'events' 
                  ? 'bg-hospital-blue text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Events
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={parseInt(image.id.replace(/\D/g,'')) * 50}
                data-aos-duration="600"
              >
                <div className="relative overflow-hidden aspect-square group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = '#f3f4f6';
                        parent.classList.add('flex', 'items-center', 'justify-center');
                        const errorText = document.createElement('div');
                        errorText.className = 'text-gray-400 text-sm p-4 text-center';
                        errorText.textContent = 'Image not available';
                        parent.appendChild(errorText);
                      }
                    }}
                    data-aos={['fade-up', 'fade-right', 'fade-left', 'zoom-in', 'flip-left', 'zoom-in-up'][parseInt(image.id.replace(/\D/g,'')) % 6]}
                    data-aos-duration="800"
                  />
                  {image.title && (
                    <div 
                      className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      data-aos="fade"
                      data-aos-duration="400"
                    >
                      <h3 className="text-white text-lg font-medium px-4 text-center">
                        {image.title}
                      </h3>
                    </div>
                  )}
                </div>
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  data-aos="fade-up"
                  data-aos-duration="400"
                >
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-hospital-blue text-white flex items-center justify-center shadow-lg hover:bg-hospital-blue-dark transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Gallery;
