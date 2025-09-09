import { useState, useEffect } from 'react';
import { format, startOfWeek, addDays, isSameDay, isBefore, isAfter } from 'date-fns';
import { Calendar as CalendarIcon, Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface TimeSlot {
  start: string;
  end: string;
}

interface WorkingHours {
  [day: string]: {
    isWorking: boolean;
    slots: TimeSlot[];
  };
}

interface UnavailableDate {
  date: string;
  reason?: string;
}

interface DoctorCalendarProps {
  doctorId: string;
}

export function DoctorCalendarManagement({ doctorId }: DoctorCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [workingHours, setWorkingHours] = useState<WorkingHours>({});
  const [unavailableDates, setUnavailableDates] = useState<UnavailableDate[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newUnavailableDate, setNewUnavailableDate] = useState<{
    date: Date | undefined;
    reason: string;
  }>({ date: undefined, reason: '' });

  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedWorkingHours = localStorage.getItem(`doctor_${doctorId}_working_hours`);
    if (savedWorkingHours) {
      setWorkingHours(JSON.parse(savedWorkingHours));
    } else {
      // Default working hours (9 AM - 5 PM, Mon-Fri)
      const defaultWorkingHours: WorkingHours = {};
      days.forEach(day => {
        const isWeekend = day === 'saturday' || day === 'sunday';
        defaultWorkingHours[day] = {
          isWorking: !isWeekend,
          slots: isWeekend ? [] : [{ start: '09:00', end: '17:00' }]
        };
      });
      setWorkingHours(defaultWorkingHours);
    }

    const savedUnavailableDates = localStorage.getItem(`doctor_${doctorId}_unavailable_dates`);
    if (savedUnavailableDates) {
      setUnavailableDates(JSON.parse(savedUnavailableDates));
    }
  }, [doctorId]);

  // Save to localStorage when data changes
  useEffect(() => {
    if (Object.keys(workingHours).length > 0) {
      localStorage.setItem(
        `doctor_${doctorId}_working_hours`,
        JSON.stringify(workingHours)
      );
    }
  }, [workingHours, doctorId]);

  useEffect(() => {
    localStorage.setItem(
      `doctor_${doctorId}_unavailable_dates`,
      JSON.stringify(unavailableDates)
    );
  }, [unavailableDates, doctorId]);

  const toggleWorkingDay = (day: string) => {
    setWorkingHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        isWorking: !prev[day]?.isWorking,
        slots: !prev[day]?.isWorking ? [{ start: '09:00', end: '17:00' }] : []
      }
    }));
  };

  const updateTimeSlot = (day: string, index: number, field: 'start' | 'end', value: string) => {
    const updatedSlots = [...(workingHours[day]?.slots || [])];
    updatedSlots[index] = { ...updatedSlots[index], [field]: value };
    
    setWorkingHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: updatedSlots
      }
    }));
  };

  const addTimeSlot = (day: string) => {
    setWorkingHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: [...(prev[day]?.slots || []), { start: '09:00', end: '10:00' }]
      }
    }));
  };

  const removeTimeSlot = (day: string, index: number) => {
    const updatedSlots = [...(workingHours[day]?.slots || [])];
    updatedSlots.splice(index, 1);
    
    setWorkingHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: updatedSlots
      }
    }));
  };

  const handleAddUnavailableDate = () => {
    if (!newUnavailableDate.date) return;
    
    const dateStr = format(newUnavailableDate.date, 'yyyy-MM-dd');
    
    if (unavailableDates.some(d => d.date === dateStr)) {
      toast.error('This date is already marked as unavailable');
      return;
    }
    
    setUnavailableDates(prev => [
      ...prev,
      {
        date: dateStr,
        reason: newUnavailableDate.reason || 'Unavailable'
      }
    ]);
    
    setNewUnavailableDate({ date: undefined, reason: '' });
    toast.success('Date marked as unavailable');
  };

  const removeUnavailableDate = (dateToRemove: string) => {
    setUnavailableDates(prev => prev.filter(d => d.date !== dateToRemove));
    toast.success('Date removed from unavailable list');
  };

  const isDateUnavailable = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return unavailableDates.some(d => d.date === dateStr);
  };

  const getDayClass = (day: string) => {
    const baseClass = 'p-4 border rounded-lg';
    const isWeekend = day === 'saturday' || day === 'sunday';
    const isWorking = workingHours[day]?.isWorking;
    
    if (isWeekend) {
      return `${baseClass} bg-gray-100`;
    }
    
    return isWorking 
      ? `${baseClass} bg-green-50 border-green-200` 
      : `${baseClass} bg-red-50 border-red-200`;
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-6">Weekly Schedule</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-8">
          {days.map((day, index) => {
            const dayDate = addDays(startOfWeek(new Date()), index);
            const dayName = format(dayDate, 'EEE');
            const isWeekend = day === 'saturday' || day === 'sunday';
            const isWorking = workingHours[day]?.isWorking;
            
            return (
              <div key={day} className={getDayClass(day)}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{dayName}</span>
                  <button
                    onClick={() => toggleWorkingDay(day)}
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      isWorking
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                    disabled={isWeekend}
                  >
                    {isWeekend ? 'Weekend' : isWorking ? 'Working' : 'Off'}
                  </button>
                </div>
                
                {!isWeekend && isWorking && (
                  <div className="space-y-2 mt-2">
                    {workingHours[day]?.slots?.map((slot, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <Input
                            type="time"
                            value={slot.start}
                            onChange={(e) => updateTimeSlot(day, idx, 'start', e.target.value)}
                            className="h-8 text-xs w-20"
                          />
                          <span>to</span>
                          <Input
                            type="time"
                            value={slot.end}
                            onChange={(e) => updateTimeSlot(day, idx, 'end', e.target.value)}
                            className="h-8 text-xs w-20"
                            min={slot.start}
                          />
                        </div>
                        <button
                          onClick={() => removeTimeSlot(day, idx)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                    
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-full mt-2 text-xs"
                      onClick={() => addTimeSlot(day)}
                    >
                      Add Time Slot
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">Mark Unavailable Dates</h3>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !newUnavailableDate.date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {newUnavailableDate.date ? (
                      format(newUnavailableDate.date, 'PPP')
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={newUnavailableDate.date}
                    onSelect={(date) => setNewUnavailableDate(prev => ({ ...prev, date: date || undefined }))}
                    disabled={(date) => isBefore(date, new Date()) || isDateUnavailable(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="flex-1">
              <Label>Reason (Optional)</Label>
              <Input
                placeholder="E.g., Conference, Vacation"
                value={newUnavailableDate.reason}
                onChange={(e) => setNewUnavailableDate(prev => ({ ...prev, reason: e.target.value }))}
              />
            </div>
            
            <div className="flex items-end">
              <Button
                onClick={handleAddUnavailableDate}
                disabled={!newUnavailableDate.date}
                className="h-10"
              >
                Add
              </Button>
            </div>
          </div>
          
          {unavailableDates.length > 0 && (
            <div className="border rounded-md">
              <h4 className="font-medium p-3 border-b bg-gray-50">Upcoming Unavailable Dates</h4>
              <ul className="divide-y">
                {unavailableDates
                  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                  .map((item) => (
                    <li key={item.date} className="p-3 flex justify-between items-center">
                      <div>
                        <span className="font-medium">
                          {format(new Date(item.date), 'PPP')}
                        </span>
                        {item.reason && (
                          <span className="text-sm text-gray-500 ml-2">
                            ({item.reason})
                          </span>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeUnavailableDate(item.date)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Calendar Preview</h2>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDay}
            onSelect={(day) => day && setSelectedDay(day)}
            className="rounded-md border"
            disabled={(date) => {
              const dayName = format(date, 'EEEE').toLowerCase();
              return !workingHours[dayName]?.isWorking || isDateUnavailable(date);
            }}
          />
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium mb-2">
            {format(selectedDay, 'EEEE, MMMM d, yyyy')}
          </h3>
          
          {isDateUnavailable(selectedDay) ? (
            <div className="text-red-500">
              Marked as unavailable
            </div>
          ) : !workingHours[format(selectedDay, 'EEEE').toLowerCase()]?.isWorking ? (
            <div className="text-gray-500">
              Not a working day
            </div>
          ) : (
            <div className="space-y-2">
              <h4 className="font-medium">Available Time Slots:</h4>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant="outline"
                    className="justify-center"
                    disabled={/* Add logic to disable booked slots */ false}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
