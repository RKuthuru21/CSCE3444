
import { Link, useLocation } from "react-router-dom";
import { Home, Menu, Calendar, Star, Settings } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/menu", icon: Menu, label: "Menu" },
    { path: "/calendar", icon: Calendar, label: "Calendar" },
    { path: "/favorites", icon: Star, label: "Favorites" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
      <div className="flex justify-around py-2">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive 
                  ? "text-blue-600" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon size={20} className={isActive ? "fill-current" : ""} />
              <span className="text-xs mt-1 font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
