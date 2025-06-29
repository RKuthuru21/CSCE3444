
import { Calendar, DollarSign, Utensils, Map, Heart, Car, Trophy, Users } from "lucide-react";

const HomePage = () => {
  const quickLinks = [
    { icon: Calendar, label: "Canvas", color: "bg-blue-100 text-blue-600" },
    { icon: DollarSign, label: "Financial Aid", color: "bg-green-100 text-green-600" },
    { icon: Utensils, label: "Dining", color: "bg-orange-100 text-orange-600" },
    { icon: Map, label: "Campus Map", color: "bg-purple-100 text-purple-600" },
    { icon: Heart, label: "Health", color: "bg-red-100 text-red-600" },
    { icon: Car, label: "Parking", color: "bg-gray-100 text-gray-600" },
    { icon: Trophy, label: "Athletics", color: "bg-yellow-100 text-yellow-600" },
    { icon: Users, label: "Student Life", color: "bg-indigo-100 text-indigo-600" },
  ];

  const todaysSchedule = [
    {
      code: "CSCE 2610",
      name: "Computer Science Fundamentals",
      time: "2:00 PM - 3:20 PM",
      location: "Discovery Park F104"
    }
  ];

  const campusEvents = [
    {
      title: "Student Organization Fair",
      description: "Discover student organizations and clubs",
      location: "Union Ballroom",
      time: "10:00 AM",
      date: "Jun 18"
    },
    {
      title: "Career Development Workshop",
      description: "Resume building and interview tips",
      location: "Career Center",
      time: "2:00 PM",
      date: "Jun 20"
    }
  ];

  const athleticsEvents = [
    {
      title: "Mean Green Football vs SMU",
      description: "Conference Championship Game",
      location: "Apogee Stadium",
      time: "7:00 PM",
      date: "Jun 22"
    },
    {
      title: "Women's Basketball vs UTSA",
      description: "Conference Tournament",
      location: "Super Pit",
      time: "6:00 PM",
      date: "Jun 24"
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl p-6 text-white relative overflow-hidden">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-slate-800 rounded-full px-3 py-1 text-sm font-semibold">
            UNT
          </div>
          <div className="bg-slate-800 rounded-full p-2">
            <Users size={16} />
          </div>
        </div>
        <div className="text-center mb-4">
          <div className="text-sm opacity-90">UNT Campus Image</div>
        </div>
        <div>
          <h1 className="text-xl font-bold">Good Evening, Rithvik!</h1>
          <p className="text-sm opacity-90">Today is Monday, June 16</p>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
        <div className="grid grid-cols-4 gap-3">
          {quickLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 rounded-xl hover:scale-105 transition-transform cursor-pointer"
            >
              <div className={`p-3 rounded-full ${link.color} mb-2`}>
                <link.icon size={20} />
              </div>
              <span className="text-xs font-medium text-center">{link.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Schedule */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Today's Schedule</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          {todaysSchedule.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="bg-slate-700 rounded p-2">
                <Calendar size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">{item.code}</h3>
                <p className="text-sm text-gray-600">{item.name}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
                <p className="text-sm font-medium text-slate-700">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Events */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Campus Events</h2>
        <div className="space-y-3">
          {campusEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-slate-800">{event.title}</h3>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {event.date}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{event.description}</p>
              <p className="text-sm text-gray-500">{event.location} • {event.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Athletics Events */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Athletics Events</h2>
        <div className="space-y-3">
          {athleticsEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-slate-800">{event.title}</h3>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {event.date}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{event.description}</p>
              <p className="text-sm text-gray-500">{event.location} • {event.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Follow UNT */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Follow UNT</h2>
        <div className="flex justify-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">IG</span>
          </div>
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">SC</span>
          </div>
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">FB</span>
          </div>
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">TT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
