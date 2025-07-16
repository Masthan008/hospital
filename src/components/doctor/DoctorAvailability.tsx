import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
// Simple toggle button implementation
const ToggleButton = ({ checked, onChange, disabled = false }: { checked: boolean, onChange: (checked: boolean) => void, disabled?: boolean }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={() => onChange(!checked)}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
      checked ? 'bg-primary' : 'bg-input'
    }`}
  >
    <span
      className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${
        checked ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';


interface DoctorAvailabilityProps {
  doctorId: number;
  onStatusChange?: (available: boolean) => void;
  isAdmin?: boolean;
}

export function DoctorAvailability({ doctorId, onStatusChange, isAdmin = false }: DoctorAvailabilityProps) {
  const [isAvailable, setIsAvailable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [leaveDate, setLeaveDate] = useState('');
  const [upcomingLeaves, setUpcomingLeaves] = useState<string[]>([]);

  useEffect(() => {
    // In a real app, fetch doctor's current status from API
    const fetchDoctorStatus = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        // Mock data - in real app, this would come from your backend
        const mockStatus = true; // Default to available
        setIsAvailable(mockStatus);
      } catch (error) {
        console.error('Error fetching doctor status:', error);
        toast.error('Failed to load doctor status');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctorStatus();
  }, [doctorId]);

  const handleStatusChange = async (newStatus: boolean) => {
    try {
      setIsLoading(true);
      // In a real app, this would be an API call to update the status
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setIsAvailable(newStatus);
      onStatusChange?.(newStatus);
      
      toast.success(`Status updated: ${newStatus ? 'Available' : 'On Leave'}`);
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddLeave = () => {
    if (!leaveDate) return;
    
    const newLeaves = [...upcomingLeaves, leaveDate];
    setUpcomingLeaves(newLeaves);
    setLeaveDate('');
    
    // In a real app, this would update the backend
    toast.success('Leave date added');
  };

  const handleRemoveLeave = (date: string) => {
    const newLeaves = upcomingLeaves.filter(d => d !== date);
    setUpcomingLeaves(newLeaves);
    // In a real app, this would update the backend
    toast.success('Leave date removed');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {isAdmin ? (
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <ToggleButton
              checked={isAvailable}
              onChange={handleStatusChange}
              disabled={isLoading}
            />
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {isAvailable ? 'Available Today' : 'On Leave'}
            </label>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {isAvailable 
              ? 'Patients can book appointments.'
              : 'No appointments available.'}
          </div>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <div className={`h-2 w-2 rounded-full ${
            isAvailable ? 'bg-green-500' : 'bg-red-500'
          }`} />
          <span className="text-sm font-medium">
            {isAvailable ? 'Available Today' : 'Not Available'}
          </span>
        </div>
      )}

      {isAdmin && (
        <div className="mt-4 space-y-3">
          <h4 className="text-sm font-medium">Upcoming Leave Dates</h4>
          <div className="flex space-x-2">
            <input
              type="date"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={leaveDate}
              onChange={(e) => setLeaveDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
            <Button onClick={handleAddLeave} size="sm">
              Add
            </Button>
          </div>
          
          {upcomingLeaves.length > 0 && (
            <div className="mt-2 space-y-1">
              {upcomingLeaves.map((date) => (
                <div key={date} className="flex items-center justify-between p-2 text-sm bg-muted/50 rounded">
                  <span>{new Date(date).toLocaleDateString()}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRemoveLeave(date)}
                    className="h-6 w-6 p-0 text-destructive hover:bg-destructive/10"
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
