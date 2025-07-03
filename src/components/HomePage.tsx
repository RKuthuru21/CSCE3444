import { Calendar, DollarSign, Utensils, Map, Heart, Car, Trophy, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getEventsForDate } from "@/utils/events";

const HomePage = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { icon: Calendar, label: "Canvas", color: "bg-blue-100 text-blue-600", url: "https://unt.instructure.com" },
    { icon: DollarSign, label: "Financial Aid", color: "bg-green-100 text-green-600", url: "https://financialaid.unt.edu/index.html" },
    { icon: Utensils, label: "Dining", color: "bg-orange-100 text-orange-600", url: "https://dining.unt.edu/" },
    { icon: Map, label: "Campus Map", color: "bg-purple-100 text-purple-600", url: "https://linguistics.unt.edu/about-us/unt_campus_parking.pdf" },
    { icon: Heart, label: "Health", color: "bg-red-100 text-red-600", url: "https://studentaffairs.unt.edu/student-health-and-wellness-center/index.html" },
    { icon: Car, label: "Parking", color: "bg-gray-100 text-gray-600", url: "https://transportation.unt.edu/parking-on-campus.html" },
    { icon: Trophy, label: "Athletics", color: "bg-yellow-100 text-yellow-600", url: "https://meangreensports.com/" },
    { icon: Users, label: "Student Life", color: "bg-indigo-100 text-indigo-600", url: "https://www.unt.edu/student-life.html" },
  ];

  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  const todaysSchedule = getEventsForDate(todayStr);

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

  // Get user profile
  const profile = JSON.parse(localStorage.getItem("profile") || "{}");
  const name = profile.name || "";
  // Get local day and date
  const now = new Date();
  const dayName = now.toLocaleDateString(undefined, { weekday: "long" });
  const dateStr = now.toLocaleDateString(undefined, { month: "long", day: "numeric" });

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="relative rounded-xl overflow-hidden h-64 mb-6">
        {/* Background Image */}
        <img
          src="/unt-campus.jpg"
          alt="UNT Campus"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/60 z-10" />
        {/* Content Overlay */}
        <div className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-slate-800 rounded-full px-3 py-1 text-sm font-semibold bg-opacity-80">
              UNT
            </div>
            <div className="bg-slate-800 rounded-full p-2 bg-opacity-80">
              <Users size={16} />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Good {now.getHours() < 12 ? "Morning" : now.getHours() < 18 ? "Afternoon" : "Evening"}, {name}!</h1>
            <p className="text-sm opacity-90">Today is {dayName}, {dateStr}</p>
          </div>
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
              onClick={() => link.url && navigate(`/webview?url=${encodeURIComponent(link.url)}`)}
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
          {todaysSchedule.length === 0 && <div className="text-gray-500">No events for today.</div>}
          {todaysSchedule.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="bg-slate-700 rounded p-2">
                <Calendar size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.location}</p>
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
