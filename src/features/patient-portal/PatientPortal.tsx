import { useState } from 'react';
import { PatientLogin } from './PatientLogin';
import { PatientDashboard } from './PatientDashboard';

export function PatientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [patientData, setPatientData] = useState(null);

  const handleLogin = (data: any) => {
    setPatientData(data);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPatientData(null);
  };

  if (!isLoggedIn) {
    return <PatientLogin onLogin={handleLogin} />;
  }

  return <PatientDashboard patientData={patientData} onLogout={handleLogout} />;
}