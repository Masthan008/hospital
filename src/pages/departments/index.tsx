import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Departments = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animation for title and subtitle
    gsap.fromTo(
      [titleRef.current, subtitleRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );

    // Animation for cards
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1 + (index % 3) * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          ease: 'back.out',
        }
      );
    });
  }, []);

  const departments = [
    {
      id: 1,
      name: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
      icon: '❤️',
      link: '/services/cardiology',
    },
    {
      id: 2,
      name: 'Orthopedics',
      description: 'Expert care for bones, joints, ligaments, and muscles.',
      icon: '🦴',
      link: '/services/orthopedics',
    },
    {
      id: 3,
      name: 'Neurology',
      description: 'Specialized care for brain and nervous system disorders.',
      icon: '🧠',
      link: '/services/neurology',
    },
    {
      id: 4,
      name: 'Pediatrics',
      description: 'Compassionate healthcare for infants, children, and adolescents.',
      icon: '👶',
      link: '/services/pediatrics',
    },
    {
      id: 5,
      name: 'Gynecology',
      description: 'Complete women\'s health services and specialized care.',
      icon: '👩',
      link: '/services/gynecology',
    },
    {
      id: 6,
      name: 'General Medicine',
      description: 'Comprehensive healthcare for adults with a wide range of conditions.',
      icon: '🏥',
      link: '/services/general-medicine',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          Our Departments
        </h1>
        <p 
          ref={subtitleRef} 
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Comprehensive healthcare services across various medical specialties
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <Card 
            key={dept.id}
            ref={el => cardRefs.current[index] = el}
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{dept.icon}</div>
                <CardTitle className="text-xl">{dept.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{dept.description}</p>
              <Button asChild variant="outline">
                <Link to={dept.link}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Can't Find What You're Looking For?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our hospital offers a wide range of specialized services. Contact us for more information about our departments and services.
        </p>
        <Button asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Departments;
