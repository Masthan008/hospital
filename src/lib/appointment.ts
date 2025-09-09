import { v4 as uuidv4 } from 'uuid';

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  reason: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DoctorAvailability {
  doctorId: string;
  workingHours: {
    [day: string]: {
      start: string;
      end: string;
      isAvailable: boolean;
    };
  };
  unavailableDates: string[];
  timeSlotDuration: number; // in minutes
}

// In-memory storage (replace with database in production)
const appointments: Appointment[] = [];
const doctorAvailabilities: DoctorAvailability[] = [];

// Initialize default availability for doctors
function initializeDoctorAvailability(doctorId: string) {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const workingHours = days.reduce((acc, day) => {
    acc[day] = {
      start: '09:00',
      end: '17:00',
      isAvailable: day !== 'sunday'
    };
    return acc;
  }, {} as any);

  doctorAvailabilities.push({
    doctorId,
    workingHours,
    unavailableDates: [],
    timeSlotDuration: 30
  });
}

export async function getAvailableSlots(doctorId: string, date: string): Promise<string[]> {
  const doctor = doctorAvailabilities.find(d => d.doctorId === doctorId);
  if (!doctor) {
    initializeDoctorAvailability(doctorId);
    return getAvailableSlots(doctorId, date);
  }

  const day = new Date(date).toLocaleDateString('en-US', { weekday: 'lowercase' });
  const workingHours = doctor.workingHours[day];
  
  if (!workingHours || !workingHours.isAvailable) {
    return [];
  }

  const slots: string[] = [];
  let currentTime = workingHours.start;
  
  while (currentTime < workingHours.end) {
    const slotDate = new Date(`${date}T${currentTime}`);
    if (slotDate > new Date()) { // Only future slots
      slots.push(currentTime);
    }
    
    // Add time slot duration
    const [hours, minutes] = currentTime.split(':').map(Number);
    const dateObj = new Date();
    dateObj.setHours(hours, minutes + doctor.timeSlotDuration);
    currentTime = `${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
  }

  // Filter out booked slots
  const bookedSlots = appointments
    .filter(a => a.doctorId === doctorId && a.date === date && a.status === 'scheduled')
    .map(a => a.time);

  return slots.filter(slot => !bookedSlots.includes(slot));
}

export async function bookAppointment(appointment: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt' | 'status'>): Promise<Appointment> {
  const newAppointment: Appointment = {
    ...appointment,
    id: uuidv4(),
    status: 'scheduled',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  appointments.push(newAppointment);
  
  // In a real app, send confirmation email/SMS here
  console.log(`Sending confirmation for appointment ${newAppointment.id}`);
  
  return newAppointment;
}

export async function cancelAppointment(appointmentId: string): Promise<boolean> {
  const appointment = appointments.find(a => a.id === appointmentId);
  if (appointment) {
    appointment.status = 'cancelled';
    appointment.updatedAt = new Date().toISOString();
    
    // In a real app, send cancellation email/SMS here
    console.log(`Sending cancellation for appointment ${appointmentId}`);
    
    return true;
  }
  return false;
}

export async function getDoctorAppointments(doctorId: string): Promise<Appointment[]> {
  return appointments.filter(a => a.doctorId === doctorId);
}

export async function getPatientAppointments(patientId: string): Promise<Appointment[]> {
  return appointments.filter(a => a.patientId === patientId);
}

// Initialize some test data
initializeDoctorAvailability('1');
initializeDoctorAvailability('2');
initializeDoctorAvailability('3');
