import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Clock, 
  Shield, 
  Star,
  Phone,
  Target,
  Eye,
  Calendar,
  ArrowRight
} from "lucide-react";
import { NavLink } from "react-router-dom";
import doctorProfile from "@/assets/doctor-profile.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Refs for GSAP animations
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const valueCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const teamMemberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  // GSAP Animations
  useEffect(() => {
    // Hero section animation
    gsap.fromTo(
      [heroTitleRef.current, heroTextRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
      }
    );

    // Section animations
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      
      gsap.fromTo(
        section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2 + index * 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          ease: 'back.out',
        }
      );
    });

    // Stats counter animation
    statRefs.current.forEach((stat, index) => {
      if (!stat) return;
      
      const target = { value: 0 };
      const endValue = parseInt(stat.textContent || '0', 10);
      const duration = 2;
      
      gsap.to(target, {
        value: endValue,
        duration: duration,
        scrollTrigger: {
          trigger: stat,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true
        },
        onUpdate: () => {
          stat.textContent = Math.ceil(target.value).toString();
        },
        ease: 'power1.out'
      });
    });

    // Value cards animation
    valueCardRefs.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(
        card,
        { y: 50, opacity: 0, rotateY: 20 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.6,
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          ease: 'back.out(1.7)',
        }
      );
    });

    // Team member cards animation
    teamMemberRefs.current.forEach((member, index) => {
      if (!member) return;
      
      gsap.fromTo(
        member,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.1 * (index % 3),
          scrollTrigger: {
            trigger: member,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          ease: 'elastic.out(1, 0.5)',
        }
      );
    });

    // CTA section animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          ease: 'power2.out',
        }
      );
    }
  }, []);
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and genuine concern for their well-being.",
      image: "/core-values/compassion.jpg"
    },
    {
      icon: Shield,
      title: "Excellence in Medicine",
      description: "We maintain the highest standards of medical practice and continuously improve our services.",
      image: "/core-values/excellence.jpg"
    },
    {
      icon: Users,
      title: "Patient-First Approach",
      description: "Every decision we make is centered around the needs and comfort of our patients.",
      image: "/core-values/patient-first.jpg"
    },
    {
      icon: Star,
      title: "Continuous Innovation",
      description: "We embrace new technologies and methods to provide better healthcare outcomes.",
      image: "/core-values/innovation.jpg"
    }
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-hospital-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/assets/images/pattern.png')] bg-repeat"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="overflow-hidden">
            <h1 
              ref={heroTitleRef}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              About Sri Ananth Hospital
            </h1>
          </div>
          <div className="overflow-hidden">
            <p 
              ref={heroTextRef}
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            >
              Committed to providing exceptional healthcare services with compassion, 
              expertise, and a patient-first approach since our establishment.
            </p>
          </div>
        </div>
        {/* Animated elements */}
        <div className="absolute -bottom-20 left-0 w-full h-20 bg-white transform -skew-y-3 origin-top-left"></div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-hospital-green/10 rounded-full -z-10"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sri Ananth Multi Specialty Hospital was established with a vision to provide 
                  world-class healthcare services to the people of Vikarabad and surrounding regions. 
                  Located in the heart of Telangana, our hospital has been serving the community 
                  with dedication and excellence.
                </p>
                <p>
                  What started as a small medical facility has grown into a comprehensive 
                  multi-specialty hospital offering a wide range of medical services. Our journey 
                  has been marked by continuous growth, technological advancement, and an 
                  unwavering commitment to patient care.
                </p>
                <p>
                  Today, we proudly serve thousands of patients annually, providing everything 
                  from routine check-ups to complex surgical procedures. Our team of experienced 
                  doctors, nurses, and healthcare professionals work tirelessly to ensure that 
                  every patient receives the best possible care.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Card className="bg-hospital-light-blue border-0">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                      <div className="text-sm text-gray-600">Patients Treated</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">5+</div>
                      <div className="text-sm text-gray-600">Years of Service</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">15+</div>
                      <div className="text-sm text-gray-600">Medical Specialists</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Emergency Care</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="animate-scale-in overflow-hidden border-0 shadow-lg group flex flex-col h-full">
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-center my-8">
                  <Target className="w-12 h-12 text-primary" />
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide accessible, affordable, and high-quality healthcare services 
                  to our community. We strive to deliver compassionate care with the latest 
                  medical technology and evidence-based practices, ensuring the best possible 
                  outcomes for our patients.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="animate-scale-in overflow-hidden border-0 shadow-lg group flex flex-col h-full">
              <div className="flex-1 overflow-hidden flex items-center justify-center bg-white p-4">
                <div className="flex justify-center my-8">
                  <Eye className="w-12 h-12 text-hospital-green" />
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-hospital-green mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading healthcare provider in the region, recognized for our 
                  excellence in patient care, medical innovation, and community service. 
                  We envision a healthier community where quality healthcare is accessible 
                  to all, regardless of their background or circumstances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-shadow animate-scale-in border-0 shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="h-40 w-full mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to a solid color if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU1ZTUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0jOTk5OTk5Pk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </section>

      {/* Why We're Your Top Choice */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why We're Your Top Choice</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a consultation with Sri Ananth Multispecialty Hospital.
              We are dedicated to helping you regain your mobility, alleviate pain, and improve your quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">24-Hour Accident & Trauma Care</h3>
                <p className="text-gray-600">Immediate medical attention for emergencies, day or night.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">15+ Expert Doctors</h3>
                <p className="text-gray-600">Highly qualified specialists across various medical fields.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Easy Online Appointments</h3>
                <p className="text-gray-600">Book your consultation with just a few clicks.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Lowest Infection Rates</h3>
                <p className="text-gray-600">Stringent hygiene protocols for your safety.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">5+ Years of Excellence</h3>
                <p className="text-gray-600">Trusted healthcare provider in the region.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">24/7 Support</h3>
                <p className="text-gray-600">Always here when you need us.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <NavLink to="/contact" className="text-lg">
                Book Your Appointment Today
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in">
            Meet Our Managing Director
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="/doctors/chief-medical-officer.jpg" 
                alt="Dr. Gireesha Reddy" 
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl object-cover h-[500px]"
              />
            </div>
            <div className="animate-slide-in-right">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">Dr. Gireesha Reddy</h3>
                  <p className="text-lg text-hospital-blue font-semibold mb-4">
                    BDS, MDS, (MBBS) – Oral & Maxillofacial Surgeon
                  </p>
                  <div className="space-y-4 text-gray-600 mb-6">
                    <p>
                      Dr. Gireesha Reddy is a highly experienced Oral & Maxillofacial Surgeon with 
                      over 15 years of expertise in complex dental and facial surgeries. She leads 
                      our dental department with a commitment to excellence and patient-centered care.
                    </p>
                    <p>
                      Her areas of expertise include dental implants, wisdom tooth extraction, 
                      corrective jaw surgery, facial trauma treatment, and cosmetic dental procedures. 
                      Dr. Reddy is known for her gentle approach and comprehensive patient care.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <a href="tel:+918499995554" className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>+91 8499995554</span>
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <NavLink to="/contact">Book Consultation</NavLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-500 text-white p-8 rounded-2xl animate-scale-in">
            <Clock className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 whitespace-nowrap">24/7 Emergency Service Everyday</h2>
            <p className="text-xl mb-6">
              Our emergency department is always ready to provide immediate medical care 
              with experienced doctors and modern life-saving equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-red-500 border-white hover:bg-gray-100">
                <a href="tel:+918499995554">Emergency: +91 8499995554</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-red-500">
                <NavLink to="/contact">Contact Us</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;