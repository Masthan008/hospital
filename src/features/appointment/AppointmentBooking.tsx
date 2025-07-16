import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format, isAfter } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { sendAppointmentNotification } from '@/services/notificationService';
import { toast } from 'sonner';


const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

export function AppointmentBooking() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [step, setStep] = useState(1);
  interface FormData {
    name: string;
    email: string;
    phone: string;
    reason: string;
    receiveSMS: boolean;
    [key: string]: string | boolean; // Allow dynamic property access
  }

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    reason: '',
    receiveSMS: true
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' 
      ? (target as HTMLInputElement).checked 
      : target.value;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Send reminder 24 hours before appointment
  useEffect(() => {
    if (step === 3 && date) {
      const appointmentDate = new Date(date);
      const reminderTime = new Date(appointmentDate.getTime() - 24 * 60 * 60 * 1000);
      
      if (isAfter(reminderTime, new Date())) {
        const timeUntilReminder = reminderTime.getTime() - Date.now();
        const reminderTimer = setTimeout(() => {
          if (formData.email) {
            sendAppointmentNotification({
              to: formData.email,
              name: formData.name,
              phone: formData.phone,
              appointmentDate: date.toISOString(),
              appointmentTime: selectedTime,
              type: 'reminder',
              location: 'Sri Ananth Hospital, Bangalore'
            }, formData.receiveSMS);
          }
        }, timeUntilReminder);

        return () => clearTimeout(reminderTimer);
      }
    }
  }, [step, date, selectedTime, formData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Handle form submission based on current step
    if (step === 1) {
      // Validate date and time selection
      if (!date || !selectedTime) {
        toast.error('Please select a date and time for your appointment');
        return;
      }
      setStep(2);
    } 
    else if (step === 2) {
      // Validate contact information
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error('Please fill in all required fields');
        return;
      }
      setStep(3);
    }
    else if (step === 3) {
      // Final submission
      setIsSubmitting(true);
      try {
        // In a real app, this would be an API call to your backend
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Send confirmation notification
        if (formData.email) {
          await sendAppointmentNotification({
            to: formData.email,
            name: formData.name,
            phone: formData.phone,
            appointmentDate: date?.toISOString() || new Date().toISOString(),
            appointmentTime: selectedTime,
            type: 'confirmation',
            location: 'Sri Ananth Hospital, Bangalore'
          }, formData.receiveSMS);
          
          // Schedule follow-up email for 1 day after appointment
          if (date) {
            const followUpTime = new Date(date.getTime() + 24 * 60 * 60 * 1000);
            const timeUntilFollowUp = followUpTime.getTime() - Date.now();
            
            if (timeUntilFollowUp > 0) {
              setTimeout(() => {
                sendAppointmentNotification({
                  to: formData.email,
                  name: formData.name,
                  phone: formData.phone,
                  appointmentDate: date.toISOString(),
                  appointmentTime: selectedTime,
                  type: 'followup'
                }, formData.receiveSMS);
              }, timeUntilFollowUp);
            }
          }
        }
        
        toast.success('Appointment booked successfully!');
        
        // Reset form after successful submission
        setDate(new Date());
        setSelectedTime('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          reason: '',
          receiveSMS: true
        } as FormData);
        setStep(1);
        
      } catch (error) {
        console.error('Error booking appointment:', error);
        toast.error('Failed to book appointment. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          {step === 1 ? 'Select Date & Time' : step === 2 ? 'Your Information' : 'Appointment Confirmed!'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Select Date</h3>
                <div className="rounded-md border">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Select Time Slot</h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                      className="h-12"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit">
                Continue
              </Button>
            </div>
          </form>
        )}
        
        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <div className="w-full">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Your phone number"
                    required
                  />
                  <div className="mt-2 flex items-center">
                    <input
                      type="checkbox"
                      id="receiveSMS"
                      name="receiveSMS"
                      checked={formData.receiveSMS as boolean}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 rounded"
                    />
                    <label htmlFor="receiveSMS" className="ml-2 text-sm text-gray-600">
                      Receive SMS notifications
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="reason">
                Reason for Visit
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">Select a reason</option>
                <option value="general">General Consultation</option>
                <option value="followup">Follow-up Visit</option>
                <option value="emergency">Emergency</option>
                <option value="test">Lab Test</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="bg-blue-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Appointment Summary</h4>
              <p>Date: {date && format(date, 'PPP')}</p>
              <p>Time: {selectedTime}</p>
            </div>

            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {step === 3 ? 'Booking...' : 'Processing...'}
                  </>
                ) : step === 3 ? 'Book Appointment' : 'Continue'}
              </Button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div className="mt-6 flex justify-between">
            <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
              Back
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Continue'}
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Appointment Confirmed!</h3>
            <p className="text-gray-600 mb-6">
              We've sent the appointment details to {formData.email}
            </p>
            <div className="bg-blue-50 p-4 rounded-md text-left max-w-md mx-auto mb-6">
              <p className="font-medium">Appointment Details:</p>
              <p>Date: {date && format(date, 'PPP')}</p>
              <p>Time: {selectedTime}</p>
              <p>Name: {formData.name}</p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => window.print()}>
                Print Details
              </Button>
              <Button onClick={() => {
                setStep(1);
                setSelectedTime('');
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  reason: ''
                });
              }}>
                Book Another
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
