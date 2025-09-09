import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
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
          delay: 0.2 + index * 0.1,
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

  const jobOpenings = [
    {
      id: 1,
      title: 'Staff Nurse',
      department: 'Nursing',
      type: 'Full-time',
      experience: '2+ years',
      description: 'We are looking for experienced staff nurses to join our team.',
    },
    {
      id: 2,
      title: 'Medical Officer',
      department: 'General Medicine',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Looking for MBBS doctors with relevant experience.',
    },
    {
      id: 3,
      title: 'Lab Technician',
      department: 'Pathology',
      type: 'Full-time',
      experience: '1+ years',
      description: 'Experienced lab technicians required for our pathology department.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          Join Our Team
        </h1>
        <p 
          ref={subtitleRef} 
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Be part of our mission to provide exceptional healthcare services
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <Card 
              key={job.id}
              ref={el => cardRefs.current[index] = el}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  <span>Department: {job.department}</span>
                  <span>•</span>
                  <span>Type: {job.type}</span>
                  <span>•</span>
                  <span>Experience: {job.experience}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{job.description}</p>
                <Button asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12" />

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Don't See Your Role?</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on file for future opportunities.
          </p>
          <Button asChild>
            <Link to="/contact">Submit Your Resume</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
