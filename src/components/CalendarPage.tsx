
import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Calendar as CalendarIcon, Clock, Users } from "lucide-react";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 15)); // January 2025, 15th selected
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Previous month's trailing days
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonth.getDate() - i,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false
      });
    }
    
    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isToday: false,
        isSelected: day === 15, // January 15th is selected
        hasEvent: day === 16 || day === 20 // Events on 16th and 20th
      });
    }
    
    // Next month's leading days
    const remainingCells = 42 - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false
      });
    }
    
    return days;
  };

  const todaysEvents = [
    {
      title: "Biology 101 - Lecture",
      location: "Life Sciences Building, Room 205",
      time: "9:00 AM - 10:30 AM",
      icon: CalendarIcon
    },
    {
      title: "Student Council Meeting",
      location: "Student Union Building, Conference Room A",
      time: "2:00 PM - 3:30 PM",
      icon: Users
    },
    {
      title: "Fitness Class",
      location: "Recreation Center",
      time: "6:00 PM - 7:00 PM",
      icon: Clock
    }
  ];

  const navigateMonth = (direction: number) => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + direction, prev.getDate()));
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Calendar</h1>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <RotateCcw size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Calendar Header */}
      <div className="bg-white rounded-xl border border-gray-200 mb-6">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button 
            onClick={() => navigateMonth(-1)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <h2 className="text-lg font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button 
            onClick={() => navigateMonth(1)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="p-4">
          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map(day => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(currentDate).map((date, index) => (
              <div
                key={index}
                className={`
                  relative aspect-square flex items-center justify-center text-sm cursor-pointer rounded-lg
                  ${date.isCurrentMonth 
                    ? date.isSelected 
                      ? 'bg-black text-white font-semibold' 
                      : 'text-gray-900 hover:bg-gray-100'
                    : 'text-gray-300'
                  }
                `}
              >
                {date.day}
                {date.hasEvent && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Today's Events */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Today's Events</h2>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          + Add Event
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {todaysEvents.map((event, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-start space-x-3">
              <div className="bg-slate-700 rounded p-2 mt-1">
                <event.icon size={16} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 mb-1">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{event.location}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1" />
                  {event.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;
