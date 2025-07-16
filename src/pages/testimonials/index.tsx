import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Hemanth Lagisetty',
      role: 'Patient',
      content: 'Multi-specialty hospitals are a great asset to any community, and this is especially true in non-metro towns where healthcare options may be limited. Sri Ananth Hospital is well-equipped and staffed with experienced healthcare professionals. The building has been remodeled to accommodate 50 beds overall. The facility was clean, well-maintained, and has ample parking for patients and visitors. Especially the new rooms are equipped with electronic beds, fridge, AC, TV etc at a very reasonable prices.',
      rating: 5,
      date: 'April 26, 2023'
    },
    {
      id: 2,
      name: 'Srinivas V',
      role: 'Patient',
      content: 'This is a highly equipped hospital relative to this place (Vikarabad). We visited the gynecologist Dr. Pavani at this hospital. She is highly qualified and experienced. We are fully satisfied with her treatment. This hospital\'s gynecology dept has better facilities compared to many hospitals in Hyderabad. If you are looking for best treatment in decent cost, this is the best hospital.',
      rating: 5,
      date: 'January 14, 2023'
    },
    {
      id: 3,
      name: 'Jayakar Bunny',
      role: 'Dental Patient',
      content: 'Sri Ananth Dental hospital is really very good DENTAL clinic, especially for the EHS(Employees Health Scheme) for the CASH LESS treatment given by the DR. SRUJAN SIR MDS(PERIODONTIST)......srujan sir is highly qualified dentist 🦷.',
      rating: 5,
      date: 'May 11, 2022'
    },
    {
      id: 4,
      name: 'Chaitanya Momula',
      role: 'Patient',
      content: 'Good doctors and friendly caring sisters. Comfortable facilities.',
      rating: 5,
      date: 'February 8, 2019'
    },
    {
      id: 5,
      name: 'Sudheer Reddy',
      role: 'Patient',
      content: 'Best in class & Friendly Doctors.',
      rating: 5,
      date: 'July 9, 2023'
    },
    {
      id: 6,
      name: 'Vishnuchary Kammari',
      role: 'Patient',
      content: 'Best hospital in Vikarabad',
      rating: 5,
      date: 'November 22, 2021'
    },
    {
      id: 7,
      name: 'Kommani Vara Prasad',
      role: 'Visitor',
      content: 'The staff is playful and chatting around. We were sitting in the reception, continuous sound and irritating chat. Clear negligence by staff. Junior Doctor is available, staff has no care at all for the doctor. The doctor was treating someone, staff is playing around and chatting with loud noise. Very irritative. Indisciplined staff.',
      rating: 2,
      date: 'October 21, 2022'
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
