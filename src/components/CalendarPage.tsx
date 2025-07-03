import React, { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Calendar as CalendarIcon, Clock, Users } from "lucide-react";
import { getEvents, addEvent, getEventsForDate, hasEventsForDate, deleteEvent } from "@/utils/events";

const CalendarPage = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
  const [selectedDay, setSelectedDay] = useState(today);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", time: "", location: "" });
  const [_, forceUpdate] = useState(0); // for rerender

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
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonth.getDate() - i,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        date: new Date(year, month - 1, prevMonth.getDate() - i)
      });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const d = new Date(year, month, day);
      days.push({
        day,
        isCurrentMonth: true,
        isToday: d.toDateString() === today.toDateString(),
        isSelected: d.toDateString() === selectedDay.toDateString(),
        hasEvent: hasEventsForDate(d.toISOString().slice(0, 10)),
        date: d
      });
    }
    const remainingCells = 42 - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        date: new Date(year, month + 1, day)
      });
    }
    return days;
  };

  const events = getEventsForDate(selectedDay.toISOString().slice(0, 10));

  const navigateMonth = (direction: number) => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + direction, 1));
  };

  const handleDayClick = (dateObj: any) => {
    if (dateObj.isCurrentMonth) setSelectedDay(dateObj.date);
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    addEvent({
      ...form,
      date: selectedDay.toISOString().slice(0, 10)
    });
    setForm({ title: "", time: "", location: "" });
    setShowModal(false);
    forceUpdate(x => x + 1);
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Calendar</h1>
        <button className="p-2 hover:bg-gray-100 rounded-full" onClick={() => { setSelectedDay(today); setCurrentDate(today); }}>
          <RotateCcw size={20} className="text-gray-600" />
        </button>
      </div>
      {/* Calendar Header */}
      <div className="bg-white rounded-xl border border-gray-200 mb-6">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button onClick={() => navigateMonth(-1)} className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <h2 className="text-lg font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
        {/* Calendar Grid */}
        <div className="p-4">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map(day => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">{day}</div>
            ))}
          </div>
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
                    : 'text-gray-300'}
                `}
                onClick={() => handleDayClick(date)}
              >
                {date.day}
                {date.hasEvent && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                )}
                {date.isToday && <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-500 rounded-full" />}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Today's Events */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Events for {selectedDay.toLocaleDateString()}</h2>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors" onClick={() => setShowModal(true)}>
          + Add Event
        </button>
      </div>
      {/* Events List */}
      <div className="space-y-4">
        {events.length === 0 && <div className="text-gray-500">No events for this day.</div>}
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-4 flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="bg-slate-700 rounded p-2 mt-1">
                <CalendarIcon size={16} className="text-white" />
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
            <button
              className="ml-4 text-red-500 hover:text-red-700 text-xs font-semibold"
              onClick={() => { deleteEvent(selectedDay.toISOString().slice(0, 10), index); forceUpdate(x => x + 1); }}
              title="Delete event"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {/* Add Event Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <form onSubmit={handleAddEvent} className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-3 w-80">
            <h2 className="text-lg font-semibold mb-2">Add Event</h2>
            <input type="text" placeholder="Title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="border rounded px-3 py-2" required />
            <input type="text" placeholder="Time (e.g. 2:00 PM - 3:00 PM)" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} className="border rounded px-3 py-2" required />
            <input type="text" placeholder="Location" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} className="border rounded px-3 py-2" required />
            <div className="flex gap-2 mt-2">
              <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded w-full">Add</button>
              <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded w-full" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
