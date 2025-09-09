import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const News = () => {
  // Health Insurance Partners
  const insurancePartners = [
    { id: 1, name: 'Apollo Munich', logo: '/insurance/apollo-munich.png' },
    { id: 2, name: 'Star Health', logo: '/insurance/star-health.png' },
    { id: 3, name: 'HDFC ERGO', logo: '/insurance/hdfc-ergo.png' },
    { id: 4, name: 'ICICI Lombard', logo: '/insurance/icici-lombard.png' },
    { id: 5, name: 'Bajaj Allianz', logo: '/insurance/bajaj-allianz.png' },
    { id: 6, name: 'Max Bupa', logo: '/insurance/max-bupa.png' },
    { id: 7, name: 'Reliance General', logo: '/insurance/reliance.png' },
    { id: 8, name: 'New India Assurance', logo: '/insurance/new-india.png' },
    { id: 9, name: 'Oriental Insurance', logo: '/insurance/oriental.png' },
    { id: 10, name: 'United India', logo: '/insurance/united-india.png' },
  ];

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for a Healthy Heart',
      excerpt: 'Learn how to maintain a healthy heart with these simple lifestyle changes.',
      date: 'June 15, 2023',
      category: 'Cardiology',
      image: '/blog/heart-health.jpg'
    },
    {
      id: 2,
      title: 'Understanding Diabetes: Symptoms and Prevention',
      excerpt: 'Everything you need to know about diabetes and how to prevent it.',
      date: 'May 28, 2023',
      category: 'Endocrinology',
      image: '/blog/diabetes.jpg'
    },
    {
      id: 3,
      title: 'The Importance of Regular Health Check-ups',
      excerpt: 'Why regular health screenings are crucial for early detection of diseases.',
      date: 'April 10, 2023',
      category: 'Preventive Care',
      image: '/blog/health-checkup.jpg'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Heart Patient',
      content: 'The cardiac care I received at Sri Ananth Hospital was exceptional. The doctors were knowledgeable and caring, and the facilities were top-notch.',
      rating: 5,
      image: '/testimonials/patient1.jpg'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Orthopedic Patient',
      content: 'After my knee replacement surgery, I was back on my feet in no time. The physiotherapy team was excellent in my recovery process.',
      rating: 5,
      image: '/testimonials/patient2.jpg'
    },
    {
      id: 3,
      name: 'Venkat Reddy',
      role: 'General Surgery',
      content: 'The entire team was professional and caring. They made my hospital stay as comfortable as possible during my recovery.',
      rating: 5,
      image: '/testimonials/patient3.jpg'
    }
  ];

  // Video testimonials
  const videoTestimonials = [
    {
      id: 1,
      title: 'Patient Success Story - Cardiac Care',
      thumbnail: '/videos/thumbnails/cardiac-story.jpg',
      videoUrl: 'https://www.youtube.com/embed/example1',
      duration: '2:45'
    },
    {
      id: 2,
      title: 'Orthopedic Recovery Journey',
      thumbnail: '/videos/thumbnails/ortho-journey.jpg',
      videoUrl: 'https://www.youtube.com/embed/example2',
      duration: '3:15'
    },
    {
      id: 3,
      title: 'Patient Experience at Sri Ananth',
      thumbnail: '/videos/thumbnails/patient-exp.jpg',
      videoUrl: 'https://www.youtube.com/embed/example3',
      duration: '2:20'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openVideo = (url: string) => {
    setCurrentVideo(url);
    setShowVideoModal(true);
  };

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-hospital-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Resources</h1>
          <p className="text-xl">
            Stay updated with the latest health news, insurance information, and healthcare resources.
          </p>
        </div>
      </section>

      {/* Health Insurance Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Health Insurance Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are associated with leading health insurance providers to ensure cashless treatment for our patients.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {insurancePartners.map((partner, index) => (
              <div 
                key={partner.id}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center h-32"
                data-aos="fade-up"
                data-aos-delay={50 * (index % 5)}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16 max-w-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.outerHTML = `<div class="text-center">
                      <div class="text-2xl font-bold text-primary">${partner.name}</div>
                      <div class="text-xs text-gray-500">Insurance Partner</div>
                    </div>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Patient Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our patients about their experiences at Sri Ananth Hospital
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-8 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-6 md:mb-0 md:mr-8 overflow-hidden">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://ui-avatars.com/api/?name=' + 
                        encodeURIComponent(testimonials[currentTestimonial].name) + 
                        '&background=random';
                    }}
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 italic mb-4">"{testimonials[currentTestimonial].content}"</p>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={prevTestimonial}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>

            <div className="flex justify-center space-x-2 mb-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentTestimonial === index ? 'bg-primary w-8' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Video Testimonials */}
          <div className="mt-16">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Video Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch our patients share their success stories and experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoTestimonials.map((video, index) => (
                <div 
                  key={video.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index % 3)}
                >
                  <div className="relative group cursor-pointer" onClick={() => openVideo(video.videoUrl)}>
                    <div className="relative pt-[56.25%] bg-gray-100">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/800x450?text=Sri+Ananth+Hospital';
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-primary fill-current ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12" data-aos="fade-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Health Articles & Blog</h2>
              <p className="text-gray-600 mt-2">Stay informed with our health and wellness resources</p>
            </div>
            <Button variant="outline" className="hidden sm:flex items-center gap-2">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                data-aos="fade-up"
                data-aos-delay={100 * (index % 3)}
              >
                <div className="relative pt-[56.25%] bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://source.unsplash.com/random/600x400/?${post.category.toLowerCase()}`;
                    }}
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-primary self-start">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 sm:hidden">
            <Button variant="outline" className="flex items-center gap-2 mx-auto">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We value your feedback. Share your experience with us or read more testimonials from our patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact#testimonial">Share Your Story</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <a href="tel:+919966151626">Call: +91 9966151626</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setShowVideoModal(false)}>
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
              onClick={() => setShowVideoModal(false)}
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe 
                src={`${currentVideo}?autoplay=1`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Patient Testimonial"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
