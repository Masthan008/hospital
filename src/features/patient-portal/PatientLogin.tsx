import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Eye, EyeOff, User, Lock, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface PatientLoginProps {
  onLogin: (patientData: any) => void;
}

export function PatientLogin({ onLogin }: PatientLoginProps) {
  const [formData, setFormData] = useState({
    patientId: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock patient data
      const mockPatientData = {
        id: formData.patientId,
        name: 'John Doe',
        email: 'john.doe@email.com',
        phone: '+91 9876543210',
        dateOfBirth: '1990-05-15',
        bloodGroup: 'O+',
        address: '123 Main Street, Bangalore',
        emergencyContact: '+91 9876543211'
      };

      toast.success('Login successful! Welcome back.');
      onLogin(mockPatientData);
    } catch (error) {
      toast.error('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-hospital-green/10 via-white to-hospital-blue/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8" data-aos="fade-down">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-hospital-green rounded-full mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Patient Portal</h1>
          <p className="text-gray-600">Access your medical records and health information</p>
        </div>

        <Card className="shadow-xl" data-aos="fade-up" data-aos-delay="200">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Sign In
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="patientId" className="text-sm font-medium text-gray-700">
                  Patient ID
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="patientId"
                    name="patientId"
                    type="text"
                    placeholder="Enter your patient ID"
                    value={formData.patientId}
                    onChange={handleInputChange}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-hospital-green hover:bg-hospital-green/90 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>

              <div className="text-center space-y-4">
                <NavLink 
                  to="/patient-portal/forgot-password" 
                  className="text-sm text-hospital-green hover:text-hospital-green/80 hover:underline"
                >
                  Forgot your password?
                </NavLink>
                
                <div className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <NavLink 
                    to="/patient-portal/register" 
                    className="text-hospital-green hover:text-hospital-green/80 font-medium hover:underline"
                  >
                    Register here
                  </NavLink>
                </div>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-xs text-gray-500 text-center">
                <p>For assistance, please contact:</p>
                <p className="font-medium text-hospital-green">+91 99661 51626</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-xs text-gray-500" data-aos="fade-up" data-aos-delay="400">
          <p>Your health information is secure and protected</p>
        </div>
      </div>
    </div>
  );
}