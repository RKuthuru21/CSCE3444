
import { 
  Moon, 
  Type, 
  Accessibility, 
  Link, 
  User, 
  Users, 
  Bell, 
  BellRing, 
  Smartphone, 
  RotateCcw, 
  Trash2, 
  FileText, 
  File, 
  Shield 
} from "lucide-react";

const SettingsPage = () => {
  const settingsSections = [
    {
      title: "Personalization",
      items: [
        { icon: Moon, label: "Dark Mode", hasToggle: true, isEnabled: false },
        { icon: Type, label: "Font Size", hasArrow: true },
        { icon: Accessibility, label: "Accessibility Settings", hasArrow: true },
      ]
    },
    {
      title: "Account",
      items: [
        { icon: Link, label: "Signed-in Services", hasArrow: true },
        { icon: User, label: "Profile Info", hasArrow: true },
        { icon: Users, label: "Account", hasArrow: true },
      ]
    },
    {
      title: "Notifications",
      items: [
        { icon: Bell, label: "Push Notification Settings", hasArrow: true },
        { icon: BellRing, label: "App Notification Preferences", hasArrow: true },
      ]
    },
    {
      title: "Device/App Settings",
      items: [
        { icon: Smartphone, label: "Device Info", hasArrow: true },
        { icon: RotateCcw, label: "Reset This App", hasArrow: true },
        { icon: Trash2, label: "Delete My Info", hasArrow: true },
      ]
    },
    {
      title: "Privacy",
      items: [
        { icon: FileText, label: "Disclosure Notice", hasArrow: true },
        { icon: File, label: "Terms and Conditions", hasArrow: true },
        { icon: Shield, label: "All Rights Reserved", hasArrow: true },
      ]
    }
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Settings</h1>
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <User size={20} className="text-gray-600" />
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h2>
            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <item.icon size={20} className="text-gray-600" />
                    <span className="text-gray-800">{item.label}</span>
                  </div>
                  
                  {item.hasToggle && (
                    <div className={`
                      w-12 h-6 rounded-full transition-colors cursor-pointer
                      ${item.isEnabled ? 'bg-blue-500' : 'bg-gray-300'}
                    `}>
                      <div className={`
                        w-5 h-5 bg-white rounded-full mt-0.5 transition-transform
                        ${item.isEnabled ? 'translate-x-6' : 'translate-x-0.5'}
                      `} />
                    </div>
                  )}
                  
                  {item.hasArrow && (
                    <div className="text-gray-400">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
