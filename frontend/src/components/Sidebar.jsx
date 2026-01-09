import {
  Home,
  Users,
  Car,
  Truck,
  CreditCard,
  Gift,
  Star,
  FileText,
  LogOut,
} from "lucide-react";
function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white border-r flex flex-col justify-between">
      
      {/* Top Logo */}
      <div>
        <div className="px-6 py-5 text-2xl font-bold text-orange-500">
          Logo
        </div>

        {/* Menu */}
        <nav className="px-4 space-y-2">
          <MenuItem icon={<Home size={18} />} text="Dashboard" active />
          <MenuItem icon={<Users size={18} />} text="User Management" />
          <MenuItem icon={<Car size={18} />} text="Ride Management" />
          <MenuItem icon={<Truck size={18} />} text="Vehicle Management" />
          <MenuItem icon={<CreditCard size={18} />} text="Payments & Wallet" />
          <MenuItem icon={<Gift size={18} />} text="Promotions" />
          <MenuItem icon={<Star size={18} />} text="Ratings & Feedback" />
          <MenuItem icon={<FileText size={18} />} text="Reports" />
        </nav>
      </div>

      {/* Logout */}
      <div className="px-6 py-4">
        <button className="flex items-center gap-2 text-red-500 font-medium">
          <LogOut size={18} />
          Log Out
        </button>
      </div>
    </div>
  );
}

function MenuItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer
        ${
          active
            ? "bg-orange-100 text-orange-600 font-medium"
            : "text-gray-600 hover:bg-gray-100"
        }
      `}
    >
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  );
}

export default Sidebar;
