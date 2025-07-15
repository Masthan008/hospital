import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Heart Patient',
      content: 'The cardiac care I received at Sri Ananth Hospital was exceptional. The doctors were knowledgeable and caring throughout my treatment.',
      rating: 5,
      date: 'June 15, 2024'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Orthopedic Patient',
      content: 'My knee replacement surgery went smoothly, and the post-operative care was excellent. The staff was very supportive during my recovery.',
      rating: 5,
      date: 'May 28, 2024'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'General Medicine',
      content: 'The doctors took the time to listen to all my concerns and provided thorough explanations. Very professional and caring team.',
      rating: 4,
      date: 'June 5, 2024'
    },
    {
      id: 4,
      name: 'Sunita Reddy',
      role: 'Pediatric Care',
      content: 'The pediatric department is wonderful with children. My son was comfortable throughout his treatment. Highly recommended!',
      rating: 5,
      date: 'May 20, 2024'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Patient Testimonials</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear what our patients have to say about their experiences at Sri Ananth Hospital.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="h-full flex flex-col">
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < testimonial.rating 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">{testimonial.rating}/5</span>
              </div>
              <p className="text-gray-700 mb-4 flex-1">"{testimonial.content}"</p>
              <div className="mt-auto pt-4 border-t">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Share Your Experience</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We value your feedback. Share your experience with us and help us improve our services.
        </p>
        <a 
          href="https://g.co/kgs/example" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Write a Review
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
