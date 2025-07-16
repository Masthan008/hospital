interface Doctor {
  id: number;
  name: string;
  specialization: string;
  qualification: string;
  experience: string;
  image: string;
  department: string;
  available: boolean;
  bio: string;
  phone: string;
}

declare module '@/pages/doctors/doctorData' {
  export const doctors: Doctor[];
  export const departments: string[];
}
