import { AppointmentBooking } from "@/features/appointment/AppointmentBooking";

// Set the page title
document.title = "Book an Appointment | Sri Ananth Hospital";

const Appointment = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Book an Appointment</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule your visit with our expert doctors. Fast, secure, and easy to use.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <AppointmentBooking />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
            <p className="text-gray-600">Book appointments anytime, anywhere with our online system.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Confirmation</h3>
            <p className="text-gray-600">Get your appointment confirmed immediately.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Reminder Alerts</h3>
            <p className="text-gray-600">Receive timely reminders before your appointment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
