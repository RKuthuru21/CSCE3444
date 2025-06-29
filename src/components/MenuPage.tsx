
import { ArrowLeft, Home, GraduationCap, Users, Settings as SettingsIcon } from "lucide-react";
import { Link } from "react-router-dom";

const MenuPage = () => {
  const menuSections = [
    {
      title: "Academics",
      icon: GraduationCap,
      items: [
        "Academic & Finances",
        "Canvas Dashboard",
        "Advising (Navigate)",
        "UNT Libraries",
        "Academic Progress"
      ]
    },
    {
      title: "Campus Life",
      icon: Users,
      items: [
        "Student Life",
        "Dining",
        "Housing",
        "Rec Sports",
        "Athletics",
        "Campus Map",
        "Parking & Transit",
        "TinderU"
      ]
    },
    {
      title: "Services",
      icon: SettingsIcon,
      items: [
        "MyUNT",
        "Email",
        "Health & Wellness",
        "IT Help Desk"
      ]
    }
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} className="text-gray-600" />
        </Link>
        <h1 className="text-xl font-semibold">Menu</h1>
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
          <Home size={24} className="text-gray-600" />
        </Link>
      </div>

      {/* Menu Sections */}
      <div className="space-y-6">
        {menuSections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Section Header */}
            <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="bg-slate-700 rounded-lg p-2">
                  <section.icon size={20} className="text-white" />
                </div>
                <h2 className="text-lg font-semibold text-slate-800">{section.title}</h2>
              </div>
              <div className="text-gray-400">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Section Items */}
            <div className="divide-y divide-gray-100">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center space-x-3 p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
