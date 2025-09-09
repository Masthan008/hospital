// This service handles all notification-related functionality
// In a production environment, this would connect to actual email/SMS services

interface NotificationData {
  to: string;
  name: string;
  phone?: string;
  appointmentDate: string;
  appointmentTime: string;
  doctorName?: string;
  location?: string;
  type: 'confirmation' | 'reminder' | 'followup' | 'cancellation';
}

// Mock function to simulate sending an email
export const sendEmail = async (data: NotificationData): Promise<boolean> => {
  console.log('Sending email to:', data.to);
  console.log('Email type:', data.type);
  console.log('Appointment details:', {
    name: data.name,
    date: data.appointmentDate,
    time: data.appointmentTime,
    doctor: data.doctorName || 'Not specified'
  });
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return true; // In a real app, this would return the API response
};

// Mock function to simulate sending an SMS
export const sendSMS = async (phone: string, message: string): Promise<boolean> => {
  console.log('Sending SMS to:', phone);
  console.log('Message:', message);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return true; // In a real app, this would return the API response
};

// Generate email content based on notification type
const getEmailContent = (data: NotificationData) => {
  const baseContent = {
    subject: '',
    body: ''
  };

  const formattedDate = new Date(data.appointmentDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  switch (data.type) {
    case 'confirmation':
      return {
        subject: `Appointment Confirmed for ${formattedDate}`,
        body: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Your Appointment is Confirmed</h2>
            <p>Dear ${data.name},</p>
            <p>Your appointment has been successfully scheduled with ${data.doctorName || 'our specialist'}.</p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Date:</strong> ${formattedDate}</p>
              <p><strong>Time:</strong> ${data.appointmentTime}</p>
              ${data.location ? `<p><strong>Location:</strong> ${data.location}</p>` : ''}
            </div>
            <p>You will receive a reminder 24 hours before your appointment.</p>
            <p>If you need to reschedule or cancel, please contact us at least 24 hours in advance.</p>
            <p>Best regards,<br>Sri Ananth Hospital Team</p>
          </div>
        `
      };
    
    case 'reminder':
      return {
        subject: `Reminder: Upcoming Appointment on ${formattedDate}`,
        body: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Appointment Reminder</h2>
            <p>Dear ${data.name},</p>
            <p>This is a friendly reminder about your upcoming appointment with ${data.doctorName || 'our specialist'}.</p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Date:</strong> ${formattedDate}</p>
              <p><strong>Time:</strong> ${data.appointmentTime}</p>
              ${data.location ? `<p><strong>Location:</strong> ${data.location}</p>` : ''}
            </div>
            <p>Please arrive 15 minutes before your scheduled time.</p>
            <p>If you need to reschedule or cancel, please contact us as soon as possible.</p>
            <p>Best regards,<br>Sri Ananth Hospital Team</p>
          </div>
        `
      };

    case 'followup':
      return {
        subject: `How was your recent visit to Sri Ananth Hospital?`,
        body: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>We Value Your Feedback</h2>
            <p>Dear ${data.name},</p>
            <p>Thank you for choosing Sri Ananth Hospital for your recent visit on ${formattedDate}.</p>
            <p>We would love to hear about your experience. Your feedback helps us improve our services.</p>
            <div style="text-align: center; margin: 25px 0;">
              <a href="#" style="background: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Share Your Feedback
              </a>
            </div>
            <p>If you have any questions or concerns, please don't hesitate to contact us.</p>
            <p>Best regards,<br>Sri Ananth Hospital Team</p>
          </div>
        `
      };

    default:
      return baseContent;
  }
};

// Main function to handle all notification types
export const sendAppointmentNotification = async (data: NotificationData, sendSms = true) => {
  try {
    // Send email
    const emailContent = getEmailContent(data);
    await sendEmail({
      ...data,
      ...emailContent
    });

    // Send SMS if enabled and phone number is provided
    if (sendSms && data.to) {
      let smsMessage = '';
      
      switch (data.type) {
        case 'confirmation':
          smsMessage = `Appt confirmed: ${data.doctorName || 'Doctor'} on ${data.appointmentDate} at ${data.appointmentTime}. Reply STOP to opt-out.`;
          break;
        case 'reminder':
          smsMessage = `REMINDER: Your appt is tomorrow at ${data.appointmentTime}. Please arrive 15 mins early.`;
          break;
        case 'followup':
          smsMessage = `How was your recent visit? Share your feedback: [LINK]`;
          break;
      }

      if (smsMessage) {
        await sendSMS(data.to, smsMessage);
      }
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending notification:', error);
    return { success: false, error };
  }
};
